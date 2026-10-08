const tradingPage = document.querySelector('.trading-page');
const chartHost = document.querySelector('.trading-chart-host');
const chartCanvas = document.getElementById('tradingCanvas');
const ctx = chartCanvas.getContext('2d');
const querySymbol = new URLSearchParams(window.location.search).get('symbol');
const pathSegments = window.location.pathname.split('/').filter(Boolean);
const pathSymbol = pathSegments.length > 1 && pathSegments[pathSegments.length - 2] === 'trading'
    ? pathSegments[pathSegments.length - 1]
    : '';
const symbolInput = (querySymbol || pathSymbol || tradingPage.dataset.symbol || 'BTCUSDT').toUpperCase();
const symbol = symbolInput.endsWith('USDT') ? symbolInput : `${symbolInput}USDT`;
const streamSymbol = symbol.toLowerCase();
const baseAsset = symbol.replace(/USDT$/, '');
const startingPrice = Number(tradingPage.dataset.startPrice);
const pairSelect = document.getElementById('tradingPairSelect');
const chartStatus = document.getElementById('tradingChartStatus');
const mainPrice = document.getElementById('tradingMainPrice');
const priceChange = document.getElementById('tradingPriceChange');
const highValue = document.getElementById('tradingStatHigh');
const lowValue = document.getElementById('tradingStatLow');
const baseVolumeValue = document.getElementById('tradingStatBaseVolume');
const quoteVolumeValue = document.getElementById('tradingStatQuoteVolume');
const ma60Value = document.getElementById('tradingMa60');
const candleTooltip = document.getElementById('tradingCandleTooltip');
const timeframeButtons = document.querySelectorAll('[data-timeframe]');
const favoriteButton = document.getElementById('trading-favorite');
const favoriteKey = 'trade-xpro-market-favorites';
const predictionStoreKey = 'trade-xpro-binary-predictions.v1';
const predictionTabs = document.querySelectorAll('[data-prediction-tab]');
const activePredictionsList = document.getElementById('active-predictions');
const predictionHistoryList = document.getElementById('prediction-history');
const tradeAmountInput = document.getElementById('trade-amount');
const payoutEstimate = document.getElementById('payout-estimate');
const payoutRateLabel = document.getElementById('payout-rate-label');
const tradeFeedback = document.getElementById('trade-feedback');
const durationOptionsContainer = document.getElementById('predictionDurationOptions');
const tradeConfirmationDialog = document.getElementById('trade-confirmation-dialog');
const oneClickTrading = document.getElementById('one-click-trading');
const confirmTradeError = document.getElementById('confirm-trade-error');
const confirmTradeButton = document.getElementById('confirm-trade-submit');
let tradeLimits = null;
let tradeLimitsError = '';
const chartTop = 10;
const rightAxisWidth = 58;
const volumeAreaRatio = 0.25;
const initialVisibleCandles = 72;
const chartData = [];
let visibleCandleCount = 40;
let scrollOffset = 0;
let crosshairPosition;
let renderedCandles = [];
let renderedGeometry;
const marketData = {
    price: startingPrice,
    change: 0,
    high: startingPrice,
    low: startingPrice,
    volumeBase: 0,
    volumeQuote: 0,
};
let activeTimeframe = '1m';
let websocket;
let websocketRequestId = 0;
let reconnectTimer;
let historyRequest;
let historyRequestId = 0;
let chartResizeObserver;
let isPageUnloading = false;
let selectedDuration = null;
let enabledDurations = [];
let payoutRate = 95;
let predictionTrades = [];
let pendingTradeIntent = null;
let isSubmittingTrade = false;
const oneClickPreferenceKey = 'trade-xpro-one-click-trading.v1';

const safeNumber = (value, fallback = 0) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
};

const readPayoutRate = () => {
    try {
        const configuredRate = Number(localStorage.getItem('tradeAdmin.maxPayout'));
        return Number.isFinite(configuredRate) && configuredRate >= 1 && configuredRate <= 100 ? configuredRate : 95;
    } catch (error) {
        return 95;
    }
};

const normalizeServerTrade = (trade) => ({
    trade_id: trade.trade_id || trade.tradeId,
    pair: trade.pair,
    direction: trade.direction === 'CALL' ? 'up' : trade.direction === 'PUT' ? 'down' : trade.direction,
    amount: safeNumber(trade.amount),
    entryPrice: safeNumber(trade.entry_price ?? trade.entryPrice),
    payoutRate: safeNumber(trade.payout_rate ?? trade.payoutRate),
    durationSeconds: safeNumber(trade.duration ?? trade.durationSeconds),
    createdAt: safeNumber(trade.created_at ?? trade.createdAt),
    expiresAt: safeNumber(trade.expires_at ?? trade.expiresAt),
    status: String(trade.status || '').toUpperCase(),
    settlementPrice: safeNumber(trade.settlement_price ?? trade.settlementPrice),
    payout: safeNumber(trade.payout),
    settledAt: safeNumber(trade.settled_at ?? trade.settledAt),
});

const loadPredictionTrades = () => {
    try {
        const storedTrades = JSON.parse(localStorage.getItem(predictionStoreKey) || '[]');
        if (!Array.isArray(storedTrades)) return [];
        return storedTrades.map(normalizeServerTrade).filter((trade) => (
            trade.trade_id && typeof trade.pair === 'string' && ['up', 'down'].includes(trade.direction)
            && ['ACTIVE', 'WIN', 'LOSS'].includes(trade.status)
            && trade.entryPrice > 0 && trade.amount > 0 && trade.expiresAt > 0
        )).slice(-100);
    } catch (error) {
        return [];
    }
};

const savePredictionTrades = () => {
    try {
        localStorage.setItem(predictionStoreKey, JSON.stringify(predictionTrades.slice(-100)));
    } catch (error) {
        tradeFeedback.textContent = 'Browser storage is unavailable; this demo trade will not persist.';
    }
};

const formatCurrency = (value) => safeNumber(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const setTradeFeedback = (message, isError = false) => {
    tradeFeedback.textContent = message;
    tradeFeedback.classList.toggle('is-error', isError);
};

const loadTradeLimits = async () => {
    try {
        const response = await fetch('/api/trade/limits', { credentials: 'same-origin' });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Unable to verify your account limits.');
        const limits = {
            minAmount: Number(result.min_amount),
            maxAmount: Number(result.max_amount),
            availableBalance: Number(result.available_balance),
            feeRate: Number(result.fee_rate) || 0,
        };
        if (!Number.isFinite(limits.minAmount) || !Number.isFinite(limits.maxAmount)
            || !Number.isFinite(limits.availableBalance) || limits.minAmount <= 0
            || limits.maxAmount < limits.minAmount || limits.availableBalance < 0) {
            throw new Error('The server returned invalid trade limits.');
        }
        tradeLimits = limits;
        tradeLimitsError = '';
        tradeAmountInput.min = String(limits.minAmount);
        tradeAmountInput.max = String(limits.maxAmount);
        return limits;
    } catch (error) {
        tradeLimits = null;
        tradeLimitsError = error.message;
        return null;
    }
};

const maxInvestableAmount = () => {
    if (!tradeLimits) return Number(tradeAmountInput.max) || 0;
    return Math.min(
        tradeLimits.maxAmount,
        tradeLimits.availableBalance / (1 + tradeLimits.feeRate / 100),
    );
};

const updatePayoutEstimate = () => {
    payoutRate = readPayoutRate();
    const amount = Math.max(0, safeNumber(tradeAmountInput.value));
    const expectedPayout = amount * (1 + payoutRate / 100);
    payoutEstimate.textContent = `+${payoutRate}% \u2192 $${formatCurrency(expectedPayout)}`;
    payoutRateLabel.textContent = 'Includes stake';
};

const renderDurationOptions = (durations) => {
    enabledDurations = durations
        .filter((option) => option && option.enabled && Number.isInteger(Number(option.seconds)) && Number(option.seconds) > 0)
        .map((option) => ({ label: String(option.label), seconds: Number(option.seconds) }));

    if (!enabledDurations.some((option) => option.seconds === selectedDuration)) {
        selectedDuration = enabledDurations[0]?.seconds ?? null;
    }

    durationOptionsContainer.replaceChildren();
    if (enabledDurations.length === 0) {
        const emptyState = document.createElement('span');
        emptyState.className = 'duration-loading';
        emptyState.textContent = 'No durations available';
        durationOptionsContainer.append(emptyState);
        return;
    }

    enabledDurations.forEach((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `duration-option${option.seconds === selectedDuration ? ' is-selected' : ''}`;
        button.dataset.duration = String(option.seconds);
        button.setAttribute('aria-pressed', String(option.seconds === selectedDuration));
        button.textContent = option.label;
        button.addEventListener('click', () => {
            selectedDuration = option.seconds;
            durationOptionsContainer.querySelectorAll('[data-duration]').forEach((item) => {
                const isSelected = Number(item.dataset.duration) === selectedDuration;
                item.classList.toggle('is-selected', isSelected);
                item.setAttribute('aria-pressed', String(isSelected));
            });
        });
        durationOptionsContainer.append(button);
    });
};

const loadDurationOptions = async () => {
    try {
        const response = await fetch('/api/trading/durations');
        if (!response.ok) throw new Error(`Duration request failed: ${response.status}`);
        const options = await response.json();
        if (!Array.isArray(options)) throw new Error('Invalid duration response');
        renderDurationOptions(options);
    } catch (error) {
        durationOptionsContainer.replaceChildren();
        const unavailable = document.createElement('span');
        unavailable.className = 'duration-loading';
        unavailable.textContent = 'Durations unavailable';
        durationOptionsContainer.append(unavailable);
        tradeFeedback.textContent = 'Could not load enabled trade durations.';
        console.error('Unable to load trade durations:', error);
    }
};

const createPredictionCard = (trade, now, active) => {
    const card = document.createElement('article');
    card.className = `prediction-card ${trade.direction === 'up' ? 'is-up' : 'is-down'}`;
    const status = active ? (Number(trade.expiresAt) <= now ? 'Settling' : 'Active') : trade.status;
    const statusClass = active
        ? 'status-pending'
        : trade.status === 'WIN' ? 'status-win' : 'status-loss';
    const remainingMs = active ? Math.max(0, Number(trade.expiresAt) - now) : 0;
    const progress = active
        ? Math.min(100, Math.max(0, ((now - Number(trade.createdAt)) / (Number(trade.durationSeconds) * 1000)) * 100))
        : 100;
    const detailPrice = active ? marketData.price : safeNumber(trade.settlementPrice, 0);
    const directionLabel = trade.direction === 'up' ? 'UP' : 'DOWN';
    const detailLabel = active ? 'Live price' : 'Settlement price';
    const footerLabel = active
        ? (remainingMs > 0
            ? `Expires in ${Math.floor(remainingMs / 60000).toString().padStart(2, '0')}:${Math.floor((remainingMs % 60000) / 1000).toString().padStart(2, '0')}`
            : 'Awaiting server settlement')
        : `Server payout $${formatCurrency(trade.payout)}`;

    card.innerHTML = `
        <div class="prediction-card-top">
            <div class="prediction-direction-mark">${directionLabel} <span>${trade.pair}</span></div>
            <span class="prediction-status ${statusClass}">${status}</span>
        </div>
        <div class="prediction-card-prices">
            <div><span>Entry price</span><strong>$${formatCurrency(trade.entryPrice)}</strong></div>
            <div><span>${detailLabel}</span><strong>${detailPrice > 0 ? `$${formatCurrency(detailPrice)}` : '--'}</strong></div>
            <div><span>Investment</span><strong>$${formatCurrency(trade.amount)}</strong></div>
        </div>
        <div class="prediction-progress" role="progressbar" aria-label="Prediction time remaining" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><span style="width:${progress}%"></span></div>
        <div class="prediction-card-footer"><span>${footerLabel}</span><span>${active ? `${trade.payoutRate}% payout` : new Date(trade.settledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>`;
    return card;
};

const settlementRequests = new Set();

const settlePrediction = async (trade) => {
    if (settlementRequests.has(trade.trade_id) || Number(trade.retrySettlementAt || 0) > Date.now()) return;
    settlementRequests.add(trade.trade_id);
    try {
        const response = await fetch('/api/trade/settle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ trade_id: trade.trade_id }),
        });
        const result = await response.json();
        if (response.status === 409 && result.status === 'PENDING') {
            trade.retrySettlementAt = Date.now() + Math.max(500, safeNumber(result.retry_after_ms, 1000));
            return;
        }
        if (!response.ok) throw new Error(result.error || 'Settlement unavailable');
        trade.status = String(result.status).toUpperCase();
        trade.payout = safeNumber(result.payout);
        trade.settlementPrice = safeNumber(result.settlementPrice);
        trade.settledAt = safeNumber(result.settledAt, Date.now());
        delete trade.retrySettlementAt;
        savePredictionTrades();
        tradeFeedback.textContent = `Server settled prediction: ${trade.status}.`;
    } catch (error) {
        trade.retrySettlementAt = Date.now() + 3000;
        tradeFeedback.textContent = 'Settlement is pending; retrying the server shortly.';
        console.error('Unable to settle prediction:', error);
    } finally {
        settlementRequests.delete(trade.trade_id);
        renderPredictionLists();
    }
};

const renderPredictionLists = () => {
    const now = Date.now();
    const pairTrades = predictionTrades.filter((trade) => trade.pair === `${baseAsset}/USDT`);
    const activeTrades = pairTrades.filter((trade) => trade.status === 'ACTIVE').sort((left, right) => right.createdAt - left.createdAt);
    const closedTrades = pairTrades.filter((trade) => trade.status !== 'ACTIVE').sort((left, right) => right.settledAt - left.settledAt);
    activeTrades.filter((trade) => Number(trade.expiresAt) <= now).forEach(settlePrediction);
    document.getElementById('active-trade-count').textContent = String(activeTrades.length);
    activePredictionsList.replaceChildren(...(activeTrades.length
        ? activeTrades.map((trade) => createPredictionCard(trade, now, true))
        : [Object.assign(document.createElement('p'), { className: 'prediction-empty', textContent: 'No active predictions' })]));
    predictionHistoryList.replaceChildren(...(closedTrades.length
        ? closedTrades.map((trade) => createPredictionCard(trade, now, false))
        : [Object.assign(document.createElement('p'), { className: 'prediction-empty', textContent: 'No settled predictions yet' })]));
};

const openPrediction = async (direction) => {
    if (!selectedDuration || !enabledDurations.some((option) => option.seconds === selectedDuration)) {
        setTradeFeedback('No enabled trade duration is available.', true);
        return;
    }
    const amount = Number(tradeAmountInput.value);
    if (!Number.isFinite(amount) || amount <= 0) {
        setTradeFeedback('Enter a valid trade amount.', true);
        tradeAmountInput.focus();
        return;
    }
    const minimumAmount = tradeLimits?.minAmount ?? safeNumber(tradeAmountInput.min, 10);
    const maximumAmount = tradeLimits?.maxAmount ?? safeNumber(tradeAmountInput.max, 5000);
    if (amount < minimumAmount) {
        setTradeFeedback(`Minimum trade amount is ${formatCurrency(minimumAmount)} USDT.`, true);
        tradeAmountInput.focus();
        return;
    }
    if (amount > maximumAmount) {
        setTradeFeedback(`Maximum trade amount is ${formatCurrency(maximumAmount)} USDT.`, true);
        tradeAmountInput.focus();
        return;
    }
    const feeRate = tradeLimits?.feeRate ?? 0;
    const totalDebit = amount * (1 + feeRate / 100);
    if (tradeLimits && totalDebit > tradeLimits.availableBalance) {
        setTradeFeedback('Amount exceeds available balance.', true);
        tradeAmountInput.focus();
        return;
    }
    const intent = {
        pair: `${baseAsset}/USDT`,
        direction: direction === 'up' ? 'CALL' : 'PUT',
        amount,
        duration: selectedDuration,
        symbol: baseAsset,
        payout: amount * (1 + payoutRate / 100),
    };
    if (oneClickTrading.checked) {
        await submitTradeIntent(intent);
        return;
    }

    pendingTradeIntent = intent;
    const durationLabel = enabledDurations.find((option) => option.seconds === selectedDuration)?.label || `${selectedDuration}s`;
    const directionLabel = intent.direction === 'CALL' ? 'UP / CALL' : 'DOWN / PUT';
    const directionElement = document.getElementById('confirm-trade-direction');
    directionElement.textContent = directionLabel;
    directionElement.classList.toggle('is-down', intent.direction === 'PUT');
    document.getElementById('trade-confirmation-title').textContent = `Confirm Trade - ${intent.pair}`;
    document.getElementById('confirm-trade-amount').textContent = `$${formatCurrency(amount)} USDT`;
    document.getElementById('confirm-trade-duration').textContent = durationLabel;
    document.getElementById('confirm-trade-payout').textContent = `+${payoutRate}% ($${formatCurrency(amount * (1 + payoutRate / 100))})`;
    confirmTradeError.hidden = true;
    confirmTradeError.textContent = '';
    tradeConfirmationDialog.showModal();
};

const submitTradeIntent = async (intent) => {
    setTradeFeedback('Submitting prediction…');
    try {
        if (!tradeLimits) await loadTradeLimits();
        if (!tradeLimits) throw new Error(tradeLimitsError || 'Unable to verify your available balance.');
        const totalDebit = intent.amount * (1 + tradeLimits.feeRate / 100);
        if (intent.amount < tradeLimits.minAmount) throw new Error(`Minimum trade amount is ${formatCurrency(tradeLimits.minAmount)} USDT.`);
        if (intent.amount > tradeLimits.maxAmount) throw new Error(`Maximum trade amount is ${formatCurrency(tradeLimits.maxAmount)} USDT.`);
        if (totalDebit > tradeLimits.availableBalance) throw new Error('Amount exceeds available balance.');

        const apiIntent = {
            pair: intent.pair,
            direction: intent.direction,
            amount: intent.amount,
            duration: intent.duration,
        };
        const response = await fetch('/api/trade/open', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apiIntent),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Unable to open prediction');
        if (!result.trade) throw new Error('Server returned an invalid trade record');
        const trade = normalizeServerTrade(result.trade);
        if (!trade.trade_id) throw new Error('Server did not provide a trade ID');
        predictionTrades.push(trade);
        predictionTrades = predictionTrades.slice(-100);
        payoutRate = trade.payoutRate || payoutRate;
        savePredictionTrades();
        updatePayoutEstimate();
        setTradeFeedback(`${intent.direction} prediction opened in demo mode.`);
        renderPredictionLists();
        if (tradeConfirmationDialog.open) tradeConfirmationDialog.close();
        pendingTradeIntent = null;
        return true;
    } catch (error) {
        setTradeFeedback(error.message, true);
        console.error('Unable to open prediction:', error);
        return false;
    }
};

const normalizeVolume = (baseVolume, quoteVolume, close) => {
    const base = safeNumber(baseVolume);
    if (base > 0) return base;
    const quote = safeNumber(quoteVolume);
    const closingPrice = safeNumber(close);
    return quote > 0 && closingPrice > 0 ? quote / closingPrice : quote;
};

const formatPrice = (value) => {
    const minimumFractionDigits = marketData.price > 10 ? 2 : marketData.price >= 1 ? 4 : 6;
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits,
        maximumFractionDigits: marketData.price > 10 ? 2 : 8,
    }).format(value);
};

const formatVolume = (value) => {
    const volume = safeNumber(value);
    if (volume >= 1e9) return `${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `${(volume / 1e6).toFixed(1)}M`;
    if (volume >= 1e3) return `${(volume / 1e3).toFixed(1)}K`;
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(volume);
};

const renderMarketStats = () => {
    const formattedPrice = `$${formatPrice(marketData.price)}`;
    mainPrice.textContent = formattedPrice;
    priceChange.textContent = `${marketData.change >= 0 ? '+' : ''}${marketData.change.toFixed(2)}%`;
    mainPrice.classList.toggle('is-negative', marketData.change < 0);
    priceChange.classList.toggle('is-negative', marketData.change < 0);
    highValue.textContent = `$${formatPrice(marketData.high)}`;
    lowValue.textContent = `$${formatPrice(marketData.low)}`;
    baseVolumeValue.textContent = formatVolume(marketData.volumeBase);
    quoteVolumeValue.textContent = formatVolume(marketData.volumeQuote);
};

pairSelect.addEventListener('change', () => {
    window.location.assign(`/trading/${encodeURIComponent(pairSelect.value)}`);
});

const flashLivePrice = (nextPrice) => {
    if (nextPrice === marketData.price) return;
    const directionClass = nextPrice > marketData.price ? 'price-flash-up' : 'price-flash-down';
    mainPrice.classList.remove('price-flash-up', 'price-flash-down');
    void mainPrice.offsetWidth;
    mainPrice.classList.add(directionClass);
};

const formatAxisPrice = (value) => new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format(value);

const movingAverage = (candles, period = 60) => candles.map((_, index) => {
    const start = Math.max(0, index - period + 1);
    const slice = candles.slice(start, index + 1);
    return slice.reduce((sum, candle) => sum + candle.close, 0) / slice.length;
});

const getChartGeometry = (candles, width, height) => {
    const bottomCandlesTop = height * (1 - volumeAreaRatio);
    const plot = { left: 34, right: width - rightAxisWidth, top: chartTop, bottom: bottomCandlesTop };
    const plotWidth = Math.max(1, plot.right - plot.left);
    const plotHeight = Math.max(1, plot.bottom - plot.top);
    const minPrice = Math.min(...candles.map((candle) => candle.low));
    const maxPrice = Math.max(...candles.map((candle) => candle.high));
    const priceRange = Math.max(maxPrice - minPrice, marketData.price * 0.002);

    return {
        plot,
        plotHeight,
        minPrice,
        maxPrice,
        priceRange,
        bottomCandlesTop,
        priceToY: (price) => plot.top + ((maxPrice - price) / priceRange) * plotHeight,
        xFor: (index) => plot.left + (index / Math.max(1, candles.length - 1)) * plotWidth,
    };
};

const drawGridLines = (candles, geometry, width, height) => {
    const { plot, plotHeight } = geometry;
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;

    for (let index = 0; index <= 5; index += 1) {
        const y = plot.top + (plotHeight / 5) * index;
        ctx.beginPath();
        ctx.moveTo(plot.left, y);
        ctx.lineTo(plot.right, y);
        ctx.stroke();

        const x = plot.left + ((plot.right - plot.left) / 5) * index;
        ctx.beginPath();
        ctx.moveTo(x, plot.top);
        ctx.lineTo(x, plot.bottom);
        ctx.stroke();
    }

    ctx.fillStyle = '#7d899a';
    ctx.font = '8px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (let index = 0; index <= 4; index += 1) {
        const candleIndex = Math.round((index / 4) * (candles.length - 1));
        const timestamp = safeNumber(candles[candleIndex].time);
        const date = new Date(timestamp < 1e12 ? timestamp * 1000 : timestamp);
        const label = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const x = plot.left + ((plot.right - plot.left) / 4) * index;
        ctx.fillText(label, Math.max(18, Math.min(width - 18, x)), height - 2);
    }
};

const drawLineChart = (candles, geometry) => {
    if (!candles.length) return;

    const { plot, priceToY, xFor } = geometry;
    const gradient = ctx.createLinearGradient(0, plot.top, 0, plot.bottom);
    gradient.addColorStop(0, 'rgba(240,185,11,0.25)');
    gradient.addColorStop(1, 'rgba(240,185,11,0.00)');

    ctx.beginPath();
    candles.forEach((candle, index) => {
        const x = xFor(index);
        const y = priceToY(candle.close);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = '#F0B90B';
    ctx.lineWidth = 2;
    ctx.stroke();

    const lastX = xFor(candles.length - 1);
    const firstX = xFor(0);
    ctx.lineTo(lastX, plot.bottom);
    ctx.lineTo(firstX, plot.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    const average = movingAverage(candles, 60);
    ma60Value.textContent = average.length ? formatAxisPrice(average[average.length - 1]) : '--';
};

const drawVolumeBars = (candles, width, height) => {
    if (!candles || candles.length === 0) return;

    const volumes = candles.map((candle) => Math.max(0, safeNumber(candle.volume)));
    const maxVolume = Math.max(...volumes, Number.EPSILON);
    const availableWidth = width - 50;
    const slotWidth = availableWidth / candles.length;
    const barWidth = Math.max(3, slotWidth - 1);
    const maxBarHeight = height * 0.16;
    const minBarHeight = Math.max(3, height * 0.012);
    const baseY = height - 13;

    candles.forEach((candle, index) => {
        const x = index * slotWidth + slotWidth / 2;
        const barHeight = Math.max(minBarHeight, (volumes[index] / maxVolume) * maxBarHeight);
        const y = baseY - barHeight;
        ctx.fillStyle = candle.close >= candle.open ? '#0ECB81' : '#F6465D';
        ctx.fillRect(x - barWidth / 2, y, barWidth, barHeight);
    });

    ctx.strokeStyle = 'rgba(255,255,255,0.035)';
    ctx.beginPath();
    ctx.moveTo(34, height * (1 - volumeAreaRatio));
    ctx.lineTo(width - rightAxisWidth, height * (1 - volumeAreaRatio));
    ctx.stroke();
};

const drawLivePriceLine = (geometry, width) => {
    if (!marketData.price) return;
    const { plot, priceToY } = geometry;
    const priceY = priceToY(marketData.price);
    ctx.strokeStyle = 'rgba(240,185,11,0.55)';
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(plot.left, priceY);
    ctx.lineTo(plot.right, priceY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#F0B90B';
    ctx.beginPath();
    ctx.roundRect(plot.right - 48, Math.max(plot.top + 3, priceY - 7), 48, 14, 3);
    ctx.fill();
    ctx.fillStyle = '#171B21';
    ctx.font = '700 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(formatAxisPrice(marketData.price), Math.min(width - 24, plot.right - 24), Math.max(plot.top + 10, priceY + 1));
};

const drawRightAxisLabels = (geometry, width) => {
    const { plot, plotHeight, maxPrice, priceRange } = geometry;
    ctx.fillStyle = '#737d8b';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'right';
    for (let index = 0; index <= 5; index += 1) {
        const y = plot.top + (plotHeight / 5) * index;
        ctx.fillText(formatAxisPrice(maxPrice - (priceRange / 5) * index), width - 7, y - 3);
    }
};

const drawCrosshair = (candles, geometry, width, height) => {
    if (!crosshairPosition || candles.length === 0) return;
    const { plot } = geometry;
    const x = Math.max(plot.left, Math.min(plot.right, crosshairPosition.x));
    const y = Math.max(plot.top, Math.min(plot.bottom, crosshairPosition.y));
    ctx.strokeStyle = 'rgba(226,232,240,0.48)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(x, plot.top);
    ctx.lineTo(x, height - 13);
    ctx.moveTo(plot.left, y);
    ctx.lineTo(plot.right, y);
    ctx.stroke();
    ctx.setLineDash([]);

    const candleIndex = Math.max(0, Math.min(candles.length - 1, Math.round(((x - plot.left) / Math.max(1, plot.right - plot.left)) * (candles.length - 1))));
    const candle = candles[candleIndex];
    candleTooltip.textContent = `O ${formatAxisPrice(candle.open)}  H ${formatAxisPrice(candle.high)}  L ${formatAxisPrice(candle.low)}  C ${formatAxisPrice(candle.close)}  V ${formatVolume(candle.volume)}`;
};

const drawChartWatermark = (context, canvas) => {
    const siteName = String(window.SITE_NAME || 'TRADEXPRO').toUpperCase();
    const width = canvas.clientWidth || canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.clientHeight || canvas.height / (window.devicePixelRatio || 1);
    const fontSize = Math.min(36, width * 0.08);

    context.save();
    context.font = `900 ${fontSize}px sans-serif`;
    const textWidth = context.measureText(siteName).width;
    const maxWidth = width * 0.8;
    if (textWidth > maxWidth) context.font = `900 ${fontSize * maxWidth / textWidth}px sans-serif`;
    context.fillStyle = 'rgba(255,255,255,0.035)';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(siteName, width / 2, height / 2, maxWidth);
    context.restore();
};

const renderChartWithZoom = () => {
    const width = chartHost.clientWidth || 360;
    const height = chartHost.clientHeight || 320;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    chartCanvas.width = Math.round(width * pixelRatio);
    chartCanvas.height = Math.round(height * pixelRatio);
    chartCanvas.style.width = `${width}px`;
    chartCanvas.style.height = `${height}px`;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#171b21';
    ctx.fillRect(0, 0, width, height);
    drawChartWatermark(ctx, chartCanvas);
    if (chartData.length === 0) return;

    const maxOffset = Math.max(0, chartData.length - Math.min(visibleCandleCount, chartData.length));
    scrollOffset = Math.min(scrollOffset, maxOffset);
    const endIndex = chartData.length - scrollOffset;
    const visibleCandles = chartData.slice(Math.max(0, endIndex - visibleCandleCount), endIndex);
    if (visibleCandles.length === 0) return;

    const geometry = getChartGeometry(visibleCandles, width, height);
    renderedCandles = visibleCandles;
    renderedGeometry = geometry;
    drawGridLines(visibleCandles, geometry, width, height);
    drawLineChart(visibleCandles, geometry);
    drawVolumeBars(visibleCandles, width, height);
    if (scrollOffset === 0) drawLivePriceLine(geometry, width);
    drawRightAxisLabels(geometry, width);
    drawCrosshair(visibleCandles, geometry, width, height);
    if (chartStatus.textContent === 'Loading history') chartStatus.hidden = true;
};

const renderChart = () => renderChartWithZoom();

const clampVisibleCandleCount = (value) => Math.max(10, Math.min(150, value));
const activePointers = new Map();
let dragStart;
let pinchStart;

const maxScrollOffset = () => Math.max(0, chartData.length - Math.min(visibleCandleCount, chartData.length));

const getPointerDistance = () => {
    const [first, second] = [...activePointers.values()];
    return first && second ? Math.hypot(first.x - second.x, first.y - second.y) : 0;
};

chartCanvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    visibleCandleCount = clampVisibleCandleCount(visibleCandleCount + (event.deltaY < 0 ? -3 : 3));
    scrollOffset = Math.min(scrollOffset, maxScrollOffset());
    renderChartWithZoom();
}, { passive: false });

chartCanvas.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    chartCanvas.setPointerCapture(event.pointerId);
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (activePointers.size >= 2) {
        dragStart = null;
        pinchStart = { distance: getPointerDistance(), candleCount: visibleCandleCount, offset: scrollOffset };
        chartCanvas.classList.remove('is-dragging');
        return;
    }
    dragStart = { pointerId: event.pointerId, x: event.clientX, offset: scrollOffset };
    chartCanvas.classList.add('is-dragging');
});

chartCanvas.addEventListener('pointermove', (event) => {
    const rect = chartCanvas.getBoundingClientRect();
    crosshairPosition = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    if (!activePointers.has(event.pointerId)) {
        renderChartWithZoom();
        return;
    }
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (activePointers.size >= 2 && pinchStart) {
        const distance = getPointerDistance();
        if (distance <= 0 || pinchStart.distance <= 0) return;
        visibleCandleCount = clampVisibleCandleCount(Math.round(pinchStart.candleCount * pinchStart.distance / distance));
        scrollOffset = Math.min(maxScrollOffset(), Math.max(0, pinchStart.offset + Math.round((pinchStart.candleCount - visibleCandleCount) / 2)));
        renderChartWithZoom();
        return;
    }
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    const candlesPerPixel = visibleCandleCount / Math.max(1, chartCanvas.clientWidth - 92);
    scrollOffset = Math.max(0, Math.min(maxScrollOffset(), dragStart.offset + Math.round((dragStart.x - event.clientX) * candlesPerPixel)));
    renderChartWithZoom();
});

const finishPointerInteraction = (event) => {
    activePointers.delete(event.pointerId);
    pinchStart = null;
    dragStart = null;
    if (activePointers.size === 1) {
        const [pointerId, point] = [...activePointers.entries()][0];
        dragStart = { pointerId, x: point.x, offset: scrollOffset };
        chartCanvas.classList.add('is-dragging');
    } else {
        chartCanvas.classList.remove('is-dragging');
        if (event.pointerType !== 'mouse') crosshairPosition = null;
    }
    renderChartWithZoom();
};

chartCanvas.addEventListener('pointerup', finishPointerInteraction);
chartCanvas.addEventListener('pointercancel', finishPointerInteraction);
chartCanvas.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'mouse' || activePointers.size > 0) return;
    crosshairPosition = null;
    renderChartWithZoom();
});

const renderTickerStats = (ticker) => {
    const nextPrice = safeNumber(ticker.c, marketData.price);
    flashLivePrice(nextPrice);
    marketData.price = nextPrice;
    marketData.change = safeNumber(ticker.P, marketData.change);
    marketData.high = safeNumber(ticker.h, marketData.high);
    marketData.low = safeNumber(ticker.l, marketData.low);
    marketData.volumeBase = safeNumber(ticker.v, marketData.volumeBase);
    marketData.volumeQuote = safeNumber(ticker.q, marketData.volumeQuote);
    renderMarketStats();
    renderChart();
    renderPredictionLists();
};

const getTimeframeInterval = (timeframe) => timeframe === '1m' ? '1m' : timeframe;

const connectWebSocket = () => {
    window.clearTimeout(reconnectTimer);
    if (isPageUnloading) return;
    const requestId = ++websocketRequestId;
    if (websocket && websocket.readyState < WebSocket.CLOSING) websocket.close();
    const streamName = `${streamSymbol}@kline_${getTimeframeInterval(activeTimeframe)}`;
    websocket = new WebSocket(`wss://stream.binance.com:9443/ws/${streamName}`);
    const currentSocket = websocket;
    currentSocket.onopen = () => {
        if (requestId === websocketRequestId) {
            chartStatus.textContent = 'Live WebSocket';
            chartStatus.hidden = false;
        }
    };
    currentSocket.onmessage = (event) => {
        if (requestId !== websocketRequestId) return;
        try {
            const frame = JSON.parse(event.data);
            if (frame.e !== 'kline' || !frame.k) return;
            const kline = frame.k;
            const candle = {
                open: safeNumber(kline.o),
                high: safeNumber(kline.h),
                low: safeNumber(kline.l),
                close: safeNumber(kline.c),
                time: Number(kline.t),
                volume: normalizeVolume(kline.v, kline.q, kline.c),
            };
            const lastCandle = chartData[chartData.length - 1];
            if (lastCandle && candle.time < lastCandle.time) return;
            if (!lastCandle || candle.time > lastCandle.time) chartData.push(candle);
            else chartData[chartData.length - 1] = candle;
            chartData.splice(0, Math.max(0, chartData.length - 150));
            flashLivePrice(candle.close);
            marketData.price = candle.close;
            renderMarketStats();
            renderChart();
            renderPredictionLists();
        } catch (error) {
            console.warn('Unable to process Binance kline update:', error);
        }
    };
    currentSocket.onerror = () => currentSocket.close();
    currentSocket.onclose = () => {
        if (requestId !== websocketRequestId || isPageUnloading) return;
        chartStatus.textContent = 'Reconnecting';
        reconnectTimer = window.setTimeout(connectWebSocket, 2000);
    };
};

const loadHistory = async (timeframe = activeTimeframe) => {
    activeTimeframe = timeframe;
    visibleCandleCount = 40;
    scrollOffset = 0;
    window.clearTimeout(reconnectTimer);
    websocketRequestId += 1;
    if (websocket && websocket.readyState < WebSocket.CLOSING) websocket.close();
    historyRequest?.abort();
    historyRequest = new AbortController();
    const requestController = historyRequest;
    const requestId = ++historyRequestId;
    let requestTimedOut = false;
    const timeoutId = window.setTimeout(() => {
        requestTimedOut = true;
        requestController.abort();
    }, 8000);
    chartStatus.textContent = 'Loading history';
    chartStatus.hidden = false;
    connectWebSocket();
    try {
        const params = new URLSearchParams({ symbol, interval: getTimeframeInterval(timeframe), limit: '150' });
        const response = await fetch(`https://api.binance.com/api/v3/klines?${params.toString()}`, { signal: requestController.signal });
        if (!response.ok) throw new Error(`Klines request failed: ${response.status}`);
        const rows = await response.json();
        if (!Array.isArray(rows)) throw new Error('Invalid kline response');
        const candles = rows.map((row) => ({
            open: Number(row[1]),
            high: Number(row[2]),
            low: Number(row[3]),
            close: Number(row[4]),
            time: Number(row[0]),
            volume: normalizeVolume(row[5], row[7], row[4]),
        })).filter((candle) => Number.isFinite(candle.time) && Number.isFinite(candle.close));
        if (requestId !== historyRequestId) return;
        if (candles.length === 0) throw new Error('No historical candles returned');
        const latestLiveCandle = chartData[chartData.length - 1];
        chartData.splice(0, chartData.length, ...candles);
        const latestHistoryCandle = chartData[chartData.length - 1];
        if (latestLiveCandle && latestLiveCandle.time >= latestHistoryCandle.time) {
            if (latestLiveCandle.time === latestHistoryCandle.time) chartData[chartData.length - 1] = latestLiveCandle;
            else chartData.push(latestLiveCandle);
        }
        chartData.splice(0, Math.max(0, chartData.length - 150));
        marketData.price = chartData[chartData.length - 1].close;
        renderMarketStats();
        renderChart();
        chartStatus.hidden = true;
        if (websocket?.readyState === WebSocket.OPEN) {
            chartStatus.textContent = 'Live WebSocket';
            chartStatus.hidden = false;
        }
    } catch (error) {
        if (requestId !== historyRequestId || (error.name === 'AbortError' && !requestTimedOut)) return;
        chartStatus.textContent = chartData.length > 0
            ? 'Live · history unavailable'
            : requestTimedOut ? 'History timed out · live only' : 'History unavailable · live only';
        chartStatus.hidden = false;
        console.error('Unable to load Binance chart history:', error);
    } finally {
        window.clearTimeout(timeoutId);
    }
};

const loadTickerStats = async () => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${encodeURIComponent(symbol)}`);
        if (!response.ok) throw new Error(`Ticker request failed: ${response.status}`);
        renderTickerStats(await response.json());
    } catch (error) {
        if (chartStatus.textContent === 'Live WebSocket') chartStatus.textContent = 'Live · stats unavailable';
    }
};

const updateFavoriteState = (isFavorite) => {
    if (!favoriteButton) return;
    favoriteButton.classList.toggle('is-favorite', isFavorite);
    favoriteButton.setAttribute('aria-pressed', String(isFavorite));
    favoriteButton.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
};

let favorites = new Set();
try {
    favorites = new Set(JSON.parse(localStorage.getItem(favoriteKey) || '[]'));
} catch (error) {
    favorites = new Set();
}
updateFavoriteState(favorites.has(symbol));
favoriteButton?.addEventListener('click', () => {
    if (favorites.has(symbol)) favorites.delete(symbol);
    else favorites.add(symbol);
    try {
        localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
    } catch (error) {
        // Favorites remain usable for the current page if storage is blocked.
    }
    updateFavoriteState(favorites.has(symbol));
});

timeframeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('is-active')) return;
        timeframeButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle('is-active', isActive);
            item.setAttribute('aria-selected', String(isActive));
        });
        loadHistory(button.dataset.timeframe);
    });
});

if ('ResizeObserver' in window) {
    chartResizeObserver = new ResizeObserver(renderChart);
    chartResizeObserver.observe(chartHost);
} else {
    window.addEventListener('resize', renderChart);
}
renderChart();
loadHistory();
loadTickerStats();
const tickerTimer = window.setInterval(loadTickerStats, 30000);
const predictionTimer = window.setInterval(renderPredictionLists, 1000);

predictionTrades = loadPredictionTrades();
updatePayoutEstimate();
renderPredictionLists();
tradeAmountInput.addEventListener('input', updatePayoutEstimate);
document.querySelectorAll('[data-amount-add]').forEach((button) => {
    button.addEventListener('click', () => {
        const nextAmount = safeNumber(tradeAmountInput.value) + Number(button.dataset.amountAdd);
        tradeAmountInput.value = Math.min(Number(tradeAmountInput.max), nextAmount).toFixed(2);
        updatePayoutEstimate();
    });
});
document.querySelector('[data-amount-max]').addEventListener('click', () => {
    tradeAmountInput.value = maxInvestableAmount().toFixed(2);
    updatePayoutEstimate();
});
tradeAmountInput.addEventListener('input', () => {
    if (!tradeLimits) return;
    const amount = Number(tradeAmountInput.value);
    const debit = amount * (1 + tradeLimits.feeRate / 100);
    if (amount < tradeLimits.minAmount) {
        setTradeFeedback(`Minimum trade amount is ${formatCurrency(tradeLimits.minAmount)} USDT.`, true);
    } else if (amount > tradeLimits.maxAmount) {
        setTradeFeedback(`Maximum trade amount is ${formatCurrency(tradeLimits.maxAmount)} USDT.`, true);
    } else if (debit > tradeLimits.availableBalance) {
        setTradeFeedback('Amount exceeds available balance.', true);
    } else if (tradeFeedback.classList.contains('is-error')) {
        setTradeFeedback('Demo predictions are stored on this device only.');
    }
});
loadDurationOptions();
loadTradeLimits();
document.querySelectorAll('[data-direction]').forEach((button) => {
    button.addEventListener('click', () => openPrediction(button.dataset.direction));
});
predictionTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const showHistory = tab.dataset.predictionTab === 'history';
        predictionTabs.forEach((item) => {
            const isSelected = item === tab;
            item.classList.toggle('is-active', isSelected);
            item.setAttribute('aria-selected', String(isSelected));
        });
        activePredictionsList.hidden = showHistory;
        predictionHistoryList.hidden = !showHistory;
    });
});
window.addEventListener('storage', (event) => {
    if (event.key === 'tradeAdmin.maxPayout') updatePayoutEstimate();
    if (event.key === predictionStoreKey) {
        predictionTrades = loadPredictionTrades();
        renderPredictionLists();
    }
});

document.getElementById('chartFullscreenButton').addEventListener('click', async () => {
    if (!document.fullscreenElement) await chartHost.requestFullscreen?.();
    else await document.exitFullscreen?.();
});

window.addEventListener('beforeunload', () => {
    isPageUnloading = true;
    window.clearTimeout(reconnectTimer);
    window.clearInterval(tickerTimer);
    window.clearInterval(predictionTimer);
    historyRequest?.abort();
    if (websocket && websocket.readyState < WebSocket.CLOSING) websocket.close();
    chartResizeObserver?.disconnect();
});
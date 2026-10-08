const marketDetail = document.querySelector('.market-detail-page');
const favoriteKey = 'trade-xpro-market-favorites';
const favoriteButton = document.getElementById('market-detail-favorite');
const backButton = document.getElementById('market-detail-back');
const timeframeButtons = document.querySelectorAll('[data-timeframe]');
const chartHost = document.getElementById('market-chart');
const chartCanvas = document.getElementById('priceChartCanvas');
const chartContext = chartCanvas.getContext('2d');
const chartStatus = document.getElementById('chartStatus');
const ma60Value = document.getElementById('ma60Value');
const chartFullscreenButton = document.getElementById('chartFullscreenButton');
const toast = document.getElementById('market-action-toast');
const pair = marketDetail.dataset.pair;
const symbol = document.body.dataset.symbol || 'BTCUSDT';
const normalizedSymbol = symbol.toUpperCase();
const baseWsUrl = 'wss://stream.binance.com:9443/ws';
const data = {
    name: pair,
    price: 0,
    change: 0,
    high: 0,
    low: 0,
    volumeBase: 0,
    volumeQuote: 0,
};
const timeframeLabels = {
    '1m': '1 minute',
    '15m': '15 minutes',
    '1h': '1 hour',
    '4h': '4 hours',
    '1d': '1 day',
    '1w': '1 week',
};

const loadFavorites = () => {
    try {
        return new Set(JSON.parse(localStorage.getItem(favoriteKey) || '[]'));
    } catch (error) {
        return new Set();
    }
};

let favorites = loadFavorites();
let toastTimer;
let activeTimeframe = 'Time';
let chartData = [];
let visibleCandleCount = 40;
let scrollOffset = 0;
let chartResizeObserver;
let websocket;
let reconnectTimer;
let historyRequest;
let historyRequestId = 0;
let websocketRequestId = 0;
let isPageUnloading = false;
let reconnectAttempts = 0;
let isLoadingHistory = true;

const currencyFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const safeNumber = (value, fallback = 0) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeCandleVolume = (baseVolume, quoteVolume, close) => {
    const base = safeNumber(baseVolume);
    if (base > 0) return base;

    const quote = safeNumber(quoteVolume);
    const closingPrice = safeNumber(close);
    return quote > 0 && closingPrice > 0 ? quote / closingPrice : quote;
};

const formatLivePrice = (price) => new Intl.NumberFormat('en-US', {
    minimumFractionDigits: price > 10 ? 2 : 4,
    maximumFractionDigits: price > 10 ? 2 : 8,
}).format(price);

const formatVolume = (volume) => {
    const magnitude = Math.abs(volume);
    if (magnitude >= 1e9) return `${(volume / 1e9).toFixed(2)}B`;
    if (magnitude >= 1e6) return `${(volume / 1e6).toFixed(1)}M`;
    if (magnitude >= 1e3) return `${(volume / 1e3).toFixed(1)}K`;
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(volume);
};

const renderMarketStats = () => {
    document.getElementById('pairTitle').textContent = data.name;
    const formattedPrice = `$${formatLivePrice(data.price)}`;
    document.getElementById('mainPrice').textContent = formattedPrice;
    document.getElementById('priceSubtext').textContent = formattedPrice;
    document.getElementById('priceChangeBadge').textContent = `${data.change >= 0 ? '+' : ''}${data.change.toFixed(2)}%`;
    document.getElementById('stat24High').textContent = `$${currencyFormatter.format(data.high)}`;
    document.getElementById('stat24Low').textContent = `$${currencyFormatter.format(data.low)}`;
    document.getElementById('stat24VolBTC').textContent = formatVolume(data.volumeBase);
    document.getElementById('stat24VolUSDT').textContent = formatVolume(data.volumeQuote);

    const changeElement = document.getElementById('priceChangeBadge');
    const mainPriceElement = document.getElementById('mainPrice');
    const isPositive = data.change >= 0;
    mainPriceElement.classList.toggle('is-negative', !isPositive);
    changeElement.classList.toggle('text-[#0ECB81]', isPositive);
    changeElement.classList.toggle('text-[#F6465D]', !isPositive);
    changeElement.classList.toggle('border-[#0ECB81]/20', isPositive);
    changeElement.classList.toggle('bg-[#0ECB81]/10', isPositive);
    changeElement.classList.toggle('border-[#F6465D]/20', !isPositive);
    changeElement.classList.toggle('bg-[#F6465D]/10', !isPositive);
};

const setFavoriteState = (isFavorite) => {
    favoriteButton.classList.toggle('is-favorite', isFavorite);
    favoriteButton.setAttribute('aria-pressed', String(isFavorite));
    favoriteButton.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
};

const syncFavoriteState = () => setFavoriteState(favorites.has(normalizedSymbol));

const persistFavorites = () => {
    try {
        localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
    } catch (error) {
        // The chart remains usable when browser storage is unavailable.
    }
};

const showToast = (message) => {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
};

favoriteButton.addEventListener('click', () => {
    if (favorites.has(normalizedSymbol)) favorites.delete(normalizedSymbol);
    else favorites.add(normalizedSymbol);
    persistFavorites();
    syncFavoriteState();
    showToast(favorites.has(normalizedSymbol) ? `${data.name} added to favorites` : `${data.name} removed from favorites`);
});

backButton.addEventListener('click', () => window.history.back());

const mapKlineResponse = (items) => items.map((item) => ({
    open: parseFloat(item[1]),
    high: parseFloat(item[2]),
    low: parseFloat(item[3]),
    close: parseFloat(item[4]),
    time: Number(item[0]),
    volume: normalizeCandleVolume(item[5], item[7], item[4]),
}));

const yAxisWidth = 58;
const chartTop = 10;
const chartBottom = 10;
const bottomCandlesHeightRatio = 0.25;
const bottomCandlesBottomPadding = 8;

const movingAverage = (values, windowSize = 60) => values.map((_, index) => {
    const start = Math.max(0, index - windowSize + 1);
    const window = values.slice(start, index + 1);
    return window.reduce((sum, value) => sum + value, 0) / window.length;
});

const formatCompact = (value) => new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
}).format(value);

const formatAxisPrice = (value) => new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format(value);

const drawPath = (ctx, points, color, width = 1.5) => {
    if (!points.length) return;
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
};

const drawMovingAverage = (ctx, candles, period, color, xFor, priceToY) => {
    if (candles.length < period) return;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;

    let hasStarted = false;
    for (let index = period - 1; index < candles.length; index += 1) {
        let sum = 0;
        for (let offset = 0; offset < period; offset += 1) {
            sum += candles[index - offset].close;
        }

        const maValue = sum / period;
        const x = xFor(index);
        const y = priceToY(maValue);

        if (!hasStarted) {
            ctx.moveTo(x, y);
            hasStarted = true;
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
};

const getChartGeometry = (candles, width, height) => {
    const bottomCandlesTop = height * (1 - bottomCandlesHeightRatio);
    const plot = { left: 34, right: width - yAxisWidth, top: chartTop, bottom: bottomCandlesTop };
    const plotWidth = Math.max(1, plot.right - plot.left);
    const plotHeight = Math.max(1, plot.bottom - plot.top);
    const minPrice = Math.min(...candles.map((candle) => candle.low));
    const maxPrice = Math.max(...candles.map((candle) => candle.high));
    const priceRange = Math.max(maxPrice - minPrice, data.price * 0.002);

    return {
        plot,
        plotWidth,
        plotHeight,
        minPrice,
        maxPrice,
        priceRange,
        bottomCandlesTop,
        bottomCandlesBottom: height - bottomCandlesBottomPadding,
        bottomCandlesHeight: Math.max(1, height - bottomCandlesBottomPadding - bottomCandlesTop),
        priceToY: (price) => plot.top + ((maxPrice - price) / priceRange) * plotHeight,
        xFor: (index) => plot.left + (index / Math.max(1, candles.length - 1)) * plotWidth,
    };
};

const drawGridLines = (ctx, candles, geometry, width, height) => {
    const { plot, plotHeight, maxPrice, priceRange } = geometry;
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;

    for (let index = 0; index <= 5; index += 1) {
        const y = plot.top + (plotHeight / 5) * index;
        ctx.beginPath();
        ctx.moveTo(plot.left, y);
        ctx.lineTo(plot.right, y);
        ctx.stroke();
    }

    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'left';
    const xAxisCount = 6;
    for (let index = 0; index < xAxisCount; index += 1) {
        const candleIndex = Math.round((index / (xAxisCount - 1)) * (candles.length - 1));
        const x = geometry.xFor(candleIndex);
        const date = new Date(candles[candleIndex].time);
        const label = date.toISOString().slice(0, 16).replace('T', ' ');
        ctx.fillText(label, Math.max(plot.left, x - 34), height - 7);
    }
};

const drawLineChart = (ctx, candles, geometry) => {
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
};

const drawCandlesticks = (ctx, candles, geometry) => {
    if (!candles.length) return;

    const { plot, priceToY, xFor } = geometry;
    const candleWidth = Math.max(3, Math.min(9, geometry.plotWidth / candles.length * 0.55));
    const closes = candles.map((candle) => candle.close);
    const ma60 = movingAverage(closes, 60);

    candles.forEach((candle, index) => {
        const x = xFor(index);
        const openY = priceToY(candle.open);
        const closeY = priceToY(candle.close);
        const highY = priceToY(candle.high);
        const lowY = priceToY(candle.low);
        const isPositive = candle.close >= candle.open;
        const color = isPositive ? '#0ECB81' : '#F6465D';

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(x, highY);
        ctx.lineTo(x, lowY);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.fillRect(x - candleWidth / 2, Math.min(openY, closeY), candleWidth, Math.max(Math.abs(closeY - openY), 1.5));
    });

    drawMovingAverage(ctx, candles, 60, '#F0B90B', xFor, priceToY);
    const latestMa60 = ma60[ma60.length - 1];
    ma60Value.textContent = latestMa60 ? formatAxisPrice(latestMa60) : '--';
};

const drawLivePriceLine = (ctx, geometry, width, height) => {
    const { plot, priceToY, xFor } = geometry;
    const livePrice = data.price || chartData[chartData.length - 1]?.close;
    if (!livePrice) return;

    const livePriceY = priceToY(livePrice);
    ctx.strokeStyle = 'rgba(240,185,11,0.55)';
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(plot.left, livePriceY);
    ctx.lineTo(plot.right, livePriceY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#F0B90B';
    ctx.beginPath();
    ctx.roundRect(plot.right - 48, Math.max(plot.top + 3, livePriceY - 7), 48, 14, 3);
    ctx.fill();
    ctx.fillStyle = '#171B21';
    ctx.font = '700 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(formatAxisPrice(livePrice), plot.right - 24, Math.max(plot.top + 10, livePriceY + 1));
};

const drawRightYAxisLabels = (ctx, geometry, width, height) => {
    const { plot, plotHeight, maxPrice, priceRange } = geometry;
    for (let index = 0; index <= 5; index += 1) {
        const y = plot.top + (plotHeight / 5) * index;
        const price = maxPrice - (priceRange / 5) * index;
        ctx.fillStyle = '#737d8b';
        ctx.font = '9px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatAxisPrice(price), width - 7, y - 3);
    }
};

const drawVolumeBars = (ctx, candles, geometry, width, height) => {
    if (!candles || candles.length === 0) return;

    const volumes = candles.map((candle) => Math.max(0, parseFloat(candle.volume) || 0));
    const maxVolume = Math.max(...volumes, Number.EPSILON);
    const availableWidth = width - 50;
    const slotWidth = availableWidth / candles.length;
    const barWidth = Math.max(3, slotWidth - 1);
    const maxBarHeight = height * 0.2;
    const minBarHeight = Math.max(6, height * 0.015);
    const baseY = height - 2;

    candles.forEach((candle, index) => {
        const x = index * slotWidth + slotWidth / 2;
        const volume = volumes[index];
        const barHeight = Math.max(minBarHeight, (volume / maxVolume) * maxBarHeight);
        const y = baseY - barHeight;
        const open = parseFloat(candle.open) || 0;
        const close = parseFloat(candle.close) || 0;
        const isGreen = close >= open;
        ctx.fillStyle = isGreen ? '#0ECB81' : '#F6465D';
        ctx.fillRect(x - barWidth / 2, y, barWidth, barHeight);
    });

    ctx.strokeStyle = 'rgba(255,255,255,0.035)';
    ctx.beginPath();
    ctx.moveTo(geometry.plot.left, geometry.bottomCandlesTop);
    ctx.lineTo(geometry.plot.right, geometry.bottomCandlesTop);
    ctx.stroke();
};

const drawChartWatermark = (ctx, canvas) => {
    const siteName = String(window.SITE_NAME || 'TRADEXPRO').toUpperCase();
    const width = canvas.clientWidth || canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.clientHeight || canvas.height / (window.devicePixelRatio || 1);
    const fontSize = Math.min(36, width * 0.08);

    ctx.save();
    ctx.font = `900 ${fontSize}px sans-serif`;
    const textWidth = ctx.measureText(siteName).width;
    const maxWidth = width * 0.8;
    if (textWidth > maxWidth) ctx.font = `900 ${fontSize * maxWidth / textWidth}px sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(siteName, width / 2, height / 2, maxWidth);
    ctx.restore();
};

const drawChart = (candles, width, height) => {
    const ctx = chartContext;
    const geometry = getChartGeometry(candles, width, height);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#171b21';
    ctx.fillRect(0, 0, width, height);
    drawChartWatermark(ctx, chartCanvas);

    drawGridLines(ctx, candles, geometry, width, height);
    drawLineChart(ctx, candles, geometry);
    drawVolumeBars(ctx, candles, geometry, width, height);
    drawLivePriceLine(ctx, geometry, width, height);
    drawRightYAxisLabels(ctx, geometry, width, height);
};

const renderChartWithZoom = () => {
    const width = Math.max(chartHost.clientWidth, 300);
    const height = Math.max(chartHost.clientHeight, 390);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    chartCanvas.width = Math.round(width * pixelRatio);
    chartCanvas.height = Math.round(height * pixelRatio);
    chartCanvas.style.width = `${width}px`;
    chartCanvas.style.height = `${height}px`;
    chartContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    if (chartData.length === 0) {
        chartContext.clearRect(0, 0, width, height);
        chartContext.fillStyle = '#171b21';
        chartContext.fillRect(0, 0, width, height);
        drawChartWatermark(chartContext, chartCanvas);
        return;
    }

    const maxScrollOffset = Math.max(0, chartData.length - Math.min(visibleCandleCount, chartData.length));
    scrollOffset = Math.min(scrollOffset, maxScrollOffset);
    const endIndex = chartData.length - scrollOffset;
    const visibleCandles = chartData.slice(Math.max(0, endIndex - visibleCandleCount), endIndex);
    if (visibleCandles.length > 0) drawChart(visibleCandles, width, height);
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
    if (!activePointers.has(event.pointerId)) return;
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
    }
};

chartCanvas.addEventListener('pointerup', finishPointerInteraction);
chartCanvas.addEventListener('pointercancel', finishPointerInteraction);

timeframeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const nextTimeframe = button.dataset.timeframe;
        if (nextTimeframe === activeTimeframe || isLoadingHistory) return;

        websocketRequestId += 1;
        if (websocket && websocket.readyState < WebSocket.CLOSING) websocket.close();
        window.clearTimeout(reconnectTimer);
        activeTimeframe = nextTimeframe;
        chartData = [];
        scrollOffset = 0;
        timeframeButtons.forEach((item) => {
            const selected = item === button;
            item.classList.toggle('is-active', selected);
            item.setAttribute('aria-selected', String(selected));
        });
        renderChart();
        loadHistoricalCandles(activeTimeframe);
    });
});

chartFullscreenButton.addEventListener('click', async () => {
    if (!document.fullscreenElement) {
        await chartHost.requestFullscreen?.();
    } else {
        await document.exitFullscreen?.();
    }
});

const updateMarketStats = (ticker) => {
    const update = {
        price: safeNumber(ticker.c, data.price),
        change: safeNumber(ticker.p, data.change),
        high: safeNumber(ticker.h, data.high),
        low: safeNumber(ticker.l, data.low),
        volumeBase: safeNumber(ticker.v, data.volumeBase),
        volumeQuote: safeNumber(ticker.q, data.volumeQuote),
    };
    if (!Number.isFinite(update.price) || update.price <= 0) return;
    Object.assign(data, update);
    renderMarketStats();
};

const animatePrice = (isPositive) => {
    const priceElement = document.getElementById('mainPrice');
    priceElement.classList.remove('price-flash-up', 'price-flash-down');
    void priceElement.offsetWidth;
    priceElement.classList.add(isPositive ? 'price-flash-up' : 'price-flash-down');
};

const updateKline = (kline) => {
    if (chartData.length === 0) return;

    const lastCandle = chartData[chartData.length - 1];
    const isActiveCandle = lastCandle.time === Number(kline.t);
    const updatedCandle = {
        open: safeNumber(kline.o, lastCandle.open),
        high: safeNumber(kline.h, lastCandle.high),
        low: safeNumber(kline.l, lastCandle.low),
        close: safeNumber(kline.c, lastCandle.close),
        time: Number(kline.t),
        volume: normalizeCandleVolume(kline.v, kline.q, kline.c),
    };

    if (updatedCandle.time < lastCandle.time) return;
    if (isActiveCandle) {
        lastCandle.high = Math.max(lastCandle.high, updatedCandle.high);
        lastCandle.low = Math.min(lastCandle.low, updatedCandle.low);
        lastCandle.close = updatedCandle.close;
        lastCandle.volume = updatedCandle.volume;
    } else {
        chartData.push(updatedCandle);
        chartData = chartData.slice(-100);
    }

    const activePrice = chartData[chartData.length - 1].close;
    if (data.price !== activePrice) {
        data.price = activePrice;
        const change = ((activePrice - chartData[chartData.length - 1].open) / chartData[chartData.length - 1].open) * 100;
        data.change = change;
        renderMarketStats();
        animatePrice(change >= 0);
    }

    // Recalculate the volume scale from the latest candle data on every tick.
    renderChart();
};

const scheduleReconnect = () => {
    if (isPageUnloading) return;
    const delay = Math.min(1000 * 2 ** reconnectAttempts, 16000);
    reconnectAttempts += 1;
    reconnectTimer = window.setTimeout(connectWebSocket, delay);
};

const getBinanceInterval = (timeframe) => {
    if (timeframe === 'Time') return '1m';
    return timeframe.toLowerCase();
};

const connectWebSocket = () => {
    window.clearTimeout(reconnectTimer);
    if (isPageUnloading || websocket?.readyState === WebSocket.OPEN) return;

    const requestId = ++websocketRequestId;
    const symbolLower = symbol.toLowerCase();
    const selectedInterval = getBinanceInterval(activeTimeframe);
    const streamName = `${symbolLower}@kline_${selectedInterval}`;
    websocket = new WebSocket(`${baseWsUrl}/${streamName}`);
    const currentSocket = websocket;

    currentSocket.onopen = () => {
        if (requestId !== websocketRequestId) return;
        reconnectAttempts = 0;
        chartStatus.textContent = 'Live WebSocket';
        chartStatus.dataset.connected = 'true';
    };

    currentSocket.onmessage = (event) => {
        if (requestId !== websocketRequestId) return;
        try {
            const frame = JSON.parse(event.data);
            if (frame.e === 'kline' && frame.k) updateKline(frame.k);
        } catch (error) {
            console.warn('Unable to process Binance kline stream:', error);
        }
    };

    currentSocket.onerror = () => {
        currentSocket.close();
    };

    currentSocket.onclose = () => {
        if (requestId === websocketRequestId && !isPageUnloading && chartData.length > 0) scheduleReconnect();
    };
};

const loadHistoricalCandles = async (interval) => {
    isLoadingHistory = true;
    const requestId = ++historyRequestId;
    const controller = new AbortController();
    historyRequest?.abort();
    historyRequest = controller;
    showChartLoading(true);
    document.getElementById('chartStatus').textContent = 'Loading history';

    try {
        const apiInterval = getBinanceInterval(interval);
        const params = new URLSearchParams({ symbol: normalizedSymbol, interval: apiInterval, limit: '150' });
        const response = await fetch(`https://api.binance.com/api/v3/klines?${params.toString()}`, {
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Klines request failed: ${response.status}`);
        const candles = mapKlineResponse(await response.json());
        if (!Array.isArray(candles) || candles.length === 0) throw new Error('No historical candles returned');
        if (requestId !== historyRequestId) return;

        chartData = candles;
        visibleCandleCount = 40;
        scrollOffset = 0;
        data.price = candles[candles.length - 1].close;
        data.high = Math.max(...candles.map((candle) => candle.high));
        data.low = Math.min(...candles.map((candle) => candle.low));
        data.change = 0;
        renderMarketStats();
        renderChart();
        showChartLoading(false);
        connectWebSocket();
    } catch (error) {
        if (requestId === historyRequestId && error.name !== 'AbortError') {
            showChartLoading(false);
            document.getElementById('chartStatus').textContent = 'History unavailable';
            console.error('Unable to load Binance historical candles:', error);
        }
    } finally {
        if (requestId === historyRequestId) isLoadingHistory = false;
    }
};

const showChartLoading = (isLoading) => {
    let loading = chartHost.querySelector('.chart-loading');
    if (!loading) {
        loading = document.createElement('div');
        loading.className = 'chart-loading';
        loading.setAttribute('role', 'status');
        loading.setAttribute('aria-label', 'Loading chart history');
        chartHost.appendChild(loading);
    }
    loading.hidden = !isLoading;
};

const loadMarketStats = async () => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${encodeURIComponent(normalizedSymbol)}`, {
            signal: AbortSignal.timeout(5000),
        });
        if (!response.ok) throw new Error('Ticker request failed');
        const ticker = await response.json();
        if (ticker && Number.isFinite(Number(ticker.c))) updateMarketStats(ticker);
    } catch (error) {
        renderMarketStats();
    }
};

document.getElementById('market-buy').addEventListener('click', () => showToast(`Buy order prepared for ${data.name}`));
document.getElementById('market-sell').addEventListener('click', () => showToast(`Sell order prepared for ${data.name}`));

syncFavoriteState();
renderMarketStats();
renderChart();
loadMarketStats();
loadHistoricalCandles(activeTimeframe);

if ('ResizeObserver' in window) {
    chartResizeObserver = new ResizeObserver(renderChart);
    chartResizeObserver.observe(chartHost);
} else {
    window.addEventListener('resize', renderChart);
}

window.onbeforeunload = () => {
    isPageUnloading = true;
    window.clearTimeout(reconnectTimer);
    historyRequest?.abort();
    if (websocket && websocket.readyState < WebSocket.CLOSING) websocket.close();
};

window.setInterval(loadMarketStats, 30000);

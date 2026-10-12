(function () {
    'use strict';

    const page = document.querySelector('[data-trade-page]');
    if (!page) return;

    const canvas = document.getElementById('tradeCanvas');
    const context = canvas.getContext('2d');
    const chartMessage = page.querySelector('[data-chart-message]');
    const feedStatus = page.querySelector('[data-feed-status]');
    const intervalButtons = Array.from(page.querySelectorAll('[data-chart-interval]'));
    const indicatorButtons = Array.from(page.querySelectorAll('[data-indicator-toggle]'));
    const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 8 });
    const volumeFormat = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 });
    const moneyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const activePointers = new Map();
    const state = {
        symbol: String(page.dataset.symbol || 'AAVE').toUpperCase(),
        price: parsePrice(page.dataset.price) || 167.75,
        change: String(page.dataset.change || '-0.37%'),
        interval: '15m',
        candles: [],
        showMa: true,
        showVolume: true,
        hoverIndex: null,
        requestId: 0,
    };
    let zoomLevel = 1.0;
    let panOffset = 0;
    let isDragging = false;
    let startX = 0;
    let dragStartPanOffset = 0;
    let pinchStartDistance = 0;
    let pinchStartZoom = 1.0;
    let pinchAnchorRatio = 0.5;

    function isDarkColor(color) {
        const hexMatch = color.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
        let channels = null;

        if (hexMatch) {
            const hex = hexMatch[1].length === 3
                ? hexMatch[1].split('').map((part) => part + part).join('')
                : hexMatch[1];
            channels = [0, 2, 4].map((index) => Number.parseInt(hex.slice(index, index + 2), 16));
        } else {
            const rgbMatch = color.match(/rgba?\(\s*(\d+(?:\.\d+)?)[, ]+\s*(\d+(?:\.\d+)?)[, ]+\s*(\d+(?:\.\d+)?)/i);
            if (rgbMatch) channels = rgbMatch.slice(1, 4).map(Number);
        }

        if (!channels) return false;
        const luminance = (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
        return luminance < 128;
    }

    function getThemeColors() {
        const root = document.documentElement;
        const body = document.body;
        const appBackground = getComputedStyle(root).getPropertyValue('--bg').trim() ||
            getComputedStyle(body).getPropertyValue('--bg').trim();
        const isDark = root.classList.contains('dark') || body.classList.contains('dark') ||
            root.classList.contains('van-theme-dark') || body.classList.contains('van-theme-dark') ||
            isDarkColor(appBackground);

        return {
            isDark,
            bg: isDark ? '#12161C' : '#FFFFFF',
            appBg: isDark ? '#0B0E11' : '#F1F5F9',
            cardBg: isDark ? '#181E27' : '#F8FAFC',
            textPrimary: isDark ? '#FFFFFF' : '#0F172A',
            textSecondary: isDark ? '#848E9C' : '#64748B',
            border: isDark ? '#1E2329' : '#E2E8F0',
            gridLines: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
            watermark: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
            primaryAccent: '#154DE0',
            greenChange: '#0ECB81',
            redChange: '#F6465D',
            maLine: isDark ? '#C6CDD6' : '#94A3B8',
            accentText: '#FFFFFF',
            overlay: isDark ? 'rgba(18, 22, 28, 0.84)' : 'rgba(248, 250, 252, 0.92)',
        };
    }

    function applyThemeColors(colors = getThemeColors()) {
        const variables = {
            '--terminal-bg': colors.bg,
            '--terminal-panel': colors.cardBg,
            '--terminal-line': colors.border,
            '--terminal-muted': colors.textSecondary,
            '--terminal-text': colors.textPrimary,
            '--terminal-grid': colors.gridLines,
            '--terminal-watermark': colors.watermark,
            '--terminal-blue': colors.primaryAccent,
            '--terminal-green': colors.greenChange,
            '--terminal-red': colors.redChange,
            '--terminal-ma': colors.maLine,
            '--terminal-accent-text': colors.accentText,
            '--terminal-overlay': colors.overlay,
        };

        Object.entries(variables).forEach(([name, value]) => page.style.setProperty(name, value));
        document.documentElement.style.setProperty('--trade-app-bg', colors.appBg);
        document.documentElement.style.setProperty('--trade-text-primary', colors.textPrimary);
        page.style.colorScheme = colors.isDark ? 'dark' : 'light';
    }

    function parsePrice(value) {
        const parsed = Number.parseFloat(String(value || '').replace(/[$,]/g, ''));
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function drawWatermark(ctx, width, height, colors = getThemeColors()) {
        ctx.save();
        ctx.font = 'bold 36px sans-serif';
        ctx.fillStyle = colors.watermark;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('TradeXPro', width / 2, height / 2);
        ctx.restore();
    }

    function getBinanceSymbol(symbol) {
        const base = symbol.split('-')[0].replace(/(?:USDT|USD)$/i, '');
        return `${base}USDT`;
    }

    function formatPrice(value) {
        return numberFormat.format(value);
    }

    function formatVolume(value) {
        return volumeFormat.format(value);
    }

    function setFeedMessage(message, isError = false) {
        chartMessage.textContent = message;
        chartMessage.hidden = !message;
        chartMessage.classList.toggle('is-error', isError);
    }

    function updateQuote(price, change = state.change) {
        state.price = price;
        state.change = change;
        const isPositive = Number.parseFloat(change) >= 0;
        const priceText = formatPrice(price);
        const priceElement = page.querySelector('[data-trade-price]');
        const changeElement = page.querySelector('[data-trade-change]');

        priceElement.textContent = priceText;
        priceElement.classList.toggle('is-positive', isPositive);
        priceElement.classList.toggle('is-negative', !isPositive);
        changeElement.textContent = change;
        changeElement.classList.toggle('is-positive', isPositive);
        changeElement.classList.toggle('is-negative', !isPositive);
        page.querySelector('[data-trade-usd-price]').textContent = `$${priceText}`;
        page.querySelector('[data-mark-price]').textContent = priceText;
        page.querySelector('[data-legend-price]').textContent = priceText;
    }

    function resizeCanvas() {
        const bounds = canvas.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;

        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = Math.round(bounds.width * pixelRatio);
        canvas.height = Math.round(bounds.height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        drawChart();
    }

    function movingAverage(candles, period = 60) {
        return candles.map((candle, index) => {
            const start = Math.max(0, index - period + 1);
            const windowCandles = candles.slice(start, index + 1);
            return windowCandles.reduce((sum, item) => sum + item.close, 0) / windowCandles.length;
        });
    }

    function getVisibleCandleCount() {
        return Math.min(state.candles.length, Math.max(12, Math.round(100 / zoomLevel)));
    }

    function getMaxPanOffset() {
        const visibleCount = getVisibleCandleCount();
        if (!visibleCount) return 0;
        const plotWidth = Math.max(1, canvas.clientWidth - 66);
        const candleStep = plotWidth / visibleCount;
        return Math.max(0, (state.candles.length - visibleCount) * candleStep);
    }

    function getVisibleCandles(plotWidth) {
        const visibleCount = getVisibleCandleCount();
        if (!visibleCount) return [];

        const candleStep = plotWidth / visibleCount;
        const maxPanOffset = Math.max(0, (state.candles.length - visibleCount) * candleStep);
        panOffset = Math.max(0, Math.min(panOffset, maxPanOffset));
        const candlesBehindLatest = Math.round(panOffset / candleStep);
        const end = Math.max(0, state.candles.length - candlesBehindLatest);
        const start = Math.max(0, end - visibleCount);

        return state.candles.slice(start, end);
    }

    function chartPointerRatio(clientX) {
        const bounds = canvas.getBoundingClientRect();
        const plotWidth = Math.max(1, bounds.width - 66);
        return Math.max(0, Math.min(1, (clientX - bounds.left - 10) / plotWidth));
    }

    function updateZoomReadout() {
        const readout = page.querySelector('[data-chart-zoom]');
        if (readout) readout.textContent = `${zoomLevel.toFixed(1)}x`;
    }

    function setZoom(nextZoom, anchorRatio = 0.5) {
        const nextLevel = Math.max(0.5, Math.min(3.0, nextZoom));
        if (nextLevel === zoomLevel) return;

        const oldVisibleCount = getVisibleCandleCount();
        const plotWidth = Math.max(1, canvas.clientWidth - 66);
        const oldStep = oldVisibleCount ? plotWidth / oldVisibleCount : plotWidth;
        const oldBehindLatest = oldStep ? panOffset / oldStep : 0;
        const oldEnd = state.candles.length - oldBehindLatest;
        const oldStart = oldEnd - oldVisibleCount;
        const anchoredIndex = oldStart + anchorRatio * Math.max(0, oldVisibleCount - 1);

        zoomLevel = nextLevel;

        const newVisibleCount = getVisibleCandleCount();
        const newStep = plotWidth / Math.max(1, newVisibleCount);
        const newEnd = anchoredIndex + (1 - anchorRatio) * Math.max(0, newVisibleCount - 1);
        panOffset = Math.max(0, (state.candles.length - 1 - newEnd) * newStep);
        panOffset = Math.min(panOffset, getMaxPanOffset());
        updateZoomReadout();
        drawChart();
    }

    function drawChart() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (!width || !height) return;

        const colors = getThemeColors();
        context.clearRect(0, 0, width, height);
        context.fillStyle = colors.bg;
        context.fillRect(0, 0, width, height);
        drawWatermark(context, width, height, colors);

        const left = 10;
        const right = width - 56;
        const top = 24;
        const volumeHeight = state.showVolume ? 52 : 0;
        const volumeGap = state.showVolume ? 20 : 0;
        const bottom = height - volumeHeight - volumeGap - 18;
        const volumeTop = bottom + volumeGap;
        const volumeBottom = height - 14;
        const plotWidth = Math.max(1, right - left);
        const candles = getVisibleCandles(plotWidth);
        const values = candles.flatMap((candle) => [candle.high, candle.low]);
        const rawMin = values.length ? Math.min(...values) : state.price * 0.99;
        const rawMax = values.length ? Math.max(...values) : state.price * 1.01;
        const padding = Math.max((rawMax - rawMin) * 0.12, state.price * 0.001);
        const minPrice = rawMin - padding;
        const maxPrice = rawMax + padding;
        const priceRange = maxPrice - minPrice || 1;
        const xFor = (index) => left + (candles.length <= 1 ? 0 : index / (candles.length - 1)) * plotWidth;
        const yFor = (price) => top + ((maxPrice - price) / priceRange) * (bottom - top);

        context.save();
        context.font = '10px sans-serif';
        context.textAlign = 'right';
        context.textBaseline = 'middle';
        context.strokeStyle = colors.gridLines;
        context.lineWidth = 1;

        for (let line = 0; line <= 4; line += 1) {
            const y = top + ((bottom - top) * line) / 4;
            const value = maxPrice - (priceRange * line) / 4;
            context.beginPath();
            context.moveTo(left, y);
            context.lineTo(right, y);
            context.stroke();
            context.fillStyle = colors.textSecondary;
            context.fillText(formatPrice(value), width - 5, y);
        }
        context.restore();

        if (!candles.length) {
            const currentY = yFor(state.price);
            drawCurrentPriceLine(left, right, currentY, width, state.price);
            return;
        }

        const closes = candles.map((candle) => candle.close);
        const averages = movingAverage(candles);
        const linePoints = closes.map((value, index) => ({ x: xFor(index), y: yFor(value) }));
        const area = context.createLinearGradient(0, top, 0, bottom);
        area.addColorStop(0, 'rgba(240, 185, 11, 0.22)');
        area.addColorStop(1, 'rgba(240, 185, 11, 0.005)');

        context.beginPath();
        linePoints.forEach((point, index) => {
            if (index === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
        });
        context.lineTo(linePoints[linePoints.length - 1].x, bottom);
        context.lineTo(linePoints[0].x, bottom);
        context.closePath();
        context.fillStyle = area;
        context.fill();

        context.beginPath();
        linePoints.forEach((point, index) => {
            if (index === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
        });
        context.strokeStyle = colors.primaryAccent;
        context.lineWidth = 2;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.stroke();

        if (state.showMa) {
            context.beginPath();
            averages.forEach((value, index) => {
                if (index === 0) context.moveTo(xFor(index), yFor(value));
                else context.lineTo(xFor(index), yFor(value));
            });
            context.strokeStyle = colors.maLine;
            context.lineWidth = 1.25;
            context.stroke();
            page.querySelector('[data-ma-value]').textContent = formatPrice(averages[averages.length - 1]);
        }

        drawCurrentPriceLine(left, right, yFor(state.price), width, state.price);

        if (state.showVolume) drawVolume(candles, left, right, volumeTop, volumeBottom);
        drawTimeLabels(candles, left, right, height);

        if (state.hoverIndex !== null) {
            drawCrosshair(linePoints, candles, state.hoverIndex, top, bottom);
        }
    }

    function drawCurrentPriceLine(left, right, y, width, price) {
        const colors = getThemeColors();
        context.save();
        context.setLineDash([4, 4]);
        context.strokeStyle = colors.primaryAccent;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(left, y);
        context.lineTo(right, y);
        context.stroke();
        context.setLineDash([]);
        context.fillStyle = colors.primaryAccent;
        context.fillRect(right + 3, y - 10, width - right - 6, 20);
        context.fillStyle = colors.accentText;
        context.font = 'bold 9px sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(formatPrice(price), right + (width - right) / 2, y);
        context.restore();
    }

    function drawVolume(candles, left, right, top, bottom) {
        const colors = getThemeColors();
        const maxVolume = Math.max(...candles.map((candle) => candle.quoteVolume || candle.volume), 1);
        const step = (right - left) / candles.length;
        const barWidth = Math.max(1, Math.min(7, step * 0.62));

        candles.forEach((candle, index) => {
            const volume = candle.quoteVolume || candle.volume;
            const barHeight = Math.max(1, (volume / maxVolume) * (bottom - top));
            context.fillStyle = candle.close >= candle.open ? colors.greenChange : colors.redChange;
            context.fillRect(left + index * step + (step - barWidth) / 2, bottom - barHeight, barWidth, barHeight);
        });

        context.strokeStyle = colors.gridLines;
        context.beginPath();
        context.moveTo(left, top - 5);
        context.lineTo(right, top - 5);
        context.stroke();
    }

    function drawTimeLabels(candles, left, right, height) {
        if (!candles.length) return;
        const colors = getThemeColors();
        const labelIndexes = [0, Math.floor((candles.length - 1) / 3), Math.floor(((candles.length - 1) * 2) / 3), candles.length - 1];

        context.save();
        context.fillStyle = colors.textSecondary;
        context.font = '9px sans-serif';
        context.textBaseline = 'bottom';
        labelIndexes.forEach((index, labelIndex) => {
            const date = new Date(candles[index].time);
            const label = state.interval === '1d'
                ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                : date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            context.textAlign = labelIndex === 0 ? 'left' : labelIndex === labelIndexes.length - 1 ? 'right' : 'center';
            context.fillText(label, xForTime(index, candles.length, left, right), height - 1);
        });
        context.restore();
    }

    function xForTime(index, count, left, right) {
        return left + (count <= 1 ? 0 : index / (count - 1)) * (right - left);
    }

    function drawCrosshair(points, candles, index, top, bottom) {
        const point = points[index];
        if (!point) return;

        const colors = getThemeColors();
        context.save();
        context.setLineDash([3, 4]);
        context.strokeStyle = colors.textSecondary;
        context.beginPath();
        context.moveTo(point.x, top);
        context.lineTo(point.x, bottom);
        context.stroke();
        context.setLineDash([]);
        context.fillStyle = colors.primaryAccent;
        context.beginPath();
        context.arc(point.x, point.y, 3, 0, Math.PI * 2);
        context.fill();
        context.restore();

        page.querySelector('[data-legend-price]').textContent = formatPrice(candles[index].close);
    }

    async function loadMarketData() {
        const requestId = ++state.requestId;
        const pair = getBinanceSymbol(state.symbol);
        const params = new URLSearchParams({ symbol: pair, interval: state.interval, limit: '500' });

        feedStatus.textContent = 'Loading market data';
        setFeedMessage('Loading market data...');

        try {
            const [candleResult, tickerResult] = await Promise.allSettled([
                fetch(`https://api.binance.com/api/v3/klines?${params.toString()}`),
                fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${encodeURIComponent(pair)}`),
            ]);
            if (candleResult.status === 'rejected') throw candleResult.reason;

            const candleResponse = candleResult.value;
            if (!candleResponse.ok) throw new Error('Market candles are unavailable for this instrument.');

            const rows = await candleResponse.json();
            if (requestId !== state.requestId) return;

            state.candles = rows.map((row) => ({
                time: Number(row[0]),
                open: Number(row[1]),
                high: Number(row[2]),
                low: Number(row[3]),
                close: Number(row[4]),
                volume: Number(row[5]),
                quoteVolume: Number(row[7]),
            }));

            if (!state.candles.length) throw new Error('No chart history was returned for this instrument.');

            const tickerResponse = tickerResult.status === 'fulfilled' ? tickerResult.value : null;
            const ticker = tickerResponse?.ok ? await tickerResponse.json().catch(() => null) : null;
            const lastCandle = state.candles[state.candles.length - 1];
            const latestPrice = Number(ticker?.lastPrice) || lastCandle.close;
            const change = ticker ? `${Number(ticker.priceChangePercent) >= 0 ? '+' : ''}${Number(ticker.priceChangePercent).toFixed(2)}%` : state.change;

            updateQuote(latestPrice, change);
            page.querySelector('[data-stat-high]').textContent = ticker ? formatPrice(Number(ticker.highPrice)) : '--';
            page.querySelector('[data-stat-low]').textContent = ticker ? formatPrice(Number(ticker.lowPrice)) : '--';
            page.querySelector('[data-stat-volume]').textContent = ticker ? formatVolume(Number(ticker.volume)) : '--';
            page.querySelector('[data-stat-quote-volume]').textContent = ticker ? formatVolume(Number(ticker.quoteVolume)) : '--';
            page.querySelector('[data-legend-price]').textContent = formatPrice(latestPrice);
            page.querySelector('[data-ma-value]').textContent = formatPrice(movingAverage(state.candles).at(-1));
            feedStatus.textContent = 'LIVE · BINANCE';
            setFeedMessage('');
            drawChart();
        } catch (error) {
            if (requestId !== state.requestId) return;
            state.candles = [];
            page.querySelector('[data-stat-high]').textContent = '--';
            page.querySelector('[data-stat-low]').textContent = '--';
            page.querySelector('[data-stat-volume]').textContent = '--';
            page.querySelector('[data-stat-quote-volume]').textContent = '--';
            page.querySelector('[data-ma-value]').textContent = '--';
            feedStatus.textContent = 'FEED UNAVAILABLE';
            setFeedMessage(error instanceof Error ? error.message : 'Market chart data is unavailable.', true);
            drawChart();
        }
    }

    async function renderTradePage(coin) {
        const nextSymbol = String(coin?.symbol || 'AAVE').toUpperCase();
        if (nextSymbol !== state.symbol) {
            zoomLevel = 1.0;
            panOffset = 0;
        }
        state.symbol = nextSymbol;
        state.change = String(coin?.change || '-0.37%');
        const initialPrice = parsePrice(coin?.price) || 167.75;
        const pair = /(?:USDT|USD)$/i.test(state.symbol) ? state.symbol : `${state.symbol}/USDT`;

        page.querySelector('[data-trade-pair]').textContent = pair;
        page.querySelector('[data-volume-symbol]').textContent = state.symbol.replace(/(?:USDT|USD)$/i, '') || state.symbol;
        page.querySelector('[data-stat-high]').textContent = '--';
        page.querySelector('[data-stat-low]').textContent = '--';
        page.querySelector('[data-stat-volume]').textContent = '--';
        page.querySelector('[data-stat-quote-volume]').textContent = '--';
        document.title = `${state.symbol} Trading Chart | TradeXPro`;
        updateZoomReadout();
        updateQuote(initialPrice, state.change);
        resizeCanvas();
        await loadMarketData();
    }

    intervalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            state.interval = button.dataset.chartInterval;
            panOffset = 0;
            intervalButtons.forEach((item) => {
                const active = item === button;
                item.setAttribute('aria-pressed', String(active));
                item.classList.toggle('is-active', active);
            });
            loadMarketData();
        });
    });

    indicatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const active = button.getAttribute('aria-pressed') !== 'true';
            button.setAttribute('aria-pressed', String(active));
            button.classList.toggle('is-selected', active);
            if (button.dataset.indicatorToggle === 'ma') {
                state.showMa = active;
                page.querySelector('[data-ma-legend]').hidden = !active;
            } else {
                state.showVolume = active;
                page.querySelector('.trade-terminal__volume-legend').hidden = !active;
            }
            drawChart();
        });
    });

    const favoriteButton = page.querySelector('[data-trade-favorite]');
    favoriteButton.addEventListener('click', () => {
        const isFavorite = favoriteButton.getAttribute('aria-pressed') !== 'true';
        favoriteButton.setAttribute('aria-pressed', String(isFavorite));
        favoriteButton.setAttribute('aria-label', `${isFavorite ? 'Remove' : 'Add'} pair ${state.symbol} to favorites`);
        favoriteButton.classList.toggle('is-favorite', isFavorite);
    });

    page.querySelector('[data-trade-share]').addEventListener('click', async () => {
        const status = page.querySelector('[data-trade-action-status]');

        try {
            if (navigator.share) {
                await navigator.share({ title: `${state.symbol} Trading Chart | TradeXPro`, url: window.location.href });
                status.textContent = 'Shared';
                return;
            }

            await navigator.clipboard.writeText(window.location.href);
            status.textContent = 'Link copied';
        } catch (error) {
            status.textContent = error.name === 'AbortError' ? '' : 'Unable to share';
        }
    });

    const amountInput = page.querySelector('#trade-amount-input');
    const durationSelect = page.querySelector('#trade-duration-select');
    const tradeDialog = page.querySelector('[data-trade-confirm]');
    const tradeConfirmForm = page.querySelector('[data-trade-confirm-form]');
    const tradeFeedback = page.querySelector('[data-trade-feedback]');
    const orderButtons = Array.from(page.querySelectorAll('[data-trade-direction]'));
    let pendingTradeDirection = null;

    function getTradeAmount() {
        if (!amountInput) return null;
        const amount = Number(amountInput.value);
        return Number.isFinite(amount) && amount >= 1 ? amount : null;
    }

    function setConfirmationText(id, text) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Trade confirmation element #${id} was not found.`);
            return null;
        }

        element.textContent = text;
        return element;
    }

    function updateTradePayout() {
        const amount = getTradeAmount();
        const valid = amount !== null;
        orderButtons.forEach((button) => {
            button.disabled = !valid;
        });

        const payout = valid ? moneyFormat.format(amount * 1.92) : '--';
        const payoutElement = page.querySelector('[data-trade-payout]');
        if (payoutElement) payoutElement.textContent = payout;
        else console.warn('Trade payout summary element was not found.');
    }

    function openTradePreview(direction) {
        const amount = getTradeAmount();
        if (amount === null) {
            if (amountInput) {
                amountInput.setCustomValidity('Enter an amount of at least 1 USDT.');
                amountInput.reportValidity();
            }
            return;
        }

        amountInput.setCustomValidity('');
        pendingTradeDirection = direction;
        const pair = page.querySelector('[data-trade-pair]')?.textContent.trim() || `${state.symbol}/USDT`;
        const duration = durationSelect?.selectedOptions?.[0]?.textContent.trim() || '60s';
        const directionValue = setConfirmationText('conf-direction', direction);
        directionValue?.classList.toggle('is-up', direction === 'UP');
        directionValue?.classList.toggle('is-down', direction === 'DOWN');

        const directionBadge = setConfirmationText('conf-direction-badge', direction);
        directionBadge?.classList.toggle('is-up', direction === 'UP');
        directionBadge?.classList.toggle('is-down', direction === 'DOWN');

        const ruleText = setConfirmationText('conf-rule-text', direction === 'UP' ? 'Close > Entry' : 'Close < Entry');
        const rule = document.getElementById('conf-rule');
        if (rule) {
            rule.classList.toggle('is-up', direction === 'UP');
            rule.classList.toggle('is-down', direction === 'DOWN');
        } else {
            console.warn('Trade confirmation element #conf-rule was not found.');
        }

        setConfirmationText('conf-pair', pair);
        setConfirmationText('conf-amount', `${moneyFormat.format(amount)} USDT`);
        setConfirmationText('conf-duration', duration);
        setConfirmationText('conf-payout-rate', '192%');
        setConfirmationText('conf-payout', moneyFormat.format(amount * 1.92));
        setConfirmationText('conf-fee', '0.00 USDT');

        const modal = document.getElementById('trade-confirmation-modal') || tradeDialog;
        if (!modal) {
            console.error("Trade confirmation modal '#trade-confirmation-modal' was not found.");
            return;
        }

        modal.classList.remove('hidden');
        if (typeof modal.showModal === 'function') modal.showModal();
        else {
            modal.setAttribute('aria-hidden', 'false');
            modal.setAttribute('open', '');
        }
    }

    amountInput?.addEventListener('input', () => {
        amountInput.setCustomValidity('');
        if (tradeFeedback) tradeFeedback.textContent = 'Preview only. Live order execution is not connected.';
        updateTradePayout();
    });
    durationSelect?.addEventListener('change', () => {
        if (tradeFeedback) tradeFeedback.textContent = 'Preview only. Live order execution is not connected.';
    });
    orderButtons.forEach((button) => {
        button.addEventListener('click', () => openTradePreview(button.dataset.tradeDirection));
    });
    if (tradeConfirmForm) {
        tradeConfirmForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const confirmed = event.submitter?.value === 'confirm';
            const modal = document.getElementById('trade-confirmation-modal') || tradeDialog;

            if (modal && typeof modal.close === 'function') modal.close();
            else if (modal) {
                modal.classList.add('hidden');
                modal.setAttribute('aria-hidden', 'true');
                modal.removeAttribute('open');
            }

            if (confirmed && pendingTradeDirection && tradeFeedback) {
                tradeFeedback.textContent = `${pendingTradeDirection} preview confirmed. No live order was placed.`;
            }
            pendingTradeDirection = null;
        });
    } else {
        console.warn('Trade confirmation form was not found.');
    }

    updateTradePayout();

    canvas.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;

        activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        canvas.setPointerCapture(event.pointerId);

        if (activePointers.size === 1) {
            isDragging = true;
            startX = event.clientX;
            dragStartPanOffset = panOffset;
            state.hoverIndex = null;
            canvas.classList.add('is-dragging');
            return;
        }

        if (activePointers.size === 2) {
            const points = Array.from(activePointers.values());
            pinchStartDistance = Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y);
            pinchStartZoom = zoomLevel;
            pinchAnchorRatio = chartPointerRatio((points[0].x + points[1].x) / 2);
            isDragging = false;
            canvas.classList.remove('is-dragging');
        }
    });

    canvas.addEventListener('pointermove', (event) => {
        if (activePointers.has(event.pointerId)) {
            activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

            if (activePointers.size >= 2) {
                const points = Array.from(activePointers.values());
                const distance = Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y);
                if (pinchStartDistance > 0) setZoom(pinchStartZoom * (distance / pinchStartDistance), pinchAnchorRatio);
                return;
            }

            if (isDragging) {
                panOffset = Math.max(0, Math.min(getMaxPanOffset(), dragStartPanOffset + startX - event.clientX));
                drawChart();
                return;
            }
        }

        if (!state.candles.length) return;
        const ratio = chartPointerRatio(event.clientX);
        const visibleCount = getVisibleCandleCount();
        const candleStep = Math.max(1, canvas.clientWidth - 66) / Math.max(1, visibleCount);
        const behindLatest = Math.round(panOffset / candleStep);
        const end = state.candles.length - behindLatest;
        const start = Math.max(0, end - visibleCount);
        state.hoverIndex = Math.max(0, Math.min(visibleCount - 1, Math.round(ratio * (visibleCount - 1))));
        state.hoverCandleStart = start;
        drawChart();
    });

    function finishPointer(event) {
        activePointers.delete(event.pointerId);

        if (activePointers.size === 1) {
            const remaining = Array.from(activePointers.values())[0];
            isDragging = true;
            startX = remaining.x;
            dragStartPanOffset = panOffset;
            canvas.classList.add('is-dragging');
        } else {
            isDragging = false;
            pinchStartDistance = 0;
            canvas.classList.remove('is-dragging');
        }
    }

    canvas.addEventListener('pointerup', finishPointer);
    canvas.addEventListener('pointercancel', finishPointer);

    canvas.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            panOffset = Math.max(0, Math.min(getMaxPanOffset(), panOffset + event.deltaX + event.deltaY));
            drawChart();
            return;
        }

        setZoom(zoomLevel * Math.exp(-event.deltaY * 0.0015), chartPointerRatio(event.clientX));
    }, { passive: false });

    page.querySelector('[data-chart-zoom-reset]').addEventListener('click', () => {
        zoomLevel = 1.0;
        panOffset = 0;
        updateZoomReadout();
        drawChart();
    });

    canvas.addEventListener('pointerleave', () => {
        if (activePointers.size || isDragging) return;
        state.hoverIndex = null;
        page.querySelector('[data-legend-price]').textContent = formatPrice(state.price);
        drawChart();
    });

    if ('ResizeObserver' in window) {
        new ResizeObserver(resizeCanvas).observe(canvas.parentElement);
    } else {
        window.addEventListener('resize', resizeCanvas);
    }

    let themeSignature = '';
    function refreshTheme() {
        const colors = getThemeColors();
        const nextSignature = JSON.stringify(colors);
        if (nextSignature === themeSignature) return;

        themeSignature = nextSignature;
        applyThemeColors(colors);
        drawChart();
    }

    const themeObserver = new MutationObserver(refreshTheme);
    const themeAttributes = { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] };
    themeObserver.observe(document.documentElement, themeAttributes);
    themeObserver.observe(document.body, themeAttributes);
    refreshTheme();

    window.drawWatermark = drawWatermark;
    window.getThemeColors = getThemeColors;
    window.renderTradePage = renderTradePage;
    renderTradePage({
        symbol: page.dataset.symbol,
        price: page.dataset.price,
        change: page.dataset.change,
    });
})();
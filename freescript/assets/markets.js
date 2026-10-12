(function () {
    'use strict';

    const marketRoot = document.querySelector('[data-market-grid]')?.closest('main');
    if (!marketRoot) return;

    const getMarketRowValue = (row, attribute, selectors, fallback) => {
        const displayedValue = selectors
            .map((selector) => row.querySelector(selector)?.textContent.trim())
            .find((value) => value && !['--', 'Loading...', 'Unavailable'].includes(value));

        return displayedValue || row.getAttribute(attribute) || fallback;
    };

    marketRoot.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;

        const row = event.target.closest('.market-row-item');
        if (!row || !marketRoot.contains(row) || event.target.closest('button, a, input, select, textarea')) return;

        const symbol = row.getAttribute('data-symbol') || 'AAVE';
        const price = getMarketRowValue(row, 'data-price', [
            '[data-crypto-price]',
            '[data-futures-mark-price]',
            '[data-futures-last-price]',
            '[data-coinm-mark-price]',
            '[data-coinm-last-price]',
            ':scope > div:nth-child(2) > div:first-child',
        ], '167.75');
        const change = getMarketRowValue(row, 'data-change', [
            '[data-crypto-change]',
            '[data-futures-change]',
            '[data-coinm-change]',
            ':scope > div:nth-child(3) span',
        ], '-0.37%');
        const tradeUrl = new URL(marketRoot.dataset.tradeUrl, window.location.href);
        tradeUrl.searchParams.set('symbol', symbol);
        tradeUrl.searchParams.set('price', price);
        tradeUrl.searchParams.set('change', change);
        window.location.href = tradeUrl.toString();
    });

    const cards = Array.from(marketRoot.querySelectorAll('[data-market-card]'));
    const tabs = Array.from(marketRoot.querySelectorAll('[data-market-tab]'));
    const search = marketRoot.querySelector('[data-market-search]');
    const emptyState = marketRoot.querySelector('[data-market-empty]');
    const favoritesView = marketRoot.querySelector('[data-market-view="Favorites"]');
    const cryptoView = marketRoot.querySelector('[data-market-view="Crypto"]');
    const cryptoRowsList = marketRoot.querySelector('#cryptoRowsList');
    const cryptoEmptyState = marketRoot.querySelector('[data-crypto-empty]');
    const bStocksRowsList = marketRoot.querySelector('#bStocksRowsList');
    const bStocksEmptyState = marketRoot.querySelector('[data-bstocks-empty]');
    const tradFiRowsList = marketRoot.querySelector('#tradFiRowsList');
    const tradFiEmptyState = marketRoot.querySelector('[data-tradfi-empty]');
    const tradFiSpotRowsList = marketRoot.querySelector('#tradFiSpotRowsList');
    const tradFiSpotEmptyState = marketRoot.querySelector('[data-tradfi-spot-empty]');
    const tradFiFuturesRowsList = marketRoot.querySelector('#tradFiFuturesRowsList');
    const tradFiFuturesEmptyState = marketRoot.querySelector('[data-tradfi-futures-empty]');
    const alphaView = marketRoot.querySelector('[data-market-view="Alpha"]');
    const alphaRowsList = marketRoot.querySelector('#alphaRowsList');
    const alphaEmptyState = marketRoot.querySelector('[data-alpha-empty]');
    const alphaFilters = Array.from(marketRoot.querySelectorAll('[data-alpha-filter]'));
    const tradFiView = marketRoot.querySelector('[data-market-view="TradFi"]');
    const tradFiSubTabs = Array.from(marketRoot.querySelectorAll('[data-tradfi-subtab]'));
    const tradFiFilters = Array.from(marketRoot.querySelectorAll('[data-tradfi-filter]'));
    const tradFiSpotFilters = Array.from(marketRoot.querySelectorAll('[data-tradfi-spot-filter]'));
    const tradFiFuturesFilters = Array.from(marketRoot.querySelectorAll('[data-tradfi-futures-filter]'));
    const tradFiStocksContent = marketRoot.querySelector('[data-tradfi-content="Stocks"]');
    const tradFiSpotContent = marketRoot.querySelector('[data-tradfi-content="Spot"]');
    const tradFiFuturesContent = marketRoot.querySelector('[data-tradfi-content="Futures"]');
    const cryptoData = JSON.parse(marketRoot.querySelector('#crypto-market-data').textContent);
    const usdMarginedData = JSON.parse(marketRoot.querySelector('#usd-m-market-data').textContent);
    const usdMarginedRows = marketRoot.querySelector('#usdMarginedRows');
    const futuresEmptyState = marketRoot.querySelector('[data-futures-empty]');
    const coinMarginedData = JSON.parse(marketRoot.querySelector('#coin-m-market-data').textContent);
    const coinMarginedRows = marketRoot.querySelector('#coinMarginedRows');
    const coinMarginedEmptyState = marketRoot.querySelector('[data-coinm-empty]');
    const optionsRowsList = marketRoot.querySelector('#optionsRowsList');
    const optionsEmptyState = marketRoot.querySelector('[data-options-empty]');
    const cryptoTypeEmpty = marketRoot.querySelector('[data-crypto-type-empty]');
    const cryptoSubViews = Array.from(marketRoot.querySelectorAll('[data-crypto-subview]'));
    const cryptoFilters = Array.from(marketRoot.querySelectorAll('[data-crypto-filter]'));
    const futuresFilters = Array.from(marketRoot.querySelectorAll('[data-futures-filter]'));
    const coinMarginedFilters = Array.from(marketRoot.querySelectorAll('[data-coinm-filter]'));
    let activeCryptoMarketType = 'Spot';
    let activeCryptoFilter = 'All';
    let activeFuturesFilter = 'All';
    let activeCoinMarginedFilter = 'All';
    let activeTradFiSubTab = 'Stocks';
    let activeTradFiFilter = 'US Stocks';
    let activeTradFiSpotFilter = 'bStocks';
    let activeTradFiFuturesFilter = 'All';
    const defaultOptionsData = [
        { symbol: 'XRP-261016-1.38-C', vol: '6.74 USDT', price: '3.7', usdPrice: '$3.7', change: '-41.80%' },
        { symbol: 'BTC-261016-76000-C', vol: '0.00 USDT', price: '0', usdPrice: '$0', change: '0.00%' },
        { symbol: 'XAU-261016-4375-P', vol: '0.00 USDT', price: '0', usdPrice: '$0', change: '0.00%' },
        { symbol: 'ETH-261127-3200-C', vol: '4,939.70 USDT', price: '25', usdPrice: '$25', change: '+2.50%' },
        { symbol: 'BNB-261016-680-C', vol: '0.00 USDT', price: '0', usdPrice: '$0', change: '0.00%' },
        { symbol: 'DOGE-261016-0.1-P', vol: '0.00 USDT', price: '0', usdPrice: '$0', change: '0.00%' },
        { symbol: 'ETH-270326-2100-P', vol: '174.64 USDT', price: '162.4', usdPrice: '$162.4', change: '+34.40%' },
        { symbol: 'ETH-261016-2400-P', vol: '399,417.03 USDT', price: '18', usdPrice: '$18', change: '-28.00%' },
        { symbol: 'ETH-270326-2700-C', vol: '21,056.09 USDT', price: '289.4', usdPrice: '$289.4', change: '+3.10%' },
    ];
    const assetLogos = {
        MUB: 'https://s3-symbol-logo.tradingview.com/micron-technology.svg',
        CRCLB: 'https://assets.coincap.io/assets/icons/usdc@2x.png',
        NVDAB: 'https://s3-symbol-logo.tradingview.com/nvidia.svg',
        SNDKB: 'https://s3-symbol-logo.tradingview.com/sandisk.svg',
        TSLAB: 'https://s3-symbol-logo.tradingview.com/tesla.svg',
        SPCXB: 'https://assets.coincap.io/assets/icons/btc@2x.png',
        AMDB: 'https://s3-symbol-logo.tradingview.com/advanced-micro-devices.svg',
        EWYB: 'https://s3-symbol-logo.tradingview.com/ishares.svg',
        INTCB: 'https://s3-symbol-logo.tradingview.com/intel.svg',
        PAXG: 'https://assets.coincap.io/assets/icons/paxg@2x.png',
        XAUT: 'https://assets.coincap.io/assets/icons/xaut@2x.png',
        BTC: 'https://assets.coincap.io/assets/icons/btc@2x.png',
        ETH: 'https://assets.coincap.io/assets/icons/eth@2x.png',
        BNB: 'https://assets.coincap.io/assets/icons/bnb@2x.png',
        ADA: 'https://assets.coincap.io/assets/icons/ada@2x.png',
        XRP: 'https://assets.coincap.io/assets/icons/xrp@2x.png',
        SOL: 'https://assets.coincap.io/assets/icons/sol@2x.png',
        DOGE: 'https://assets.coincap.io/assets/icons/doge@2x.png',
    };

    const defaultAssetLogo = 'https://ui-avatars.com/api/?name=Asset&background=2563EB&color=fff&size=128';

    const getAssetLogo = (symbol) => {
        const normalized = String(symbol || '').toUpperCase();
        return assetLogos[normalized] || defaultAssetLogo;
    };

    const bStocksData = [
        { symbol: 'MUB', quote: '/USDT', lev: '5x', name: 'Micron Technol...', vol: '3.45M', price: '1,034.04', usdPrice: '$1,034.04', change: '-2.17%', logoUrl: getAssetLogo('MUB') },
        { symbol: 'CRCLB', quote: '/USDT', lev: '5x', name: 'Circle Internet Gro...', vol: '18.63M', price: '85.47', usdPrice: '$85.47', change: '+3.52%', logoUrl: getAssetLogo('CRCLB') },
        { symbol: 'NVDAB', quote: '/USDT', lev: '5x', name: 'NVIDIA (bStocks)', vol: '3.42M', price: '230.43', usdPrice: '$230.43', change: '-1.60%', logoUrl: getAssetLogo('NVDAB') },
        { symbol: 'SNDKB', quote: '/USDT', lev: '5x', name: 'SanDisk (bStoc...', vol: '9.46M', price: '1,592.00', usdPrice: '$1,592', change: '-3.22%', logoUrl: getAssetLogo('SNDKB') },
        { symbol: 'TSLAB', quote: '/USDT', lev: '5x', name: 'Tesla (bStocks)', vol: '3.15M', price: '383.05', usdPrice: '$383.05', change: '+0.59%', logoUrl: getAssetLogo('TSLAB') },
        { symbol: 'SPCXB', quote: '/USDT', lev: '5x', name: 'SpaceX (bStocks)', vol: '18.17M', price: '163.32', usdPrice: '$163.32', change: '-2.46%', logoUrl: getAssetLogo('SPCXB') },
        { symbol: 'AMDB', quote: '/USDT', lev: '5x', name: 'Advanced Micro ...', vol: '1.46M', price: '609.00', usdPrice: '$609', change: '-3.78%', logoUrl: getAssetLogo('AMDB') },
        { symbol: 'EWYB', quote: '/USDT', lev: '5x', name: 'iShares MSCI ...', vol: '62,520.35', price: '178.01', usdPrice: '$178.01', change: '-0.26%', logoUrl: getAssetLogo('EWYB') },
        { symbol: 'INTCB', quote: '/USDT', lev: '5x', name: 'Intel (bStocks)', vol: '3.57M', price: '104.89', usdPrice: '$104.89', change: '-3.58%', logoUrl: getAssetLogo('INTCB') },
    ];

    const tradFiData = [
        { symbol: 'MU', name: 'Micron Technol...', vol: '$19.42B', price: '$1,029', change: '-0.66%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/micron-technology.svg', category: 'US Stocks' },
        { symbol: 'NVDA', name: 'NVIDIA Corp...', vol: '$17.05B', price: '$229.28', change: '-0.52%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/nvidia.svg', category: 'US Stocks' },
        { symbol: 'SPCX', name: 'Space Explor...', vol: '$14.62B', price: '$162.57', change: '+1.24%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/space-exploration-technologies.svg', category: 'US Stocks' },
        { symbol: 'TSLA', name: 'Tesla, Inc. Com...', vol: '$14.07B', price: '$382.7', change: '+2.05%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/tesla.svg', category: 'US Stocks' },
        { symbol: 'AAPL', name: 'Apple Inc. Co...', vol: '$10.90B', price: '$336.64', change: '-1.11%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/apple.svg', category: 'US Stocks' },
        { symbol: 'SNDK', name: 'Sandisk Cor...', vol: '$8.37B', price: '$1,581.82', change: '-1.71%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/sandisk.svg', category: 'US Stocks' },
        { symbol: 'META', name: 'Meta Platforms,...', vol: '$8.12B', price: '$718.67', change: '-0.30%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/meta-platforms.svg', category: 'US Stocks' },
        { symbol: 'AMD', name: 'Advanced Micro ...', vol: '$7.68B', price: '$608.1', change: '-2.02%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/advanced-micro-devices.svg', category: 'US Stocks' },
        { symbol: 'MSFT', name: 'Microsoft Corp...', vol: '$7.61B', price: '$535.07', change: '+2.38%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/microsoft.svg', category: 'US Stocks' },
    ];

    const etfsData = [
        { symbol: 'SPY', name: 'State Street S...', vol: '$16.59B', price: '$778.57', change: '+0.59%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/spdr.svg' },
        { symbol: 'QQQ', name: 'Invesco QQQ ...', vol: '$16.04B', price: '$751.27', change: '+0.49%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/invesco.svg' },
        { symbol: 'SOXL', name: 'Direxion Daily ...', vol: '$7.83B', price: '$139.76', change: '-1.93%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/direxion.svg' },
        { symbol: 'IWM', name: 'iShares Russell ...', vol: '$5.03B', price: '$278.94', change: '+0.49%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/ishares.svg' },
        { symbol: 'SMH', name: 'VanEck Semico...', vol: '$3.22B', price: '$603.33', change: '-0.64%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/vaneck.svg' },
        { symbol: 'TQQQ', name: 'ProShares UltraP...', vol: '$3.11B', price: '$81.28', change: '+1.30%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/proshares.svg' },
        { symbol: 'VOO', name: 'Vanguard S&P ...', vol: '$3.04B', price: '$715.59', change: '+0.60%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/vanguard.svg' },
        { symbol: 'LQD', name: 'iShares iBoxx $...', vol: '$2.86B', price: '$102.41', change: '-0.05%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/ishares.svg' },
        { symbol: 'HYG', name: 'iShares iBoxx $ ...', vol: '$2.78B', price: '$77.23', change: '+0.11%', status: 'Mkt Closed ☾', logo: 'https://s3-symbol-logo.tradingview.com/ishares.svg' },
    ];

    const tradFiSpotData = [
        { symbol: 'CRCLB', lev: '5x', name: 'Circle Internet Gr...', vol: '$17.21M', price: '85.77', usdPrice: '$85.77', change: '+4.19%', logo: 'https://assets.coincap.io/assets/icons/usdc@2x.png' },
        { symbol: 'SPCXB', lev: '5x', name: 'SpaceX (bStoc...', vol: '$15.62M', price: '163.41', usdPrice: '$163.41', change: '-0.97%', logo: 'https://s3-symbol-logo.tradingview.com/space-exploration-technologies.svg' },
        { symbol: 'SNDKB', lev: '5x', name: 'SanDisk (bSto...', vol: '$8.65M', price: '1,592.30', usdPrice: '$1,592.3', change: '-2.11%', logo: 'https://s3-symbol-logo.tradingview.com/sandisk.svg' },
        { symbol: 'MSTRB', lev: '5x', name: 'Strategy (bStocks)', vol: '$6.41M', price: '155.68', usdPrice: '$155.68', change: '+1.02%', logo: 'https://s3-symbol-logo.tradingview.com/microstrategy.svg' },
        { symbol: 'SOXLB', lev: '5x', name: 'Semicon Bull 3X ...', vol: '$4.28M', price: '140.68', usdPrice: '$140.68', change: '-4.37%', logo: 'https://s3-symbol-logo.tradingview.com/direxion.svg' },
        { symbol: 'SNXXB', lev: '5x', name: 'Tradr 2X Long SN...', vol: '$3.06M', price: '13.90', usdPrice: '$13.9', change: '-4.27%', logo: 'https://s3-symbol-logo.tradingview.com/tradr.svg' },
        { symbol: 'INTCB', lev: '5x', name: 'Intel (bStocks)', vol: '$3.01M', price: '104.97', usdPrice: '$104.97', change: '-2.50%', logo: 'https://s3-symbol-logo.tradingview.com/intel.svg' },
        { symbol: 'NVDAB', lev: '5x', name: 'NVIDIA (bStocks)', vol: '$2.97M', price: '230.40', usdPrice: '$230.4', change: '-1.11%', logo: 'https://s3-symbol-logo.tradingview.com/nvidia.svg' },
        { symbol: 'MUB', lev: '5x', name: 'Micron Techn...', vol: '$2.94M', price: '1,034.92', usdPrice: '$1,034.92', change: '-1.41%', logo: 'https://s3-symbol-logo.tradingview.com/micron-technology.svg' },
    ];

    const tradFiFuturesData = [
        { symbol: 'SPCXUSDT', name: 'Space Expl...', vol: '1.22B USDT', price: '163.58', usdPrice: '$163.58', change: '-1.25%', logo: 'https://s3-symbol-logo.tradingview.com/space-exploration-technologies.svg', category: 'Pre-IPO' },
        { symbol: 'SOXLUSDT', name: 'Direxion ...', vol: '946.64M USDT', price: '140.68', usdPrice: '$140.67', change: '-5.04%', logo: 'https://s3-symbol-logo.tradingview.com/direxion.svg', category: 'ETF' },
        { symbol: 'SNDKUSDT', name: 'Sandisk', vol: '761.95M USDT', price: '1,592.86', usdPrice: '$1,592.86', change: '-2.52%', logo: 'https://s3-symbol-logo.tradingview.com/sandisk.svg', category: 'Stocks' },
        { symbol: 'XAUUSDT', name: 'Gold', vol: '595.30M USDT', price: '4,196.60', usdPrice: '$4,196.59', change: '+0.05%', logo: 'https://assets.coincap.io/assets/icons/paxg@2x.png', category: 'Commodities' },
        { symbol: 'CLUSDT', name: 'WTI Crude...', vol: '447.05M USDT', price: '90.77', usdPrice: '$90.77', change: '+0.41%', logo: 'https://assets.coincap.io/assets/icons/usdt@2x.png', category: 'Commodities' },
        { symbol: 'CRCLUSDT', name: 'Circle', vol: '273.76M USDT', price: '85.82', usdPrice: '$85.81', change: '+4.19%', logo: 'https://assets.coincap.io/assets/icons/usdc@2x.png', category: 'Stocks' },
        { symbol: 'BZUSDT', name: 'Brent Oil', vol: '263.49M USDT', price: '101.91', usdPrice: '$101.92', change: '+0.23%', logo: 'https://assets.coincap.io/assets/icons/usdt@2x.png', category: 'Commodities' },
        { symbol: 'MUUSDT', name: 'Micron', vol: '260.08M USDT', price: '1,035.43', usdPrice: '$1,035.43', change: '-1.78%', logo: 'https://s3-symbol-logo.tradingview.com/micron-technology.svg', category: 'Stocks' },
        { symbol: 'XAGUSDT', name: 'Silver', vol: '253.18M USDT', price: '60.88', usdPrice: '$60.88', change: '0.00%', logo: 'https://assets.coincap.io/assets/icons/xaut@2x.png', category: 'Commodities' },
    ];

    const alphaData = [
        { symbol: 'DGAI', badge: 'v4', vol: '$1.09B', price: '0.96702', usdPrice: '$0.96702', change: '+0.02%', logo: 'https://assets.coincap.io/assets/icons/bnb@2x.png' },
        { symbol: 'XDP', badge: 'v2', vol: '$200.92M', price: '0.023229', usdPrice: '$0.023229', change: '+0.95%', logo: 'https://assets.coincap.io/assets/icons/xrp@2x.png' },
        { symbol: 'CT', badge: 'v4', vol: '$193.15M', price: '0.31076', usdPrice: '$0.31076', change: '+2.74%', logo: 'https://assets.coincap.io/assets/icons/btc@2x.png' },
        { symbol: 'O', badge: '', vol: '$135.93M', price: '0.48095', usdPrice: '$0.48095', change: '+5.31%', logo: 'https://assets.coincap.io/assets/icons/eth@2x.png' },
        { symbol: 'quq', badge: '', vol: '$123.50M', price: '0.0015978', usdPrice: '$0.0015978', change: '-0.67%', logo: 'https://assets.coincap.io/assets/icons/doge@2x.png' },
        { symbol: 'CNPY', badge: '', vol: '$20.96M', price: '0.27404', usdPrice: '$0.27404', change: '-1.67%', logo: 'https://assets.coincap.io/assets/icons/ada@2x.png' },
        { symbol: 'SHARE', badge: '', vol: '$14.91M', price: '1.72989', usdPrice: '$1.72989', change: '+41.39%', logo: 'https://assets.coincap.io/assets/icons/sol@2x.png' },
        { symbol: 'CAP', badge: '', vol: '$14.10M', price: '0.093081', usdPrice: '$0.093081', change: '+27.63%', logo: 'https://assets.coincap.io/assets/icons/link@2x.png' },
        { symbol: 'PONS', badge: '', vol: '$10.24M', price: '0.37138', usdPrice: '$0.37138', change: '+9.64%', logo: 'https://assets.coincap.io/assets/icons/dot@2x.png' },
        { symbol: 'JCT', badge: '', vol: '$8.50M', price: '0.0029278', usdPrice: '$0.0029278', change: '+14.39%', logo: 'https://assets.coincap.io/assets/icons/uni@2x.png' },
    ];

    const tCommoditiesData = [
        { symbol: 'PAXG', quote: '/BTC', lev: '', name: 'PAX Gold', vol: '1.92', price: '0.05055', usdPrice: '$4,188.87', change: '+0.28%', logo: getAssetLogo('PAXG') },
        { symbol: 'PAXG', quote: '/USDT', lev: '5x', name: 'PAX Gold', vol: '9.69M', price: '4,186.69', usdPrice: '$4,186.69', change: '+0.12%', logo: getAssetLogo('PAXG') },
        { symbol: 'PAXG', quote: '/USDC', lev: '5x', name: 'PAX Gold', vol: '456,419.97', price: '4,183.19', usdPrice: '$4,186.53', change: '+0.11%', logo: getAssetLogo('PAXG') },
        { symbol: 'PAXG', quote: '/USD1', lev: '5x', name: 'PAX Gold', vol: '341.13', price: '4,189.31', usdPrice: '$4,189.22', change: '+0.15%', logo: getAssetLogo('PAXG') },
        { symbol: 'PAXG', quote: '/U', lev: '5x', name: 'PAX Gold', vol: '8,933.77', price: '4,186.49', usdPrice: '$4,188.16', change: '+0.05%', logo: getAssetLogo('PAXG') },
        { symbol: 'XAUT', quote: '/USDT', lev: '5x', name: 'Tether Gold', vol: '11.89M', price: '4,183.40', usdPrice: '$4,183.4', change: '+0.09%', logo: getAssetLogo('XAUT') },
        { symbol: 'XAUT', quote: '/USDC', lev: '5x', name: 'Tether Gold', vol: '199,514.26', price: '4,180.11', usdPrice: '$4,183.45', change: '+0.10%', logo: getAssetLogo('XAUT') },
        { symbol: 'XAUT', quote: '/U', lev: '5x', name: 'Tether Gold', vol: '46,874.54', price: '4,182.00', usdPrice: '$4,183.67', change: '+0.10%', logo: getAssetLogo('XAUT') },
        { symbol: 'XAUT', quote: '/BTC', lev: '', name: 'Tether Gold', vol: '2.67', price: '0.05054', usdPrice: '$4,188.04', change: '+0.36%', logo: getAssetLogo('XAUT') },
    ];

    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    })[character]);

    const renderCryptoRows = () => {
        cryptoRowsList.innerHTML = cryptoData.map((asset) => {
            const logoUrl = asset.image || getAssetLogo(asset.symbol);
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;
            return `
            <article class="market-row-item flex cursor-pointer items-center justify-between py-3 transition-colors hover:bg-slate-50/80" data-crypto-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-crypto-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-crypto-name="${escapeHtml(asset.name.toLowerCase())}" data-crypto-segment="${escapeHtml(asset.symbol === 'SOL' ? 'Solana' : 'All')}">
                <div class="flex w-5/12 min-w-0 items-center gap-2">
                    <span class="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-slate-100">
                        <span class="hidden h-full w-full items-center justify-center text-[10px] font-bold text-slate-500" data-crypto-fallback>${escapeHtml(asset.symbol.slice(0, 1))}</span>
                        <img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(asset.name)} logo" class="absolute inset-0 h-full w-full rounded-full object-contain" loading="lazy" data-crypto-image onerror="this.onerror=null; this.src='${fallbackLogo}';">
                    </span>
                    <div class="min-w-0">
                        <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                            <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</span>
                            <span class="text-[10px] text-slate-400">/USDT</span>
                            <span class="ml-0.5 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">${escapeHtml(asset.leverage)}</span>
                        </div>
                        <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1" data-crypto-volume>--</span></div>
                    </div>
                </div>
                <div class="w-4/12 text-right">
                    <div class="text-xs font-bold leading-tight tracking-tight text-slate-900" data-crypto-price>--</div>
                    <div class="mt-0.5 text-[10px] text-slate-400" data-crypto-usd>--</div>
                </div>
                <div class="w-3/12 text-right">
                    <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg bg-slate-100 px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-slate-500" data-crypto-change>--</span>
                </div>
            </article>
        `;
        }).join('');

        cryptoRowsList.querySelectorAll('[data-crypto-image]').forEach((image) => {
            const fallback = image.parentElement.querySelector('[data-crypto-fallback]');
            image.addEventListener('error', () => {
                image.classList.add('hidden');
                fallback.classList.remove('hidden');
                fallback.classList.add('flex');
            }, { once: true });
        });
    };

    const renderBStocksRows = () => {
        bStocksRowsList.innerHTML = bStocksData.map((asset) => {
            const change = Number.parseFloat(asset.change);
            const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
            const logoUrl = asset.logoUrl || getAssetLogo(asset.symbol) || defaultAssetLogo;
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;

            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-bstocks-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-bstocks-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-bstocks-name="${escapeHtml(asset.name.toLowerCase())}">
                    <div class="flex w-5/12 min-w-0 items-center gap-2">
                        <img
                            src="${escapeHtml(logoUrl)}"
                            alt="${escapeHtml(asset.symbol)} logo"
                            class="w-7 h-7 rounded-full shrink-0 object-cover bg-slate-100"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='${fallbackLogo}';"
                            data-bstocks-image
                        />
                        <div class="min-w-0">
                            <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                                <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</span>
                                <span class="text-[10px] text-slate-400">${escapeHtml(asset.quote)}</span>
                                <span class="ml-0.5 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">${escapeHtml(asset.lev)}</span>
                            </div>
                            <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1">${escapeHtml(asset.vol)}</span></div>
                        </div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                        <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.usdPrice)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                    </div>
                </article>
            `;
        }).join('');
    };

    const renderTradFiRows = () => {
        const assets = activeTradFiFilter === 'ETFs'
            ? etfsData
            : tradFiData.filter((asset) => asset.category === activeTradFiFilter);
        tradFiRowsList.innerHTML = assets.map((asset) => {
                const change = Number.parseFloat(asset.change);
                const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
                const logoUrl = asset.logo || defaultAssetLogo;
                const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;

                return `
                    <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-tradfi-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-tradfi-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-tradfi-name="${escapeHtml(asset.name.toLowerCase())}">
                        <div class="flex w-5/12 min-w-0 items-center gap-2">
                            <img
                                src="${escapeHtml(logoUrl)}"
                                alt="${escapeHtml(asset.symbol)} logo"
                                class="h-7 w-7 rounded-full bg-slate-100 object-cover"
                                loading="lazy"
                                onerror="this.onerror=null; this.src='${fallbackLogo}';"
                                data-tradfi-image
                            />
                            <div class="min-w-0">
                                <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                                    <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</span>
                                </div>
                                <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1 text-slate-500">${escapeHtml(asset.vol)}</span></div>
                            </div>
                        </div>
                        <div class="w-4/12 text-right">
                            <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                            <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.status)}</div>
                        </div>
                        <div class="w-3/12 text-right">
                            <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                        </div>
                    </article>
                `;
            }).join('');
        tradFiEmptyState.classList.toggle('hidden', tradFiRowsList.querySelectorAll('[data-tradfi-row]').length > 0);
    };

    const renderTradFiSpotRows = () => {
        const assets = activeTradFiSpotFilter === 'tCommodities' ? tCommoditiesData : tradFiSpotData;
        tradFiSpotRowsList.innerHTML = assets.map((asset) => {
            const change = Number.parseFloat(asset.change);
            const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
            const logoUrl = asset.logo || getAssetLogo(asset.symbol) || defaultAssetLogo;
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;
            const quote = asset.quote || '/USDT';

            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-tradfi-spot-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-tradfi-spot-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-tradfi-spot-name="${escapeHtml(asset.name.toLowerCase())}">
                    <div class="flex w-5/12 min-w-0 items-center gap-2">
                        <img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(asset.symbol)} logo" class="h-7 w-7 shrink-0 rounded-full bg-slate-100 object-contain" loading="lazy" onerror="this.onerror=null; this.src='${fallbackLogo}';">
                        <div class="min-w-0">
                            <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                                <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</span>
                                <span class="text-[10px] text-slate-400">${escapeHtml(quote)}</span>
                                <span class="ml-0.5 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">${escapeHtml(asset.lev || '5x')}</span>
                            </div>
                            <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1 text-slate-500">${escapeHtml(asset.vol)}</span></div>
                        </div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                        <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.usdPrice || asset.price)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                    </div>
                </article>
            `;
        }).join('');
        tradFiSpotEmptyState.classList.toggle('hidden', tradFiSpotRowsList.querySelectorAll('[data-tradfi-spot-row]').length > 0);
    };

    const renderTradFiFuturesRows = () => {
        const assets = tradFiFuturesData.filter((asset) => activeTradFiFuturesFilter === 'All' || asset.category === activeTradFiFuturesFilter);
        tradFiFuturesRowsList.innerHTML = assets.map((asset) => {
            const change = Number.parseFloat(asset.change);
            const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;

            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-tradfi-futures-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-tradfi-futures-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-tradfi-futures-name="${escapeHtml(asset.name.toLowerCase())}">
                    <div class="flex w-5/12 min-w-0 items-center gap-2">
                        <img src="${escapeHtml(asset.logo)}" alt="${escapeHtml(asset.name)} logo" class="h-7 w-7 shrink-0 rounded-full bg-slate-100 object-contain" loading="lazy" onerror="this.onerror=null; this.src='${fallbackLogo}';">
                        <div class="min-w-0">
                            <div class="truncate text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</div>
                            <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1 text-slate-500">${escapeHtml(asset.vol)}</span></div>
                        </div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                        <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.usdPrice)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                    </div>
                </article>
            `;
        }).join('');
        tradFiFuturesEmptyState.classList.toggle('hidden', tradFiFuturesRowsList.querySelectorAll('[data-tradfi-futures-row]').length > 0);
    };

    const renderAlphaRows = (assets = alphaData) => {
        alphaRowsList.innerHTML = assets.map((asset) => {
            const change = Number.parseFloat(asset.change);
            const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;
            const badge = asset.badge
                ? `<span class="ml-1 rounded bg-slate-100 px-1 text-[9px] font-semibold text-slate-500">${escapeHtml(asset.badge)}</span>`
                : '';

            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-alpha-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-alpha-symbol="${escapeHtml(asset.symbol.toLowerCase())}">
                    <div class="flex w-5/12 min-w-0 items-center gap-2">
                        <img src="${escapeHtml(asset.logo)}" alt="${escapeHtml(asset.symbol)} logo" class="h-7 w-7 shrink-0 rounded-full bg-slate-100 object-contain" loading="lazy" onerror="this.onerror=null; this.src='${fallbackLogo}';">
                        <div class="min-w-0">
                            <div class="flex items-center whitespace-nowrap text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}${badge}</div>
                            <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.vol)}</div>
                        </div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                        <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.usdPrice)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                    </div>
                </article>
            `;
        }).join('');
        updateAlphaRows();
    };

    const updateAlphaRows = () => {
        if (!alphaRowsList || !alphaEmptyState) return;
        const query = search.value.trim().toLowerCase();
        let visibleCount = 0;
        alphaRowsList.querySelectorAll('[data-alpha-row]').forEach((row) => {
            const matchesQuery = row.dataset.alphaSymbol.includes(query);
            row.classList.toggle('hidden', !matchesQuery);
            if (matchesQuery) visibleCount += 1;
        });
        alphaEmptyState.classList.toggle('hidden', visibleCount > 0);
    };

    const filterAndRenderAlphaData = (category) => {
        let filtered = alphaData;
        if (category === 'Point+') {
            filtered = alphaData.filter((asset) => asset.badge !== '');
        } else if (category === 'BSC') {
            filtered = alphaData.filter((asset) => asset.badge === 'v4');
        } else if (category === 'Tokenized Securities') {
            filtered = alphaData.filter((asset) => ['DGAI', 'O', 'SHARE'].includes(asset.symbol));
        } else if (category === 'Robinhood') {
            filtered = alphaData.filter((asset) => ['quq', 'CAP', 'PONS'].includes(asset.symbol));
        }
        renderAlphaRows(filtered);
    };

    const renderTCommoditiesRows = () => {
        bStocksRowsList.innerHTML = tCommoditiesData.map((asset) => {
            const change = Number.parseFloat(asset.change);
            const changeClass = change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300';
            const logoUrl = asset.logo || getAssetLogo(asset.symbol) || defaultAssetLogo;
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.symbol)}&background=2563EB&color=fff&size=128`;

            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-tcommodities-row data-symbol="${escapeHtml(asset.symbol)}" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-tcommodities-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-tcommodities-name="${escapeHtml(asset.name.toLowerCase())}">
                    <div class="flex w-5/12 min-w-0 items-center gap-2">
                        <img
                            src="${escapeHtml(logoUrl)}"
                            alt="${escapeHtml(asset.symbol)} logo"
                            class="w-7 h-7 rounded-full shrink-0 object-cover bg-slate-100"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='${fallbackLogo}';"
                            data-tcommodities-image
                        />
                        <div class="min-w-0">
                            <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                                <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}</span>
                                <span class="text-[10px] text-slate-400">${escapeHtml(asset.quote)}</span>
                                <span class="ml-0.5 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">${escapeHtml(asset.lev || '—')}</span>
                            </div>
                            <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1">${escapeHtml(asset.vol)}</span></div>
                        </div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-xs font-bold leading-tight tracking-tight text-slate-900">${escapeHtml(asset.price)}</div>
                        <div class="mt-0.5 text-[10px] text-slate-400">${escapeHtml(asset.usdPrice)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-white ${changeClass}">${escapeHtml(asset.change)}</span>
                    </div>
                </article>
            `;
        }).join('');
    };

    const renderUsdMarginedRows = () => {
        usdMarginedRows.innerHTML = usdMarginedData.map((asset) => `
            <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-futures-row data-symbol="${escapeHtml(asset.symbol)}USDT" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-futures-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-futures-name="${escapeHtml(asset.name.toLowerCase())}" data-futures-filter-value="${escapeHtml(asset.filter)}">
                <div class="flex w-5/12 min-w-0 items-center gap-2.5">
                    <span class="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-slate-100">
                        <span class="hidden h-full w-full items-center justify-center text-[10px] font-bold text-slate-500" data-futures-fallback>${escapeHtml(asset.symbol.slice(0, 1))}</span>
                        <img src="${escapeHtml(asset.image)}" alt="${escapeHtml(asset.name)} logo" class="absolute inset-0 h-full w-full rounded-full object-contain" loading="lazy" data-futures-image>
                    </span>
                    <div class="min-w-0">
                        <div class="flex min-w-0 items-center gap-1 leading-tight whitespace-nowrap">
                            <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}USDT</span>
                            <span class="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Perp</span>
                        </div>
                        <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1" data-futures-volume>-- USDT</span></div>
                    </div>
                </div>
                <div class="w-4/12 text-right">
                    <div class="text-xs font-bold leading-tight tracking-tight text-slate-900" data-futures-mark-price>--</div>
                    <div class="mt-0.5 text-[10px] text-slate-400" data-futures-last-price>--</div>
                </div>
                <div class="w-3/12 text-right">
                    <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg bg-slate-100 px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-slate-500" data-futures-change>--</span>
                </div>
            </article>
        `).join('');

        usdMarginedRows.querySelectorAll('[data-futures-image]').forEach((image) => {
            const fallback = image.parentElement.querySelector('[data-futures-fallback]');
            image.addEventListener('error', () => {
                image.classList.add('hidden');
                fallback.classList.remove('hidden');
                fallback.classList.add('flex');
            }, { once: true });
        });
    };

    const renderCoinMarginedRows = () => {
        coinMarginedRows.innerHTML = coinMarginedData.map((asset) => `
            <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-coinm-row data-symbol="${escapeHtml(asset.symbol)}USD" data-price="${escapeHtml(asset.price || '')}" data-change="${escapeHtml(asset.change || '')}" data-coinm-symbol="${escapeHtml(asset.symbol.toLowerCase())}" data-coinm-name="${escapeHtml(asset.name.toLowerCase())}" data-coinm-filters="${escapeHtml(asset.filters.join(','))}">
                <div class="flex w-5/12 min-w-0 items-center gap-2.5">
                    <span class="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-slate-100">
                        <span class="hidden h-full w-full items-center justify-center text-[10px] font-bold text-slate-500" data-coinm-fallback>${escapeHtml(asset.symbol.slice(0, 1))}</span>
                        <img src="${escapeHtml(asset.image)}" alt="${escapeHtml(asset.name)} logo" class="absolute inset-0 h-full w-full rounded-full object-contain" loading="lazy" data-coinm-image>
                    </span>
                    <div class="min-w-0">
                        <div class="flex min-w-0 items-center gap-1 leading-tight whitespace-nowrap">
                            <span class="text-xs font-bold text-slate-900">${escapeHtml(asset.symbol)}USD CM</span>
                            <span class="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Perp</span>
                        </div>
                        <div class="mt-0.5 truncate text-[10px] text-slate-400">${escapeHtml(asset.name)} <span class="ml-1" data-coinm-volume>Loading volume...</span></div>
                    </div>
                </div>
                <div class="w-4/12 text-right">
                    <div class="text-xs font-bold leading-tight tracking-tight text-slate-900" data-coinm-mark-price>Loading...</div>
                    <div class="mt-0.5 text-[10px] text-slate-400" data-coinm-last-price>--</div>
                </div>
                <div class="w-3/12 text-right">
                    <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg bg-slate-100 px-1.5 py-1.5 text-center text-[10px] font-bold tracking-tight text-slate-500" data-coinm-change>--</span>
                </div>
            </article>
        `).join('');

        coinMarginedRows.querySelectorAll('[data-coinm-image]').forEach((image) => {
            const fallback = image.parentElement.querySelector('[data-coinm-fallback]');
            image.addEventListener('error', () => {
                image.classList.add('hidden');
                fallback.classList.remove('hidden');
                fallback.classList.add('flex');
            }, { once: true });
        });
    };

    const formatNumber = (value) => new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
    }).format(value);

    const formatUsd = (value) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
    }).format(value);

    const formatOptionPrice = (value) => new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8,
    }).format(value);

    const formatOptionVolume = (value) => new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);

    const formatVolume = (value) => {
        if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
        if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
        if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
    };

    const safeBinanceFetch = async (url, fallbackData = null) => {
        try {
            const response = await fetch(url).catch(() => null);
            if (!response || !response.ok) {
                return fallbackData;
            }

            const data = await response.json().catch(() => fallbackData);
            return data || fallbackData;
        } catch (error) {
            return fallbackData;
        }
    };

    const loadCryptoTickers = async () => {
        const tickerUrl = new URL('https://api.binance.com/api/v3/ticker/24hr');
        tickerUrl.searchParams.set('symbols', JSON.stringify(cryptoData.map((asset) => `${asset.symbol}USDT`)));

        try {
            const tickers = await safeBinanceFetch(tickerUrl);
            if (!tickers || !Array.isArray(tickers)) {
                cryptoRowsList.querySelectorAll('[data-crypto-price]').forEach((price) => {
                    if (price.textContent === '--') price.textContent = 'Unavailable';
                });
                return;
            }

            const tickersBySymbol = new Map(tickers.map((ticker) => [ticker.symbol, ticker]));

            cryptoRowsList.querySelectorAll('[data-crypto-row]').forEach((row) => {
                const ticker = tickersBySymbol.get(`${row.dataset.cryptoSymbol.toUpperCase()}USDT`);
                if (!ticker) return;

                const price = Number(ticker.lastPrice);
                const change = Number(ticker.priceChangePercent);
                const volume = Number(ticker.quoteVolume);
                if (!Number.isFinite(price) || !Number.isFinite(change)) return;

                row.querySelector('[data-crypto-price]').textContent = formatNumber(price);
                row.querySelector('[data-crypto-usd]').textContent = formatUsd(price);
                row.querySelector('[data-crypto-volume]').textContent = formatVolume(volume);

                const changeBadge = row.querySelector('[data-crypto-change]');
                changeBadge.textContent = `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;
                changeBadge.classList.remove('bg-slate-100', 'text-slate-500', 'bg-[#0ECB81]', 'bg-[#F6465D]');
                changeBadge.classList.add(change >= 0 ? 'bg-[#0ECB81]' : 'bg-[#F6465D]', 'text-white');
            });
        } catch (error) {
            console.warn('Unable to load crypto market tickers.', error instanceof Error ? error.message : String(error));
            cryptoRowsList.querySelectorAll('[data-crypto-price]').forEach((price) => {
                if (price.textContent === '--') price.textContent = 'Unavailable';
            });
        }
    };

    const loadUsdMarginedTickers = async () => {
        const activePrimaryTab = marketRoot.querySelector('[data-market-tab][aria-selected="true"]')?.dataset.marketTab;
        if (activePrimaryTab !== 'Crypto' || activeCryptoMarketType !== 'USDⓈ-M') return;

        await Promise.all(usdMarginedData.map(async (asset) => {
            const symbol = `${asset.symbol}USDT`;
            const tickerUrl = new URL('https://fapi.binance.com/fapi/v1/ticker/24hr');
            const markUrl = new URL('https://fapi.binance.com/fapi/v1/premiumIndex');
            tickerUrl.searchParams.set('symbol', symbol);
            markUrl.searchParams.set('symbol', symbol);

            try {
                const [ticker, mark] = await Promise.all([
                    safeBinanceFetch(tickerUrl),
                    safeBinanceFetch(markUrl),
                ]);
                if (!ticker || !mark) {
                    const row = usdMarginedRows.querySelector(`[data-futures-symbol="${asset.symbol.toLowerCase()}"]`);
                    if (row && row.querySelector('[data-futures-mark-price]').textContent === '--') {
                        row.querySelector('[data-futures-mark-price]').textContent = 'Unavailable';
                    }
                    return;
                }

                const row = usdMarginedRows.querySelector(`[data-futures-symbol="${asset.symbol.toLowerCase()}"]`);
                if (!row) return;

                const lastPrice = Number(ticker.lastPrice);
                const markPrice = Number(mark.markPrice);
                const percentChange = Number(ticker.priceChangePercent);
                const quoteVolume = Number(ticker.quoteVolume);
                if (![lastPrice, markPrice, percentChange, quoteVolume].every(Number.isFinite)) return;

                row.querySelector('[data-futures-mark-price]').textContent = formatNumber(markPrice);
                row.querySelector('[data-futures-last-price]').textContent = formatUsd(lastPrice);
                row.querySelector('[data-futures-volume]').textContent = `${formatVolume(quoteVolume)} USDT`;

                const changeBadge = row.querySelector('[data-futures-change]');
                changeBadge.textContent = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
                changeBadge.classList.remove('bg-slate-100', 'text-slate-500', 'bg-[#0ECB81]', 'bg-[#F6465D]', 'text-white');
                changeBadge.classList.add(percentChange >= 0 ? 'bg-[#0ECB81]' : 'bg-[#F6465D]', 'text-white');
            } catch (error) {
                const row = usdMarginedRows.querySelector(`[data-futures-symbol="${asset.symbol.toLowerCase()}"]`);
                if (row && row.querySelector('[data-futures-mark-price]').textContent === '--') {
                    row.querySelector('[data-futures-mark-price]').textContent = 'Unavailable';
                }
                console.warn(`Unable to load USDⓈ-M ticker for ${symbol}.`, error instanceof Error ? error.message : String(error));
            }
        }));
    };

    const loadCoinMarginedTickers = async () => {
        const activePrimaryTab = marketRoot.querySelector('[data-market-tab][aria-selected="true"]')?.dataset.marketTab;
        if (activePrimaryTab !== 'Crypto' || activeCryptoMarketType !== 'COIN-M') return;

        const setUnavailable = () => {
            coinMarginedRows.querySelectorAll('[data-coinm-row]').forEach((row) => {
                row.querySelector('[data-coinm-mark-price]').textContent = 'Unavailable';
                row.querySelector('[data-coinm-last-price]').textContent = '--';
                row.querySelector('[data-coinm-volume]').textContent = 'Unavailable USD';
                row.querySelector('[data-coinm-change]').textContent = '--';
            });
        };

        try {
            const [tickers, marks] = await Promise.all([
                safeBinanceFetch('https://dapi.binance.com/dapi/v1/ticker/24hr'),
                safeBinanceFetch('https://dapi.binance.com/dapi/v1/premiumIndex'),
            ]);
            if (!tickers || !marks || !Array.isArray(tickers) || !Array.isArray(marks)) {
                setUnavailable();
                return;
            }

            const tickerBySymbol = new Map(tickers.map((ticker) => [ticker.symbol, ticker]));
            const markBySymbol = new Map(marks.map((mark) => [mark.symbol, mark]));

            coinMarginedData.forEach((asset) => {
                const symbol = `${asset.symbol}USD_PERP`;
                const ticker = tickerBySymbol.get(symbol);
                const mark = markBySymbol.get(symbol);
                const row = coinMarginedRows.querySelector(`[data-coinm-symbol="${asset.symbol.toLowerCase()}"]`);
                if (!row) return;
                if (!ticker || !mark) {
                    row.querySelector('[data-coinm-mark-price]').textContent = 'Unavailable';
                    row.querySelector('[data-coinm-last-price]').textContent = '--';
                    row.querySelector('[data-coinm-volume]').textContent = 'Unavailable USD';
                    row.querySelector('[data-coinm-change]').textContent = '--';
                    return;
                }

                const lastPrice = Number(ticker.lastPrice);
                const markPrice = Number(mark.markPrice);
                const percentChange = Number(ticker.priceChangePercent);
                const baseVolume = Number(ticker.baseVolume);
                if (![lastPrice, markPrice, percentChange, baseVolume].every(Number.isFinite)) return;

                row.querySelector('[data-coinm-mark-price]').textContent = formatNumber(markPrice);
                row.querySelector('[data-coinm-last-price]').textContent = formatUsd(lastPrice);
                row.querySelector('[data-coinm-volume]').textContent = `${formatVolume(baseVolume * lastPrice)} USD`;

                const changeBadge = row.querySelector('[data-coinm-change]');
                changeBadge.textContent = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
                changeBadge.classList.remove('bg-slate-100', 'text-slate-500', 'bg-[#0ECB81]', 'bg-[#F6465D]', 'text-white');
                changeBadge.classList.add(percentChange >= 0 ? 'bg-[#0ECB81]' : 'bg-[#F6465D]', 'text-white');
            });
        } catch (error) {
            console.warn('Unable to load COIN-M market data.', error instanceof Error ? error.message : String(error));
            setUnavailable();
        }
    };

    const renderOptionsRows = (contracts) => {
        optionsRowsList.innerHTML = contracts.map((contract) => {
            return `
                <article class="market-row-item flex cursor-pointer items-center justify-between border-b border-slate-50 py-3 transition-colors hover:bg-slate-50/80" data-options-row data-symbol="${escapeHtml(contract.symbol)}" data-price="${escapeHtml(contract.price || '')}" data-change="${escapeHtml(contract.change || '')}" data-options-symbol="${escapeHtml(contract.symbol.toLowerCase())}" data-options-name="${escapeHtml(contract.symbol.toLowerCase())}">
                    <div class="w-5/12 min-w-0">
                        <div class="truncate text-sm font-bold tracking-tight text-slate-900">${escapeHtml(contract.symbol)}</div>
                        <div class="mt-0.5 text-[11px] text-slate-400">${escapeHtml(contract.vol)}</div>
                    </div>
                    <div class="w-4/12 text-right">
                        <div class="text-sm font-bold text-slate-900" data-options-price>${escapeHtml(contract.price)}</div>
                        <div class="mt-0.5 text-[11px] text-slate-400" data-options-usd>${escapeHtml(contract.usdPrice)}</div>
                    </div>
                    <div class="w-3/12 text-right">
                        <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-2.5 py-1.5 text-center text-xs font-bold text-white" data-options-change>${escapeHtml(contract.change)}</span>
                    </div>
                </article>
            `;
        }).join('');

        optionsEmptyState.textContent = 'No options markets found.';
        optionsRowsList.querySelectorAll('[data-options-change]').forEach((badge) => {
            const change = Number.parseFloat(badge.textContent);
            badge.classList.add(change > 0 ? 'bg-[#0ECB81]' : change < 0 ? 'bg-[#F6465D]' : 'bg-slate-300');
        });

        updateCryptoRows();
    };

    const loadOptionsTickers = async () => {
        const activePrimaryTab = marketRoot.querySelector('[data-market-tab][aria-selected="true"]')?.dataset.marketTab;
        if (activePrimaryTab !== 'Crypto' || activeCryptoMarketType !== 'Options') return;

        if (optionsRowsList.children.length === 0) {
            optionsEmptyState.textContent = 'Loading options markets...';
            optionsEmptyState.classList.remove('hidden');
        }

        try {
            const [tickers, marks] = await Promise.all([
                safeBinanceFetch('https://eapi.binance.com/eapi/v1/ticker'),
                safeBinanceFetch('https://eapi.binance.com/eapi/v1/mark'),
            ]);

            if (!tickers || !marks || !Array.isArray(tickers) || !Array.isArray(marks)) {
                renderOptionsRows(defaultOptionsData);
                return;
            }

            const marksBySymbol = new Map(marks.map((mark) => [mark.symbol, mark]));
            const liveContracts = tickers
                .filter((ticker) => Number(ticker.amount) > 0 && marksBySymbol.has(ticker.symbol))
                .sort((first, second) => Number(second.amount) - Number(first.amount))
                .slice(0, 50)
                .map((ticker) => {
                    const mark = marksBySymbol.get(ticker.symbol);
                    const lastPrice = Number(ticker.lastPrice);
                    const markPrice = Number(mark.markPrice);
                    return {
                        symbol: ticker.symbol,
                        vol: `${formatOptionVolume(Number(ticker.amount))} USDT`,
                        price: formatOptionPrice(Number.isFinite(markPrice) ? markPrice : lastPrice),
                        usdPrice: `$${formatOptionPrice(lastPrice)}`,
                        change: `${Number(ticker.priceChangePercent) > 0 ? '+' : ''}${Number(ticker.priceChangePercent).toFixed(2)}%`,
                    };
                });

            renderOptionsRows(liveContracts.length ? liveContracts : defaultOptionsData);
        } catch (error) {
            console.warn('Binance API CORS blocked or failed. Using fallback mock data.', error instanceof Error ? error.message : String(error));
            renderOptionsRows(defaultOptionsData);
        }
    };

    const updateTradFiRows = () => {
        const query = search.value.trim().toLowerCase();
        if (tradFiRowsList) {
            let visibleStocksCount = 0;
            tradFiRowsList.querySelectorAll('[data-tradfi-row]').forEach((row) => {
                const matchesQuery = row.dataset.tradfiSymbol.includes(query) || row.dataset.tradfiName.includes(query);
                row.classList.toggle('hidden', !matchesQuery);
                if (matchesQuery) visibleStocksCount += 1;
            });
            tradFiEmptyState.classList.toggle('hidden', visibleStocksCount > 0);
        }

        if (tradFiSpotRowsList) {
            let visibleSpotCount = 0;
            tradFiSpotRowsList.querySelectorAll('[data-tradfi-spot-row]').forEach((row) => {
                const matchesQuery = row.dataset.tradfiSpotSymbol.includes(query) || row.dataset.tradfiSpotName.includes(query);
                row.classList.toggle('hidden', !matchesQuery);
                if (matchesQuery) visibleSpotCount += 1;
            });
            tradFiSpotEmptyState.classList.toggle('hidden', visibleSpotCount > 0);
        }

        if (tradFiFuturesRowsList) {
            let visibleFuturesCount = 0;
            tradFiFuturesRowsList.querySelectorAll('[data-tradfi-futures-row]').forEach((row) => {
                const matchesQuery = row.dataset.tradfiFuturesSymbol.includes(query) || row.dataset.tradfiFuturesName.includes(query);
                row.classList.toggle('hidden', !matchesQuery);
                if (matchesQuery) visibleFuturesCount += 1;
            });
            tradFiFuturesEmptyState.classList.toggle('hidden', visibleFuturesCount > 0);
        }
    };

    const updateCryptoRows = () => {
        const query = search.value.trim().toLowerCase();
        const isBStocksActive = activeCryptoFilter === 'bStocks';
        const isTCommoditiesActive = activeCryptoFilter === 'tCommodities';
        const isCustomListActive = isBStocksActive || isTCommoditiesActive;

        if (isBStocksActive) renderBStocksRows();
        if (isTCommoditiesActive) renderTCommoditiesRows();

        cryptoRowsList.classList.toggle('hidden', isCustomListActive);
        bStocksRowsList.classList.toggle('hidden', !isCustomListActive);

        if (isCustomListActive) {
            let visibleCustomCount = 0;
            const rows = isTCommoditiesActive ? bStocksRowsList.querySelectorAll('[data-tcommodities-row]') : bStocksRowsList.querySelectorAll('[data-bstocks-row]');
            rows.forEach((row) => {
                const symbol = row.dataset.tcommoditiesSymbol || row.dataset.bstocksSymbol || '';
                const name = row.dataset.tcommoditiesName || row.dataset.bstocksName || '';
                const matchesSearch = symbol.includes(query) || name.includes(query);
                row.classList.toggle('hidden', !matchesSearch);
                if (matchesSearch) visibleCustomCount += 1;
            });
            cryptoEmptyState.classList.add('hidden');
            bStocksEmptyState.classList.toggle('hidden', visibleCustomCount > 0);
            return;
        }

        bStocksEmptyState.classList.add('hidden');
        let visibleCount = 0;

        cryptoRowsList.querySelectorAll('[data-crypto-row]').forEach((row) => {
            const matchesQuery = row.dataset.cryptoSymbol.includes(query) || row.dataset.cryptoName.includes(query);
            const matchesFilter = activeCryptoFilter === 'All' || row.dataset.cryptoSegment === activeCryptoFilter;
            const isVisible = matchesQuery && matchesFilter;
            row.classList.toggle('hidden', !isVisible);
            if (isVisible) visibleCount += 1;
        });

        cryptoEmptyState.classList.toggle('hidden', visibleCount > 0);

        let visibleFuturesCount = 0;
        usdMarginedRows.querySelectorAll('[data-futures-row]').forEach((row) => {
            const matchesQuery = row.dataset.futuresSymbol.includes(query) || row.dataset.futuresName.includes(query);
            const matchesFilter = activeFuturesFilter === 'All' || row.dataset.futuresFilterValue === activeFuturesFilter;
            const isVisible = matchesQuery && matchesFilter;
            row.classList.toggle('hidden', !isVisible);
            if (isVisible) visibleFuturesCount += 1;
        });
        futuresEmptyState.classList.toggle('hidden', visibleFuturesCount > 0);

        let visibleCoinMarginedCount = 0;
        coinMarginedRows.querySelectorAll('[data-coinm-row]').forEach((row) => {
            const matchesQuery = row.dataset.coinmSymbol.includes(query) || row.dataset.coinmName.includes(query);
            const rowFilters = row.dataset.coinmFilters.split(',');
            const matchesFilter = activeCoinMarginedFilter === 'All' || rowFilters.includes(activeCoinMarginedFilter);
            const isVisible = matchesQuery && matchesFilter;
            row.classList.toggle('hidden', !isVisible);
            if (isVisible) visibleCoinMarginedCount += 1;
        });
        coinMarginedEmptyState.classList.toggle('hidden', visibleCoinMarginedCount > 0);

        let visibleOptionsCount = 0;
        optionsRowsList.querySelectorAll('[data-options-row]').forEach((row) => {
            const matchesQuery = row.dataset.optionsSymbol.includes(query) || row.dataset.optionsName.includes(query);
            row.classList.toggle('hidden', !matchesQuery);
            if (matchesQuery) visibleOptionsCount += 1;
        });
        if (optionsEmptyState.textContent !== 'Loading options markets...' && optionsEmptyState.textContent !== 'Options data is currently unavailable.') {
            optionsEmptyState.textContent = 'No options markets found.';
            optionsEmptyState.classList.toggle('hidden', visibleOptionsCount > 0);
        }
    };

    const updateCards = () => {
        const activeTab = marketRoot.querySelector('[data-market-tab][aria-selected="true"]')?.dataset.marketTab || 'Favorites';
        const query = search.value.trim().toLowerCase();
        const isCryptoActive = activeTab === 'Crypto';
        const isTradFiActive = activeTab === 'TradFi';
        const isAlphaActive = activeTab === 'Alpha';
        favoritesView.classList.toggle('hidden', isCryptoActive || isTradFiActive || isAlphaActive);
        cryptoView.classList.toggle('hidden', !isCryptoActive);
        if (tradFiView) tradFiView.classList.toggle('hidden', !isTradFiActive);
        if (alphaView) alphaView.classList.toggle('hidden', !isAlphaActive);
        cryptoSubViews.forEach((view) => {
            view.classList.toggle('hidden', view.dataset.cryptoSubview !== activeCryptoMarketType);
        });
        cryptoTypeEmpty.classList.toggle('hidden', ['Spot', 'USDⓈ-M', 'COIN-M', 'Options'].includes(activeCryptoMarketType));
        let visibleCount = 0;

        cards.forEach((card) => {
            const matchesTab = activeTab === 'For You' || activeTab === 'Favorites' || card.dataset.category === activeTab;
            const matchesSearch = card.dataset.symbol.includes(query) || `${card.dataset.symbol} /usdt`.includes(query);
            const isVisible = matchesTab && matchesSearch;
            card.classList.toggle('hidden', !isVisible);
            if (isVisible) visibleCount += 1;
        });

        emptyState.classList.toggle('hidden', visibleCount > 0 || isCryptoActive || isTradFiActive || isAlphaActive);
        updateCryptoRows();
        if (tradFiRowsList) updateTradFiRows();
        if (alphaRowsList) updateAlphaRows();
    };

    const toggleFavorite = (button) => {
        const card = button.closest('[data-market-card]');
        const isFavorite = card.dataset.favorite !== 'true';

        card.dataset.favorite = String(isFavorite);
        button.setAttribute('aria-pressed', String(isFavorite));
        button.setAttribute('aria-label', `${isFavorite ? 'Remove' : 'Add'} ${card.dataset.symbol.toUpperCase()} ${isFavorite ? 'from' : 'to'} favorites`);
        button.classList.toggle('border-blue-600', isFavorite);
        button.classList.toggle('bg-blue-600', isFavorite);
        button.classList.toggle('text-white', isFavorite);
        button.classList.toggle('border-slate-300', !isFavorite);
        button.classList.toggle('bg-white', !isFavorite);
        button.classList.toggle('text-transparent', !isFavorite);
        card.classList.toggle('border-blue-400/60', isFavorite);
        card.classList.toggle('bg-blue-50/10', isFavorite);
        card.classList.toggle('border-slate-200/60', !isFavorite);
        card.classList.toggle('bg-white', !isFavorite);
        updateCards();
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((item) => {
                const isActive = item === tab;
                item.setAttribute('aria-selected', String(isActive));
                item.classList.toggle('font-semibold', isActive);
                item.classList.toggle('font-medium', !isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-500', !isActive);
                const isAlphaTab = item.dataset.marketTab === 'Alpha';
                item.classList.toggle('font-bold', isActive && isAlphaTab);
                const indicator = item.querySelector('[data-tab-indicator]');
                indicator.classList.remove('bg-amber-400');
                indicator.classList.add('bg-blue-600');
                indicator.classList.toggle('hidden', !isActive);
            });
            updateCards();
            if (tab.dataset.marketTab === 'Crypto') {
                if (activeCryptoMarketType === 'USDⓈ-M') loadUsdMarginedTickers();
                if (activeCryptoMarketType === 'COIN-M') loadCoinMarginedTickers();
                if (activeCryptoMarketType === 'Options') loadOptionsTickers();
            }
        });
    });

    cards.forEach((card) => {
        const favoriteButton = card.querySelector('[data-market-favorite]');
        const coinImage = card.querySelector('[data-coin-image]');
        const coinFallback = card.querySelector('[data-coin-fallback]');

        const showCoinFallback = () => {
            coinImage.classList.add('hidden');
            coinFallback.classList.remove('hidden');
        };
        const showCoinImage = () => coinFallback.classList.add('hidden');

        coinImage.addEventListener('error', showCoinFallback, { once: true });
        coinImage.addEventListener('load', showCoinImage, { once: true });
        if (coinImage.complete) {
            coinImage.naturalWidth > 0 ? showCoinImage() : showCoinFallback();
        }

        favoriteButton.addEventListener('click', (event) => {
            toggleFavorite(event.currentTarget);
        });
        card.addEventListener('click', (event) => {
            if (!event.target.closest('[data-market-favorite]')) favoriteButton.click();
        });
    });

    marketRoot.querySelectorAll('[data-crypto-market-type]').forEach((tab) => {
        tab.addEventListener('click', () => {
            activeCryptoMarketType = tab.dataset.cryptoMarketType;
            marketRoot.querySelectorAll('[data-crypto-market-type]').forEach((item) => {
                const isActive = item === tab;
                item.setAttribute('aria-selected', String(isActive));
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-400', !isActive);
                item.querySelector('[data-crypto-type-indicator]').classList.toggle('hidden', !isActive);
            });
            cryptoSubViews.forEach((view) => {
                view.classList.toggle('hidden', view.dataset.cryptoSubview !== activeCryptoMarketType);
            });
            cryptoTypeEmpty.classList.toggle('hidden', ['Spot', 'USDⓈ-M', 'COIN-M', 'Options'].includes(activeCryptoMarketType));
            if (activeCryptoMarketType === 'USDⓈ-M') loadUsdMarginedTickers();
            if (activeCryptoMarketType === 'COIN-M') loadCoinMarginedTickers();
            if (activeCryptoMarketType === 'Options') loadOptionsTickers();
        });
    });

    cryptoFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeCryptoFilter = filter.dataset.cryptoFilter;
            cryptoFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('font-semibold', !isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-500', !isActive);
                item.classList.toggle('rounded-lg', true);
            });
            updateCryptoRows();
        });
    });

    tradFiSubTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            activeTradFiSubTab = tab.dataset.tradfiSubtab;
            tradFiSubTabs.forEach((item) => {
                const isActive = item === tab;
                item.setAttribute('aria-selected', String(isActive));
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-400', !isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('font-medium', !isActive);
                item.querySelector('[data-tradfi-subtab-indicator]')?.classList.toggle('hidden', !isActive);
            });
            tradFiStocksContent.classList.toggle('hidden', activeTradFiSubTab !== 'Stocks');
            tradFiSpotContent.classList.toggle('hidden', activeTradFiSubTab !== 'Spot');
            tradFiFuturesContent.classList.toggle('hidden', activeTradFiSubTab !== 'Futures');
            updateTradFiRows();
        });
    });

    tradFiFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeTradFiFilter = filter.dataset.tradfiFilter;
            tradFiFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('dark:bg-slate-800', isActive);
                item.classList.toggle('dark:text-white', isActive);
                item.classList.toggle('text-slate-500', !isActive);
            });
            renderTradFiRows();
            updateTradFiRows();
        });
    });

    tradFiSpotFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeTradFiSpotFilter = filter.dataset.tradfiSpotFilter;
            tradFiSpotFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('dark:bg-slate-800', isActive);
                item.classList.toggle('dark:text-white', isActive);
                item.classList.toggle('text-slate-500', !isActive);
                item.classList.toggle('font-medium', !isActive);
            });
            renderTradFiSpotRows();
            updateTradFiRows();
        });
    });

    tradFiFuturesFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeTradFiFuturesFilter = filter.dataset.tradfiFuturesFilter;
            tradFiFuturesFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('dark:bg-slate-800', isActive);
                item.classList.toggle('dark:text-white', isActive);
                item.classList.toggle('text-slate-500', !isActive);
                item.classList.toggle('font-medium', !isActive);
            });
            renderTradFiFuturesRows();
            updateTradFiRows();
        });
    });

    alphaFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            alphaFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('dark:bg-slate-800', isActive);
                item.classList.toggle('dark:text-white', isActive);
                item.classList.toggle('bg-transparent', !isActive);
                item.classList.toggle('text-slate-400', !isActive);
                item.classList.toggle('font-normal', !isActive);
            });
            filterAndRenderAlphaData(filter.dataset.alphaFilter);
        });
    });

    futuresFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeFuturesFilter = filter.dataset.futuresFilter;
            futuresFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('font-semibold', !isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-500', !isActive);
                item.classList.toggle('rounded-lg', true);
            });
            updateCryptoRows();
        });
    });

    coinMarginedFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            activeCoinMarginedFilter = filter.dataset.coinmFilter;
            coinMarginedFilters.forEach((item) => {
                const isActive = item === filter;
                item.setAttribute('aria-pressed', String(isActive));
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('font-semibold', isActive);
                item.classList.toggle('text-slate-900', isActive);
                item.classList.toggle('text-slate-500', !isActive);
            });
            updateCryptoRows();
        });
    });

    marketRoot.querySelector('[data-crypto-density]').addEventListener('click', (event) => {
        const button = event.currentTarget;
        const compact = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(compact));
        cryptoRowsList.querySelectorAll('[data-crypto-row]').forEach((row) => {
            row.classList.toggle('py-2', compact);
            row.classList.toggle('py-3', !compact);
        });
    });

    marketRoot.querySelector('[data-futures-density]').addEventListener('click', (event) => {
        const button = event.currentTarget;
        const compact = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(compact));
        usdMarginedRows.querySelectorAll('[data-futures-row]').forEach((row) => {
            row.classList.toggle('py-2', compact);
            row.classList.toggle('py-3', !compact);
        });
    });

    marketRoot.querySelector('[data-coinm-density]').addEventListener('click', (event) => {
        const button = event.currentTarget;
        const compact = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(compact));
        coinMarginedRows.querySelectorAll('[data-coinm-row]').forEach((row) => {
            row.classList.toggle('py-2', compact);
            row.classList.toggle('py-3', !compact);
        });
    });

    search.addEventListener('input', updateCards);
    marketRoot.querySelector('[data-add-favorites]').addEventListener('click', () => {
        cards.filter((card) => !card.classList.contains('hidden')).forEach((card) => {
            if (card.dataset.favorite !== 'true') card.querySelector('[data-market-favorite]').click();
        });
    });
    marketRoot.querySelector('[data-add-pairs]').addEventListener('click', () => search.focus());

    renderCryptoRows();
    renderBStocksRows();
    renderTradFiRows();
    renderTradFiSpotRows();
    renderTradFiFuturesRows();
    renderAlphaRows();
    renderUsdMarginedRows();
    renderCoinMarginedRows();
    updateCards();
    loadCryptoTickers();
    window.setInterval(loadCryptoTickers, 15000);
    window.setInterval(loadUsdMarginedTickers, 15000);
    window.setInterval(loadCoinMarginedTickers, 15000);
    window.setInterval(loadOptionsTickers, 15000);
})();

const marketAssets = [
    { symbol: 'BTC', name: 'Bitcoin', pair: 'BTC/USDT', price: 62822.40, change24h: 2.45, isHot: true, isNew: false, chartData: [10, 12, 11, 14, 13, 18, 17, 22] },
    { symbol: 'ETH', name: 'Ethereum', pair: 'ETH/USDT', price: 2481.67, change24h: 1.05, isHot: true, isNew: false, chartData: [9, 11, 10, 13, 12, 15, 17, 16] },
    { symbol: 'SOL', name: 'Solana', pair: 'SOL/USDT', price: 145.20, change24h: 12.45, isHot: true, isNew: true, chartData: [7, 9, 8, 13, 16, 15, 20, 24] },
    { symbol: 'XRP', name: 'XRP', pair: 'XRP/USDT', price: 1.4187, change24h: -0.65, isHot: true, isNew: false, chartData: [20, 18, 19, 16, 17, 14, 13, 12] },
    { symbol: 'ALGO', name: 'Algorand', pair: 'ALGO/USDT', price: 0.09503, change24h: -8.45, isHot: false, isNew: true, chartData: [22, 20, 19, 16, 15, 12, 9, 7] },
    { symbol: 'ADA', name: 'Cardano', pair: 'ADA/USDT', price: 0.2209, change24h: 3.08, isHot: false, isNew: true, chartData: [8, 10, 9, 12, 11, 15, 14, 18] },
    { symbol: 'MATIC', name: 'Polygon', pair: 'MATIC/USDT', price: 0.3794, change24h: -0.29, isHot: false, isNew: false, chartData: [18, 17, 19, 16, 17, 15, 14, 13] },
    { symbol: 'DOGE', name: 'Dogecoin', pair: 'DOGE/USDT', price: 0.0911, change24h: 7.25, isHot: true, isNew: false, chartData: [6, 8, 7, 11, 13, 12, 16, 19] },
    { symbol: 'USDT', name: 'Tether', pair: 'USDT/USDT', price: 1.0002, change24h: 0.01, isHot: false, isNew: false, chartData: [10, 10, 11, 10, 11, 11, 10, 11] }
];

const futuresAssets = [
    { name: 'BTC', pair: 'USDT', fullName: 'Bitcoin', volume: '15.41B', volumeNumber: 15.41, price: '$62,822.40', priceNumber: 62822.4, chg: '+2.45%', changeNumber: 2.45, trend: 'up', categories: ['Crypto', 'DeFi', 'Pay'] },
    { name: 'ETH', pair: 'USDT', fullName: 'Ethereum', volume: '12.51B', volumeNumber: 12.51, price: '$2,481.67', priceNumber: 2481.67, chg: '+1.05%', changeNumber: 1.05, trend: 'up', categories: ['Crypto', 'DeFi'] },
    { name: 'SOL', pair: 'USDT', fullName: 'Solana', volume: '2.82B', volumeNumber: 2.82, price: '$145.20', priceNumber: 145.2, chg: '+12.45%', changeNumber: 12.45, trend: 'up', categories: ['Crypto', 'DeFi', 'New', 'Metaverse'] },
    { name: 'XRP', pair: 'USDT', fullName: 'XRP', volume: '1.42B', volumeNumber: 1.42, price: '$1.42', priceNumber: 1.42, chg: '-0.65%', changeNumber: -0.65, trend: 'down', categories: ['Crypto', 'Pay'] },
];

const marketList = document.getElementById('market-list');
const marketEmpty = document.getElementById('market-empty');
const futuresList = document.getElementById('futures-market-list');
const futuresEmpty = document.getElementById('futures-market-empty');
const spotContent = document.getElementById('spotMarketContent');
const usdsmContent = document.getElementById('usdsmMarketContent');
const marketSearchInput = document.getElementById('marketSearch');
const clearMarketSearch = document.getElementById('clearMarketSearch');
const tabsContainer = document.getElementById('marketCategoryTabs');
const mainTabsRow = tabsContainer.querySelector('.tabs-row-main');
const marketTabs = mainTabsRow.querySelectorAll('[data-category]');
const subTabs = tabsContainer.querySelectorAll('.sub-tab');
const tabUnderline = mainTabsRow.querySelector('.tab-underline');
const tabsRows = tabsContainer.querySelectorAll('.tabs-row');
const favoriteStorageKey = 'trade-xpro-market-favorites';
let activeMarketTab = 'favorites';
let activeFuturesFilter = 'all';
let futuresSortKey = 'volume';
let futuresSortDirection = -1;
let favorites = new Set();

try {
    favorites = new Set(JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]'));
} catch (error) {
    favorites = new Set();
}

// Measure the label separately so the underline excludes tab spacing.
const updateTabUnderline = () => {
    const activeTab = mainTabsRow.querySelector('.market-category-tab.is-active');
    if (!activeTab) return;

    const textRange = document.createRange();
    textRange.selectNodeContents(activeTab);
    const textWidth = textRange.getBoundingClientRect().width;
    const left = activeTab.offsetLeft + (activeTab.offsetWidth - textWidth) / 2;
    tabUnderline.style.left = `${left}px`;
    tabUnderline.style.width = `${textWidth}px`;
};

const formatMarketPrice = (price) => Number(price).toLocaleString('en-US', {
    minimumFractionDigits: price >= 1 ? 2 : 0,
    maximumFractionDigits: price >= 1 ? 2 : 4
});

const formatMarketChange = (change) => `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;

const renderSparkline = (values, isPositive) => {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const points = values.map((value, index) => {
        const x = (index / (values.length - 1)) * 50;
        const y = 12 - ((value - min) / range) * 10;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    return `<svg class="w-16 h-4 mt-0.5 stroke-[2px]" viewBox="0 0 50 15" role="img" aria-label="${isPositive ? 'Rising' : 'Falling'} price trend"><path d="M${points.replaceAll(' ', ' L')}" stroke="${isPositive ? '#0ECB81' : '#F6465D'}" fill="none"/></svg>`;
};

const getCategoryMatches = (asset, category) => {
    if (category === 'favorites') return favorites.has(asset.symbol);
    if (category === 'crypto') return true;
    if (category === 'prediction') return asset.symbol !== 'USDT';
    if (category === 'gainers') return asset.change24h > 0;
    if (category === 'losers') return asset.change24h < 0;
    return false;
};

const persistFavorites = () => {
    try {
        localStorage.setItem(favoriteStorageKey, JSON.stringify([...favorites]));
    } catch (error) {
        // Favorites still work for the current page when storage is unavailable.
    }
};

const openMarketDetail = (symbol) => {
    window.location.assign(`/market-detail?symbol=${encodeURIComponent(`${symbol}USDT`)}`);
};

const renderFuturesSparkline = (trend) => {
    const isPositive = trend === 'up';
    const points = isPositive
        ? '0,14 8,12 16,13 24,9 32,10 40,6 48,7 55,3'
        : '0,4 8,6 16,5 24,9 32,8 40,12 48,11 55,15';
    const color = isPositive ? '#16C784' : '#EA3943';
    return `<svg class="futures-sparkline" width="55" height="18" viewBox="0 0 55 18" fill="none" aria-hidden="true"><polyline points="${points}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
};

// Filter and sort the sample USDⓈ-M perpetual markets into the futures panel.
const renderFuturesMarkets = () => {
    const query = marketSearchInput.value.trim().toLowerCase();
    let visibleAssets = futuresAssets.filter((asset) => {
        const matchesSearch = !query || `${asset.name}${asset.pair} ${asset.fullName}`.toLowerCase().includes(query);
        const matchesFilter = activeFuturesFilter === 'all' || asset.categories.includes(activeFuturesFilter);
        return matchesSearch && matchesFilter;
    });

    visibleAssets.sort((left, right) => {
        if (futuresSortKey === 'name') return left.name.localeCompare(right.name) * futuresSortDirection;
        const leftValue = futuresSortKey === 'volume' ? left.volumeNumber : futuresSortKey === 'price' ? left.priceNumber : left.changeNumber;
        const rightValue = futuresSortKey === 'volume' ? right.volumeNumber : futuresSortKey === 'price' ? right.priceNumber : right.changeNumber;
        return (leftValue - rightValue) * futuresSortDirection;
    });

    futuresList.innerHTML = visibleAssets.map((asset) => {
        const symbol = `${asset.name}${asset.pair}`;
        const isFavorite = favorites.has(symbol);
        const changeClass = asset.changeNumber >= 0 ? 'is-positive' : 'is-negative';
        return `
            <article class="futures-market-row" role="row">
                <button class="futures-market-favorite${isFavorite ? ' is-favorite' : ''}" type="button" data-futures-favorite="${symbol}" aria-label="${isFavorite ? 'Remove' : 'Add'} ${symbol} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z"/></svg>
                </button>
                <div class="futures-market-name" role="cell">
                    <div class="futures-market-name-top"><strong>${asset.name}<span class="futures-pair-quote">/${asset.pair}</span></strong><span class="futures-perp-badge">Perp</span></div>
                    <small>${asset.fullName}<span class="futures-volume"> · ${asset.volume}</span></small>
                </div>
                <div class="futures-market-price" role="cell"><strong>${asset.price}</strong>${renderFuturesSparkline(asset.trend)}</div>
                <span class="futures-market-change ${changeClass}" role="cell">${asset.chg}</span>
            </article>`;
    }).join('');

    futuresEmpty.hidden = visibleAssets.length > 0;
};

const renderMarkets = () => {
    const query = marketSearchInput.value.trim().toLowerCase();
    let visibleAssets = marketAssets.filter((asset) => {
        const matchesCategory = getCategoryMatches(asset, activeMarketTab);
        const matchesSearch = !query || `${asset.name} ${asset.symbol} ${asset.pair}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
    if (activeMarketTab === 'gainers') visibleAssets.sort((left, right) => right.change24h - left.change24h);
    if (activeMarketTab === 'losers') visibleAssets.sort((left, right) => left.change24h - right.change24h);

    marketList.innerHTML = visibleAssets.map((asset) => {
        const isPositive = asset.change24h >= 0;
        const isFavorite = favorites.has(asset.symbol);
        const changeClass = isPositive ? 'bg-[#0ECB81]/15 text-[#0ECB81] border-[#0ECB81]/20' : 'bg-[#F6465D]/15 text-[#F6465D] border-[#F6465D]/20';

        return `
            <article class="market-row flex items-center justify-between px-4 py-3 border-b border-gray-800/40 hover:bg-[#2B313A]/30 cursor-pointer w-full" data-symbol="${asset.symbol}" role="link" tabindex="0" aria-label="Open ${asset.name} market details">
                <div class="flex items-center gap-2.5 text-left w-[38%]">
                    <button class="market-favorite ${isFavorite ? 'is-favorite' : ''} text-gray-500 hover:text-[#F0B90B] focus:outline-none transition-colors" type="button" data-favorite="${asset.symbol}" aria-label="${isFavorite ? 'Remove' : 'Add'} ${asset.name} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z"/></svg>
                    </button>
                    <img src="https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png" alt="${asset.symbol}" class="w-7 h-7 rounded-full bg-gray-800 shrink-0" onerror="this.style.display='none'">
                    <div class="flex flex-col min-w-0">
                        <div class="text-xs font-bold text-white tracking-wide truncate">${asset.symbol}<span class="text-[10px] text-gray-400 font-normal">/USDT</span></div>
                        <div class="text-[10px] text-gray-400 truncate">${asset.name}</div>
                    </div>
                </div>
                <div class="flex flex-col items-end text-right w-[32%] pr-2">
                    <div class="text-xs font-bold text-white">$${formatMarketPrice(asset.price)}</div>
                    ${renderSparkline(asset.chartData, isPositive)}
                </div>
                <div class="flex justify-end items-center w-[30%]">
                    <div class="w-[68px] py-1.5 rounded-md text-[11px] font-bold text-center border ${changeClass}">${formatMarketChange(asset.change24h)}</div>
                </div>
            </article>`;
    }).join('');

    marketEmpty.hidden = visibleAssets.length > 0;
    clearMarketSearch.hidden = query.length === 0;

    marketList.querySelectorAll('.market-row').forEach((row) => {
        row.addEventListener('click', (event) => {
            if (event.target.closest('[data-favorite]')) return;
            openMarketDetail(row.dataset.symbol);
        });
        row.addEventListener('keydown', (event) => {
            if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('[data-favorite]')) {
                event.preventDefault();
                openMarketDetail(row.dataset.symbol);
            }
        });
    });

    marketList.querySelectorAll('[data-favorite]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const symbol = button.dataset.favorite;
            if (favorites.has(symbol)) favorites.delete(symbol);
            else favorites.add(symbol);
            persistFavorites();
            renderMarkets();
        });
    });

    renderFuturesMarkets();
};

marketTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activeMarketTab = tab.dataset.category;
        marketTabs.forEach((item) => {
            const selected = item === tab;
            item.setAttribute('aria-selected', String(selected));
            item.classList.toggle('is-active', selected);
        });
        updateTabUnderline();
        renderMarkets();
    });
});

subTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const row = tab.closest('.tabs-row');
        row.querySelectorAll('.sub-tab').forEach((item) => {
            const selected = item === tab;
            item.classList.toggle('active-sub', selected);
            if (item.dataset.tab) item.classList.toggle('active', selected);
            item.setAttribute('aria-selected', String(selected));
        });

        // Only Spot and USDⓈ-M have content panels in this view.
        if (tab.dataset.tab === 'spot') {
            spotContent.hidden = false;
            usdsmContent.hidden = true;
        } else if (tab.dataset.tab === 'usdm') {
            spotContent.hidden = true;
            usdsmContent.hidden = false;
            renderFuturesMarkets();
        }
    });
});

document.querySelectorAll('[data-futures-filter]').forEach((button) => {
    button.addEventListener('click', () => {
        activeFuturesFilter = button.dataset.futuresFilter;
        document.querySelectorAll('[data-futures-filter]').forEach((item) => {
            const selected = item === button;
            item.classList.toggle('is-active', selected);
            item.setAttribute('aria-selected', String(selected));
        });
        renderFuturesMarkets();
    });
});

document.querySelectorAll('[data-futures-sort]').forEach((button) => {
    button.addEventListener('click', () => {
        const nextSortKey = button.dataset.futuresSort;
        if (nextSortKey === futuresSortKey) futuresSortDirection *= -1;
        else {
            futuresSortKey = nextSortKey;
            futuresSortDirection = nextSortKey === 'change' ? -1 : 1;
        }
        renderFuturesMarkets();
    });
});

futuresList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-futures-favorite]');
    if (!button) return;
    const symbol = button.dataset.futuresFavorite;
    if (favorites.has(symbol)) favorites.delete(symbol);
    else favorites.add(symbol);
    persistFavorites();
    renderFuturesMarkets();
});

tabsRows.forEach((row) => {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let didDrag = false;

    const stopDrag = () => {
        isDown = false;
        row.classList.remove('is-dragging');
    };

    row.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        isDown = true;
        didDrag = false;
        startX = event.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
        row.classList.add('is-dragging');
    });

    row.addEventListener('mousemove', (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - row.offsetLeft;
        if (Math.abs(x - startX) > 3) didDrag = true;
        row.scrollLeft = scrollLeft - (x - startX) * 2;
    });

    row.addEventListener('mouseup', stopDrag);
    row.addEventListener('mouseleave', stopDrag);
    window.addEventListener('mouseup', stopDrag);
    row.addEventListener('click', (event) => {
        if (!didDrag) return;
        event.preventDefault();
        event.stopPropagation();
        didDrag = false;
    }, true);
});

window.addEventListener('resize', updateTabUnderline);
updateTabUnderline();
document.fonts?.ready.then(updateTabUnderline);

marketSearchInput.addEventListener('input', renderMarkets);
clearMarketSearch.addEventListener('click', () => {
    marketSearchInput.value = '';
    marketSearchInput.focus();
    renderMarkets();
});

renderMarkets();

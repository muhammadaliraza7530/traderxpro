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

const marketList = document.getElementById('market-list');
const marketEmpty = document.getElementById('market-empty');
const marketSearchInput = document.getElementById('marketSearch');
const clearMarketSearch = document.getElementById('clearMarketSearch');
const marketTabs = document.querySelectorAll('[data-tab]');
const favoriteStorageKey = 'trade-xpro-market-favorites';
let activeMarketTab = 'all';
let favorites = new Set();

try {
    favorites = new Set(JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]'));
} catch (error) {
    favorites = new Set();
}

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
    if (category === 'all') return true;
    if (category === 'hot') return asset.isHot;
    if (category === 'gainers') return asset.change24h > 0;
    if (category === 'losers') return asset.change24h < 0;
    if (category === 'new') return asset.isNew;
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

const renderMarkets = () => {
    const query = marketSearchInput.value.trim().toLowerCase();
    const visibleAssets = marketAssets.filter((asset) => {
        const matchesCategory = getCategoryMatches(asset, activeMarketTab);
        const matchesSearch = !query || `${asset.name} ${asset.symbol} ${asset.pair}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

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
};

marketTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activeMarketTab = tab.dataset.tab;
        marketTabs.forEach((item) => {
            const selected = item === tab;
            item.classList.toggle('is-active', selected);
            item.setAttribute('aria-selected', String(selected));
            item.classList.toggle('text-white', selected);
            item.classList.toggle('font-bold', selected);
            item.classList.toggle('text-gray-400', !selected);
            item.classList.toggle('font-medium', !selected);
        });
        renderMarkets();
    });
});

marketSearchInput.addEventListener('input', renderMarkets);
clearMarketSearch.addEventListener('click', () => {
    marketSearchInput.value = '';
    marketSearchInput.focus();
    renderMarkets();
});

renderMarkets();

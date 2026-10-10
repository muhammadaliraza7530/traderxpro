@extends($activeTemplate.'layouts.master')

@section('content')
    @php
        $marketAssets = [
            [
                'symbol' => 'BNB',
                'change' => '+0.87%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => true,
            ],
            [
                'symbol' => 'BTC',
                'change' => '+0.16%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => true,
            ],
            [
                'symbol' => 'ETH',
                'change' => '-0.20%',
                'positive' => false,
                'category' => 'Crypto',
                'favorite' => true,
            ],
            [
                'symbol' => 'MAGIC',
                'change' => '+36.59%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => true,
            ],
            [
                'symbol' => 'LUMIA',
                'change' => '+37.85%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => false,
            ],
            [
                'symbol' => 'AGPUB',
                'change' => '+1.01%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => false,
            ],
            [
                'symbol' => 'NEAR',
                'change' => '+10.61%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => true,
            ],
            [
                'symbol' => 'ARPA',
                'change' => '+20.18%',
                'positive' => true,
                'category' => 'Crypto',
                'favorite' => false,
            ],
        ];
        $marketLogoMap = [
            'BNB' => 'https://assets.coincap.io/assets/icons/bnb@2x.png',
            'BTC' => 'https://assets.coincap.io/assets/icons/btc@2x.png',
            'ETH' => 'https://assets.coincap.io/assets/icons/eth@2x.png',
            '1INCH' => 'https://assets.coincap.io/assets/icons/1inch@2x.png',
            'AAVE' => 'https://assets.coincap.io/assets/icons/aave@2x.png',
            'ADA' => 'https://assets.coincap.io/assets/icons/ada@2x.png',
            'ALGO' => 'https://assets.coincap.io/assets/icons/algo@2x.png',
            'BCH' => 'https://assets.coincap.io/assets/icons/bch@2x.png',
            'AVAX' => 'https://assets.coincap.io/assets/icons/avax@2x.png',
            'FIL' => 'https://assets.coincap.io/assets/icons/fil@2x.png',
            'LINK' => 'https://assets.coincap.io/assets/icons/link@2x.png',
            'LTC' => 'https://assets.coincap.io/assets/icons/ltc@2x.png',
            'SOL' => 'https://assets.coincap.io/assets/icons/sol@2x.png',
            'XRP' => 'https://assets.coincap.io/assets/icons/xrp@2x.png',
            'DOGE' => 'https://assets.coincap.io/assets/icons/doge@2x.png',
            'MAGIC' => 'https://coin-images.coingecko.com/coins/images/18623/large/magic.png',
            'LUMIA' => 'https://coin-images.coingecko.com/coins/images/50867/large/lumia.jpg',
            'AGPUB' => 'https://coin-images.coingecko.com/coins/images/102178973/large/axe.jpg',
            'NEAR' => 'https://assets.coincap.io/assets/icons/near@2x.png',
            'ARPA' => 'https://assets.coincap.io/assets/icons/arpa@2x.png',
        ];
        $cryptoMarkets = [
            ['symbol' => 'BTC', 'name' => 'Bitcoin', 'leverage' => '10x', 'image' => $marketLogoMap['BTC']],
            ['symbol' => '1INCH', 'name' => '1inch Network', 'leverage' => '5x', 'image' => $marketLogoMap['1INCH']],
            ['symbol' => 'AAVE', 'name' => 'Aave', 'leverage' => '5x', 'image' => $marketLogoMap['AAVE']],
            ['symbol' => 'ADA', 'name' => 'Cardano', 'leverage' => '10x', 'image' => $marketLogoMap['ADA']],
            ['symbol' => 'ALGO', 'name' => 'Algorand', 'leverage' => '5x', 'image' => $marketLogoMap['ALGO']],
            ['symbol' => 'BNB', 'name' => 'BNB', 'leverage' => '10x', 'image' => $marketLogoMap['BNB']],
            ['symbol' => 'ETH', 'name' => 'Ethereum', 'leverage' => '5x', 'image' => $marketLogoMap['ETH']],
            ['symbol' => 'SOL', 'name' => 'Solana', 'leverage' => '10x', 'image' => $marketLogoMap['SOL']],
            ['symbol' => 'XRP', 'name' => 'XRP', 'leverage' => '5x', 'image' => $marketLogoMap['XRP']],
            ['symbol' => 'DOGE', 'name' => 'Dogecoin', 'leverage' => '5x', 'image' => $marketLogoMap['DOGE']],
            ['symbol' => 'NEAR', 'name' => 'NEAR Protocol', 'leverage' => '5x', 'image' => $marketLogoMap['NEAR']],
        ];
        $usdMarginedMarkets = [
            ['symbol' => 'BTC', 'name' => 'Bitcoin', 'image' => $marketLogoMap['BTC'], 'filter' => 'Crypto'],
            ['symbol' => 'ETH', 'name' => 'Ethereum', 'image' => $marketLogoMap['ETH'], 'filter' => 'Crypto'],
            ['symbol' => 'BCH', 'name' => 'Bitcoin Cash', 'image' => $marketLogoMap['BCH'], 'filter' => 'Crypto'],
            ['symbol' => '1INCH', 'name' => '1inch Network', 'image' => $marketLogoMap['1INCH'], 'filter' => 'DeFi'],
            ['symbol' => 'AAVE', 'name' => 'Aave', 'image' => $marketLogoMap['AAVE'], 'filter' => 'DeFi'],
            ['symbol' => 'ADA', 'name' => 'Cardano', 'image' => $marketLogoMap['ADA'], 'filter' => 'Crypto'],
            ['symbol' => 'ALGO', 'name' => 'Algorand', 'image' => $marketLogoMap['ALGO'], 'filter' => 'Pay'],
            ['symbol' => 'BNB', 'name' => 'BNB', 'image' => $marketLogoMap['BNB'], 'filter' => 'Pay'],
            ['symbol' => 'DOGE', 'name' => 'Dogecoin', 'image' => $marketLogoMap['DOGE'], 'filter' => 'Pay'],
            ['symbol' => 'LUMIA', 'name' => 'Lumia', 'image' => $marketLogoMap['LUMIA'], 'filter' => 'New'],
            ['symbol' => 'MAGIC', 'name' => 'Treasure', 'image' => $marketLogoMap['MAGIC'], 'filter' => 'Metaverse'],
            ['symbol' => 'NEAR', 'name' => 'NEAR Protocol', 'image' => $marketLogoMap['NEAR'], 'filter' => 'Crypto'],
            ['symbol' => 'SOL', 'name' => 'Solana', 'image' => $marketLogoMap['SOL'], 'filter' => 'Crypto'],
            ['symbol' => 'XRP', 'name' => 'XRP', 'image' => $marketLogoMap['XRP'], 'filter' => 'Pay'],
        ];
        $coinMarginedMarkets = [
            ['symbol' => 'BTC', 'name' => 'Bitcoin', 'image' => $marketLogoMap['BTC'], 'filters' => ['Payment', 'PoW']],
            ['symbol' => 'AAVE', 'name' => 'Aave', 'image' => $marketLogoMap['AAVE'], 'filters' => ['DeFi']],
            ['symbol' => 'ADA', 'name' => 'Cardano', 'image' => $marketLogoMap['ADA'], 'filters' => ['Layer 1']],
            ['symbol' => 'AVAX', 'name' => 'Avalanche', 'image' => $marketLogoMap['AVAX'], 'filters' => ['Layer 1']],
            ['symbol' => 'ETH', 'name' => 'Ethereum', 'image' => $marketLogoMap['ETH'], 'filters' => ['Layer 1', 'PoW']],
            ['symbol' => 'BNB', 'name' => 'BNB', 'image' => $marketLogoMap['BNB'], 'filters' => ['Layer 1', 'Payment']],
            ['symbol' => 'BCH', 'name' => 'Bitcoin Cash', 'image' => $marketLogoMap['BCH'], 'filters' => ['Payment', 'PoW']],
            ['symbol' => 'LINK', 'name' => 'Chainlink', 'image' => $marketLogoMap['LINK'], 'filters' => ['DeFi']],
            ['symbol' => 'LTC', 'name' => 'Litecoin', 'image' => $marketLogoMap['LTC'], 'filters' => ['Payment', 'PoW']],
            ['symbol' => 'FIL', 'name' => 'Filecoin', 'image' => $marketLogoMap['FIL'], 'filters' => ['Storage']],
        ];
    @endphp

    <main class="min-h-screen bg-slate-50 px-4 pb-8 sm:px-6" data-active-tab="{{ $activeTab }}">
        <div class="mx-auto w-full max-w-3xl">
            <header class="sticky top-0 z-20 -mx-4 bg-slate-50/95 pt-2 backdrop-blur sm:-mx-6 sm:px-6">
                <div role="search" class="flex h-12 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 text-slate-400 shadow-sm transition focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100/70">
                    <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" stroke-width="1.8"></circle>
                        <path d="m16 16 4 4" stroke-width="1.8" stroke-linecap="round"></path>
                    </svg>
                    <input id="market-search" type="search" aria-label="Search coin pair and trend" placeholder="Search coin pair and trend" class="w-full border-0 bg-transparent p-0 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0" autocomplete="off" data-market-search>
                </div>

                <nav class="mt-4 flex gap-3 overflow-x-auto border-b border-slate-200" style="scrollbar-width: none;" aria-label="Market categories" role="tablist">
                    @foreach (['', 'Favorites', 'Crypto', 'TradFi', 'Alpha', ''] as $category)
                        <button type="button" role="tab" aria-selected="{{ $category === 'Favorites' ? 'true' : 'false' }}" aria-controls="market-pairs-panel" data-market-tab="{{ $category }}" class="relative flex min-h-12 shrink-0 appearance-none items-center whitespace-nowrap !border-0 !bg-transparent !shadow-none px-1 pb-3 pt-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 {{ $category === 'Favorites' ? 'font-semibold text-slate-900' : 'text-slate-500 hover:text-slate-900' }}">
                            {{ $category }}
                            <span data-tab-indicator class="absolute bottom-0 h-[3px] w-8 rounded-full bg-blue-600 {{ $category === 'Favorites' ? '' : 'hidden' }}" style="left: 50%; transform: translateX(-50%);"></span>
                        </button>
                    @endforeach
                </nav>
            </header>

            <section id="market-pairs-panel" class="-mx-4 bg-[#F8FAFC] pt-2 pb-20" aria-label="Market pairs">
                <div id="favoritesView" data-market-view="Favorites">
                    <div id="favoritesGrid" class="grid grid-cols-2 gap-2.5 bg-[#F8FAFC] p-3" data-market-grid>
                    @foreach ($marketAssets as $asset)
                        <article class="relative flex min-h-[50px] cursor-pointer items-center justify-between gap-2 rounded-lg border p-2.5 shadow-sm transition-all hover:shadow-md {{ $asset['favorite'] ? 'border-blue-400/60 bg-blue-50/10' : 'border-slate-200/60 bg-white' }}" data-market-card data-symbol="{{ strtolower($asset['symbol']) }}" data-category="{{ $asset['category'] }}" data-favorite="{{ $asset['favorite'] ? 'true' : 'false' }}">
                            <div class="min-w-0 pr-5">
                                <div class="flex items-center whitespace-nowrap">
                                    <span class="relative mr-1 flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-[9px] font-bold text-blue-600" aria-hidden="true">
                                        <span data-coin-fallback>{{ substr($asset['symbol'], 0, 1) }}</span>
                                        <img src="{{ $marketLogoMap[$asset['symbol']] ?? '' }}" alt="" class="absolute inset-0 h-full w-full rounded-full bg-white object-contain" loading="lazy" data-coin-image>
                                    </span>
                                    <h2 class="whitespace-nowrap text-xs font-bold tracking-tight text-slate-900">{{ $asset['symbol'] }}<span class="ml-0.5 whitespace-nowrap text-[10px] font-normal text-slate-400">/USDT</span></h2>
                                </div>
                                <span class="mt-2 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold {{ $asset['positive'] ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600' }}">{{ $asset['change'] }}</span>
                            </div>
                            <button type="button" class="fav-star absolute right-2.5 top-2.5 flex h-4 w-4 shrink-0 items-center justify-center !border !border-solid rounded-full text-[9px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 {{ $asset['favorite'] ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-transparent text-transparent' }}" data-market-favorite aria-label="{{ $asset['favorite'] ? 'Remove' : 'Add' }} {{ $asset['symbol'] }} {{ $asset['favorite'] ? 'from' : 'to' }} favorites" aria-pressed="{{ $asset['favorite'] ? 'true' : 'false' }}">
                                <svg class="h-2.5 w-2.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                    <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </article>
                    @endforeach
                    </div>
                    <p class="hidden py-12 text-center text-sm text-slate-400" data-market-empty>No pairs found.</p>
                    <div class="sticky z-30 -mx-4 mt-4 flex flex-col items-center bg-[#F8FAFC]/95 px-4 pb-3 pt-3 backdrop-blur" style="bottom: calc(4.5rem + env(safe-area-inset-bottom));">
                        <button id="addFavoritesBtn" type="button" class="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-add-favorites>
                            Add Favorites
                        </button>
                        <button id="addOtherPairsBtn" type="button" class="mt-2 w-full cursor-pointer rounded !border-0 !bg-transparent px-4 py-1 text-center text-[11px] font-medium text-blue-600 transition-colors hover:text-blue-700" data-add-pairs>Add Other Pairs</button>
                    </div>
                </div> 

                <div id="cryptoViewContainer" class="hidden min-h-screen bg-white px-3 pb-24 pt-3" data-market-view="Crypto">
                    <div class="mb-3 flex gap-5 overflow-x-auto border-b border-slate-100 pb-1 text-sm font-bold text-slate-400" role="tablist" aria-label="Crypto market types" style="scrollbar-width: none;">
                        @foreach (['Spot', 'USDⓈ-M', 'COIN-M', 'Options'] as $type)
                            <button type="button" class="relative shrink-0 whitespace-nowrap !border-0 !bg-transparent px-0 pb-2 text-xs font-bold md:text-sm {{ $type === 'Spot' ? 'text-slate-900' : 'text-slate-400' }}" data-crypto-market-type="{{ $type }}" aria-selected="{{ $type === 'Spot' ? 'true' : 'false' }}">
                                {{ $type }}
                                <span class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600 {{ $type === 'Spot' ? '' : 'hidden' }}" data-crypto-type-indicator></span>
                            </button>
                        @endforeach
                    </div>

                    <div id="spotMarketView" data-crypto-subview="Spot">
                    <div class="mb-2 flex items-center gap-2">
                        <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="Crypto filters">
                            @foreach (['All', 'bStocks', 'tCommodities', 'Solana'] as $filter)
                                <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 font-medium {{ $filter === 'All' ? 'bg-slate-100 font-semibold text-slate-900' : 'text-slate-500' }}" data-crypto-filter="{{ $filter }}" aria-pressed="{{ $filter === 'All' ? 'true' : 'false' }}">{{ $filter }}</button>
                            @endforeach
                        </div>
                        <button type="button" class="flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-slate-700" aria-label="Quote asset: USDT">USDT <span aria-hidden="true">▾</span></button>
                        <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100" data-crypto-density aria-label="Toggle list density" aria-pressed="false">
                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3 4h3v3H3V4Zm5 0h9v2H8V4ZM3 9h3v3H3V9Zm5 .5h9v2H8v-2ZM3 14h3v3H3v-3Zm5 .5h9v2H8v-2Z" /></svg>
                        </button>
                    </div>

                    <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                        <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                        <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                        <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                    </div>
                    <div id="cryptoRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                    <div id="bStocksRowsList" class="hidden divide-y divide-slate-50" aria-live="polite"></div>
                    <p class="hidden py-10 text-center text-sm text-slate-400" data-crypto-empty>No crypto markets found.</p>
                    <p class="hidden py-10 text-center text-sm text-slate-400" data-bstocks-empty>No tokenized stocks found.</p>
                    </div>

                    <div id="usdMarginedView" class="hidden" data-crypto-subview="USDⓈ-M">
                        <div class="mb-2 flex items-center gap-2">
                            <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="USDⓈ-M market filters">
                                @foreach (['All', 'New', 'Crypto', 'DeFi', 'Metaverse', 'Pay'] as $filter)
                                    <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 font-medium {{ $filter === 'All' ? 'bg-slate-100 font-semibold text-slate-900' : 'text-slate-500' }}" data-futures-filter="{{ $filter }}" aria-pressed="{{ $filter === 'All' ? 'true' : 'false' }}">{{ $filter }}</button>
                                @endforeach
                            </div>
                            <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100" data-futures-density aria-label="Toggle futures list density" aria-pressed="false">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3 4h3v3H3V4Zm5 0h9v2H8V4ZM3 9h3v3H3V9Zm5 .5h9v2H8v-2ZM3 14h3v3H3v-3Zm5 .5h9v2H8v-2Z" /></svg>
                            </button>
                        </div>

                        <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                            <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                            <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                            <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                        </div>
                        <div id="usdMarginedRows" class="divide-y divide-slate-50" aria-live="polite"></div>
                        <p class="hidden py-10 text-center text-sm text-slate-400" data-futures-empty>No USDⓈ-M markets found.</p>
                    </div>

                    <div id="coinMarginedView" class="hidden" data-crypto-subview="COIN-M">
                        <div class="mb-2 flex items-center gap-2">
                            <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="COIN-M market filters">
                                @foreach (['All', 'DeFi', 'Payment', 'PoW', 'Storage', 'Layer 1'] as $filter)
                                    <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 font-medium {{ $filter === 'All' ? 'bg-slate-100 font-semibold text-slate-900' : 'text-slate-500' }}" data-coinm-filter="{{ $filter }}" aria-pressed="{{ $filter === 'All' ? 'true' : 'false' }}">{{ $filter }}</button>
                                @endforeach
                            </div>
                            <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100" data-coinm-density aria-label="Toggle COIN-M list density" aria-pressed="false">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3 4h3v3H3V4Zm5 0h9v2H8V4ZM3 9h3v3H3V9Zm5 .5h9v2H8v-2ZM3 14h3v3H3v-3Zm5 .5h9v2H8v-2Z" /></svg>
                            </button>
                        </div>

                        <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                            <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                            <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                            <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                        </div>
                        <div id="coinMarginedRows" class="divide-y divide-slate-50" aria-live="polite"></div>
                        <p class="hidden py-10 text-center text-sm text-slate-400" data-coinm-empty>No COIN-M markets found.</p>
                    </div>

                    <div id="optionsMarketView" class="hidden" data-crypto-subview="Options">
                        <div class="mb-2 flex justify-end">
                            <button type="button" class="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100" aria-label="Filter options by underlying">All <span aria-hidden="true">▾</span></button>
                        </div>
                        <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                            <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                            <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                            <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                        </div>
                        <div id="optionsRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                        <p class="hidden py-10 text-center text-sm text-slate-400" data-options-empty>No options markets found.</p>
                    </div>

                    <div class="hidden py-12 text-center text-sm text-slate-400" data-crypto-type-empty>This market type is not available yet.</div>
                    <script type="application/json" id="crypto-market-data">@json($cryptoMarkets)</script>
                    <script type="application/json" id="usd-m-market-data">@json($usdMarginedMarkets)</script>
                    <script type="application/json" id="coin-m-market-data">@json($coinMarginedMarkets)</script>
                </div>

                <div class="hidden min-h-screen bg-white px-3 pb-24 pt-3" data-market-view="TradFi">
                    <div class="mb-3 flex gap-5 overflow-x-auto border-b border-slate-100 pb-1 text-sm font-bold text-slate-400" role="tablist" aria-label="TradFi market types" style="scrollbar-width: none;">
                        @foreach (['Stocks', 'Spot', 'Futures'] as $type)
                            <button type="button" class="relative shrink-0 whitespace-nowrap !border-0 !bg-transparent px-0 pb-2 text-xs md:text-sm {{ $type === 'Stocks' ? 'font-bold text-slate-900' : 'font-medium text-slate-400' }}" data-tradfi-subtab="{{ $type }}" aria-selected="{{ $type === 'Stocks' ? 'true' : 'false' }}">
                                {{ $type }}
                                <span class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600 {{ $type === 'Stocks' ? '' : 'hidden' }}" data-tradfi-subtab-indicator></span>
                            </button>
                        @endforeach
                    </div>

                    <div data-tradfi-content="Stocks">
                    <div class="mb-2 flex items-center gap-2">
                        <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="TradFi filters">
                            @foreach (['US Stocks', 'ETFs'] as $filter)
                                <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 font-medium {{ $filter === 'US Stocks' ? 'bg-slate-100 font-bold text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-500' }}" data-tradfi-filter="{{ $filter }}" aria-pressed="{{ $filter === 'US Stocks' ? 'true' : 'false' }}">{{ $filter }}</button>
                            @endforeach
                        </div>
                    </div>

                    <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                        <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                        <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                        <span class="w-3/12 text-right">Change(%) <span aria-hidden="true">⬍</span></span>
                    </div>

                    <div id="tradFiRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                    <p class="hidden py-10 text-center text-sm text-slate-400" data-tradfi-empty>No TradFi markets found.</p>
                    </div>

                    <div class="hidden" data-tradfi-content="Spot">
                        <div class="mb-2 flex items-center gap-2">
                            <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="TradFi Spot filters">
                                @foreach (['bStocks', 'tCommodities'] as $filter)
                                    <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 {{ $filter === 'bStocks' ? 'bg-slate-100 font-bold text-slate-900 dark:bg-slate-800 dark:text-white' : 'font-medium text-slate-500' }}" data-tradfi-spot-filter="{{ $filter }}" aria-pressed="{{ $filter === 'bStocks' ? 'true' : 'false' }}">{{ $filter }}</button>
                                @endforeach
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                            <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                            <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                            <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                        </div>

                        <div id="tradFiSpotRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                        <p class="hidden py-10 text-center text-sm text-slate-400" data-tradfi-spot-empty>No TradFi Spot markets found.</p>
                    </div>

                    <div class="hidden" data-tradfi-content="Futures">
                        <div class="mb-2 flex items-center gap-2">
                            <div class="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" aria-label="TradFi Futures categories">
                                @foreach (['All', 'Commodities', 'ETF', 'Stocks', 'Pre-IPO', 'FX'] as $filter)
                                    <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 {{ $filter === 'All' ? 'bg-slate-100 font-bold text-slate-900 dark:bg-slate-800 dark:text-white' : 'font-medium text-slate-500' }}" data-tradfi-futures-filter="{{ $filter }}" aria-pressed="{{ $filter === 'All' ? 'true' : 'false' }}">{{ $filter }}</button>
                                @endforeach
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                            <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                            <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                            <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                        </div>

                        <div id="tradFiFuturesRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                        <p class="hidden py-10 text-center text-sm text-slate-400" data-tradfi-futures-empty>No TradFi Futures markets found.</p>
                    </div>
                </div>

                <div class="hidden min-h-screen bg-white px-3 pb-24 pt-3" data-market-view="Alpha">
                    <div class="mb-3 flex min-w-0 gap-1.5 overflow-x-auto pb-2 text-xs" style="scrollbar-width: none;" role="group" aria-label="Alpha market filters">
                        @foreach (['All', 'Point+', 'Tokenized Securities', 'BSC', 'Robinhood'] as $filter)
                            <button type="button" class="shrink-0 whitespace-nowrap rounded-lg px-3 py-1 {{ $filter === 'All' ? 'bg-slate-100 font-bold text-slate-900 dark:bg-slate-800 dark:text-white' : 'bg-transparent font-normal text-slate-400' }}" data-alpha-filter="{{ $filter }}" aria-pressed="{{ $filter === 'All' ? 'true' : 'false' }}">{{ $filter }}</button>
                        @endforeach
                    </div>

                    <div class="flex items-center justify-between border-b border-slate-100 py-2 text-[11px] font-semibold text-slate-400">
                        <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                        <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                        <span class="w-3/12 text-right">24h Chg% <span aria-hidden="true">⬍</span></span>
                    </div>

                    <div id="alphaRowsList" class="divide-y divide-slate-50" aria-live="polite"></div>
                    <p class="hidden py-10 text-center text-sm text-slate-400" data-alpha-empty>No Alpha markets found.</p>
                </div>
            </section>
        </div>
    </main>

    <script src="{{ asset('assets/markets.js') }}?v=options-fallback-1"></script>
@endsection

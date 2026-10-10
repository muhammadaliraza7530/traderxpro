@extends($activeTemplate.'layouts.master')
@section('content')

                <div data-v-923868a9="" data-v-f5703ed9="" class="navigation" bis_skin_checked="1"
                    style="display: none;">
                    <div data-v-923868a9="" class="navigation-content" bis_skin_checked="1">
                        <div data-v-923868a9="" class="h-full flex cursor-pointer items-center justify-between"
                            bis_skin_checked="1">
                            <div data-v-923868a9="" class="icon i-material-symbols-arrow-back-ios-new-rounded"
                                bis_skin_checked="1"></div>
                            <div data-v-923868a9="" bis_skin_checked="1"></div>
                            <div data-v-923868a9="" id="navigation-right" bis_skin_checked="1">
                                <span data-v-923868a9="" class="opacity-0"> h </span></div>
                        </div>
                    </div>
                </div>
                <div data-v-6cee72ec="" data-v-f5703ed9="" class="index-wrap c-1" bis_skin_checked="1">
                    @php
                        $totalBalance = $user->deposit_wallet + $user->interest_wallet;
                        $earningsShare = $totalBalance > 0 ? ($user->interest_wallet / $totalBalance) * 100 : 0;
                    @endphp
                    <div class="px-4 pt-4 pb-2 space-y-4">
                        <div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex items-center justify-between">
                            <div>
                                <div class="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <span>Total Balance</span>
                                    <button type="button" class="text-gray-400 hover:text-gray-600"
                                        data-balance-toggle aria-label="Hide balance" aria-pressed="false">
                                        <svg data-eye-visible class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg data-eye-hidden class="hidden w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18M10.584 10.587a2 2 0 002.829 2.829" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.88 5.09A10.94 10.94 0 0112 4.9c4.48 0 8.27 2.94 9.54 7a10.97 10.97 0 01-4.12 5.37M6.61 6.61A11.03 11.03 0 002.46 12c1.27 4.06 5.06 7 9.54 7 1.22 0 2.39-.2 3.47-.57" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-3xl font-extrabold text-gray-900 mt-1 tracking-tight" data-balance-value>
                                    {{ $general->cur_sym }} {{ getAmount($totalBalance) }}
                                </div>
                                <div class="text-emerald-500 text-sm font-semibold mt-1 flex items-center gap-1">
                                    <span>{{ number_format($earningsShare, 2) }}%</span>
                                    <span class="text-gray-400 font-normal">(wallet share)</span>
                                </div>
                            </div>
                            <a href="{{ route('user.deposit.index') }}"
                                class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-2xl shadow-lg shadow-blue-500/25 flex items-center gap-2 text-sm transition-all active:scale-95">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Add Funds</span>
                            </a>
                        </div>

                        <div class="promo-carousel" data-promo-carousel aria-label="Featured services">
                            <div class="trade-promo" data-promo-slide data-promo-theme="trading" aria-hidden="false">
                            <div class="trade-promo__content">
                                <h1 class="trade-promo__title">Trade Smarter<br><span>Grow Faster</span></h1>
                                <p class="trade-promo__subtitle">Secure. Fast. Reliable.</p>
                                <a href="{{ route('plan') }}" class="trade-promo__button">
                                    <span>Start Trading</span>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                            <div class="trade-promo__art" role="img" aria-label="Mobile trading app surrounded by Bitcoin, Ethereum, and Tether coins">
                                <div class="trade-promo__orbit"></div>
                                <div class="trade-promo__coin trade-promo__coin--bitcoin">₿</div>
                                <div class="trade-promo__coin trade-promo__coin--tether">₮</div>
                                <div class="trade-promo__coin trade-promo__coin--ethereum">Ξ</div>
                                <div class="trade-promo__phone">N</div>
                            </div>
                            </div>

                            <div class="trade-promo" data-promo-slide data-promo-theme="staking" aria-hidden="true" hidden>
                                <div class="trade-promo__content">
                                    <h1 class="trade-promo__title">Stake Smartly<br><span>Earn Rewards</span></h1>
                                    <p class="trade-promo__subtitle">Put your crypto to work.</p>
                                    <a href="{{ route('user.staking.index') }}" class="trade-promo__button">
                                        <span>Explore Staking</span>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="trade-promo__art" role="img" aria-label="Staking rewards represented by a growing stack of crypto coins">
                                    <div class="trade-promo__orbit"></div>
                                    <div class="trade-promo__stake-coin trade-promo__stake-coin--back">S</div>
                                    <div class="trade-promo__stake-coin trade-promo__stake-coin--middle">S</div>
                                    <div class="trade-promo__stake-coin trade-promo__stake-coin--front">S</div>
                                    <div class="trade-promo__reward-mark">+</div>
                                </div>
                            </div>

                            <div class="trade-promo" data-promo-slide data-promo-theme="kyc" aria-hidden="true" hidden>
                                <div class="trade-promo__content">
                                    <h1 class="trade-promo__title">Verify Your Identity<br><span>Protect Your Account</span></h1>
                                    <p class="trade-promo__subtitle">Complete KYC in a few simple steps.</p>
                                    <a href="{{ route('user.kyc.form') }}" class="trade-promo__button">
                                        <span>Verify Now</span>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="trade-promo__art" role="img" aria-label="Identity document protected by a verified security shield">
                                    <div class="trade-promo__orbit"></div>
                                    <div class="trade-promo__document">
                                        <span class="trade-promo__document-avatar"></span>
                                        <span class="trade-promo__document-line"></span>
                                        <span class="trade-promo__document-line trade-promo__document-line--short"></span>
                                        <span class="trade-promo__document-line"></span>
                                    </div>
                                    <div class="trade-promo__shield" aria-hidden="true">
                                        <svg viewBox="0 0 48 48" fill="none">
                                            <path d="M24 4 40 10v12c0 10-6.8 17.8-16 22C14.8 39.8 8 32 8 22V10l16-6Z" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
                                            <path d="m16 24 5 5 11-12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="promo-carousel__dots" role="group" aria-label="Choose featured service">
                            <button class="promo-carousel__dot is-active" type="button" data-promo-dot="0" aria-label="Show trading promotion" aria-current="true"></button>
                            <button class="promo-carousel__dot" type="button" data-promo-dot="1" aria-label="Show staking promotion" aria-current="false"></button>
                            <button class="promo-carousel__dot" type="button" data-promo-dot="2" aria-label="Show identity verification promotion" aria-current="false"></button>
                        </div>
                    </div>
                    @push('script')
                        <script>
                            document.querySelector('[data-balance-toggle]')?.addEventListener('click', function () {
                                const amount = document.querySelector('[data-balance-value]');
                                const visibleIcon = this.querySelector('[data-eye-visible]');
                                const hiddenIcon = this.querySelector('[data-eye-hidden]');
                                const isHidden = this.getAttribute('aria-pressed') === 'true';

                                if (isHidden) {
                                    amount.textContent = amount.dataset.visibleValue;
                                    visibleIcon.classList.remove('hidden');
                                    hiddenIcon.classList.add('hidden');
                                    this.setAttribute('aria-label', 'Hide balance');
                                } else {
                                    amount.dataset.visibleValue = amount.textContent.trim();
                                    amount.textContent = '******';
                                    visibleIcon.classList.add('hidden');
                                    hiddenIcon.classList.remove('hidden');
                                    this.setAttribute('aria-label', 'Show balance');
                                }

                                this.setAttribute('aria-pressed', String(!isHidden));
                            });

                            const promoCarousel = document.querySelector('[data-promo-carousel]');
                            if (promoCarousel) {
                                const promoSlides = [...promoCarousel.querySelectorAll('[data-promo-slide]')];
                                const promoDots = [...document.querySelectorAll('[data-promo-dot]')];
                                let activePromo = 0;

                                function showPromo(index) {
                                    activePromo = index;
                                    promoSlides.forEach((slide, slideIndex) => {
                                        const isActive = slideIndex === activePromo;
                                        slide.hidden = !isActive;
                                        slide.setAttribute('aria-hidden', String(!isActive));
                                        promoDots[slideIndex].classList.toggle('is-active', isActive);
                                        promoDots[slideIndex].setAttribute('aria-current', String(isActive));
                                    });
                                }

                                promoDots.forEach((dot, index) => {
                                    dot.addEventListener('click', () => showPromo(index));
                                });

                                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                                    window.setInterval(() => showPromo((activePromo + 1) % promoSlides.length), 5000);
                                }
                            }
                        </script>
                    @endpush
                    <div data-v-6cee72ec="" class=":uno: swiper-container" bis_skin_checked="1" style="display: none;">
                        <div data-v-6cee72ec="" class="custom-swiper" bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="van-swipe" bis_skin_checked="1">
                          
                                <div  bis_skin_checked="1"
                                    >
                                    <div data-v-6cee72ec=""  bis_skin_checked="1"
                                        style="width: 390px; "><img data-v-6cee72ec="" class="awais"  src="{{asset ('core/03042324661/h/api.miairobot.com/upload/img/67652bf23f6c.webp')}}">
                                    </div>
                                    <div data-v-6cee72ec=""  bis_skin_checked="1"
                                        style="width: 394px;"><img data-v-6cee72ec="" class="awais"  src="{{asset ('core/03042324661/h/api.miairobot.com/upload/img/675fda76f79a.webp')}}">
                                    </div>
                                    <div data-v-6cee72ec="" c bis_skin_checked="1"
                                        style="width: 394px;"><img data-v-6cee72ec="" class="awais"  src="{{asset ('core/03042324661/h/api.miairobot.com/upload/img/675fda84c188.webp')}}">
                                    </div>
                                    <div data-v-6cee72ec=""  bis_skin_checked="1"
                                        style="width: 394px;"><img data-v-6cee72ec=""  class="awais"  src="{{asset ('core/03042324661/h/api.miairobot.com/upload/img/675fda91d519.webp')}}">
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
  <!-- Swiper JS 
  -->                  <script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("awais");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script>           
                    <div data-v-6cee72ec="" class="container-wrap" bis_skin_checked="1">
                        <!-- <div data-v-6cee72ec="" class="notice-info hidden" bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="volume-icon" bis_skin_checked="1"></div>
                            <div data-v-6cee72ec="" role="alert" class="van-notice-bar" bis_skin_checked="1">
                             <div  class="van-notice-bar__wrap" bis_skin_checked="1">
                                    <div class="van-notice-bar__content" bis_skin_checked="1"
                                        ><marquee>
                                
                                        📈 Daily income is stable, and VIP level income can reach up to 33%!
                                        🛡 Using blockchain technology, transactions are transparent and funds are safe
                                        and secure!
                                        👥 Invite friends to earn team rewards and share opportunities for wealth
                                        growth!
                                        ⚡ Supports TRC20, BEP20 and other multi-chain recharges, and deposits and
                                        withdrawals arrive quickly!
                                        📩 If you have any questions, please feel free to contact online customer
                                        service, we will serve you wholeheartedly!
                                        💡 Join MIAIRobot now and explore new possibilities for wealth growth!</marquee></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div data-v-6cee72ec="" class="tools-part hidden" bis_skin_checked="1"><a data-v-6cee72ec=""
                                href="{{route ('user.deposit.index')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Recharge</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('user.withdraw')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Withdraw</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('help')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Help</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('user.referrals')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Team</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('active')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Activity</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('invite')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Invite Friends</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('agent')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">Agent Cooperation</div>
                                </li>
                            </a><a data-v-6cee72ec="" href="{{route ('news')}}" class="part">
                                <li data-v-6cee72ec="" class="wrap">
                                    <div data-v-6cee72ec="" class="img-wrap" bis_skin_checked="1"><img data-v-6cee72ec="" src="data:image/png;base64,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">
                                    </div>
                                    <div data-v-6cee72ec="" class="label" bis_skin_checked="1">News</div>
                                </li>
                            </a></div>
                        <div data-v-6cee72ec="" class="asserts-part hidden" bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="assert" bis_skin_checked="1">
                                <div data-v-6cee72ec="" class="head" bis_skin_checked="1">
                                    <em data-v-6cee72ec="">Total Assets</em></div>
                                <div data-v-6cee72ec="" class="body" bis_skin_checked="1">
                                    <em data-v-6cee72ec="" class="font-jmono">{{ getAmount($user->interest_wallet) }}</em><span data-v-6cee72ec="">USDT</span>
                                </div>
                                <div data-v-6cee72ec="" class="foot" bis_skin_checked="1"> ≈ {{ $general->cur_sym }}{{ getAmount($user->interest_wallet) }}</div>
                            </div>
                            <div data-v-6cee72ec="" class="assert" bis_skin_checked="1">
                                <div data-v-6cee72ec="" class="head" bis_skin_checked="1">
                                    <em data-v-6cee72ec="">Quantitative Account</em></div>
                                <div data-v-6cee72ec="" class="body" bis_skin_checked="1">
                                    <em data-v-6cee72ec="" class="font-jmono">{{ getAmount($user->deposit_wallet) }}</em><span data-v-6cee72ec="">USDT</span>
                                </div>
                                <div data-v-6cee72ec="" class="foot" bis_skin_checked="1"> ≈ {{ $general->cur_sym }} {{ getAmount($user->deposit_wallet) }}</div>
                            </div>
                        </div> -->
                        <!---->
                        <div data-v-6cee72ec="" class="mt-16px" bis_skin_checked="1">
                            <!---->
                        </div>
                        <!---->
                        @php
                            $marketPairs = [
                                [
                                    'symbol' => 'BNB',
                                    'name' => 'BNB',
                                    'leverage' => '10x',
                                    'volume' => '74.91M',
                                    'image' => 'https://assets.coincap.io/assets/icons/bnb@2x.png',
                                    'price' => '$741.06',
                                    'localPrice' => 'Rs205,214.33',
                                    'change' => '+2.94%',
                                ],
                                [
                                    'symbol' => 'BTC',
                                    'name' => 'Bitcoin',
                                    'leverage' => '5x',
                                    'volume' => '1.08B',
                                    'image' => 'https://assets.coincap.io/assets/icons/btc@2x.png',
                                    'price' => '$62,822.40',
                                    'localPrice' => 'Rs17,436,530.00',
                                    'change' => '+1.82%',
                                ],
                                [
                                    'symbol' => 'ETH',
                                    'name' => 'Ethereum',
                                    'leverage' => '5x',
                                    'volume' => '842.6M',
                                    'image' => 'https://assets.coincap.io/assets/icons/eth@2x.png',
                                    'price' => '$3,420.20',
                                    'localPrice' => 'Rs949,095.00',
                                    'change' => '-0.65%',
                                ],
                                [
                                    'symbol' => 'SOL',
                                    'name' => 'Solana',
                                    'leverage' => '20x',
                                    'volume' => '438.12M',
                                    'image' => 'https://assets.coincap.io/assets/icons/sol@2x.png',
                                    'price' => '$145.20',
                                    'localPrice' => 'Rs40,250.00',
                                    'change' => '+3.10%',
                                ],
                                [
                                    'symbol' => 'ZEC',
                                    'name' => 'Zcash',
                                    'leverage' => '10x',
                                    'volume' => '18.46M',
                                    'image' => 'https://assets.coincap.io/assets/icons/zec@2x.png',
                                    'price' => '$46.70',
                                    'localPrice' => 'Rs12,940.00',
                                    'change' => '+2.16%',
                                ],
                                [
                                    'symbol' => 'SYN',
                                    'name' => 'SynFutures',
                                    'leverage' => '5x',
                                    'volume' => '12.25M',
                                    'image' => asset('core/public/images/coins/syn.svg'),
                                    'price' => '$1.54',
                                    'localPrice' => 'Rs427.00',
                                    'change' => '+4.28%',
                                ],
                                [
                                    'symbol' => 'XRP',
                                    'name' => 'XRP',
                                    'leverage' => '10x',
                                    'volume' => '211.94M',
                                    'image' => 'https://assets.coincap.io/assets/icons/xrp@2x.png',
                                    'price' => '$0.62',
                                    'localPrice' => 'Rs172.00',
                                    'change' => '-1.24%',
                                ],
                            ];
                        @endphp
                        <section id="markets" class="mt-5">
                            <div class="rounded-3xl bg-white ">
                                <div class="mb-4 flex items-center justify-between">
                                    <h2 class="text-base font-bold text-slate-900">Market Trends</h2>
                                    <a href="#market-pairs" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700">
                                        View All →
                                    </a>
                                </div>

                                <div id="market-pairs" class="w-full min-w-0 overflow-hidden rounded-2xl">
                                    <div class="flex w-full items-center justify-between border-b border-slate-100 py-2 text-[10px] font-semibold text-slate-400">
                                        <span class="w-5/12">Name / Vol <span aria-hidden="true">⬍</span></span>
                                        <span class="w-4/12 text-right">Last Price <span aria-hidden="true">⬍</span></span>
                                        <span class="w-3/12 text-right">24h Chg <span aria-hidden="true">⬍</span></span>
                                    </div>
                                    <div class="w-full min-w-0 divide-y divide-slate-100">
                                        @foreach ($marketPairs as $pair)
                                            @php
                                                $changeValue = (float) str_replace('%', '', $pair['change']);
                                                $isPositive = $changeValue > 0;
                                            @endphp
                                            <article class="flex w-full min-w-0 items-center justify-between py-3 transition-colors hover:bg-slate-50/80">
                                                <div class="flex w-5/12 min-w-0 items-center gap-2">
                                                    <img src="{{ $pair['image'] }}" alt="{{ $pair['symbol'] }} logo" class="h-7 w-7 shrink-0 rounded-full object-contain" loading="lazy" />
                                                    <div class="min-w-0">
                                                        <div class="flex min-w-0 items-center gap-0.5 whitespace-nowrap leading-tight">
                                                            <span class="text-xs font-bold text-slate-900">{{ $pair['symbol'] }}</span>
                                                            <span class="text-[10px] text-slate-400">/USDT</span>
                                                            <span class="ml-0.5 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">{{ $pair['leverage'] }}</span>
                                                        </div>
                                                        <div class="mt-0.5 truncate text-[10px] text-slate-400">{{ $pair['name'] }} <span class="ml-1">{{ $pair['volume'] }}</span></div>
                                                    </div>
                                                </div>
                                                <div class="w-4/12 min-w-0 text-right">
                                                    <div class="truncate text-xs font-bold leading-tight text-slate-900">{{ $pair['price'] }}</div>
                                                    <div class="mt-0.5 truncate text-[10px] text-slate-400">{{ $pair['localPrice'] }}</div>
                                                </div>
                                                <div class="w-3/12 text-right">
                                                    <span class="inline-block w-full max-w-[76px] whitespace-nowrap rounded-lg px-1.5 py-1.5 text-center text-[10px] font-bold text-white {{ $isPositive ? 'bg-[#0ECB81]' : 'bg-[#F6465D]' }}">{{ $pair['change'] }}</span>
                                                </div>
                                            </article>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- <h3 data-v-6cee72ec="" class="base-section-title c-1 mt-16px mt-16px">
                            <span data-v-6cee72ec="">Help Center</span></h3> -->
                        <!-- <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="bg-$bg-card p-$mg rd-$card-radius" bis_skin_checked="1">
                                <div class="flex items-center justify-between py-12px bg-$bg-second mb-10px rd-$card-radius"
                                    bis_skin_checked="1">
                                    <p class="ml-2 flex-1 truncate text-xs">MIAIRobot: AI Intelligence-driven
                                        Cryptocurrency Arbitrage Platform</p>
                                </div>
                                <div class="flex items-center justify-between py-12px bg-$bg-second mb-10px rd-$card-radius"
                                    bis_skin_checked="1">
                                    <p class="ml-2 flex-1 truncate text-xs">Frequently Asked Questions (FAQ)</p>
                                </div>
                            </div>
                        </div> -->
                        <!---->
                   




                        <!-- <h3 data-v-6cee72ec="" class="base-section-title c-1 mt-16px mt-16px hidden"> -->
                            <!-- <span data-v-6cee72ec="">Real-Time Quotes</span></h3> -->
                        <div data-v-6cee72ec="" class="mt-10px bg-$bg-card rd-$card-radius p-$mg hidden" bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="grid grid-cols-4 gap-5px px-$mg" bis_skin_checked="1">
                                <div data-v-6cee72ec=""
                                    class="text-$text-gray rd-$radius w-full py-8px text-center bg-#F8F8F8! text-$btn-text!"
                                    bis_skin_checked="1"> BINANCE </div>
                                <div data-v-6cee72ec="" class="text-$text-gray rd-$radius w-full py-8px text-center"
                                    bis_skin_checked="1"> OKX </div>
                                <div data-v-6cee72ec="" class="text-$text-gray rd-$radius w-full py-8px text-center"
                                    bis_skin_checked="1"> HUOBI </div>
                                <div data-v-6cee72ec="" class="text-$text-gray rd-$radius w-full py-8px text-center"
                                    bis_skin_checked="1"> COINBASE </div>
                            </div>
                            <div data-v-6cee72ec="" class="mt-10px grid grid-cols-2 gap-5px" bis_skin_checked="1">
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/1.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">BTC</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">97796.7</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1"> -0.68% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/1027.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">ETH</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">2780.8</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 2.95% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/1839.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">BNB</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">572.56</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1"> -0.05% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/52.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">XRP</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">2.5277</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 0.35% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/2010.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">ADA</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">0.7541</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 3.3% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/5426.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">SOL</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">205.04</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 0.34% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/74.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">DOGE</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">0.26627</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 1.25% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/6636.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">DOT</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">4.746</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 1.32% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/2.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">LTC</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">103.23</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 3.71% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/1958.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">TRX</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">0.2262</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 4.1% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/28192.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">SHIB</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">0.00001628</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 6.89% </div>
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="coin-data-card" bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="flex items-center w-full" bis_skin_checked="1"><img data-v-6cee72ec="" class="mr-10px w-44px h-44px" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/coins/64x64/5805.png')}}" alt="">
                                        <div data-v-6cee72ec="" class="flex-1" bis_skin_checked="1">
                                            <span data-v-6cee72ec="" class="text-base font-bold">AVAX</span><span data-v-6cee72ec="" class="ml-1 text-xs text-$text-gray">/USDT</span>
                                        </div>
                                    </div>
                                    <div data-v-6cee72ec="" class="mt-10px text-left" bis_skin_checked="1">
                                        <div data-v-6cee72ec="" class="font-bold" bis_skin_checked="1">26.92</div>
                                        <div data-v-6cee72ec="" class="mt-10px" bis_skin_checked="1">+ 4.38% </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                              
                        <!-- <div data-v-6cee72ec=""
                            class=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-19px"
                            bis_skin_checked="1">
                            <div data-v-5a2c3ff1="" data-v-6cee72ec="" class="mt-0! after:hidden" bis_skin_checked="1"
                                style="direction: ltr;">
                                <div data-v-5a2c3ff1=""
                                    class=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4 mt-0! after:hidden"
                                    bis_skin_checked="1">
                                  
                                    <div data-v-5a2c3ff1="" class="rich-text text-base" bis_skin_checked="1">
                                        <p>The purpose of MIAIRobot is to provide global users with an intelligent, safe
                                            and efficient quantitative trading platform, while establishing a mutually
                                            beneficial partnership. Every income comes from price fluctuations in the
                                            global cryptocurrency market. Through advanced artificial intelligence
                                            technology and precise quantitative strategies, complex market fluctuations
                                            are transformed into user wealth growth. </p>
                                        <p> </p>
                                        <p>The two core characteristics of blockchain, non-tamperability and
                                            decentralization, ensure the openness and transparency of the global
                                            cryptocurrency market, effectively prevent capital from manipulating market
                                            trends, and provide investors with safer financial protection. </p>
                                        <p> </p>
                                        <p>MIAIRobot helps users easily achieve stable daily income growth through an
                                            intelligent trading system. At the same time, users also create equivalent
                                            benefits for the platform in each transaction, forming a two-way win-win
                                            cooperation model. </p>
                                        <p> </p>
                                        <p>We are committed to promoting the healthy development of the global
                                            blockchain field through technological innovation and user support, so that
                                            more people can master the wealth secrets of quantitative investment through
                                            the MIAIRobot intelligent trading system. </p>
                                        <p> </p>
                                        <p>Let us act together, join MIAIRobot, contribute to the stable development of
                                            the global cryptocurrency investment market, and open a new chapter of
                                            intelligent investment! </p>
                                    </div>
                                </div>
                            </div>
                            <div data-v-6cee72ec="" class="grid mt-12px grid-cols-2 gap-2 text-center"
                                bis_skin_checked="1">
                                <div data-v-6cee72ec="" class="w-full bg-$bg-second p-10px rd-$card-radius"
                                    bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="opacity-70" bis_skin_checked="1">Safe Operation</div>
                                    <div data-v-6cee72ec="" class="text-$primary text-18px" bis_skin_checked="1">1161Day
                                    </div>
                                </div>
                                <div data-v-6cee72ec="" class="w-full bg-$bg-second p-10px rd-$card-radius"
                                    bis_skin_checked="1">
                                    <div data-v-6cee72ec="" class="opacity-70" bis_skin_checked="1">Cumulative Income
                                    </div>
                                    <div data-v-6cee72ec="" class="text-$primary text-18px" bis_skin_checked="1">
                                        2303231363USDT</div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <h3 data-v-6cee72ec="" class="base-section-title c-1 mt-16px mt-16px">
                            <span data-v-6cee72ec="">Core Cooperative Financial Institutions</span></h3>
                        <div data-v-6cee72ec=""
                            class=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-10px"
                            bis_skin_checked="1">
                            <div data-v-6cee72ec="" class="grid grid-cols-3 gap-col-2 mt-20px" bis_skin_checked="1">
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/270.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Binance </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/24.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Kraken </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/311.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> KuCoin </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/89.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Coinbase
                                        Exchange </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/294.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> OKX </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/70.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Bitstamp </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/37.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Bitfinex </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/521.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Bybit </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/302.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Gate.io </div>
                                </div>
                                <div data-v-6cee72ec=""
                                    class="flex mb-8px rounded-8px px-8px py-6px items-center bg-$bg-second"
                                    bis_skin_checked="1"><img data-v-6cee72ec="" class="h-30px w-30px rounded-md" src="{{asset ('core/03042324661/h/s2.coinmarketcap.com/static/img/exchanges/64x64/513.png')}}" alt="">
                                    <div data-v-6cee72ec="" class="text-xs ml-4px" bis_skin_checked="1"> Bitget </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div data-v-f5703ed9="" class="tab-bar-wrap tab-bar-wrap-44 fixed bottom-0 z-2" bis_skin_checked="1"
                    style="--5a5a569c: 20%;">
                    <div class="tab-bar" bis_skin_checked="1">
                        <div class="tab-item" bis_skin_checked="1" style="width: 20%;">
                          
                            <div data-v-5e8eeef3=""  onclick="window.location.href='{{route ('user.home')}}'" id="tabItem" class="tab-item-inner active" bis_skin_checked="1">
                                <div data-v-5e8eeef3="" class="tab-item-icon i-material-symbols:other-houses c-$primary"
                                    bis_skin_checked="1"></div>
                                <div data-v-5e8eeef3="" class="tab-item-label" bis_skin_checked="1">Home</div>
                            </div>
                            <!---->
                            <!---->
                        </div>
                        <div class="tab-item" bis_skin_checked="1" style="width: 20%;">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <div data-v-5e8eeef3=""   onclick="window.location.href='{{route ('plan')}}'"  id="tabItem" class="tab-item-inner" bis_skin_checked="1">
                                <div data-v-5e8eeef3=""
                                    class="tab-item-icon i-material-symbols:broadcast-on-home c-$text-gray"
                                    bis_skin_checked="1"></div>
                                <div data-v-5e8eeef3="" class="tab-item-label" bis_skin_checked="1">Quantify</div>
                            </div>
                            <!---->
                            <!---->
                        </div>
                        <div class="tab-item" bis_skin_checked="1" style="width: 20%;">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <div data-v-5e8eeef3="" onclick="window.location.href='{{route ('user.invest.log')}}'"  id="tabItem" class="tab-item-inner" bis_skin_checked="1">
                                <div data-v-5e8eeef3=""
                                    class="tab-item-icon i-ic:outline-stacked-line-chart c-$text-gray"
                                    bis_skin_checked="1"></div>
                                <div data-v-5e8eeef3="" class="tab-item-label" bis_skin_checked="1">Invests</div>
                            </div>
                            <!---->
                            <!---->
                        </div>
                        <div class="tab-item" bis_skin_checked="1" style="width: 20%;">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <div data-v-5e8eeef3="" id="tabItem" onclick="window.location.href='{{route ('invite')}}'"  class="tab-item-inner" bis_skin_checked="1">
                                <div data-v-5e8eeef3="" class="tab-item-icon i-mingcute:invite-fill c-$text-gray"
                                    bis_skin_checked="1"></div>
                                <div data-v-5e8eeef3="" class="tab-item-label" bis_skin_checked="1">Invite Friends</div>
                            </div>
                            <!---->
                            <!---->
                        </div>
                        <div class="tab-item" bis_skin_checked="1" style="width: 20%;">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <div data-v-5e8eeef3=""  onclick="window.location.href='{{route ('user.profile.setting')}}'" id="tabItem" class="tab-item-inner" bis_skin_checked="1">
                                <div data-v-5e8eeef3=""
                                    class="tab-item-icon i-clarity:avatar-solid-alerted c-$text-gray"
                                    bis_skin_checked="1"></div>
                                <div data-v-5e8eeef3="" class="tab-item-label" bis_skin_checked="1">Me</div>
                            </div>
                            <!---->
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
           
            
                <!---->
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <div class="btn-fixed a-t-44" bis_skin_checked="1" style="right: 10px;">
                <!---->
                <!---->
            </div>
            <!---->
            <!---->
        </div>
    </div>
    <script>
        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'90d1bae85875e8f1',t:'MTczODc0NjIzNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
    </script><iframe height="1" width="1"
        style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>





 <style>



 #snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgba(31, 28, 28, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 50%;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#snackbar_error {
  visibility: hidden;
  width: 40%;
  margin-left: 5px;
  background-color: whitesmoke;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
  border-radius: 10px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 30%;
  bottom: 50%;
  font-size: 17px;
}

#snackbar_error.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@-webkit-keyframes fadein {
  from {
    bottom: 50%;
    opacity: 0;
  }
  to {
    bottom: 50%;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 50%;
    opacity: 1;
  }
  to {
    bottom: 50%;
    opacity: 0;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  #snackbar_error {
    width: 60%;
    left: 20%;
    bottom: 70px;
    font-size: 12px;
  }
  #snackbar {
    width: 50%;
    left: 25%;
    bottom: 70px;
    font-size: 12px;
  }
}
@media (max-width: 575.99px) {
  #snackbar_error {
    width: 80%;
    margin-left: 5px;
    left: 10%;
    font-size: 12px;
  }
  #snackbar {
    width: 80%;
    margin-left: 5px;
    left: 10%;
    font-size: 12px;
  }
}

        /* Styles for the preloader */
        #preloade {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
       
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black
        }
        /* Styles for the preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
           
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black
        }
</style>


 <script>
    $(document).ready(function() 
{
    $('#loader').hide();

    $('a').click(function() 
    {
        $('#loader').show();
    }) 
})
</script>
<script>
    $(document).ready(function() 
{
    $('#loader').hide();

    $('form').submit(function() 
    {
        $('#loader').show();
    }) 
})
</script>



    <script>
        document.onreadystatechange = function () {
            var state = document.readyState;
            if (state == "interactive") {
                // Show the preloader when the page starts loading
                showPreloader();
            } else if (state == "complete") {
                // Hide the preloader when the page finishes loading
                hidePreloader();
            }
        };

        function showPreloader() {
            document.getElementById("preloader").style.display = "flex";
            document.getElementById("blurred-background").style.display = "block";
        }

        function hidePreloader() {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("blurred-background").style.display = "none";
        }

    </script>
    <title>
         Home
    </title>
    <script>
        document.onreadystatechange = function () {
            var state = document.readyState;
            if (state == "interactive") {
                // Show the preloader when the page starts loading
                showPreloader();
            } else if (state == "complete") {
                // Hide the preloader when the page finishes loading
                hidePreloader();
            }
        };

        function showPreloader() {
            document.getElementById("preloader").style.display = "flex";
            document.getElementById("blurred-background").style.display = "block";
        }

        function hidePreloader() {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("blurred-background").style.display = "none";
        }

    </script>
</head>

<body class="main-layout m-0 p-0">
    <!-- loader  -->
    <div class="loader" id="preloader">
        <i  class="fa-regular fa-loader fa-flip fa-10x"></i>
        <div class="loader">
            <!---->
        </div>
        <!---->
        <!---->
    </div>
    <div class="van-floating-bubble" bis_skin_checked="1" style="transform: translate3d(1308px, 316.5px, 0px);"><img class="w-50px rounded-full h-auto" src="{{asset ('core/03042324661/login/upload/img/675f1549ec3f.webp')}}">
    </div>
        </div>
    </div>
    <!-- end loader -->
    <!-- loader  -->
    <div class="loaderd" id="preloade">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     <center>   <div class="loaderd">    <div data-v-app="" bis_skin_checked="1"></div>
    <!---->
    <div role="dialog" tabindex="0" class="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
        style="z-index: 2004; display:;" bis_skin_checked="1">
        <!---->
        <div class="van-toast__text" bis_skin_checked="1">login success</div>
        <!---->
    </div>
    <div class="van-floating-bubble" bis_skin_checked="1" style="transform: translate3d(1862px, 472.5px, 0px);"><img class="w-50px rounded-full h-auto" src="{{asset ('core/03042324661/h/api.miairobot.com/upload/img/675f1549ec3f.webp')}}">
    </div></center>
        </div>
    </div>
    <!-- end loader -->
  <script src="{{asset ('core/03042324661/h/pakshoppings.com/blue/public/assets/toast.js')}}"></script>
<script>
    
    
    
    </script>
<script>

    function login(){
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('form').submit();
    }

    window.onload = function() {
        document.querySelector('.loaderd').style.display = 'none';
    };

    function eye() {
        var pass = document.querySelector('input[name="password"]');
        if (pass.type == 'password') {
            pass.type = 'text'
        } else {
            pass.type = 'password'
        }
    }
</script>


    <!---->
    <!---->
    <!---->
    <!---->
    
    <!---->
    <!---->
</body>
@endsection
</html>
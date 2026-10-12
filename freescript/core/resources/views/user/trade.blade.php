@extends($activeTemplate.'layouts.master')

@section('content')
    <link rel="stylesheet" href="{{ asset('assets/trade-page.css') }}?v=20261012-blue-theme">

    <main class="trade-page trade-terminal" data-trade-page data-symbol="{{ $coin['symbol'] }}" data-price="{{ $coin['price'] }}" data-change="{{ $coin['change'] }}" data-markets-url="{{ route('user.markets') }}">
        <header class="trade-terminal__topbar">
            <a class="trade-terminal__back" href="{{ route('user.markets') }}" aria-label="Back to markets">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
            <a class="trade-terminal__pair-switcher" href="{{ route('user.markets') }}" aria-label="Choose another trading pair">
                <h1 data-trade-pair>{{ $coin['symbol'] }}/USDT</h1>
                <span class="trade-terminal__pair-type">Perp</span>
                <span class="trade-terminal__pair-chevron" aria-hidden="true">&#9662;</span>
            </a>
            <div class="trade-terminal__actions">
                <button type="button" data-trade-favorite aria-label="Add pair to favorites" aria-pressed="false">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /></svg>
                </button>
                <button type="button" data-trade-share aria-label="Share trading pair">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15V3m0 0L7.5 7.5M12 3l4.5 4.5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </button>
                <span class="trade-terminal__action-status" data-trade-action-status role="status" aria-live="polite"></span>
            </div>
        </header>

        <section class="trade-terminal__quote" aria-label="Selected market quote">
            <div class="trade-terminal__quote-main">
                <div class="trade-terminal__last-price is-negative" data-trade-price>{{ $coin['price'] }}</div>
                <div class="trade-terminal__usd-change"><span data-trade-usd-price>$167.75</span><span class="is-negative" data-trade-change>{{ $coin['change'] }}</span></div>
                <div class="trade-terminal__mark-price">Mark Price <strong data-mark-price>167.81</strong></div>
            </div>
            <dl class="trade-terminal__stats">
                <div><dt>24h High</dt><dd data-stat-high>172.77</dd></div>
                <div><dt>24h Low</dt><dd data-stat-low>166.40</dd></div>
                <div><dt>24h Vol(Cont)</dt><dd data-stat-volume>105,164</dd></div>
                <div><dt>24h Vol(USD)</dt><dd data-stat-quote-volume>1.05M</dd></div>
            </dl>
        </section>

        <nav class="trade-terminal__timeframes" aria-label="Chart timeframe" role="group">
            <span class="trade-terminal__time-label">Time</span>
            <button type="button" data-chart-interval="15m" aria-pressed="true">15m</button>
            <button type="button" data-chart-interval="1h" aria-pressed="false">1h</button>
            <button type="button" data-chart-interval="4h" aria-pressed="false">4h</button>
            <button type="button" data-chart-interval="1d" aria-pressed="false">1D</button>
            <button type="button" class="trade-terminal__more" aria-label="More timeframes">More <span aria-hidden="true">⌄</span></button>
            <button type="button" class="trade-terminal__zoom-reset" data-chart-zoom-reset aria-label="Reset chart zoom" title="Reset chart zoom"><span data-chart-zoom>1.0x</span></button>
        </nav>

        <section class="trade-terminal__chart-section" aria-label="Price and volume chart">
            <div class="trade-terminal__chart-legend" aria-live="polite">
                <span class="trade-terminal__legend-price"><i></i><span>Price</span><strong data-legend-price>{{ $coin['price'] }}</strong></span>
                <span class="trade-terminal__legend-ma" data-ma-legend><i></i><span>MA60</span><strong data-ma-value>--</strong></span>
                <span class="trade-terminal__feed-status" data-feed-status role="status">Loading market data</span>
            </div>
            <div class="trade-terminal__canvas-wrap">
                <canvas id="tradeCanvas" aria-label="Price line, moving average and volume chart"></canvas>
                <div class="trade-terminal__chart-message" data-chart-message role="status">Loading market data...</div>
            </div>
            <div class="trade-terminal__volume-legend"><span><i></i>Vol(<b data-volume-symbol>{{ $coin['symbol'] }}</b>)</span><span><i></i>Vol(USD)</span></div>
        </section>

        <section class="trade-order-panel" aria-label="Trading controls">
            <div class="trade-order-panel__selectors">
                <label class="trade-order-panel__field" for="trade-amount-input">
                    <span>Amount (USDT)</span>
                    <input type="number" id="trade-amount-input" value="10" min="1" step="0.01" inputmode="decimal" autocomplete="off">
                </label>
                <label class="trade-order-panel__field trade-order-panel__duration-field" for="trade-duration-select">
                    <span>Duration</span>
                    <span class="trade-order-panel__duration-control">
                        <select id="trade-duration-select">
                            <option value="60s">60s (1 Min)</option>
                            <option value="300s">5 Min</option>
                            <option value="900s">15 Min</option>
                        </select>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                            <path d="m7 9 5 5 5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </label>
            </div>

            <div class="trade-order-panel__summary" aria-live="polite">
                <span>Payout: <strong>192%</strong> (<span data-trade-payout>$19.20</span>)</span>
                <span>Min Trade: <strong>$1.00</strong></span>
            </div>

            <div class="trade-order-panel__actions">
                <button class="trade-order-panel__action trade-order-panel__action--up" type="button" id="trade-up-btn" data-trade-direction="UP">
                    UP
                </button>
                <button class="trade-order-panel__action trade-order-panel__action--down" type="button" id="trade-down-btn" data-trade-direction="DOWN">
                    DOWN
                </button>
            </div>
            <p class="trade-order-panel__note" data-trade-feedback role="status" aria-live="polite">Preview only. Live order execution is not connected.</p>
        </section>

        <dialog id="trade-confirmation-modal" class="trade-confirm-dialog" data-trade-confirm aria-labelledby="trade-confirm-title">
            <form method="dialog" data-trade-confirm-form>
                <div class="trade-confirm-dialog__heading">
                    <span class="trade-confirm-dialog__eyebrow">ORDER PREVIEW</span>
                    <h2 id="trade-confirm-title">Confirm Trade Order</h2>
                    <span id="conf-direction-badge" class="trade-confirm-dialog__badge is-up">UP</span>
                </div>
                <dl class="trade-confirm-dialog__details">
                    <div><dt>Pair</dt><dd id="conf-pair">{{ $coin['symbol'] }}/USDT</dd></div>
                    <div><dt>Direction</dt><dd id="conf-direction" data-confirm-direction>UP</dd></div>
                    <div><dt>Amount</dt><dd id="conf-amount" data-confirm-amount>100 USDT</dd></div>
                    <div><dt>Duration</dt><dd id="conf-duration" data-confirm-duration>5 Min</dd></div>
                    <div><dt>Applicable Rule/Payout</dt><dd id="conf-rule" class="is-up"><span id="conf-rule-text">Close &gt; Entry</span> · <span id="conf-payout-rate">192%</span> (<span id="conf-payout" data-confirm-payout>$192.00</span>)</dd></div>
                    <div><dt>Trading Fee</dt><dd id="conf-fee">0.00 USDT</dd></div>
                    <div><dt>Potential Outcome</dt><dd>Calculated on expiry</dd></div>
                </dl>
                <p class="trade-confirm-dialog__notice">Preview only. Live order execution is not connected; confirming will not submit an order.</p>
                <div class="trade-confirm-dialog__actions">
                    <button id="conf-cancel-btn" class="trade-confirm-dialog__cancel" type="submit" value="cancel">Cancel</button>
                    <button id="conf-submit-btn" class="trade-confirm-dialog__confirm" type="submit" value="confirm">Confirm Trade</button>
                </div>
            </form>
        </dialog>
    </main>

    <script src="{{ asset('assets/trade-page.js') }}?v=20261012-blue-theme" defer></script>
@endsection
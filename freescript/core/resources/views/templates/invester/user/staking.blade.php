@extends($activeTemplate . 'layouts.master')
@section('content')
    @php
        $maximumConfiguredReturn = $stakings->max('interest_percent');
    @endphp
    <script>tailwind = { config: { darkMode: 'media' } };</script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .staking-filter.is-active { color: #fff; background: #2563eb; border-color: #2563eb; }
        .staking-plan-card[hidden] { display: none; }
        .vault-apy-glow { box-shadow: 0 0 22px rgb(52 211 153 / 24%); }
        .staking-page .vault-hero, .staking-page .vault-hero * { color: #fff !important; }
        .staking-page h2, .staking-page .vault-name { color: #2563eb; }
        #staking-modal-title { color: #2563eb; }
        @media (prefers-color-scheme: dark) {
            .staking-page h2, .staking-page .vault-name, #staking-modal-title { color: #60a5fa; }
        }
        .staking-page :not(h1):not(h2):not(h3),
        #staking-modal :not(h1):not(h2):not(h3) { color: #000 !important; }
    </style>

    <div class="staking-page mx-auto min-h-screen max-w-md bg-slate-50 px-4 pb-10 text-black dark:text-white">
        <header class="vault-hero relative -mx-6 overflow-hidden rounded-b-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 px-5 py-2 text-white shadow-xl">
            <div class="pointer-events-none absolute -right-12 -top-14 h-48 w-48 rounded-full border border-white/10"></div>
            <div class="relative z-10">
                <div class="mb-3 flex items-center justify-between gap-3">
                    <span class="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-100 backdrop-blur-md">TradeX Vaults</span>
                    <span class="flex items-center gap-1.5 text-xs font-semibold text-emerald-300"><span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>Dynamic Yield</span>
                </div>
                <div class="flex items-end justify-between gap-3">
                    <div>
                        <h1 class="text-sm md:text-xl font-extrabold tracking-tight text-white">Earn Yield on Assets</h1>
                        <p class="mt-1 text-xs text-blue-100/90">High-yield flexible and locked vaults</p>
                    </div>
                    <span class="vault-apy-glow shrink-0 rounded-full border border-emerald-300/50 bg-emerald-700 px-3 py-1.5 text-[10px] font-extrabold text-white">
                        @if ($maximumConfiguredReturn)
                            Up to {{ showAmount($maximumConfiguredReturn) }}% return
                        @else
                            Rates by plan
                        @endif
                    </span>
                </div>
            </div>
        </header>

        <main class="space-y-6 py-4">
            <section class="grid grid-cols-2 gap-3" aria-label="Staking summary">
                <article class="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm dark:border-slate-800/80 dark:bg-[#181E27]">
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400">Total Staked</p>
                    <p class="mt-1 text-base font-extrabold tabular-nums text-slate-900 dark:text-white">{{ $general->cur_sym }}{{ showAmount($stakingSummary->total_staked ?? 0) }} <span class="text-[10px] font-normal text-slate-400">{{ __($general->cur_text) }}</span></p>
                    <span class="mt-1 inline-block text-[9px] font-semibold text-blue-600 dark:text-blue-400">Active assets</span>
                </article>
                <article class="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm dark:border-slate-800/80 dark:bg-[#181E27]">
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400">Cumulative Earnings</p>
                    <p class="mt-1 text-base font-extrabold tabular-nums text-emerald-500">+{{ $general->cur_sym }}{{ showAmount($stakingSummary->cumulative_earnings ?? 0) }} <span class="text-[10px] font-normal text-slate-400">{{ __($general->cur_text) }}</span></p>
                    <span class="mt-1 inline-block text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">Recorded returns</span>
                </article>
            </section>

            <section aria-labelledby="active-positions-title">
                <div class="mb-3 flex items-center justify-between">
                    <h2 id="active-positions-title" class="text-sm font-bold tracking-tight">Active Positions</h2>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">Ongoing stakes</span>
                </div>
                <div class="space-y-3">
                    @forelse ($activeStakings as $position)
                        <article class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800/80 dark:bg-[#181E27]">
                            <div class="flex items-center justify-between gap-3">
                                <div><p class="text-xs font-bold">Active Staking Position</p><p class="mt-1 text-[10px] text-slate-500 dark:text-slate-400">Matures {{ showDateTime($position->end_at, 'M d, Y') }}</p></div>
                                <span class="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">{{ showAmount($position->invest_amount) }} {{ __($general->cur_text) }}</span>
                            </div>
                            <div class="mt-3 flex justify-between border-t border-slate-100 pt-3 text-[10px] dark:border-slate-800"><span class="text-slate-500 dark:text-slate-400">Configured return</span><strong>{{ showAmount($position->interest) }} {{ __($general->cur_text) }}</strong></div>
                        </article>
                    @empty
                        <div class="rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-center dark:border-slate-700">
                            <p class="text-xs font-semibold">No active positions</p>
                            <p class="mt-1 text-[10px] text-slate-500 dark:text-slate-400">Your ongoing stakes will appear here.</p>
                        </div>
                    @endforelse
                </div>
            </section>

            <section aria-labelledby="staking-plans-title">
                <div class="mb-3">
                    <h2 id="staking-plans-title" class="text-sm font-bold tracking-tight">Available Vaults</h2>
                    <p class="mt-1 text-[10px] text-slate-500 dark:text-slate-400">Select a vault to review its terms.</p>
                </div>
                <div class="mb-3 grid grid-cols-4 gap-1 rounded-xl bg-slate-200/70 p-1" role="group" aria-label="Filter vaults">
                    <button type="button" class="staking-filter is-active rounded-lg border border-transparent px-1 py-2 text-[10px] font-bold text-slate-600 transition dark:text-slate-300" data-staking-filter="all" aria-pressed="true">All</button>
                    <button type="button" class="staking-filter rounded-lg border border-transparent px-1 py-2 text-[10px] font-bold text-slate-600 transition dark:text-slate-300" data-staking-filter="flexible" aria-pressed="false">Flexible</button>
                    <button type="button" class="staking-filter rounded-lg border border-transparent px-1 py-2 text-[10px] font-bold text-slate-600 transition dark:text-slate-300" data-staking-filter="locked" aria-pressed="false">Locked</button>
                    <button type="button" class="staking-filter rounded-lg border border-transparent px-1 py-2 text-[10px] font-bold text-slate-600 transition dark:text-slate-300" data-staking-filter="high-yield" aria-pressed="false">High Yield</button>
                </div>
                <div class="space-y-3">
                    @forelse ($stakings as $plan)
                        <article class="staking-plan-card rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-blue-500 dark:border-slate-800 dark:bg-[#181E27]" data-categories="locked @if ($maximumConfiguredReturn && $plan->interest_percent >= $maximumConfiguredReturn) high-yield @endif" data-plan-id="{{ $plan->id }}" data-plan-name="{{ $plan->days }}-Day Staking Plan" data-currency="{{ __($general->cur_text) }}" data-duration-days="{{ $plan->days }}" data-return-rule="{{ showAmount($plan->interest_percent) }}% configured return paid at maturity" data-fee="0" data-min-amount="{{ getAmount($general->staking_min_amount) }}">
                            <div class="flex items-center justify-between gap-3">
                                <div class="flex min-w-0 items-center gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-500/10 text-[10px] font-extrabold text-blue-500">{{ strtoupper(substr($general->cur_text, 0, 3)) }}</span><div class="min-w-0"><h3 class="vault-name truncate text-xs font-bold">{{ $plan->days }}-Day Staking Plan</h3><p class="mt-1 text-[10px] text-slate-500 dark:text-slate-400">Fixed term</p></div></div>
                                <div class="text-right"><span class="text-sm font-black text-emerald-500">{{ showAmount($plan->interest_percent) }}%</span><p class="text-[9px] font-semibold uppercase text-slate-500 dark:text-slate-400">Configured return</p></div>
                            </div>
                            <div class="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800"><span class="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ $plan->days }} Days</span><button type="button" class="stake-now-btn rounded-xl bg-blue-600 px-4 py-2 text-[11px] font-bold text-white transition hover:bg-blue-700">Stake Now</button></div>
                        </article>
                    @empty
                        <div class="rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-center dark:border-slate-700"><p class="text-xs font-semibold">No active vaults</p><p class="mt-1 text-[10px] text-slate-500 dark:text-slate-400">Active staking plans will appear here when configured.</p></div>
                    @endforelse
                </div>
                <div id="empty-filter-results" class="mt-3 hidden rounded-xl border border-dashed border-slate-300 px-4 py-5 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">No vaults match this filter.</div>
            </section>
        </main>
    </div>

    <div id="staking-modal" data-currency="{{ __($general->cur_text) }}" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4 backdrop-blur-sm" role="presentation">
        <section class="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl dark:border-slate-800 dark:bg-[#181E27] dark:text-white" role="dialog" aria-modal="true" aria-labelledby="staking-modal-title">
            <div class="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-800"><div><p class="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Review position</p><h2 id="staking-modal-title" class="mt-1 text-lg font-extrabold">Confirm Staking Position</h2></div><button id="close-staking-modal" type="button" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-xl font-bold text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white" aria-label="Close dialog">&times;</button></div>
            <p class="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">Review the amount, return rule, and maturity date before confirming.</p>
            <form id="staking-form" action="{{ route('user.staking.save') }}" method="POST" data-preview-only="false" novalidate>
                @csrf
                <input type="hidden" id="stake-duration-id" name="duration">
                <div class="my-4 space-y-3.5 text-xs">
                    <div class="rounded-xl bg-blue-50/80 px-4 py-3 dark:bg-blue-950/40"><span class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Plan Name</span><strong id="stake-plan-name" class="mt-1 block text-sm font-extrabold text-blue-700 dark:text-blue-300">Select a plan</strong></div>
                    <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700"><div class="mb-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400"><label for="stake-amount-input" class="font-semibold">Amount</label><span>Balance <strong id="user-usdt-balance" class="ml-1 text-slate-700 dark:text-slate-200">Select wallet</strong></span></div><div class="flex items-center"><input type="number" id="stake-amount-input" name="amount" min="{{ getAmount($general->staking_min_amount) }}" max="{{ getAmount($general->staking_max_amount) }}" data-configured-max="{{ getAmount($general->staking_max_amount) }}" step="0.01" inputmode="decimal" class="w-full bg-transparent text-xl font-bold outline-none" placeholder="{{ getAmount($general->staking_min_amount) }} {{ __($general->cur_text) }}" required><span id="stake-amount-currency" class="ml-2 text-xs font-bold text-slate-400">{{ __($general->cur_text) }}</span></div><p id="stake-amount-error" class="mt-1 hidden text-[11px] text-red-600" role="alert"></p></div>
                    <div class="py-1"><label for="stake-wallet-input" class="mb-1 block text-[11px] font-semibold text-slate-500 dark:text-slate-400">Wallet</label><select id="stake-wallet-input" name="wallet" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" required><option value="">Select wallet</option><option value="deposit_wallet" data-balance="{{ getAmount(auth()->user()->deposit_wallet) }}" data-currency="{{ __($general->cur_text) }}">Deposit Wallet · {{ $general->cur_sym }}{{ showAmount(auth()->user()->deposit_wallet) }}</option><option value="interest_wallet" data-balance="{{ getAmount(auth()->user()->interest_wallet) }}" data-currency="{{ __($general->cur_text) }}">Interest Wallet · {{ $general->cur_sym }}{{ showAmount(auth()->user()->interest_wallet) }}</option></select></div>
                    <div class="divide-y divide-slate-100 rounded-xl border border-slate-200 px-3 dark:divide-slate-800 dark:border-slate-700"><div class="flex justify-between gap-4 py-3"><span class="text-slate-500 dark:text-slate-400">Duration</span><strong id="stake-duration" class="text-right font-semibold">--</strong></div><div class="flex justify-between gap-4 py-3"><span class="text-slate-500 dark:text-slate-400">Reward / Return Rule</span><strong id="stake-reward-rule" class="max-w-[65%] text-right font-bold text-emerald-600 dark:text-emerald-400">--</strong></div><div class="flex justify-between gap-4 py-3"><span class="text-slate-500 dark:text-slate-400">Expected Maturity Date</span><strong id="stake-maturity-date" class="text-right font-semibold text-slate-700 dark:text-slate-200">--</strong></div><div class="flex justify-between gap-4 py-3"><span class="text-slate-500 dark:text-slate-400">Applicable Fee</span><strong id="stake-fee" class="text-right font-semibold text-slate-700 dark:text-slate-200">0.00 {{ __($general->cur_text) }} (0%)</strong></div></div>
                    <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70"><label class="flex cursor-pointer items-start gap-2 text-[11px] leading-5 text-slate-600 dark:text-slate-300"><input type="checkbox" id="stake-terms-checkbox" class="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"><span>I have read and agree to the <a href="#staking-terms" class="font-semibold text-blue-600 underline dark:text-blue-400">Staking Terms &amp; Conditions</a> regarding locked asset yield policies.</span></label><p id="staking-terms" class="ml-6 mt-2 text-[11px] leading-5 text-slate-400">Returns and maturity follow the terms configured for this staking plan.</p></div>
                </div>
                <div class="sticky bottom-0 z-10 grid grid-cols-2 gap-3 bg-white pt-3 dark:bg-[#181E27]"><button id="cancel-stake-btn" type="button" class="rounded-xl bg-slate-100 py-3 font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Cancel</button><button id="confirm-stake-btn" type="submit" class="rounded-xl bg-[#2563eb] py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" disabled>Confirm Stake</button></div>
                <p id="staking-feedback" class="mt-3 min-h-4 text-center text-[11px] text-slate-500 dark:text-slate-400" role="status" aria-live="polite"></p>
            </form>
        </section>
    </div>
@endsection

@push('script')
    <script src="{{ asset('core/03042324661/h/pakshoppings.com/zam/user/staking.js') }}"></script>
@endpush

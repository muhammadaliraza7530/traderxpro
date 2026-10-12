@extends($activeTemplate . 'layouts.master')

@section('content')
    @php
        $baseCurrency = strtoupper($general->cur_text);
        $availableBalance = (float) $user->deposit_wallet + (float) $user->interest_wallet;
        $lockedStakingBalance = (float) \App\Models\StakingInvest::where('user_id', $user->id)
            ->where('status', 1)
            ->where('end_at', '>', now())
            ->sum('invest_amount');
        $lockedInvestBalance = (float) \App\Models\Invest::where('user_id', $user->id)->where('status', 1)->sum('amount');
        $lockedPoolBalance = (float) \App\Models\PoolInvest::where('user_id', $user->id)->where('status', 1)->sum('invest_amount');
        $lockedWithdrawalBalance = (float) \App\Models\Withdrawal::where('user_id', $user->id)->where('status', 2)->sum('amount');
        $lockedBalance = $lockedStakingBalance + $lockedInvestBalance + $lockedPoolBalance + $lockedWithdrawalBalance;
        $totalAssets = $availableBalance + $lockedBalance;
        $totalAssetsRaw = showAmount($totalAssets ?? 0);
        $assetNames = ['USDT' => 'Tether', 'USD' => 'US Dollar', 'BTC' => 'Bitcoin', 'ETH' => 'Ethereum', 'BNB' => 'BNB'];
        $assetIcons = ['USDT' => '₮', 'USD' => '$', 'BTC' => '₿', 'ETH' => 'Ξ', 'BNB' => 'B'];
        $assetName = $assetNames[$baseCurrency] ?? $baseCurrency;
        $assetIcon = $assetIcons[$baseCurrency] ?? substr($baseCurrency, 0, 1);
        $hasUsdReference = in_array($baseCurrency, ['USD', 'USDT'], true);
        $usdtEquivalent = $hasUsdReference ? showAmount($totalAssets) : null;
        $assetUsdEquivalent = $hasUsdReference ? showAmount($totalAssets) : null;
        $depositAssets = $gatewayCurrency->groupBy(function ($option) {
            return strtoupper($option->currency);
        });
        $firstDepositOption = $gatewayCurrency->first();
    @endphp

    <style>
        body.has-invest-main-nav,
        body.has-invest-main-nav #app {
            background: #FFFFFF;
        }

        .wallet-page {
            display: block;
            width: 100%;
            max-width: 448px;
            margin: 0 auto;
            box-sizing: border-box;
            overflow-x: hidden;
            background: #FFFFFF;
            color: #111827;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 14px;
            line-height: 1.45;
        }

        .wallet-page *,
        .wallet-page *::before,
        .wallet-page *::after {
            box-sizing: border-box;
        }

        .wallet-page > section {
            padding: 22px 18px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, .16);
            border-radius: 0 0 22px 22px;
            background: linear-gradient(135deg, #2563EB 0%, #4F46E5 55%, #0F172A 100%);
            box-shadow: 0 12px 28px rgba(0, 0, 0, .22);
        }

        .wallet-page > section > div:first-child,
        .wallet-page main > div:first-child,
        .wallet-page main > div:nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .wallet-page > section > div:first-child {
            gap: 12px;
            color: #DBEAFE;
            font-size: 12px;
        }

        .wallet-page > section > div:first-child > div:first-child {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .wallet-page > section > div:first-child > span {
            padding: 3px 10px;
            border: 1px solid rgba(52, 211, 153, .28);
            border-radius: 999px;
            background: rgba(16, 185, 129, .08);
            color: #6EE7B7;
            font-size: 11px;
            font-weight: 700;
            white-space: nowrap;
        }

        .wallet-page #toggle-balance-vis {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border: 0;
            background: transparent;
            color: #9AA6B8;
        }

        .wallet-page #toggle-balance-vis svg {
            width: 18px;
            height: 18px;
        }

        .wallet-page > section > div:nth-child(2) {
            margin: 12px 0 20px;
        }

        .wallet-page #total-assets-val {
            margin: 0;
            color: #F5F7FA;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 30px;
            font-weight: 800;
            line-height: 1.2;
            overflow-wrap: anywhere;
        }

        .wallet-page #usdt-equiv-val {
            margin: 4px 0 0;
            color: #9AA6B8;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 12px;
        }

        .wallet-page > section > div:last-child {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 9px;
        }

        .wallet-page > section > div:last-child a {
            display: flex;
            min-width: 0;
            min-height: 46px;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 8px 5px;
            border: 1px solid #344052;
            border-radius: 12px;
            background: #1E2634;
            color: #E5EAF2;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
        }

        .wallet-page > section > div:last-child a:first-child {
            border-color: #2563EB;
            background: #2563EB;
            color: #fff;
        }

        .wallet-page > section > div:last-child svg {
            width: 16px;
            height: 16px;
            flex: 0 0 16px;
        }

        .wallet-page main {
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding: 18px 16px;
            margin-top: 10px;
        }

        .deposit-flow {
            min-height: 100dvh;
            margin: -18px 0 0;
            padding: 20px 16px calc(100px + env(safe-area-inset-bottom));
            background: #F8FAFC;
            color: #0F172A;
        }

        .deposit-flow-title {
            display: block !important;
            padding: 0 !important;
        }

        .deposit-flow-back {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #475569;
            font-size: 12px;
            text-decoration: none;
        }

        .deposit-flow-title h2 {
            margin: 12px 0 3px;
            color: #111827;
            font-size: 20px;
            font-weight: 800;
        }

        .deposit-flow-title p {
            margin: 0;
            color: #475569;
            font-size: 12px;
        }

        .deposit-flow-form {
            display: grid;
            gap: 12px;
            margin-top: 18px;
        }

        .deposit-step,
        .deposit-history {
            min-width: 0;
            padding: 16px;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .deposit-step-heading {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 12px;
        }

        .deposit-step-number {
            display: grid;
            width: 24px;
            height: 24px;
            flex: 0 0 24px;
            place-items: center;
            border-radius: 8px;
            background: #EFF6FF;
            color: #2563EB;
            font-size: 10px;
            font-weight: 800;
        }

        .deposit-step-heading h3,
        .deposit-history h3 {
            margin: 0;
            color: #111827;
            font-size: 13px;
            font-weight: 700;
        }

        .deposit-step-heading p {
            margin: 2px 0 0;
            color: #64748B;
            font-size: 11px;
        }

        .deposit-field-label {
            display: block;
            margin: 0 0 6px;
            color: #334155;
            font-size: 11px;
            font-weight: 600;
        }

        .deposit-field-control {
            display: block;
            width: 100%;
            min-height: 44px;
            padding: 10px 12px;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            outline: none;
            background: #FFFFFF;
            color: #0F172A;
            font: inherit;
            font-size: 13px;
            box-shadow: 0 1px 2px rgba(15, 23, 42, .04);
        }

        .deposit-field-control:focus {
            border-color: #3B82F6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, .18);
        }

        .deposit-field-control option {
            background: #FFFFFF;
            color: #111827;
        }

        .deposit-limit-row {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-top: 8px;
            color: #64748B;
            font-size: 10px;
        }

        .deposit-limit-row strong {
            color: #111827;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-weight: 600;
            text-align: right;
        }

        .deposit-notice {
            padding: 12px;
            border: 1px solid #FDE68A;
            border-radius: 12px;
            background: #FFFBEB;
            color: #92400E;
            font-size: 11px;
            line-height: 1.5;
        }

        .deposit-address-placeholder {
            color: #CBD5E1;
            font-size: 11px;
            line-height: 1.5;
        }

        .deposit-address-placeholder strong {
            display: block;
            margin-bottom: 4px;
            color: #F8FAFC;
            font-size: 12px;
        }

        .deposit-submit {
            width: 100%;
            min-height: 46px;
            border: 0;
            border-radius: 11px;
            background: #2563EB;
            color: #fff;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
        }

        .deposit-submit:hover {
            background: #1D4ED8;
        }

        .deposit-history {
            margin-top: 18px;
            padding: 16px;
            border-color: #E2E8F0;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .deposit-history h3 {
            margin-bottom: 10px;
            color: #111827;
        }

        .deposit-history-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 10px 0;
            border-top: 1px solid #E2E8F0;
        }

        .deposit-history-row strong,
        .deposit-history-row span {
            display: block;
        }

        .deposit-history-row strong {
            color: #111827;
            font-size: 11px;
        }

        .deposit-history-row span {
            margin-top: 3px;
            color: #64748B;
            font-size: 10px;
        }

        .deposit-history-empty {
            margin: 0;
            padding: 12px 0 2px;
            border-top: 1px solid #E2E8F0;
            color: #64748B;
            font-size: 11px;
        }

        .deposit-direct-panel {
            display: grid;
            gap: 14px;
            margin-top: 18px;
            padding: 14px;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .deposit-selector-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .deposit-info-label {
            display: block;
            margin-bottom: 6px;
            color: #334155;
            font-size: 11px;
            font-weight: 700;
        }

        .deposit-address-row {
            display: flex;
            align-items: stretch;
            gap: 8px;
        }

        .deposit-address-value {
            min-width: 0;
            flex: 1;
            padding: 11px;
            border: 1px solid #CBD5E1;
            border-radius: 9px;
            background: #FFFFFF;
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            line-height: 1.45;
            overflow-wrap: anywhere;
            user-select: text;
        }

        .deposit-address-copy,
        .deposit-qr-toggle {
            min-height: 40px;
            padding: 0 12px;
            border: 1px solid #3B82F6;
            border-radius: 9px;
            background: #1D4ED8;
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
        }

        .deposit-address-copy:disabled,
        .deposit-qr-toggle:disabled {
            border-color: #E2E8F0;
            background: #F1F5F9;
            color: #94A3B8;
            cursor: not-allowed;
        }

        .deposit-copy-status {
            min-height: 14px;
            margin: 4px 0 0;
            color: #34D399;
            font-size: 10px;
        }

        .deposit-qr-toggle {
            width: 100%;
            border-color: #BFDBFE;
            background: #EFF6FF;
            color: #1D4ED8;
        }

        .deposit-qr-panel {
            display: grid;
            min-height: 190px;
            margin-top: 10px;
            place-items: center;
            border-radius: 10px;
            border: 1px solid #E2E8F0;
            background: #FFFFFF;
        }

        .deposit-qr-panel[hidden] {
            display: none !important;
        }

        .deposit-qr-panel img {
            display: block;
            width: 168px;
            height: 168px;
            object-fit: contain;
        }

        .deposit-confirmation-details {
            margin: 0;
            color: #475569;
            font-size: 11px;
            line-height: 1.5;
        }

        .wallet-page main > div:first-child {
            gap: 8px;
            padding: 0 2px;
        }

        .wallet-page main > div:first-child h3 {
            margin: 0;
            color: #334155;
            font-size: 12px;
            font-weight: 700;
        }

        .wallet-page main > div:first-child button {
            padding: 0;
            border: 0;
            background: transparent;
            color: #60A5FA;
            font-size: 11px;
            cursor: pointer;
            white-space: nowrap;
        }

        .wallet-page main > div:first-child button:focus-visible {
            border-radius: 3px;
            outline: 2px solid #2563EB;
            outline-offset: 3px;
        }

        .asset-holding-card {
            border: 1px solid #E2E8F0;
            border-radius: 14px;
            background: transparent;
            color: #111827;
            padding: 14px;
        }

        .asset-row-primary {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            gap: 12px;
        }

        .asset-card-header {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 10px;
        }

        .asset-icon {
            display: flex;
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(16, 185, 129, .24);
            border-radius: 13px;
            background: rgba(16, 185, 129, .1);
            color: #34D399;
            font-size: 20px;
        }

        .asset-identity {
            min-width: 0;
        }

        .asset-name-line {
            display: flex;
            align-items: baseline;
            gap: 5px;
        }

        .asset-name-line h4,
        .asset-price,
        .asset-total-equivalent,
        .asset-balance-list,
        .asset-balance-list dd,
        .asset-total-formula {
            margin: 0;
        }

        .asset-name-line h4 {
            color: #111827;
            font-size: 13px;
        }

        .asset-name-line span,
        .asset-price {
            color: #475569;
            font-size: 11px;
        }

        .asset-price {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin-top: 3px;
        }

        .asset-price strong {
            color: #111827;
            font-size: 11px;
        }

        .asset-total {
            min-width: 0;
            text-align: right;
        }

        .asset-total-label {
            display: block;
            color: #475569;
            font-size: 10px;
        }

        .asset-total-value {
            display: block;
            color: #111827;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 14px;
            font-variant-numeric: tabular-nums;
            font-weight: 800;
            line-height: 1.35;
            overflow-wrap: anywhere;
        }

        .asset-total-equivalent {
            display: block;
            color: #111827;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 10px;
            font-variant-numeric: tabular-nums;
        }

        .asset-balance-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;
            padding-top: 10px;
            border-top: 1px solid #E2E8F0;
        }

        .asset-balance-item {
            min-width: 0;
        }

        .asset-balance-item + .asset-balance-item {
            padding-left: 12px;
            border-left: 1px solid #E2E8F0;
        }

        .asset-balance-label {
            display: block;
            color: #334155;
            font-size: 10px;
        }

        .asset-balance-value {
            display: block;
            margin-top: 3px !important;
            color: #111827;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            font-variant-numeric: tabular-nums;
            font-weight: 600;
            overflow-wrap: anywhere;
        }

        .asset-total-formula {
            margin-top: 8px;
            color: #475569;
            font-size: 9px;
            text-align: right;
        }

        @media (max-width: 360px) {
            .asset-holding-card {
                padding: 12px;
            }

            .asset-row-primary {
                gap: 8px;
            }

            .asset-card-header {
                gap: 8px;
            }

            .asset-total-value {
                font-size: 12px;
            }
        }

        @media (max-width: 360px) {
            .wallet-page > section {
                padding-inline: 14px;
            }

            .wallet-page > section > div:last-child {
                gap: 6px;
            }

            .wallet-page > section > div:last-child a {
                font-size: 11px;
            }

            .wallet-page main {
                padding-inline: 12px;
            }
        }

    </style>

    <div class="wallet-page mx-auto w-full max-w-md bg-white font-sans antialiased">
        @unless ($depositFlow)
        <section class="rounded-b-3xl border-b border-slate-800/80 bg-gradient-to-br from-[#1A2230] via-[#151B26] to-[#10141D] px-3 py-1.5 shadow-2xl">
            <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-400">
                <div class="flex items-center gap-1.5 font-medium">
                    <span>Total Assets</span>
                    <button id="toggle-balance-vis" type="button" class="p-0.5 text-slate-400 transition hover:text-white focus:outline-none" aria-label="Hide balances" aria-pressed="false">
                        <svg id="eye-open-icon" class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </button>
                </div>
                <span class="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                    Pro Wallet
                </span>
            </div>

            <div class="my-3">
                <h1 id="total-assets-val" class="text-3xl font-black font-mono tracking-tight text-white tabular-nums" data-raw-val="{{ $totalAssetsRaw }}">
                    {{ $general->cur_sym }}{{ $totalAssetsRaw }}
                </h1>
                <p id="usdt-equiv-val" class="mt-0.5 font-mono text-xs text-slate-400">
                    @if ($hasUsdReference)
                        ≈ {{ $usdtEquivalent }} USDT
                    @else
                        USDT equivalent unavailable
                    @endif
                </p>
            </div>

            <div class="mt-2 grid grid-cols-3 gap-2.5">
                <a href="{{ route('user.deposit.index', ['flow' => 'deposit']) }}" class="flex items-center justify-center gap-1.5 rounded-2xl bg-blue-600 py-1 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                    <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                    Deposit
                </a>

                <a href="{{ route('user.withdraw') }}" class="flex items-center justify-center gap-1.5 rounded-2xl border border-slate-700/50 bg-[#1E2634] py-2.5 text-xs font-bold text-slate-200 transition hover:bg-[#252F40]">
                    <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    Withdraw
                </a>

                <a href="{{ route('user.transfer.balance') }}" class="flex items-center justify-center gap-1.5 rounded-2xl border border-slate-700/50 bg-[#1E2634] py-2.5 text-xs font-bold text-slate-200 transition hover:bg-[#252F40]">
                    <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    Transfer
                </a>
            </div>
        </section>
        @endunless

        @if ($depositFlow)
            <main class="deposit-flow">
                <div class="deposit-flow-title">
                    <a class="deposit-flow-back" href="{{ route('user.deposit.index') }}">&larr; Wallet</a>
                    <h2 id="deposit-title">Deposit {{ strtoupper($firstDepositOption->currency ?? '') }}</h2>
                    <p>Select your asset and network to view its configured deposit instructions.</p>
                </div>

                @if ($gatewayCurrency->isEmpty())
                    <section class="deposit-step" role="status">No active deposit methods are configured right now.</section>
                @else
                    <section class="deposit-direct-panel" aria-label="Deposit instructions">
                        <div class="deposit-selector-grid">
                            <div>
                                <label class="deposit-field-label" for="deposit-asset-selector">Asset</label>
                                <select class="deposit-field-control" id="deposit-asset-selector">
                                    @foreach ($depositAssets as $currency => $methods)
                                        <option value="{{ $currency }}">{{ $currency }} · {{ $assetNames[$currency] ?? $currency }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div>
                                <label class="deposit-field-label" for="deposit-network-selector">Network</label>
                                <select class="deposit-field-control" id="deposit-network-selector">
                                    @foreach ($gatewayCurrency as $option)
                                        <option value="{{ $option->method_code }}|{{ $option->currency }}"
                                            data-asset="{{ strtoupper($option->currency) }}"
                                            data-name="{{ $option->name }}"
                                            data-address="{{ strip_tags($option->method->description ?? '') }}"
                                            data-min-label="{{ showAmount($option->min_amount) }}"
                                            data-manual="{{ $option->method_code >= 1000 ? '1' : '0' }}"
                                            data-confirmations="{{ strtolower($option->method->alias ?? '') === 'blockchain' ? '3' : '' }}">
                                            {{ $option->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div>
                            <span class="deposit-info-label">Deposit address</span>
                            <div class="deposit-address-row">
                                <code id="deposit-address" class="deposit-address-value">{{ strip_tags($firstDepositOption->method->description ?? '') ?: 'Address unavailable for this method.' }}</code>
                                <button id="copy-deposit-address" class="deposit-address-copy" type="button" @disabled(!filled($firstDepositOption->method->description ?? null))>Copy</button>
                            </div>
                            <p id="deposit-copy-status" class="deposit-copy-status" role="status" aria-live="polite"></p>
                        </div>

                        <div>
                            <button id="toggle-deposit-qr" class="deposit-qr-toggle" type="button" aria-expanded="false" aria-controls="deposit-qr-panel" @disabled(!filled($firstDepositOption->method->description ?? null))>Show QR code</button>
                            <div id="deposit-qr-panel" class="deposit-qr-panel" hidden>
                                <img id="deposit-qr-image" alt="QR code for the selected deposit address">
                            </div>
                        </div>

                        <div class="deposit-notice" role="note"><strong>Network warning:</strong> Send only <span id="deposit-warning-asset">{{ strtoupper($firstDepositOption->currency) }}</span> using <span id="deposit-warning-network">{{ $firstDepositOption->name }}</span>. Deposits sent over another network may not be recoverable.</div>

                        <div class="deposit-limit-row"><span>Minimum deposit</span><strong><span id="deposit-minimum">{{ showAmount($firstDepositOption->min_amount) }}</span> <span id="deposit-minimum-currency">{{ strtoupper($firstDepositOption->currency) }}</span></strong></div>

                        <p id="deposit-confirmation-copy" class="deposit-confirmation-details">
                            @if ($firstDepositOption->method_code >= 1000)
                                This gateway uses manual verification. No on-chain confirmation count is configured; funds are credited after the operator verifies the transfer.
                            @elseif (strtolower($firstDepositOption->method->alias ?? '') === 'blockchain')
                                At least 3 Bitcoin network confirmations are required before crediting.
                            @else
                                The payment provider confirms the transfer; confirmation timing and requirements follow that provider's policy.
                            @endif
                        </p>
                    </section>
                @endif

                <section class="deposit-history" aria-labelledby="recent-deposits-title">
                    <h3 id="recent-deposits-title">Recent deposits</h3>
                    @forelse ($recentDeposits as $recentDeposit)
                        @php
                            $depositStatusLabels = [0 => 'Awaiting payment', 1 => 'Completed', 2 => 'Under review', 3 => 'Rejected'];
                        @endphp
                        <div class="deposit-history-row">
                            <div>
                                <strong>{{ $recentDeposit->gateway->name ?? $recentDeposit->method_currency }}</strong>
                                <span>{{ $recentDeposit->created_at->format('M d, Y · H:i') }}</span>
                            </div>
                            <div style="text-align: right">
                                <strong>{{ showAmount($recentDeposit->amount) }} {{ $recentDeposit->method_currency }}</strong>
                                <span>{{ $depositStatusLabels[$recentDeposit->status] ?? 'Processing' }}</span>
                            </div>
                        </div>
                    @empty
                        <p class="deposit-history-empty">No deposit activity yet.</p>
                    @endforelse
                </section>
            </main>
        @else
        <main class="space-y-4 px-4 py-4">
            <div class="flex items-center justify-between px-1">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">Assets Holdings</h3>
                <button id="toggle-small-balances" type="button" aria-pressed="false" title="Hide holdings worth less than $1 USD">Hide Small Balances</button>
            </div>

            <article class="asset-holding-card" aria-label="{{ $assetName }} asset balance" data-usd-equivalent="{{ $assetUsdEquivalent ?? '' }}">
                <div class="asset-row-primary">
                    <div class="asset-card-header">
                        <div class="asset-icon" aria-hidden="true">{{ $assetIcon }}</div>
                        <div class="asset-identity">
                            <div class="asset-name-line">
                                <h4>{{ $baseCurrency }}</h4>
                                <span>{{ $assetName }}</span>
                            </div>
                            <p class="asset-price">
                                <span>{{ $baseCurrency === 'USDT' ? 'Peg ref.' : 'Unit price' }}</span>
                                <strong>
                                    @if ($baseCurrency === 'USD')
                                        $1.00 USD
                                    @elseif ($baseCurrency === 'USDT')
                                        ≈ $1.00 USD
                                    @else
                                        Unavailable
                                    @endif
                                </strong>
                            </p>
                        </div>
                    </div>

                    <div class="asset-total">
                        <span class="asset-total-label">Total</span>
                        <strong class="asset-total-value" data-private-balance="{{ showAmount($totalAssets) }} {{ $baseCurrency }}">{{ showAmount($totalAssets) }} {{ $baseCurrency }}</strong>
                        <span class="asset-total-equivalent" data-private-balance="{{ $assetUsdEquivalent ? $general->cur_sym . $assetUsdEquivalent : 'Unavailable' }}">
                            @if ($assetUsdEquivalent)
                                ≈ {{ $general->cur_sym }}{{ $assetUsdEquivalent }}
                            @else
                                Unavailable
                            @endif
                        </span>
                    </div>
                </div>

                <dl class="asset-balance-list">
                    <div class="asset-balance-item">
                        <dt class="asset-balance-label" title="Funds currently available for trading and operations">Available</dt>
                        <dd class="asset-balance-value" data-private-balance="{{ showAmount($availableBalance) }} {{ $baseCurrency }}">{{ showAmount($availableBalance) }} {{ $baseCurrency }}</dd>
                    </div>
                    <div class="asset-balance-item">
                        <dt class="asset-balance-label" title="Pending withdrawals, staking, active investments and pool positions">Locked</dt>
                        <dd class="asset-balance-value" data-private-balance="{{ showAmount($lockedBalance) }} {{ $baseCurrency }}">{{ showAmount($lockedBalance) }} {{ $baseCurrency }}</dd>
                    </div>
                </dl>
                <p class="asset-total-formula">Total = Available + Locked</p>
            </article>
        </main>
        @endif
    </div>

    <script>
        (function () {
            const assetSelector = document.getElementById('deposit-asset-selector');
            const networkSelector = document.getElementById('deposit-network-selector');
            if (!assetSelector || !networkSelector) return;

            const networkOptions = Array.from(networkSelector.options);
            const addressElement = document.getElementById('deposit-address');
            const copyButton = document.getElementById('copy-deposit-address');
            const copyStatus = document.getElementById('deposit-copy-status');
            const qrButton = document.getElementById('toggle-deposit-qr');
            const qrPanel = document.getElementById('deposit-qr-panel');
            const qrImage = document.getElementById('deposit-qr-image');

            function closeQrPanel() {
                qrPanel.hidden = true;
                qrButton.setAttribute('aria-expanded', 'false');
                qrButton.textContent = 'Show QR code';
            }

            function updateSelectedNetwork() {
                const selectedOption = networkSelector.selectedOptions[0];
                if (!selectedOption) return;

                const currency = selectedOption.dataset.asset;
                const address = (selectedOption.dataset.address || '').trim();
                const qrUrl = address
                    ? 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + encodeURIComponent(address)
                    : '';
                const confirmations = Number(selectedOption.dataset.confirmations);

                document.getElementById('deposit-title').textContent = 'Deposit ' + currency;
                document.getElementById('deposit-minimum').textContent = selectedOption.dataset.minLabel;
                document.getElementById('deposit-minimum-currency').textContent = currency;
                document.getElementById('deposit-warning-asset').textContent = currency;
                document.getElementById('deposit-warning-network').textContent = selectedOption.dataset.name;
                addressElement.textContent = address || 'Deposit address is not configured for this method.';
                copyButton.disabled = !address;
                qrButton.disabled = !qrUrl;
                qrImage.src = qrUrl;
                closeQrPanel();

                if (selectedOption.dataset.manual === '1') {
                    document.getElementById('deposit-confirmation-copy').textContent = 'This gateway uses manual verification. No on-chain confirmation count is configured; funds are credited after the operator verifies the transfer.';
                } else if (confirmations > 0) {
                    document.getElementById('deposit-confirmation-copy').textContent = 'At least ' + confirmations + ' network confirmations are required before crediting.';
                } else {
                    document.getElementById('deposit-confirmation-copy').textContent = 'The payment provider confirms the transfer; confirmation timing and requirements follow that provider\'s policy.';
                }
            }

            function updateAvailableNetworks() {
                const selectedAsset = assetSelector.value;
                let firstAvailableOption = null;

                networkOptions.forEach(function (option) {
                    const isAvailable = option.dataset.asset === selectedAsset;
                    option.hidden = !isAvailable;
                    if (isAvailable && !firstAvailableOption) firstAvailableOption = option;
                });

                if (firstAvailableOption) {
                    networkSelector.value = firstAvailableOption.value;
                    updateSelectedNetwork();
                }
            }

            assetSelector.addEventListener('change', updateAvailableNetworks);
            networkSelector.addEventListener('change', updateSelectedNetwork);
            qrButton.addEventListener('click', function () {
                const showQr = this.getAttribute('aria-expanded') !== 'true';
                qrPanel.hidden = !showQr;
                this.setAttribute('aria-expanded', String(showQr));
                this.textContent = showQr ? 'Hide QR code' : 'Show QR code';
            });
            copyButton.addEventListener('click', async function () {
                const address = addressElement.textContent.trim();
                if (!address || this.disabled) return;

                let copied = false;
                if (navigator.clipboard && window.isSecureContext) {
                    try {
                        await navigator.clipboard.writeText(address);
                        copied = true;
                    } catch (error) {
                        copied = false;
                    }
                }

                if (!copied) {
                    const copyField = document.createElement('textarea');
                    copyField.value = address;
                    copyField.style.position = 'fixed';
                    copyField.style.opacity = '0';
                    document.body.appendChild(copyField);
                    copyField.select();
                    copied = document.execCommand('copy');
                    copyField.remove();
                }

                copyStatus.textContent = copied ? 'Address copied' : 'Unable to copy address';
            });
            updateAvailableNetworks();
        })();

        document.getElementById('toggle-small-balances')?.addEventListener('click', function () {
            const assetCard = document.querySelector('.asset-holding-card');
            const shouldHideSmallBalances = this.getAttribute('aria-pressed') !== 'true';
            const usdEquivalent = Number(assetCard?.dataset.usdEquivalent);
            const isSmallBalance = Number.isFinite(usdEquivalent) && usdEquivalent < 1;

            if (assetCard) {
                assetCard.hidden = shouldHideSmallBalances && isSmallBalance;
            }

            this.setAttribute('aria-pressed', String(shouldHideSmallBalances));
            this.textContent = shouldHideSmallBalances ? 'Show Small Balances' : 'Hide Small Balances';
        });

        document.getElementById('toggle-balance-vis')?.addEventListener('click', function () {
            const totalEl = document.getElementById('total-assets-val');
            const usdtEl = document.getElementById('usdt-equiv-val');
            const rawVal = totalEl?.getAttribute('data-raw-val') || '0.00';
            const hidden = totalEl?.dataset.hidden === 'true';

            if (hidden) {
                totalEl.innerText = '{{ $general->cur_sym }}' + rawVal;
                usdtEl.innerText = '≈ ' + rawVal + ' USDT';
                totalEl.dataset.hidden = 'false';
                this.setAttribute('aria-pressed', 'false');
                document.querySelectorAll('[data-private-balance]').forEach(function (element) {
                    element.textContent = element.dataset.privateBalance;
                });
            } else {
                totalEl.innerText = '{{ $general->cur_sym }} ••••••';
                usdtEl.innerText = '≈ •••••• USDT';
                totalEl.dataset.hidden = 'true';
                this.setAttribute('aria-pressed', 'true');
                document.querySelectorAll('[data-private-balance]').forEach(function (element) {
                    element.textContent = '••••••';
                });
            }
        });
    </script>
@endsection

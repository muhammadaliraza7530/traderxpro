@extends($activeTemplate . 'layouts.master')

@section('content')
    @php
        $withdrawableBalance = (float) auth()->user()->interest_wallet;
        $withdrawAssets = $withdrawMethod->groupBy(function ($method) {
            return strtoupper($method->currency);
        });
        $firstWithdrawMethod = $withdrawMethod->first();
    @endphp

    <style>
        .withdraw-direct-page {
            width: 100%;
            max-width: 448px;
            min-height: 100dvh;
            margin: 0 auto;
            padding: 18px 16px calc(96px + env(safe-area-inset-bottom));
            background: #F8FAFC;
            color: #0F172A;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .withdraw-direct-page *,
        .withdraw-direct-page *::before,
        .withdraw-direct-page *::after {
            box-sizing: border-box;
        }

        .withdraw-back {
            color: #475569;
            font-size: 12px;
            text-decoration: none;
        }

        .withdraw-title {
            margin: 12px 0 4px;
            color: #0F172A;
            font-size: 21px;
            font-weight: 800;
        }

        .withdraw-subtitle {
            margin: 0;
            color: #64748B;
            font-size: 12px;
        }

        .withdraw-card {
            margin-top: 16px;
            padding: 16px;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .withdraw-balance-label,
        .withdraw-field-label,
        .withdraw-breakdown-label {
            display: block;
            color: #64748B;
            font-size: 11px;
        }

        .withdraw-balance-value {
            display: block;
            margin-top: 4px;
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 22px;
            font-weight: 800;
            font-variant-numeric: tabular-nums;
        }

        .withdraw-step-title {
            margin: 0 0 12px;
            color: #0F172A;
            font-size: 13px;
            font-weight: 700;
        }

        .withdraw-selector-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .withdraw-field-label {
            margin: 0 0 6px;
            color: #334155;
            font-weight: 600;
        }

        .withdraw-control {
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

        .withdraw-control:focus {
            border-color: #3B82F6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, .15);
        }

        .withdraw-control option {
            background: #FFFFFF;
            color: #0F172A;
        }

        .withdraw-limit {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-top: 8px;
            color: #64748B;
            font-size: 10px;
        }

        .withdraw-limit strong,
        .withdraw-breakdown-value {
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            font-weight: 700;
            text-align: right;
        }

        .withdraw-method-fields {
            display: grid;
            gap: 10px;
            margin-top: 14px;
        }

        .withdraw-method-fields .form-group {
            margin: 0;
        }

        .withdraw-method-fields input,
        .withdraw-method-fields textarea,
        .withdraw-method-fields select {
            display: block;
            width: 100%;
            min-height: 44px;
            padding: 10px 12px;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            background: #FFFFFF;
            color: #0F172A;
            font: inherit;
            font-size: 13px;
        }

        .withdraw-method-fields textarea {
            min-height: 80px;
        }

        .withdraw-breakdown {
            display: grid;
            gap: 9px;
            margin-top: 14px;
            padding-top: 12px;
            border-top: 1px solid #E2E8F0;
        }

        .withdraw-breakdown-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .withdraw-breakdown-row:last-child .withdraw-breakdown-label,
        .withdraw-breakdown-row:last-child .withdraw-breakdown-value {
            color: #047857;
            font-weight: 800;
        }

        .withdraw-security-note,
        .withdraw-holiday-note {
            margin-top: 12px;
            padding: 11px 12px;
            border: 1px solid #DBEAFE;
            border-radius: 10px;
            background: #EFF6FF;
            color: #1E40AF;
            font-size: 11px;
            line-height: 1.45;
        }

        .withdraw-holiday-note {
            border-color: #FDE68A;
            background: #FFFBEB;
            color: #92400E;
        }

        .withdraw-submit {
            width: 100%;
            min-height: 46px;
            margin-top: 16px;
            border: 0;
            border-radius: 11px;
            background: #2563EB;
            color: #FFFFFF;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
        }

        .withdraw-submit:hover {
            background: #1D4ED8;
        }

        .withdraw-submit:disabled {
            background: #94A3B8;
            cursor: not-allowed;
        }

        @media (max-width: 340px) {
            .withdraw-selector-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>

    <main class="withdraw-direct-page">
        <a class="withdraw-back" href="{{ route('user.deposit.index') }}">&larr; Wallet</a>
        <h1 class="withdraw-title">Withdraw</h1>
        <p class="withdraw-subtitle">Review your payout method, destination, and net amount before continuing.</p>

        <section class="withdraw-card" aria-label="Withdrawable balance">
            <span class="withdraw-balance-label">Available to withdraw</span>
            <strong class="withdraw-balance-value">{{ showAmount($withdrawableBalance) }} {{ $general->cur_text }}</strong>
        </section>

        @if ($isHoliday && !gs()->holiday_withdraw)
            <div class="withdraw-holiday-note" role="status">Withdrawals are unavailable today. Next withdrawal day: {{ $nextWorkingDay }}.</div>
        @endif

        @if ($withdrawMethod->isEmpty())
            <section class="withdraw-card" role="status">No withdrawal methods are currently available.</section>
        @else
            <form id="withdraw-form" class="withdraw-card" action="{{ route('user.withdraw.money') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <h2 class="withdraw-step-title">Payout details</h2>

                <div class="withdraw-selector-grid">
                    <div>
                        <label class="withdraw-field-label" for="withdraw-asset">Asset</label>
                        <select id="withdraw-asset" class="withdraw-control">
                            @foreach ($withdrawAssets as $currency => $methods)
                                <option value="{{ $currency }}">{{ $currency }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div>
                        <label class="withdraw-field-label" for="withdraw-network">Network / method</label>
                        <select id="withdraw-network" class="withdraw-control" required>
                            @foreach ($withdrawMethod as $method)
                                <option value="{{ $method->id }}"
                                    data-currency="{{ strtoupper($method->currency) }}"
                                    data-name="{{ $method->name }}"
                                    data-rate="{{ $method->rate }}"
                                    data-min="{{ $method->min_limit }}"
                                    data-max="{{ $method->max_limit }}"
                                    data-fixed="{{ $method->fixed_charge }}"
                                    data-percent="{{ $method->percent_charge }}"
                                    data-receive-currency="{{ strtoupper($method->currency) }}"
                                    data-fields="withdraw-fields-{{ $method->id }}">
                                    {{ $method->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <input id="withdraw-method-code" type="hidden" name="method_code" value="{{ $firstWithdrawMethod->id }}">

                <div class="withdraw-method-fields" id="withdraw-method-fields" aria-live="polite"></div>

                @foreach ($withdrawMethod as $method)
                    @php($withdrawFormData = optional($method->form)->form_data ?? [])
                    <template id="withdraw-fields-{{ $method->id }}">
                        @include('components.viser-form', ['formData' => $withdrawFormData])
                    </template>
                @endforeach

                <div style="margin-top: 14px;">
                    <label class="withdraw-field-label" for="withdraw-amount">Withdrawal amount ({{ $general->cur_text }})</label>
                    <input id="withdraw-amount" class="withdraw-control" type="number" name="amount" min="{{ $firstWithdrawMethod->min_limit }}" max="{{ $firstWithdrawMethod->max_limit }}" step="any" inputmode="decimal" value="{{ old('amount') }}" required>
                    <div class="withdraw-limit"><span>Limit</span><strong id="withdraw-limit-text">{{ showAmount($firstWithdrawMethod->min_limit) }} – {{ showAmount($firstWithdrawMethod->max_limit) }} {{ $general->cur_text }}</strong></div>
                </div>

                <div class="withdraw-breakdown" aria-live="polite">
                    <div class="withdraw-breakdown-row"><span class="withdraw-breakdown-label">Network fee</span><strong class="withdraw-breakdown-value" id="withdraw-fee">{{ showAmount($firstWithdrawMethod->fixed_charge) }} {{ $general->cur_text }}</strong></div>
                    <div class="withdraw-breakdown-row"><span class="withdraw-breakdown-label">Net after fee</span><strong class="withdraw-breakdown-value" id="withdraw-net">0.00 {{ $general->cur_text }}</strong></div>
                    <div class="withdraw-breakdown-row"><span class="withdraw-breakdown-label">You receive</span><strong class="withdraw-breakdown-value" id="withdraw-receive">0.00 {{ strtoupper($firstWithdrawMethod->currency) }}</strong></div>
                </div>

                @if (auth()->user()->ts)
                    <div class="withdraw-security-note">Google Authenticator verification will be required on the next confirmation step.</div>
                @else
                    <div class="withdraw-security-note">Your destination and withdrawal will be reviewed before funds are sent.</div>
                @endif

                <button class="withdraw-submit" type="submit" @disabled($isHoliday && !gs()->holiday_withdraw)>Review withdrawal</button>
            </form>
        @endif
    </main>

    <script>
        (function () {
            const assetSelect = document.getElementById('withdraw-asset');
            const networkSelect = document.getElementById('withdraw-network');
            const methodCodeInput = document.getElementById('withdraw-method-code');
            const amountInput = document.getElementById('withdraw-amount');
            const fieldContainer = document.getElementById('withdraw-method-fields');
            if (!assetSelect || !networkSelect || !amountInput || !fieldContainer) return;

            const options = Array.from(networkSelect.options);
            const generalCurrency = @json($general->cur_text);
            const formatAmount = value => Number(value || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

            function updateMethod() {
                const option = networkSelect.selectedOptions[0];
                if (!option) return;
                const currency = option.dataset.currency;
                const methodCode = option.value;
                const minimum = Number(option.dataset.min || 0);
                const maximum = Number(option.dataset.max || 0);
                const fixedCharge = Number(option.dataset.fixed || 0);
                const percentCharge = Number(option.dataset.percent || 0);
                const rate = Number(option.dataset.rate || 0);

                methodCodeInput.value = methodCode;
                amountInput.min = minimum;
                amountInput.max = maximum;
                document.querySelector('label[for="withdraw-amount"]').textContent = 'Withdrawal amount (' + generalCurrency + ')';
                document.getElementById('withdraw-limit-text').textContent = formatAmount(minimum) + ' – ' + formatAmount(maximum) + ' ' + generalCurrency;
                const template = document.getElementById(option.dataset.fields);
                fieldContainer.replaceChildren(template.content.cloneNode(true));
                calculateBreakdown();
            }

            function calculateBreakdown() {
                const option = networkSelect.selectedOptions[0];
                if (!option) return;
                const amount = Number(amountInput.value || 0);
                const fixedCharge = Number(option.dataset.fixed || 0);
                const percentCharge = Number(option.dataset.percent || 0);
                const rate = Number(option.dataset.rate || 0);
                const fee = fixedCharge + amount * percentCharge / 100;
                const net = Math.max(0, amount - fee);
                const receive = net * rate;

                document.getElementById('withdraw-fee').textContent = formatAmount(fee) + ' ' + generalCurrency;
                document.getElementById('withdraw-net').textContent = formatAmount(net) + ' ' + generalCurrency;
                document.getElementById('withdraw-receive').textContent = formatAmount(receive) + ' ' + option.dataset.receiveCurrency;
            }

            function updateNetworks() {
                const currency = assetSelect.value;
                let firstAvailable;
                options.forEach(option => {
                    option.hidden = option.dataset.currency !== currency;
                    if (!option.hidden && !firstAvailable) firstAvailable = option;
                });
                if (firstAvailable) {
                    networkSelect.value = firstAvailable.value;
                    updateMethod();
                }
            }

            assetSelect.addEventListener('change', updateNetworks);
            networkSelect.addEventListener('change', updateMethod);
            amountInput.addEventListener('input', calculateBreakdown);
            updateNetworks();
        })();
    </script>
@endsection

@extends($activeTemplate . 'layouts.master')

@section('content')
    @php
        $walletCurrency = strtoupper($general->cur_text);
        $withdrawalDetails = collect($withdraw->withdraw_information ?? []);
    @endphp

    <style>
        .withdraw-confirm-page {
            width: 100%;
            max-width: 448px;
            min-height: 100dvh;
            margin: 0 auto;
            padding: 18px 16px calc(96px + env(safe-area-inset-bottom));
            background: #F8FAFC;
            color: #0F172A;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .withdraw-confirm-page *,
        .withdraw-confirm-page *::before,
        .withdraw-confirm-page *::after {
            box-sizing: border-box;
        }

        .withdraw-confirm-back {
            color: #475569;
            font-size: 12px;
            text-decoration: none;
        }

        .withdraw-confirm-title {
            margin: 12px 0 4px;
            color: #0F172A;
            font-size: 21px;
            font-weight: 800;
        }

        .withdraw-confirm-subtitle {
            margin: 0;
            color: #64748B;
            font-size: 12px;
        }

        .withdraw-confirm-card {
            margin-top: 16px;
            padding: 16px;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .withdraw-confirm-card h2 {
            margin: 0 0 12px;
            color: #0F172A;
            font-size: 13px;
            font-weight: 700;
        }

        .withdraw-review-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 10px 0;
            border-top: 1px solid #E2E8F0;
        }

        .withdraw-review-row dt {
            color: #64748B;
            font-size: 11px;
        }

        .withdraw-review-row dd {
            max-width: 62%;
            margin: 0;
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            font-weight: 700;
            text-align: right;
            overflow-wrap: anywhere;
        }

        .withdraw-review-row.is-receive dd {
            color: #047857;
        }

        .withdraw-destination-value {
            color: #0F172A !important;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 10px !important;
        }

        .withdraw-security-note {
            margin-top: 14px;
            padding: 11px 12px;
            border: 1px solid #DBEAFE;
            border-radius: 10px;
            background: #EFF6FF;
            color: #1E40AF;
            font-size: 11px;
            line-height: 1.45;
        }

        .withdraw-auth-field {
            display: block;
            width: 100%;
            min-height: 44px;
            margin-top: 8px;
            padding: 10px 12px;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            background: #FFFFFF;
            color: #0F172A;
            font: inherit;
            font-size: 14px;
            letter-spacing: .12em;
        }

        .withdraw-auth-field:focus {
            border-color: #3B82F6;
            outline: 3px solid rgba(59, 130, 246, .15);
        }

        .withdraw-confirm-actions {
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 10px;
            margin-top: 16px;
        }

        .withdraw-confirm-actions a,
        .withdraw-confirm-actions button {
            display: flex;
            min-height: 44px;
            align-items: center;
            justify-content: center;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            background: #FFFFFF;
            color: #334155;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
        }

        .withdraw-confirm-actions button {
            border-color: #2563EB;
            background: #2563EB;
            color: #FFFFFF;
            cursor: pointer;
        }

        .withdraw-confirm-actions button:hover {
            background: #1D4ED8;
        }
    </style>

    <main class="withdraw-confirm-page">
        <a class="withdraw-confirm-back" href="{{ route('user.withdraw') }}">&larr; Edit withdrawal</a>
        <h1 class="withdraw-confirm-title">Review withdrawal</h1>
        <p class="withdraw-confirm-subtitle">Confirm the payout destination and receive amount before submitting.</p>

        <section class="withdraw-confirm-card" aria-labelledby="withdraw-review-heading">
            <h2 id="withdraw-review-heading">Withdrawal summary</h2>
            <dl>
                <div class="withdraw-review-row">
                    <dt>Method / network</dt>
                    <dd>{{ $withdraw->method->name }}</dd>
                </div>
                <div class="withdraw-review-row">
                    <dt>Withdrawal amount</dt>
                    <dd>{{ showAmount($withdraw->amount) }} {{ $walletCurrency }}</dd>
                </div>
                <div class="withdraw-review-row">
                    <dt>Network fee</dt>
                    <dd>{{ showAmount($withdraw->charge) }} {{ $walletCurrency }}</dd>
                </div>
                <div class="withdraw-review-row">
                    <dt>Net after fee</dt>
                    <dd>{{ showAmount($withdraw->after_charge) }} {{ $walletCurrency }}</dd>
                </div>
                <div class="withdraw-review-row is-receive">
                    <dt>You receive</dt>
                    <dd>{{ showAmount($withdraw->final_amount) }} {{ strtoupper($withdraw->currency) }}</dd>
                </div>
                @foreach ($withdrawalDetails as $detail)
                    @php
                        $detailValue = data_get($detail, 'value');
                        if (is_array($detailValue)) {
                            $detailValue = implode(', ', $detailValue);
                        }
                    @endphp
                    <div class="withdraw-review-row">
                        <dt>{{ data_get($detail, 'name', 'Destination detail') }}</dt>
                        <dd class="withdraw-destination-value">{{ $detailValue }}</dd>
                    </div>
                @endforeach
            </dl>
        </section>

        <form action="{{ route('user.withdraw.submit') }}" method="POST" enctype="multipart/form-data">
            @csrf
            @if (auth()->user()->ts)
                <section class="withdraw-security-note">
                    Enter your Google Authenticator code to confirm this withdrawal.
                    <label class="withdraw-field-label" for="authenticator_code" style="display:block;margin-top:10px;font-weight:600;">Authenticator code</label>
                    <input class="withdraw-auth-field" id="authenticator_code" name="authenticator_code" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" required>
                </section>
            @else
                <p class="withdraw-security-note">Your withdrawal will be held for processing after submission. Funds are debited only when you confirm.</p>
            @endif
            <div class="withdraw-confirm-actions">
                <a href="{{ route('user.withdraw') }}">Back</a>
                <button type="submit">Confirm withdrawal</button>
            </div>
        </form>
    </main>
@endsection

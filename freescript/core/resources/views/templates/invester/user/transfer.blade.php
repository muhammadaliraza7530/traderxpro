@extends($activeTemplate . 'layouts.master')

@section('content')
    @php
        $transferCurrency = strtoupper($general->cur_text);
        $depositBalance = (float) $user->deposit_wallet;
        $interestBalance = (float) $user->interest_wallet;
        $transferFixedFee = (float) $general->f_charge;
        $transferPercentFee = (float) $general->p_charge;
    @endphp

    <style>
        .uid-transfer-page {
            width: 100%;
            max-width: 448px;
            min-height: 100dvh;
            margin: 0 auto;
            padding: 18px 16px calc(96px + env(safe-area-inset-bottom));
            background: #F8FAFC;
            color: #0F172A;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .uid-transfer-page *,
        .uid-transfer-page *::before,
        .uid-transfer-page *::after {
            box-sizing: border-box;
        }

        .uid-transfer-back {
            color: #475569;
            font-size: 12px;
            text-decoration: none;
        }

        .uid-transfer-title {
            margin: 12px 0 4px;
            color: #0F172A;
            font-size: 21px;
            font-weight: 800;
        }

        .uid-transfer-subtitle {
            margin: 0;
            color: #64748B;
            font-size: 12px;
            line-height: 1.5;
        }

        .uid-transfer-card {
            margin-top: 16px;
            padding: 16px;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            background: #FFFFFF;
            box-shadow: 0 1px 3px rgba(15, 23, 42, .06);
        }

        .uid-transfer-card h2 {
            margin: 0 0 12px;
            color: #0F172A;
            font-size: 13px;
            font-weight: 700;
        }

        .uid-transfer-label {
            display: block;
            margin: 0 0 6px;
            color: #334155;
            font-size: 11px;
            font-weight: 600;
        }

        .uid-transfer-control {
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

        .uid-transfer-control:focus {
            border-color: #3B82F6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, .15);
        }

        .uid-verify-row {
            display: flex;
            gap: 8px;
        }

        .uid-verify-row .uid-transfer-control {
            min-width: 0;
            flex: 1;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .uid-verify-button,
        .uid-continue-button,
        .uid-confirm-button {
            min-height: 44px;
            padding: 0 15px;
            border: 1px solid #2563EB;
            border-radius: 10px;
            background: #2563EB;
            color: #FFFFFF;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
        }

        .uid-verify-button:hover,
        .uid-continue-button:hover,
        .uid-confirm-button:hover {
            border-color: #1D4ED8;
            background: #1D4ED8;
        }

        .uid-verify-button:disabled,
        .uid-continue-button:disabled,
        .uid-confirm-button:disabled {
            border-color: #94A3B8;
            background: #94A3B8;
            cursor: not-allowed;
        }

        .uid-lookup-status {
            min-height: 16px;
            margin: 6px 0 0;
            color: #B91C1C;
            font-size: 11px;
        }

        .uid-recipient-card {
            display: flex;
            align-items: center;
            gap: 11px;
            margin-top: 12px;
            padding: 12px;
            border: 1px solid #BFDBFE;
            border-radius: 12px;
            background: #EFF6FF;
        }

        .uid-recipient-avatar {
            display: grid;
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
            place-items: center;
            border-radius: 50%;
            background: #DBEAFE;
            color: #1D4ED8;
            font-size: 15px;
            font-weight: 800;
        }

        .uid-recipient-card strong,
        .uid-recipient-card span {
            display: block;
        }

        .uid-recipient-card strong {
            color: #0F172A;
            font-size: 12px;
        }

        .uid-recipient-card span {
            margin-top: 3px;
            color: #475569;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 10px;
        }

        .uid-transfer-fields[hidden],
        .uid-recipient-card[hidden],
        .uid-transfer-modal[hidden] {
            display: none !important;
        }

        .uid-transfer-fields {
            display: grid;
            gap: 14px;
            margin-top: 14px;
        }

        .uid-transfer-available {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-top: 7px;
            color: #64748B;
            font-size: 10px;
        }

        .uid-transfer-available strong {
            color: #334155;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-weight: 600;
        }

        .uid-transfer-breakdown {
            display: grid;
            gap: 9px;
            padding-top: 12px;
            border-top: 1px solid #E2E8F0;
        }

        .uid-transfer-breakdown-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }

        .uid-transfer-breakdown-row span {
            color: #64748B;
            font-size: 11px;
        }

        .uid-transfer-breakdown-row strong {
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            font-weight: 700;
            text-align: right;
        }

        .uid-transfer-breakdown-row.is-receive strong {
            color: #047857;
            font-weight: 800;
        }

        .uid-transfer-note {
            margin: 0;
            padding: 10px 11px;
            border: 1px solid #DBEAFE;
            border-radius: 10px;
            background: #EFF6FF;
            color: #1E40AF;
            font-size: 10px;
            line-height: 1.45;
        }

        .uid-continue-button {
            width: 100%;
        }

        .uid-transfer-modal {
            position: fixed;
            inset: 0;
            z-index: 100;
            display: grid;
            align-items: end;
            justify-items: center;
            padding: 16px 16px calc(16px + env(safe-area-inset-bottom));
            background: rgba(15, 23, 42, .52);
        }

        .uid-transfer-modal-card {
            width: 100%;
            max-width: 416px;
            max-height: calc(100dvh - 32px - env(safe-area-inset-bottom));
            overflow-y: auto;
            padding: 18px;
            border: 1px solid #E2E8F0;
            border-radius: 18px;
            background: #FFFFFF;
            box-shadow: 0 16px 48px rgba(15, 23, 42, .2);
        }

        .uid-transfer-modal-card h2 {
            margin: 0 0 4px;
            color: #0F172A;
            font-size: 17px;
            font-weight: 800;
        }

        .uid-transfer-modal-card > p {
            margin: 0 0 14px;
            color: #64748B;
            font-size: 11px;
        }

        .uid-transfer-review {
            display: grid;
            gap: 0;
            margin: 0;
            padding: 0;
        }

        .uid-transfer-review-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 10px 0;
            border-top: 1px solid #E2E8F0;
        }

        .uid-transfer-review-row dt {
            color: #64748B;
            font-size: 11px;
        }

        .uid-transfer-review-row dd {
            max-width: 62%;
            margin: 0;
            color: #0F172A;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            font-weight: 700;
            text-align: right;
            overflow-wrap: anywhere;
        }

        .uid-transfer-review-row.is-receive dd {
            color: #047857;
        }

        .uid-transfer-modal-actions {
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 9px;
            margin-top: 16px;
        }

        .uid-transfer-cancel {
            min-height: 44px;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            background: #FFFFFF;
            color: #334155;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
        }

        .uid-confirm-button {
            min-height: 44px;
        }

        .uid-2fa-field {
            margin-top: 14px;
        }

        @media (min-width: 700px) {
            .uid-transfer-modal {
                align-items: center;
            }
        }

        @media (max-width: 340px) {
            .uid-verify-row {
                flex-direction: column;
            }
        }
    </style>

    <main class="uid-transfer-page">
        <a class="uid-transfer-back" href="{{ route('user.deposit.index') }}">&larr; Wallet</a>
        <h1 class="uid-transfer-title">Internal transfer</h1>
        <p class="uid-transfer-subtitle">Send funds instantly to another TradeXPro account.</p>

        <form id="uid-transfer-form" class="uid-transfer-card" action="{{ route('user.transfer.balance') }}" method="POST">
            @csrf
            <h2>1. Verify recipient</h2>
            <label class="uid-transfer-label" for="recipient-uid-input">Recipient UID</label>
            <div class="uid-verify-row">
                <input id="recipient-uid-input" class="uid-transfer-control" type="text" placeholder="TXP104582" autocomplete="off" required>
                <button id="verify-recipient-button" class="uid-verify-button" type="button">Verify</button>
            </div>
            <p id="recipient-verify-status" class="uid-lookup-status" role="status" aria-live="polite"></p>

            <section id="verified-recipient" class="uid-recipient-card" hidden aria-live="polite">
                <span class="uid-recipient-avatar" aria-hidden="true">✓</span>
                <div>
                    <strong id="verified-recipient-name"></strong>
                    <span id="verified-recipient-uid"></span>
                </div>
            </section>
            <input id="verified-recipient-id" type="hidden" name="username">

            <section id="uid-transfer-fields" class="uid-transfer-fields" hidden>
                <h2>2. Transfer details</h2>
                <div>
                    <label class="uid-transfer-label" for="transfer-asset">Asset</label>
                    <select id="transfer-asset" class="uid-transfer-control" aria-label="Transfer asset">
                        <option value="{{ strtoupper($general->cur_text) }}">{{ strtoupper($general->cur_text) }}</option>
                    </select>
                </div>
                <div>
                    <label class="uid-transfer-label" for="transfer-source-wallet">From wallet</label>
                    <select id="transfer-source-wallet" class="uid-transfer-control" name="wallet" required>
                        <option value="deposit_wallet" data-balance="{{ getAmount($user->deposit_wallet) }}">Deposit wallet · {{ showAmount($user->deposit_wallet) }} {{ $general->cur_text }}</option>
                        <option value="interest_wallet" data-balance="{{ getAmount($user->interest_wallet) }}">Interest wallet · {{ showAmount($user->interest_wallet) }} {{ $general->cur_text }}</option>
                    </select>
                    <div class="uid-transfer-available"><span>Available</span><strong id="transfer-available-value">{{ showAmount($user->deposit_wallet) }} {{ $general->cur_text }}</strong></div>
                </div>
                <div>
                    <label class="uid-transfer-label" for="transfer-amount">Transfer amount</label>
                    <input id="transfer-amount" class="uid-transfer-control" type="number" name="amount" min="0.01" step="any" inputmode="decimal" autocomplete="off" required>
                </div>
                <div class="uid-transfer-breakdown" aria-live="polite">
                    <div class="uid-transfer-breakdown-row"><span>Transfer fee</span><strong id="transfer-fee-value">{{ showAmount($general->f_charge) }} {{ $general->cur_text }}</strong></div>
                    <div class="uid-transfer-breakdown-row"><span>Total debit</span><strong id="transfer-debit-value">0.00 {{ $general->cur_text }}</strong></div>
                    <div class="uid-transfer-breakdown-row is-receive"><span>You send</span><strong id="transfer-receive-value">0.00 {{ $general->cur_text }}</strong></div>
                </div>
                <p class="uid-transfer-note">Internal transfers are credited to the recipient’s deposit wallet. Review the recipient and total debit before confirming.</p>
                <button id="continue-transfer-button" class="uid-continue-button" type="button">Continue</button>
            </section>

            <section id="transfer-confirm-modal" class="uid-transfer-modal" hidden role="dialog" aria-modal="true" aria-labelledby="transfer-confirm-title">
                <div class="uid-transfer-modal-card">
                    <h2 id="transfer-confirm-title">Confirm transfer</h2>
                    <p>Review the recipient and transfer amounts before sending.</p>
                    <dl class="uid-transfer-review">
                        <div class="uid-transfer-review-row"><dt>Recipient</dt><dd id="review-recipient-name"></dd></div>
                        <div class="uid-transfer-review-row"><dt>Recipient UID</dt><dd id="review-recipient-uid"></dd></div>
                        <div class="uid-transfer-review-row"><dt>Asset</dt><dd id="review-asset"></dd></div>
                        <div class="uid-transfer-review-row"><dt>From wallet</dt><dd id="review-source-wallet"></dd></div>
                        <div class="uid-transfer-review-row"><dt>Amount</dt><dd id="review-amount"></dd></div>
                        <div class="uid-transfer-review-row"><dt>Transfer fee</dt><dd id="review-fee"></dd></div>
                        <div class="uid-transfer-review-row"><dt>Total debit</dt><dd id="review-debit"></dd></div>
                        <div class="uid-transfer-review-row is-receive"><dt>Recipient receives</dt><dd id="review-receive"></dd></div>
                    </dl>
                    @if ($user->ts)
                        <div class="uid-2fa-field">
                            <label class="uid-transfer-label" for="transfer-auth-code">Google Authenticator code</label>
                            <input id="transfer-auth-code" class="uid-transfer-control" name="authenticator_code" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" required>
                        </div>
                    @endif
                    <div class="uid-transfer-modal-actions">
                        <button id="cancel-transfer-confirmation" class="uid-transfer-cancel" type="button">Back</button>
                        <button id="confirm-transfer-button" class="uid-confirm-button" type="submit">Confirm transfer</button>
                    </div>
                </div>
            </section>
        </form>
    </main>

    <script>
        (function () {
            const recipientInput = document.getElementById('recipient-uid-input');
            const verifyButton = document.getElementById('verify-recipient-button');
            const verifyStatus = document.getElementById('recipient-verify-status');
            const recipientCard = document.getElementById('verified-recipient');
            const recipientIdInput = document.getElementById('verified-recipient-id');
            const transferFields = document.getElementById('uid-transfer-fields');
            const walletSelect = document.getElementById('transfer-source-wallet');
            const amountInput = document.getElementById('transfer-amount');
            const form = document.getElementById('uid-transfer-form');
            const modal = document.getElementById('transfer-confirm-modal');
            if (!recipientInput || !verifyButton || !form) return;

            const currency = @json(strtoupper($general->cur_text));
            const fixedFee = Number(@json($transferFixedFee));
            const percentFee = Number(@json($transferPercentFee));
            const csrfToken = @json(csrf_token());
            let verifiedUid = '';
            let verifiedRecipient = null;

            const formatAmount = value => Number(value || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

            function selectedWalletBalance() {
                const option = walletSelect?.selectedOptions[0];
                return Number(option?.dataset.balance || 0);
            }

            function calculateTransfer() {
                if (!amountInput || !walletSelect) return {amount: 0, fee: fixedFee, debit: fixedFee, receive: 0};
                const amount = Number(amountInput.value || 0);
                const fee = fixedFee + amount * percentFee / 100;
                const debit = amount + fee;
                const balance = selectedWalletBalance();

                document.getElementById('transfer-available-value').textContent = formatAmount(balance) + ' ' + currency;
                document.getElementById('transfer-fee-value').textContent = formatAmount(fee) + ' ' + currency;
                document.getElementById('transfer-debit-value').textContent = formatAmount(debit) + ' ' + currency;
                document.getElementById('transfer-receive-value').textContent = formatAmount(amount) + ' ' + currency;

                amountInput.setCustomValidity(debit > balance ? 'Amount plus fee exceeds the selected wallet balance.' : '');
                return {amount, fee, debit, receive: amount};
            }

            function invalidateRecipient() {
                verifiedUid = '';
                verifiedRecipient = null;
                recipientIdInput.value = '';
                recipientCard.hidden = true;
                transferFields.hidden = true;
                verifyStatus.textContent = '';
            }

            recipientInput.addEventListener('input', invalidateRecipient);

            verifyButton.addEventListener('click', async function () {
                const uid = recipientInput.value.trim();
                if (!uid) {
                    verifyStatus.textContent = 'Enter a recipient UID first.';
                    recipientInput.focus();
                    return;
                }

                verifyButton.disabled = true;
                verifyButton.textContent = 'Checking…';
                verifyStatus.textContent = '';

                try {
                    const response = await fetch(@json(route('user.findUser')), {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'X-CSRF-TOKEN': csrfToken
                        },
                        body: new URLSearchParams({username: uid, _token: csrfToken})
                    });
                    const result = await response.json();

                    if (!response.ok || !result.verified) {
                        verifyStatus.textContent = result.message || 'Unable to verify this recipient.';
                        return;
                    }

                    verifiedUid = uid;
                    verifiedRecipient = result.recipient;
                    recipientIdInput.value = uid;
                    document.getElementById('verified-recipient-name').textContent = result.recipient.display_name;
                    document.getElementById('verified-recipient-uid').textContent = result.recipient.masked_uid;
                    recipientCard.hidden = false;
                    transferFields.hidden = false;
                    verifyStatus.textContent = 'Recipient verified.';
                    calculateTransfer();
                } catch (error) {
                    verifyStatus.textContent = 'Could not verify the recipient. Try again.';
                } finally {
                    verifyButton.disabled = false;
                    verifyButton.textContent = 'Verify';
                }
            });

            walletSelect?.addEventListener('change', calculateTransfer);
            amountInput?.addEventListener('input', calculateTransfer);

            document.getElementById('continue-transfer-button')?.addEventListener('click', function () {
                if (!verifiedUid || recipientInput.value.trim() !== verifiedUid) {
                    invalidateRecipient();
                    verifyStatus.textContent = 'Verify this recipient before continuing.';
                    recipientInput.focus();
                    return;
                }

                calculateTransfer();
                if (!form.reportValidity()) return;

                const totals = calculateTransfer();
                document.getElementById('review-recipient-name').textContent = verifiedRecipient.display_name;
                document.getElementById('review-recipient-uid').textContent = verifiedRecipient.masked_uid;
                document.getElementById('review-asset').textContent = currency;
                document.getElementById('review-source-wallet').textContent = walletSelect.selectedOptions[0].textContent.split('·')[0].trim();
                document.getElementById('review-amount').textContent = formatAmount(totals.amount) + ' ' + currency;
                document.getElementById('review-fee').textContent = formatAmount(totals.fee) + ' ' + currency;
                document.getElementById('review-debit').textContent = formatAmount(totals.debit) + ' ' + currency;
                document.getElementById('review-receive').textContent = formatAmount(totals.receive) + ' ' + currency;
                modal.hidden = false;
                document.getElementById('cancel-transfer-confirmation').focus();
            });

            document.getElementById('cancel-transfer-confirmation')?.addEventListener('click', function () {
                modal.hidden = true;
                document.getElementById('continue-transfer-button').focus();
            });

            modal?.addEventListener('click', function (event) {
                if (event.target === modal) modal.hidden = true;
            });

            form.addEventListener('submit', function (event) {
                if (!verifiedUid || recipientInput.value.trim() !== verifiedUid) {
                    event.preventDefault();
                    modal.hidden = true;
                    invalidateRecipient();
                    verifyStatus.textContent = 'Verify this recipient before continuing.';
                    recipientInput.focus();
                    return;
                }
                calculateTransfer();
            });
        })();
    </script>
@endsection

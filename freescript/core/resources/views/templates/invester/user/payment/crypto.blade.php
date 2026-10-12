@extends($activeTemplate.'layouts.master')

@section('content')
    @php
        $isBlockchainGateway = strtolower($deposit->gateway->alias ?? '') === 'blockchain';
        $networkLabel = $isBlockchainGateway ? 'Bitcoin network' : 'network specified by your payment provider';
    @endphp

    <style>
        body.has-invest-main-nav,
        body.has-invest-main-nav #app {
            background: #0B0E11;
        }

        .crypto-deposit-page {
            width: 100%;
            max-width: 448px;
            min-height: 100dvh;
            margin: 0 auto;
            padding: 20px 16px calc(100px + env(safe-area-inset-bottom));
            background: #0B0E11;
            color: #F8FAFC;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .crypto-deposit-page *,
        .crypto-deposit-page *::before,
        .crypto-deposit-page *::after {
            box-sizing: border-box;
        }

        .crypto-deposit-back {
            color: #94A3B8;
            font-size: 12px;
            text-decoration: none;
        }

        .crypto-deposit-page h1 {
            margin: 14px 0 4px;
            color: #F8FAFC;
            font-size: 20px;
            font-weight: 800;
        }

        .crypto-deposit-subtitle {
            margin: 0 0 16px;
            color: #94A3B8;
            font-size: 12px;
        }

        .crypto-deposit-card {
            margin-top: 12px;
            padding: 16px;
            border: 1px solid #293241;
            border-radius: 14px;
            background: #151B26;
        }

        .crypto-deposit-label {
            display: block;
            color: #94A3B8;
            font-size: 11px;
        }

        .crypto-deposit-amount {
            display: block;
            margin-top: 4px;
            color: #F8FAFC;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 20px;
            font-weight: 800;
            font-variant-numeric: tabular-nums;
        }

        .crypto-address-row {
            display: flex;
            align-items: stretch;
            gap: 8px;
            margin-top: 8px;
        }

        .crypto-address {
            min-width: 0;
            flex: 1;
            padding: 11px;
            border: 1px solid #374151;
            border-radius: 9px;
            background: #0B0E11;
            color: #E2E8F0;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 11px;
            line-height: 1.45;
            overflow-wrap: anywhere;
            user-select: text;
        }

        .crypto-copy-button,
        .crypto-qr-button {
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

        .crypto-copy-status {
            min-height: 16px;
            margin-top: 5px;
            color: #34D399;
            font-size: 10px;
        }

        .crypto-qr-button {
            width: 100%;
            margin-top: 12px;
            border-color: #374151;
            background: #1E2634;
            color: #E2E8F0;
        }

        .crypto-qr-panel {
            display: grid;
            min-height: 188px;
            margin-top: 12px;
            place-items: center;
            border-radius: 12px;
            background: #fff;
        }

        .crypto-qr-panel img {
            display: block;
            width: 164px;
            height: 164px;
            object-fit: contain;
        }

        .crypto-network-warning {
            margin-top: 12px;
            padding: 12px;
            border: 1px solid rgba(245, 158, 11, .3);
            border-radius: 11px;
            background: rgba(245, 158, 11, .08);
            color: #FCD34D;
            font-size: 11px;
            line-height: 1.5;
        }

        .crypto-confirmation-note {
            margin: 12px 0 0;
            color: #94A3B8;
            font-size: 11px;
            line-height: 1.5;
        }

        .crypto-wallet-link {
            display: flex;
            min-height: 44px;
            align-items: center;
            justify-content: center;
            margin-top: 14px;
            border: 1px solid #374151;
            border-radius: 10px;
            color: #E2E8F0;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
        }

        @media (max-width: 360px) {
            .crypto-address-row {
                flex-direction: column;
            }
        }
    </style>

    <main class="crypto-deposit-page">
        <a class="crypto-deposit-back" href="{{ route('user.deposit.index') }}">&larr; Wallet</a>
        <h1>Deposit {{ strtoupper($data->currency) }}</h1>
        <p class="crypto-deposit-subtitle">Send the exact amount to the generated address.</p>

        <section class="crypto-deposit-card" aria-label="Deposit payment instructions">
            <span class="crypto-deposit-label">Amount to send</span>
            <strong class="crypto-deposit-amount">{{ $data->amount }} {{ strtoupper($data->currency) }}</strong>

            <span class="crypto-deposit-label" style="margin-top: 16px;">Deposit address</span>
            <div class="crypto-address-row">
                <code id="crypto-deposit-address" class="crypto-address">{{ $data->sendto }}</code>
                <button id="copy-crypto-address" class="crypto-copy-button" type="button">Copy</button>
            </div>
            <p id="crypto-copy-status" class="crypto-copy-status" role="status" aria-live="polite"></p>

            <button id="toggle-crypto-qr" class="crypto-qr-button" type="button" aria-expanded="false" aria-controls="crypto-qr-panel">Show QR code</button>
            <div id="crypto-qr-panel" class="crypto-qr-panel" hidden>
                <img src="{{ $data->img }}" alt="QR code for the deposit address">
            </div>

            <div class="crypto-network-warning" role="note"><strong>Network warning:</strong> Send only {{ strtoupper($data->currency) }} using the {{ $networkLabel }}. Transfers on another network or asset may not be recoverable.</div>
            <p class="crypto-confirmation-note">
                @if ($isBlockchainGateway)
                    Credit is issued after at least 3 Bitcoin network confirmations.
                @else
                    Credit is issued after the selected payment provider confirms the transfer. Confirmation timing and requirements follow that provider's policy.
                @endif
            </p>
        </section>

        <a class="crypto-wallet-link" href="{{ route('user.deposit.index') }}">Return to Wallet</a>
    </main>

    <script>
        document.getElementById('toggle-crypto-qr')?.addEventListener('click', function () {
            const panel = document.getElementById('crypto-qr-panel');
            const showQr = this.getAttribute('aria-expanded') !== 'true';
            panel.hidden = !showQr;
            this.setAttribute('aria-expanded', String(showQr));
            this.textContent = showQr ? 'Hide QR code' : 'Show QR code';
        });

        document.getElementById('copy-crypto-address')?.addEventListener('click', async function () {
            const address = document.getElementById('crypto-deposit-address')?.textContent.trim();
            if (!address) return;

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

            document.getElementById('crypto-copy-status').textContent = copied ? 'Address copied' : 'Unable to copy address';
        });
    </script>

@endsection

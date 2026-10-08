# TradeXPro

TradeXPro is a Flask app with HTML templates, CSS, JavaScript, and Tailwind CSS.

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The app runs at `http://localhost:3000`. On Windows, activate the environment with
`.venv\Scripts\activate` instead.

This is a frontend preview: login, signup, deposits, and withdrawals do not
process accounts or payments.

Binary prediction durations are served by `/api/trading/durations` and can be
configured on the Flask server with `BINARY_ENABLED_DURATIONS`, a comma-separated
list of durations in seconds (for example, `60,180,300`). The default is
`30,60,120,300`.

Trade placement is fail-closed until an authenticated account service is
integrated. Configure `SECRET_KEY`; after authenticating a user, the auth layer
must set `session["user_id"]`. `TRADE_ACCOUNT_PROVIDER(user_id)` must return the
server-side account status, KYC status, and available balance. An atomic
`TRADE_BALANCE_DEBITOR(user_id, total_debit)` callback must reserve/debit funds
and return true only when successful. The browser-provided balance is never
trusted. Limits, active pairs, KYC enforcement, and fees are controlled by
`BINARY_MIN_AMOUNT` (default 10), `BINARY_MAX_AMOUNT` (default 5000),
`BINARY_ACTIVE_PAIRS`, `BINARY_REQUIRE_KYC`, and `BINARY_TRADE_FEE_RATE`.
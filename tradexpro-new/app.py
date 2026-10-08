import json
import math
import os
import secrets
import threading
import time
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from flask import Flask, abort, redirect, render_template, request, send_from_directory, session, url_for

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")
app.config["SITE_NAME"] = os.environ.get("SITE_NAME", "TradeXPro")
app.config["BINARY_PAYOUT_RATE"] = min(100.0, max(1.0, float(os.environ.get("BINARY_PAYOUT_RATE", "95"))))
app.config["BINARY_MIN_AMOUNT"] = float(os.environ.get("BINARY_MIN_AMOUNT", "10"))
app.config["BINARY_MAX_AMOUNT"] = float(os.environ.get("BINARY_MAX_AMOUNT", "5000"))
app.config["BINARY_TRADE_FEE_RATE"] = min(100.0, max(0.0, float(os.environ.get("BINARY_TRADE_FEE_RATE", "0"))))
app.config["BINARY_REQUIRE_KYC"] = os.environ.get("BINARY_REQUIRE_KYC", "false").lower() in {"1", "true", "yes"}
app.config["BINARY_TRADING_ENABLED"] = os.environ.get("BINARY_TRADING_ENABLED", "true").lower() in {"1", "true", "yes"}


def parse_binary_durations(value):
    durations = set()
    for item in value.split(","):
        try:
            seconds = int(item.strip())
        except ValueError:
            continue
        if 15 <= seconds <= 86400:
            durations.add(seconds)
    return sorted(durations) or [30, 60, 120, 300]


app.config["BINARY_ENABLED_DURATIONS"] = parse_binary_durations(
    os.environ.get("BINARY_ENABLED_DURATIONS", "30,60,120,300")
)

binary_trades = {}
binary_trades_lock = threading.RLock()


@app.context_processor
def inject_site_config():
    return {"site_name": app.config["SITE_NAME"]}


def get_binance_reference_price(symbol, at_time_ms=None):
    if at_time_ms is None:
        endpoint = "ticker/price"
        params = {"symbol": symbol}
    else:
        endpoint = "aggTrades"
        params = {"symbol": symbol, "endTime": int(at_time_ms), "limit": 1}

    url = f"https://api.binance.com/api/v3/{endpoint}?{urlencode(params)}"
    request = Request(url, headers={"User-Agent": "TradeXPro-demo/1.0"})
    with urlopen(request, timeout=5) as response:
        payload = json.loads(response.read().decode("utf-8"))

    if at_time_ms is None:
        price = float(payload["price"])
    else:
        eligible_trades = [trade for trade in payload if int(trade.get("T", 0)) <= int(at_time_ms)]
        if not eligible_trades:
            raise ValueError("No Binance trade was available at the expiry time")
        price = float(eligible_trades[-1]["p"])

    if not math.isfinite(price) or price <= 0:
        raise ValueError("Binance returned an invalid market price")
    return price


def get_trade_reference_price(symbol, at_time_ms=None):
    provider = app.config.get("TRADE_PRICE_PROVIDER", get_binance_reference_price)
    return float(provider(symbol, at_time_ms))


def serialize_binary_trade(trade):
    public_fields = (
        "trade_id", "pair", "direction", "amount", "duration", "created_at",
        "expires_at", "entry_price", "payout_rate", "fee", "status", "settled_at",
        "settlement_price", "payout",
    )
    return {field: trade[field] for field in public_fields if field in trade}


def get_authenticated_trade_account():
    user_id = session.get("user_id")
    if not user_id:
        return None, None, ({"error": "Sign in to place a trade."}, 401)

    account_provider = app.config.get("TRADE_ACCOUNT_PROVIDER")
    if not callable(account_provider):
        return None, None, ({"error": "Account verification service is unavailable."}, 503)

    try:
        account = account_provider(user_id)
    except Exception as error:
        app.logger.error("Account lookup failed for %s: %s", user_id, error)
        return None, None, ({"error": "Unable to verify account status."}, 503)
    if not isinstance(account, dict):
        return None, None, ({"error": "Trading account was not found."}, 404)
    if str(account.get("status", "")).lower() != "active":
        return None, None, ({"error": "Your account is not active for trading."}, 403)
    if app.config["BINARY_REQUIRE_KYC"] and str(account.get("kyc_status", "")).lower() != "verified":
        return None, None, ({"error": "Complete KYC verification before trading."}, 403)
    try:
        balance = Decimal(str(account.get("available_balance")))
    except (InvalidOperation, TypeError, ValueError):
        return None, None, ({"error": "Available wallet balance could not be verified."}, 503)
    if not balance.is_finite() or balance < 0:
        return None, None, ({"error": "Available wallet balance is invalid."}, 503)
    return user_id, {**account, "available_balance": balance}, None

DEPOSIT_METHODS = {
    1: {
        "title": "USDT (TON)",
        "currency": "USDT",
        "network": "USDT (TON)",
        "address": "DEMO_ONLY_NOT_A_REAL_ADDRESS",
        "minimum": "50.00 USD",
        "maximum": "2000.00 USD",
        "minimum_amount": 50,
        "maximum_amount": 2000,
        "rate": "1.00 USDT",
    },
    4: {
        "title": "Binance",
        "currency": "ETH",
        "network": "ETH",
        "address": "DEMO_ONLY_NOT_A_REAL_ADDRESS",
        "minimum": "2000.00 USD",
        "maximum": "1000000.00 USD",
        "minimum_amount": 2000,
        "maximum_amount": 1000000,
        "rate": "0.00 ETH",
    },
    5: {
        "title": "Binance",
        "currency": "USDT",
        "network": "USDT",
        "address": "DEMO_ONLY_NOT_A_REAL_ADDRESS",
        "minimum": "50.00 USD",
        "maximum": "1000000.00 USD",
        "minimum_amount": 50,
        "maximum_amount": 1000000,
        "rate": "0.00 USDT",
    },
}

WITHDRAW_METHODS = {
    7: {
        "currency": "USDT",
        "gateway": "USDT (TRC 20)",
        "address_label": "Enter Your (TRC 20) Address",
        "minimum": 5,
        "rate": 1.0,
        "rate_text": "1.00 USDT",
        "fee_percent": 0,
    },
    8: {
        "currency": "USDT",
        "gateway": "USDT (BEP20)",
        "address_label": "Enter Your (BEP20) Address",
        "minimum": 5,
        "rate": 1.0,
        "rate_text": "1.00 USDT",
        "fee_percent": 0,
    },
    9: {
        "currency": "INR",
        "gateway": "Google Pay",
        "address_label": "Enter Your UPI ID",
        "minimum": 5,
        "rate": 0,
        "rate_text": "0.00 INR",
        "fee_percent": 0,
    },
}

TRADING_ASSETS = {
    "USDT": {"name": "TetherUS", "price": 1.0002},
    "BTC": {"name": "Bitcoin / TetherUS", "price": 79974.01},
    "ETH": {"name": "Ethereum / TetherUS", "price": 2720.35},
    "SOL": {"name": "Solana / TetherUS", "price": 145.20},
    "ALGO": {"name": "ALGO / TetherUS", "price": 0.09503},
    "XRP": {"name": "XRP / TetherUS", "price": 1.4187},
    "ADA": {"name": "Cardano / TetherUS", "price": 0.2209},
    "MATIC": {"name": "Polygon / TetherUS", "price": 0.3794},
    "DOGE": {"name": "Dogecoin / TetherUS", "price": 0.0911},
}


def parse_binary_active_pairs(value):
    configured_pairs = value.split(",") if value else [f"{asset}/USDT" for asset in TRADING_ASSETS if asset != "USDT"]
    active_pairs = set()
    for pair in configured_pairs:
        normalized = "".join(pair.upper().split())
        if "/" not in normalized:
            normalized = f"{normalized}/USDT"
        base, quote = normalized.split("/", 1)
        if base in TRADING_ASSETS and base != "USDT" and quote == "USDT":
            active_pairs.add(normalized)
    return active_pairs


app.config["BINARY_ACTIVE_PAIRS"] = parse_binary_active_pairs(os.environ.get("BINARY_ACTIVE_PAIRS", ""))

@app.route("/public/<path:filename>")
def public_file(filename):
    return send_from_directory("public", filename)

@app.route("/logo/<path:filename>")
def logo_file(filename):
    return send_from_directory("public/logo", filename)

@app.route("/")
def hello_world():
    return render_template("index.html", title="Hello")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        return redirect(url_for("dashboard"))
    return render_template("login.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    return redirect(url_for("register"))

@app.route("/register", methods=["GET", "POST"])
@app.route("/register.html", methods=["GET", "POST"])
def register():
    return render_template("register.html")

@app.route("/privacy-policy")
def privacy_policy():
    return render_template("privacy-policy.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/profile")
@app.route("/profile.html")
def profile():
    return render_template("profile.html")

@app.route("/kyc.html")
@app.route("/security.html")
@app.route("/transfer.html")
@app.route("/referral.html")
def profile_feature_preview():
    feature = request.path.rsplit("/", 1)[-1].removesuffix(".html")
    feature_titles = {
        "kyc": "KYC Verification",
        "security": "Security & Password",
        "transfer": "UID Internal Transfer",
        "referral": "Referral / Invite",
    }
    title = feature_titles.get(feature)
    if title is None:
        abort(404)
    return render_template("profile-feature.html", feature_title=title)

@app.route("/transactions.html")
def transaction_history():
    return render_template("wallets.html")

@app.route("/markets")
@app.route("/markets.html")
def markets():
    return render_template("markets.html")

@app.route("/market-detail")
@app.route("/market-detail.html")
def market_detail():
    requested_symbol = request.args.get("symbol", "BTCUSDT")
    symbol = requested_symbol.strip().upper() if isinstance(requested_symbol, str) else "BTCUSDT"
    asset_key = symbol.removesuffix("USDT")
    asset = TRADING_ASSETS.get(asset_key)
    if asset is None:
        symbol = "BTCUSDT"
        asset = TRADING_ASSETS["BTC"]
        asset_key = "BTC"
    pair = request.args.get("pair", f"{asset_key}/USDT") if symbol == requested_symbol.upper() else "BTC/USDT"
    return render_template("market-detail.html", symbol=symbol, pair=pair, asset=asset)

@app.route("/staking")
@app.route("/staking.html")
def staking():
    return render_template("staking.html")

@app.route("/trade.html")
def trade_page():
    symbol = request.args.get("symbol", "BTCUSDT").upper()
    base_symbol = symbol.removesuffix("USDT")
    asset = TRADING_ASSETS.get(base_symbol)
    if asset is None:
        abort(404)
    return render_template("trading.html", symbol=base_symbol, asset=asset, asset_symbols=[key for key in TRADING_ASSETS if key != "USDT"])

@app.route("/trading/<symbol>")
def trading(symbol):
    base_symbol = symbol.upper().removesuffix("USDT")
    asset = TRADING_ASSETS.get(base_symbol)
    if asset is None:
        abort(404)
    return render_template("trading.html", symbol=base_symbol, asset=asset, asset_symbols=[key for key in TRADING_ASSETS if key != "USDT"])

@app.route("/bot-trade")
def bot_trade():
    return render_template("bot-trade.html")

@app.route("/wallets")
def wallets():
    return render_template("wallets.html")

@app.route("/help-and-support")
@app.route("/support.html")
def help_support():
    return render_template("help-support.html")

@app.route("/deposit")
def deposit_methods():
    return render_template("deposit-methods.html")
    
@app.route("/withdraw")
def withdraw_methods():
    return render_template("withdraw-methods.html")

@app.route("/withdraw/confirm/<int:method_id>")
def withdraw_confirm(method_id):
    method = WITHDRAW_METHODS.get(method_id)
    if method is None:
        abort(404)
    return render_template("withdraw-confirm.html", method=method)

@app.route("/deposit/checkout/<int:method_id>")
def deposit_checkout(method_id):
    method = DEPOSIT_METHODS.get(method_id)
    if method is None:
        abort(404)
    return render_template("deposit-checkout.html", method=method)


def format_duration_label(seconds):
    if seconds % 3600 == 0:
        return f"{seconds // 3600}h"
    if seconds % 60 == 0:
        return f"{seconds // 60}m"
    return f"{seconds}s"


@app.route("/api/trading/durations")
def trading_durations():
    return [{
        "label": format_duration_label(seconds),
        "seconds": seconds,
        "enabled": True,
    } for seconds in app.config["BINARY_ENABLED_DURATIONS"]], 200


@app.route("/api/trade/limits")
def trade_limits():
    if not app.config["BINARY_TRADING_ENABLED"]:
        return {"error": "Trading is currently disabled."}, 403
    _, account, error = get_authenticated_trade_account()
    if error:
        return error
    return {
        "min_amount": app.config["BINARY_MIN_AMOUNT"],
        "max_amount": app.config["BINARY_MAX_AMOUNT"],
        "available_balance": float(account["available_balance"]),
        "fee_rate": app.config["BINARY_TRADE_FEE_RATE"],
        "kyc_required": app.config["BINARY_REQUIRE_KYC"],
    }, 200

@app.route("/api/ready")
def readiness():
    return {"ready": True}, 200


@app.route("/api/trade/open", methods=["POST"])
@app.route("/api/trade/place", methods=["POST"])
def open_binary_trade():
    if not app.config["BINARY_TRADING_ENABLED"]:
        return {"error": "Trading is currently disabled."}, 403
    user_id, account, error = get_authenticated_trade_account()
    if error:
        return error

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return {"error": "A JSON trade intent is required."}, 400

    pair = "".join(str(payload.get("pair", "")).upper().split())
    pair_parts = pair.split("/")
    if len(pair_parts) != 2 or pair_parts[1] != "USDT":
        return {"error": "Select a supported USDT trading pair."}, 400
    base_asset = pair_parts[0]
    if pair not in app.config["BINARY_ACTIVE_PAIRS"]:
        return {"error": "This market is not currently enabled for trading."}, 400

    direction = str(payload.get("direction", "")).upper()
    if direction not in {"CALL", "PUT"}:
        return {"error": "Direction must be CALL or PUT."}, 400

    try:
        amount = Decimal(str(payload.get("amount")))
        duration = int(payload.get("duration"))
        raw_duration = float(payload.get("duration"))
    except (InvalidOperation, TypeError, ValueError):
        return {"error": "Amount and duration must be numeric."}, 400
    if not amount.is_finite() or not math.isfinite(raw_duration):
        return {"error": "Amount and duration must be finite numbers."}, 400
    minimum_amount = Decimal(str(app.config["BINARY_MIN_AMOUNT"]))
    maximum_amount = Decimal(str(app.config["BINARY_MAX_AMOUNT"]))
    if amount < minimum_amount:
        return {"error": f"Minimum trade amount is {minimum_amount} USDT."}, 400
    if amount > maximum_amount:
        return {"error": f"Maximum trade amount is {maximum_amount} USDT."}, 400
    if raw_duration != duration or duration not in app.config["BINARY_ENABLED_DURATIONS"]:
        return {"error": "This prediction duration is not enabled."}, 400

    fee_rate = Decimal(str(app.config["BINARY_TRADE_FEE_RATE"]))
    fee = (amount * fee_rate / Decimal("100")).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    total_debit = amount + fee
    if total_debit > account["available_balance"]:
        return {"error": "Amount exceeds available balance after trade fees."}, 400

    balance_debitor = app.config.get("TRADE_BALANCE_DEBITOR")
    if not callable(balance_debitor):
        return {"error": "Wallet debit service is unavailable."}, 503

    symbol = f"{base_asset}USDT"
    try:
        entry_price = get_trade_reference_price(symbol)
    except (OSError, ValueError, KeyError, TypeError) as error:
        app.logger.warning("Unable to get entry price for %s: %s", symbol, error)
        return {"error": "Live market price is temporarily unavailable."}, 503

    try:
        debit_succeeded = balance_debitor(user_id, total_debit)
    except Exception as error:
        app.logger.error("Wallet debit failed for user %s: %s", user_id, error)
        return {"error": "Unable to reserve funds for this trade."}, 503
    if not debit_succeeded:
        return {"error": "Amount exceeds available balance."}, 400

    created_at = int(time.time() * 1000)
    trade = {
        "trade_id": secrets.token_urlsafe(24),
        "pair": pair,
        "symbol": symbol,
        "direction": direction,
        "amount": float(amount.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)),
        "fee": float(fee),
        "duration": duration,
        "duration_seconds": duration,
        "created_at": created_at,
        "expires_at": created_at + duration * 1000,
        "entry_price": entry_price,
        "payout_rate": app.config["BINARY_PAYOUT_RATE"],
        "status": "ACTIVE",
        "user_id": user_id,
    }
    with binary_trades_lock:
        binary_trades[trade["trade_id"]] = trade
    return {"trade": serialize_binary_trade(trade)}, 201


@app.route("/api/trade/settle", methods=["POST"])
def settle_binary_trade():
    user_id = session.get("user_id")
    if not user_id:
        return {"error": "Sign in to settle this trade."}, 401
    payload = request.get_json(silent=True)
    trade_id = payload.get("trade_id") if isinstance(payload, dict) else None
    if not isinstance(trade_id, str) or not trade_id:
        return {"error": "A trade_id is required."}, 400

    with binary_trades_lock:
        trade = binary_trades.get(trade_id)
        if trade is None:
            return {"error": "Trade not found."}, 404
        if trade["user_id"] != user_id:
            return {"error": "Trade not found."}, 404
        if trade["status"] != "ACTIVE":
            return {
                "status": trade["status"],
                "payout": trade["payout"],
                "settlementPrice": trade["settlement_price"],
                "settledAt": trade["settled_at"],
            }, 200
        now = int(time.time() * 1000)
        if now < trade["expires_at"]:
            return {
                "status": "PENDING",
                "retry_after_ms": trade["expires_at"] - now,
            }, 409
        symbol = trade["symbol"]
        expiry_time = trade["expires_at"]

    try:
        settlement_price = get_trade_reference_price(symbol, expiry_time)
    except (OSError, ValueError, KeyError, TypeError) as error:
        app.logger.warning("Unable to settle trade %s: %s", trade_id, error)
        return {"error": "Authoritative settlement price is temporarily unavailable."}, 503

    with binary_trades_lock:
        trade = binary_trades.get(trade_id)
        if trade is None:
            return {"error": "Trade not found."}, 404
        if trade["user_id"] != user_id:
            return {"error": "Trade not found."}, 404
        if trade["status"] != "ACTIVE":
            return {
                "status": trade["status"],
                "payout": trade["payout"],
                "settlementPrice": trade["settlement_price"],
                "settledAt": trade["settled_at"],
            }, 200

        won = (
            trade["direction"] == "CALL" and settlement_price > trade["entry_price"]
        ) or (
            trade["direction"] == "PUT" and settlement_price < trade["entry_price"]
        )
        trade["status"] = "WIN" if won else "LOSS"
        trade["settlement_price"] = settlement_price
        trade["settled_at"] = int(time.time() * 1000)
        trade["payout"] = round(trade["amount"] * (1 + trade["payout_rate"] / 100), 2) if won else 0.0
        return {
            "status": trade["status"],
            "payout": trade["payout"],
            "settlementPrice": trade["settlement_price"],
            "settledAt": trade["settled_at"],
        }, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)

#!/usr/bin/env python3
"""Build the static frontend bundle used by Vercel."""

from pathlib import Path
import shutil
import sys


ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"

sys.path.insert(0, str(ROOT))
from app import app


PAGES = {
    "/": "index.html",
    "/login": "login.html",
    "/signup": "signup.html",
    "/register": "register.html",
    "/register.html": "register.html",
    "/privacy-policy": "privacy-policy.html",
    "/dashboard": "dashboard.html",
    "/profile": "profile.html",
    "/profile.html": "profile.html",
    "/kyc.html": "profile-feature.html",
    "/security.html": "profile-feature.html",
    "/transfer.html": "profile-feature.html",
    "/referral.html": "profile-feature.html",
    "/transactions.html": "wallets.html",
    "/markets": "markets.html",
    "/markets.html": "markets.html",
    "/staking": "staking.html",
    "/staking.html": "staking.html",
    "/trading/BTC": "trading.html",
    "/bot-trade": "bot-trade.html",
    "/wallets": "wallets.html",
    "/help-and-support": "help-support.html",
    "/support.html": "help-support.html",
    "/deposit": "deposit-methods.html",
    "/withdraw": "withdraw-methods.html",
    "/withdraw/confirm/7": "withdraw-confirm.html",
    "/deposit/checkout/1": "deposit-checkout.html",
}


def copy_files(source, destination):
    destination.mkdir(parents=True, exist_ok=True)
    for item in source.rglob("*"):
        if item.is_file():
            target = destination / item.relative_to(source)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(item, target)


def render_pages(client):
    for path, filename in PAGES.items():
        response = client.get(path, follow_redirects=True)
        if response.status_code != 200:
            raise RuntimeError(f"Could not render {path}: HTTP {response.status_code}")
        (DIST / filename).write_text(response.get_data(as_text=True))


def main():
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True, exist_ok=True)

    copy_files(ROOT / "static", DIST / "static")
    copy_files(ROOT / "public", DIST / "public")
    render_pages(app.test_client())
    print(f"Built {len(PAGES)} pages and static assets in {DIST}")


if __name__ == "__main__":
    main()

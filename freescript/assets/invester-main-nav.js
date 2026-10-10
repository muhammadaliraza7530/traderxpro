(function () {
    'use strict';

    const destinations = window.investMainNavigation;
    if (!destinations) return;

    const navItems = [
        {
            label: 'Home',
            key: 'home',
            icon: '<path d="m3 10 9-7 9 7"></path><path d="M5 9v12h14V9"></path><path d="M9 21v-7h6v7"></path>'
        },
        {
            label: 'Markets',
            key: 'markets',
            icon: '<path d="M3 3v18h18"></path><path d="m7 14 4-4 4 3 6-7"></path>'
        },
        {
            label: 'Trade',
            key: 'trade',
            icon: '<path d="M7 7h13l-4-4"></path><path d="M17 17H4l4 4"></path><path d="M20 7v5"></path><path d="M4 17v-5"></path>'
        },
        {
            label: 'Staking',
            key: 'staking',
            icon: '<ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v5c0 1.7 3.6 3 8 3s8-1.3 8-3V6"></path><path d="M4 11v5c0 1.7 3.6 3 8 3 2.2 0 4.2-.4 5.8-1"></path>'
        },
        {
            label: 'Wallet',
            key: 'wallet',
            icon: '<rect x="3" y="5" width="18" height="15" rx="2"></rect><path d="M3 9h18"></path><path d="M16 15h2"></path><path d="M7 5V3h11"></path>'
        }
    ];

    function routePath(route) {
        return new URL(route, window.location.origin).pathname;
    }

    function isActive(key, currentPath) {
        if (key === 'home') {
            return currentPath === routePath(destinations.home) && window.location.hash !== '#markets';
        }

        if (key === 'markets') {
            return destinations.activeMarkets || currentPath === routePath(destinations.markets);
        }

        if (key === 'wallet') {
            return currentPath === routePath(destinations.wallet) ||
                currentPath.startsWith('/user/deposit') ||
                currentPath.startsWith('/user/withdraw');
        }

        if (key === 'staking') {
            return currentPath.startsWith(routePath(destinations.staking));
        }

        return currentPath === routePath(destinations[key]);
    }

    let navBars = [...document.querySelectorAll('.tab-bar-wrap-44 .tab-bar, .tab-bar-wrap-2 .tab-bar')];
    if (!navBars.length) {
        const nav = document.createElement('nav');
        nav.className = 'tab-bar-wrap tab-bar-wrap-44';
        nav.setAttribute('aria-label', 'Primary navigation');
        nav.innerHTML = '<div class="tab-bar"></div>';
        document.body.append(nav);
        navBars = [nav.querySelector('.tab-bar')];
    }

    document.body.classList.add('has-invest-main-nav');

    navBars.forEach(function (bar) {
        const currentPath = window.location.pathname;
        const fragment = document.createDocumentFragment();

        navItems.forEach(function (item) {
            const wrapper = document.createElement('div');
            wrapper.className = 'tab-item';

            const link = document.createElement('a');
            const active = isActive(item.key, currentPath);
            link.className = active
                ? 'tab-item-inner text-blue-600 font-semibold'
                : 'tab-item-inner text-slate-400';
            link.href = destinations[item.key];
            link.setAttribute('aria-label', item.label);

            if (active) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }

            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            icon.setAttribute('viewBox', '0 0 24 24');
            icon.setAttribute('aria-hidden', 'true');
            icon.classList.add('invest-main-nav__icon');
            icon.innerHTML = item.icon;

            const label = document.createElement('span');
            label.className = 'tab-item-label';
            label.textContent = item.label;

            link.append(icon, label);
            wrapper.append(link);
            fragment.append(wrapper);
        });

        bar.replaceChildren(fragment);
    });
})();
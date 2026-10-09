<header class="sticky top-0 z-50 ml-[calc(50%_-_50vw)] flex w-screen items-center justify-between border-b border-gray-100 bg-white px-4 py-3 font-sans shadow-sm">
    <a href="{{ route('user.home') }}" class="flex items-center gap-2.5">
        <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-md shadow-blue-500/20">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        </span>
        <span class="text-lg font-bold tracking-tight text-gray-900">TradeXPro</span>
    </a>

    <div class="flex items-center gap-3">
        <a href="{{ route('user.transactions') }}" aria-label="Account activity and notifications" title="Account activity"
            class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0" />
            </svg>
            <span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" aria-label="Unread notification"></span>
        </a>

        <a href="{{ route('user.profile.setting') }}" aria-label="Open profile" title="Profile"
            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-all hover:bg-blue-100">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </a>

        <details class="relative">
            <summary aria-label="More account options" class="flex h-10 w-8 cursor-pointer list-none items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="5" r="1.75" />
                    <circle cx="12" cy="12" r="1.75" />
                    <circle cx="12" cy="19" r="1.75" />
                </svg>
            </summary>
            <div class="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                <div class="border-b border-gray-100 px-4 py-3">
                    <p class="truncate text-sm font-semibold text-gray-900">Account &amp; Settings</p>
                    <p class="mt-1 truncate text-xs text-gray-500">UID: {{ auth()->user()->id }}</p>
                </div>
                <a href="{{ route('user.data') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Account details</a>
                <a href="{{ route('user.kyc.form') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">KYC verification</a>
                <a href="{{ route('user.twofactor') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Security</a>
                <a href="{{ route('ticket.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support</a>
                <a href="{{ route('user.change.password') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Change password</a>
            </div>
        </details>
    </div>
</header>
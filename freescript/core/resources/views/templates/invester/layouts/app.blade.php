
    @yield('panel')

    @php
        $cookie = App\Models\Frontend::where('data_keys', 'cookie.data')->first();
        
    @endphp
    @if ($cookie->data_values->status == 1 && !\Cookie::get('gdpr_cookie'))
     
    @endif

    <script src="{{ asset('assets/global/js/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('assets/global/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Pluglin Link -->
    <script src="{{ asset($activeTemplateTrue . 'js/lib/slick.min.js') }}"></script>
    <script src="{{ asset($activeTemplateTrue . 'js/lib/magnific-popup.min.js') }}"></script>
    <script src="{{ asset($activeTemplateTrue . 'js/lib/apexcharts.min.js') }}"></script>

    @stack('script-lib')

    <!-- Main js -->
    <script src="{{ asset($activeTemplateTrue . 'js/main.js') }}"></script>

    @stack('script')

    @include('partials.plugins')

    @include('partials.notify')

    @auth
        <script>
            window.investMainNavigation = {
                home: @json(route('user.home')),
                markets: @json(route('user.markets')),
                activeMarkets: @json(request()->routeIs('user.markets')),
                trade: @json(route('user.trade')),
                staking: @json(route('user.staking.index')),
                wallet: @json(route('user.deposit.index')),
                profile: @json(route('user.profile.setting')),
                account: @json(route('user.data')),
                kyc: @json(route('user.kyc.form')),
                security: @json(route('user.twofactor')),
                support: @json(route('ticket.index')),
                password: @json(route('user.change.password')),
                logout: @json(route('user.logout')),
                uid: @json(auth()->user()->id)
            };
        </script>
        <script src="{{ asset('assets/invester-main-nav.js') }}"></script>
    @endauth

    <script>
        $(".langSel").on("change", function() {
            window.location.href = "{{ route('home') }}/change/" + $(this).val();
        });

        Array.from(document.querySelectorAll('table')).forEach(table => {
            let heading = table.querySelectorAll('thead tr th');
            Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
                Array.from(row.querySelectorAll('td')).forEach((colum, i) => {
                    colum.setAttribute('data-label', heading[i].innerText)
                });
            });
        });

        $.each($('input, select, textarea'), function(i, element) {
            var elementType = $(element);
            if (elementType.attr('type') != 'checkbox') {
                if (element.hasAttribute('required')) {
                    $(element).closest('.form-group').find('label').addClass('required');
                }
            }
        });

        var inputElements = $('[type=text],[type=password],[type=email],[type=number],select,textarea');
        $.each(inputElements, function(index, element) {
            element = $(element);
            element.closest('.form-group').find('label').attr('for', element.attr('name'));
            element.attr('id', element.attr('name'))
        });

        $('.policy').on('click', function() {
            $.get('{{ route('cookie.accept') }}', function(response) {
                $('.cookies-card').addClass('d-none');
            });
        });


        setTimeout(function() {
            $('.cookies-card').removeClass('hide')
        }, 2000);
    </script>
</body>

</html>

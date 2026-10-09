@extends($activeTemplate . 'layouts.app')
@section('panel')
    
<link rel="stylesheet" crossorigin="" href="{{asset ('core/03042324661/r2/assets/index-BHCpr-YS.css')}}">
    <title>MI AIROBOT</title>

    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/LangSelect-BBGxtG58.css')}}">
    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/default-CZ7_3j6Z.css')}}">






    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/index-BS17_dpn.css')}}">

    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/login-pic-DyZs0X57.css')}}">

    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/rechargeSelect-KtMM5hWs.css')}}">

    <link rel="stylesheet" href="{{asset ('core/03042324661/r2/assets/recharge-DtqDBUdt.css')}}">
    @auth
        <link rel="stylesheet" href="{{ asset('assets/invester-main-nav.css') }}">
    @endauth
    @yield('content')

    @php
        $content = getContent('footer.content', true);
    @endphp

@endsection

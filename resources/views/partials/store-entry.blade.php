@php
    $signedIn = data_get($page, 'props.auth.user') !== null;
    $roles = data_get($page, 'props.auth.roles', []);
    $landingVariant = ! $signedIn ? 'guest' : (in_array('owner', $roles, true) ? 'owner' : (in_array('cashier', $roles, true) ? 'cashier' : 'account'));
    $landingHtml = public_path('build/landing/'.$landingVariant.'.html');
@endphp
@if (is_file($landingHtml))
    {!! file_get_contents($landingHtml) !!}
@else
<div class="min-h-dvh bg-[#f3f3ed] text-[#19231f]">
    <header class="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-5">
        <a href="{{ route('home') }}" class="font-heading text-xl font-semibold">Toko Pojok</a>
        <a href="{{ ! $signedIn ? route('login') : (in_array('owner', $roles, true) ? route('dashboard') : (in_array('cashier', $roles, true) ? '/pos' : '/profile')) }}" class="rounded-lg border border-[#dedfd7] bg-white px-4 py-2 text-sm font-semibold">{{ $signedIn ? 'Buka ruang kerja' : 'Masuk pengelola' }}</a>
    </header>
    <main class="mx-auto flex max-w-xl flex-col items-center px-5 py-16 text-center sm:py-24">
        <div class="mb-6 h-16 w-16 rounded-2xl bg-[#19231f]" aria-hidden="true"></div>
        <h1 class="font-heading text-3xl font-semibold sm:text-4xl">Kelola toko, semua dalam satu tempat.</h1>
        <p class="mt-4 text-sm leading-7 text-[#526159]">Dari transaksi di meja kasir sampai pesanan dari pelanggan. Rapikan urusan toko dengan ruang kerja yang saling terhubung.</p>
        @unless ($signedIn)
            <a href="{{ route('register') }}" class="mt-6 rounded-lg bg-[#FFDD00] px-5 py-3 text-sm font-semibold">Buat toko</a>
        @endunless
        <div class="mt-8 w-full rounded-xl border border-[#dedfd7] bg-white p-5 text-left">
            <h2 class="text-sm font-semibold">Datang untuk belanja?</h2>
            <p class="mt-2 text-sm leading-6 text-[#526159]">Buka tautan atau pindai QR dari penjual untuk masuk ke toko yang tepat.</p>
            <a href="{{ route('customer.account') }}" class="mt-4 inline-block text-sm font-semibold">Buka akun pelanggan</a>
        </div>
    </main>
</div>
@endif

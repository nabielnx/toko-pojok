export const PLATFORM_TITLE = 'Toko Pojok | Kasir, Stok, dan Katalog Online';
export const PLATFORM_DESCRIPTION = 'Kelola kasir, stok, dan pesanan dalam satu tempat. Buat toko di Toko Pojok dan bagikan katalog online kepada pelanggan.';

export function landingNavigation(auth) {
    if (!auth?.user) return { href: '/login', label: 'Masuk pengelola', primaryHref: '/register', primaryLabel: 'Buat toko' };
    const owner = auth.roles?.includes('owner');
    const cashier = auth.roles?.includes('cashier');
    const href = owner ? '/dashboard' : cashier ? '/pos' : '/profile';
    const label = owner ? 'Buka dashboard' : cashier ? 'Buka kasir' : 'Buka akun';
    return { href, label, primaryHref: href, primaryLabel: label };
}

import { useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiPackage, FiShoppingBag, FiShoppingCart, FiSmartphone } from 'react-icons/fi';
import { landingNavigation } from '@/Utils/platformLanding';

const previews = [
    { name: 'Kasir', image: 'kasir', alt: 'Halaman POS Kasir asli dengan katalog produk dan tiga barang di keranjang.' },
    { name: 'Stok', image: 'produk', alt: 'Halaman Produk asli untuk mengelola harga dan persediaan barang.' },
    { name: 'Pesanan', image: 'pesanan', alt: 'Halaman Pesanan asli dengan daftar pesanan pelanggan.' },
];
const features = [
    { Icon: FiShoppingCart, title: 'Kasir', text: 'Catat transaksi dan cetak struk.' },
    { Icon: FiPackage, title: 'Stok', text: 'Ubah harga, cek persediaan, dan impor produk.' },
    { Icon: FiSmartphone, title: 'Katalog online', text: 'Bagikan katalog lewat tautan atau QR.' },
];
const steps = ['Daftarkan toko', 'Tambahkan produk', 'Mulai jualan'];

function Wordmark({ LinkComponent = 'a' }) {
    return <LinkComponent href="/" className="landing-wordmark" aria-label="Toko Pojok, beranda"><span className="landing-brand-mark"><FiShoppingBag size={20} aria-hidden="true" /></span><span>Toko<span className="landing-wordmark-second">Pojok</span><span className="landing-brand-dot">.</span></span></LinkComponent>;
}

function AppPreview() {
    const [view, setView] = useState('Kasir');
    const preview = previews.find(item => item.name === view);
    const source = `/images/landing/${preview.image}.webp`;
    return <figure id="preview" className="landing-preview" aria-label="Screenshot asli aplikasi menggunakan data contoh">
        <figcaption className="landing-preview-caption">Tampilan aplikasi <span>Data contoh</span></figcaption>
        <div className="landing-screenshot-window">
            <div className="landing-preview-tabs" role="group" aria-label="Pilih screenshot aplikasi">{previews.map(({ name }) => <button key={name} type="button" aria-pressed={view === name} onClick={() => setView(name)}>{name}</button>)}</div>
            <a className="landing-screenshot-link" href={source} target="_blank" rel="noopener noreferrer" aria-label={`Perbesar screenshot ${view} (buka tab baru)`}>
                <img key={source} src={source} srcSet={`/images/landing/${preview.image}-960.webp 960w, ${source} 1440w`} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1000px) 48vw, 575px" width="1440" height="960" decoding="async" alt={preview.alt} />
                <span>Perbesar<FiArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
        </div>
    </figure>;
}

export default function PlatformLanding({ auth, LinkComponent = 'a' }) {
    const navigation = landingNavigation(auth);
    return <div className="platform-landing">
        <a className="landing-skip-link" href="#konten">Lewati ke konten</a>
        <header className="landing-header landing-container">
            <Wordmark LinkComponent={LinkComponent} />
            <nav aria-label="Navigasi utama"><a href="#fitur" className="landing-nav-link">Fitur</a><a href="#cara-kerja" className="landing-nav-link">Cara mulai</a><LinkComponent href={navigation.href} className="landing-signin">{navigation.label}<FiArrowUpRight size={16} aria-hidden="true" /></LinkComponent></nav>
        </header>
        <main id="konten">
            <section className="landing-hero landing-container" aria-labelledby="landing-heading">
                <div className="landing-hero-copy">
                    <h1 id="landing-heading">Kasir dan katalog<br /><span>untuk tokomu.</span></h1>
                    <p className="landing-lead">Catat penjualan, cek stok, dan terima pesanan dari katalog online.</p>
                    <div className="landing-actions"><LinkComponent className="landing-primary" href={navigation.primaryHref}>{navigation.primaryLabel}<FiArrowRight size={18} aria-hidden="true" /></LinkComponent><a className="landing-secondary" href="#preview">Lihat tampilan<FiArrowUpRight size={16} aria-hidden="true" /></a></div>
                </div>
                <AppPreview />
            </section>
            <section id="fitur" className="landing-features" aria-labelledby="landing-features-heading"><div className="landing-container">
                <h2 id="landing-features-heading">Fitur toko</h2>
                <div className="landing-feature-grid">
                    {features.map(({ Icon, title, text }) => <article key={title}>
                        <Icon className="landing-feature-icon" size={25} aria-hidden="true" />
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>)}
                </div>
            </div></section>
            <section id="cara-kerja" className="landing-start landing-container" aria-labelledby="landing-start-heading">
                <div><h2 id="landing-start-heading">Cara mulai</h2><LinkComponent href={navigation.primaryHref} className="landing-text-link">{navigation.primaryLabel}<FiArrowRight size={17} aria-hidden="true" /></LinkComponent></div>
                <ol>
                    {steps.map((step, index) => <li key={step}>
                        <span className="landing-step-number" aria-hidden="true">0{index + 1}</span>
                        <span>{step}</span>
                    </li>)}
                </ol>
            </section>
            <section className="landing-customer landing-container" aria-labelledby="landing-customer-heading"><div><span className="landing-customer-icon"><FiShoppingBag size={24} aria-hidden="true" /></span><div><h2 id="landing-customer-heading">Untuk pelanggan</h2><p>Buka tautan atau pindai QR dari penjual.</p></div></div><LinkComponent href="/customer/account">Akun pelanggan<FiArrowUpRight size={17} aria-hidden="true" /></LinkComponent></section>
        </main>
        <footer className="landing-footer landing-container"><Wordmark LinkComponent={LinkComponent} /><span>© {new Date().getFullYear()} Toko Pojok</span></footer>
    </div>;
}

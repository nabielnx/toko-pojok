import { useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiCheck, FiPackage, FiShoppingBag, FiShoppingCart, FiSmartphone } from 'react-icons/fi';
import { landingNavigation } from '@/Utils/platformLanding';

const previews = [
    { name: 'Kasir', image: 'kasir', alt: 'Halaman POS Kasir asli dengan katalog produk dan tiga barang di keranjang.' },
    { name: 'Stok', image: 'produk', alt: 'Halaman Produk asli untuk mengelola harga dan persediaan barang.' },
    { name: 'Pesanan', image: 'pesanan', alt: 'Halaman Pesanan asli dengan daftar pesanan pelanggan.' },
];
const features = [
    { Icon: FiShoppingCart, title: 'Layani dari meja kasir.', text: 'Cari barang, susun keranjang, dan catat transaksi langsung dari POS.' },
    { Icon: FiPackage, title: 'Stok lebih mudah diikuti.', text: 'Kelola harga dan persediaan. Gunakan impor atau ekspor saat mengurus banyak produk.' },
    { Icon: FiSmartphone, title: 'Katalog tinggal dibagikan.', text: 'Pelanggan membuka tautan atau QR toko, memilih produk, lalu membuat pesanan.' },
];

function Wordmark({ LinkComponent = 'a' }) {
    return <LinkComponent href="/" className="landing-wordmark" aria-label="Toko Pojok, beranda"><span className="landing-brand-mark"><FiShoppingBag size={20} aria-hidden="true" /></span><span>Toko<span className="landing-wordmark-second">Pojok</span><span className="landing-brand-dot">.</span></span></LinkComponent>;
}

function AppPreview() {
    const [view, setView] = useState('Kasir');
    const preview = previews.find(item => item.name === view);
    const source = `/images/landing/${preview.image}.webp`;
    return <figure id="preview" className="landing-preview" aria-label="Screenshot asli aplikasi menggunakan data contoh">
        <figcaption className="landing-preview-caption"><span><span className="landing-status-dot" />Kenali ruang kerjamu</span><span>TAMPILAN ASLI</span></figcaption>
        <div className="landing-screenshot-window">
            <div className="landing-preview-tabs" role="group" aria-label="Pilih screenshot aplikasi">{previews.map(({ name }) => <button key={name} type="button" aria-pressed={view === name} onClick={() => setView(name)}>{name}</button>)}</div>
            <a className="landing-screenshot-link" href={source} target="_blank" rel="noopener noreferrer" aria-label={`Perbesar screenshot ${view} (buka tab baru)`}>
                <img key={source} src={source} srcSet={`/images/landing/${preview.image}-960.webp 960w, ${source} 1440w`} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1000px) 48vw, 575px" width="1440" height="960" decoding="async" alt={preview.alt} />
                <span>Perbesar tampilan<FiArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
        </div>
        <p className="landing-preview-note">Screenshot asli pengelola toko dengan data contoh.<br />Pilih tab, lalu klik gambar untuk memperbesar.</p>
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
                    <p className="landing-eyebrow"><span />KASIR. STOK. KATALOG.</p>
                    <h1 id="landing-heading">Kelola toko,<br />semua dalam<br /><span>satu tempat.</span></h1>
                    <p className="landing-lead">Dari transaksi di meja kasir sampai pesanan dari pelanggan. Rapikan urusan toko dengan ruang kerja yang saling terhubung.</p>
                    <div className="landing-actions"><LinkComponent className="landing-primary" href={navigation.primaryHref}>{navigation.primaryLabel}<FiArrowRight size={18} aria-hidden="true" /></LinkComponent><a className="landing-secondary" href="#preview">Lihat tampilan<FiArrowUpRight size={16} aria-hidden="true" /></a></div>
                    <p className="landing-hero-note"><FiCheck size={15} aria-hidden="true" />Buka dari browser. Gunakan juga dari ponsel.</p>
                </div>
                <AppPreview />
            </section>
            <section id="fitur" className="landing-features" aria-labelledby="landing-features-heading"><div className="landing-container">
                <div className="landing-section-heading"><p className="landing-eyebrow">URUS TOKO, LEBIH TERATUR</p><h2 id="landing-features-heading">Satu alur, dari barang<br />sampai pesanan.</h2><p>Alat yang kamu perlukan untuk pekerjaan toko sehari-hari.</p></div>
                <div className="landing-feature-grid">{features.map(({ Icon, title, text }, index) => <article key={title}><div className="landing-feature-top"><Icon size={25} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
            </div></section>
            <section id="cara-kerja" className="landing-start landing-container" aria-labelledby="landing-start-heading">
                <div><p className="landing-eyebrow">MULAI DARI TOKOMU</p><h2 id="landing-start-heading">Siapkan sekali.<br />Pakai setiap hari.</h2><LinkComponent href={navigation.primaryHref} className="landing-text-link">{navigation.primaryLabel}<FiArrowRight size={17} aria-hidden="true" /></LinkComponent></div>
                <ol>{[['Buat akun pengelola', 'Daftarkan usaha dan lengkapi identitas tokomu.'], ['Isi produk dan persediaan', 'Tambahkan barang satu per satu atau gunakan file impor.'], ['Mulai jualan dan bagikan katalog', 'Layani dari kasir, lalu bagikan tautan atau QR toko ke pelanggan.']].map(([title, text], index) => <li key={title}><span className="landing-step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
            </section>
            <section className="landing-customer landing-container" aria-labelledby="landing-customer-heading"><div><span className="landing-customer-icon"><FiShoppingBag size={24} aria-hidden="true" /></span><div><h2 id="landing-customer-heading">Datang untuk belanja?</h2><p>Buka tautan atau pindai QR dari penjual untuk masuk ke toko yang tepat.</p></div></div><LinkComponent href="/customer/account">Akun pelanggan<FiArrowUpRight size={17} aria-hidden="true" /></LinkComponent></section>
        </main>
        <footer className="landing-footer landing-container"><Wordmark LinkComponent={LinkComponent} /><p>Ruang kerja untuk urusan toko.</p><span>© {new Date().getFullYear()} Toko Pojok</span></footer>
    </div>;
}

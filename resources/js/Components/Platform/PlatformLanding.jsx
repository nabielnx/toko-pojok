import { useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiCheck, FiClipboard, FiCoffee, FiGrid, FiPackage, FiSearch, FiShoppingBag, FiShoppingCart, FiSmartphone } from 'react-icons/fi';
import { landingNavigation } from '@/Utils/platformLanding';

const products = [
    { name: 'Kopi bubuk 250 g', sku: 'KOP-001', price: 35000, stock: 24, Icon: FiCoffee },
    { name: 'Teh melati', sku: 'TEH-002', price: 18000, stock: 18, Icon: FiPackage },
    { name: 'Gelas keramik', sku: 'GLS-003', price: 25000, stock: 12, Icon: FiShoppingBag },
];
const money = value => `Rp ${value.toLocaleString('id-ID')}`;
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
    return <figure id="preview" className="landing-preview" aria-label="Pratinjau aplikasi menggunakan data contoh">
        <figcaption className="landing-preview-caption"><span><span className="landing-status-dot" />Kenali ruang kerjamu</span><span>DATA CONTOH</span></figcaption>
        <div className="landing-app-window">
            <aside className="landing-app-sidebar" aria-hidden="true"><FiShoppingBag size={22} /><div><span className={view === 'Kasir' ? 'is-current' : ''}><FiShoppingCart size={18} /></span><span className={view === 'Stok' ? 'is-current' : ''}><FiPackage size={18} /></span><span className={view === 'Pesanan' ? 'is-current' : ''}><FiClipboard size={18} /></span></div><span className="landing-avatar">TP</span></aside>
            <div className="landing-app-main">
                <div className="landing-app-topbar"><span>Toko Contoh</span><span className="landing-sample-badge">Pratinjau</span></div>
                <div className="landing-preview-tabs" role="group" aria-label="Pilih tampilan contoh">{['Kasir', 'Stok', 'Pesanan'].map(name => <button key={name} type="button" aria-pressed={view === name} onClick={() => setView(name)}>{name}</button>)}</div>
                <div className="landing-app-content" aria-live="polite" aria-atomic="true">
                    <div className="landing-app-heading"><span>{view === 'Kasir' ? 'Transaksi baru' : view === 'Stok' ? 'Daftar produk' : 'Pesanan pelanggan'}</span><FiGrid size={14} aria-hidden="true" /></div>
                    {view === 'Kasir' && <>
                        <div className="landing-fake-search" aria-hidden="true"><FiSearch size={14} />Nama produk atau SKU</div>
                        <div className="landing-sample-products">{products.map(({ name, price, Icon }) => <div key={name} className="landing-sample-product"><span><Icon size={26} aria-hidden="true" /></span><strong>{name}</strong><small>{money(price)}</small></div>)}</div>
                        <div className="landing-cart-caption"><FiShoppingCart size={14} aria-hidden="true" /><strong>Keranjang</strong><span>3 item</span></div>
                        <div className="landing-cart-lines">{products.map(product => <div key={product.sku}><span>{product.name}</span><span>1 × {money(product.price)}</span></div>)}</div>
                        <div className="landing-sample-total"><span>Total belanja</span><strong>{money(products.reduce((sum, product) => sum + product.price, 0))}</strong></div>
                    </>}
                    {view === 'Stok' && <div className="landing-sample-stock"><div className="landing-stock-head"><span>Produk / SKU</span><span>Stok</span></div>{products.map(product => <div className="landing-stock-row" key={product.sku}><span><strong>{product.name}</strong><small>{product.sku}</small></span><span>{product.stock} pcs</span></div>)}<p><FiCheck size={14} aria-hidden="true" />Harga dan stok dikelola dari satu daftar.</p></div>}
                    {view === 'Pesanan' && <div className="landing-sample-orders">{[['01', 'Pelanggan langsung', 'Menunggu', 'Rp 78.000'], ['02', 'Pesanan katalog', 'Diproses', 'Rp 35.000']].map(([id, name, status, amount]) => <div key={id}><span className="landing-order-number">{id}</span><span><strong>{name}</strong><small>{status}</small></span><strong>{amount}</strong></div>)}<p>Pelanggan pesan dari katalog. Toko menindaklanjuti dari panel pesanan.</p></div>}
                </div>
                <div className="landing-app-bottom"><span className="landing-status-dot" />Ilustrasi tampilan, bukan transaksi nyata.</div>
            </div>
        </div>
        <p className="landing-preview-note">Coba pilih Kasir, Stok, atau Pesanan untuk melihat contohnya.</p>
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

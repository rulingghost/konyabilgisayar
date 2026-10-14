import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import SearchOverlay from './components/SearchOverlay';
import WishlistDrawer from './components/WishlistDrawer';
import CompareModal from './components/CompareModal';

import HomePage from './pages/HomePage';
import ValuationPage from './pages/ValuationPage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicePage from './pages/ServicePage';
import TradeInPage from './pages/TradeInPage';
import CargoPage from './pages/CargoPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CorporatePage from './pages/CorporatePage';
import SpecGuidePage from './pages/SpecGuidePage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';
import QuickContactWidget from './components/QuickContactWidget';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [routeParams, setRouteParams] = useState({});

  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [settings, setSettings] = useState({
    storeName: 'Konya Bilgisayar',
    phone: '0551 045 42 55',
    phoneRaw: '905510454255',
    whatsapp: '905510454255',
    address: 'Feritpaşa Mah. Ahmet Hilmi Nalçacı Cad. No:42/B, Selçuklu / KONYA',
    workingHours: 'Pazartesi - Cumartesi: 09:00 - 20:00 | Pazar: 11:00 - 18:00',
    announcementText: "Konya Selçuklu mağazamızda anında nakit alım! Türkiye'nin her yerinden anlaşmalı kargo ile cihaz alıyoruz.",
    announcementActive: true
  });

  // Sepet / Listem State (LocalStorage destekli)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('kb_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Karşılaştırma State
  const [compareItems, setCompareItems] = useState([]);

  // Modallar
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Verileri çek
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.warn('API fetch failed, will retry or use fallback:', err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (err) {
      console.warn('Blogs fetch failed:', err);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) {
        const data = await res.json();
        setSettings(data);
      }
    } catch (err) {
      console.warn('Settings fetch failed:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchBlogs();
    fetchSettings();
  }, []);

  // Hash route takibi
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim();

      const routeAliases = {
        'laptopum-ne-kadar-eder': { route: 'degerleme', params: { category: 'laptop' } },
        'bilgisayarim-ne-kadar-eder': { route: 'degerleme', params: { category: 'masaustu' } },
        'macbook-alan-yerler': { route: 'degerleme', params: { category: 'macbook' } },
        'oyun-konsolu-alan-yerler': { route: 'degerleme', params: { category: 'konsol' } },
        'ekran-karti-alan-yerler': { route: 'degerleme', params: { category: 'ekran_karti' } },
        'monitor-alan-yerler': { route: 'degerleme', params: { category: 'monitor' } },
        'telefon-alan-yerler': { route: 'degerleme', params: { category: 'iphone' } },
        'tablet-alan-yerler': { route: 'degerleme', params: { category: 'tablet' } },
        'ikinci-el-satilik-urunler': { route: 'urunler', params: {} },
        'turkiye-laptop-alim-merkezi': { route: 'kargo', params: {} },
        'kargo-cihaz-sat': { route: 'kargo', params: {} },
        'toplu-bilgisayar-alan-yerler': { route: 'toplu-alim', params: {} },
        'bilgisayarinizin-ozelliklerini-ogrenin': { route: 'ozellikleri-ogrenin', params: {} },
        'bilgisayar-takas': { route: 'takas', params: {} },
        'servis': { route: 'hizmetler', params: {} },
        'teknik-servis': { route: 'hizmetler', params: {} },
        'kvkk': { route: 'politikalar', params: { tab: 'kvkk' } },
        'cerez-politikasi': { route: 'politikalar', params: { tab: 'cerez' } },
        'iade-kosullari': { route: 'politikalar', params: { tab: 'iade' } },
        'kargo-politikasi': { route: 'politikalar', params: { tab: 'kargo' } }
      };

      if (routeAliases[hash]) {
        setCurrentRoute(routeAliases[hash].route);
        setRouteParams(routeAliases[hash].params || {});
      } else if (hash.startsWith('urun/')) {
        const id = hash.split('/')[1];
        setCurrentRoute('urun-detay');
        setRouteParams({ id });
      } else if (hash.startsWith('blog/')) {
        const slug = hash.split('/')[1];
        setCurrentRoute('blog-detay');
        setRouteParams({ slug });
      } else if (hash) {
        const validRoutes = [
          'home', 'degerleme', 'urunler', 'urun-detay', 'hizmetler', 'takas', 
          'kargo', 'toplu-alim', 'ozellikleri-ogrenin', 'iletisim', 'blog', 
          'blog-detay', 'musteri-hikayeleri', 'hakkimizda', 'politikalar', 'admin'
        ];
        if (validRoutes.includes(hash)) {
          setCurrentRoute(hash);
        } else {
          setCurrentRoute('home');
        }
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigasyon Yönlendirici
  const navigate = (route, params = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
    if (route === 'urun-detay' && params.id) {
      window.location.hash = `#/urun/${params.id}`;
    } else if (route === 'blog-detay' && params.slug) {
      window.location.hash = `#/blog/${params.slug}`;
    } else if (route === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listem (Wishlist) Eylemleri
  const addToWishlist = (product) => {
    let updated;
    if (wishlist.some(p => p.id === product.id)) {
      updated = wishlist.filter(p => p.id !== product.id);
    } else {
      updated = [...wishlist, product];
      setIsWishlistOpen(true);
    }
    setWishlist(updated);
    try {
      localStorage.setItem('kb_wishlist', JSON.stringify(updated));
    } catch (e) {}
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(p => p.id !== id);
    setWishlist(updated);
    try {
      localStorage.setItem('kb_wishlist', JSON.stringify(updated));
    } catch (e) {}
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem('kb_wishlist');
  };

  const isInWishlist = (id) => wishlist.some(p => p.id === id);

  // Karşılaştırma Eylemleri
  const addToCompare = (product) => {
    if (compareItems.some(p => p.id === product.id)) {
      setIsCompareOpen(true);
      return;
    }
    if (compareItems.length >= 3) {
      alert('En fazla 3 ürünü aynı anda karşılaştırabilirsiniz.');
      setIsCompareOpen(true);
      return;
    }
    setCompareItems([...compareItems, product]);
    setIsCompareOpen(true);
  };

  const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter(p => p.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Üst Navigasyon */}
      <Navbar 
        currentRoute={currentRoute}
        navigate={navigate}
        wishlistCount={wishlist.length}
        openWishlist={() => setIsWishlistOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        settings={settings}
      />

      {/* Sayfa İçeriği */}
      <main style={{ flex: 1 }}>
        {currentRoute === 'home' && (
          <HomePage 
            navigate={navigate}
            products={products}
            blogs={blogs}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            isInWishlist={isInWishlist}
            settings={settings}
          />
        )}

        {currentRoute === 'degerleme' && (
          <ValuationPage 
            initialCategory={routeParams.category || 'laptop'}
            settings={settings}
            navigate={navigate}
          />
        )}

        {currentRoute === 'urunler' && (
          <CatalogPage 
            products={products}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            isInWishlist={isInWishlist}
            initialCategory={routeParams.category || 'all'}
            settings={settings}
          />
        )}

        {currentRoute === 'urun-detay' && (
          <ProductDetailPage 
            productId={routeParams.id}
            products={products}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            isInWishlist={isInWishlist}
            settings={settings}
          />
        )}

        {currentRoute === 'hizmetler' && (
          <ServicePage settings={settings} />
        )}

        {currentRoute === 'takas' && (
          <TradeInPage 
            products={products}
            targetProductId={routeParams.targetProductId}
            navigate={navigate}
            settings={settings}
          />
        )}

        {currentRoute === 'kargo' && (
          <CargoPage navigate={navigate} settings={settings} />
        )}

        {currentRoute === 'toplu-alim' && (
          <CorporatePage navigate={navigate} settings={settings} />
        )}

        {currentRoute === 'ozellikleri-ogrenin' && (
          <SpecGuidePage navigate={navigate} settings={settings} />
        )}

        {currentRoute === 'iletisim' && (
          <ContactPage settings={settings} />
        )}

        {currentRoute === 'blog' && (
          <BlogListPage 
            blogs={blogs} 
            navigate={navigate} 
          />
        )}

        {currentRoute === 'blog-detay' && (
          <BlogDetailPage 
            slug={routeParams.slug} 
            blogs={blogs} 
            navigate={navigate} 
            settings={settings} 
          />
        )}

        {currentRoute === 'musteri-hikayeleri' && (
          <CustomerStoriesPage navigate={navigate} settings={settings} />
        )}

        {currentRoute === 'hakkimizda' && (
          <AboutPage navigate={navigate} settings={settings} />
        )}

        {currentRoute === 'politikalar' && (
          <PoliciesPage initialTab={routeParams.tab || 'kargo'} settings={settings} />
        )}

        {currentRoute === 'admin' && (
          <AdminPage 
            products={products}
            onRefreshProducts={fetchProducts}
            blogs={blogs}
            onRefreshBlogs={fetchBlogs}
            settings={settings}
            onUpdateSettings={setSettings}
          />
        )}
      </main>

      {/* Alt Footer */}
      <Footer navigate={navigate} settings={settings} />

      {/* Mobil Alt Çubuk */}
      <StickyMobileBar navigate={navigate} settings={settings} />

      {/* Arama Modalı */}
      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
        products={products}
        blogs={blogs}
      />

      {/* Listem Çekmecesi */}
      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveItem={removeFromWishlist}
        onClear={clearWishlist}
        navigate={navigate}
        settings={settings}
      />

      {/* Karşılaştırma Modalı */}
      <CompareModal 
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        items={compareItems}
        onRemoveItem={removeFromCompare}
        navigate={navigate}
      />

      {/* Hızlı Arama & WhatsApp Mesajlaşma Widget'ı */}
      <QuickContactWidget settings={settings} />

      {/* KVKK Çerez Tercihleri Bannerı */}
      <CookieBanner navigate={navigate} />
    </div>
  );
}

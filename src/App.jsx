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
import initialProducts from '../server/data/products.json';
import initialBlogs from '../server/data/blogs.json';

const ROUTE_ALIASES = {
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
  'admin': { route: 'edmin', params: {} },
  'servis': { route: 'home', params: {} },
  'teknik-servis': { route: 'home', params: {} },
  'kvkk': { route: 'politikalar', params: { tab: 'kvkk' } },
  'cerez-politikasi': { route: 'politikalar', params: { tab: 'cerez' } },
  'iade-kosullari': { route: 'politikalar', params: { tab: 'iade' } },
  'kargo-politikasi': { route: 'politikalar', params: { tab: 'kargo' } }
};

const VALID_ROUTES = [
  'home', 'degerleme', 'urunler', 'urun-detay', 'takas', 
  'kargo', 'toplu-alim', 'ozellikleri-ogrenin', 'iletisim', 'blog', 
  'blog-detay', 'musteri-hikayeleri', 'hakkimizda', 'politikalar', 'edmin'
];

// URL'den temiz rota ve parametreleri çözümleme (HTML5 History API)
function parseCurrentPath() {
  if (typeof window === 'undefined') {
    return { route: 'home', params: {} };
  }

  // Eski hash yapısıyla (/#/...) gelen ziyaretçileri temiz URL'e yükselt
  if (window.location.hash && window.location.hash.length > 1) {
    const hashClean = window.location.hash.replace(/^#\/?/, '').trim();
    if (hashClean) {
      const upgradePath = '/' + hashClean;
      window.history.replaceState(null, '', upgradePath);
    }
  }

  const pathname = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '').trim();
  const searchParams = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(searchParams.entries());

  if (!pathname) {
    return { route: 'home', params: queryParams };
  }

  if (ROUTE_ALIASES[pathname]) {
    return { 
      route: ROUTE_ALIASES[pathname].route, 
      params: { ...(ROUTE_ALIASES[pathname].params || {}), ...queryParams } 
    };
  }

  if (pathname.startsWith('urun/')) {
    const id = pathname.split('/')[1];
    return { route: 'urun-detay', params: { id, ...queryParams } };
  }

  if (pathname.startsWith('blog/')) {
    const slug = pathname.split('/')[1];
    return { route: 'blog-detay', params: { slug, ...queryParams } };
  }

  if (VALID_ROUTES.includes(pathname)) {
    return { route: pathname, params: queryParams };
  }

  return { route: 'home', params: queryParams };
}

export default function App() {
  const initialResolved = parseCurrentPath();
  const [currentRoute, setCurrentRoute] = useState(initialResolved.route);
  const [routeParams, setRouteParams] = useState(initialResolved.params);

  const [products, setProducts] = useState(initialProducts || []);
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [settings, setSettings] = useState({
    storeName: 'Konya Bilgisayar',
    phone: '0551 045 42 55',
    phoneRaw: '905510454255',
    whatsapp: '905510454255',
    address: 'Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G, Selçuklu / KONYA',
    mapEmbedUrl: 'https://maps.google.com/maps?q=37.91163,32.49081+(Konya+Bilgisayar+-+T%C3%BCybek+%C3%87ar%C5%9F%C4%B1s%C4%B1+No:9G)&t=&z=18&ie=UTF8&iwloc=B&output=embed',
    workingHours: 'Pazartesi - Cumartesi: 09:00 - 20:00 (Lütfen Gelmeden Önce Randevu Alınız)',
    announcementText: "Konya Selçuklu Tüybek Çarşısı mağazamızda randevulu anında nakit alım! Türkiye'nin her yerinden anlaşmalı kargo ile cihaz alıyoruz.",
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

  // Temiz URL (HTML5 History API) takibi & popstate
  useEffect(() => {
    const handlePopState = () => {
      const { route, params } = parseCurrentPath();
      setCurrentRoute(route);
      setRouteParams(params);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Modern HTML5 Navigasyon Yönlendirici (Temiz URL - No Hash #)
  const navigate = (route, params = {}) => {
    let targetPath = '/';
    const queryParams = { ...params };

    if (route === 'admin') {
      route = 'edmin';
    }

    if (route === 'home') {
      targetPath = '/';
    } else if (route === 'urun-detay' && params.id) {
      targetPath = `/urun/${encodeURIComponent(params.id)}`;
      delete queryParams.id;
    } else if (route === 'blog-detay' && params.slug) {
      targetPath = `/blog/${encodeURIComponent(params.slug)}`;
      delete queryParams.slug;
    } else {
      targetPath = `/${route}`;
    }

    const searchStr = new URLSearchParams(queryParams).toString();
    const fullUrl = searchStr ? `${targetPath}?${searchStr}` : targetPath;

    window.history.pushState(params, '', fullUrl);
    setCurrentRoute(route);
    setRouteParams(params);
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

        {(currentRoute === 'edmin' || currentRoute === 'admin') && (
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

import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Plus, 
  Trash2, 
  Edit, 
  CheckCircle2, 
  X, 
  Settings, 
  MessageSquare, 
  Wrench, 
  TrendingUp, 
  Lock, 
  LogOut, 
  Save, 
  BookOpen,
  Eye,
  FileText,
  Search
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function AdminPage({ 
  products = [], 
  onRefreshProducts, 
  blogs = [],
  onRefreshBlogs,
  settings = {}, 
  onUpdateSettings 
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('kb_admin_auth') === 'true'
  );
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Sekmeler: 'products', 'blogs', 'valuations', 'services', 'settings'
  const [activeTab, setActiveTab] = useState('products');

  // Değerleme ve Servis Talepleri
  const [valuations, setValuations] = useState([]);
  const [services, setServices] = useState([]);

  // Arama / Filtreleme State
  const [productFilter, setProductFilter] = useState('');
  const [blogFilter, setBlogFilter] = useState('');

  // ==================== ÜRÜN MODAL STATE ====================
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [pTitle, setPTitle] = useState('');
  const [pCategory, setPCategory] = useState('laptop');
  const [pPrice, setPPrice] = useState('');
  const [pStatus, setPStatus] = useState('satilik');
  const [pImage, setPImage] = useState('');
  const [pCpu, setPCpu] = useState('');
  const [pGpu, setPGpu] = useState('');
  const [pRam, setPRam] = useState('');
  const [pStorage, setPStorage] = useState('');
  const [pScreen, setPScreen] = useState('');
  const [pCosmetic, setPCosmetic] = useState('9.5/10 - Çiziksiz, çok temiz');
  const [pWarranty, setPWarranty] = useState('6 Ay Konya Bilgisayar Mağaza Garantisi');
  const [pDesc, setPDesc] = useState('');

  // ==================== BLOG MODAL STATE ====================
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [bTitle, setBTitle] = useState('');
  const [bCategory, setBCategory] = useState('Rehber & Tavsiye');
  const [bImage, setBImage] = useState('');
  const [bExcerpt, setBExcerpt] = useState('');
  const [bContent, setBContent] = useState('');
  const [bReadTime, setBReadTime] = useState('4 dk okuma');
  const [bAuthor, setBAuthor] = useState('Konya Bilgisayar');
  const [bPublished, setBPublished] = useState(true);

  // ==================== AYARLAR STATE ====================
  const [storePhone, setStorePhone] = useState(settings?.phone || '0551 045 42 55');
  const [storeWhatsApp, setStoreWhatsApp] = useState(settings?.whatsapp || '905510454255');
  const [storeAddress, setStoreAddress] = useState(settings?.address || 'Feritpaşa Mah. Nalçacı Cad. No:42/B, Selçuklu / KONYA');
  const [storeHours, setStoreHours] = useState(settings?.workingHours || 'Haftanın her günü: 09:00 - 20:00');
  const [announcementText, setAnnouncementText] = useState(settings?.announcementText || 'Konya Selçuklu mağazamızda anında nakit alım!');
  const [announcementActive, setAnnouncementActive] = useState(settings?.announcementActive !== false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  useEffect(() => {
    if (settings) {
      if (settings.phone) setStorePhone(settings.phone);
      if (settings.whatsapp) setStoreWhatsApp(settings.whatsapp);
      if (settings.address) setStoreAddress(settings.address);
      if (settings.workingHours) setStoreHours(settings.workingHours);
      if (settings.announcementText) setAnnouncementText(settings.announcementText);
      if (settings.announcementActive !== undefined) setAnnouncementActive(settings.announcementActive);
    }
  }, [settings]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchValuations();
      fetchServices();
      if (onRefreshBlogs) onRefreshBlogs();
    }
  }, [isAuthenticated]);

  const fetchValuations = async () => {
    try {
      const res = await fetch('/api/valuations');
      const data = await res.json();
      setValuations(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'konya123' || passwordInput === 'admin123' || passwordInput === '123456') {
      setIsAuthenticated(true);
      localStorage.setItem('kb_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Hatalı şifre! Lütfen şifrenizi kontrol edip tekrar deneyiniz.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('kb_admin_auth');
  };

  // ==================== ÜRÜN İŞLEMLERİ ====================
  const handleOpenNewProduct = () => {
    setEditingProduct(null);
    setPTitle('');
    setPCategory('laptop');
    setPPrice('');
    setPStatus('satilik');
    setPImage('https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80');
    setPCpu('');
    setPGpu('');
    setPRam('');
    setPStorage('');
    setPScreen('');
    setPCosmetic('9.5/10 - Çiziksiz, çok temiz');
    setPWarranty('6 Ay Konya Bilgisayar Mağaza Garantisi');
    setPDesc('');
    setShowProductModal(true);
  };

  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setPTitle(prod.title || '');
    setPCategory(prod.category || 'laptop');
    setPPrice(prod.price || '');
    setPStatus(prod.status || 'satilik');
    setPImage(prod.image || '');
    setPCpu(prod.specs?.['İşlemci'] || '');
    setPGpu(prod.specs?.['Ekran Kartı'] || '');
    setPRam(prod.specs?.['RAM'] || '');
    setPStorage(prod.specs?.['Depolama'] || '');
    setPScreen(prod.specs?.['Ekran'] || '');
    setPCosmetic(prod.specs?.['Kozmetik'] || '9/10');
    setPWarranty(prod.specs?.['Garanti'] || '6 Ay Konya Bilgisayar Garantili');
    setPDesc(prod.description || '');
    setShowProductModal(true);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const specs = {};
    if (pCpu) specs['İşlemci'] = pCpu;
    if (pGpu) specs['Ekran Kartı'] = pGpu;
    if (pRam) specs['RAM'] = pRam;
    if (pStorage) specs['Depolama'] = pStorage;
    if (pScreen) specs['Ekran'] = pScreen;
    if (pCosmetic) specs['Kozmetik'] = pCosmetic;
    if (pWarranty) specs['Garanti'] = pWarranty;
    specs['Test Sonucu'] = 'Sorunsuz, tüm testleri yapıldı';

    const categoryNames = {
      laptop: 'Oyuncu & Ofis Laptop',
      masaustu: 'Masaüstü Bilgisayar',
      macbook: 'MacBook',
      iphone: 'iPhone & Telefon',
      telefon: 'iPhone & Telefon',
      ekran_karti: 'Ekran Kartı (GPU)',
      gpu: 'Ekran Kartı (GPU)',
      konsol: 'PlayStation & Konsol',
      monitor: 'Monitör',
      tablet: 'iPad & Tablet',
      parca: 'Bilgisayar Donanımı'
    };

    const payload = {
      title: pTitle,
      category: pCategory,
      categoryName: categoryNames[pCategory] || pCategory,
      price: Number(pPrice),
      status: pStatus,
      image: pImage || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      specs,
      description: pDesc
    };

    try {
      if (editingProduct) {
        await fetch(`/api/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
      setShowProductModal(false);
      onRefreshProducts();
    } catch (err) {
      console.error(err);
      alert('Ürün kaydedilirken hata oluştu.');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      onRefreshProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleProductStatus = async (prod) => {
    const newStatus = prod.status === 'satilik' ? 'satildi' : 'satilik';
    try {
      await fetch(`/api/products/${prod.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      onRefreshProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // ==================== BLOG İŞLEMLERİ ====================
  const handleOpenNewBlog = () => {
    setEditingBlog(null);
    setBTitle('');
    setBCategory('Rehber & Tavsiye');
    setBImage('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80');
    setBExcerpt('');
    setBContent('');
    setBReadTime('4 dk okuma');
    setBAuthor('Konya Bilgisayar');
    setBPublished(true);
    setShowBlogModal(true);
  };

  const handleOpenEditBlog = (blog) => {
    setEditingBlog(blog);
    setBTitle(blog.title || '');
    setBCategory(blog.category || 'Rehber & Tavsiye');
    setBImage(blog.image || '');
    setBExcerpt(blog.excerpt || '');
    setBContent(blog.content || '');
    setBReadTime(blog.readTime || '4 dk okuma');
    setBAuthor(blog.author || 'Konya Bilgisayar');
    setBPublished(blog.published !== false);
    setShowBlogModal(true);
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    const payload = {
      title: bTitle,
      category: bCategory,
      image: bImage,
      excerpt: bExcerpt,
      content: bContent,
      readTime: bReadTime,
      author: bAuthor,
      published: bPublished
    };

    try {
      if (editingBlog) {
        await fetch(`/api/blogs/${editingBlog.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
      setShowBlogModal(false);
      if (onRefreshBlogs) onRefreshBlogs();
    } catch (err) {
      console.error(err);
      alert('Blog yazısı kaydedilirken hata oluştu.');
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) return;
    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (onRefreshBlogs) onRefreshBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleBlogPublish = async (blog) => {
    const newPublished = !blog.published;
    try {
      await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: newPublished })
      });
      if (onRefreshBlogs) onRefreshBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  // ==================== AYARLAR İŞLEMİ ====================
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    const updated = {
      phone: storePhone,
      phoneRaw: storePhone.replace(/[^0-9]/g, ''),
      whatsapp: storeWhatsApp.replace(/[^0-9]/g, ''),
      address: storeAddress,
      workingHours: storeHours,
      announcementText,
      announcementActive
    };

    try {
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      if (onUpdateSettings) onUpdateSettings(updated);
      setSettingsSaved(true);
      setTimeout(() => setSettingsSaved(false), 3000);
    } catch (err) {
      console.error(err);
      alert('Ayarlar kaydedilirken hata oluştu.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '80px 16px', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'var(--primary-glow)',
            color: 'var(--primary-bright)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <Lock size={28} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '8px' }}>
            Konya Bilgisayar Yönetim Paneli
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Ürün, blog yazısı ve mağaza ayarlarını yönetmek için şifrenizi girin.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ textAlign: 'left', marginBottom: '16px' }}>
              <label className="form-label">Yönetici Şifresi</label>
              <input 
                type="password" 
                placeholder="Şifrenizi girin..."
                className="form-control"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                autoFocus
                required
              />
            </div>

            {loginError && (
              <div style={{ color: '#ef4444', fontSize: '0.84rem', fontWeight: 600, marginBottom: '14px', textAlign: 'left' }}>
                {loginError}
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontWeight: 700, padding: '12px' }}>
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '36px 0 80px', background: 'var(--bg)' }}>
      <div className="container">
        {/* Üst Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-green">Yönetici Aktif</span>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Canlı Yönetim Modu</span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--heading)' }}>
              Konya Bilgisayar Yönetim Paneli
            </h1>
          </div>

          <button onClick={handleLogout} className="btn btn-outline btn-sm" style={{ fontWeight: 600 }}>
            <LogOut size={16} /> Çıkış Yap
          </button>
        </div>

        {/* İstatistik Özet Kartları */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <StatBox label="Kayıtlı Ürün" value={products.length} icon={<Package size={22} />} />
          <StatBox label="Blog Yazıları" value={blogs.length} icon={<BookOpen size={22} />} color="#8b5cf6" />
          <StatBox label="Değerleme Talebi" value={valuations.length} icon={<MessageSquare size={22} />} color="#0b63ce" />
        </div>

        {/* Sekme Butonları */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border)',
          marginBottom: '24px',
          overflowX: 'auto'
        }}>
          <TabButton active={activeTab === 'products'} onClick={() => setActiveTab('products')} icon={<Package size={18} />} label={`Ürünler (${products.length})`} />
          <TabButton active={activeTab === 'blogs'} onClick={() => setActiveTab('blogs')} icon={<BookOpen size={18} />} label={`Blog Yönetimi (${blogs.length})`} />
          <TabButton active={activeTab === 'valuations'} onClick={() => setActiveTab('valuations')} icon={<MessageSquare size={18} />} label={`Değerleme Talepleri (${valuations.length})`} />
          <TabButton active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<Settings size={18} />} label="Site & Mağaza Ayarları" />
        </div>

        {/* ==================== TAB 1: ÜRÜN YÖNETİMİ ==================== */}
        {activeTab === 'products' && (() => {
          const displayedProducts = productFilter.trim()
            ? products.filter(p =>
                (p.title || '').toLowerCase().includes(productFilter.toLowerCase()) ||
                (p.category || '').toLowerCase().includes(productFilter.toLowerCase()) ||
                (p.categoryName || '').toLowerCase().includes(productFilter.toLowerCase()) ||
                (p.sku && String(p.sku).toLowerCase().includes(productFilter.toLowerCase()))
              )
            : products;

          return (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>Ürün Listesi</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Yeni ürün ekleyin veya var olanları düzenleyin.</p>
                </div>
                <button onClick={handleOpenNewProduct} className="btn btn-primary btn-sm" style={{ fontWeight: 700 }}>
                  <Plus size={18} /> Yeni Ürün Ekle
                </button>
              </div>

              {/* Hızlı Arama & Filtre Çubuğu */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', background: '#ffffff', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '240px', maxWidth: '420px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    placeholder="Ürün adı, kod veya kategori ara..."
                    value={productFilter}
                    onChange={(e) => setProductFilter(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 32px 8px 36px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                      fontSize: '0.88rem'
                    }}
                  />
                  {productFilter && (
                    <button
                      onClick={() => setProductFilter('')}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                      title="Temizle"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Toplam {products.length} üründen <strong>{displayedProducts.length}</strong> listeleniyor
                </span>
              </div>

              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', overflowX: 'auto', boxShadow: 'var(--shadow-sm)' }}>
                {displayedProducts.length === 0 ? (
                  <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '6px' }}>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                    {productFilter && (
                      <button onClick={() => setProductFilter('')} className="btn btn-outline btn-sm" style={{ marginTop: '8px' }}>
                        Filtreyi Temizle
                      </button>
                    )}
                  </div>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '14px 16px' }}>Ürün</th>
                        <th style={{ padding: '14px 16px' }}>Kategori</th>
                        <th style={{ padding: '14px 16px' }}>Fiyat</th>
                        <th style={{ padding: '14px 16px', textAlign: 'right' }}>İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedProducts.map(prod => (
                        <tr key={prod.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={prod.image} alt={prod.title} style={{ width: '46px', height: '46px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontWeight: 700, color: 'var(--heading)', fontSize: '0.92rem' }}>{prod.title}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kod: {prod.sku || prod.id}</div>
                            </div>
                          </td>
                          <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>{prod.categoryName || prod.category}</td>
                          <td style={{ padding: '14px 16px', fontWeight: 800, color: 'var(--primary-bright)', fontSize: '1rem' }}>{Number(prod.price).toLocaleString('tr-TR')} TL</td>
                          <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', gap: '6px' }}>
                              <button onClick={() => handleOpenEditProduct(prod)} className="btn btn-outline btn-sm" title="Düzenle" style={{ padding: '6px 10px' }}><Edit size={16} /></button>
                              <button onClick={() => handleDeleteProduct(prod.id)} className="btn btn-sm" title="Sil" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', padding: '6px 10px' }}><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          );
        })()}

        {/* ==================== TAB 2: BLOG YÖNETİMİ ==================== */}
        {activeTab === 'blogs' && (() => {
          const displayedBlogs = blogFilter.trim()
            ? blogs.filter(b =>
                (b.title || '').toLowerCase().includes(blogFilter.toLowerCase()) ||
                (b.category || '').toLowerCase().includes(blogFilter.toLowerCase())
              )
            : blogs;

          return (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>Blog Yazıları Yönetimi</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Sitenizde yayınlanacak rehber ve blog yazılarını ekleyin, düzenleyin veya kaldırın.</p>
                </div>
                <button onClick={handleOpenNewBlog} className="btn btn-primary btn-sm" style={{ fontWeight: 700 }}>
                  <Plus size={18} /> Yeni Blog Yazısı Ekle
                </button>
              </div>

              {/* Blog Arama Çubuğu */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', background: '#ffffff', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '240px', maxWidth: '420px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    placeholder="Blog başlığı veya kategori ara..."
                    value={blogFilter}
                    onChange={(e) => setBlogFilter(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 32px 8px 36px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                      fontSize: '0.88rem'
                    }}
                  />
                  {blogFilter && (
                    <button
                      onClick={() => setBlogFilter('')}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                      title="Temizle"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Toplam {blogs.length} yazıdan <strong>{displayedBlogs.length}</strong> listeleniyor
                </span>
              </div>

              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', overflowX: 'auto', boxShadow: 'var(--shadow-sm)' }}>
                {displayedBlogs.length === 0 ? (
                  <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '6px' }}>Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
                    {blogFilter && (
                      <button onClick={() => setBlogFilter('')} className="btn btn-outline btn-sm" style={{ marginTop: '8px' }}>
                        Filtreyi Temizle
                      </button>
                    )}
                  </div>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '14px 16px' }}>Yazı Başlığı</th>
                        <th style={{ padding: '14px 16px' }}>Kategori</th>
                        <th style={{ padding: '14px 16px' }}>Tarih</th>
                        <th style={{ padding: '14px 16px' }}>Yayın Durumu</th>
                        <th style={{ padding: '14px 16px', textAlign: 'right' }}>İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedBlogs.map(blog => (
                        <tr key={blog.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {blog.image && <img src={blog.image} alt={blog.title} style={{ width: '50px', height: '40px', borderRadius: '6px', objectFit: 'cover' }} />}
                            <div>
                              <div style={{ fontWeight: 700, color: 'var(--heading)' }}>{blog.title}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{blog.readTime || '4 dk okuma'}</div>
                            </div>
                          </td>
                          <td style={{ padding: '14px 16px' }}><span className="badge badge-blue">{blog.category}</span></td>
                          <td style={{ padding: '14px 16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{new Date(blog.createdAt).toLocaleDateString('tr-TR')}</td>
                          <td style={{ padding: '14px 16px' }}>
                            <button 
                              onClick={() => handleToggleBlogPublish(blog)}
                              style={{
                                background: blog.published !== false ? 'rgba(16, 185, 129, 0.12)' : 'rgba(100, 116, 139, 0.12)',
                                color: blog.published !== false ? '#047857' : '#475569',
                                border: 'none',
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                cursor: 'pointer'
                              }}
                            >
                              {blog.published !== false ? '✓ Yayında' : 'Taslak'}
                            </button>
                          </td>
                          <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', gap: '6px' }}>
                              <button onClick={() => handleOpenEditBlog(blog)} className="btn btn-outline btn-sm" title="Düzenle" style={{ padding: '6px 10px' }}><Edit size={16} /></button>
                              <button onClick={() => handleDeleteBlog(blog.id)} className="btn btn-sm" title="Sil" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', padding: '6px 10px' }}><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          );
        })()}

        {/* ==================== TAB 3: DEĞERLEME TALEPLERİ ==================== */}
        {activeTab === 'valuations' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>Gelen Cihaz Değerleme Talepleri</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Kullanıcıların 'Ne Kadar Eder?' sihirbazından gönderdiği cihaz bilgileri.</p>

            {valuations.length === 0 ? (
              <div style={{ background: '#ffffff', padding: '40px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border)' }}>Kayıtlı değerleme talebi yok.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {valuations.map(v => (
                  <div key={v.id} style={{ background: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span className="badge badge-blue">{v.category?.toUpperCase()}</span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--heading)' }}>{v.brandModel || 'Model Belirtilmedi'}</strong>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '6px' }}>{v.specs}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--heading)', fontWeight: 600 }}>Müşteri: {v.customerName} | Tel: <a href={`tel:${v.customerPhone}`} style={{ color: 'var(--primary-bright)' }}>{v.customerPhone}</a></div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary-bright)', marginBottom: '8px' }}>{v.estimatedPrice}</div>
                      <a href={`https://wa.me/${v.customerPhone?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="btn btn-wa btn-sm"><WhatsAppIcon size={16} /> WhatsApp</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== TAB 5: AYARLAR ==================== */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '680px', background: '#ffffff', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>Mağaza & Site Bilgilerini Güncelle</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Tüm sitede anında güncellenir.</p>

            <form onSubmit={handleSaveSettings}>
              <div className="form-group">
                <label className="form-label">Mağaza Telefonu</label>
                <input type="text" className="form-control" value={storePhone} onChange={e => setStorePhone(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp Numarası (Ülke koduyla, örn: 905510454255)</label>
                <input type="text" className="form-control" value={storeWhatsApp} onChange={e => setStoreWhatsApp(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Mağaza Adresi</label>
                <textarea className="form-control" rows="2" value={storeAddress} onChange={e => setStoreAddress(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Çalışma Saatleri</label>
                <input type="text" className="form-control" value={storeHours} onChange={e => setStoreHours(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Duyuru Çubuğu Metni</label>
                <input type="text" className="form-control" value={announcementText} onChange={e => setAnnouncementText(e.target.value)} />
              </div>
              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" id="annActive" checked={announcementActive} onChange={e => setAnnouncementActive(e.target.checked)} />
                <label htmlFor="annActive" style={{ fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>Üst Duyuru Çubuğunu Göster</label>
              </div>

              {settingsSaved && <div style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#047857', padding: '12px', borderRadius: '8px', fontWeight: 600, marginBottom: '16px' }}>✓ Ayarlar başarıyla kaydedildi!</div>}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontWeight: 700, padding: '12px' }}>
                <Save size={18} /> Ayarları Kaydet
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ÜRÜN MODALI */}
      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div style={{ width: '100%', maxWidth: '720px', maxHeight: '90vh', overflowY: 'auto', background: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '32px' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{editingProduct ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}</h3>
              <button onClick={() => setShowProductModal(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveProduct}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Başlık *</label>
                  <input type="text" className="form-control" required value={pTitle} onChange={e => setPTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Kategori *</label>
                  <select className="form-control" value={pCategory} onChange={e => setPCategory(e.target.value)}>
                    <option value="laptop">Laptop / Dizüstü</option>
                    <option value="masaustu">Masaüstü Bilgisayar</option>
                    <option value="macbook">MacBook</option>
                    <option value="iphone">iPhone & Telefon</option>
                    <option value="ekran_karti">Ekran Kartı (GPU)</option>
                    <option value="konsol">PlayStation & Konsol</option>
                    <option value="monitor">Monitör</option>
                    <option value="tablet">iPad & Tablet</option>
                    <option value="parca">Donanım & Parça</option>
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Fiyat (TL) *</label>
                <input type="number" className="form-control" required value={pPrice} onChange={e => setPPrice(e.target.value)} />
              </div>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Görsel URL</label>
                <input type="url" className="form-control" value={pImage} onChange={e => setPImage(e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <input type="text" placeholder="İşlemci" className="form-control" value={pCpu} onChange={e => setPCpu(e.target.value)} />
                <input type="text" placeholder="Ekran Kartı" className="form-control" value={pGpu} onChange={e => setPGpu(e.target.value)} />
                <input type="text" placeholder="RAM" className="form-control" value={pRam} onChange={e => setPRam(e.target.value)} />
                <input type="text" placeholder="Depolama" className="form-control" value={pStorage} onChange={e => setPStorage(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowProductModal(false)} className="btn btn-outline">İptal</button>
                <button type="submit" className="btn btn-primary"><Save size={18} /> Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BLOG MODALI */}
      {showBlogModal && (
        <div className="modal-overlay" onClick={() => setShowBlogModal(false)}>
          <div style={{ width: '100%', maxWidth: '760px', maxHeight: '90vh', overflowY: 'auto', background: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '32px' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{editingBlog ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}</h3>
              <button onClick={() => setShowBlogModal(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveBlog}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Yazı Başlığı *</label>
                <input type="text" className="form-control" required placeholder="Örn: 2026'da İkinci El Laptop Alırken Nelere Dikkat Edilmeli?" value={bTitle} onChange={e => setBTitle(e.target.value)} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Kategori</label>
                  <select className="form-control" value={bCategory} onChange={e => setBCategory(e.target.value)}>
                    <option value="Rehber & Tavsiye">Rehber & Tavsiye</option>
                    <option value="Teknik Servis">Teknik Servis</option>
                    <option value="Apple & Mac">Apple & Mac</option>
                    <option value="Donanım & Parça">Donanım & Parça</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Okuma Süresi</label>
                  <input type="text" className="form-control" placeholder="4 dk okuma" value={bReadTime} onChange={e => setBReadTime(e.target.value)} />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Kapak Görseli URL</label>
                <input type="url" className="form-control" placeholder="https://..." value={bImage} onChange={e => setBImage(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Kısa Özet (Excerpt) *</label>
                <textarea className="form-control" rows="2" placeholder="Yazının listelerde görünecek 1-2 cümlelik özeti..." value={bExcerpt} onChange={e => setBExcerpt(e.target.value)} required />
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">Makale İçeriği (Markdown / Paragraflar Desteklenir) *</label>
                <textarea className="form-control" rows="8" placeholder="Makale içeriğini yazın. Başlıklar için ### Başlık, maddeler için - Madde kullanabilirsiniz..." value={bContent} onChange={e => setBContent(e.target.value)} required />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <input type="checkbox" id="bPublishedCheck" checked={bPublished} onChange={e => setBPublished(e.target.checked)} />
                <label htmlFor="bPublishedCheck" style={{ fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
                  Hemen Yayına Al (İşaretlenmezse taslak olarak kaydedilir)
                </label>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowBlogModal(false)} className="btn btn-outline">İptal</button>
                <button type="submit" className="btn btn-primary"><Save size={18} /> {editingBlog ? 'Yazıyı Güncelle' : 'Yazıyı Yayınla'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon, color = 'var(--primary-bright)' }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>{label}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--heading)' }}>{value}</div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 18px',
        border: 'none',
        borderBottom: active ? '3px solid var(--primary-bright)' : '3px solid transparent',
        background: 'transparent',
        color: active ? 'var(--primary-bright)' : 'var(--text-muted)',
        fontWeight: active ? 800 : 600,
        fontSize: '0.94rem',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all var(--tr-fast)'
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Scale, 
  ArrowUpDown, 
  Laptop, 
  Monitor, 
  Gamepad2, 
  Cpu, 
  Tablet,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  Phone,
  Sparkles,
  ArrowRight,
  X,
  Zap,
  Activity
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CatalogPage({ 
  products = [], 
  navigate, 
  addToWishlist, 
  addToCompare, 
  isInWishlist, 
  initialCategory = 'all',
  settings
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all'); // all, 0-10000, 10000-25000, 25000-45000, 45000+

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  // Kategori Butonları
  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'laptop', label: 'Laptop' },
    { id: 'masaustu', label: 'Masaüstü' },
    { id: 'macbook', label: 'MacBook' },
    { id: 'iphone', label: 'iPhone & Telefon' },
    { id: 'konsol', label: 'PlayStation & Konsol' },
    { id: 'monitor', label: 'Monitör' },
    { id: 'tablet', label: 'iPad & Tablet' },
    { id: 'ekran_karti', label: 'Ekran Kartı & Parça' }
  ];

  // Bütçe Filtreleri
  const pricePills = [
    { id: 'all', label: 'Tüm Bütçeler' },
    { id: 'under-10k', label: '10.000 TL Altı' },
    { id: '10k-25k', label: '10.000 - 25.000 TL' },
    { id: '25k-45k', label: '25.000 - 45.000 TL' },
    { id: 'above-45k', label: '45.000 TL Üzeri' }
  ];

  // Filtreleme
  let filtered = products.filter(p => {
    // Kategori
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    // Fiyat Aralığı
    const price = Number(p.price) || 0;
    if (priceRange === 'under-10k' && price >= 10000) return false;
    if (priceRange === '10k-25k' && (price < 10000 || price > 25000)) return false;
    if (priceRange === '25k-45k' && (price < 25000 || price > 45000)) return false;
    if (priceRange === 'above-45k' && price < 45000) return false;

    // Arama
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = p.title?.toLowerCase().includes(q);
      const inBrand = p.brand?.toLowerCase().includes(q);
      const inSpecs = p.specs && Object.values(p.specs).some(v => String(v).toLowerCase().includes(q));
      if (!inTitle && !inBrand && !inSpecs) return false;
    }
    return true;
  });

  // Sıralama
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  const handleWhatsAppProduct = (p) => {
    const text = `Merhaba Konya Bilgisayar (0551 045 42 55), "${p.title}" (${Number(p.price).toLocaleString('tr-TR')} TL, Kod: ${p.sku || p.id}) ürünü hakkında bilgi almak / satın almak istiyorum. Stok ve ödeme detaylarını öğrenebilir miyim?`;
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ padding: '40px 0 80px', background: 'var(--bg)' }}>
      <div className="container">
        {/* Başlık Alanı */}
        <div style={{ marginBottom: '28px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
            Konya İkinci El Mağazası
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '8px' }}>
            İkinci El Bilgisayar ve Teknoloji Ürünleri
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '780px' }}>
            Tüm ürünler Selçuklu mağazamızda 20 aşamalı donanım testlerinden (FurMark, CrystalDiskInfo, MemTest) geçirilmiştir ve mağaza garantilidir. Elden veya aynı gün kargoyla satın alabilirsiniz.
          </p>
        </div>

        {/* 20 Aşamalı Kontrol & Garanti Güven Rozetleri Çubuğu */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          padding: '14px 20px',
          border: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginBottom: '28px',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--heading)' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--success)' }} />
            <span>20+ Aşamalı Donanım Testi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--heading)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--primary-bright)' }} />
            <span>Konya Bilgisayar Mağaza Garantisi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--heading)' }}>
            <Sparkles size={16} style={{ color: '#ea580c' }} />
            <span>%100 SSD Sağlığı & Orijinal Adaptör</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--heading)' }}>
            <RefreshCw size={16} style={{ color: 'var(--success)' }} />
            <span>Eski Cihazınızla Birebir Takas İmkanı</span>
          </div>
        </div>

        {/* Filtre ve Arama Çubuğu */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 24px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}>
          {/* Üst Kısım: Arama & Sıralama */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px'
          }}>
            {/* Arama Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 16px',
              flex: 1,
              minWidth: '260px',
              position: 'relative'
            }}>
              <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              <input 
                type="text" 
                placeholder="Model, işlemci (i5, Ryzen) veya ekran kartı (RTX 4060) ara..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '0.95rem',
                  paddingRight: searchQuery ? '24px' : 0
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px'
                  }}
                  title="Aramayı Temizle"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sıralama */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <select 
                value={sortBy} 
                onChange={e => setSortBy(e.target.value)}
                className="form-control"
                style={{ width: 'auto', padding: '9px 14px', fontSize: '0.88rem', fontWeight: 600 }}
              >
                <option value="newest">En Yeniler</option>
                <option value="price-asc">Fiyata Göre: Düşükten Yükseğe</option>
                <option value="price-desc">Fiyata Göre: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>

          {/* Kategori Butonları (Stok Sayılı) */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '14px' }}>
            {categories.map(cat => {
              const count = cat.id === 'all' 
                ? products.length 
                : products.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--primary-bright)' : 'var(--border)',
                    background: selectedCategory === cat.id ? 'var(--primary-bright)' : '#ffffff',
                    color: selectedCategory === cat.id ? '#ffffff' : 'var(--text)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all var(--tr-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    fontSize: '0.74rem',
                    background: selectedCategory === cat.id ? 'rgba(255, 255, 255, 0.25)' : 'var(--surface-2)',
                    color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                    padding: '2px 7px',
                    borderRadius: '10px',
                    fontWeight: 800
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bütçe Filtreleri (Fiyat Hapları) */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', marginRight: '4px' }}>
              BÜTÇE:
            </span>
            {pricePills.map(pill => (
              <button
                key={pill.id}
                onClick={() => setPriceRange(pill.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  border: '1px solid',
                  borderColor: priceRange === pill.id ? 'var(--heading)' : 'var(--border)',
                  background: priceRange === pill.id ? 'var(--heading)' : 'var(--surface-2)',
                  color: priceRange === pill.id ? '#ffffff' : 'var(--text)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--tr-fast)'
                }}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sonuç Sayısı ve Sıfırlama */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          <span>Toplam <strong>{filtered.length}</strong> ürün listeleniyor.</span>
          {(selectedCategory !== 'all' || priceRange !== 'all' || searchQuery || onlyAvailable) && (
            <button 
              onClick={() => { setSelectedCategory('all'); setPriceRange('all'); setSearchQuery(''); setOnlyAvailable(false); }}
              style={{ background: 'transparent', border: 'none', color: 'var(--primary-bright)', fontWeight: 700, cursor: 'pointer', fontSize: '0.86rem' }}
            >
              Filtreleri Temizle ✕
            </button>
          )}
        </div>

        {/* Ürün Listesi Grid */}
        {filtered.length === 0 ? (
          <div style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 24px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--heading)', fontWeight: 800, marginBottom: '8px' }}>
              Aramanıza uygun ürün bulunamadı.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Aradığınız model mağaza stoklarımızda henüz listelenmemiş olabilir. WhatsApp hattımıza yazarak depomuzdaki veya yeni gelen cihazlar hakkında anında bilgi alabilirsiniz.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setPriceRange('all'); setOnlyAvailable(false); }}
                className="btn btn-outline btn-sm"
                style={{ fontWeight: 700 }}
              >
                Filtreleri Temizle
              </button>
              <a 
                href={`https://wa.me/${whatsappNum}?text=Merhaba%20Konya%20Bilgisayar%2C%20arad%C4%B1%C4%9F%C4%B1m%20cihaz%C4%B1%20sitede%20bulamad%C4%B1m.%20Yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa btn-sm"
                style={{ fontWeight: 800 }}
              >
                WhatsApp'tan Cihaz Sor (0551 045 42 55)
              </a>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {filtered.map(product => (
              <div 
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--tr-fast)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="product-card-hover"
              >
                {/* Resim & Durum Rozeti */}
                <div style={{ position: 'relative', height: '210px', background: '#f1f5f9' }}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => navigate('urun-detay', { id: product.id })}
                  />

                  {/* Listeme Ekle Butonu */}
                  <button 
                    onClick={() => addToWishlist(product)}
                    title={isInWishlist(product.id) ? "Listeden Çıkar" : "Listeme Ekle"}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: isInWishlist(product.id) ? 'var(--primary-bright)' : 'rgba(255, 255, 255, 0.92)',
                      color: isInWishlist(product.id) ? '#ffffff' : 'var(--heading)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Bookmark size={16} />
                  </button>
                </div>

                {/* İçerik */}
                <div style={{ padding: '18px', display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary-bright)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {product.categoryName || product.category} {product.sku ? `· ${product.sku}` : ''}
                  </div>
                  <h3 
                    onClick={() => navigate('urun-detay', { id: product.id })}
                    style={{ 
                      fontSize: '1.02rem', 
                      fontWeight: 800, 
                      color: 'var(--heading)', 
                      lineHeight: 1.35, 
                      marginBottom: '8px', 
                      cursor: 'pointer',
                      minHeight: '44px'
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Fiyat */}
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--primary-bright)', marginBottom: '12px' }}>
                    {Number(product.price).toLocaleString('tr-TR')} TL
                  </div>

                  {/* 2x2 Donanım Özellikleri Izgarası */}
                  <div className="spec-grid-2x2">
                    <div className="spec-chip-item" title={product.specs?.['İşlemci'] || 'İşlemci'}>
                      <Cpu size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                      <span>{product.specs?.['İşlemci'] ? product.specs['İşlemci'].slice(0, 16) : 'İşlemci'}</span>
                    </div>
                    <div className="spec-chip-item" title={product.specs?.['RAM'] || 'RAM'}>
                      <Zap size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                      <span>{product.specs?.['RAM'] || '16 GB RAM'}</span>
                    </div>
                    <div className="spec-chip-item" title={product.specs?.['Ekran Kartı'] || 'Ekran Kartı'}>
                      <Activity size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                      <span>{product.specs?.['Ekran Kartı'] ? product.specs['Ekran Kartı'].slice(0, 16) : 'Grafik Kartı'}</span>
                    </div>
                    <div className="spec-chip-item" title={product.specs?.['Depolama'] || 'SSD'}>
                      <ShieldCheck size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                      <span>{product.specs?.['Depolama'] ? product.specs['Depolama'].slice(0, 16) : 'SSD Depolama'}</span>
                    </div>
                  </div>

                  {/* WhatsApp Doğrudan Satın Al / Sor Butonu */}
                  <button
                    onClick={() => handleWhatsAppProduct(product)}
                    className="btn btn-wa btn-sm"
                    style={{ width: '100%', marginBottom: '8px', fontWeight: 800, fontSize: '0.84rem' }}
                  >
                    <WhatsAppIcon size={15} /> WhatsApp ile Bilgi Al (0551 045 42 55)
                  </button>

                  {/* Eylem Düğmeleri (İncele, Takas, Karşılaştır) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '6px' }}>
                    <button 
                      onClick={() => navigate('urun-detay', { id: product.id })}
                      className="btn btn-outline btn-sm"
                      style={{ fontWeight: 700, fontSize: '0.82rem', padding: '6px 8px' }}
                    >
                      İncele
                    </button>
                    <button 
                      onClick={() => navigate('takas', { targetProductId: product.id })}
                      className="btn btn-sm"
                      style={{ background: 'var(--surface-2)', color: 'var(--heading)', fontWeight: 700, fontSize: '0.82rem', padding: '6px 8px' }}
                      title="Kendi cihazınızla takas edin"
                    >
                      Takas
                    </button>
                    <button 
                      onClick={() => addToCompare(product)}
                      title="Karşılaştır"
                      className="btn btn-sm"
                      style={{ background: 'var(--surface-2)', color: 'var(--heading)', padding: '0 10px' }}
                    >
                      <Scale size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kalender Bilgisayar Stili "Modelini Bulamadınız mı?" Özel İstek Bannerı */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '36px 32px',
          boxShadow: 'var(--shadow-lg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>
              Özel Cihaz Temini
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '10px' }}>
              Aradığınız Cihazı Listede Bulamadınız mı?
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>
              İstediğiniz bütçeyi (Örn: 20.000 TL), işlemci ve ekran kartı özelliklerini bize WhatsApp'tan yazın. Mağazamıza her gün yeni giren veya depomuzda hazırlık aşamasında olan cihazlardan size en uygun seçenekleri hemen iletelim.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href={`https://wa.me/${whatsappNum}?text=Merhaba%20Konya%20Bilgisayar%2C%20b%C3%BCt%C3%A7eme%20uygun%20cihaz%20aramaktay%C4%B1m.%20Yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
              style={{ width: '100%', padding: '13px', fontWeight: 800, fontSize: '0.98rem' }}
            >
              <WhatsAppIcon size={18} /> WhatsApp'tan Talep Et (0551 045 42 55)
            </a>
            <a 
              href={`tel:${phoneRaw}`}
              className="btn btn-primary"
              style={{ width: '100%', padding: '13px', fontWeight: 800, fontSize: '0.98rem', background: '#16a34a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Phone size={18} /> Telefonla Sor: {phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

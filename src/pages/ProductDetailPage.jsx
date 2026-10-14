import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Phone, 
  Bookmark, 
  Scale, 
  ArrowLeft,
  Star
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ProductDetailPage({ 
  productId, 
  products = [], 
  navigate, 
  addToWishlist, 
  addToCompare, 
  isInWishlist, 
  settings 
}) {
  const product = products.find(p => String(p.id) === String(productId) || p.slug === String(productId)) || products[0];
  const [activeImage, setActiveImage] = useState(product?.image);

  useEffect(() => {
    if (product?.image) {
      setActiveImage(product.image);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Ürün bulunamadı</h2>
        <button onClick={() => navigate('urunler')} className="btn btn-primary" style={{ marginTop: '16px' }}>
          Kataloğa Dön
        </button>
      </div>
    );
  }

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleWhatsAppBuy = () => {
    const phone = settings?.whatsapp || '905510454255';
    const text = `Merhaba Konya Bilgisayar, web sitenizdeki "${product.title}" (${Number(product.price).toLocaleString('tr-TR')} TL, Kod: ${product.sku || product.id}) ürününü satın almak / bilgi almak istiyorum. Stok durumu hakkında bilgi verebilir misiniz?`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleTradeIn = () => {
    navigate('takas', { targetProductId: product.id });
  };

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div style={{ padding: '40px 0 80px', background: 'var(--bg)' }}>
      <div className="container">
        {/* Geri Dön Butonu */}
        <button 
          onClick={() => navigate('urunler')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '24px'
          }}
        >
          <ArrowLeft size={16} /> Tüm Ürünlere Dön
        </button>

        {/* Ana Ürün Kartı Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px'
        }}>
          {/* Sol Kolon: Fotoğraf Galerisi */}
          <div>
            <div style={{
              width: '100%',
              height: '380px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: '#f1f5f9',
              marginBottom: '16px',
              position: 'relative'
            }}>
              <img 
                src={activeImage || product.image} 
                alt={product.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Küçük Görseller */}
            {gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '10px' }}>
                {gallery.map((imgUrl, i) => (
                  <img 
                    key={i}
                    src={imgUrl} 
                    alt={`Görsel ${i + 1}`}
                    onClick={() => setActiveImage(imgUrl)}
                    style={{
                      width: '74px',
                      height: '74px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: activeImage === imgUrl ? '2px solid var(--primary-bright)' : '1px solid var(--border)'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sağ Kolon: Fiyat, Aksiyonlar & Özet */}
          <div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--primary-bright)', textTransform: 'uppercase', marginBottom: '8px' }}>
              {product.categoryName || product.category} · Kod: {product.sku || product.id}
            </div>

            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--heading)', lineHeight: 1.25, marginBottom: '16px' }}>
              {product.title}
            </h1>

            {/* Fiyat Alanı */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border)'
            }}>
              <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary-bright)' }}>
                {Number(product.price).toLocaleString('tr-TR')} TL
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>KDV Dahil / Nakit İndirimi Geçerli</span>
            </div>

            {/* Güvenceler */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', fontSize: '0.9rem', color: 'var(--heading)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--success)' }} />
                <span>20+ Donanım Testinden Başarıyla Geçti (Sorunsuz)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--success)' }} />
                <span>Konya Bilgisayar Mağaza Garantili</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={18} style={{ color: 'var(--success)' }} />
                <span>Selçuklu Mağazamızdan Elden Teslim veya Aynı Gün Kargo</span>
              </div>
            </div>

            {/* Butonlar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <button 
                onClick={handleWhatsAppBuy}
                className="btn btn-wa"
                style={{ fontSize: '1.05rem', padding: '14px', fontWeight: 700 }}
              >
                <WhatsAppIcon size={20} /> WhatsApp ile Satın Al / Bilgi Al (0551 045 42 55)
              </button>

              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn btn-primary"
                style={{
                  fontSize: '1rem',
                  padding: '13px',
                  fontWeight: 800,
                  background: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <Phone size={18} /> Telefonla Bilgi Al: {settings?.phone || '0551 045 42 55'}
              </a>

              <button 
                onClick={handleTradeIn}
                className="btn btn-outline"
                style={{ fontSize: '1rem', padding: '13px', fontWeight: 700 }}
              >
                <RefreshCw size={18} /> Bu Ürünle Kendi Cihazınızı Takas Edin
              </button>
            </div>

            {/* Kaydet & Karşılaştır */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => addToWishlist(product)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '9px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  background: isInWishlist(product.id) ? 'var(--primary-glow)' : 'transparent',
                  color: isInWishlist(product.id) ? 'var(--primary-bright)' : 'var(--text)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Bookmark size={16} /> {isInWishlist(product.id) ? "Listeme Eklendi" : "Listeme Ekle"}
              </button>

              <button 
                onClick={() => addToCompare(product)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '9px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Scale size={16} /> Karşılaştır
              </button>
            </div>
          </div>
        </div>

        {/* Teknik Özellikler Tablosu & Açıklama */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '16px' }}>
            Teknik Özellikler ve Ekspertiz Raporu
          </h2>

          {product.description && (
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              {product.description}
            </p>
          )}

          {product.specs && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {Object.entries(product.specs).map(([key, val]) => (
                <div 
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--surface-2)',
                    fontSize: '0.88rem'
                  }}
                >
                  <strong style={{ color: 'var(--heading)' }}>{key}:</strong>
                  <span style={{ color: 'var(--text-muted)', textAlign: 'right', marginLeft: '12px' }}>{val}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Benzer Ürünler */}
        {related.length > 0 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '20px' }}>
              Benzer Alternatif Ürünler
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {related.map(item => (
                <div 
                  key={item.id}
                  onClick={() => navigate('urun-detay', { id: item.id })}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    padding: '16px'
                  }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--heading)', marginBottom: '6px', lineHeight: 1.3 }}>
                    {item.title}
                  </div>
                  <div style={{ fontWeight: 800, color: 'var(--primary-bright)', fontSize: '1.15rem' }}>
                    {Number(item.price).toLocaleString('tr-TR')} TL
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

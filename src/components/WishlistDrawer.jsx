import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, Bookmark } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  items = [], 
  onRemoveItem, 
  onClear, 
  navigate,
  settings 
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  const handleWhatsAppInquiry = () => {
    if (items.length === 0) return;
    const phone = settings?.whatsapp || '905510454255';
    let text = `Merhaba Konya Bilgisayar (0551 045 42 55), web sitenizdeki şu ${items.length} ürün hakkında bilgi almak istiyorum:\n\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.title} - ${Number(item.price).toLocaleString('tr-TR')} TL (Kod: ${item.sku || item.id})\n`;
    });
    text += `\nToplam Tutar: ${total.toLocaleString('tr-TR')} TL\nStok durumu ve teslimat hakkında bilgi alabilir miyim?`;

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div 
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          background: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideLeft 0.25s ease'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Çekmece Başlığı */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={20} style={{ color: 'var(--primary-bright)' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--heading)' }}>
              Listem ({items.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'var(--surface-2)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Liste Öğeleri */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <Bookmark size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--heading)', marginBottom: '8px' }}>
                Listeniz henüz boş
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
                İncelediğiniz ürünleri "Listeme Ekle" butonuyla buraya kaydedebilir, tek tıkla WhatsApp'tan teklif alabilirsiniz.
              </p>
              <button 
                onClick={() => { onClose(); navigate('urunler'); }}
                className="btn btn-primary btn-sm"
              >
                Ürünleri İncele
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {items.map(item => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: '#ffffff',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div 
                      onClick={() => { onClose(); navigate('urun-detay', { id: item.id }); }}
                      style={{ 
                        fontWeight: 700, 
                        fontSize: '0.9rem', 
                        color: 'var(--heading)', 
                        cursor: 'pointer',
                        lineHeight: 1.3,
                        marginBottom: '4px'
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontWeight: 800, color: 'var(--primary-bright)', fontSize: '0.98rem' }}>
                      {Number(item.price).toLocaleString('tr-TR')} TL
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    title="Listeden Çıkar"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '6px'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Alt Toplam & Eylemler */}
        {items.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid var(--border)',
            background: 'var(--surface-2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Toplam Tutar ({items.length} Ürün):
              </span>
              <strong style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--heading)' }}>
                {total.toLocaleString('tr-TR')} TL
              </strong>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={handleWhatsAppInquiry}
                className="btn btn-wa"
                style={{ width: '100%', fontSize: '0.96rem', fontWeight: 700 }}
              >
                <WhatsAppIcon size={18} /> WhatsApp ile Toplu Teklif Al
              </button>
              
              <button 
                onClick={onClear}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                Listeyi Temizle
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect } from 'react';
import { X, Check, Minus } from 'lucide-react';

export default function CompareModal({ isOpen, onClose, items = [], onRemoveItem, navigate }) {
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.25s ease'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Başlığı */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
              Ürün Karşılaştırması ({items.length} Ürün)
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Seçtiğiniz ürünlerin teknik donanım, durum ve fiyat farklarını karşılaştırın.
            </p>
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

        {/* Karşılaştırma Tablosu */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              Karşılaştırmak için henüz ürün seçmediniz.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `180px repeat(${items.length}, minmax(220px, 1fr))`,
              gap: '16px',
              alignItems: 'stretch'
            }}>
              {/* Kolon 1: Başlıklar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '220px' }}>
                <SpecRowHeader label="Fiyat" />
                <SpecRowHeader label="İşlemci (CPU)" />
                <SpecRowHeader label="Ekran Kartı (GPU)" />
                <SpecRowHeader label="Bellek (RAM)" />
                <SpecRowHeader label="Depolama (SSD/HDD)" />
                <SpecRowHeader label="Ekran / Panel" />
                <SpecRowHeader label="Kozmetik Durum" />
                <SpecRowHeader label="Garanti" />
              </div>

              {/* Ürün Kolonları */}
              {items.map(product => (
                <div 
                  key={product.id}
                  style={{
                    background: 'var(--surface-2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    position: 'relative'
                  }}
                >
                  {/* Kaldır butonu */}
                  <button 
                    onClick={() => onRemoveItem(product.id)}
                    title="Karşılaştırmadan Kaldır"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                  >
                    <X size={14} />
                  </button>

                  {/* Resim ve Başlık */}
                  <div style={{ height: '200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                    <div 
                      onClick={() => { onClose(); navigate('urun-detay', { id: product.id }); }}
                      style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--heading)', cursor: 'pointer', lineHeight: 1.25 }}
                    >
                      {product.title}
                    </div>
                  </div>

                  {/* Özellik Satırları */}
                  <SpecCell value={`${Number(product.price).toLocaleString('tr-TR')} TL`} isPrice />
                  <SpecCell value={product.specs?.['İşlemci'] || '-'} />
                  <SpecCell value={product.specs?.['Ekran Kartı'] || '-'} />
                  <SpecCell value={product.specs?.['RAM'] || '-'} />
                  <SpecCell value={product.specs?.['Depolama'] || '-'} />
                  <SpecCell value={product.specs?.['Ekran'] || '-'} />
                  <SpecCell value={product.specs?.['Kozmetik'] || '-'} />
                  <SpecCell value={product.specs?.['Garanti'] || '-'} />

                  <button 
                    onClick={() => { onClose(); navigate('urun-detay', { id: product.id }); }}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: '10px', width: '100%' }}
                  >
                    Ürünü İncele
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SpecRowHeader({ label }) {
  return (
    <div style={{ 
      height: '42px', 
      display: 'flex', 
      alignItems: 'center', 
      fontWeight: 700, 
      fontSize: '0.85rem', 
      color: 'var(--text-muted)' 
    }}>
      {label}
    </div>
  );
}

function SpecCell({ value, isPrice = false }) {
  return (
    <div style={{
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      fontSize: isPrice ? '1.1rem' : '0.84rem',
      fontWeight: isPrice ? 900 : 500,
      color: isPrice ? 'var(--primary-bright)' : 'var(--heading)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}>
      {value}
    </div>
  );
}

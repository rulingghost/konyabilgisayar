import React, { useState, useEffect } from 'react';
import { Phone, X, Send, Sparkles, Clock, MapPin, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function QuickContactWidget({ settings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [quickDevice, setQuickDevice] = useState('');
  const [quickCity, setQuickCity] = useState('Konya');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  const handleSendQuickWP = (e) => {
    e.preventDefault();
    let text = `Merhaba Konya Bilgisayar,\n`;
    if (quickDevice.trim()) {
      text += `Satmak istediğim cihaz: ${quickDevice.trim()}\n`;
    } else {
      text += `Elimdeki cihazı nakit satmak istiyorum.\n`;
    }
    text += `Konum: ${quickCity}\n`;
    text += `Bu cihaz için fiyat teklifi alabilir miyim?`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Açılır Sohbet / Teklif Kartı */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          width: '340px',
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 20px 45px rgba(0,0,0,0.22)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Kart Üst Bilgisi */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #0059bf)',
            color: '#ffffff',
            padding: '20px 18px',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(255,255,255,0.18)',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e'
              }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#93c5fd' }}>
                Hemen Fiyat Alın · Çevrimiçi
              </span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '4px 0 6px', color: '#ffffff' }}>
              Konya Bilgisayar
            </h3>
            <p style={{ fontSize: '0.84rem', opacity: 0.9, lineHeight: 1.4, margin: 0 }}>
              0551 045 42 55 üzerinden 5 dakikada anında nakit fiyat teklifi alın!
            </p>
          </div>

          {/* Aksiyon Butonları (Doğrudan Ara ve WhatsApp) */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Doğrudan Ara Butonu */}
            <a 
              href={`tel:${phoneRaw}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '13px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.98rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(22, 163, 74, 0.35)',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Phone size={18} />
              <span>Hemen Ara: {phoneFormatted}</span>
            </a>

            {/* Hızlı WhatsApp Formu */}
            <form onSubmit={handleSendQuickWP} style={{
              background: 'var(--surface-2)',
              borderRadius: '14px',
              padding: '14px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} style={{ color: 'var(--primary-bright)' }} />
                <span>Cihazını Yaz, WhatsApp'tan Fiyat Gelsin</span>
              </div>

              <textarea 
                placeholder="Örn: Asus ROG RTX 4060 laptop, çok temiz faturalı..."
                rows="2"
                value={quickDevice}
                onChange={e => setQuickDevice(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  fontSize: '0.88rem',
                  resize: 'none',
                  outline: 'none',
                  background: '#ffffff',
                  marginBottom: '10px'
                }}
              />

              <button 
                type="submit"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px',
                  borderRadius: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp'a Gönder & Fiyat Al</span>
              </button>
            </form>

            {/* Mağaza Hızlı Bilgi */}
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} style={{ color: 'var(--primary-bright)' }} />
                <span>Selçuklu / Nalçacı Mağazamız</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={13} style={{ color: 'var(--primary-bright)' }} />
                <span>Haftanın her günü 09:00 - 20:00 açık</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Yüzen Buton (Floating Toggle) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Hızlı Arama Butonu */}
        <a 
          href={`tel:${phoneRaw}`}
          title={`Hemen Ara: ${phoneFormatted}`}
          style={{
            background: 'linear-gradient(135deg, #16a34a, #15803d)',
            color: '#ffffff',
            height: '52px',
            padding: '0 18px',
            borderRadius: '26px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(22, 163, 74, 0.4)',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.92rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className="quick-call-float-btn"
        >
          <Phone size={19} />
          <span className="desktop-call-text">Ara: {phoneFormatted}</span>
        </a>

        {/* WhatsApp & Mesaj Açma Butonu */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          title="WhatsApp Fiyat Teklifi Al"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '28px',
            background: '#25D366',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 26px rgba(37, 211, 102, 0.45)',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.2s ease'
          }}
          className="quick-wp-float-btn"
        >
          {isOpen ? <X size={26} /> : <WhatsAppIcon size={28} />}
          {!isOpen && (
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              width: '16px',
              height: '16px',
              background: '#ef4444',
              borderRadius: '50%',
              border: '2px solid #ffffff',
              boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)'
            }} />
          )}
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .quick-call-float-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(22, 163, 74, 0.5) !important;
        }
        .quick-wp-float-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.55) !important;
        }
        @media (max-width: 640px) {
          .desktop-call-text {
            display: none;
          }
          .quick-call-float-btn {
            width: 52px;
            padding: 0;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

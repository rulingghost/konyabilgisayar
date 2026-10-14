import React from 'react';
import { Phone, Calculator } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function StickyMobileBar({ navigate, settings }) {
  return (
    <>
      <div className="sticky-mobile-bar" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-modal)',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border)',
        padding: '10px 16px env(safe-area-inset-bottom, 10px)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
        display: 'none'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '8px' }}>
          {/* Ara */}
          <a 
            href={`tel:${settings?.phoneRaw || '905510454255'}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 8px',
              borderRadius: '12px',
              border: '1.5px solid var(--border)',
              background: '#ffffff',
              color: 'var(--heading)',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            <Phone size={16} />
            <span>Ara</span>
          </a>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%20Konya%20Bilgisayar%20(0551%20045%2042%2055)%2C%20cihaz%C4%B1m%C4%B1%20satmak%20ve%20fiyat%20almak%20istiyorum.`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 8px',
              borderRadius: '12px',
              background: 'var(--wa-color)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Teklif Al */}
          <button 
            onClick={() => navigate('degerleme')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 8px',
              borderRadius: '12px',
              background: 'var(--primary-bright)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <Calculator size={16} />
            <span>Teklif Al</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) {
          .sticky-mobile-bar {
            display: block !important;
          }
          body {
            padding-bottom: 70px !important;
          }
        }
      `}</style>
    </>
  );
}

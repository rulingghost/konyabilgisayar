import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

export default function CookieBanner({ navigate }) {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kb_cookie_consent');
      if (!saved) {
        // Show after a slight delay
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('kb_cookie_consent', JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: Date.now()
      }));
    } catch (e) {}
    setVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem('kb_cookie_consent', JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now()
      }));
    } catch (e) {}
    setVisible(false);
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem('kb_cookie_consent', JSON.stringify({
        necessary: true,
        analytics: analyticsConsent,
        marketing: marketingConsent,
        timestamp: Date.now()
      }));
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '560px',
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.16)',
      padding: '24px',
      zIndex: 'var(--z-toast)',
      animation: 'slideUp 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'var(--primary-glow)',
          color: 'var(--primary-bright)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Cookie size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '4px' }}>
            Çerez Tercihleriniz
          </h4>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
            Sitemizde sepet/listem tercihlerinizi hatırlamak ve deneyiminizi geliştirmek için yasal mevzuata uygun çerezler kullanılır. <button onClick={() => { setVisible(false); navigate('politikalar'); }} style={{ background: 'transparent', border: 'none', color: 'var(--primary-bright)', textDecoration: 'underline', padding: 0, cursor: 'pointer', fontWeight: 600 }}>Detaylı bilgi</button>
          </p>
        </div>
        <button 
          onClick={handleReject}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
        >
          <X size={18} />
        </button>
      </div>

      {showSettings && (
        <div style={{
          background: 'var(--surface-2)',
          borderRadius: 'var(--radius-md)',
          padding: '14px',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '0.82rem'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'not-allowed' }}>
            <span><strong>Zorunlu Çerezler:</strong> Site çalışması ve liste kaydı için zorunlu.</span>
            <input type="checkbox" checked disabled />
          </label>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <span><strong>Analitik Çerezler:</strong> Site performansını ölçmeye yarar.</span>
            <input type="checkbox" checked={analyticsConsent} onChange={e => setAnalyticsConsent(e.target.checked)} />
          </label>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <span><strong>Pazarlama Çerezleri:</strong> İlgili duyuru ve teklifler sunar.</span>
            <input type="checkbox" checked={marketingConsent} onChange={e => setMarketingConsent(e.target.checked)} />
          </label>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {showSettings ? (
          <button 
            onClick={handleSaveCustom}
            className="btn btn-primary btn-sm"
            style={{ fontWeight: 700 }}
          >
            Seçimlerimi Kaydet
          </button>
        ) : (
          <>
            <button 
              onClick={handleReject}
              className="btn btn-outline btn-sm"
              style={{ fontWeight: 600, fontSize: '0.82rem', padding: '6px 12px' }}
            >
              Reddet
            </button>
            <button 
              onClick={() => setShowSettings(true)}
              className="btn btn-sm"
              style={{ background: 'var(--surface-2)', color: 'var(--heading)', fontWeight: 600, fontSize: '0.82rem', padding: '6px 12px' }}
            >
              Ayarlar
            </button>
            <button 
              onClick={handleAcceptAll}
              className="btn btn-primary btn-sm"
              style={{ fontWeight: 700, fontSize: '0.84rem' }}
            >
              Kabul Et
            </button>
          </>
        )}
      </div>
    </div>
  );
}

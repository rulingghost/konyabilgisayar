import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Gamepad2, 
  Cpu, 
  RefreshCw, 
  Truck, 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  ArrowRight,
  Settings,
  Building2,
  HelpCircle 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ 
  currentRoute, 
  navigate, 
  wishlistCount, 
  openWishlist, 
  openSearch,
  settings 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleNav = (route, params = {}) => {
    navigate(route, params);
    closeMenu();
  };

  return (
    <>
      {/* 1. Üst Bilgi Duyuru Çubuğu - İnce & Kibar */}
      {settings?.announcementActive !== false && (
        <div style={{
          background: 'linear-gradient(90deg, #090d16 0%, #0f172a 50%, #090d16 100%)',
          color: '#e2e8f0',
          fontSize: '0.76rem',
          height: '32px',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          letterSpacing: '0.01em',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 6px #10b981',
              flexShrink: 0
            }} />
            <span style={{ color: '#cbd5e1', fontWeight: 500 }}>
              {settings?.announcementText || "Konya Selçuklu mağazamızda anında nakit alım! Türkiye'nin her yerinden anlaşmalı kargo ile alıyoruz."}
            </span>
          </div>
        </div>
      )}

      {/* 2. Ana Header - Şık, Kompakt & Asla Kırılmayan Tasarım */}
      <header className={`glass-header ${scrolled ? 'scrolled' : ''}`} style={{
        height: scrolled ? '56px' : '62px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : '0 1px 3px rgba(15, 23, 42, 0.03)',
        transition: 'all 0.2s ease',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          {/* Logo (Kibar Monogram & Marka) */}
          <div 
            onClick={() => handleNav('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              userSelect: 'none',
              flexShrink: 0
            }}
          >
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.28)',
              flexShrink: 0
            }}>
              KB
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                whiteSpace: 'nowrap'
              }}>
                Konya Bilgisayar
              </div>
              <div style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                color: '#0284c7',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                lineHeight: 1.1,
                whiteSpace: 'nowrap'
              }}>
                2. El & Servis
              </div>
            </div>
          </div>

          {/* Masaüstü Navigasyon - Tek Satır, Taşmayan & Kibar */}
          <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
            {/* 1. Cihaz Sat Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('sell')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                style={{
                  padding: '6px 10px',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  color: openDropdown === 'sell' ? '#0284c7' : '#334155',
                  background: openDropdown === 'sell' ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>Cihaz Sat</span>
                <ChevronDown size={13} style={{ opacity: 0.65 }} />
              </button>
              {openDropdown === 'sell' && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  width: '260px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 12px 36px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15, 23, 42, 0.04)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  padding: '6px',
                  zIndex: 1100
                }}>
                  <div style={{ padding: '6px 10px 4px', fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Alım Kategorileri
                  </div>
                  <DropdownLink icon={<Laptop size={16} />} title="Laptop Sat" onClick={() => handleNav('degerleme', { category: 'laptop' })} />
                  <DropdownLink icon={<Monitor size={16} />} title="Masaüstü Bilgisayar Sat" onClick={() => handleNav('degerleme', { category: 'masaustu' })} />
                  <DropdownLink icon={<Laptop size={16} />} title="MacBook Sat" onClick={() => handleNav('degerleme', { category: 'macbook' })} />
                  <DropdownLink icon={<Smartphone size={16} />} title="iPhone & Telefon Sat" onClick={() => handleNav('degerleme', { category: 'iphone' })} />
                  <DropdownLink icon={<Cpu size={16} />} title="Ekran Kartı (GPU) Sat" onClick={() => handleNav('degerleme', { category: 'ekran_karti' })} />
                  <DropdownLink icon={<Monitor size={16} />} title="Monitör Sat" onClick={() => handleNav('degerleme', { category: 'monitor' })} />
                  <DropdownLink icon={<Tablet size={16} />} title="iPad & Tablet Sat" onClick={() => handleNav('degerleme', { category: 'tablet' })} />
                  <DropdownLink icon={<Gamepad2 size={16} />} title="PlayStation & Konsol Sat" onClick={() => handleNav('degerleme', { category: 'konsol' })} />
                  <div style={{ height: '1px', background: '#f1f5f9', margin: '4px 0' }} />
                  <DropdownLink icon={<Truck size={16} />} title="Kargoyla Cihaz Sat" onClick={() => handleNav('kargo')} highlight />
                  <DropdownLink icon={<RefreshCw size={16} />} title="Cihaz Takası" onClick={() => handleNav('takas')} />
                  <DropdownLink icon={<Building2 size={16} />} title="Toplu & Kurumsal Alım" onClick={() => handleNav('toplu-alim')} />
                  <DropdownLink icon={<HelpCircle size={16} />} title="Cihaz Özelliklerini Öğren" onClick={() => handleNav('ozellikleri-ogrenin')} />
                </div>
              )}
            </div>

            {/* 2. Satılık Ürünler */}
            <button 
              onClick={() => handleNav('urunler')}
              style={{
                padding: '6px 10px',
                fontWeight: 600,
                fontSize: '0.84rem',
                color: currentRoute === 'urunler' ? '#0284c7' : '#334155',
                background: currentRoute === 'urunler' ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                if (currentRoute !== 'urunler') e.currentTarget.style.background = 'rgba(2, 132, 199, 0.05)';
              }}
              onMouseLeave={e => {
                if (currentRoute !== 'urunler') e.currentTarget.style.background = 'transparent';
              }}
            >
              Satılık Ürünler
            </button>

            {/* 4. Teknik Servis */}
            <button 
              onClick={() => handleNav('hizmetler')}
              style={{
                padding: '6px 10px',
                fontWeight: 600,
                fontSize: '0.84rem',
                color: currentRoute === 'hizmetler' ? '#0284c7' : '#334155',
                background: currentRoute === 'hizmetler' ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                if (currentRoute !== 'hizmetler') e.currentTarget.style.background = 'rgba(2, 132, 199, 0.05)';
              }}
              onMouseLeave={e => {
                if (currentRoute !== 'hizmetler') e.currentTarget.style.background = 'transparent';
              }}
            >
              Teknik Servis
            </button>

            {/* 5. Blog */}
            <button 
              onClick={() => handleNav('blog')}
              style={{
                padding: '6px 10px',
                fontWeight: 600,
                fontSize: '0.84rem',
                color: (currentRoute === 'blog' || currentRoute === 'blog-detay') ? '#0284c7' : '#334155',
                background: (currentRoute === 'blog' || currentRoute === 'blog-detay') ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                if (currentRoute !== 'blog' && currentRoute !== 'blog-detay') e.currentTarget.style.background = 'rgba(2, 132, 199, 0.05)';
              }}
              onMouseLeave={e => {
                if (currentRoute !== 'blog' && currentRoute !== 'blog-detay') e.currentTarget.style.background = 'transparent';
              }}
            >
              Blog
            </button>

            {/* 6. İletişim */}
            <button 
              onClick={() => handleNav('iletisim')}
              style={{
                padding: '6px 10px',
                fontWeight: 600,
                fontSize: '0.84rem',
                color: currentRoute === 'iletisim' ? '#0284c7' : '#334155',
                background: currentRoute === 'iletisim' ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                if (currentRoute !== 'iletisim') e.currentTarget.style.background = 'rgba(2, 132, 199, 0.05)';
              }}
              onMouseLeave={e => {
                if (currentRoute !== 'iletisim') e.currentTarget.style.background = 'transparent';
              }}
            >
              İletişim
            </button>
          </nav>

          {/* Sağ Aksiyon Grubu - Kibar, İnce & Tek Satır */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0 }}>
            {/* Canlı Arama Butonu */}
            <button 
              onClick={openSearch}
              title="Ürün veya kategori ara"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '9px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.color = '#0284c7';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <Search size={15} />
            </button>

            {/* Listem (Sepet / Wishlist) Butonu */}
            <button 
              onClick={openWishlist}
              title="Listem ve Kaydedilenler"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '9px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                flexShrink: 0,
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.color = '#0284c7';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <Bookmark size={15} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-3px',
                  right: '-3px',
                  background: '#0284c7',
                  color: '#ffffff',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  minWidth: '16px',
                  height: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 3px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Doğrudan Ara Butonu (Kibar Yeşil Hap) */}
            <a 
              href={`tel:${settings?.phoneRaw || '905510454255'}`}
              className="desktop-only"
              style={{
                height: '32px',
                borderRadius: '9999px',
                padding: '0 12px',
                fontWeight: 700,
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: '#16a34a',
                color: '#ffffff',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 1px 3px rgba(22, 163, 74, 0.25)',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
              title="0551 045 42 55 - Hemen Telefonla Ara"
              onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
              onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
            >
              <PhoneCall size={12} />
              <span style={{ letterSpacing: '0.01em' }}>{settings?.phone || '0551 045 42 55'}</span>
            </a>

            {/* Teklif Al Butonu (Kibar Siyah Hap) */}
            <button 
              onClick={() => handleNav('degerleme')}
              className="desktop-only"
              style={{
                height: '32px',
                borderRadius: '9999px',
                padding: '0 13px',
                fontWeight: 700,
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: '#0f172a',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.01em',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.15)',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1e293b'}
              onMouseLeave={e => e.currentTarget.style.background = '#0f172a'}
            >
              <span>Teklif Al</span>
              <ArrowRight size={12} />
            </button>

            {/* Yönetim Paneli Butonu (Zarif Ghost Buton) */}
            <button
              onClick={() => handleNav('admin')}
              title="Yönetim Paneli"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                border: 'none',
                background: currentRoute === 'admin' ? '#0284c7' : 'transparent',
                color: currentRoute === 'admin' ? '#ffffff' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
              onMouseEnter={e => {
                if (currentRoute !== 'admin') {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.color = '#334155';
                }
              }}
              onMouseLeave={e => {
                if (currentRoute !== 'admin') {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                }
              }}
            >
              <Settings size={15} />
            </button>

            {/* Mobil Hamburger Butonu */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Menüyü Aç"
              style={{
                width: '35px',
                height: '35px',
                borderRadius: '9px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#0f172a',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobil Menü Açılır Çekmece */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: scrolled ? '56px' : '62px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 1200,
            overflowY: 'auto',
            padding: '20px 20px 100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
              Sayfalar & Hizmetler
            </div>
            <MobileNavLink label="Ana Sayfa" onClick={() => handleNav('home')} />
            <MobileNavLink label="Cihaz Sat" onClick={() => handleNav('degerleme')} highlight />
            <MobileNavLink label="Satılık İkinci El Ürünler" onClick={() => handleNav('urunler')} />
            <MobileNavLink label="Bilgisayar Teknik Servisi" onClick={() => handleNav('hizmetler')} />
            <MobileNavLink label="Blog & Teknoloji Rehberi" onClick={() => handleNav('blog')} />
            <MobileNavLink label="Cihaz Özelliklerini Öğrenin" onClick={() => handleNav('ozellikleri-ogrenin')} />
            <MobileNavLink label="Toplu & Kurumsal Cihaz Alımı" onClick={() => handleNav('toplu-alim')} />
            <MobileNavLink label="Bilgisayar Takası" onClick={() => handleNav('takas')} />
            <MobileNavLink label="Kargoyla Cihaz Satışı (Türkiye Geneli)" onClick={() => handleNav('kargo')} />
            <MobileNavLink label="İletişim & Konum" onClick={() => handleNav('iletisim')} />
            <MobileNavLink label="Yönetim Paneli" onClick={() => handleNav('admin')} />

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '0.84rem', color: '#64748b', textAlign: 'center' }}>
                Hemen Fiyat Alın: <strong style={{ color: '#0f172a' }}>{settings?.phone || "0551 045 42 55"}</strong>
              </div>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`} 
                style={{
                  width: '100%',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#16a34a',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                <PhoneCall size={16} />
                <span>0551 045 42 55'i Ara</span>
              </a>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20Konya%20Bilgisayar%20cihaz%C4%B1m%C4%B1%20satmak%20istiyorum.`} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '100%',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp'tan Teklif İste</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Responsive Medya Sorguları - Ekran Daraldığında Asla Kırılmaz */}
      <style>{`
        @media (min-width: 1060px) {
          .desktop-nav { display: flex !important; }
          .desktop-only { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1059px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function DropdownLink({ icon, title, onClick, highlight = false }) {
  return (
    <div 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        padding: '7px 9px',
        borderRadius: '7px',
        fontSize: '0.82rem',
        fontWeight: highlight ? 700 : 550,
        color: highlight ? '#0284c7' : '#334155',
        background: highlight ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.12s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = highlight ? 'rgba(2, 132, 199, 0.12)' : '#f8fafc';
        e.currentTarget.style.color = '#0284c7';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = highlight ? 'rgba(2, 132, 199, 0.08)' : 'transparent';
        e.currentTarget.style.color = highlight ? '#0284c7' : '#334155';
      }}
    >
      <span style={{ color: highlight ? '#0284c7' : '#64748b', display: 'flex', alignItems: 'center' }}>{icon}</span>
      <span style={{ whiteSpace: 'nowrap' }}>{title}</span>
    </div>
  );
}

function MobileNavLink({ label, onClick, highlight = false }) {
  return (
    <div 
      onClick={onClick}
      style={{
        padding: '11px 14px',
        borderRadius: '9px',
        fontWeight: highlight ? 700 : 600,
        fontSize: '0.94rem',
        color: highlight ? '#0284c7' : '#0f172a',
        background: highlight ? 'rgba(2, 132, 199, 0.08)' : '#f8fafc',
        border: '1px solid #e2e8f0',
        cursor: 'pointer'
      }}
    >
      {label}
    </div>
  );
}

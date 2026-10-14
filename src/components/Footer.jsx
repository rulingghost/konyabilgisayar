import React from 'react';
import { Phone, MapPin, Clock, Star, ShieldCheck, Heart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ navigate, settings }) {
  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  return (
    <footer style={{
      background: '#0f172a',
      color: '#94a3b8',
      padding: '60px 0 30px',
      marginTop: 'auto',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container">
        {/* Üst Alan */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '36px',
          marginBottom: '48px'
        }}>
          {/* Sütun 1: Marka & İletişim */}
          <div style={{ minWidth: '240px' }}>
            <div 
              onClick={() => navigate('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary-bright), #2563eb)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 900
              }}>
                KB
              </div>
              Konya Bilgisayar
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              İkinci el laptop, masaüstü bilgisayar, Apple ürünleri ve oyun konsollarını değerinde nakit alıyoruz. Konya Selçuklu mağazamızda hızlı ekspertiz ve anında ödeme.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={17} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '2px' }} />
                <span>{settings?.address || 'Feritpaşa Mah. Nalçacı Cad. No:42/B, Selçuklu / KONYA'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={17} style={{ color: '#60a5fa', flexShrink: 0 }} />
                <span>{settings?.workingHours || 'Haftanın her günü: 09:00 - 20:00'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={17} style={{ color: '#60a5fa', flexShrink: 0 }} />
                <a href={`tel:${phoneRaw}`} style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.96rem' }}>
                  {phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Sütun 2: Alım Satım */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.98rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Alım Satım
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem' }}>
              <li><button onClick={() => navigate('degerleme', { category: 'laptop' })} style={footerBtnStyle}>Laptop Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'masaustu' })} style={footerBtnStyle}>Bilgisayar Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'macbook' })} style={footerBtnStyle}>MacBook Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'iphone' })} style={footerBtnStyle}>iPhone & Telefon Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'ekran_karti' })} style={footerBtnStyle}>Ekran Kartı (GPU) Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'monitor' })} style={footerBtnStyle}>Monitör Sat</button></li>
              <li><button onClick={() => navigate('degerleme', { category: 'konsol' })} style={footerBtnStyle}>PlayStation Sat</button></li>
              <li><button onClick={() => navigate('urunler')} style={footerBtnStyle}>Satılık Ürünler Kataloğu</button></li>
              <li><button onClick={() => navigate('takas')} style={footerBtnStyle}>Cihaz Takası</button></li>
              <li><button onClick={() => navigate('toplu-alim')} style={footerBtnStyle}>Toplu & Kurumsal Cihaz Alımı</button></li>
            </ul>
          </div>

          {/* Sütun 3: Hizmet ve Teslimat */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.98rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Hizmet & Teslimat
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem' }}>
              <li><button onClick={() => navigate('hizmetler')} style={footerBtnStyle}>Teknik Servis & Bakım</button></li>
              <li><button onClick={() => navigate('kargo')} style={footerBtnStyle}>Kargoyla Cihaz Sat (81 İl)</button></li>
              <li><button onClick={() => navigate('degerleme')} style={footerBtnStyle}>Ne Kadar Eder Hesaplayıcı</button></li>
              <li><button onClick={() => navigate('ozellikleri-ogrenin')} style={footerBtnStyle}>Cihaz Özelliklerini Öğrenin</button></li>
              <li><button onClick={() => navigate('iletisim')} style={footerBtnStyle}>Konum & Yol Tarifi</button></li>
            </ul>
          </div>

          {/* Sütun 4: Kurumsal & Yasal */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.98rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Konya Bilgisayar
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem', marginBottom: '20px' }}>
              <li><button onClick={() => navigate('hakkimizda')} style={footerBtnStyle}>Hakkımızda</button></li>
              <li><button onClick={() => navigate('musteri-hikayeleri')} style={footerBtnStyle}>Müşteri Hikayeleri</button></li>
              <li><button onClick={() => navigate('blog')} style={footerBtnStyle}>Blog & Donanım Rehberi</button></li>
              <li><button onClick={() => navigate('admin')} style={footerBtnStyle}>Yönetim Paneli</button></li>
            </ul>

            <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.85rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Politikalar
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '0.84rem' }}>
              <li><button onClick={() => navigate('politikalar', { tab: 'kargo' })} style={footerBtnStyle}>Kargo ve Teslimat</button></li>
              <li><button onClick={() => navigate('politikalar', { tab: 'iade' })} style={footerBtnStyle}>İade ve Değişim</button></li>
              <li><button onClick={() => navigate('politikalar', { tab: 'kvkk' })} style={footerBtnStyle}>Gizlilik ve KVKK</button></li>
              <li><button onClick={() => navigate('politikalar', { tab: 'cerez' })} style={footerBtnStyle}>Çerez Politikası</button></li>
            </ul>
          </div>
        </div>

        {/* Müşteri Yorumu & WhatsApp Hızlı Satır */}
        <div style={{
          background: '#1e293b',
          borderRadius: 'var(--radius-md)',
          padding: '16px 24px',
          marginBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '3px', color: '#fbbf24' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
            </div>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
              5.0 / 5.0 Google Haritalar Müşteri Puanı
            </span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a 
              href={`tel:${phoneRaw}`}
              className="btn btn-primary btn-sm"
              style={{ background: '#16a34a', fontWeight: 800 }}
            >
              📞 Hemen Ara: {phoneFormatted}
            </a>
            <a 
              href={`https://wa.me/${whatsappNum}?text=Merhaba%2C%20cihaz%20satmak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa btn-sm"
              style={{ fontWeight: 800 }}
            >
              <WhatsAppIcon size={16} /> WhatsApp'tan Teklif Al
            </a>
          </div>
        </div>

        {/* Alt Çubuk */}
        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.84rem'
        }}>
          <div>
            © 2026 Konya Bilgisayar. Tüm hakları saklıdır. Ürün ve teknik servis ödemelerinde kredi kartı geçerlidir; nakit ödemede %5 indirim uygulanır.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ color: '#94a3b8' }}>Konya Selçuklu · Değerinde Nakit Alım</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: '#94a3b8',
  padding: 0,
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: '0.88rem',
  transition: 'color var(--tr-fast)'
};

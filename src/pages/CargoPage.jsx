import React from 'react';
import { Truck, CheckCircle2, ShieldCheck, ArrowRight, PackageCheck, Banknote, Phone } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CargoPage({ navigate, settings }) {
  const handleWhatsAppCargo = () => {
    const phone = settings?.whatsapp || '905510454255';
    const text = `Merhaba Konya Bilgisayar (0551 045 42 55), şehir dışından kargo ile cihaz satmak istiyorum. Ön teklif alıp kargo kodunuzu öğrenebilir miyim?`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık & Görsel */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <img 
            src="/images/secure_cargo.jpg" 
            alt="Türkiye Geneli Kargoyla Bilgisayar Alımı" 
            style={{ 
              width: '180px', 
              height: '180px', 
              objectFit: 'contain', 
              margin: '0 auto 16px',
              borderRadius: '16px',
              filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.06))'
            }} 
          />
          <div style={{ marginBottom: '8px' }}>
            <span className="badge badge-blue">
              <Truck size={14} /> Türkiye Geneli 81 İl ve Konya İlçeleri
            </span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            Cihazınızı Türkiye'nin Her Yerinden Kargoyla Satın
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Konya merkezde olmasanız bile cihazınızı değerinde satabilirsiniz. Önce WhatsApp'tan ön teklif alın, anlaşmalı kargo kodumuzla ücretsiz gönderin.
          </p>
        </div>

        {/* 3 Adımlı Kargo Süreci */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              1
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              WhatsApp'tan Ön Teklif Alın
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Cihazınızın marka, model, işlemci, RAM, disk ve kozmetik fotoğraflarını gönderin. 10 dakika içinde net ön teklifimizi iletelim.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              2
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Ücretsiz Kargo ile Gönderin
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Teklifi onaylarsanız anlaşmalı <strong>Yurtiçi Kargo</strong> kodumuz ile cihazı korunaklı paketleyip ücretsiz karşı ödemeli gönderin.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              3
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Test & Aynı Gün Banka Ödemesi
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Kargo mağazamıza ulaştığı gün teknisyenlerimiz kontrolleri tamamlar ve ödemeniz belirttiğiniz IBAN hesabına anında aktarılır.
            </p>
          </div>
        </div>

        {/* CTA Kartı */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary), #112d4e)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px' }}>
            Cihazınızı Kargolamadan Önce Fiyat Alın
          </h2>
          <p style={{ opacity: 0.9, maxWidth: '580px', margin: '0 auto 28px', fontSize: '1rem' }}>
            Fotoğrafları gönderin, uzman ekspertiz ekibimiz hemen değerinde teklifinizi versin.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`tel:${settings?.phoneRaw || '905510454255'}`}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem', background: '#16a34a', textDecoration: 'none' }}
            >
              <Phone size={20} /> Hemen Ara: {settings?.phone || '0551 045 42 55'}
            </a>
            <button 
              onClick={handleWhatsAppCargo}
              className="btn btn-wa"
              style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem' }}
            >
              <WhatsAppIcon size={20} /> Kargo Ön Teklifi Al
            </button>
            <button 
              onClick={() => navigate('degerleme')}
              className="btn btn-outline"
              style={{ background: '#ffffff', color: 'var(--heading)', fontWeight: 700 }}
            >
              Sitede Değerini Hesapla →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Lock, 
  Recycle, 
  Clock, 
  MapPin, 
  Phone, 
  Users, 
  CheckCircle2,
  Wrench,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function AboutPage({ navigate, settings }) {
  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  return (
    <div style={{ padding: '50px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
            <Award size={14} /> Güvenilir İkinci El Teknoloji
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Hakkımızda · Konya Bilgisayar
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
            Konya Selçuklu merkezli teknoloji mağazamızda, ikinci el bilgisayar, donanım ve teknoloji alım-satımını şeffaf ekspertiz ve güven ilkeleriyle sunuyoruz.
          </p>
        </div>

        {/* 1. Hikayemiz ve İlkelerimiz */}
        <div className="card" style={{ padding: '36px', marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '14px' }}>
                Değerinde Alım ve Şeffaf Ekspertiz
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Konya Bilgisayar olarak sektördeki en büyük eksikliğin güven ve değerinde fiyatlandırma olduğunu görerek yola çıktık. İlan sitelerinde haftalarca süren sahte teklifler, son dakika fiyat kırmalar veya güvenilmez alıcılarla uğraşmak zorunda kalmamanız için kurumsal bir alım süreci oluşturduk.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                Mağazamıza getirdiğiniz her cihaz, gözünüzün önünde 20 aşamalı teknik teste tabi tutulur. Donanım sağlığı neyse şeffafça paylaşılır ve anlaşılan tutar anında nakit veya FAST ile hesabınıza aktarılır.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/service_diagnostics.jpg" 
                alt="20 Aşamalı Kontrol ve Laboratuvar Testleri" 
                style={{ 
                  width: '100%', 
                  maxWidth: '260px', 
                  borderRadius: '16px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.08))'
                }} 
              />
            </div>
          </div>
        </div>

        {/* 4 Temel Değerimiz Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              20+ Aşamalı Test Laboratuvarı
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              FurMark GPU stres testi, MemTest RAM doğrulama, CrystalDiskInfo SSD bad-sector taraması ve batarya döngü testleriyle sıfır hata prensibiyle çalışıyoruz.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(234, 88, 12, 0.12)', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Sertifikalı Güvenli Veri İmhası
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Bize sattığınız cihazlardaki kişisel veya kurumsal verileriniz, askeri standart olan DoD 5220.22-M ve NVMe Secure Erase algoritmalarıyla geri getirilemez şekilde silinir.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Recycle size={26} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Sürdürülebilirlik & E-Atık Bilinci
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Her ikinci el bilgisayar alım-satımı, yeni karbon ayak izinin ve e-atık birikiminin önüne geçer. Cihazların ömrünü uzatarak döngüsel ekonomiye katkı sağlıyoruz.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Sparkles size={26} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Detaylı Test & Şeffaf Süreç
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Alınan ve satılan her cihaz stres, ekran, pil ve donanım testlerinden geçirilir. Müşterilerimize her aşamada şeffaf raporlama ve güvenilir hizmet sunuyoruz.
            </p>
          </div>
        </div>

        {/* Mağaza ve Lokasyon Kartı */}
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
              Selçuklu Mağazamız
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px' }}>
              Sizi Mağazamızda Ağırlamaktan Mutluluk Duyarız
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '16px' }}>
              {settings?.address || 'Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G, Selçuklu / KONYA'}<br />
              Çalışma Saatleri: {settings?.workingHours || 'Haftanın her günü 09:00 - 20:00'}<br />
              <strong style={{ color: '#fed7aa', display: 'inline-block', marginTop: '4px' }}>
                ⚠️ Lütfen mağazamıza gelmeden önce telefon veya WhatsApp ile randevu alınız.
              </strong>
            </p>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#60a5fa' }}>
              Telefon: {phoneFormatted}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href={`tel:${phoneRaw}`}
              className="btn btn-primary"
              style={{ width: '100%', padding: '13px', fontWeight: 800, fontSize: '0.98rem', background: '#16a34a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Phone size={18} /> Hemen Ara: {phoneFormatted}
            </a>
            <a 
              href={`https://wa.me/${whatsappNum}?text=Merhaba%20Konya%20Bilgisayar%2C%20ma%C4%9Fazan%C4%B1za%20gelmek%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
              style={{ width: '100%', padding: '13px', fontWeight: 800, fontSize: '0.98rem' }}
            >
              <WhatsAppIcon size={18} /> WhatsApp'tan Konum İsteyin
            </a>
            <button 
              onClick={() => navigate('iletisim')}
              className="btn btn-outline"
              style={{ width: '100%', padding: '13px', background: '#ffffff', color: 'var(--heading)', fontWeight: 800, fontSize: '0.95rem' }}
            >
              Yol Tarifi & Google Harita →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  FileText, 
  Laptop, 
  Apple, 
  Smartphone, 
  CheckCircle2, 
  Phone, 
  HelpCircle, 
  Search, 
  Camera, 
  ArrowRight,
  Monitor,
  Cpu
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function SpecGuidePage({ navigate, settings }) {
  const [activeTab, setActiveTab] = useState('windows');

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  const handleWhatsAppPhoto = () => {
    const text = `Merhaba Konya Bilgisayar (0551 045 42 55), cihazımın özelliklerini tam bilmiyorum. Alt kapağın ve açık ekranın fotoğraflarını göndermek ve fiyat teklifi almak istiyorum.`;
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ padding: '50px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık & Görsel */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <img 
            src="/images/spec_valuation.jpg" 
            alt="Bilgisayar Donanım Özellikleri Öğrenme Rehberi" 
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
              <FileText size={14} /> Pratik Donanım Rehberi
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Cihazınızın Özelliklerini Nasıl Öğrenirsiniz?
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65 }}>
            Doğru ve en yüksek fiyat teklifini alabilmek için cihazınızın işlemci, RAM, ekran kartı ve model bilgilerini bulmanın en kolay yolları.
          </p>
        </div>

        {/* Tab Seçiciler */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('windows')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1.5px solid',
              borderColor: activeTab === 'windows' ? 'var(--primary-bright)' : 'var(--border)',
              background: activeTab === 'windows' ? 'var(--primary-bright)' : '#ffffff',
              color: activeTab === 'windows' ? '#ffffff' : 'var(--heading)',
              cursor: 'pointer',
              transition: 'all var(--tr-fast)',
              boxShadow: activeTab === 'windows' ? 'var(--shadow-md)' : 'none'
            }}
          >
            <Laptop size={18} /> Windows (Laptop & PC)
          </button>

          <button
            onClick={() => setActiveTab('apple')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1.5px solid',
              borderColor: activeTab === 'apple' ? 'var(--primary-bright)' : 'var(--border)',
              background: activeTab === 'apple' ? 'var(--primary-bright)' : '#ffffff',
              color: activeTab === 'apple' ? '#ffffff' : 'var(--heading)',
              cursor: 'pointer',
              transition: 'all var(--tr-fast)',
              boxShadow: activeTab === 'apple' ? 'var(--shadow-md)' : 'none'
            }}
          >
            <Apple size={18} /> Apple (MacBook & Mac)
          </button>

          <button
            onClick={() => setActiveTab('phone')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1.5px solid',
              borderColor: activeTab === 'phone' ? 'var(--primary-bright)' : 'var(--border)',
              background: activeTab === 'phone' ? 'var(--primary-bright)' : '#ffffff',
              color: activeTab === 'phone' ? '#ffffff' : 'var(--heading)',
              cursor: 'pointer',
              transition: 'all var(--tr-fast)',
              boxShadow: activeTab === 'phone' ? 'var(--shadow-md)' : 'none'
            }}
          >
            <Smartphone size={18} /> iPhone & Telefon & Tablet
          </button>
        </div>

        {/* Tab 1: Windows İçeriği */}
        {activeTab === 'windows' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Yöntem 1: msinfo32 */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
                    En Hızlı Yöntem: msinfo32 (Sistem Bilgisi)
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>İşlemci nesli, tam model ve RAM kapasitesini 5 saniyede verir.</div>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '16px', lineHeight: 1.7, fontSize: '0.94rem' }}>
                <strong>Adım 1:</strong> Klavyenizde <kbd style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontWeight: 700 }}>Windows Tuşu + R</kbd> tuşlarına aynı anda basın.<br />
                <strong>Adım 2:</strong> Açılan "Çalıştır" kutusuna <code style={{ background: '#ffffff', color: 'var(--primary-bright)', padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontWeight: 800 }}>msinfo32</code> yazıp Enter'a basın.<br />
                <strong>Adım 3:</strong> Açılan ekranda şunları göreceksiniz:
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                  <li><strong>Sistem Modeli:</strong> Laptopunuzun fabrika model adı (Örn: Victus by HP Gaming Laptop 16-r0xxx).</li>
                  <li><strong>İşlemci:</strong> Tam işlemci adı (Örn: 13th Gen Intel Core i7-13700H veya Ryzen 7 7840HS).</li>
                  <li><strong>Yüklü Fiziksel Bellek (RAM):</strong> Bellek miktarı (Örn: 16,0 GB veya 32,0 GB).</li>
                </ul>
              </div>
            </div>

            {/* Yöntem 2: dxdiag */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
                    Ekran Kartını (GPU) Öğrenmek: dxdiag
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Oyun ekran kartınızın modelini ve hafızasını netleştirir.</div>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                <strong>Adım 1:</strong> Klavyede <kbd style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontWeight: 700 }}>Windows + R</kbd> tuşlarına basıp <code style={{ background: '#ffffff', color: 'var(--primary-bright)', padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontWeight: 800 }}>dxdiag</code> yazın.<br />
                <strong>Adım 2:</strong> Üstteki sekmelerden <strong>"Ekran 2"</strong> veya <strong>"Oluşturucu (Render)"</strong> sekmesine tıklayın.<br />
                <strong>Adım 3:</strong> Burada NVIDIA GeForce RTX 3060, RTX 4060 veya AMD Radeon ekran kartınızın tam modelini görebilirsiniz.
              </div>
            </div>

            {/* Yöntem 3: Alt Kapak Etiketi */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
                    Laptop Altındaki Etiket & Seri Numarası
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Bilgisayarınız açılmıyorsa en kesin yöntemdir.</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65 }}>
                Laptopunuzun alt kapağında barkodlu küçük bir etiket bulunur. Bu etikette <strong>Model (Model No)</strong>, <strong>Serial Number (S/N)</strong> veya <strong>Product ID</strong> yazar. Bu etiketin net bir fotoğrafını çekmeniz, cihazın tüm fabrika konfigürasyonunu çıkarmamız için yeterlidir!
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Apple İçeriği */}
        {activeTab === 'apple' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
                    Sol Üst Elma () Menüsü &gt; Bu Mac Hakkında
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Tüm Mac donanımını tek ekranda özetler.</div>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                <strong>Adım 1:</strong> Ekranın en sol üst köşesindeki <strong> (Elma)</strong> simgesine tıklayın.<br />
                <strong>Adım 2:</strong> <strong>"Bu Mac Hakkında" (About This Mac)</strong> seçeneğine tıklayın.<br />
                <strong>Adım 3:</strong> Açılan pencerede:
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                  <li><strong>Model:</strong> MacBook Air (M2, 2022) veya MacBook Pro 14 inç (M3 Pro, 2023)</li>
                  <li><strong>Çip & Bellek:</strong> Apple M1/M2/M3 ve 8GB / 16GB / 24GB RAM bilgisi</li>
                  <li><strong>Seri Numarası:</strong> Cihazın garantisini sorgulamak için gereken kod.</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)' }}>
                    MacBook Pil Devir Sayısı & Pil Sağlığı
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Pil durumunu öğrenmek fiyat teklifini doğrudan etkiler.</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65 }}>
                <strong>Sistem Ayarları &gt; Pil</strong> sekmesine gidin. Buradaki <strong>"Pil Sağlığı"</strong> seçeneğinde Maksimum Kapasite yüzdesini (%85, %95 vb.) görebilirsiniz. Veya <strong>Sistem Raporu &gt; Güç</strong> altından "Devir Sayısı" (Cycle Count) değerini öğrenebilirsiniz.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Telefon & Tablet İçeriği */}
        {activeTab === 'phone' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '12px' }}>
                iPhone ve iPad Cihazlarında
              </h3>
              <div style={{ background: 'var(--surface-2)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                • <strong>Model & Hafıza:</strong> <strong>Ayarlar &gt; Genel &gt; Hakkında</strong> yolunu izleyin. Burada Model Adı (iPhone 14 Pro, iPad Air vb.) ve Kapasite (128 GB, 256 GB) yazar.<br />
                • <strong>Pil Sağlığı:</strong> <strong>Ayarlar &gt; Pil &gt; Pil Sağlığı ve Şarj Etme</strong> alanından Maksimum Kapasiteyi görebilirsiniz.
              </div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '12px' }}>
                Android Telefon ve Tabletlerde
              </h3>
              <div style={{ background: 'var(--surface-2)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                • <strong>Ayarlar &gt; Telefon Hakkında</strong> veya <strong>Cihaz Bilgisi</strong> bölümüne gidin. Cihaz Adı, Model Kodu (Örn: SM-S918B) ve Depolama miktarını kontrol edin.
              </div>
            </div>
          </div>
        )}

        {/* En Altta Büyük WhatsApp / Arama Çağrı Kutusu */}
        <div style={{
          marginTop: '44px',
          background: 'linear-gradient(135deg, #0a2540, #0059bf)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', marginBottom: '16px' }}>
            <Camera size={28} />
          </div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, marginBottom: '12px' }}>
            Özelliklerle Uğraşmak İstemiyor musunuz?
          </h2>
          <p style={{ opacity: 0.9, maxWidth: '620px', margin: '0 auto 28px', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Cihazınızın açık ekranının veya altındaki model etiketinin fotoğrafını WhatsApp'tan atın; donanım özelliklerini teknisyenlerimiz 5 dakikada tespit edip nakit fiyat teklifinizi versin!
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={handleWhatsAppPhoto}
              className="btn btn-wa"
              style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1.02rem' }}
            >
              <WhatsAppIcon size={20} /> Fotoğraf Gönder & Fiyat Al (0551 045 42 55)
            </button>
            <a 
              href={`tel:${phoneRaw}`}
              className="btn btn-primary"
              style={{ background: '#16a34a', padding: '14px 28px', fontWeight: 800, fontSize: '1.02rem', textDecoration: 'none' }}
            >
              <Phone size={20} /> Hemen Ara: {phoneFormatted}
            </a>
            <button 
              onClick={() => navigate('degerleme')}
              className="btn btn-outline"
              style={{ background: '#ffffff', color: 'var(--heading)', fontWeight: 800 }}
            >
              Değerleme Sihirbazına Dön →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

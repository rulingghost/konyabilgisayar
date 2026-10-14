import React, { useState } from 'react';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Gamepad2, 
  Cpu, 
  RefreshCw, 
  Truck, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Banknote, 
  HelpCircle, 
  ChevronRight,
  ChevronLeft,
  Bookmark, 
  Scale, 
  BookOpen, 
  Calendar, 
  Wrench, 
  Phone, 
  Sparkles, 
  MapPin, 
  Search, 
  FileText,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { 
  CPU_VALUES, 
  GPU_VALUES, 
  RAM_VALUES, 
  STORAGE_VALUES, 
  CPU_OPTIONS_GROUPED, 
  GPU_OPTIONS_GROUPED, 
  RAM_OPTIONS, 
  STORAGE_OPTIONS, 
  BRAND_OPTIONS, 
  APPLE_CHIP_OPTIONS, 
  IPHONE_OPTIONS, 
  CONSOLE_OPTIONS, 
  POPULAR_SERIES_BY_BRAND,
  getHardwareLabel 
} from '../data/hardwareOptions';

export default function HomePage({ 
  navigate, 
  products = [], 
  blogs = [], 
  addToWishlist, 
  addToCompare, 
  isInWishlist, 
  settings 
}) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Hero Hızlı Değerleme Simülatörü State
  const [simCategory, setSimCategory] = useState('laptop');
  const [simBrand, setSimBrand] = useState('Asus');
  const [simSeries, setSimSeries] = useState('ROG Strix G16 (2023-2024 - 13./14. Nesil Intel)');
  const [simCpu, setSimCpu] = useState('i7-13');
  const [simGpu, setSimGpu] = useState('rtx4060');
  const [simRam, setSimRam] = useState('16');
  const [simStorage, setSimStorage] = useState('512ssd');
  const [simAppleChip, setSimAppleChip] = useState('m2');
  const [simPhoneModel, setSimPhoneModel] = useState('iphone15');
  const [simConsoleModel, setSimConsoleModel] = useState('ps5-slim-disk');
  const [simTabletModel, setSimTabletModel] = useState('ipad-10');

  // Donanım Yelpazesi Sekmesi
  const [hardwareTab, setHardwareTab] = useState('intel');

  const getSimDetailSummary = () => {
    if (simCategory === 'laptop' || simCategory === 'masaustu') {
      const brandPart = simBrand ? `${simBrand} ${simSeries ? `(${simSeries})` : ''} • ` : '';
      return `${brandPart}${getHardwareLabel('cpu', simCpu)} • ${getHardwareLabel('gpu', simGpu)} • ${getHardwareLabel('ram', simRam)} RAM • ${getHardwareLabel('storage', simStorage)}`;
    }
    if (simCategory === 'macbook') return `Apple MacBook ${simSeries ? `(${simSeries})` : ''} • ${getHardwareLabel('appleChip', simAppleChip)} • Retina Ekran`;
    if (simCategory === 'iphone') return `${simPhoneModel.replace('iphone', 'iPhone ').toUpperCase()}`;
    if (simCategory === 'tablet') return `${simTabletModel.toUpperCase()} Tablet`;
    if (simCategory === 'konsol') return `${simConsoleModel.toUpperCase()} Konsol`;
    return 'Standart Donanım';
  };

  const simWaMessage = `Merhaba Konya Bilgisayar (0551 045 42 55),
Aşağıdaki cihazım için değerinde nakit fiyat teklifi almak istiyorum:

📌 Cihaz Türü: ${simCategory === 'laptop' ? 'Laptop & Dizüstü' : simCategory === 'masaustu' ? 'Masaüstü Bilgisayar / Kasa' : simCategory === 'macbook' ? 'Apple MacBook' : simCategory === 'iphone' ? 'Apple iPhone' : simCategory === 'tablet' ? 'iPad / Tablet' : 'Oyun Konsolu'}
⚙️ Seçilen Özellikler: ${getSimDetailSummary()}
📍 Konum: Konya / Selçuklu mağazanıza elden teslim edebilirim.

Bu donanım için en yüksek nakit alım veya takas fiyat teklifinizi alabilir miyim?`;

  const simWaLink = `https://wa.me/905510454255?text=${encodeURIComponent(simWaMessage)}`;

  const reviews = [
    {
      name: "Uğur Y. (Selçuklu)",
      rating: 5,
      comment: "Benim sürecim internet sitesi üzerinden başladı. WhatsApp'tan Asus laptop bilgilerini gönderdim, 10 dakika içinde ön teklif verildi. Selçuklu'daki mağazalarına götürdüm, test ettikten sonra anında IBAN'ıma nakit aktardılar. Çok kibar ve güvenilir bir esnaf."
    },
    {
      name: "Mustafa K. (Meram)",
      rating: 5,
      comment: "Eski i5 kasamı verip RTX 4060 sistemle takas ettim. Aradaki farkı çok makul tuttular. Tüm parçaları gözümün önünde tek tek stres testine soktular. Konya'da bilgisayar alıp satacaksanız ilk adresiniz olsun."
    },
    {
      name: "Büşra T. (Karatay)",
      rating: 5,
      comment: "MacBook Air cihazımı satmak için birkaç yere sormuştum, en iyi ve değerinde fiyatı Konya Bilgisayar verdi. Verilerimi güvenle sıfırlayıp teslim aldılar. Kesinlikle tavsiye ederim."
    }
  ];

  const faqs = [
    {
      q: "Cihazımı satmak için nereden fiyat alabilirim?",
      a: "Sitemizdeki 'Ne Kadar Eder?' sihirbazını kullanarak saniyeler içinde anlık tahmini fiyat alabilir veya doğrudan WhatsApp hattımızdan fotoğraf ve model göndererek ön teklif alabilirsiniz."
    },
    {
      q: "Ödeme ne zaman ve nasıl yapılıyor?",
      a: "Konya mağazamızda cihazınızın kontrolleri tamamlandıktan sonra (ortalama 15 dakika) ödemeniz anında Nakit, Havale, FAST veya EFT seçenekleriyle hesabınıza aktarılır."
    },
    {
      q: "Konya dışından kargoyla satış yapabilir miyim?",
      a: "Evet! Türkiye'nin 81 ilinden ve Konya'nın tüm ilçelerinden anlaşmalı Yurtiçi Kargo kodumuzla ücretsiz gönderim yapabilirsiniz. Cihaz mağazamıza ulaştığı gün kontrolleri yapılıp ödemeniz banka hesabınıza gönderilir."
    },
    {
      q: "İkinci el ürünleriniz garantili mi?",
      a: "Tüm ikinci el cihazlarımız 20+ aşamalı teknik kontrolden ve stres testlerinden geçirilir. Tüm ürünlerimize Konya Bilgisayar Mağaza Garantisi verilmektedir."
    },
    {
      q: "Eski bilgisayarımı verip yeni bir ürünle takas edebilir miyim?",
      a: "Evet. 'Cihaz Takası' sistemimiz sayesinde eski bilgisayarınızı değerinde sayıyor, almak istediğiniz mağazamızdaki ürünün fiyatından düşerek sadece aradaki farkı ödüyorsunuz."
    }
  ];

  const filteredProducts = activeCategoryTab === 'all'
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeCategoryTab).slice(0, 8);

  return (
    <div>
      {/* 1. KURUMSAL AYDINLIK HERO BÖLÜMÜ (Kalender Bilgisayar Teması) */}
      <section className="hero-kalender" style={{ padding: '60px 0 65px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '40px'
          }}>
            {/* Sol: Metin, Vurgular & Doğrudan İletişim */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 102, 204, 0.08)',
                border: '1px solid rgba(0, 102, 204, 0.2)',
                color: '#0066cc',
                fontSize: '0.84rem',
                fontWeight: 800,
                marginBottom: '18px'
              }}>
                <span className="pulse-online" />
                <span>Konya'da İkinci El Cihaz ve Teknoloji Mağazası</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.3rem, 4.4vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.18,
                color: '#0a2540',
                letterSpacing: '-0.03em',
                marginBottom: '18px'
              }}>
                İkinci El Bilgisayar, Laptop ve Cihazınızı <span style={{ color: '#0066cc' }}>Değerinde Nakit Alıyoruz</span>
              </h1>

              <p style={{
                fontSize: '1.08rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '560px'
              }}>
                Masaüstü oyuncu kasası, gaming laptop, MacBook, iPhone, oyun konsolu ve donanım parçalarınızı Selçuklu mağazamızda anında test edip nakit ödüyoruz. Şehir dışından anlaşmalı ücretsiz kargo imkanı.
              </p>

              {/* Hızlı Eylem Düğmeleri */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button 
                  onClick={() => navigate('degerleme')}
                  className="btn btn-navy"
                  style={{ fontSize: '1rem', padding: '14px 28px' }}
                >
                  <Zap size={18} /> Cihazını Sat & Değerini Öğren →
                </button>

                <button 
                  onClick={() => navigate('urunler')}
                  className="btn btn-outline"
                  style={{ fontSize: '0.98rem', padding: '14px 24px', fontWeight: 700 }}
                >
                  Satılık Ürünleri İncele
                </button>

                <a 
                  href="tel:05510454255"
                  className="btn"
                  style={{
                    background: '#ffffff',
                    color: '#0a2540',
                    border: '1.5px solid var(--border)',
                    padding: '14px 20px',
                    fontSize: '0.96rem',
                    fontWeight: 800,
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Phone size={17} color="#0066cc" /> 0551 045 42 55
                </a>
              </div>

              {/* Güven Rozetleri Listesi */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border)',
                fontSize: '0.86rem',
                fontWeight: 700,
                color: '#334155'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span>15 Dakikada Hızlı Test & Anında Nakit</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span>20 Aşamalı Donanım Testi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span>Selçuklu Mağazamıza Elden Teslim</span>
                </div>
              </div>
            </div>

            {/* Sağ: İnteraktif Canlı Donanım & Fiyat Simülatörü */}
            <div>
              <div className="light-calc-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} color="#0066cc" />
                    <span style={{ fontWeight: 800, fontSize: '0.98rem', color: '#0a2540' }}>
                      Canlı Değerleme & Fiyat Hesaplayıcı
                    </span>
                  </div>
                  <span className="badge badge-blue">
                    Anlık Hesaplama
                  </span>
                </div>

                {/* Kategori Seçim Butonları */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'laptop' ? 'active' : ''}`}
                    onClick={() => setSimCategory('laptop')}
                  >
                    <Laptop size={14} /> Laptop
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'masaustu' ? 'active' : ''}`}
                    onClick={() => setSimCategory('masaustu')}
                  >
                    <Monitor size={14} /> Kasa / PC
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'macbook' ? 'active' : ''}`}
                    onClick={() => setSimCategory('macbook')}
                  >
                    <Laptop size={14} /> MacBook
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'iphone' ? 'active' : ''}`}
                    onClick={() => setSimCategory('iphone')}
                  >
                    <Smartphone size={14} /> iPhone
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'tablet' ? 'active' : ''}`}
                    onClick={() => setSimCategory('tablet')}
                  >
                    <Tablet size={14} /> Tablet
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip-btn ${simCategory === 'konsol' ? 'active' : ''}`}
                    onClick={() => setSimCategory('konsol')}
                  >
                    <Gamepad2 size={14} /> Konsol
                  </button>
                </div>

                {/* Form Alanları (Kategoriye Göre Dinamik) */}
                {(simCategory === 'laptop' || simCategory === 'masaustu') && (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          Marka
                        </label>
                        <select 
                          value={simBrand} 
                          onChange={e => {
                            const newBrand = e.target.value;
                            setSimBrand(newBrand);
                            const series = POPULAR_SERIES_BY_BRAND[newBrand];
                            if (series && series.length > 0) setSimSeries(series[0]);
                          }}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {BRAND_OPTIONS}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          Model / Seri
                        </label>
                        <select 
                          value={simSeries} 
                          onChange={e => setSimSeries(e.target.value)}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {(POPULAR_SERIES_BY_BRAND[simBrand] || ['Standart Model']).map((seri, idx) => (
                            <option key={idx} value={seri}>{seri}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          İşlemci (CPU)
                        </label>
                        <select 
                          value={simCpu} 
                          onChange={e => setSimCpu(e.target.value)}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {CPU_OPTIONS_GROUPED}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          Ekran Kartı (GPU)
                        </label>
                        <select 
                          value={simGpu} 
                          onChange={e => setSimGpu(e.target.value)}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {GPU_OPTIONS_GROUPED}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          RAM Bellek
                        </label>
                        <select 
                          value={simRam} 
                          onChange={e => setSimRam(e.target.value)}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {RAM_OPTIONS}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                          SSD / Depolama
                        </label>
                        <select 
                          value={simStorage} 
                          onChange={e => setSimStorage(e.target.value)}
                          className="form-control"
                          style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                        >
                          {STORAGE_OPTIONS}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {simCategory === 'macbook' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                        MacBook Serisi
                      </label>
                      <select 
                        value={simSeries} 
                        onChange={e => setSimSeries(e.target.value)}
                        className="form-control"
                        style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                      >
                        {(POPULAR_SERIES_BY_BRAND['Apple'] || []).map((seri, idx) => (
                          <option key={idx} value={seri}>{seri}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                        Apple Çipi
                      </label>
                      <select 
                        value={simAppleChip} 
                        onChange={e => setSimAppleChip(e.target.value)}
                        className="form-control"
                        style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                      >
                        {APPLE_CHIP_OPTIONS}
                      </select>
                    </div>
                  </div>
                )}

                {simCategory === 'iphone' && (
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                      iPhone Modeli
                    </label>
                    <select 
                      value={simPhoneModel} 
                      onChange={e => setSimPhoneModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                    >
                      {IPHONE_OPTIONS}
                    </select>
                  </div>
                )}

                {simCategory === 'tablet' && (
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                      Tablet Modeli
                    </label>
                    <select 
                      value={simTabletModel} 
                      onChange={e => setSimTabletModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                    >
                      <optgroup label="Apple iPad Modelleri">
                        <option value="ipad-pro-m4">Apple iPad Pro M4 (2024 - 11"/13")</option>
                        <option value="ipad-pro-m2">Apple iPad Pro M2 (11"/12.9")</option>
                        <option value="ipad-air-m2">Apple iPad Air M2 (2024)</option>
                        <option value="ipad-air-m1">Apple iPad Air M1 (5. Nesil)</option>
                        <option value="ipad-10">Apple iPad 10. Nesil (10.9 inç)</option>
                        <option value="ipad-9">Apple iPad 9. Nesil (10.2 inç)</option>
                        <option value="ipad-mini-6">Apple iPad mini 6. Nesil</option>
                      </optgroup>
                      <optgroup label="Samsung Galaxy Tab">
                        <option value="tab-s9-ultra">Samsung Galaxy Tab S9 Ultra</option>
                        <option value="tab-s9">Samsung Galaxy Tab S9 / S9+</option>
                        <option value="tab-s8">Samsung Galaxy Tab S8 / S8 Ultra</option>
                        <option value="tab-a9">Samsung Galaxy Tab A9 / A9+</option>
                      </optgroup>
                    </select>
                  </div>
                )}

                {simCategory === 'konsol' && (
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                      Konsol Modeli
                    </label>
                    <select 
                      value={simConsoleModel} 
                      onChange={e => setSimConsoleModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '8px 10px', fontSize: '0.84rem' }}
                    >
                      {CONSOLE_OPTIONS}
                    </select>
                  </div>
                )}

                {/* Seçilen Donanım Özeti & Uzman Teklifi Kutusu */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(10, 37, 64, 0.03) 100%)',
                  border: '1.5px solid rgba(0, 102, 204, 0.22)',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      ✓ Donanım Özellikleri Seçildi
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#e0f2fe', color: '#0369a1', fontWeight: 800, padding: '2px 8px', borderRadius: '10px' }}>
                      Şeffaf Ekspertiz
                    </span>
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0a2540', lineHeight: 1.45, marginBottom: '8px' }}>
                    {getSimDetailSummary()}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                    *Cihazınızın kozmetik durumu, batarya sağlığı ve FurMark testine göre uzmanımızdan en yüksek nakit/FAST teklifi verilir.
                  </div>
                </div>

                {/* Aksiyon Düğmeleri */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '10px' }}>
                  <a 
                    href={simWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa"
                    style={{ fontSize: '0.84rem', padding: '12px 10px', fontWeight: 800 }}
                  >
                    <WhatsAppIcon size={16} /> WhatsApp Teklif Al
                  </a>

                  <button 
                    type="button"
                    onClick={() => navigate('degerleme', { category: simCategory })}
                    className="btn btn-navy"
                    style={{ fontSize: '0.84rem', padding: '12px 10px', fontWeight: 800 }}
                  >
                    Detaylı Sihirbaz →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIZLI KATEGORİ BANTLARI */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', padding: '16px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'masaustu', label: 'Masaüstü PC', icon: <Monitor size={15} /> },
              { id: 'laptop', label: 'Laptop & Notebook', icon: <Laptop size={15} /> },
              { id: 'macbook', label: 'MacBook & iMac', icon: <Cpu size={15} /> },
              { id: 'iphone', label: 'iPhone & Telefon', icon: <Smartphone size={15} /> },
              { id: 'konsol', label: 'PlayStation & Konsol', icon: <Gamepad2 size={15} /> },
              { id: 'ekran_karti', label: 'Ekran Kartı & Parça', icon: <Cpu size={15} /> },
              { id: 'monitor', label: 'Monitör & Ekipman', icon: <Monitor size={15} /> },
              { id: 'tablet', label: 'iPad & Tablet', icon: <Tablet size={15} /> }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => { setSimCategory(cat.id); navigate('degerleme', { category: cat.id }); }}
                className="calc-chip-btn"
                style={{ fontSize: '0.84rem', padding: '8px 16px', borderRadius: 'var(--radius-full)' }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CİHAZINIZI DEĞERİNDE SATIN (6 BÜYÜK VİTRİN KARTI) */}
      <section style={{ padding: '64px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 42px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
              Değerinde Nakit Alım
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0a2540', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              Hangi Cihazınızı Satmak İstiyorsunuz?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Konya Selçuklu mağazamızda 15 dakikalık şeffaf donanım testi sonrası anında elden nakit veya banka hesabınıza FAST ile ödeme yapıyoruz.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            <CatShowcaseCard 
              tag="Gaming & Ofis Kasaları"
              title="Masaüstü Bilgisayar"
              desc="Toplama oyun bilgisayarları, iş istasyonları ve hazır sistem kasalarınızı güncel donanım değerinde nakit alıyoruz."
              image="/images/categories/cat_desktop.png"
              onClick={() => navigate('degerleme', { category: 'masaustu' })}
            />

            <CatShowcaseCard 
              tag="RTX & Ofis Laptopları"
              title="Laptop & Dizüstü Bilgisayar"
              desc="Gaming laptoplar (RTX serisi), ofis ve ultrabook modellerinizi 15 dakikalık donanım ve batarya testiyle anında nakit alıyoruz."
              image="/images/categories/cat_laptop.png"
              onClick={() => navigate('degerleme', { category: 'laptop' })}
            />

            <CatShowcaseCard 
              tag="M1, M2, M3, M4 & Intel"
              title="MacBook & Apple Cihazlar"
              desc="Apple Silicon chipli veya Intel işlemcili MacBook Air, MacBook Pro, Mac Mini ve iMac cihazlarınızı değerinde alıyoruz."
              image="/images/categories/cat_macbook.png"
              onClick={() => navigate('degerleme', { category: 'macbook' })}
            />

            <CatShowcaseCard 
              tag="Tüm iPhone Modelleri"
              title="iPhone & Akıllı Telefon"
              desc="iPhone 11'den 16 Pro Max'e kadar pil sağlığı ve kozmetik kondisyonuna göre değerinde nakit veya takas imkanı."
              image="/images/categories/cat_iphone.png"
              onClick={() => navigate('degerleme', { category: 'iphone' })}
            />

            <CatShowcaseCard 
              tag="PS5, PS4 Pro & Xbox"
              title="PlayStation & Oyun Konsolu"
              desc="PlayStation 5 Pro/Slim, PS4 Pro ve Xbox Series X/S konsollarınızı kolları ve orijinal oyunlarıyla birlikte nakit alıyoruz."
              image="/images/categories/cat_console.png"
              onClick={() => navigate('degerleme', { category: 'konsol' })}
            />

            <CatShowcaseCard 
              tag="RTX 40/30 & AMD RX"
              title="Ekran Kartı & Donanım Parçası"
              desc="NVIDIA RTX 40/30/20 serisi ve AMD Radeon ekran kartları, işlemci, RAM ve SSD parçalarınızı tek tek veya toplu alıyoruz."
              image="/images/categories/cat_gpu.png"
              onClick={() => navigate('degerleme', { category: 'ekran_karti' })}
            />
          </div>
        </div>
      </section>

      {/* 4. MARKA VE EKOSİSTEM BANDI */}
      <section style={{ padding: '24px 0', background: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            opacity: 0.85
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Desteklenen Markalar:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              {['ASUS ROG / TUF', 'APPLE', 'MSI GAMING', 'LENOVO LEGION', 'DELL ALIENWARE', 'HP OMEN & VICTUS', 'MONSTER TULPAR', 'GIGABYTE AORUS', 'SONY PLAYSTATION'].map((brand, i) => (
                <span key={i} style={{ fontSize: '0.88rem', fontWeight: 800, color: '#334155', letterSpacing: '0.3px' }}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAĞAZAMIZDAKİ GÜNCEL ÜRÜNLER (Canlı Vitrin) */}
      <section style={{ padding: '70px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '8px' }}>Test Edilmiş & Garantili</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0a2540', letterSpacing: '-0.5px' }}>
                Mağazamızdaki Güncel Ürünler
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '4px' }}>
                Tüm ürünler 20 aşamalı donanım testinden geçmiş, termal bakımı yapılmış ve Konya Bilgisayar güvencesindedir.
              </p>
            </div>
            <button 
              onClick={() => navigate('urunler')}
              className="btn btn-outline btn-sm"
              style={{ fontWeight: 800, padding: '10px 18px' }}
            >
              Tüm Ürünleri İnceleyin ({products.length}) →
            </button>
          </div>

          {/* Kategori Sekmeleri */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
            <TabBtn label="Tümü" active={activeCategoryTab === 'all'} onClick={() => setActiveCategoryTab('all')} />
            <TabBtn label="Laptop" active={activeCategoryTab === 'laptop'} onClick={() => setActiveCategoryTab('laptop')} />
            <TabBtn label="Masaüstü Bilgisayar" active={activeCategoryTab === 'masaustu'} onClick={() => setActiveCategoryTab('masaustu')} />
            <TabBtn label="MacBook" active={activeCategoryTab === 'macbook'} onClick={() => setActiveCategoryTab('macbook')} />
            <TabBtn label="PlayStation & Konsol" active={activeCategoryTab === 'konsol'} onClick={() => setActiveCategoryTab('konsol')} />
            <TabBtn label="Monitör & Ekipman" active={activeCategoryTab === 'monitor'} onClick={() => setActiveCategoryTab('monitor')} />
          </div>

          {/* Ürün Kartları Izgarası */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map(product => {
              const cpuSpec = product.specs?.['İşlemci'] || product.specs?.['cpu'] || '';
              const gpuSpec = product.specs?.['Ekran Kartı'] || product.specs?.['gpu'] || '';
              const ramSpec = product.specs?.['RAM'] || product.specs?.['ram'] || '';
              const ssdSpec = product.specs?.['Depolama'] || product.specs?.['SSD'] || product.specs?.['storage'] || '';

              return (
                <div 
                  key={product.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all var(--tr-fast)',
                    boxShadow: '0 4px 16px rgba(10, 37, 64, 0.05)'
                  }}
                  className="product-card-hover"
                >
                  {/* Resim & Kalp Butonu */}
                  <div style={{ position: 'relative', height: '205px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => navigate('urun-detay', { id: product.id })}
                    />

                    {/* Listeme Ekle Kalp Butonu */}
                    <button 
                      onClick={() => addToWishlist(product)}
                      title={isInWishlist(product.id) ? "Listeden Çıkar" : "Listeme Ekle"}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: isInWishlist(product.id) ? 'var(--primary-bright)' : 'rgba(255, 255, 255, 0.95)',
                        color: isInWishlist(product.id) ? '#ffffff' : '#0a2540',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>

                  {/* İçerik */}
                  <div style={{ padding: '20px', display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                      {product.categoryName || product.category}
                    </div>
                    <h3 
                      onClick={() => navigate('urun-detay', { id: product.id })}
                      style={{ 
                        fontSize: '1.05rem', 
                        fontWeight: 800, 
                        color: '#0a2540', 
                        lineHeight: 1.35, 
                        marginBottom: '10px', 
                        cursor: 'pointer',
                        minHeight: '44px'
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Fiyat */}
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0a2540', marginBottom: '12px', letterSpacing: '-0.3px' }}>
                      {Number(product.price).toLocaleString('tr-TR')} TL
                    </div>

                    {/* 2x2 Donanım Özellikleri Izgarası */}
                    <div className="spec-grid-2x2">
                      <div className="spec-chip-item" title={cpuSpec || 'İşlemci'}>
                        <Cpu size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{cpuSpec ? cpuSpec.slice(0, 16) : 'Çok Çekirdek'}</span>
                      </div>
                      <div className="spec-chip-item" title={ramSpec || 'Bellek'}>
                        <Zap size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{ramSpec || '16 GB RAM'}</span>
                      </div>
                      <div className="spec-chip-item" title={gpuSpec || 'Ekran Kartı'}>
                        <Activity size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{gpuSpec ? gpuSpec.slice(0, 16) : 'Grafik Kartı'}</span>
                      </div>
                      <div className="spec-chip-item" title={ssdSpec || 'Depolama'}>
                        <ShieldCheck size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{ssdSpec ? ssdSpec.slice(0, 16) : 'NVMe SSD'}</span>
                      </div>
                    </div>

                    {/* Eylem Düğmeleri */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '8px', marginTop: 'auto' }}>
                      <a 
                        href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20${encodeURIComponent(product.title)}%20(Fiyat%3A%20${product.price}%20TL)%20%C3%BCr%C3%BCn%C3%BCn%C3%BC%20sat%C4%B1n%20almak%20istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-navy"
                        style={{ fontSize: '0.8rem', padding: '9px 8px', gap: '5px' }}
                      >
                        <WhatsAppIcon size={15} /> Satın Al
                      </a>
                      <button 
                        onClick={() => navigate('urun-detay', { id: product.id })}
                        className="btn btn-outline"
                        style={{ fontSize: '0.8rem', padding: '9px 8px', fontWeight: 800 }}
                      >
                        Detaylar
                      </button>
                      <button 
                        onClick={() => addToCompare(product)}
                        title="Karşılaştır"
                        className="btn"
                        style={{ background: '#f8fafc', color: '#0a2540', padding: '0 10px', border: '1px solid var(--border)' }}
                      >
                        <Scale size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CİHAZINIZI NASIL SATABİLİRSİNİZ? (3 Adım) */}
      <section style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Kolay ve Hızlı Süreç</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0a2540', letterSpacing: '-0.5px' }}>
              Cihazınızı Nasıl Satabilirsiniz?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Uzun bekleme süreleri veya güvenilmez alıcılarla uğraşmadan 3 adımda paranızı anında alın.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 102, 204, 0.1)',
                color: '#0066cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                01
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                Özellikleri Belirtin & Değerini Öğrenin
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Sitemizdeki hesaplama formunu doldurun veya WhatsApp'tan cihazınızın modelini ve özelliklerini iletin, anında ön fiyat teklifi verelim.
              </p>
            </div>

            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 102, 204, 0.1)',
                color: '#0066cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                02
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                Mağazamıza Getirin veya Ücretsiz Kargolayın
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Konya Selçuklu Nalçacı mağazamıza elden getirebilir veya Türkiye geneli anlaşmalı Yurtiçi Kargo kodumuzla ücretsiz gönderebilirsiniz.
              </p>
            </div>

            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(22, 163, 74, 0.12)',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                03
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                15 Dk Test Sonrası Anında Nakit / FAST
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Cihazınız uzman teknisyenlerimizce 15 dakikada test edilir. Anlaşılan tutar hiçbir kesinti olmadan anında elden nakit veya banka hesabınıza FAST ile ödenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BÜYÜK ÇAĞRI BANDI (Callout Banner) */}
      <section style={{ padding: '40px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="callout-banner-card">
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.5px' }}>
              Cihazınızı Değerinde Nakit Satmak İçin Hemen İletişime Geçin
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '720px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              0551 045 42 55 numaralı hattımızdan arayabilir veya WhatsApp üzerinden fotoğraflarını göndererek anında teklif alabilirsiniz.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#0a2540',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  padding: '13px 28px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
                }}
              >
                📞 {settings?.phone || '0551 045 42 55'} Hemen Ara
              </a>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1%20satmak%20istiyorum%2C%20fiyat%20teklifi%20alabilir%20miyim%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ fontSize: '0.95rem', padding: '13px 28px', fontWeight: 800 }}
              >
                <WhatsAppIcon size={18} /> WhatsApp'tan Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GENİŞ DONANIM YELPAZESİ & İŞLEMCİ MATRİKSİ */}
      <section style={{ padding: '54px 0', background: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-bright)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <Cpu size={16} /> Donanım Destek Veritabanı
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0a2540', marginTop: '4px' }}>
                Bütün İşlemci & Ekran Kartı Çeşitleri Listelendi
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                En yeni Intel Core Ultra'dan eski nesillere, AMD Ryzen 9000'den APU'lara tüm donanımları seçip değerinde nakit satabilirsiniz.
              </p>
            </div>

            {/* Donanım Ailesi Sekmeleri */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button 
                className={`btn btn-sm ${hardwareTab === 'intel' ? 'btn-navy' : 'btn-outline'}`}
                onClick={() => setHardwareTab('intel')}
                style={{ fontWeight: 800 }}
              >
                Intel Core & Ultra (50+ CPU)
              </button>
              <button 
                className={`btn btn-sm ${hardwareTab === 'amd' ? 'btn-navy' : 'btn-outline'}`}
                onClick={() => setHardwareTab('amd')}
                style={{ fontWeight: 800 }}
              >
                AMD Ryzen (Tüm Seriler)
              </button>
              <button 
                className={`btn btn-sm ${hardwareTab === 'gpu' ? 'btn-navy' : 'btn-outline'}`}
                onClick={() => setHardwareTab('gpu')}
                style={{ fontWeight: 800 }}
              >
                NVIDIA & AMD GPU
              </button>
              <button 
                className={`btn btn-sm ${hardwareTab === 'apple' ? 'btn-navy' : 'btn-outline'}`}
                onClick={() => setHardwareTab('apple')}
                style={{ fontWeight: 800 }}
              >
                Apple Silicon (M1-M4)
              </button>
            </div>
          </div>

          {/* Donanım Çipleri Izgarası */}
          <div style={{
            background: '#f8fafc',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1.5px solid var(--border)'
          }}>
            {hardwareTab === 'intel' && (
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Intel Core Ultra & 14./13./12./11./10. Nesil Seçenekleri:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: "Core Ultra 9 / 7 / 5 (AI NPU)", val: "ultra7" },
                    { label: "i9 14900K / 14900HX", val: "i9-14" },
                    { label: "i7 14700K / 14700HX", val: "i7-14" },
                    { label: "i5 14400F / 14600K", val: "i5-14" },
                    { label: "i9 13900K / 13980HX", val: "i9-13" },
                    { label: "i7 13700H / 13700K", val: "i7-13" },
                    { label: "i5 13400F / 13500H", val: "i5-13" },
                    { label: "i7 12700H / 12700K", val: "i7-12" },
                    { label: "i5 12400F / 12450H", val: "i5-12" },
                    { label: "i7 11800H / 11700K", val: "i7-11" },
                    { label: "i5 11400H / 11400F", val: "i5-11" },
                    { label: "i7 / i5 10. Nesil (10750H / 10400F)", val: "i7-10" },
                    { label: "i7 / i5 9. Nesil (9750H / 9400F)", val: "i7-9" },
                    { label: "i7 / i5 8. Nesil (8750H / 8400)", val: "i7-8" },
                    { label: "i7 / i5 4. - 7. Nesil", val: "i7-7" },
                    { label: "Intel Xeon İş İstasyonu", val: "xeon" },
                    { label: "Pentium Gold & Celeron", val: "pentium" }
                  ].map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setSimCpu(item.val); navigate('degerleme', { category: 'laptop' }); }}
                      style={{
                        padding: '7px 14px',
                        background: '#ffffff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--heading)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.color = '#0066cc'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--heading)'; }}
                    >
                      ⚡ {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {hardwareTab === 'amd' && (
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginBottom: '12px', textTransform: 'uppercase' }}>
                  AMD Ryzen 9000, 7000, 5000, 3000 & X3D Serileri:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: "Ryzen 9 9950X / 9900X", val: "r9-9" },
                    { label: "Ryzen 7 9700X / 8700G", val: "r7-9" },
                    { label: "Ryzen 7 7800X3D (Efsane Oyuncu)", val: "r7-7" },
                    { label: "Ryzen 9 7950X / 7900X", val: "r9-7" },
                    { label: "Ryzen 5 7600X / 7500F", val: "r5-7" },
                    { label: "Ryzen 7 5800X3D / 5700X", val: "r7-5" },
                    { label: "Ryzen 5 5600 / 5600X / 5500", val: "r5-5" },
                    { label: "Ryzen 7 4800H / 3700X", val: "r7-3" },
                    { label: "Ryzen 5 3600 / 3500X", val: "r5-3" },
                    { label: "Ryzen 5 2600 / 1600 AF", val: "r5-2" },
                    { label: "AMD Athlon & Giriş Seviye", val: "athlon" }
                  ].map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setSimCpu(item.val); navigate('degerleme', { category: 'masaustu' }); }}
                      style={{
                        padding: '7px 14px',
                        background: '#ffffff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--heading)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.color = '#0066cc'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--heading)'; }}
                    >
                      🚀 {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {hardwareTab === 'gpu' && (
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginBottom: '12px', textTransform: 'uppercase' }}>
                  NVIDIA GeForce RTX 40/30/20, GTX & AMD Radeon Ekran Kartları:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: "RTX 4090 (24GB) / RTX 4080", val: "rtx4090" },
                    { label: "RTX 4070 Ti / Super (12GB)", val: "rtx4070s" },
                    { label: "RTX 4070 (8GB/12GB)", val: "rtx4070" },
                    { label: "RTX 4060 Ti (8GB/16GB)", val: "rtx4060ti" },
                    { label: "RTX 4060 (8GB)", val: "rtx4060" },
                    { label: "RTX 4050 (6GB F/P)", val: "rtx4050" },
                    { label: "RTX 3080 / 3080 Ti / 3090", val: "rtx3080" },
                    { label: "RTX 3070 / 3070 Ti", val: "rtx3070" },
                    { label: "RTX 3060 / 3060 Ti", val: "rtx3060" },
                    { label: "RTX 3050 / 3050 Ti", val: "rtx3050" },
                    { label: "GTX 1660 Super / Ti", val: "gtx1660s" },
                    { label: "GTX 1650 (4GB)", val: "gtx1650" },
                    { label: "Radeon RX 7900 / 7800 XT", val: "rx7800" },
                    { label: "Intel Arc A770 / A750", val: "arc-a770" }
                  ].map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setSimGpu(item.val); navigate('degerleme', { category: 'laptop' }); }}
                      style={{
                        padding: '7px 14px',
                        background: '#ffffff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--heading)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.color = '#0066cc'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--heading)'; }}
                    >
                      🎮 {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {hardwareTab === 'apple' && (
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Apple Silicon M1 - M4 & iPhone A-Bionic Cihazlar:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: "Apple M4 / M4 Pro / M4 Max", val: "m4" },
                    { label: "Apple M3 Pro / M3 Max", val: "m3pro" },
                    { label: "Apple M3 (Air & Pro)", val: "m3" },
                    { label: "Apple M2 Pro / M2 Max", val: "m2pro" },
                    { label: "Apple M2 (Air 13 / 15)", val: "m2" },
                    { label: "Apple M1 Pro / M1 Max", val: "m1pro" },
                    { label: "Apple M1 (Air / Pro 13)", val: "m1" },
                    { label: "iPhone 16 Pro Max / 16 Pro", val: "iphone16promax" },
                    { label: "iPhone 15 Pro Max / 15", val: "iphone15promax" },
                    { label: "iPhone 14 / 13 / 12 Serisi", val: "iphone14" },
                    { label: "PlayStation 5 Pro & Slim", val: "ps5-pro" }
                  ].map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => navigate('degerleme', { category: 'macbook' })}
                      style={{
                        padding: '7px 14px',
                        background: '#ffffff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--heading)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.color = '#0066cc'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--heading)'; }}
                    >
                      🍏 {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. SİZE NASIL YARDIMCI OLABİLİRİZ? (Hizmetler) */}
      <section style={{ padding: '70px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '10px' }}>Hizmetlerimiz</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0a2540', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              Size Nasıl Yardımcı Olabiliriz?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              İkinci el teknoloji alım satımından teknik servis ve takasa kadar Konya'daki tam kapsamlı çözüm ortağınız.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <ServiceCard 
              image="/images/spec_valuation.jpg"
              icon={<Banknote size={26} />}
              title="Cihazınızı Değerinde Satın"
              desc="Eski laptop, masaüstü veya Apple cihazınızı değerinde alıyoruz. Selçuklu mağazamızda anında nakit veya IBAN ödemesi."
              linkText="Satmak İstediğiniz Cihazı Seçin →"
              onClick={() => navigate('degerleme')}
            />

            <ServiceCard 
              image="/images/hero_tech.jpg"
              icon={<Laptop size={26} />}
              title="İkinci El Satılık Ürünler"
              desc="Mağazamızdaki tüm ürünler detaylı testlerden geçmiş, termal bakımı yapılmış ve Konya Bilgisayar garantisi altındadır."
              linkText="Satılık Ürünleri Görün →"
              onClick={() => navigate('urunler')}
            />

            <ServiceCard 
              image="/images/service_diagnostics.jpg"
              icon={<Cpu size={26} />}
              title="Bilgisayar Teknik Servisi"
              desc="Termal macun yenileme, fan temizliği, ekran değişimi, format, donanım yükseltme ve özel sistem toplama hizmetleri."
              linkText="Servis Hizmetlerini İnceleyin →"
              onClick={() => navigate('hizmetler')}
            />

            <ServiceCard 
              image="/images/trade_in.jpg"
              icon={<RefreshCw size={26} />}
              title="Cihazınızı Takas Edin"
              desc="Mevcut bilgisayarınızı getirin, değerini stoktaki yeni cihazınızın fiyatından düşerek kolayca yenileyin."
              linkText="Takas Seçeneklerini İnceleyin →"
              onClick={() => navigate('takas')}
            />

            <ServiceCard 
              image="/images/secure_cargo.jpg"
              icon={<Truck size={26} />}
              title="Kargoyla Cihaz Satışı"
              desc="Konya ilçeleri ve 81 ilden Yurtiçi Kargo anlaşma kodumuzla ücretsiz gönderin. Test sonrası paranız hesabınızda."
              linkText="Kargoyla Satış Rehberi →"
              onClick={() => navigate('kargo')}
            />

            <ServiceCard 
              image="/images/corporate_buyback.jpg"
              icon={<ShieldCheck size={26} />}
              title="Toplu & Kurumsal Alım"
              desc="Ofis, şirket ve internet kafe yenilemelerinizde adetli laptop, kasa ve monitörler için en yüksek toplu teklifi sunuyoruz."
              linkText="Kurumsal Teklif Alın →"
              onClick={() => navigate('toplu-alim')}
            />
          </div>
        </div>
      </section>

      {/* 5. TEKNOLOJİ REHBERİ & BLOG */}
      {blogs && blogs.length > 0 && (
        <section style={{ padding: '70px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
                  <BookOpen size={14} /> Teknoloji Rehberi & İpuçları
                </span>
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
                  Konya Bilgisayar Blog
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                  İkinci el cihaz alım-satım rehberleri, bakım tavsiyeleri ve donanım testleri.
                </p>
              </div>
              <button 
                onClick={() => navigate('blog')}
                className="btn btn-outline"
                style={{ fontWeight: 700 }}
              >
                Tüm Yazıları Gör ({blogs.length}) →
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {blogs.filter(b => b.published !== false).slice(0, 3).map(post => (
                <article
                  key={post.id}
                  onClick={() => navigate('blog-detay', { slug: post.slug || post.id })}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all var(--tr-fast)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  className="product-card-hover"
                >
                  <div style={{ position: 'relative', height: '190px', background: '#f1f5f9' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(10, 37, 64, 0.88)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} /> {new Date(post.createdAt || Date.now()).toLocaleDateString('tr-TR')}
                      </span>
                      <span>•</span>
                      <span>{post.readTime || '4 dk okuma'}</span>
                    </div>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                      {post.excerpt?.slice(0, 110)}...
                    </p>
                    <div style={{ color: 'var(--primary-bright)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Yazıyı Oku <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. MÜŞTERİ YORUMLARI (Carousel) */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#fbbf24" />)}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--heading)' }}>
              Müşterilerimiz Ne Diyor?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Konya'daki gerçek müşteri deneyimleri ve doğrulanmış değerlendirmeler.
            </p>
          </div>

          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 32px',
            border: '1px solid var(--border)',
            position: 'relative',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--heading)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' }}>
              "{reviews[currentReviewIndex].comment}"
            </p>
            <div style={{ fontWeight: 800, color: 'var(--primary-bright)', fontSize: '0.98rem' }}>
              {reviews[currentReviewIndex].name}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
              <button 
                onClick={() => setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CİHAZINIZA NASIL FİYAT VERİYORUZ? (Şeffaf Ekspertiz Süreci) */}
      <section style={{ padding: '70px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
              <ShieldCheck size={14} /> Şeffaf Ekspertiz
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '10px' }}>
              Cihazınıza Nasıl Fiyat Veriyoruz?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Kulaktan dolma rakamlarla değil, cihazınızın anlık piyasa değeri ve donanım sağlığına göre değerinde nakit teklif sunuyoruz.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                Donanım & Nesil Tespiti
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                İşlemcinin tam nesli (i5 12450H vb.), ekran kartının watt gücü (RTX 4060 140W vb.), RAM frekansı ve SSD okuma hızları incelenir.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                FurMark & Sıcaklık Testi
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Cihaz 10-15 dakika tam yük stres testine sokulur. Fanların çalışma sesi, thermal throttling (ısınma kaynaklı kasma) ve termal macun durumu ölçülür.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                SSD & Pil Sağlığı Raporu
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                CrystalDiskInfo ile diskteki bad sector ve sağlık yüzdesi incelenir. Windows battery report ile pilin fabrika döngüsü ve şarj kapasitesi netleştirilir.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                15 Dk. Anında Nakit / FAST
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Test tamamlandığında anlaşılan fiyat hiçbir kesinti yapılmadan anında nakit veya IBAN hesabınıza FAST/Havale olarak ödenir.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigate('degerleme')}
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '1.05rem', fontWeight: 800 }}
            >
              Cihazınızın Değerini Hemen Hesaplayın →
            </button>
          </div>
        </div>
      </section>

      {/* 7. LAPTOP MODELİNİ NEREDE BULABİLİRSİNİZ? (Hızlı Rehber Araç) */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>
                <FileText size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Pratik İpucu
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
                Laptopunuzun Tam Modelini Nerede Bulabilirsiniz?
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Doğru fiyat teklifi alabilmek için cihazınızın tam modelini veya donanım özelliklerini öğrenmek çok kolaydır:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: '#60a5fa' }} />
                  <span><strong>Yöntem 1:</strong> Klavyenizde <strong>Windows + R</strong> tuşlarına basıp <code>msinfo32</code> yazın.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: '#60a5fa' }} />
                  <span><strong>Yöntem 2:</strong> Laptopun altındaki etikette yer alan tam seri numarasını fotoğraflayın.</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px' }}>
                Zaman Kaybetmek İstemiyor musunuz?
              </h4>
              <p style={{ fontSize: '0.88rem', opacity: 0.85, marginBottom: '20px' }}>
                Laptopunuzun alt kapağının ve açık ekranının fotoğrafını WhatsApp'tan atın, model ve özellikleri biz çıkarıp anında fiyat verelim!
              </p>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1n%20foto%C4%9Fraflar%C4%B1n%C4%B1%20at%C4%B1yorum%2C%20fiyat%20teklifi%20alabilir%20miyim%3F`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa"
                style={{ width: '100%', padding: '12px', fontWeight: 800 }}
              >
                Fotoğraf Gönder & Fiyat Al (0551 045 42 55)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KONYA'NIN 31 İLÇESİNDE VE 81 İLDE ALIM MERKEZİ */}
      <section style={{ padding: '60px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <span className="badge badge-green" style={{ marginBottom: '8px' }}>
              <MapPin size={14} /> Konya Geneli Kapsama
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '10px' }}>
              Konya'nın 31 İlçesinde İkinci El Alım Ağı
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
              Konya merkezde olmasanız bile anlaşmalı Yurtiçi Kargo kodumuzla cihazınızı ücretsiz gönderip aynı gün paranızı banka hesabınıza alabilirsiniz.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            maxWidth: '850px',
            margin: '0 auto 28px'
          }}>
            {[
              'Selçuklu', 'Meram', 'Karatay', 'Akşehir', 'Beyşehir', 'Ereğli', 'Seydişehir',
              'Cihanbeyli', 'Kulu', 'Ilgın', 'Çumra', 'Doğanhisar', 'Kadınhanı', 'Bozkır',
              'Sarayönü', 'Yunak', 'Hüyük', 'Hadim', 'Altınekin', 'Tuzlukçu', 'Güneysınır',
              'Çeltik', 'Derbent', 'Taşkent', 'Emirgazi', 'Akören', 'Ahırlı', 'Yalıhüyük', 'Halkapınar'
            ].map((ilce, i) => (
              <span key={i} style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--heading)'
              }}>
                📍 {ilce}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigate('kargo')}
              className="btn btn-outline"
              style={{ fontWeight: 700 }}
            >
              Kargoyla Satış Detaylarını İnceleyin →
            </button>
          </div>
        </div>
      </section>

      {/* 9. SSS BÖLÜMÜ (Accordion) */}
      <section style={{ padding: '70px 0', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Merak Edilenler</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--heading)' }}>
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--heading)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--primary-bright)' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 22px 20px', color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KONYA MAĞAZA KONUMU & HARİTA */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Mağazamıza Bekleriz</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '14px' }}>
                Selçuklu Mağazamız
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
                {settings?.address || 'Feritpaşa Mah. Ahmet Hilmi Nalçacı Cad. No:42/B, Selçuklu / KONYA'} adresindeyiz. Mağazamıza her gün 09:00 - 20:00 arasında randevu almadan gelebilirsiniz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} style={{ color: 'var(--primary-bright)' }} />
                  <span>Çalışma Saatleri: <strong>{settings?.workingHours || '09:00 - 20:00 (Her gün)'}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--primary-bright)' }} />
                  <span>Ödeme Türleri: <strong>Nakit, Havale, FAST, Kredi Kartı</strong></span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href={`tel:${settings?.phoneRaw || '905510454255'}`}
                  className="btn btn-primary"
                  style={{ background: '#16a34a', fontWeight: 800 }}
                >
                  📞 Hemen Ara: {settings?.phone || '0551 045 42 55'}
                </a>
                <a 
                  href={`https://wa.me/${settings?.whatsapp || '905510454255'}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-wa"
                >
                  WhatsApp'tan Konum İsteyin
                </a>
                <button 
                  onClick={() => navigate('iletisim')}
                  className="btn btn-outline"
                >
                  Yol Tarifi & İletişim →
                </button>
              </div>
            </div>

            {/* Harita Embed */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              height: '340px'
            }}>
              <iframe 
                src={settings?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100770.83538965876!2d32.4178788448373!3d37.87834524792622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d71221bd%3A0x897914eec5f524f7!2sKonya!5e0!3m2!1str!2str"}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Konya Bilgisayar Konum"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .spec-pill {
          background: var(--surface-2);
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
        .product-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg) !important;
          border-color: rgba(0, 89, 191, 0.3) !important;
        }
      `}</style>
    </div>
  );
}

function HeroCatBtn({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'var(--surface-2)',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        color: 'var(--heading)',
        transition: 'all var(--tr-fast)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.borderColor = 'var(--primary-bright)';
        e.currentTarget.style.color = 'var(--primary-bright)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--surface-2)';
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--heading)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon}
      <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{label}</span>
    </button>
  );
}

function ServiceCard({ icon, title, desc, linkText, onClick, image }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {image && (
        <div style={{
          margin: '-24px -24px 18px -24px',
          height: '145px',
          background: 'linear-gradient(180deg, #ffffff, var(--surface-2))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border-light)',
          padding: '10px'
        }}>
          <img 
            src={image} 
            alt={title} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '125px', 
              objectFit: 'contain', 
              transition: 'transform var(--tr-fast)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '16px',
        background: 'var(--primary-glow)',
        color: 'var(--primary-bright)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
        {desc}
      </p>
      <button 
        onClick={onClick}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--primary-bright)',
          fontWeight: 700,
          fontSize: '0.92rem',
          textAlign: 'left',
          cursor: 'pointer',
          padding: 0
        }}
      >
        {linkText}
      </button>
    </div>
  );
}

function DeviceGridItem({ icon, image, name, sub, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '22px 14px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: 'var(--shadow-sm)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--primary-bright)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 89, 191, 0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {image ? (
        <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={image} 
            alt={name} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.08))',
              transition: 'transform 0.2s ease'
            }} 
          />
        </div>
      ) : (
        <div style={{ color: 'var(--primary-bright)' }}>{icon}</div>
      )}
      <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--heading)' }}>{name}</div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{sub}</div>
    </div>
  );
}

function TabBtn({ label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 18px',
        borderRadius: 'var(--radius-full)',
        fontWeight: 700,
        fontSize: '0.88rem',
        border: '1px solid',
        borderColor: active ? 'var(--primary-bright)' : 'var(--border)',
        background: active ? 'var(--primary-bright)' : '#ffffff',
        color: active ? '#ffffff' : 'var(--text)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all var(--tr-fast)'
      }}
    >
      {label}
    </button>
  );
}

function CatShowcaseCard({ title, desc, image, tag, onClick }) {
  return (
    <div 
      className="cat-showcase-card"
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1, minWidth: '160px' }}>
          {tag && (
            <span style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#0066cc',
              letterSpacing: '0.5px',
              marginBottom: '6px'
            }}>
              {tag}
            </span>
          )}
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px', lineHeight: 1.3 }}>
            {title}
          </h3>
          <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.55, marginBottom: '14px' }}>
            {desc}
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#0066cc',
            fontWeight: 800,
            fontSize: '0.86rem'
          }}>
            Değerini Hesapla <ArrowRight size={14} />
          </div>
        </div>

        <div style={{
          width: '135px',
          height: '115px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.05) 0%, transparent 70%)',
          borderRadius: '12px',
          padding: '4px'
        }}>
          <img 
            src={image} 
            alt={title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 12px rgba(10, 37, 64, 0.12))',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </div>
  );
}

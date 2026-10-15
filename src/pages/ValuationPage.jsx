import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Gamepad2, 
  Cpu, 
  Tv, 
  CheckCircle2, 
  Phone, 
  Send, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  MapPin,
  Camera,
  AlertCircle,
  Truck,
  Zap,
  Banknote
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { 
  CPU_OPTIONS_GROUPED, 
  GPU_OPTIONS_GROUPED, 
  RAM_OPTIONS, 
  STORAGE_OPTIONS, 
  BRAND_OPTIONS, 
  POPULAR_SERIES_BY_BRAND,
  SCREEN_OPTIONS,
  COSMETIC_OPTIONS,
  BOX_INVOICE_OPTIONS,
  BATTERY_OPTIONS,
  REPAIR_OPTIONS,
  THERMAL_OPTIONS,
  APPLE_CHIP_OPTIONS, 
  IPHONE_OPTIONS, 
  CONSOLE_OPTIONS, 
  getHardwareLabel 
} from '../data/hardwareOptions';

export default function ValuationPage({ initialCategory = 'laptop', settings, navigate }) {
  const normalizeCat = (cat) => {
    if (!cat) return 'laptop';
    if (cat === 'parca') return 'ekran_karti';
    if (cat === 'imac') return 'masaustu';
    return cat;
  };

  const [category, setCategory] = useState(normalizeCat(initialCategory));

  useEffect(() => {
    if (initialCategory) {
      setCategory(normalizeCat(initialCategory));
    }
  }, [initialCategory]);

  // Form State - Ortak
  const [brand, setBrand] = useState('Asus');
  const [selectedSeries, setSelectedSeries] = useState(POPULAR_SERIES_BY_BRAND['Asus'] ? POPULAR_SERIES_BY_BRAND['Asus'][0] : '');
  const [modelName, setModelName] = useState('');
  const [location, setLocation] = useState('Konya / Selçuklu');
  const [copied, setCopied] = useState(false);

  // Form State - Laptop & Masaüstü
  const [cpu, setCpu] = useState('i5-12');
  const [ram, setRam] = useState('16');
  const [gpu, setGpu] = useState('rtx4050');
  const [storage, setStorage] = useState('512ssd');
  const [screenHz, setScreenHz] = useState('15-144hz');
  const [batteryHealth, setBatteryHealth] = useState('mukemmel');
  const [thermalStatus, setThermalStatus] = useState('serin');

  // Form State - Masaüstü Ekstra
  const [desktopCase, setDesktopCase] = useState('gaming');
  const [cooling, setCooling] = useState('sivi');
  const [psu, setPsu] = useState('750w');
  const [motherboard, setMotherboard] = useState('b760');

  // Form State - MacBook
  const [macModel, setMacModel] = useState('MacBook Air 13" (M3 / M2 / M1 Retina)');
  const [appleChip, setAppleChip] = useState('m2');
  const [appleRam, setAppleRam] = useState('16');
  const [appleDisk, setAppleDisk] = useState('512');
  const [macBattery, setMacBattery] = useState('mukemmel');

  // Form State - iPhone / Telefon
  const [phoneBrand, setPhoneBrand] = useState('apple');
  const [phoneModel, setPhoneModel] = useState('iphone15');
  const [phoneStorage, setPhoneStorage] = useState('128');
  const [phoneBattery, setPhoneBattery] = useState('90');
  const [faceIdWorking, setFaceIdWorking] = useState('evet');
  const [phoneScreenState, setPhoneScreenState] = useState('ciziksiz');

  // Form State - PlayStation / Konsol
  const [consoleModel, setConsoleModel] = useState('ps5-slim-disk');
  const [controllerCount, setControllerCount] = useState('2');
  const [consoleAccessories, setConsoleAccessories] = useState('tam');

  // Form State - Ekran Kartı
  const [gpuModel, setGpuModel] = useState('rtx4060');
  const [gpuBrand, setGpuBrand] = useState('Asus ROG / TUF');
  const [sealStatus, setSealStatus] = useState('orijinal');

  // Form State - Monitör
  const [monitorSize, setMonitorSize] = useState('27');
  const [monitorHz, setMonitorHz] = useState('165hz');
  const [monitorRes, setMonitorRes] = useState('2k');
  const [monitorPanelType, setMonitorPanelType] = useState('fast_ips');
  const [monitorDeadPixel, setMonitorDeadPixel] = useState('yok');

  // Form State - Tablet & iPad
  const [tabletBrand, setTabletBrand] = useState('Apple');
  const [tabletModel, setTabletModel] = useState('ipad-10');
  const [tabletStorage, setTabletStorage] = useState('128');
  const [tabletCellular, setTabletCellular] = useState('wifi');
  const [tabletScreenCondition, setTabletScreenCondition] = useState('ciziksiz');
  const [tabletAccessories, setTabletAccessories] = useState('kalem_klavye');

  // Durum & Aksesuar
  const [cosmetic, setCosmetic] = useState('10');
  const [boxInvoice, setBoxInvoice] = useState('tam_garanti');
  const [repairStatus, setRepairStatus] = useState('orijinal');
  const [extraNotes, setExtraNotes] = useState('');

  // Veritabanı / Admin Bildirimi Formu
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  // Cihaz Donanım Özeti Listesi (WhatsApp ve Ekran Kartı İçin)
  const getSpecsSummaryList = () => {
    const list = [];
    if (category === 'laptop') {
      list.push({ label: 'Cihaz Türü', value: 'Laptop & Dizüstü' });
      list.push({ label: 'Marka & Seri', value: `${brand} ${selectedSeries ? `(${selectedSeries})` : ''} ${modelName ? `- ${modelName}` : ''}` });
      list.push({ label: 'İşlemci (CPU)', value: getHardwareLabel('cpu', cpu) });
      list.push({ label: 'Ekran Kartı (GPU)', value: getHardwareLabel('gpu', gpu) });
      list.push({ label: 'RAM Bellek', value: `${ram} GB` });
      list.push({ label: 'Depolama (SSD)', value: storage.toUpperCase() });
      list.push({ label: 'Ekran / Panel', value: screenHz });
      list.push({ label: 'Batarya Sağlığı', value: batteryHealth === 'mukemmel' ? '%90 - %100 Pil Sağlığı (Orijinal)' : batteryHealth === 'iyi' ? '%80 - %89 Pil Sağlığı' : batteryHealth === 'orta' ? '%70 - %79 Pil Sağlığı' : 'Batarya Zayıf / Prizde Çalışıyor' });
      list.push({ label: 'Stres Testi / Isınma', value: thermalStatus === 'serin' ? 'FurMark Serin (Isınma & Throttling Yok)' : thermalStatus === 'normal' ? 'Normal Sıcaklıklar' : 'Isınma Var / Bakım İstiyor' });
    } else if (category === 'masaustu') {
      list.push({ label: 'Cihaz Türü', value: 'Masaüstü Bilgisayar (Oyuncu Kasası)' });
      list.push({ label: 'Kasa & Sistem', value: `${brand} - ${selectedSeries || desktopCase}` });
      list.push({ label: 'İşlemci (CPU)', value: getHardwareLabel('cpu', cpu) });
      list.push({ label: 'Ekran Kartı (GPU)', value: getHardwareLabel('gpu', gpu) });
      list.push({ label: 'RAM Bellek', value: `${ram} GB` });
      list.push({ label: 'Depolama', value: storage.toUpperCase() });
      list.push({ label: 'Soğutma', value: cooling === 'sivi' ? '240mm / 360mm Sıvı Soğutma' : cooling === 'kule' ? 'Kule Tipi Bakır Borulu' : 'Stok Fan' });
      list.push({ label: 'Güç Kaynağı (PSU)', value: psu });
      list.push({ label: 'Anakart Serisi', value: motherboard.toUpperCase() });
      list.push({ label: 'Termal Durum', value: thermalStatus === 'serin' ? 'Serin / Sorunsuz Çalışıyor' : 'Normal Sıcaklıklar' });
    } else if (category === 'macbook') {
      list.push({ label: 'Cihaz Türü', value: 'Apple MacBook' });
      list.push({ label: 'Model', value: macModel });
      list.push({ label: 'Çip', value: `Apple ${appleChip.toUpperCase()}` });
      list.push({ label: 'Birleşik Bellek', value: `${appleRam} GB RAM` });
      list.push({ label: 'SSD Kapasitesi', value: `${appleDisk} GB SSD` });
      list.push({ label: 'Pil Durumu', value: macBattery === 'mukemmel' ? '%90 Üzeri Sağlıklı (Orijinal)' : macBattery === 'iyi' ? '%80 - %89 Normal' : 'Servis Uyarısı / Zayıf' });
    } else if (category === 'iphone') {
      list.push({ label: 'Cihaz Türü', value: 'Apple iPhone / Akıllı Telefon' });
      list.push({ label: 'Model', value: `${phoneModel.toUpperCase()} (${phoneStorage} GB)` });
      list.push({ label: 'Pil Sağlığı', value: `%${phoneBattery} Pil Sağlığı` });
      list.push({ label: 'Face ID & Ekran', value: faceIdWorking === 'evet' ? 'Face ID & True Tone Aktif (Orijinal Ekran)' : 'Face ID / Ekran Değişmiş' });
    } else if (category === 'konsol') {
      list.push({ label: 'Cihaz Türü', value: 'Oyun Konsolu' });
      list.push({ label: 'Konsol Modeli', value: consoleModel.toUpperCase() });
      list.push({ label: 'Kol (Gamepad)', value: `${controllerCount} Adet Orijinal Kol` });
      list.push({ label: 'Aksesuarlar', value: consoleAccessories === 'tam' ? 'Kutulu Oyunlar & Tüm Kablolar Var' : 'Yalnızca Konsol ve Kol' });
    } else if (category === 'ekran_karti') {
      list.push({ label: 'Cihaz Türü', value: 'Ekran Kartı (GPU)' });
      list.push({ label: 'Model', value: gpuModel.toUpperCase() });
      list.push({ label: 'Marka & Seri', value: gpuBrand });
      list.push({ label: 'Güvenlik Bandrolü', value: sealStatus === 'orijinal' ? 'Açılmadı / Güvenlik Etiketi Üzerinde' : 'Açıldı / Termal Macun Yenilendi' });
    } else if (category === 'monitor') {
      list.push({ label: 'Cihaz Türü', value: 'Oyuncu Monitörü' });
      list.push({ label: 'Boyut & Çözünürlük', value: `${monitorSize} İnç - ${monitorRes.toUpperCase()}` });
      list.push({ label: 'Yenileme Hızı', value: monitorHz });
      list.push({ label: 'Panel Tipi', value: monitorPanelType.toUpperCase() });
      list.push({ label: 'Ölü Piksel', value: monitorDeadPixel === 'yok' ? 'Ölü Piksel & Çizik Yok' : 'Ölü Piksel Var' });
    } else if (category === 'tablet') {
      list.push({ label: 'Cihaz Türü', value: 'iPad / Tablet' });
      list.push({ label: 'Marka & Model', value: `${tabletBrand} - ${tabletModel.toUpperCase()}` });
      list.push({ label: 'Hafıza', value: `${tabletStorage} GB` });
      list.push({ label: 'Bağlantı', value: tabletCellular === 'cellular' ? 'Wi-Fi + Cellular (SIM Kartlı)' : 'Sadece Wi-Fi' });
      list.push({ label: 'Ekran Camı', value: tabletScreenCondition === 'ciziksiz' ? 'Çiziksiz Orijinal' : 'Kılcal Çizikler Var' });
      list.push({ label: 'Aksesuarlar', value: tabletAccessories === 'kalem_klavye' ? 'Kalem & Klavye Kılıfı Var' : 'Yalnızca Tablet' });
    }

    list.push({ label: 'Kozmetik Durum', value: cosmetic === '10' ? '10/10 Sıfır Ayarında (Çiziksiz)' : cosmetic === '9' ? '9/10 Çok Temiz (Kılcal İzler)' : cosmetic === '8' ? '8/10 Temiz' : cosmetic === '7' ? '7/10 Kullanım İzleri Var' : '5/10 Kusur / Kırık Var' });
    list.push({ label: 'Kutu & Fatura', value: boxInvoice === 'tam_garanti' ? 'Kutu + Fatura + Resmi Garanti Devam Ediyor' : boxInvoice === 'tam' ? 'Kutu ve Fatura Var (Garanti Bitti)' : boxInvoice === 'sarj_var' ? 'Yalnızca Orijinal Şarj Adaptörü Var' : 'Kutu / Fatura Yok' });
    list.push({ label: 'Tamir Durumu', value: repairStatus === 'orijinal' ? 'Hiç Açılmadı / Orijinal' : repairStatus === 'upgrade' ? 'Sadece RAM / SSD Yükseltildi' : repairStatus === 'bakim' ? 'Termal Bakımı Yapıldı' : 'Tamir / Parça Değişimi Gördü' });
    list.push({ label: 'Konum', value: location });
    if (extraNotes.trim()) list.push({ label: 'Müşteri Notu', value: extraNotes.trim() });

    return list;
  };

  // WhatsApp Ön Teklif Metni Oluşturucu (Otomatik Fiyat Tahmini Kaldırıldı, Gerçek Özellikler Gönderilir)
  const generateMessageText = () => {
    let msg = `Merhaba Konya Bilgisayar (0551 045 42 55),\n`;
    msg += `Web sitenizdeki cihaz değerleme sihirbazından nakit fiyat teklifi almak istiyorum:\n\n`;

    const specs = getSpecsSummaryList();
    specs.forEach(item => {
      msg += `• ${item.label}: ${item.value}\n`;
    });

    msg += `\n🔍 Cihazımın detaylı fotoğraflarını da gönderebilirim. Konya Selçuklu mağazanıza elden teslim veya kargo için en yüksek nakit alım veya takas fiyat teklifiniz nedir? Fiyat alabilir miyim?`;

    return msg;
  };

  const handleOpenWhatsApp = () => {
    const text = generateMessageText();
    const url = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    const text = generateMessageText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Formu Veritabanına (Admin Paneline) Gönderme
  const handleSubmitToDatabase = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const specsText = getSpecsSummaryList().map(s => `${s.label}: ${s.value}`).join(' | ');

    const payload = {
      customerName: customerName || 'Web Ziyaretçisi',
      customerPhone: customerPhone || '0551 045 42 55 üzerinden teklif aldı',
      category,
      brandModel: modelName || `${brand} ${selectedSeries}`,
      specs: specsText,
      condition: `Kozmetik: ${cosmetic}/10, Kutu: ${boxInvoice}, Tamir: ${repairStatus}`,
      estimatedPrice: 'Özellikler iletildi - WhatsApp / Telefon ile teklif verilecek (0551 045 42 55)',
      notes: extraNotes,
      location: location
    };

    try {
      await fetch('/api/valuations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '40px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Üst Başlık & Hızlı İletişim Bilgisi */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <img 
            src="/images/spec_valuation.jpg" 
            alt="Cihaz Değerleme ve Fiyat Hesaplama Sihirbazı" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'contain', 
              margin: '0 auto 14px',
              borderRadius: '16px',
              filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.06))'
            }} 
          />
          <div style={{ marginBottom: '10px' }}>
            <span className="badge badge-blue">
              <Sparkles size={14} /> Otomatik Donanım Ekspertizi & WhatsApp Fiyat Teklifi
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Cihazınızın Özelliklerini Girin, Anında Teklif Alın
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '720px', margin: '0 auto 20px', lineHeight: 1.6 }}>
            Laptop, kasa, MacBook, iPhone veya konsolunuzun tüm donanım özelliklerini seçin. Sistemimiz anlık piyasa değerini hesaplar ve tek tıkla <strong>0551 045 42 55</strong> hattımıza hazır teklif mesajı gönderir.
          </p>

          {/* Hızlı Arama Butonu Barı */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#ffffff', padding: '8px 18px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--heading)' }}>
              Telefonda Anında Fiyat Almak İster misiniz?
            </span>
            <a 
              href={`tel:${phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#16a34a',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} />
              <span>Hemen Ara: {phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* 1. ADIM: Kategori Seçimi (8 Cihaz Türü) */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '24px'
        }}>
          <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>1. Adım: Satmak İstediğiniz Cihaz Türünü Seçin</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px'
          }}>
            <CatPillBtn active={category === 'laptop'} label="Laptop" image="/images/categories/cat_laptop.png" icon={<Laptop size={22} />} onClick={() => setCategory('laptop')} />
            <CatPillBtn active={category === 'masaustu'} label="Masaüstü PC" image="/images/categories/cat_desktop.png" icon={<Monitor size={22} />} onClick={() => setCategory('masaustu')} />
            <CatPillBtn active={category === 'macbook'} label="MacBook" image="/images/categories/cat_macbook.png" icon={<Laptop size={22} />} onClick={() => setCategory('macbook')} />
            <CatPillBtn active={category === 'iphone'} label="iPhone" image="/images/categories/cat_iphone.png" icon={<Smartphone size={22} />} onClick={() => setCategory('iphone')} />
            <CatPillBtn active={category === 'tablet'} label="Tablet" image="/images/categories/cat_tablet.png" icon={<Tablet size={22} />} onClick={() => setCategory('tablet')} />
            <CatPillBtn active={category === 'konsol'} label="Konsol" image="/images/categories/cat_console.png" icon={<Gamepad2 size={22} />} onClick={() => setCategory('konsol')} />
            <CatPillBtn active={category === 'ekran_karti'} label="Ekran Kartı" image="/images/categories/cat_gpu.png" icon={<Cpu size={22} />} onClick={() => setCategory('ekran_karti')} />
            <CatPillBtn active={category === 'monitor'} label="Monitör" image="/images/categories/cat_monitor.png" icon={<Tv size={22} />} onClick={() => setCategory('monitor')} />
          </div>
        </div>

        {/* Özellik Bulma Yardımcı Kartı */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 89, 191, 0.08), rgba(21, 128, 61, 0.08))',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          border: '1px solid rgba(0, 89, 191, 0.2)',
          marginBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HelpCircle size={20} style={{ color: 'var(--primary-bright)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.9rem', color: 'var(--heading)', fontWeight: 600 }}>
              İşlemci, RAM veya ekran kartı modelinizi tam olarak bilmiyor musunuz?
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {navigate && (
              <button
                type="button"
                onClick={() => navigate('ozellikleri-ogrenin')}
                className="btn btn-outline btn-sm"
                style={{ background: '#ffffff', fontWeight: 700, fontSize: '0.84rem' }}
              >
                📖 Özellikleri Öğrenme Rehberi
              </button>
            )}
            <a
              href={`https://wa.me/${whatsappNum}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1n%20özelliklerini%20tam%20bilmiyorum.%20Alt%20kapak%20ve%20ekran%20foto%C4%9Fraflar%C4%B1n%C4%B1%20at%C4%B1yorum%2C%20fiyat%20verebilir%20misiniz%3F`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa btn-sm"
              style={{ fontWeight: 800, fontSize: '0.84rem' }}
            >
              <Camera size={14} /> Fotoğraf Gönder (0551 045 42 55)
            </a>
          </div>
        </div>

        {/* 2. ADIM: Donanım ve Teknik Özellikler Soruları */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '24px'
        }}>
          <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '22px' }}>
            2. Adım: Cihazınızın Donanım Özellikleri
          </div>

          {/* Hızlı Seçim Presets (Kullanıcı Deneyimi & Hızlı Doldurma) */}
          {category === 'laptop' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ⚡ Popüler Laptop Profilleri (Tek Tıkla Otomatik Doldur):
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => { setBrand('Asus'); setModelName('TUF Gaming A15'); setCpu('i5-13'); setGpu('rtx4050'); setRam('16'); setStorage('512ssd'); setScreenHz('144hz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  🎮 RTX 4050 F/P Gaming
                </button>
                <button
                  type="button"
                  onClick={() => { setBrand('Monster'); setModelName('Tulpar T7'); setCpu('i7-14'); setGpu('rtx4060'); setRam('32'); setStorage('1tbssd'); setScreenHz('165hz'); setCosmetic('9'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  ⚡ RTX 4060 / 32GB Gaming
                </button>
                <button
                  type="button"
                  onClick={() => { setBrand('MSI'); setModelName('Katana 17'); setCpu('i7-13'); setGpu('rtx4070'); setRam('32'); setStorage('1tbssd'); setScreenHz('240hz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  🔥 RTX 4070 Üst Düzey Gaming
                </button>
                <button
                  type="button"
                  onClick={() => { setBrand('Lenovo'); setModelName('IdeaPad Slim 3'); setCpu('r5-5'); setGpu('dahili'); setRam('16'); setStorage('512ssd'); setScreenHz('60hz'); setCosmetic('9'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  💼 Ofis / Öğrenci Laptopu
                </button>
              </div>
            </div>
          )}

          {category === 'masaustu' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                🖥️ Popüler Kasa / Masaüstü Profilleri (Hızlı Doldur):
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => { setDesktopCase('gaming'); setCpu('r7-7'); setGpu('rtx4070s'); setRam('32'); setStorage('1tbssd'); setCooling('sivi'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  🚀 Canavar Sistem (RTX 4070 Ti/Super + R7 7800X3D)
                </button>
                <button
                  type="button"
                  onClick={() => { setDesktopCase('gaming'); setCpu('i5-13'); setGpu('rtx4060'); setRam('16'); setStorage('1tbssd'); setCooling('kule'); setCosmetic('9'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  ⚡ F/P Oyuncu PC (RTX 4060 + i5 13400F)
                </button>
                <button
                  type="button"
                  onClick={() => { setDesktopCase('standart'); setCpu('r5-5'); setGpu('rtx3060'); setRam('16'); setStorage('512ssd'); setCooling('kule'); setCosmetic('9'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  🎮 Bütçe Dostu (RTX 3060 + Ryzen 5 5600)
                </button>
                <button
                  type="button"
                  onClick={() => { setDesktopCase('ofis'); setCpu('r5-4'); setGpu('dahili'); setRam('16'); setStorage('512ssd'); setCooling('stok'); setCosmetic('9'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)', transition: 'all 0.2s' }}
                >
                  🏢 Ofis / Muhasebe / APU Kasa
                </button>
              </div>
            </div>
          )}

          {category === 'macbook' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                🍏 Popüler MacBook Seçimleri:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => { setMacModel('air13'); setAppleChip('m1'); setAppleRam('8'); setAppleDisk('256'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  MacBook Air M1 (8GB / 256GB)
                </button>
                <button
                  type="button"
                  onClick={() => { setMacModel('air13'); setAppleChip('m2'); setAppleRam('16'); setAppleDisk('512'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  MacBook Air M2 (16GB / 512GB)
                </button>
                <button
                  type="button"
                  onClick={() => { setMacModel('pro14'); setAppleChip('m3'); setAppleRam('18'); setAppleDisk('512'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  MacBook Pro M3 Pro (18GB / 512GB)
                </button>
                <button
                  type="button"
                  onClick={() => { setMacModel('pro16'); setAppleChip('m4'); setAppleRam('24'); setAppleDisk('1tb'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  MacBook Pro M4 (24GB / 1TB)
                </button>
              </div>
            </div>
          )}

          {category === 'tablet' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                📱 Popüler Tablet / iPad Seçimleri:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => { setTabletBrand('Apple'); setTabletModel('ipad-pro-m4'); setTabletStorage('256'); setTabletCellular('wifi'); setTabletScreenCondition('ciziksiz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  iPad Pro M4 (256GB Wi-Fi)
                </button>
                <button
                  type="button"
                  onClick={() => { setTabletBrand('Apple'); setTabletModel('ipad-air-m2'); setTabletStorage('128'); setTabletCellular('wifi'); setTabletScreenCondition('ciziksiz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  iPad Air M2 (128GB Wi-Fi)
                </button>
                <button
                  type="button"
                  onClick={() => { setTabletBrand('Apple'); setTabletModel('ipad-10'); setTabletStorage('64'); setTabletCellular('wifi'); setTabletScreenCondition('ciziksiz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  iPad 10. Nesil (64GB Wi-Fi)
                </button>
                <button
                  type="button"
                  onClick={() => { setTabletBrand('Samsung'); setTabletModel('tab-s9'); setTabletStorage('128'); setTabletCellular('wifi'); setTabletScreenCondition('ciziksiz'); setCosmetic('10'); }}
                  style={{ padding: '7px 15px', borderRadius: 'var(--radius-full)', background: '#ffffff', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', color: 'var(--heading)' }}
                >
                  Galaxy Tab S9 (128GB Wi-Fi)
                </button>
              </div>
            </div>
          )}

          {/* Canlı Donanım Konfigürasyon Özeti Rozetleri */}
          {(category === 'laptop' || category === 'masaustu') && (
            <div style={{
              marginBottom: '24px',
              padding: '14px 18px',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="var(--primary)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--heading)' }}>
                  Seçili Donanım Yapılandırması:
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-chip">⚡ {getHardwareLabel('cpu', cpu)}</span>
                <span className="spec-chip">🎮 {getHardwareLabel('gpu', gpu)}</span>
                <span className="spec-chip">🧠 {getHardwareLabel('ram', ram)}</span>
                <span className="spec-chip">💾 {getHardwareLabel('storage', storage)}</span>
              </div>
            </div>
          )}

          {/* ========== 1. LAPTOP ALANLARI ========== */}
          {category === 'laptop' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Laptop Markası</label>
                <select 
                  className="form-control" 
                  value={brand} 
                  onChange={e => {
                    const b = e.target.value;
                    setBrand(b);
                    const seriesList = POPULAR_SERIES_BY_BRAND[b];
                    if (seriesList && seriesList.length > 0) {
                      setSelectedSeries(seriesList[0]);
                    } else {
                      setSelectedSeries('');
                    }
                  }}
                >
                  {BRAND_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Model Serisi / Ailesi</label>
                <select 
                  className="form-control"
                  value={selectedSeries}
                  onChange={e => setSelectedSeries(e.target.value)}
                >
                  {POPULAR_SERIES_BY_BRAND[brand] ? (
                    POPULAR_SERIES_BY_BRAND[brand].map(ser => (
                      <option key={ser} value={ser}>{ser}</option>
                    ))
                  ) : (
                    <option value="Standart Seri">Standart Seri</option>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tam Model Kodu (Varsa)</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: FA507NV, 15IAH7, Abra A5 V20.3"
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci (CPU) Modeli - Tümü Listelendi</label>
                <select className="form-control" value={cpu} onChange={e => setCpu(e.target.value)}>
                  {CPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Kartı (GPU) - Tümü Listelendi</label>
                <select className="form-control" value={gpu} onChange={e => setGpu(e.target.value)}>
                  {GPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RAM Bellek Kapasitesi</label>
                <select className="form-control" value={ram} onChange={e => setRam(e.target.value)}>
                  {RAM_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Depolama (SSD / Disk)</label>
                <select className="form-control" value={storage} onChange={e => setStorage(e.target.value)}>
                  {STORAGE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Boyutu & Yenileme Hızı</label>
                <select className="form-control" value={screenHz} onChange={e => setScreenHz(e.target.value)}>
                  {SCREEN_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Batarya / Pil Durumu</label>
                <select className="form-control" value={batteryHealth} onChange={e => setBatteryHealth(e.target.value)}>
                  {BATTERY_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Termal Durum & Fan Sesi</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  {THERMAL_OPTIONS}
                </select>
              </div>
            </div>
          )}

          {/* ========== 2. MASAÜSTÜ ALANLARI ========== */}
          {category === 'masaustu' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Kasa & Sistem Türü</label>
                <select className="form-control" value={desktopCase} onChange={e => setDesktopCase(e.target.value)}>
                  <option value="gaming">Oyuncu Kasası (RGB / Temperli Cam Panel / Mesh)</option>
                  <option value="akvaryum">Akvaryum Çift Cam Panel Gaming PC</option>
                  <option value="standart">Standart Toplama Kasa (Siyah / Gri)</option>
                  <option value="ofis">Ofis / Mini ITX / Kompakt APU Kasa</option>
                  <option value="workstation">İş İstasyonu / Workstation Kasa</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Anakart Çipseti / Modeli</label>
                <select className="form-control" value={motherboard} onChange={e => setMotherboard(e.target.value)}>
                  <option value="b650">AMD B650 / X670 (AM5 Soket)</option>
                  <option value="b550">AMD B550 / X570 / A520 (AM4 Soket)</option>
                  <option value="z790">Intel Z790 / Z690 (LGA1700 Soket)</option>
                  <option value="b760">Intel B760 / B660 (LGA1700 Soket)</option>
                  <option value="h610">Intel H610 / H510 Giriş Seviye</option>
                  <option value="diger">Diğer / Standart Anakart</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Güç Kaynağı (PSU)</label>
                <select className="form-control" value={psu} onChange={e => setPsu(e.target.value)}>
                  <option value="850w">850W ve üzeri 80+ Gold / Modüler</option>
                  <option value="750w">750W 80+ Bronze / Gold</option>
                  <option value="650w">650W 80+ Sertifikalı</option>
                  <option value="550w">500W - 550W Standart PSU</option>
                  <option value="400w">400W ve altı Ofis Güç Kaynağı</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci (CPU) - Tümü Listelendi</label>
                <select className="form-control" value={cpu} onChange={e => setCpu(e.target.value)}>
                  {CPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Kartı (GPU) - Tümü Listelendi</label>
                <select className="form-control" value={gpu} onChange={e => setGpu(e.target.value)}>
                  {GPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RAM Bellek</label>
                <select className="form-control" value={ram} onChange={e => setRam(e.target.value)}>
                  {RAM_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Depolama (SSD / HDD)</label>
                <select className="form-control" value={storage} onChange={e => setStorage(e.target.value)}>
                  {STORAGE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci Soğutucu</label>
                <select className="form-control" value={cooling} onChange={e => setCooling(e.target.value)}>
                  <option value="sivi360">360mm Sıvı Soğutma (AIO 3 Fanlı)</option>
                  <option value="sivi">240mm / 280mm Sıvı Soğutma (AIO 2 Fanlı)</option>
                  <option value="kule">Kule Tipi Çift Fanlı Bakır Borulu Hava Soğutma</option>
                  <option value="stok">Stok Standart Kutu Fanı</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Termal Durum & Sıcaklık</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  {THERMAL_OPTIONS}
                </select>
              </div>
            </div>
          )}

          {/* ========== 3. MACBOOK ALANLARI ========== */}
          {category === 'macbook' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">MacBook Modeli</label>
                <select className="form-control" value={macModel} onChange={e => setMacModel(e.target.value)}>
                  <option value="pro16">MacBook Pro 16 inç (Apple Silicon M Serisi)</option>
                  <option value="pro14">MacBook Pro 14 inç (Apple Silicon M Serisi)</option>
                  <option value="pro13">MacBook Pro 13 inç (M2 / M1 Touch Bar)</option>
                  <option value="air15">MacBook Air 15 inç (M3 / M2)</option>
                  <option value="air13">MacBook Air 13 inç (M3 / M2 / M1 Retina)</option>
                  <option value="intel_pro">MacBook Pro (Intel Core i9 / i7 / i5)</option>
                  <option value="intel_air">MacBook Air (Intel Core i5 / i3)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci Çipi (Apple Silicon / Intel)</label>
                <select className="form-control" value={appleChip} onChange={e => setAppleChip(e.target.value)}>
                  {APPLE_CHIP_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Birleşik Bellek (RAM)</label>
                <select className="form-control" value={appleRam} onChange={e => setAppleRam(e.target.value)}>
                  <option value="8">8 GB Birleşik Bellek</option>
                  <option value="16">16 GB / 18 GB Birleşik Bellek</option>
                  <option value="24">24 GB / 36 GB Birleşik Bellek</option>
                  <option value="48">48 GB / 64 GB / 128 GB Birleşik Bellek</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">SSD Kapasitesi</label>
                <select className="form-control" value={appleDisk} onChange={e => setAppleDisk(e.target.value)}>
                  <option value="256">256 GB SSD</option>
                  <option value="512">512 GB SSD</option>
                  <option value="1tb">1 TB SSD</option>
                  <option value="2tb">2 TB SSD</option>
                  <option value="4tb">4 TB / 8 TB SSD</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Pil Sağlığı & Döngü Durumu</label>
                <select className="form-control" value={macBattery} onChange={e => setMacBattery(e.target.value)}>
                  <option value="mukemmel">%95 - %100 Pil Sağlığı (Çok Düşük Döngü / Sıfır Ayarında)</option>
                  <option value="iyi">%88 - %94 Pil Sağlığı (Çok İyi Durumda)</option>
                  <option value="orta">%80 - %87 Pil Sağlığı (Normal Kullanım)</option>
                  <option value="zayif">%80 Altı / Servis Uyarısı Veriyor</option>
                </select>
              </div>
            </div>
          )}

          {/* ========== 4. IPHONE ALANLARI ========== */}
          {category === 'iphone' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">iPhone Modeli - Tümü Listelendi</label>
                <select className="form-control" value={phoneModel} onChange={e => setPhoneModel(e.target.value)}>
                  {IPHONE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Hafıza Kapasitesi</label>
                <select className="form-control" value={phoneStorage} onChange={e => setPhoneStorage(e.target.value)}>
                  <option value="128">128 GB</option>
                  <option value="256">256 GB</option>
                  <option value="512">512 GB</option>
                  <option value="1tb">1 TB</option>
                  <option value="64">64 GB</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Pil Sağlığı</label>
                <select className="form-control" value={phoneBattery} onChange={e => setPhoneBattery(e.target.value)}>
                  <option value="100">%100 - %95 (Mükemmel)</option>
                  <option value="90">%90 - %94 (Çok İyi)</option>
                  <option value="85">%85 - %89 (İyi)</option>
                  <option value="80">%80 - %84 (Normal)</option>
                  <option value="79">%80 Altı (Servis Uyarısı)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran & True Tone & Cam Durumu</label>
                <select className="form-control" value={phoneScreenState} onChange={e => setPhoneScreenState(e.target.value)}>
                  <option value="ciziksiz">Nokta Çiziksiz Orijinal Ekran + True Tone Aktif</option>
                  <option value="cizikli">Kılcal Çizikler Mevcut (Orijinal Ekran, Kırık Yok)</option>
                  <option value="degisen">Ekran Değişimi Yapılmış (True Tone Yok)</option>
                  <option value="catlak">Ön Camda veya Arka Camda Kırık / Çatlak Var</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Face ID Durumu</label>
                <select className="form-control" value={faceIdWorking} onChange={e => setFaceIdWorking(e.target.value)}>
                  <option value="evet">Face ID ve Tüm Sensörler Kusursuz Çalışıyor</option>
                  <option value="hayir">Face ID Çalışmıyor / Hata Veriyor</option>
                </select>
              </div>
            </div>
          )}

          {/* ========== 5. KONSOL ALANLARI ========== */}
          {category === 'konsol' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Konsol Modeli - Tümü Listelendi</label>
                <select className="form-control" value={consoleModel} onChange={e => setConsoleModel(e.target.value)}>
                  {CONSOLE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Kol (DualSense / Gamepad) Sayısı</label>
                <select className="form-control" value={controllerCount} onChange={e => setControllerCount(e.target.value)}>
                  <option value="1">1 Adet Orijinal Kol</option>
                  <option value="2">2 Adet Orijinal Kol</option>
                  <option value="3">3 ve Üzeri Kol / DualSense Edge / Özel Kol</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Aksesuar & Oyun Durumu</label>
                <select className="form-control" value={consoleAccessories} onChange={e => setConsoleAccessories(e.target.value)}>
                  <option value="tam">Orijinal Kutu + Kablolar + Kutulu Oyunlar Dahil</option>
                  <option value="sarj_istasyonu">Kutu + Orijinal Şarj İstasyonu / Kulaklık Dahil</option>
                  <option value="yalniz_cihaz">Yalnızca Konsol, Kol ve Bağlantı Kabloları</option>
                </select>
              </div>
            </div>
          )}

          {/* ========== 6. EKRAN KARTI ALANLARI ========== */}
          {category === 'ekran_karti' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Ekran Kartı Çipi - Tümü Listelendi</label>
                <select className="form-control" value={gpuModel} onChange={e => setGpuModel(e.target.value)}>
                  {GPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Kart Üreticisi / Modeli</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: Asus ROG Strix, MSI Gaming X Trio, Gigabyte Aorus"
                  value={gpuBrand}
                  onChange={e => setGpuBrand(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Güvenlik Bandrolü Durumu</label>
                <select className="form-control" value={sealStatus} onChange={e => setSealStatus(e.target.value)}>
                  <option value="orijinal">Fabrika güvenlik bandrolü duruyor, içi hiç açılmadı</option>
                  <option value="acildi">Termal macun / pad değişimi için açıldı</option>
                  <option value="bakim">Macun kurumuş, termal bakım gerekiyor</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yük Altı / FurMark Sıcaklığı</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  <option value="serin">65°C Altı (Çok Serin & Sessiz Fanlar)</option>
                  <option value="normal">65°C - 74°C (Standart / İdeal)</option>
                  <option value="orta">75°C - 82°C (Normal Oyun Yükü)</option>
                  <option value="sicak">83°C Üzeri (Sıcak Çalışıyor / Bakım İstiyor)</option>
                </select>
              </div>
            </div>
          )}

          {/* ========== 7. MONİTÖR ALANLARI ========== */}
          {category === 'monitor' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Ekran Boyutu</label>
                <select className="form-control" value={monitorSize} onChange={e => setMonitorSize(e.target.value)}>
                  <option value="27">27 İnç</option>
                  <option value="24">24 İnç / 24.5 İnç Espor</option>
                  <option value="32">31.5 / 32 İnç</option>
                  <option value="34">34 İnç Ultrawide (21:9)</option>
                  <option value="49">49 İnç Süper Ultrawide (32:9)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Panel Türü</label>
                <select className="form-control" value={monitorPanelType} onChange={e => setMonitorPanelType(e.target.value)}>
                  <option value="fast_ips">Fast IPS Panel (Canlı Renkler & Yüksek Hız)</option>
                  <option value="oled">OLED / QD-OLED Panel (Sonsuz Kontrast)</option>
                  <option value="va">VA Panel (Kavisli / Curved)</option>
                  <option value="tn">TN Espor Paneli</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yenileme Hızı</label>
                <select className="form-control" value={monitorHz} onChange={e => setMonitorHz(e.target.value)}>
                  <option value="165hz">165 Hz / 180 Hz</option>
                  <option value="240hz">240 Hz / 280 Hz</option>
                  <option value="360hz">360 Hz - 540 Hz Espor</option>
                  <option value="144hz">144 Hz</option>
                  <option value="60hz">60 Hz / 75 Hz Standart</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Çözünürlük</label>
                <select className="form-control" value={monitorRes} onChange={e => setMonitorRes(e.target.value)}>
                  <option value="2k">2K QHD (2560x1440)</option>
                  <option value="1080p">1080p Full HD (1920x1080)</option>
                  <option value="4k">4K UHD (3840x2160)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ölü Piksel & Panel Durumu</label>
                <select className="form-control" value={monitorDeadPixel} onChange={e => setMonitorDeadPixel(e.target.value)}>
                  <option value="yok">Hiç ölü piksel yok (Kusursuz panel)</option>
                  <option value="var">1-2 adet ölü piksel veya kılcal çizik var</option>
                </select>
              </div>
            </div>
          )}

          {/* ========== 8. TABLET & IPAD ALANLARI ========== */}
          {category === 'tablet' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">Tablet Markası</label>
                <select className="form-control" value={tabletBrand} onChange={e => setTabletBrand(e.target.value)}>
                  <option value="Apple">Apple iPad</option>
                  <option value="Samsung">Samsung Galaxy Tab</option>
                  <option value="Xiaomi">Xiaomi Pad</option>
                  <option value="Huawei">Huawei MatePad</option>
                  <option value="Lenovo">Lenovo Tab</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tablet Modeli</label>
                <select className="form-control" value={tabletModel} onChange={e => setTabletModel(e.target.value)}>
                  <optgroup label="Apple iPad Modelleri">
                    <option value="ipad-pro-m4">iPad Pro M4 (2024 - 11" / 13")</option>
                    <option value="ipad-pro-m2">iPad Pro M2 (11" / 12.9")</option>
                    <option value="ipad-air-m2">iPad Air M2 (2024 - 11" / 13")</option>
                    <option value="ipad-air-m1">iPad Air M1 (5. Nesil)</option>
                    <option value="ipad-10">iPad 10. Nesil (10.9 inç)</option>
                    <option value="ipad-9">iPad 9. Nesil (10.2 inç)</option>
                    <option value="ipad-mini-6">iPad mini 6. Nesil</option>
                  </optgroup>
                  <optgroup label="Samsung Galaxy Modelleri">
                    <option value="tab-s9-ultra">Galaxy Tab S9 Ultra</option>
                    <option value="tab-s9">Galaxy Tab S9 / S9+</option>
                    <option value="tab-s8">Galaxy Tab S8 / S8 Ultra</option>
                    <option value="tab-s7">Galaxy Tab S7 / S7 FE</option>
                    <option value="tab-a9">Galaxy Tab A9 / A9+</option>
                  </optgroup>
                  <optgroup label="Diğer Modeller">
                    <option value="xiaomi-pad-6">Xiaomi Pad 6 / 6 Pro</option>
                    <option value="huawei-matepad">Huawei MatePad 11.5 / Pro</option>
                    <option value="diger">Diğer Tablet Modeli</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Hafıza Kapasitesi</label>
                <select className="form-control" value={tabletStorage} onChange={e => setTabletStorage(e.target.value)}>
                  <option value="64">64 GB</option>
                  <option value="128">128 GB</option>
                  <option value="256">256 GB</option>
                  <option value="512">512 GB</option>
                  <option value="1tb">1 TB</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Bağlantı Türü</label>
                <select className="form-control" value={tabletCellular} onChange={e => setTabletCellular(e.target.value)}>
                  <option value="wifi">Yalnızca Wi-Fi</option>
                  <option value="cellular">Wi-Fi + Cellular (SIM Kart Destekli)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran & Dokunmatik Durumu</label>
                <select className="form-control" value={tabletScreenCondition} onChange={e => setTabletScreenCondition(e.target.value)}>
                  <option value="ciziksiz">Nokta Çiziksiz Orijinal Ekran</option>
                  <option value="cizikli">Kılcal Çizikler Mevcut (Kırık Yok)</option>
                  <option value="degisen">Ekran Değişimi Yapılmış</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yanında Verilecek Aksesuarlar</label>
                <select className="form-control" value={tabletAccessories} onChange={e => setTabletAccessories(e.target.value)}>
                  <option value="kalem_klavye">Orijinal Kalem (Apple Pencil/S-Pen) + Klavye Kılıfı</option>
                  <option value="kalem">Yalnızca Orijinal Kalem Var</option>
                  <option value="yalniz">Sadece Tablet ve Şarj Aleti</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 3. ADIM: Kozmetik Durum, Garanti, Tamir ve Konum */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}>
          <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '22px' }}>
            3. Adım: Kozmetik Durum, Kutu & Garanti Bilgileri
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div className="form-group">
              <label className="form-label">Kozmetik Durum</label>
              <select className="form-control" value={cosmetic} onChange={e => setCosmetic(e.target.value)}>
                {COSMETIC_OPTIONS}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Kutu, Fatura ve Garanti</label>
              <select className="form-control" value={boxInvoice} onChange={e => setBoxInvoice(e.target.value)}>
                {BOX_INVOICE_OPTIONS}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Tamir & Açılma Durumu</label>
              <select className="form-control" value={repairStatus} onChange={e => setRepairStatus(e.target.value)}>
                {REPAIR_OPTIONS}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Bulunduğunuz Yer / İlçe</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Örn: Konya / Selçuklu, Meram veya İl Adı"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Eklemek İstediğiniz Not veya Açıklama (Opsiyonel)</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Örn: Yanında oyuncu faresi de verilecektir, ekranda koruyucu jelatin var vb."
              value={extraNotes}
              onChange={e => setExtraNotes(e.target.value)}
            />
          </div>
        </div>

        {/* 4. ADIM: CANLI DONANIM ÖZETİ, ŞEFFAF DEĞERLEME VE WHATSAPP HAZIR MESAJ MERKEZİ */}
        <div id="teklif-alani" style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '36px 32px',
          boxShadow: '0 12px 36px rgba(10, 37, 64, 0.08)',
          border: '1.5px solid var(--border)',
          marginTop: '32px'
        }}>
          {/* Üst Başlık & Rozet */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(21, 128, 61, 0.08)',
              border: '1px solid rgba(21, 128, 61, 0.25)',
              color: '#15803d',
              fontSize: '0.84rem',
              fontWeight: 800,
              marginBottom: '14px'
            }}>
              <WhatsAppIcon size={16} />
              <span>4. Adım: Cihaz Özellikleri Hazır • WhatsApp Fiyat Teklifi</span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: 'var(--heading)',
              marginBottom: '10px'
            }}>
              Seçilen Özellikler Derlendi, <span style={{ color: '#15803d' }}>WhatsApp'tan Anında Fiyat Alın</span>
            </h3>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.98rem',
              lineHeight: 1.6,
              margin: '0 auto'
            }}>
              Seçtiğiniz tüm donanım ve durum bilgileri otomatik olarak hazır bir WhatsApp teklif mesajına dönüştürüldü. Aşağıdaki butona tıklayarak doğrudan uzmanımıza iletebilir ve en yüksek nakit teklifimizi alabilirsiniz.
            </p>
          </div>

          {/* 2 Sütunlu Değerleme Alanı: Sol Donanım Listesi, Sağ WhatsApp Hazır Mesaj & Eylem Kutusu */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'start'
          }}>
            {/* SOL: Canlı Seçilen Donanım Özeti Grid */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              padding: '24px',
              border: '1.5px solid var(--border)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border)'
              }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} />
                  Seçilen Donanım Özeti
                </span>
                <span style={{ fontSize: '0.74rem', background: '#e0f2fe', color: '#0369a1', fontWeight: 800, padding: '3px 10px', borderRadius: '12px' }}>
                  {getSpecsSummaryList().length} Özellik Seçildi
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {getSpecsSummaryList().map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: '#ffffff',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--heading)', marginTop: '2px', wordBreak: 'break-word' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bilgilendirme Notu */}
              <div style={{
                padding: '12px 14px',
                background: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                color: '#475569',
                lineHeight: 1.55,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <ShieldCheck size={18} color="#0066cc" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Şeffaf Ekspertiz:</strong> Cihazınız mağazamıza geldiğinde gözünüzün önünde 15 dakikalık şeffaf donanım testi yapılır ve tutar anında nakit veya FAST ile ödenir.
                </span>
              </div>
            </div>

            {/* SAĞ: WhatsApp Hazır Mesaj Önizlemesi & Aksiyon Kutusu (Anasayfadaki Alan Gibi) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(21, 128, 61, 0.04) 0%, rgba(10, 37, 64, 0.03) 100%)',
              border: '1.5px solid rgba(21, 128, 61, 0.28)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#15803d" />
                  WhatsApp Hazır Teklif Mesajı
                </span>
                <span style={{ fontSize: '0.74rem', background: '#dcfce7', color: '#166534', fontWeight: 800, padding: '3px 10px', borderRadius: '12px' }}>
                  Gönderime Hazır
                </span>
              </div>

              {/* WhatsApp Chat Balonu Görünümünde Mesaj Önizleme Kutusu */}
              <div style={{
                background: '#ffffff',
                border: '1.5px solid #bbf7d0',
                borderRadius: '14px',
                padding: '16px 18px',
                marginBottom: '18px',
                position: 'relative',
                boxShadow: '0 4px 16px rgba(22, 163, 74, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid #f0fdf4', paddingBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#15803d' }}>
                    <WhatsAppIcon size={15} />
                    <span>0551 045 42 55 Hattına Gönderilecek Hazır Mesaj:</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>Önizleme</span>
                </div>

                <div style={{
                  fontSize: '0.82rem',
                  color: '#1e293b',
                  lineHeight: 1.55,
                  whiteSpace: 'pre-line',
                  maxHeight: '160px',
                  overflowY: 'auto',
                  padding: '4px 2px',
                  fontFamily: 'inherit'
                }}>
                  {generateMessageText()}
                </div>
              </div>

              {/* Güven Vurguları 4'lü Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#334155',
                marginBottom: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#16a34a" />
                  <span>15 Dk Hızlı Test</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#16a34a" />
                  <span>Peşin Nakit / FAST</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#16a34a" />
                  <span>Selçuklu Mağaza</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#16a34a" />
                  <span>Ücretsiz Kargo</span>
                </div>
              </div>

              {/* Aksiyon Düğmeleri */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* 1. BÜYÜK WHATSAPP BUTONU */}
                <a 
                  href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent(generateMessageText())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  style={{
                    width: '100%',
                    fontSize: '1.02rem',
                    padding: '16px 20px',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 24px rgba(21, 128, 61, 0.3)'
                  }}
                >
                  <WhatsAppIcon size={22} />
                  <span>WhatsApp'a Gönder & Fiyat Al (0551 045 42 55)</span>
                </a>

                {/* 2. KOPYALA & DİREKT ARA BUTONLARI */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px' }}>
                  <button 
                    type="button"
                    onClick={handleCopyMessage}
                    className="btn btn-outline"
                    style={{ fontSize: '0.84rem', padding: '11px 12px', fontWeight: 800, justifyContent: 'center' }}
                  >
                    {copied ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                    <span>{copied ? '✓ Kopyalandı!' : '📋 Mesajı Kopyala'}</span>
                  </button>

                  <a 
                    href={`tel:${phoneRaw}`}
                    className="btn btn-outline"
                    style={{ fontSize: '0.84rem', padding: '11px 12px', fontWeight: 800, justifyContent: 'center' }}
                  >
                    <Phone size={15} />
                    <span>Ara: {phoneFormatted}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form ile İletişim (Yönetim Paneline Kaydet - Opsiyonel İletişim) */}
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            textAlign: 'left',
            maxWidth: '680px',
            margin: '32px auto 0'
          }}>
            <h4 style={{ fontSize: '1.02rem', fontWeight: 800, marginBottom: '6px', color: 'var(--heading)' }}>
              Numaranızı Bırakın, Biz Sizi Arayalım:
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Formu gönderdiğinizde seçtiğiniz donanım detayları yönetim panelimize iletilir; uzmanımız teklifle sizi arar.
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10b981',
                padding: '16px 20px',
                borderRadius: '12px',
                color: '#15803d',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span>Teklif talebiniz sisteme kaydedildi! Uzman ekibimiz <strong>0551 045 42 55</strong> hattından size en kısa sürede dönüş yapacaktır.</span>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setCustomerName(''); setCustomerPhone(''); }}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #10b981',
                      color: '#15803d',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Başka Bir Cihaz İçin Teklif Al
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitToDatabase}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    className="form-control" 
                    required
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                  />
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız (05XX...)" 
                    className="form-control" 
                    required
                    value={customerPhone}
                    onChange={e => setCustomerPhone(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-navy"
                  style={{
                    width: '100%',
                    fontWeight: 800,
                    padding: '13px'
                  }}
                >
                  <Send size={18} /> {submitting ? 'Kaydediliyor...' : 'Talebi Yönetim Paneline Gönder'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bilgilendirme 3'lü Kartlar (Süreç nasıl işler?) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '36px' }}>
          <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--primary-bright)', marginBottom: '10px' }}><Clock size={28} /></div>
            <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--heading)', marginBottom: '6px' }}>15 Dakikada Ekspertiz</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Konya Selçuklu mağazamıza getirdiğiniz cihazlar gözünüzün önünde FurMark, CrystalDiskInfo gibi stres testlerine sokulur.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ color: '#16a34a', marginBottom: '10px' }}><ShieldCheck size={28} /></div>
            <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--heading)', marginBottom: '6px' }}>Anında Nakit / IBAN Ödeme</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Test sonrası anlaşılan fiyat kuruşu kuruşuna anında nakit veya IBAN hesabınıza FAST ile aktarılır.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--primary-bright)', marginBottom: '10px' }}><MapPin size={28} /></div>
            <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--heading)', marginBottom: '6px' }}>Konya Mağazamıza Bekleriz</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Nalçacı Caddesi üzerindeki mağazamıza gelip çayımızı içerken cihazınızı nakit satabilir veya takas edebilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function CatPillBtn({ active, label, image, icon, onClick }) {
  return (
    <button 
      type="button"
      onClick={onClick}
      style={{
        padding: '16px 10px',
        borderRadius: 'var(--radius-lg)',
        border: '2px solid',
        borderColor: active ? 'var(--primary-bright)' : 'var(--border)',
        background: active ? 'linear-gradient(180deg, rgba(0, 89, 191, 0.08) 0%, rgba(0, 89, 191, 0.02) 100%)' : '#ffffff',
        color: active ? 'var(--primary-bright)' : 'var(--heading)',
        fontWeight: 700,
        fontSize: '0.88rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: active ? '0 8px 20px rgba(0, 89, 191, 0.16)' : 'var(--shadow-sm)'
      }}
    >
      {image ? (
        <div style={{ width: '58px', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={image} 
            alt={label} 
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
        <span style={{ color: active ? 'var(--primary-bright)' : 'var(--text-muted)' }}>{icon}</span>
      )}
      <span style={{ textAlign: 'center', lineHeight: 1.2 }}>{label}</span>
    </button>
  );
}


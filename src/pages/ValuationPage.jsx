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

  // Form State - Ortak (Varsayılan olarak otomatik seçim yapılmaz, kullanıcı seçer)
  const [brand, setBrand] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('');
  const [modelName, setModelName] = useState('');
  const [location, setLocation] = useState('Konya / Selçuklu');
  const [copied, setCopied] = useState(false);

  // Form State - Laptop & Masaüstü
  const [cpu, setCpu] = useState('');
  const [ram, setRam] = useState('');
  const [gpu, setGpu] = useState('');
  const [storage, setStorage] = useState('');
  const [screenHz, setScreenHz] = useState('');
  const [batteryHealth, setBatteryHealth] = useState('');
  const [thermalStatus, setThermalStatus] = useState('');

  // Form State - Masaüstü Ekstra
  const [desktopCase, setDesktopCase] = useState('');
  const [cooling, setCooling] = useState('');
  const [psu, setPsu] = useState('');
  const [motherboard, setMotherboard] = useState('');

  // Form State - MacBook
  const [macModel, setMacModel] = useState('');
  const [appleChip, setAppleChip] = useState('');
  const [appleRam, setAppleRam] = useState('');
  const [appleDisk, setAppleDisk] = useState('');
  const [macBattery, setMacBattery] = useState('');

  // Form State - iPhone / Telefon
  const [phoneBrand, setPhoneBrand] = useState('');
  const [phoneModel, setPhoneModel] = useState('');
  const [phoneStorage, setPhoneStorage] = useState('');
  const [phoneBattery, setPhoneBattery] = useState('');
  const [faceIdWorking, setFaceIdWorking] = useState('');
  const [phoneScreenState, setPhoneScreenState] = useState('');

  // Form State - PlayStation / Konsol
  const [consoleModel, setConsoleModel] = useState('');
  const [controllerCount, setControllerCount] = useState('');
  const [consoleAccessories, setConsoleAccessories] = useState('');

  // Form State - Ekran Kartı
  const [gpuModel, setGpuModel] = useState('');
  const [gpuBrand, setGpuBrand] = useState('');
  const [sealStatus, setSealStatus] = useState('');

  // Form State - Monitör
  const [monitorSize, setMonitorSize] = useState('');
  const [monitorHz, setMonitorHz] = useState('');
  const [monitorRes, setMonitorRes] = useState('');
  const [monitorPanelType, setMonitorPanelType] = useState('');
  const [monitorDeadPixel, setMonitorDeadPixel] = useState('');

  // Form State - Tablet & iPad
  const [tabletBrand, setTabletBrand] = useState('');
  const [tabletModel, setTabletModel] = useState('');
  const [tabletStorage, setTabletStorage] = useState('');
  const [tabletCellular, setTabletCellular] = useState('');
  const [tabletScreenCondition, setTabletScreenCondition] = useState('');
  const [tabletAccessories, setTabletAccessories] = useState('');

  // Durum & Aksesuar
  const [cosmetic, setCosmetic] = useState('');
  const [boxInvoice, setBoxInvoice] = useState('');
  const [repairStatus, setRepairStatus] = useState('');
  const [extraNotes, setExtraNotes] = useState('');


  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  // Cihaz Donanım Özeti Listesi (WhatsApp ve Ekran Kartı İçin) - Sadece Kullanıcının Seçtikleri Eklenir
  const getSpecsSummaryList = () => {
    const list = [];
    if (category === 'laptop') {
      list.push({ label: 'Cihaz Türü', value: 'Laptop & Dizüstü' });
      if (brand) list.push({ label: 'Marka & Seri', value: `${brand} ${selectedSeries ? `(${selectedSeries})` : ''} ${modelName ? `- ${modelName}` : ''}`.trim() });
      if (cpu) list.push({ label: 'İşlemci (CPU)', value: getHardwareLabel('cpu', cpu) });
      if (gpu) list.push({ label: 'Ekran Kartı (GPU)', value: getHardwareLabel('gpu', gpu) });
      if (ram) list.push({ label: 'RAM Bellek', value: `${ram} GB` });
      if (storage) list.push({ label: 'Depolama (SSD)', value: storage.toUpperCase() });
      if (screenHz) list.push({ label: 'Ekran / Panel', value: screenHz });
      if (batteryHealth) list.push({ label: 'Batarya Sağlığı', value: batteryHealth === 'mukemmel' ? '%90 - %100 Pil Sağlığı (Orijinal)' : batteryHealth === 'iyi' ? '%80 - %89 Pil Sağlığı' : batteryHealth === 'orta' ? '%70 - %79 Pil Sağlığı' : 'Batarya Zayıf / Prizde Çalışıyor' });
      if (thermalStatus) list.push({ label: 'Stres Testi / Isınma', value: thermalStatus === 'serin' ? 'FurMark Serin (Isınma & Throttling Yok)' : thermalStatus === 'normal' ? 'Normal Sıcaklıklar' : 'Isınma Var / Bakım İstiyor' });
    } else if (category === 'masaustu') {
      list.push({ label: 'Cihaz Türü', value: 'Masaüstü Bilgisayar (Oyuncu Kasası)' });
      if (desktopCase || brand || selectedSeries) list.push({ label: 'Kasa & Sistem', value: `${brand ? `${brand} ` : ''}${selectedSeries ? `(${selectedSeries}) ` : ''}${desktopCase ? `[${desktopCase}]` : ''}`.trim() });
      if (modelName) list.push({ label: 'Özel Sistem / Model', value: modelName });
      if (cpu) list.push({ label: 'İşlemci (CPU)', value: getHardwareLabel('cpu', cpu) });
      if (gpu) list.push({ label: 'Ekran Kartı (GPU)', value: getHardwareLabel('gpu', gpu) });
      if (ram) list.push({ label: 'RAM Bellek', value: `${ram} GB` });
      if (storage) list.push({ label: 'Depolama', value: storage.toUpperCase() });
      if (cooling) list.push({ label: 'Soğutma', value: cooling === 'sivi360' ? '360mm Sıvı Soğutma' : cooling === 'sivi' ? '240mm / 280mm Sıvı Soğutma' : cooling === 'kule' ? 'Kule Tipi Bakır Borulu' : 'Stok Fan' });
      if (psu) list.push({ label: 'Güç Kaynağı (PSU)', value: psu });
      if (motherboard) list.push({ label: 'Anakart Serisi', value: motherboard.toUpperCase() });
      if (thermalStatus) list.push({ label: 'Termal Durum', value: thermalStatus === 'serin' ? 'Serin / Sorunsuz Çalışıyor' : 'Normal Sıcaklıklar' });
    } else if (category === 'macbook') {
      list.push({ label: 'Cihaz Türü', value: 'Apple MacBook' });
      if (macModel) list.push({ label: 'Model', value: macModel === 'diger' ? 'Diğer MacBook Modeli' : macModel });
      if (modelName) list.push({ label: 'Model / Özel Not', value: modelName });
      if (appleChip) list.push({ label: 'Çip', value: `Apple ${appleChip.toUpperCase()}` });
      if (appleRam) list.push({ label: 'Birleşik Bellek', value: `${appleRam} GB RAM` });
      if (appleDisk) list.push({ label: 'SSD Kapasitesi', value: `${appleDisk} GB SSD` });
      if (macBattery) list.push({ label: 'Pil Durumu', value: macBattery === 'mukemmel' ? '%90 Üzeri Sağlıklı (Orijinal)' : macBattery === 'iyi' ? '%80 - %89 Normal' : 'Servis Uyarısı / Zayıf' });
    } else if (category === 'iphone') {
      list.push({ label: 'Cihaz Türü', value: 'Apple iPhone / Akıllı Telefon' });
      if (phoneModel) list.push({ label: 'Model', value: `${phoneModel.toUpperCase()} ${phoneStorage ? `(${phoneStorage} GB)` : ''}`.trim() });
      if (modelName) list.push({ label: 'Model / Özel Not', value: modelName });
      if (phoneBattery) list.push({ label: 'Pil Sağlığı', value: `%${phoneBattery} Pil Sağlığı` });
      if (phoneScreenState) list.push({ label: 'Ekran Durumu', value: phoneScreenState === 'ciziksiz' ? 'Çiziksiz Orijinal' : phoneScreenState === 'cizikli' ? 'Kılcal Çizikler Var' : phoneScreenState === 'degisen' ? 'Ekran Değişmiş' : 'Kırık / Çatlak Var' });
      if (faceIdWorking) list.push({ label: 'Face ID', value: faceIdWorking === 'evet' ? 'Face ID Kusursuz Çalışıyor' : 'Face ID Arızalı' });
    } else if (category === 'konsol') {
      list.push({ label: 'Cihaz Türü', value: 'Oyun Konsolu' });
      if (consoleModel) list.push({ label: 'Konsol Modeli', value: consoleModel.toUpperCase() });
      if (modelName) list.push({ label: 'Konsol / Model Notu', value: modelName });
      if (controllerCount) list.push({ label: 'Kol (Gamepad)', value: `${controllerCount} Adet Orijinal Kol` });
      if (consoleAccessories) list.push({ label: 'Aksesuarlar', value: consoleAccessories === 'tam' ? 'Kutulu Oyunlar & Tüm Kablolar Var' : consoleAccessories === 'sarj_istasyonu' ? 'Şarj İstasyonu / Kulaklık Dahil' : 'Yalnızca Konsol ve Kol' });
    } else if (category === 'ekran_karti') {
      list.push({ label: 'Cihaz Türü', value: 'Ekran Kartı (GPU)' });
      if (gpuModel) list.push({ label: 'Model', value: gpuModel.toUpperCase() });
      if (gpuBrand) list.push({ label: 'Marka & Seri', value: gpuBrand });
      if (modelName) list.push({ label: 'Ek Not / Detay', value: modelName });
      if (sealStatus) list.push({ label: 'Güvenlik Bandrolü', value: sealStatus === 'orijinal' ? 'Açılmadı / Güvenlik Etiketi Üzerinde' : sealStatus === 'acildi' ? 'Termal Macun Değişimi İçin Açıldı' : 'Bakım İstiyor' });
    } else if (category === 'monitor') {
      list.push({ label: 'Cihaz Türü', value: 'Oyuncu Monitörü' });
      if (modelName) list.push({ label: 'Marka & Model', value: modelName });
      if (monitorSize || monitorRes) list.push({ label: 'Boyut & Çözünürlük', value: `${monitorSize ? `${monitorSize} İnç` : ''} ${monitorRes ? monitorRes.toUpperCase() : ''}`.trim() });
      if (monitorHz) list.push({ label: 'Yenileme Hızı', value: monitorHz });
      if (monitorPanelType) list.push({ label: 'Panel Tipi', value: monitorPanelType.toUpperCase() });
      if (monitorDeadPixel) list.push({ label: 'Ölü Piksel', value: monitorDeadPixel === 'yok' ? 'Ölü Piksel & Çizik Yok' : 'Ölü Piksel Var' });
    } else if (category === 'tablet') {
      list.push({ label: 'Cihaz Türü', value: 'iPad / Tablet' });
      if (tabletBrand || tabletModel) list.push({ label: 'Marka & Model', value: `${tabletBrand || ''} ${tabletModel ? tabletModel.toUpperCase() : ''}`.trim() });
      if (modelName) list.push({ label: 'Özel Model / Not', value: modelName });
      if (tabletStorage) list.push({ label: 'Hafıza', value: `${tabletStorage} GB` });
      if (tabletCellular) list.push({ label: 'Bağlantı', value: tabletCellular === 'cellular' ? 'Wi-Fi + Cellular (SIM Kartlı)' : 'Sadece Wi-Fi' });
      if (tabletScreenCondition) list.push({ label: 'Ekran Camı', value: tabletScreenCondition === 'ciziksiz' ? 'Çiziksiz Orijinal' : 'Kılcal Çizikler Var' });
      if (tabletAccessories) list.push({ label: 'Aksesuarlar', value: tabletAccessories === 'kalem_klavye' ? 'Kalem & Klavye Kılıfı Var' : tabletAccessories === 'kalem' ? 'Yalnızca Kalem Var' : 'Yalnızca Tablet' });
    }

    if (cosmetic) list.push({ label: 'Kozmetik Durum', value: cosmetic === '10' ? '10/10 Sıfır Ayarında (Çiziksiz)' : cosmetic === '9' ? '9/10 Çok Temiz (Kılcal İzler)' : cosmetic === '8' ? '8/10 Temiz' : cosmetic === '7' ? '7/10 Kullanım İzleri Var' : '5/10 Kusur / Kırık Var' });
    if (boxInvoice) list.push({ label: 'Kutu & Fatura', value: boxInvoice === 'tam_garanti' ? 'Kutu + Fatura + Resmi Garanti Devam Ediyor' : boxInvoice === 'tam' ? 'Kutu ve Fatura Var (Garanti Bitti)' : boxInvoice === 'sarj_var' ? 'Yalnızca Orijinal Şarj Adaptörü Var' : 'Kutu / Fatura Yok' });
    if (repairStatus) list.push({ label: 'Tamir Durumu', value: repairStatus === 'orijinal' ? 'Hiç Açılmadı / Orijinal' : repairStatus === 'upgrade' ? 'Sadece RAM / SSD Yükseltildi' : repairStatus === 'bakim' ? 'Termal Bakımı Yapıldı' : 'Tamir / Parça Değişimi Gördü' });
    if (location) list.push({ label: 'Konum', value: location });
    if (extraNotes && extraNotes.trim()) list.push({ label: 'Müşteri Notu', value: extraNotes.trim() });

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
          {(category === 'laptop' || category === 'masaustu') && (cpu || gpu || ram || storage) && (
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
                {cpu && <span className="spec-chip">⚡ {getHardwareLabel('cpu', cpu)}</span>}
                {gpu && <span className="spec-chip">🎮 {getHardwareLabel('gpu', gpu)}</span>}
                {ram && <span className="spec-chip">🧠 {getHardwareLabel('ram', ram)}</span>}
                {storage && <span className="spec-chip">💾 {getHardwareLabel('storage', storage)}</span>}
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
                    setSelectedSeries('');
                  }}
                >
                  <option value="">-- Laptop Markası Seçiniz --</option>
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
                  <option value="">-- Model Serisi Seçiniz --</option>
                  {brand && POPULAR_SERIES_BY_BRAND[brand] ? (
                    <>
                      {POPULAR_SERIES_BY_BRAND[brand].map(ser => (
                        <option key={ser} value={ser}>{ser}</option>
                      ))}
                      <option value="Diğer / Listede Yok">Diğer / Listede Yok (Aşağıya Yazınız)</option>
                    </>
                  ) : brand ? (
                    <>
                      <option value="Standart Seri">Standart Seri</option>
                      <option value="Diğer / Listede Yok">Diğer / Listede Yok (Aşağıya Yazınız)</option>
                    </>
                  ) : null}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Model Adı / Kodu veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: FA507NV, Abra A5 V20.3 veya listede olmayan model adı..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci (CPU) Modeli - Tümü Listelendi</label>
                <select className="form-control" value={cpu} onChange={e => setCpu(e.target.value)}>
                  <option value="">-- İşlemci (CPU) Seçiniz --</option>
                  {CPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Kartı (GPU) - Tümü Listelendi</label>
                <select className="form-control" value={gpu} onChange={e => setGpu(e.target.value)}>
                  <option value="">-- Ekran Kartı (GPU) Seçiniz --</option>
                  {GPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RAM Bellek Kapasitesi</label>
                <select className="form-control" value={ram} onChange={e => setRam(e.target.value)}>
                  <option value="">-- RAM Bellek Seçiniz --</option>
                  {RAM_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Depolama (SSD / Disk)</label>
                <select className="form-control" value={storage} onChange={e => setStorage(e.target.value)}>
                  <option value="">-- Depolama (SSD) Seçiniz --</option>
                  {STORAGE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Boyutu & Yenileme Hızı</label>
                <select className="form-control" value={screenHz} onChange={e => setScreenHz(e.target.value)}>
                  <option value="">-- Ekran & Hz Seçiniz --</option>
                  {SCREEN_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Batarya / Pil Durumu</label>
                <select className="form-control" value={batteryHealth} onChange={e => setBatteryHealth(e.target.value)}>
                  <option value="">-- Pil Sağlığı Seçiniz --</option>
                  {BATTERY_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Termal Durum & Fan Sesi</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  <option value="">-- Isınma & Fan Durumu Seçiniz --</option>
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
                  <option value="">-- Kasa Türü Seçiniz --</option>
                  <option value="gaming">Oyuncu Kasası (RGB / Temperli Cam Panel / Mesh)</option>
                  <option value="akvaryum">Akvaryum Çift Cam Panel Gaming PC</option>
                  <option value="standart">Standart Toplama Kasa (Siyah / Gri)</option>
                  <option value="ofis">Ofis / Mini ITX / Kompakt APU Kasa</option>
                  <option value="workstation">İş İstasyonu / Workstation Kasa</option>
                  <option value="diger">Diğer / Özel Kasa Türü</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Kasa Modeli veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: NZXT Akvaryum Kasa, 6 fanlı RGB, özel sistem detayları..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Anakart Çipseti / Modeli</label>
                <select className="form-control" value={motherboard} onChange={e => setMotherboard(e.target.value)}>
                  <option value="">-- Anakart Çipseti Seçiniz --</option>
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
                  <option value="">-- Güç Kaynağı Seçiniz --</option>
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
                  <option value="">-- İşlemci (CPU) Seçiniz --</option>
                  {CPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Kartı (GPU) - Tümü Listelendi</label>
                <select className="form-control" value={gpu} onChange={e => setGpu(e.target.value)}>
                  <option value="">-- Ekran Kartı (GPU) Seçiniz --</option>
                  {GPU_OPTIONS_GROUPED}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RAM Bellek</label>
                <select className="form-control" value={ram} onChange={e => setRam(e.target.value)}>
                  <option value="">-- RAM Bellek Seçiniz --</option>
                  {RAM_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Depolama (SSD / HDD)</label>
                <select className="form-control" value={storage} onChange={e => setStorage(e.target.value)}>
                  <option value="">-- Depolama (SSD) Seçiniz --</option>
                  {STORAGE_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci Soğutucu</label>
                <select className="form-control" value={cooling} onChange={e => setCooling(e.target.value)}>
                  <option value="">-- Soğutucu Türü Seçiniz --</option>
                  <option value="sivi360">360mm Sıvı Soğutma (AIO 3 Fanlı)</option>
                  <option value="sivi">240mm / 280mm Sıvı Soğutma (AIO 2 Fanlı)</option>
                  <option value="kule">Kule Tipi Çift Fanlı Bakır Borulu Hava Soğutma</option>
                  <option value="stok">Stok Standart Kutu Fanı</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Termal Durum & Sıcaklık</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  <option value="">-- Termal Durum Seçiniz --</option>
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
                  <option value="">-- MacBook Modeli Seçiniz --</option>
                  <option value="pro16">MacBook Pro 16 inç (Apple Silicon M Serisi)</option>
                  <option value="pro14">MacBook Pro 14 inç (Apple Silicon M Serisi)</option>
                  <option value="pro13">MacBook Pro 13 inç (M2 / M1 Touch Bar)</option>
                  <option value="air15">MacBook Air 15 inç (M3 / M2)</option>
                  <option value="air13">MacBook Air 13 inç (M3 / M2 / M1 Retina)</option>
                  <option value="intel_pro">MacBook Pro (Intel Core i9 / i7 / i5)</option>
                  <option value="intel_air">MacBook Air (Intel Core i5 / i3)</option>
                  <option value="diger">Diğer / Listede Olmayan Model (Aşağıya Yazınız)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Model Detayı veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: 2023 M2 Pro 14 inç 16GB/512GB Uzay Grisi..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">İşlemci Çipi (Apple Silicon / Intel)</label>
                <select className="form-control" value={appleChip} onChange={e => setAppleChip(e.target.value)}>
                  <option value="">-- Apple Çip Seçiniz --</option>
                  {APPLE_CHIP_OPTIONS}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Birleşik Bellek (RAM)</label>
                <select className="form-control" value={appleRam} onChange={e => setAppleRam(e.target.value)}>
                  <option value="">-- RAM Bellek Seçiniz --</option>
                  <option value="8">8 GB Birleşik Bellek</option>
                  <option value="16">16 GB / 18 GB Birleşik Bellek</option>
                  <option value="24">24 GB / 36 GB Birleşik Bellek</option>
                  <option value="48">48 GB / 64 GB / 128 GB Birleşik Bellek</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">SSD Kapasitesi</label>
                <select className="form-control" value={appleDisk} onChange={e => setAppleDisk(e.target.value)}>
                  <option value="">-- SSD Kapasitesi Seçiniz --</option>
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
                  <option value="">-- Pil Durumu Seçiniz --</option>
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
                  <option value="">-- iPhone Modeli Seçiniz --</option>
                  {IPHONE_OPTIONS}
                  <option value="diger">Diğer / Listede Olmayan Model</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Model Adı / Kodu veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: iPhone 14 Pro Max 256GB veya listede olmayan model..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Hafıza Kapasitesi</label>
                <select className="form-control" value={phoneStorage} onChange={e => setPhoneStorage(e.target.value)}>
                  <option value="">-- Hafıza Seçiniz --</option>
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
                  <option value="">-- Pil Sağlığı Seçiniz --</option>
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
                  <option value="">-- Ekran & Cam Durumu Seçiniz --</option>
                  <option value="ciziksiz">Nokta Çiziksiz Orijinal Ekran + True Tone Aktif</option>
                  <option value="cizikli">Kılcal Çizikler Mevcut (Orijinal Ekran, Kırık Yok)</option>
                  <option value="degisen">Ekran Değişimi Yapılmış (True Tone Yok)</option>
                  <option value="catlak">Ön Camda veya Arka Camda Kırık / Çatlak Var</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Face ID Durumu</label>
                <select className="form-control" value={faceIdWorking} onChange={e => setFaceIdWorking(e.target.value)}>
                  <option value="">-- Face ID Durumu Seçiniz --</option>
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
                  <option value="">-- Konsol Modeli Seçiniz --</option>
                  {CONSOLE_OPTIONS}
                  <option value="diger">Diğer / Listede Olmayan Konsol</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Konsol Modeli veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: PS5 Slim CD'li, 2. Kol orijinal DualSense ve şarj istasyonu..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Kol (DualSense / Gamepad) Sayısı</label>
                <select className="form-control" value={controllerCount} onChange={e => setControllerCount(e.target.value)}>
                  <option value="">-- Kol Sayısı Seçiniz --</option>
                  <option value="1">1 Adet Orijinal Kol</option>
                  <option value="2">2 Adet Orijinal Kol</option>
                  <option value="3">3 ve Üzeri Kol / DualSense Edge / Özel Kol</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Aksesuar & Oyun Durumu</label>
                <select className="form-control" value={consoleAccessories} onChange={e => setConsoleAccessories(e.target.value)}>
                  <option value="">-- Aksesuar Durumu Seçiniz --</option>
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
                  <option value="">-- Ekran Kartı Çipi Seçiniz --</option>
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
                  <option value="">-- Güvenlik Bandrolü Seçiniz --</option>
                  <option value="orijinal">Fabrika güvenlik bandrolü duruyor, içi hiç açılmadı</option>
                  <option value="acildi">Termal macun / pad değişimi için açıldı</option>
                  <option value="bakim">Macun kurumuş, termal bakım gerekiyor</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yük Altı / FurMark Sıcaklığı</label>
                <select className="form-control" value={thermalStatus} onChange={e => setThermalStatus(e.target.value)}>
                  <option value="">-- Sıcaklık & FurMark Durumu Seçiniz --</option>
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
                <label className="form-label">Monitör Markası & Modeli veya Ek Not</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: ASUS TUF VG27AQZ 27 inç 2K 165Hz..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ekran Boyutu</label>
                <select className="form-control" value={monitorSize} onChange={e => setMonitorSize(e.target.value)}>
                  <option value="">-- Ekran Boyutu Seçiniz --</option>
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
                  <option value="">-- Panel Türü Seçiniz --</option>
                  <option value="fast_ips">Fast IPS Panel (Canlı Renkler & Yüksek Hız)</option>
                  <option value="oled">OLED / QD-OLED Panel (Sonsuz Kontrast)</option>
                  <option value="va">VA Panel (Kavisli / Curved)</option>
                  <option value="tn">TN Espor Paneli</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yenileme Hızı</label>
                <select className="form-control" value={monitorHz} onChange={e => setMonitorHz(e.target.value)}>
                  <option value="">-- Yenileme Hızı Seçiniz --</option>
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
                  <option value="">-- Çözünürlük Seçiniz --</option>
                  <option value="2k">2K QHD (2560x1440)</option>
                  <option value="1080p">1080p Full HD (1920x1080)</option>
                  <option value="4k">4K UHD (3840x2160)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ölü Piksel & Panel Durumu</label>
                <select className="form-control" value={monitorDeadPixel} onChange={e => setMonitorDeadPixel(e.target.value)}>
                  <option value="">-- Ölü Piksel Durumu Seçiniz --</option>
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
                  <option value="">-- Tablet Markası Seçiniz --</option>
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
                  <option value="">-- Tablet Modeli Seçiniz --</option>
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
                <label className="form-label">Model Detayı veya Ek Notunuz</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: iPad Pro M4 256GB Wi-Fi veya Samsung Galaxy Tab S9..."
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Hafıza Kapasitesi</label>
                <select className="form-control" value={tabletStorage} onChange={e => setTabletStorage(e.target.value)}>
                  <option value="">-- Hafıza Seçiniz --</option>
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
                  <option value="">-- Bağlantı Türü Seçiniz --</option>
                  <option value="wifi">Yalnızca Wi-Fi</option>
                  <option value="cellular">Wi-Fi + Cellular (SIM Kart Destekli)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Ekran & Dokunmatik Durumu</label>
                <select className="form-control" value={tabletScreenCondition} onChange={e => setTabletScreenCondition(e.target.value)}>
                  <option value="">-- Ekran & Cam Durumu Seçiniz --</option>
                  <option value="ciziksiz">Nokta Çiziksiz Orijinal Ekran</option>
                  <option value="cizikli">Kılcal Çizikler Mevcut (Kırık Yok)</option>
                  <option value="degisen">Ekran Değişimi Yapılmış</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Yanında Verilecek Aksesuarlar</label>
                <select className="form-control" value={tabletAccessories} onChange={e => setTabletAccessories(e.target.value)}>
                  <option value="">-- Aksesuar Durumu Seçiniz --</option>
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
                <option value="">-- Kozmetik Durum Seçiniz --</option>
                {COSMETIC_OPTIONS}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Kutu, Fatura ve Garanti</label>
              <select className="form-control" value={boxInvoice} onChange={e => setBoxInvoice(e.target.value)}>
                <option value="">-- Kutu & Garanti Seçiniz --</option>
                {BOX_INVOICE_OPTIONS}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Tamir & Açılma Durumu</label>
              <select className="form-control" value={repairStatus} onChange={e => setRepairStatus(e.target.value)}>
                <option value="">-- Tamir & Açılma Durumu Seçiniz --</option>
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
            <label className="form-label">Eklemek İstediğiniz Notlar & Özel Durumlar (Opsiyonel)</label>
            <textarea 
              rows={2}
              className="form-control" 
              placeholder="Örn: Cihazın yanında orijinal kutusu, çantası ve aksesuarları mevcuttur. Tüybek Çarşısı mağazanıza elden getirebilirim."
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

              {getSpecsSummaryList().length <= 2 ? (
                <div style={{
                  padding: '24px 16px',
                  textAlign: 'center',
                  background: '#ffffff',
                  borderRadius: '10px',
                  border: '1.5px dashed #cbd5e1',
                  color: '#64748b',
                  marginBottom: '20px'
                }}>
                  <HelpCircle size={28} style={{ color: '#0284c7', margin: '0 auto 8px', display: 'block' }} />
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--heading)', marginBottom: '4px' }}>
                    Henüz Donanım Özelliği Seçilmedi
                  </strong>
                  <p style={{ fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
                    Lütfen yukarıdaki bölümden cihazınızın özelliklerini seçiniz. Seçtiğiniz donanımlar burada toplanacak ve WhatsApp mesajınız hazırlanacaktır.
                  </p>
                </div>
              ) : (
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
              )}

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

          {/* Randevu & Hızlı İletişim Bilgilendirme Notu */}
          <div style={{
            marginTop: '28px',
            padding: '20px 24px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.08), rgba(0, 89, 191, 0.08))',
            border: '1px solid rgba(22, 163, 74, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            textAlign: 'left',
            maxWidth: '780px',
            margin: '28px auto 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '260px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(22, 163, 74, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--heading)', marginBottom: '3px' }}>
                  Mağazada Nakit Satış İçin Randevu Alınız
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G, Selçuklu / Konya — Lütfen gelmeden önce <strong>0551 045 42 55</strong> hattımızdan randevu alınız.
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent(getFormattedMessage())}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
              style={{ fontWeight: 800, fontSize: '0.86rem', padding: '10px 18px', whiteSpace: 'nowrap' }}
            >
              <WhatsAppIcon size={16} /> WhatsApp Randevu & Teklif
            </a>
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
              Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G Selçuklu / Konya adresindeki mağazamıza gelmeden önce lütfen randevu alarak cihazınızı nakit satabilir veya takas edebilirsiniz.
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


import React, { useState } from 'react';
import { RefreshCw, ArrowRight, CheckCircle2, Laptop, Monitor, Phone, Sparkles, Cpu, ShieldCheck, MapPin } from 'lucide-react';
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
  THERMAL_OPTIONS,
  APPLE_CHIP_OPTIONS,
  CONSOLE_OPTIONS,
  getHardwareLabel 
} from '../data/hardwareOptions';

export default function TradeInPage({ products = [], targetProductId, navigate, settings }) {
  const [selectedProduct, setSelectedProduct] = useState(
    products.find(p => String(p.id) === String(targetProductId)) || products[0] || null
  );

  const [myDeviceType, setMyDeviceType] = useState('laptop');
  const [myBrand, setMyBrand] = useState('');
  const [mySeries, setMySeries] = useState('');
  const [myCpu, setMyCpu] = useState('');
  const [myGpu, setMyGpu] = useState('');
  const [myRam, setMyRam] = useState('');
  const [myStorage, setMyStorage] = useState('');
  const [myScreen, setMyScreen] = useState('');
  const [myBattery, setMyBattery] = useState('');
  const [myThermal, setMyThermal] = useState('');
  const [myAppleChip, setMyAppleChip] = useState('');
  const [myConsole, setMyConsole] = useState('');
  const [mySpecs, setMySpecs] = useState('');
  const [myCosmetic, setMyCosmetic] = useState('');
  const [myBoxInvoice, setMyBoxInvoice] = useState('');

  const targetPrice = selectedProduct?.price || 30000;

  const getHardwareTextSummary = () => {
    if (myDeviceType === 'laptop') {
      const parts = [];
      if (myBrand) parts.push(`${myBrand}${mySeries ? ` (${mySeries})` : ''}`);
      if (myCpu) parts.push(getHardwareLabel('cpu', myCpu));
      if (myGpu) parts.push(getHardwareLabel('gpu', myGpu));
      if (myRam) parts.push(`${myRam}GB RAM`);
      if (myStorage) parts.push(myStorage.toUpperCase());
      if (mySpecs) parts.push(`(${mySpecs})`);
      return parts.length > 0 ? parts.join(' • ') : 'Özellik seçiniz...';
    }
    if (myDeviceType === 'masaustu') {
      const parts = ['Masaüstü PC'];
      if (myCpu) parts.push(getHardwareLabel('cpu', myCpu));
      if (myGpu) parts.push(getHardwareLabel('gpu', myGpu));
      if (myRam) parts.push(`${myRam}GB RAM`);
      if (myStorage) parts.push(myStorage.toUpperCase());
      if (mySpecs) parts.push(`(${mySpecs})`);
      return parts.length > 1 ? parts.join(' • ') : 'Özellik seçiniz...';
    }
    if (myDeviceType === 'macbook') return myAppleChip ? `Apple Silicon ${myAppleChip.toUpperCase()} ${mySpecs ? `(${mySpecs})` : ''}` : 'MacBook çipi seçiniz...';
    if (myDeviceType === 'konsol') return myConsole ? `${myConsole.toUpperCase()} Konsol ${mySpecs ? `(${mySpecs})` : ''}` : 'Konsol modeli seçiniz...';
    return mySpecs || 'Özellik seçiniz...';
  };

  const handleWhatsAppTrade = () => {
    const phone = settings?.whatsapp || '905510454255';
    let text = `Merhaba Konya Bilgisayar (0551 045 42 55), takas işlemi için teklif almak istiyorum:\n\n`;
    text += `🎯 ALMAK İSTEDİĞİM MAĞAZA ÜRÜNÜ:\n• Ürün: ${selectedProduct?.title || 'Mağaza Ürünü'} (${Number(targetPrice).toLocaleString('tr-TR')} TL)\n\n`;
    text += `💻 TAKASA VERECEĞİM CİHAZ:\n• Cihaz Türü: ${myDeviceType.toUpperCase()}\n`;
    text += `• Donanım: ${getHardwareTextSummary()}\n`;
    text += `• Kozmetik: ${myCosmetic}/10\n`;
    text += `• Kutu/Fatura: ${myBoxInvoice}\n`;
    if (mySpecs.trim()) text += `• Müşteri Notu: ${mySpecs.trim()}\n`;
    text += `\n🔍 Cihazımın detaylı fotoğraflarını gönderebilirim. Bu cihaz karşılığında net takas farkı veya nakit sayım fiyat teklifiniz nedir?`;
    
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık & Görsel */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <img 
            src="/images/trade_in.jpg" 
            alt="Bilgisayar Takas ve Cihaz Yenileme" 
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
              <RefreshCw size={14} /> Kolay Cihaz Yenileme & Şeffaf Takas
            </span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            Bilgisayarınızı Stoktaki Bir Ürünle Takas Edin
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Eski laptop veya bilgisayarınızı değerinde sayıyor, almak istediğiniz ürünün fiyatından düşüyoruz. Yalnızca aradaki farkı ödeyerek cihazınızı yükseltin.
          </p>
        </div>

        {/* Takas Hesaplayıcı Kartı */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* 1. Almak İstediğiniz Ürün */}
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-bright)', textTransform: 'uppercase', marginBottom: '14px' }}>
                1. Almak İstediğiniz Mağaza Ürünü
              </div>

              <div className="form-group">
                <label className="form-label">Stoktaki Ürünü Seçin</label>
                <select 
                  className="form-control"
                  value={selectedProduct?.id || ''}
                  onChange={e => setSelectedProduct(products.find(p => String(p.id) === e.target.value))}
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} - {Number(p.price).toLocaleString('tr-TR')} TL
                    </option>
                  ))}
                </select>
              </div>

              {selectedProduct && (
                <div style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center'
                }}>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    style={{ width: '80px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--heading)', marginBottom: '4px' }}>
                      {selectedProduct.title}
                    </div>
                    <div style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--primary-bright)' }}>
                      {Number(selectedProduct.price).toLocaleString('tr-TR')} TL
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Takasa Vereceğiniz Cihaz */}
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-bright)', textTransform: 'uppercase', marginBottom: '14px' }}>
                2. Vereceğiniz Kendi Cihazınız
              </div>

              {/* Cihaz Türü */}
              <div className="form-group">
                <label className="form-label">Vereceğiniz Cihaz Türü</label>
                <select className="form-control" value={myDeviceType} onChange={e => setMyDeviceType(e.target.value)}>
                  <option value="laptop">Laptop / Dizüstü</option>
                  <option value="masaustu">Masaüstü Oyun Kasası / Toplama PC</option>
                  <option value="macbook">Apple MacBook</option>
                  <option value="konsol">PlayStation / Xbox Konsol</option>
                </select>
              </div>

              {myDeviceType === 'laptop' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Laptop Markası</label>
                    <select 
                      className="form-control" 
                      value={myBrand} 
                      onChange={e => {
                        const b = e.target.value;
                        setMyBrand(b);
                        setMySeries('');
                      }}
                    >
                      <option value="">-- Laptop Markası Seçiniz --</option>
                      {BRAND_OPTIONS}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Model Serisi</label>
                    <select className="form-control" value={mySeries} onChange={e => setMySeries(e.target.value)}>
                      <option value="">-- Model Serisi Seçiniz --</option>
                      {myBrand && POPULAR_SERIES_BY_BRAND[myBrand] ? (
                        POPULAR_SERIES_BY_BRAND[myBrand].map(s => <option key={s} value={s}>{s}</option>)
                      ) : myBrand ? (
                        <option value="Standart Seri">Standart Seri</option>
                      ) : null}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">İşlemciniz (CPU) - Tümü Listelendi</label>
                    <select className="form-control" value={myCpu} onChange={e => setMyCpu(e.target.value)}>
                      <option value="">-- İşlemci (CPU) Seçiniz --</option>
                      {CPU_OPTIONS_GROUPED}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Ekran Kartınız (GPU) - Tümü Listelendi</label>
                    <select className="form-control" value={myGpu} onChange={e => setMyGpu(e.target.value)}>
                      <option value="">-- Ekran Kartı (GPU) Seçiniz --</option>
                      {GPU_OPTIONS_GROUPED}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">RAM Bellek</label>
                      <select className="form-control" value={myRam} onChange={e => setMyRam(e.target.value)}>
                        <option value="">-- RAM Seçiniz --</option>
                        {RAM_OPTIONS}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Depolama (SSD)</label>
                      <select className="form-control" value={myStorage} onChange={e => setMyStorage(e.target.value)}>
                        <option value="">-- SSD Seçiniz --</option>
                        {STORAGE_OPTIONS}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Ekran Yenileme Hızı</label>
                    <select className="form-control" value={myScreen} onChange={e => setMyScreen(e.target.value)}>
                      <option value="">-- Ekran & Hz Seçiniz --</option>
                      {SCREEN_OPTIONS}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Batarya Durumu</label>
                    <select className="form-control" value={myBattery} onChange={e => setMyBattery(e.target.value)}>
                      <option value="">-- Pil Durumu Seçiniz --</option>
                      {BATTERY_OPTIONS}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Termal Durum & Fan Sesi</label>
                    <select className="form-control" value={myThermal} onChange={e => setMyThermal(e.target.value)}>
                      <option value="">-- Isınma Durumu Seçiniz --</option>
                      {THERMAL_OPTIONS}
                    </select>
                  </div>
                </>
              )}

              {myDeviceType === 'masaustu' && (
                <>
                  <div className="form-group">
                    <label className="form-label">İşlemciniz (CPU)</label>
                    <select className="form-control" value={myCpu} onChange={e => setMyCpu(e.target.value)}>
                      <option value="">-- İşlemci (CPU) Seçiniz --</option>
                      {CPU_OPTIONS_GROUPED}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Ekran Kartınız (GPU)</label>
                    <select className="form-control" value={myGpu} onChange={e => setMyGpu(e.target.value)}>
                      <option value="">-- Ekran Kartı (GPU) Seçiniz --</option>
                      {GPU_OPTIONS_GROUPED}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">RAM Bellek</label>
                      <select className="form-control" value={myRam} onChange={e => setMyRam(e.target.value)}>
                        <option value="">-- RAM Seçiniz --</option>
                        {RAM_OPTIONS}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Depolama (SSD)</label>
                      <select className="form-control" value={myStorage} onChange={e => setMyStorage(e.target.value)}>
                        <option value="">-- SSD Seçiniz --</option>
                        {STORAGE_OPTIONS}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Termal & Sıcaklık Durumu</label>
                    <select className="form-control" value={myThermal} onChange={e => setMyThermal(e.target.value)}>
                      <option value="">-- Termal Durum Seçiniz --</option>
                      {THERMAL_OPTIONS}
                    </select>
                  </div>
                </>
              )}

              {myDeviceType === 'macbook' && (
                <div className="form-group">
                  <label className="form-label">Apple Silicon Çipi</label>
                  <select className="form-control" value={myAppleChip} onChange={e => setMyAppleChip(e.target.value)}>
                    <option value="">-- Apple Çip Seçiniz --</option>
                    {APPLE_CHIP_OPTIONS}
                  </select>
                </div>
              )}

              {myDeviceType === 'konsol' && (
                <div className="form-group">
                  <label className="form-label">Konsol Modeli</label>
                  <select className="form-control" value={myConsole} onChange={e => setMyConsole(e.target.value)}>
                    <option value="">-- Konsol Modeli Seçiniz --</option>
                    {CONSOLE_OPTIONS}
                  </select>
                </div>
              )}

              {/* Kozmetik & Kutu & Not */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Kozmetik Durum</label>
                  <select className="form-control" value={myCosmetic} onChange={e => setMyCosmetic(e.target.value)}>
                    <option value="">-- Kozmetik Durum Seçiniz --</option>
                    {COSMETIC_OPTIONS}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Kutu & Fatura</label>
                  <select className="form-control" value={myBoxInvoice} onChange={e => setMyBoxInvoice(e.target.value)}>
                    <option value="">-- Kutu & Fatura Seçiniz --</option>
                    {BOX_INVOICE_OPTIONS}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Model Kodu / Açıklama (Opsiyonel)</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Örn: FA507NV-LP023W, 1 yıllık, çiziksiz"
                  value={mySpecs}
                  onChange={e => setMySpecs(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Şeffaf Takas Bilgilendirme ve Eylem Paneli */}
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            background: 'linear-gradient(135deg, #0a2540 0%, #0059bf 100%)',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <ShieldCheck size={26} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.08rem', marginBottom: '4px' }}>
                  Takas Değeri Nasıl Belirlenir?
                </div>
                <div style={{ fontSize: '0.88rem', opacity: 0.92, lineHeight: 1.55 }}>
                  Eski cihazınızın donanım nesli, FurMark test derecesi, pil ve kozmetik durumuna göre piyasadaki en yüksek reel nakit bedel belirlenir ve beğendiğiniz ürünün fiyatından doğrudan düşülür. Kalan farkı nakit, havale veya kredi kartı ile tamamlayabilirsiniz.
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '10px',
              padding: '12px 16px',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#93c5fd', fontWeight: 800 }}>
                  Takas Verilecek Cihazınız:
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                  {getHardwareTextSummary()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#93c5fd', fontWeight: 800 }}>
                  Almak İstediğiniz Ürün:
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                  {selectedProduct?.title} ({Number(targetPrice).toLocaleString('tr-TR')} TL)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={handleWhatsAppTrade}
                className="btn btn-wa"
                style={{ padding: '14px 28px', fontSize: '1.02rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <WhatsAppIcon size={22} /> Bu Takas İçin WhatsApp'tan Teklif Al (0551 045 42 55)
              </button>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn"
                style={{ background: '#16a34a', color: '#ffffff', padding: '14px 22px', fontSize: '1rem', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Phone size={18} /> Ara: {settings?.phone || '0551 045 42 55'}
              </a>
            </div>

            <div style={{ fontSize: '0.82rem', opacity: 0.85, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} />
              <span>Konya Selçuklu Mağazamıza gelerek aynı gün 15 dakikada cihazınızı takas edebilirsiniz.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


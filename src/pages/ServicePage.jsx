import React, { useState } from 'react';
import { 
  Cpu, 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Clock, 
  HardDrive,
  Phone
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ServicePage({ settings }) {
  const [deviceType, setDeviceType] = useState('laptop');
  const [brandModel, setBrandModel] = useState('');
  const [serviceType, setServiceType] = useState('bakim');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitService = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      deviceType,
      brandModel: brandModel || 'Belirtilmedi',
      serviceType,
      description,
      customerName,
      customerPhone,
      status: 'beklemede'
    };

    try {
      await fetch('/api/services', {
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

  const handleWhatsAppQuick = () => {
    const phone = settings?.whatsapp || '905510454255';
    const text = `Merhaba Konya Bilgisayar Teknik Servis, ${deviceType} cihazım için servis desteği almak istiyorum. Model: ${brandModel || '-'}, Sorun: ${description || '-'}. Yardımcı olabilir misiniz?`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık & Görsel */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <img 
            src="/images/service_diagnostics.jpg" 
            alt="Konya Bilgisayar Teknik Servis ve Bakım" 
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
              Uzman Onarım & Bakım
            </span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            Konya Bilgisayar Teknik Servisi
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Laptop ve masaüstü bilgisayarlarınız için profesyonel termal bakım, macun yenileme, format, parça yükseltme ve sistem toplama hizmetleri.
          </p>
        </div>

        {/* 4 Adımlı Servis Süreci */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '48px'
        }}>
          <ProcessStep num="1" title="İletişime Geçin" desc="Arıza veya bakım ihtiyacınızı formdan veya WhatsApp'tan bildirin." />
          <ProcessStep num="2" title="Cihazı Getirin" desc="Selçuklu mağazamıza getirin veya kargoyla gönderin." />
          <ProcessStep num="3" title="Ücretsiz Arıza Tespiti" desc="Cihaz incelenir, onayınız alınmadan işlem yapılmaz." />
          <ProcessStep num="4" title="Test & Teslimat" desc="Onarımı ve stres testleri tamamlanarak garantili teslim edilir." />
        </div>

        {/* Hizmet Listesi Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <ServiceItem 
            icon={<Sparkles size={24} />}
            title="Laptop Termal Bakım & Temizlik"
            desc="Isınan ve kasan fanlar için detaylı toz temizliği, Arctic MX-4 veya sıvı metal termal macun yenilemesi."
          />
          <ServiceItem 
            icon={<HardDrive size={24} />}
            title="SSD & RAM Yükseltme"
            desc="Yavaşlayan bilgisayarınıza yüksek hızlı M.2 NVMe SSD ve RAM takarak ilk günkü hızına kavuşturuyoruz."
          />
          <ServiceItem 
            icon={<Cpu size={24} />}
            title="Özel Masaüstü PC Toplama"
            desc="Bütçenize göre en yüksek FPS veren sıfır ve ikinci el dengeli oyun sistemlerini profesyonelce topluyoruz."
          />
          <ServiceItem 
            icon={<Wrench size={24} />}
            title="Ekran & Kasa Onarımı"
            desc="Kırık laptop panelleri, kırılan menteşe ve kasa tamirlerini orijinal parçalarla garantili yapıyoruz."
          />
        </div>

        {/* Servis Talep Formu */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--heading)' }}>
                Teknik Servis Talebi Oluşturun
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Formu doldurun, teknisyenlerimiz en kısa sürede fiyat ve işlem süresiyle ilgili size dönüş yapsın.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn btn-primary btn-sm"
                style={{ background: '#16a34a', fontWeight: 800 }}
              >
                <Phone size={16} /> 0551 045 42 55'i Ara
              </a>
              <button 
                onClick={handleWhatsAppQuick}
                className="btn btn-wa btn-sm"
                style={{ fontWeight: 700 }}
              >
                <WhatsAppIcon size={18} /> WhatsApp'tan Sor
              </button>
            </div>
          </div>

          {submitted ? (
            <div style={{
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1.5px solid #10b981',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={36} style={{ color: '#10b981', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#047857', marginBottom: '6px' }}>
                Servis Talebiniz Başarıyla Alındı!
              </h3>
              <p style={{ color: '#065f46', fontSize: '0.92rem', marginBottom: '16px' }}>
                Kaydınız yönetim panelimize düştü. Teknisyenimiz telefon numaranızdan sizinle iletişime geçecektir.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setDescription(''); setBrandModel(''); }}
                className="btn btn-outline btn-sm"
                style={{ fontWeight: 700 }}
              >
                Yeni Talep Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitService}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Cihaz Türü</label>
                  <select className="form-control" value={deviceType} onChange={e => setDeviceType(e.target.value)}>
                    <option value="laptop">Laptop / Dizüstü</option>
                    <option value="masaustu">Masaüstü Bilgisayar Kasa</option>
                    <option value="macbook">MacBook / iMac</option>
                    <option value="konsol">PlayStation / Konsol</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">İşlem / Hizmet Türü</label>
                  <select className="form-control" value={serviceType} onChange={e => setServiceType(e.target.value)}>
                    <option value="bakim">Genel Bakım & Termal Macun Yenileme</option>
                    <option value="format">Format & Lisanslı Sistem Kurulumu</option>
                    <option value="upgrade">SSD / RAM Yükseltme</option>
                    <option value="ekran">Ekran / Kasa / Menteşe Tamiri</option>
                    <option value="ariza">Açılmıyor / Arıza Tespiti</option>
                    <option value="toplama">Özel Sistem Toplama Talebi</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Marka ve Model</label>
                  <input 
                    type="text" 
                    placeholder="Örn: Asus TUF, Lenovo IdeaPad, Özel Toplama" 
                    className="form-control"
                    value={brandModel}
                    onChange={e => setBrandModel(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Sorun veya Talep Açıklaması</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Cihazınızdaki arızayı veya yaptırmak istediğiniz işlemi kısaca anlatın..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div className="form-group">
                  <label className="form-label">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="05XX XXX XX XX" 
                    required 
                    value={customerPhone}
                    onChange={e => setCustomerPhone(e.target.value)}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontWeight: 700, fontSize: '1rem' }}
              >
                <Send size={18} /> {submitting ? 'Gönderiliyor...' : 'Servis Talebini Gönder'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc }) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 'var(--radius-md)',
      padding: '20px',
      border: '1px solid var(--border)',
      textAlign: 'center'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'var(--primary-glow)',
        color: 'var(--primary-bright)',
        fontWeight: 900,
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 12px'
      }}>
        {num}
      </div>
      <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
        {title}
      </h4>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
        {desc}
      </p>
    </div>
  );
}

function ServiceItem({ icon, title, desc }) {
  return (
    <div className="card">
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'var(--primary-glow)',
        color: 'var(--primary-bright)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  );
}

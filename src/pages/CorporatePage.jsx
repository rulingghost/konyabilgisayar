import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Banknote, 
  CheckCircle2, 
  Phone, 
  FileSpreadsheet, 
  Lock, 
  HardDrive,
  Users,
  ArrowRight,
  Send
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CorporatePage({ navigate, settings }) {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceCount, setDeviceCount] = useState('10-50');
  const [deviceTypes, setDeviceTypes] = useState('Laptop & Masaüstü Bilgisayarlar');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  const handleWhatsAppCorporate = () => {
    const text = `Merhaba Konya Bilgisayar Kurumsal Departmanı, şirketimiz bünyesindeki bilişim envanterini (yaklaşık ${deviceCount} adet) yenilemek / toplu olarak satmak istiyoruz.\n• Şirket: ${companyName || 'Belirtilmedi'}\n• Yetkili: ${contactPerson || 'Belirtilmedi'}\n• Telefon: ${phone || 'Belirtilmedi'}\n• Cihaz Türü: ${deviceTypes}\n• Detaylar: ${notes || 'Envanter listesi paylaşılacak'}\nToplu değerleme ve yerinde ekspertiz için görüşebilir miyiz?`;
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      category: 'kurumsal_toplu',
      brand: companyName || 'Kurumsal Şirket',
      modelName: `${deviceCount} Adet - ${deviceTypes}`,
      specsSummary: `Yetkili: ${contactPerson}, Notlar: ${notes}`,
      estimatedMin: 0,
      estimatedMax: 0,
      customerName: contactPerson || companyName,
      customerPhone: phone,
      location: 'Konya Organize Sanayi / Kurumsal',
      status: 'beklemede',
      createdAt: new Date().toISOString()
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
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '50px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Hero Başlık & Görsel */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img 
            src="/images/corporate_buyback.jpg" 
            alt="Toplu ve Kurumsal Bilgisayar Alımı Konya" 
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
              <Building2 size={14} /> B2B & Kurumsal Çözümler
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Toplu ve Kurumsal Bilgisayar Alımı
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
            Şirketinizde, ofisinizde, çağrı merkezinizde veya eğitim kurumunuzda yenilediğiniz <strong>5 adetten 500+ adede kadar</strong> bilgisayar, laptop, monitör ve donanımı yerinde ekspertizle değerinde nakit alıyoruz.
          </p>
        </div>

        {/* 4 Ana Avantaj Kartları */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Truck size={24} />
            </div>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Yerinde Ekspertiz & Nakliye
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Konya Organize Sanayi Bölgesi (OSB), Büsan ve tüm İç Anadolu genelinde adresinize gelerek cihazları test ediyor, kendi nakliye ekibimizle teslim alıyoruz.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Banknote size={24} />
            </div>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Aynı Gün Kurumsal Banka Ödemesi
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Şirketinizin tercihine göre fatura veya gider pusulası karşılığında, anlaşılan tutarı aynı gün resmi şirket hesabınıza nakit / EFT ile aktarıyoruz.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(234, 88, 12, 0.12)', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Sertifikalı Güvenli Veri İmhası
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              KVKK uyumlu olarak SSD ve HDD disklerdeki kurumsal verileriniz, askeri standartlarda (DoD 5220.22-M ve Secure Erase) geri getirilemez şekilde sıfırlanır.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <FileSpreadsheet size={24} />
            </div>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
              Hızlı Excel Liste Fiyatlandırması
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Envanter listenizi (Excel, PDF veya fotoğraf) WhatsApp veya e-posta ile gönderin; 2 saat içinde detaylı toplu alım teklif dosyanızı hazırlayalım.
            </p>
          </div>
        </div>

        {/* Kurumsal Form ve İletişim Kutusu */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}>
            {/* Sol: Bilgi & Hızlı Aksiyon */}
            <div>
              <span className="badge badge-green" style={{ marginBottom: '12px' }}>
                Hemen Fiyat Alın
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '12px' }}>
                Toplu Envanter Satış Talebi
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Aşağıdaki formu doldurabilir veya listenizi doğrudan WhatsApp üzerinden kurumsal müşteri temsilcimize iletebilirsiniz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <a 
                  href={`tel:${phoneRaw}`}
                  className="btn btn-primary"
                  style={{ background: '#16a34a', padding: '14px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Phone size={18} /> Kurumsal Departmanı Ara: {phoneFormatted}
                </a>
                <button 
                  onClick={handleWhatsAppCorporate}
                  className="btn btn-wa"
                  style={{ padding: '14px', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={18} /> WhatsApp ile Liste Gönder (0551 045 42 55)
                </button>
              </div>

              <div style={{
                background: 'var(--surface-2)',
                borderRadius: 'var(--radius-md)',
                padding: '18px',
                border: '1px solid var(--border)',
                fontSize: '0.86rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6
              }}>
                <strong style={{ color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>Hangi Cihazları Alıyoruz?</strong>
                • Tüm marka laptoplar (Lenovo ThinkPad, Dell Latitude, HP ProBook vb.)<br />
                • Masaüstü ofis kasaları & All-in-One PC'ler<br />
                • IPS / LED Monitörler (21.5" - 34" arası tüm boyutlar)<br />
                • Sunucular (Server), Network Switch ve Kesintisiz Güç Kaynakları (UPS)
              </div>
            </div>

            {/* Sağ: İletişim Formu */}
            <div>
              {submitted ? (
                <div style={{
                  background: 'rgba(22, 163, 74, 0.08)',
                  border: '1.5px solid var(--success)',
                  borderRadius: 'var(--radius-md)',
                  padding: '36px 24px',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--success)', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                    Talebiniz Alındı!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    Kurumsal ekspertiz uzmanımız en geç 2 saat içinde tarafınızla irtibata geçecek ve liste çalışmasını tamamlayacaktır.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button 
                      onClick={handleWhatsAppCorporate}
                      className="btn btn-wa btn-sm"
                      style={{ fontWeight: 700 }}
                    >
                      WhatsApp'tan Hemen Hatırlat
                    </button>
                    <button 
                      onClick={() => { setSubmitted(false); setNotes(''); }}
                      className="btn btn-outline btn-sm"
                      style={{ fontWeight: 700 }}
                    >
                      Yeni Talep Gönder
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Şirket / Kurum Adı *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      placeholder="Örn: ABC Lojistik A.Ş." 
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Yetkili Kişi *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        placeholder="Ad Soyad" 
                        value={contactPerson}
                        onChange={e => setContactPerson(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Telefon Numarası *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        required 
                        placeholder="05XX XXX XX XX" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Tahmini Cihaz Adedi</label>
                      <select 
                        className="form-control"
                        value={deviceCount}
                        onChange={e => setDeviceCount(e.target.value)}
                      >
                        <option value="5-10">5 - 10 Adet</option>
                        <option value="10-50">10 - 50 Adet</option>
                        <option value="50-100">50 - 100 Adet</option>
                        <option value="100+">100+ Adet (Büyük Envanter)</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Cihaz Türleri</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Laptop, Kasa, Monitör vb." 
                        value={deviceTypes}
                        onChange={e => setDeviceTypes(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Cihaz Modelleri / Donanım Notları</label>
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      placeholder="Modeller, işlemci nesilleri, kozmetik durum veya liste bilgisi..."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ padding: '13px', fontWeight: 800, fontSize: '1rem', marginTop: '6px' }}
                  >
                    {loading ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3 Aşamalı Süreç */}
        <div style={{
          background: 'var(--surface-2)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--heading)', textAlign: 'center', marginBottom: '28px' }}>
            Kurumsal Alım Sürecimiz Nasıl İşler?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-bright)', color: '#ffffff', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                1
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
                Envanter Tespiti & Teklif
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Cihaz modelleri ve adetleri üzerinden en güncel ikinci el piyasa değerlemesi yapılarak resmi teklif dosyanız iletilir.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-bright)', color: '#ffffff', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                2
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
                Yerinde Hızlı Ekspertiz
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Uzman teknisyenlerimiz ofisinizde cihazların donanım ve açılış kontrollerini seri şekilde tamamlar.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                3
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
                Nakit Ödeme & Taşıma
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Ödemeniz aynı gün banka hesabınıza yatırılır, cihazlar ekibimiz tarafından araçlarımıza yüklenerek süreç tamamlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

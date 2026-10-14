import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ContactPage({ settings }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetPhone = settings?.whatsapp || '905510454255';
    const text = `Merhaba Konya Bilgisayar, Adım: ${name}, Telefonum: ${phone}, Mesajım: ${message}`;
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
            Bize Ulaşın
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            İletişim & Konya Mağazamız
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Cihaz satışı, ikinci el alım, teknik servis veya takas için Konya Selçuklu mağazamıza randevusuz gelebilir veya doğrudan <strong>0551 045 42 55</strong> numaramızı arayabilirsiniz.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {/* Sol Kolon: İletişim Bilgileri Kartları */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '4px' }}>
                    Mağaza Adresi
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {settings?.address || 'Feritpaşa Mah. Ahmet Hilmi Nalçacı Cad. No:42/B, Selçuklu / KONYA'}
                  </p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--primary-bright)', fontWeight: 600, marginTop: '6px' }}>
                    (Nalçacı Tramvay Durağı ve Zafer Yakını)
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '4px' }}>
                    Çalışma Saatleri
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    {settings?.workingHours || 'Haftanın her günü: 09:00 - 20:00'}
                  </p>
                  <p style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700, marginTop: '6px' }}>
                    Randevu gerekmez, her zaman bekleriz.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '4px' }}>
                    Telefon & WhatsApp
                  </h3>
                  <div style={{ marginBottom: '12px' }}>
                    <a href={`tel:${settings?.phoneRaw || '905510454255'}`} style={{ fontSize: '1.25rem', fontWeight: 900, color: '#16a34a' }}>
                      {settings?.phone || '0551 045 42 55'}
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <a 
                      href={`tel:${settings?.phoneRaw || '905510454255'}`}
                      className="btn btn-primary btn-sm"
                      style={{ background: '#16a34a', fontWeight: 700 }}
                    >
                      <Phone size={16} /> Hemen Ara
                    </a>
                    <a 
                      href={`https://wa.me/${settings?.whatsapp || '905510454255'}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-wa btn-sm"
                      style={{ fontWeight: 700 }}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp'tan Yaz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Mesaj Gönder Formu */}
          <div className="card">
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
              Bize Mesaj Gönderin
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Sorularınızı veya satmak istediğiniz cihazın bilgilerini iletin.
            </p>

            {sent ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.12)', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <CheckCircle2 size={32} style={{ color: '#10b981', margin: '0 auto 8px' }} />
                <h4 style={{ color: '#047857', fontWeight: 800, marginBottom: '12px' }}>Mesajınız WhatsApp'a Yönlendirildi!</h4>
                <button
                  type="button"
                  onClick={() => { setSent(false); setMessage(''); }}
                  className="btn btn-outline btn-sm"
                  style={{ fontWeight: 700 }}
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Adınız Soyadınız</label>
                  <input type="text" className="form-control" required value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Telefon Numaranız</label>
                  <input type="tel" className="form-control" required value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Mesajınız / Soru</label>
                  <textarea className="form-control" rows="3" required value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontWeight: 700 }}>
                  <Send size={18} /> Mesajı Gönder
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Harita */}
        <div style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
          height: '380px'
        }}>
          <iframe 
            src={settings?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100770.83538965876!2d32.4178788448373!3d37.87834524792622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d71221bd%3A0x897914eec5f524f7!2sKonya!5e0!3m2!1str!2str"}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Konya Bilgisayar Harita"
          />
        </div>
      </div>
    </div>
  );
}

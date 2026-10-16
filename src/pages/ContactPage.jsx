import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
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

  const storeAddress = settings?.address || 'Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G, Selçuklu / KONYA';
  const mapUrl = settings?.mapEmbedUrl || 'https://maps.google.com/maps?q=H%C3%BCsamettin+%C3%87elebi+Mah.+Akabe+Cad.+T%C3%BCybek+%C3%87ar%C5%9F%C4%B1s%C4%B1+No:+9+G+Sel%C3%A7uklu+Konya&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
            Bize Ulaşın
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            İletişim & Konya Mağazamız
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 16px' }}>
            Cihaz satışı, ikinci el alım, teknik servis veya takas için Konya Selçuklu mağazamıza gelebilir veya doğrudan <strong>0551 045 42 55</strong> numaramızı arayabilirsiniz.
          </p>

          {/* Önemli Randevu Uyarısı Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, rgba(245, 158, 11, 0.12) 100%)',
            border: '1.5px solid rgba(234, 88, 12, 0.35)',
            color: '#c2410c',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.92rem',
            fontWeight: 800,
            boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)'
          }}>
            <AlertTriangle size={18} style={{ color: '#ea580c', flexShrink: 0 }} />
            <span>⚠️ Önemli: Mağazamıza gelmeden önce lütfen telefon veya WhatsApp üzerinden randevu alınız.</span>
          </div>
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
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 600 }}>
                    {storeAddress}
                  </p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--primary-bright)', fontWeight: 700, marginTop: '6px' }}>
                    (Tüybek Çarşısı No: 9 G - Selçuklu / Konya)
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #ea580c' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(234, 88, 12, 0.12)', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '4px' }}>
                    Çalışma Saatleri & Randevu
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '6px' }}>
                    {settings?.workingHours || 'Haftanın her günü: 09:00 - 20:00'}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.84rem',
                    color: '#c2410c',
                    fontWeight: 800,
                    background: 'rgba(234, 88, 12, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    marginTop: '4px'
                  }}>
                    <Calendar size={14} />
                    <span>Lütfen gelmeden önce randevu alınız.</span>
                  </div>
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

        {/* Harita ve Konum Başlığı */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)'
        }}>
          <div style={{
            padding: '16px 20px',
            background: 'var(--surface-2)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={20} color="var(--primary-bright)" />
              <div>
                <strong style={{ fontSize: '0.96rem', color: 'var(--heading)' }}>
                  Hüsamettin Çelebi Mah. Akabe Cad. Tüybek Çarşısı No: 9 G Selçuklu / Konya
                </strong>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#c2410c', fontWeight: 700 }}>
                  ⚠️ Lütfen mağazamıza gelmeden önce 0551 045 42 55 üzerinden randevu alınız.
                </span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=H%C3%BCsamettin+%C3%87elebi+Mah.+Akabe+Cad.+T%C3%BCybek+%C3%87ar%C5%9F%C4%B1s%C4%B1+No:+9+G+Sel%C3%A7uklu+Konya"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
              style={{ fontWeight: 700, fontSize: '0.82rem' }}
            >
              Google Haritalarda Aç ↗
            </a>
          </div>

          <div style={{ height: '380px', width: '100%' }}>
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Konya Bilgisayar Harita - Tüybek Çarşısı"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


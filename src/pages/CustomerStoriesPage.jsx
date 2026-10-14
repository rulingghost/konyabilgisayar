import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Banknote, 
  Laptop, 
  Monitor, 
  Phone, 
  RefreshCw, 
  Truck,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CustomerStoriesPage({ navigate, settings }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const phoneRaw = settings?.phoneRaw || '905510454255';
  const phoneFormatted = settings?.phone || '0551 045 42 55';
  const whatsappNum = settings?.whatsapp || '905510454255';

  const stories = [
    {
      id: 1,
      title: "Monster Abra A5 Laptopunu 15 Dakikada Değerinde Nakit Sattı",
      customer: "Uğur Y.",
      district: "Konya / Selçuklu (Bosna Hersek)",
      category: "laptop",
      device: "Monster Abra A5 v17.2 (i5 11400H / 16GB / RTX 3050Ti)",
      amount: "17.500 TL Nakit",
      date: "Ekim 2026",
      summary: "Öğrencilik sonrası yeni masaüstü sisteme geçmek isteyen Uğur Bey, sitemizden donanım özelliklerini girerek ön teklif aldı. Selçuklu mağazamıza getirdiği cihaz, teknisyenlerimiz tarafından 12 dakika içinde FurMark ve CrystalDiskInfo testlerinden geçirildi. Anlaşılan 17.500 TL tutar anında banka hesabına FAST ile aktarıldı.",
      quote: "İnternetten formu doldurdum, hemen WhatsApp'tan döndüler. Mağazaya gittiğimde hiç bekletmeden test edip IBAN'ıma paramı geçtiler. Çok dürüst ve şeffaf esnaflar.",
      badge: "Elden Nakit Teslim"
    },
    {
      id: 2,
      title: "Eski i5 Kasasını Mağazamızdaki RTX 4070 Sistemle Takas Etti",
      customer: "Mustafa K.",
      district: "Konya / Meram",
      category: "takas",
      device: "Eski i5 10400F Kasa Verildi ➔ RTX 4070 Ryzen 5 7500F Alındı",
      amount: "Takas Farkı: 26.000 TL",
      date: "Ekim 2026",
      summary: "Mevcut kasasını satıp yeni sistem toplamak için parça aramakla uğraşmak istemeyen Mustafa Bey, 'Cihaz Takası' modülümüz üzerinden başvurdu. Eski kasası piyasa değerinde 18.500 TL olarak sayıldı, mağazamızdaki sıfır ayarındaki RTX 4070 sistemi sadece aradaki farkı ödeyerek aynı gün teslim aldı.",
      quote: "Eski kasamı satmaya uğraşsaydım günlerce ilanlarla uğraşacaktım. Konya Bilgisayar değerinde saydı, üstüne farkı verip canavar gibi sistemimi aldım.",
      badge: "Cihaz Takası"
    },
    {
      id: 3,
      title: "Akşehir'den Ücretsiz Kargoyla MacBook Air M2 Satışı",
      customer: "Sibel Ö.",
      district: "Konya / Akşehir",
      category: "kargo",
      device: "MacBook Air 13.6 inç M2 (8GB / 256GB / Uzay Grisi)",
      amount: "26.500 TL Havale",
      date: "Eylül 2026",
      summary: "Akşehir'de ikamet eden Sibel Hanım, cihazın kozmetik fotoğraflarını ve pil sağlığı ekranını WhatsApp hattımıza gönderdi. 10 dakika içinde 26.500 TL net teklif verildi. Anlaşmalı Yurtiçi Kargo kodumuzla ücretsiz gönderilen cihaz, ertesi gün mağazamıza ulaştı. Apple Diagnostics testleri sonrası yarım saat içinde ödemesi hesabına aktarıldı.",
      quote: "İlçeden kargoyla göndermek konusunda başta tereddüt etmiştim ama çok profesyonel bir süreç yönettiler. Kargo ulaştığı gibi arayıp test sonucunu paylaştılar ve paramı gönderdiler.",
      badge: "Kargoyla Satış"
    },
    {
      id: 4,
      title: "Büsan Sanayi Bölgesinden 15 Adet Ofis Bilgisayarı Toplu Alımı",
      customer: "Özkan Lojistik A.Ş. (Yetkili: Burak T.)",
      district: "Konya / Karatay (Büsan OSB)",
      category: "kurumsal",
      device: "15 Adet Lenovo ThinkCentre Kasa + 15 Adet 24 inç Monitör",
      amount: "145.000 TL Şirket Hesabına EFT",
      date: "Eylül 2026",
      summary: "Şirket envanterini yenileyen lojistik firmasının adresine mobil ekspertiz ekibimizle gittik. Yerinde yapılan kontrollerin ardından fatura karşılığı 145.000 TL kurumsal EFT yapıldı. Tüm disklerdeki kurumsal veriler KVKK standartlarında güvenli şekilde sıfırlanarak veri imha belgesi teslim edildi.",
      quote: "Ofisimizdeki 15 bilgisayarı tek tek satmak imkansızdı. Konya Bilgisayar ekibi şirketimize geldi, inceledi ve aynı gün hesabımıza ödemeyi geçip araçlarıyla taşıdı.",
      badge: "Kurumsal Toplu Alım"
    },
    {
      id: 5,
      title: "PlayStation 5 Slim ve 2 Kolunu Değerinde Nakit Sattı",
      customer: "Emre D.",
      district: "Konya / Karatay",
      category: "konsol",
      device: "Sony PS5 Slim 1TB + 2 Orijinal DualSense",
      amount: "21.000 TL Nakit",
      date: "Ekim 2026",
      summary: "İhtiyaç fazlası konsolunu satmak isteyen Emre Bey, sitemizden PlayStation değerlemesi yaptı. Mağazamıza gelerek kolların stick drift ve HDMI çıkış testlerini birlikte yaptık. 10 dakika içinde nakit olarak ödemesini aldı.",
      quote: "Sarı sitede ölü teklifler ve takas mesajlarından bıkmıştım. Konya Bilgisayar telefonda ne fiyat verdiyse mağazada kuruşu kuruşuna onu ödedi.",
      badge: "Elden Nakit Teslim"
    }
  ];

  const filtered = filterCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === filterCategory);

  return (
    <div style={{ padding: '50px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
            <HeartHandshake size={14} /> Şeffaf Ticaret Deneyimleri
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Müşteri Hikayeleri & Gerçek Alım Örnekleri
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
            Konya genelinde ve Türkiye'nin dört bir yanından cihazlarını değerinde satan veya takas eden müşterilerimizin gerçek alışveriş süreçleri.
          </p>
        </div>

        {/* Filtre Butonları */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'all', label: 'Tüm Hikayeler' },
            { id: 'laptop', label: 'Laptop Alımları' },
            { id: 'takas', label: 'Takas Süreçleri' },
            { id: 'kargo', label: 'Kargoyla Satış' },
            { id: 'kurumsal', label: 'Kurumsal & Toplu' },
            { id: 'konsol', label: 'PlayStation & Konsol' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id)}
              style={{
                padding: '9px 18px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: '1.5px solid',
                borderColor: filterCategory === tab.id ? 'var(--primary-bright)' : 'var(--border)',
                background: filterCategory === tab.id ? 'var(--primary-bright)' : '#ffffff',
                color: filterCategory === tab.id ? '#ffffff' : 'var(--heading)',
                cursor: 'pointer',
                transition: 'all var(--tr-fast)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Hikaye Kartları */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {filtered.map(story => (
            <div 
              key={story.id}
              className="card"
              style={{
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '28px',
                alignItems: 'start'
              }}
            >
              {/* Sol: Süreç Özeti */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span className="badge badge-green">
                    {story.badge}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} /> {story.district}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '12px', lineHeight: 1.35 }}>
                  {story.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
                  {story.summary}
                </p>

                <div style={{
                  background: 'var(--surface-2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  border: '1px solid var(--border)',
                  fontSize: '0.88rem'
                }}>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <strong>İşlem Detayı:</strong> {story.device}
                  </div>
                  <div style={{ color: 'var(--primary-bright)', fontWeight: 900, fontSize: '1.05rem' }}>
                    {story.amount}
                  </div>
                </div>
              </div>

              {/* Sağ: Müşteri Yorumu & Değerlendirme */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.03), rgba(0, 89, 191, 0.05))',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--border)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '12px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={17} fill="#fbbf24" />)}
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--heading)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '16px' }}>
                    "{story.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--heading)' }}>
                    {story.customer}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {story.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0a2540, #0059bf)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 900, marginBottom: '12px' }}>
            Siz de Cihazınızı Değerinde Nakit Satın
          </h2>
          <p style={{ opacity: 0.9, maxWidth: '620px', margin: '0 auto 28px', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Formu doldurun veya WhatsApp hattımıza fotoğraf gönderin. 15 dakikada anında nakit veya FAST ödemeyle güvenli alışveriş yapın.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('degerleme')}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem', background: '#ffffff', color: 'var(--heading)' }}
            >
              Cihazımın Değerini Hesapla →
            </button>
            <a 
              href={`https://wa.me/${whatsappNum}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1%20de%C4%9Ferinde%20satmak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
              style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem' }}
            >
              <WhatsAppIcon size={20} /> WhatsApp'tan Teklif Al (0551 045 42 55)
            </a>
            <a 
              href={`tel:${phoneRaw}`}
              className="btn btn-primary"
              style={{ padding: '14px 24px', fontWeight: 800, fontSize: '1rem', background: '#16a34a', textDecoration: 'none' }}
            >
              <Phone size={18} /> Ara: {phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

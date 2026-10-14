import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock, Cookie, FileText } from 'lucide-react';

export default function PoliciesPage({ initialTab = 'kargo', settings }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div style={{ padding: '50px 0 90px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
            <FileText size={14} /> Şeffaf Sözleşmeler & Yasal Bilgilendirme
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            Politikalarımız ve Yasal Şartlar
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '640px', margin: '0 auto' }}>
            Konya Bilgisayar olarak müşteri haklarına, veri güvenliğine ve yasal tüketici mevzuatlarına tam uyumla hizmet veriyoruz.
          </p>
        </div>

        {/* Tab Seçici */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'kargo', label: 'Kargo & Teslimat', icon: <Truck size={17} /> },
            { id: 'iade', label: 'İade & Değişim', icon: <RotateCcw size={17} /> },
            { id: 'kvkk', label: 'Gizlilik & KVKK', icon: <Lock size={17} /> },
            { id: 'cerez', label: 'Çerez Politikası', icon: <Cookie size={17} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1.5px solid',
                borderColor: activeTab === tab.id ? 'var(--primary-bright)' : 'var(--border)',
                background: activeTab === tab.id ? 'var(--primary-bright)' : '#ffffff',
                color: activeTab === tab.id ? '#ffffff' : 'var(--heading)',
                cursor: 'pointer',
                transition: 'all var(--tr-fast)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-sm)' : 'none'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* İçerik Kartı */}
        <div className="card" style={{ padding: '36px', lineHeight: 1.75, fontSize: '0.95rem', color: 'var(--text)' }}>
          {activeTab === 'kargo' && (
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '16px' }}>
                Kargo ve Teslimat Şartları
              </h2>
              <p>
                <strong>1. Şehir İçi Elden Teslim:</strong> Konya Selçuklu mağazamızdan satın aldığınız ürünleri aynı gün görerek, test ederek elden teslim alabilirsiniz.
              </p>
              <p>
                <strong>2. Şehir Dışı Satın Alma Kargoları:</strong> Kataloğumuzdan seçtiğiniz ürünler, ödeme onayının ardından aynı iş günü saat 16:30'a kadar anlaşmalı <strong>Yurtiçi Kargo</strong> ile sigortalı ve darbe emici özel hava kanallı ambalajla kargoya verilir.
              </p>
              <p>
                <strong>3. Kargoyla Cihaz Satış Süreci:</strong> Konya dışından bize cihaz satmak isteyen müşterilerimiz, WhatsApp ön teklif onayının ardından tarafımıza iletilen ücretsiz kargo anlaşma kodumuzla cihazlarını bize gönderebilir. Kargo tarafımıza ulaştığı iş günü içinde teknik ekspertizi yapılarak ödeme IBAN hesabına aktarılır.
              </p>
            </div>
          )}

          {activeTab === 'iade' && (
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '16px' }}>
                İade ve Değişim Politikası
              </h2>
              <p>
                <strong>1. Test & Garanti Kapsamı:</strong> Mağazamızdan satılan tüm ikinci el bilgisayar ve parçalar, 20 aşamalı donanım stres testlerinden geçirilir ve minimum <strong>3 ay ile 12 ay arası Konya Bilgisayar Mağaza Garantisi</strong> altındadır.
              </p>
              <p>
                <strong>2. İlk 14 Gün Değişim Desteği:</strong> Satın aldığınız cihazda belirtilen teknik özelliklerin dışında donanımsal bir arıza tespit edilmesi durumunda, 14 gün içerisinde birebir eşdeğer ürünle değişim veya iade hakkınız mevcuttur.
              </p>
              <p>
                <strong>3. Garanti Harici Durumlar:</strong> Sıvı teması, yüksek voltaj kaynaklı yanıklar, yetkisiz fiziksel müdahaleler ve düşme/kırılma kaynaklı kullanıcı hasarları garanti kapsamı dışındadır.
              </p>
            </div>
          )}

          {activeTab === 'kvkk' && (
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '16px' }}>
                Kişisel Verilerin Korunması (KVKK) ve Gizlilik
              </h2>
              <p>
                <strong>1. Veri Sorumlusu:</strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, Konya Bilgisayar ("Veri Sorumlusu") olarak kişisel verilerinizi yasal mevzuata uygun şekilde işlemekteyiz.
              </p>
              <p>
                <strong>2. Disk Veri İmhası Taahhüdü:</strong> Bize sattığınız veya takasa verdiğiniz tüm bilgisayar, telefon ve disklerdeki kişisel verileriniz; DoD 5220.22-M ve NVMe Secure Erase standartlarına uygun olarak geri döndürülemez biçimde tamamen sıfırlanır. Verileriniz hiçbir üçüncü şahısla paylaşılmaz.
              </p>
              <p>
                <strong>3. İletişim Bilgileri:</strong> Değerleme formu veya WhatsApp üzerinden ilettiğiniz telefon ve ad-soyad bilgileriniz yalnızca alım-satım ve servis süreçlerinin yürütülmesi amacıyla kullanılır.
              </p>
            </div>
          )}

          {activeTab === 'cerez' && (
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '16px' }}>
                Çerez (Cookie) Politikası
              </h2>
              <p>
                Web sitemizde kullanıcı deneyiminizi geliştirmek, ziyaretçi tercihlerini hatırlamak (örneğin "Listem" ürünleriniz ve karşılaştırma listeleriniz) ve site performansını ölçmek amacıyla çerezler kullanılmaktadır.
              </p>
              <p>
                <strong>Zorunlu Çerezler:</strong> Sitenin temel fonksiyonlarının ve sepet/liste mekanizmasının çalışabilmesi için gereklidir.
              </p>
              <p>
                <strong>Analitik Çerezler:</strong> Sitemizi ziyaret eden kullanıcıların hangi sayfalarda daha çok vakit geçirdiğini anonim olarak ölçümlememize yarar.
              </p>
              <p>
                İstediğiniz zaman tarayıcı ayarlarınızdan çerezleri temizleyebilir veya engelleyebilirsiniz.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

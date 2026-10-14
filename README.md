# Konya Bilgisayar - Full-Stack Web Platformu & Yönetim Paneli

Bu proje, **Kalender Bilgisayar** platformunun tüm işlevleri, çok aşamalı cihaz değerleme motoru, ürün kataloğu, sepeti, karşılaştırma modülü ve teknik servis altyapısı eksiksiz incelenerek; **Node.js, Express ve React (Vite)** mimarisiyle **Konya Bilgisayar** olarak sıfırdan geliştirilmiştir.

---

## 🚀 Hızlı Başlangıç

Proje dizininde terminalden şu komutu çalıştırmanız yeterlidir:

```bash
npm run dev
```

Bu komut hem **Node.js API Sunucusunu (Port 5001)** hem de **React Arayüzünü (Port 3000)** aynı anda eşzamanlı olarak başlatır.

- 🌐 **Kullanıcı Web Sitesi:** [http://localhost:3000/](http://localhost:3000/)
- ⚙️ **Yönetim Paneli (Admin):** [http://localhost:3000/#/admin](http://localhost:3000/#/admin)
  - **Varsayılan Giriş Şifresi:** `konya123`
- 📡 **Backend REST API:** [http://localhost:5001/api/products](http://localhost:5001/api/products)

---

## 🌟 Dahil Edilen Tüm Modüller ve Özellikler

### 1. Dinamik Yönetim Paneli (`#/admin`)
- **İstatistik Göstergeleri:** Toplam ürün, satıştaki ürünler, satılanlar, bekleyen değerleme talepleri ve servis kayıtları.
- **Ürün Yönetimi (CRUD):** 
  - Tek tıkla yeni ürün ekleme (Görsel URL, Başlık, Kategori, Fiyat, Donanım: İşlemci, RAM, Ekran Kartı, Depolama, Ekran, Kozmetik, Garanti).
  - Ürün düzenleme ve silme.
  - Hızlı stok durumu değiştirme: `✓ Satılık (Stokta)` ↔ `✕ Satıldı` tek tıkla canlı olarak değişir.
- **Gelen Değerleme Talepleri:** Müşterilerin sitedeki formdan gönderdiği cihazlar, iletişim numaraları ve sistemin biçtiği tahmini fiyatlar. Tek tıkla WhatsApp veya arama imkanı.
- **Teknik Servis Talepleri:** Gelen arıza ve bakım kayıtlarının takibi, durum güncellemesi (Beklemede, İşlemde, Tamamlandı).
- **Site & Mağaza Ayarları:** Mağaza telefon, WhatsApp numarası, Konya mağaza adresi, çalışma saatleri ve üst duyuru çubuğu metnini panelden anında düzenleme (tüm siteye hemen yansır).

### 2. Çok Kademeli Cihaz Değerleme Motoru (`#/degerleme`)
- **8 Cihaz Kategorisi:** Laptop, Masaüstü PC, MacBook, Apple Masaüstü, iPhone, iPad, Android Tablet, PlayStation & Oyun Konsolu.
- **Dinamik Donanım Seçimi:** İşlemci nesli, RAM miktarı, Ekran kartı modeli, SSD/HDD kapasitesi.
- **Kozmetik & Aksesuar Puanlama:** Çizik durumu (10/10), kutu, fatura, orijinal adaptör ve pil sağlığı.
- **Canlı Değerleme:** Piyasa verilerine göre anlık fiyat aralığı hesaplar (Örn: `24.500 TL - 27.000 TL`).
- **Çift Kanallı İletim:**
  - Tek tıkla seçilen tüm donanımları otomatik WhatsApp mesajına dönüştürür.
  - Veya doğrudan Yönetim Paneline kayıt olarak düşer.

### 3. Satılık Ürünler Kataloğu (`#/urunler`)
- Canlı metin araması (başlık, marka, işlemci veya ekran kartına göre anında süzer).
- Kategori sekmeleri (Tümü, Laptop, Masaüstü, MacBook, Konsol, Monitör, Tablet).
- Fiyata göre sıralama (Artan, Azalan, En Yeniler).
- Sadece stoktaki ürünleri filtreleme seçeneği.

### 4. Ürün Detay Sayfası (`#/urun/:id`)
- Çok açılı fotoğraf galerisi.
- Detaylı teknik özellikler tablosu ve ekspertiz kontrol raporu.
- Mağaza garantisi ve durum rozetleri.
- "WhatsApp ile Satın Al / Bilgi Al" butonu.
- "Bu Ürünle Takas Et" butonu.
- Benzer ve alternatif ürünler önerisi.

### 5. "Listem" (Sepet / Wishlist) & Karşılaştırma Modalı
- Kullanıcı beğendiği ürünleri kaydeder, sayaç başlıkta görünür.
- Açılır çekmeceden toplu tutar hesaplanır ve tek tıkla WhatsApp'tan toplu teklif istenir.
- 3 ürüne kadar yan yana donanım ve fiyat karşılaştırma tablosu.

### 6. Teknik Servis & Bakım (`#/hizmetler`)
- Laptop termal macun & fan temizliği, SSD/RAM yükseltme, format, özel sistem toplama, ekran onarımı.
- İnteraktif arıza kayıt ve servis talep formu.

### 7. Bilgisayar Takası (`#/takas`)
- Almak istediğin ürün ile elindeki cihazı eşleştirip takas farkını hesaplayan sistem.

### 8. Kargoyla Satış (`#/kargo`)
- Konya ilçeleri ve Türkiye'nin 81 ilinden ücretsiz kargo ile cihaz alım süreci rehberi.

### 9. İletişim & Harita (`#/iletisim`)
- Selçuklu / Zafer konumu, telefon, WhatsApp ve interaktif Google Harita embedi.

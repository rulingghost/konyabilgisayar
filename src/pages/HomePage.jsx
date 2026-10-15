import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Gamepad2, 
  Cpu, 
  RefreshCw, 
  Truck, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Banknote, 
  HelpCircle, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CreditCard,
  X,
  Bookmark, 
  Scale, 
  BookOpen, 
  Calendar, 
  Wrench, 
  Phone, 
  Sparkles, 
  MapPin, 
  Search, 
  FileText,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { 
  CPU_VALUES, 
  GPU_VALUES, 
  RAM_VALUES, 
  STORAGE_VALUES, 
  CPU_OPTIONS_GROUPED, 
  GPU_OPTIONS_GROUPED, 
  RAM_OPTIONS, 
  STORAGE_OPTIONS, 
  BRAND_OPTIONS, 
  APPLE_CHIP_OPTIONS, 
  IPHONE_OPTIONS, 
  CONSOLE_OPTIONS, 
  POPULAR_SERIES_BY_BRAND,
  getHardwareLabel 
} from '../data/hardwareOptions';

export default function HomePage({ 
  navigate, 
  products = [], 
  blogs = [], 
  addToWishlist, 
  addToCompare, 
  isInWishlist, 
  settings 
}) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Hero Hızlı Değerleme Simülatörü State
  const [simCategory, setSimCategory] = useState('laptop');
  const [simBrand, setSimBrand] = useState('Asus');
  const [simSeries, setSimSeries] = useState('ROG Strix G16 (2023-2024 - 13./14. Nesil Intel)');
  const [simCpu, setSimCpu] = useState('i7-13');
  const [simGpu, setSimGpu] = useState('rtx4060');
  const [simRam, setSimRam] = useState('16');
  const [simStorage, setSimStorage] = useState('512ssd');
  const [simAppleChip, setSimAppleChip] = useState('m2');
  const [simPhoneModel, setSimPhoneModel] = useState('iphone15');
  const [simConsoleModel, setSimConsoleModel] = useState('ps5-slim-disk');
  const [simTabletModel, setSimTabletModel] = useState('ipad-10');

  // Modern Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  const heroSlides = [
    {
      id: 'nakit-alim',
      badge: '⚡ 15 Dakikada Hızlı Test & Anında Nakit / FAST',
      title: 'İkinci El Bilgisayar, Laptop ve Cihazınızı Değerinde Satın!',
      titleHighlight: 'Değerinde Nakit Alıyoruz',
      desc: 'Gaming laptop, masaüstü oyuncu kasası, Apple MacBook ve donanım parçalarınızı Selçuklu mağazamızda 15 dakikada test edip anında nakit veya FAST ile ödüyor; Türkiye genelinden anlaşmalı kargo ile teslim alıyoruz.',
      bullets: [
        '15 Dakikada Hızlı Test & Ekspertiz',
        'Anında Nakit / FAST ile Ödeme',
        'Selçuklu Mağazamıza Elden Teslim',
        'Türkiye Geneli Ücretsiz Kargo'
      ],
      primaryBtn: {
        text: 'Cihazını Sat & WhatsApp Fiyat Teklifi Al ↓',
        scrollTo: 'canli-degerleme',
        icon: 'zap'
      },
      secondaryBtn: {
        text: 'Satılık Ürünleri İncele',
        route: 'urunler'
      },
      hasPhone: true,
      image: '/images/hero_tech.jpg',
      badgeTop: '🏆 Konya’nın Güvenilir 2. El Merkezi',
      statVal: '15 Dk',
      statLabel: 'Hızlı Test & Peşin Nakit',
      statSub: '10.000+ Başarılı Alım'
    },
    {
      id: 'cihaz-takasi',
      badge: '🔄 Değerinde Takas & Kolay Değişim',
      title: 'Eski Bilgisayarını Getir, Yeni Nesil Oyuncu Sistemine Geç!',
      titleHighlight: 'Adil Takas Avantajı',
      desc: 'Eski masaüstü kasanızı, laptopunuzu veya konsolunuzu piyasa değerinde sayıyoruz. Mağazamızdaki RTX 4060/4070 hazır sistemler veya MacBook modelleriyle kolayca takas edin, sadece aradaki farkı ödeyin.',
      bullets: [
        'Eski Donanımınız Değerinde Sayılır',
        'Mağazamızdaki Tüm Ürünlerle Takas',
        'Farkı İster Nakit Al, İster Öde',
        'Verileriniz Yeni Cihaza Ücretsiz Aktarılır'
      ],
      primaryBtn: {
        text: 'Takas Seçeneklerini Gör →',
        route: 'takas',
        icon: 'refresh'
      },
      secondaryBtn: {
        text: 'WhatsApp Takas Danışmanı',
        wa: 'Merhaba Konya Bilgisayar, elimdeki eski cihazımı takasa verip yeni bir ürün almak istiyorum. Takas şartları hakkında bilgi alabilir miyim?'
      },
      hasPhone: false,
      image: '/images/trade_in.jpg',
      badgeTop: '✨ RTX 4060 / 4070 Sistem Takası',
      statVal: 'Anında',
      statLabel: 'Değerinde Takas & Mahsup',
      statSub: 'Aynı Gün Yeni Sisteme Geçiş'
    },
    {
      id: 'garantili-urunler',
      badge: '🛡️ Konya Bilgisayar Mağaza Garantisi',
      title: '20+ Aşamalı Stres Testinden Geçmiş Güvenilir Cihazlar',
      titleHighlight: 'Mağaza Garantisiyle',
      desc: 'Tüm ikinci el cihazlarımız FurMark, MemTest ve CrystalDiskInfo testlerinden tam not almıştır. Termal bakımı ve kozmetik temizliği yapılmış, sıfır ayarında garantili gaming kasalar ve dizüstü bilgisayarlar.',
      bullets: [
        'Konya Bilgisayar Mağaza Garantili',
        '20+ Aşamalı Sıcaklık & Donanım Testi',
        'Faturalı & Belgeli Teslimat',
        'Konya İçi Hemen Teslim / Aynı Gün Kargo'
      ],
      primaryBtn: {
        text: 'Garantili Ürünleri Keşfet →',
        route: 'urunler',
        icon: 'shield'
      },
      secondaryBtn: {
        text: 'WhatsApp ile Ürün Sor',
        wa: 'Merhaba Konya Bilgisayar, satılık ikinci el bilgisayar ve laptop stoklarınız hakkında bilgi alabilir miyim?'
      },
      hasPhone: false,
      image: '/images/categories/cat_desktop.png',
      badgeTop: '⭐ FurMark & MemTest Onaylı',
      statVal: '20+ Test',
      statLabel: 'Eksiksiz Donanım Kontrolü',
      statSub: 'Güvenli & Garantili Alışveriş'
    },
    {
      id: 'kurumsal-alim',
      badge: '🏢 Kurumsal Çözümler & Toplu Alım',
      title: 'Şirketinizin Bilişim Envanterini Değerinde Nakite Çevirin',
      titleHighlight: 'Tek Kalemde Toplu Alım',
      desc: 'Ofis bilgisayarları, çağrı merkezi sistemleri, mimarlık iş istasyonları ve şirket laptop filolarını yerinde ekspertiz ile değerinde ve tek seferde nakit satın alıyoruz.',
      bullets: [
        'Konya ve Çevre İllerde Yerinde Ekspertiz',
        'Resmi Sözleşme & Kurumsal Fatura',
        'Toplu Nakit & Şirket Hesabına FAST/Havale',
        'US DoD 5220.22-M Standardında Güvenli Veri İmhası'
      ],
      primaryBtn: {
        text: 'Kurumsal Departman →',
        route: 'kurumsal',
        icon: 'sparkles'
      },
      secondaryBtn: {
        text: '0551 045 42 55 (Kurumsal)',
        tel: '05510454255'
      },
      hasPhone: true,
      image: '/images/corporate_buyback.jpg',
      badgeTop: '💼 Kurumsal & Toplu Alım Hizmeti',
      statVal: '5-500 Adet',
      statLabel: 'Yerinde Ekspertiz & Nakit',
      statSub: 'Resmi Fatura & Hızlı Ödeme'
    }
  ];

  // Otomatik Slider Geçişi (6.5 saniye)
  useEffect(() => {
    if (isSliderPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isSliderPaused, heroSlides.length]);

  const nextHeroSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [copiedMessage, setCopiedMessage] = useState(false);

  // Kategori Başlığı Yardımcısı
  const getSimCategoryTitle = () => {
    switch (simCategory) {
      case 'laptop': return 'Laptop & Dizüstü Bilgisayar';
      case 'masaustu': return 'Masaüstü Bilgisayar (Oyuncu Kasası)';
      case 'macbook': return 'Apple MacBook';
      case 'iphone': return 'Apple iPhone / Akıllı Telefon';
      case 'tablet': return 'iPad & Tablet';
      case 'konsol': return 'PlayStation & Oyun Konsolu';
      default: return 'Cihaz';
    }
  };

  const getSimDetailSummary = () => {
    if (simCategory === 'laptop' || simCategory === 'masaustu') {
      const brandPart = simBrand ? `${simBrand} ${simSeries ? `(${simSeries})` : ''} • ` : '';
      return `${brandPart}${getHardwareLabel('cpu', simCpu)} • ${getHardwareLabel('gpu', simGpu)} • ${getHardwareLabel('ram', simRam)} RAM • ${getHardwareLabel('storage', simStorage)}`;
    }
    if (simCategory === 'macbook') return `Apple MacBook ${simSeries ? `(${simSeries})` : ''} • ${getHardwareLabel('appleChip', simAppleChip)} • Retina Ekran`;
    if (simCategory === 'iphone') return `${simPhoneModel.replace('iphone', 'iPhone ').toUpperCase()}`;
    if (simCategory === 'tablet') return `${simTabletModel.toUpperCase()} Tablet`;
    if (simCategory === 'konsol') return `${simConsoleModel.toUpperCase()} Konsol`;
    return 'Standart Donanım';
  };

  // WhatsApp'a Doğrudan Düşecek Hazır Mesaj Oluşturucu
  const getFullSimWaMessage = () => {
    let msg = `Merhaba Konya Bilgisayar (0551 045 42 55),\n`;
    msg += `Web siteniz üzerinden cihazımın özelliklerini seçtim. Bu özellikler için nakit alım veya takas fiyat teklifi almak istiyorum:\n\n`;
    msg += `📌 Cihaz Türü: ${getSimCategoryTitle()}\n`;

    if (simCategory === 'laptop' || simCategory === 'masaustu') {
      msg += `• Marka: ${simBrand}\n`;
      msg += `• Model / Seri: ${simSeries || 'Standart Seri'}\n`;
      msg += `• İşlemci (CPU): ${getHardwareLabel('cpu', simCpu)}\n`;
      msg += `• Ekran Kartı (GPU): ${getHardwareLabel('gpu', simGpu)}\n`;
      msg += `• RAM Bellek: ${getHardwareLabel('ram', simRam)} RAM\n`;
      msg += `• Depolama (SSD/HDD): ${getHardwareLabel('storage', simStorage)}\n`;
    } else if (simCategory === 'macbook') {
      msg += `• Model & Kasa: ${simSeries || 'Apple MacBook'}\n`;
      msg += `• Apple Çipi: ${getHardwareLabel('appleChip', simAppleChip)}\n`;
      msg += `• Ekran: Orijinal Retina Ekran\n`;
    } else if (simCategory === 'iphone') {
      msg += `• Model: ${simPhoneModel.replace('iphone', 'iPhone ').toUpperCase()}\n`;
    } else if (simCategory === 'tablet') {
      msg += `• Model: ${simTabletModel.toUpperCase()}\n`;
    } else if (simCategory === 'konsol') {
      msg += `• Konsol Modeli: ${simConsoleModel.toUpperCase()}\n`;
    }

    msg += `\n📍 Teslimat / Konum: Konya Selçuklu mağazanıza elden teslim edebilirim (veya Türkiye geneli ücretsiz kargoyla gönderim).\n`;
    msg += `📸 İsterseniz cihazımın fotoğraflarını da gönderebilirim.\n`;
    msg += `Bu özelliklerdeki cihazım için verebileceğiniz en güncel peşin nakit alım veya takas fiyat teklifiniz nedir?`;
    return msg;
  };

  const simWaMessage = getFullSimWaMessage();
  const simWaLink = `https://wa.me/905510454255?text=${encodeURIComponent(simWaMessage)}`;

  // SSS Arama, Kategori Filtre & Kompakt Görünüm Durumları
  const [faqCategory, setFaqCategory] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const reviews = [
    {
      name: "Uğur Y. (Selçuklu)",
      rating: 5,
      comment: "Benim sürecim internet sitesi üzerinden başladı. WhatsApp'tan Asus laptop bilgilerini gönderdim, 10 dakika içinde ön teklif verildi. Selçuklu'daki mağazalarına götürdüm, test ettikten sonra anında IBAN'ıma nakit aktardılar. Çok kibar ve güvenilir bir esnaf."
    },
    {
      name: "Mustafa K. (Meram)",
      rating: 5,
      comment: "Eski i5 kasamı verip RTX 4060 sistemle takas ettim. Aradaki farkı çok makul tuttular. Tüm parçaları gözümün önünde tek tek stres testine soktular. Konya'da bilgisayar alıp satacaksanız ilk adresiniz olsun."
    },
    {
      name: "Büşra T. (Karatay)",
      rating: 5,
      comment: "MacBook Air cihazımı satmak için birkaç yere sormuştum, en iyi ve değerinde fiyatı Konya Bilgisayar verdi. Verilerimi güvenle sıfırlayıp teslim aldılar. Kesinlikle tavsiye ederim."
    }
  ];

  const faqCategories = [
    { id: 'all', label: 'Tüm Sorular', icon: HelpCircle },
    { id: 'degerleme', label: 'Cihaz Alımı & Fiyat', icon: Zap },
    { id: 'odeme', label: 'Ödeme & Test', icon: Banknote },
    { id: 'takas', label: 'Takas & Değişim', icon: RefreshCw },
    { id: 'kargo', label: 'Kargo & İl Dışı', icon: Truck },
    { id: 'guvenlik', label: 'Güvenlik & Garanti', icon: ShieldCheck }
  ];

  const faqs = [
    {
      id: 1,
      category: 'degerleme',
      categoryName: 'Cihaz Alımı & Fiyat',
      color: 'blue',
      q: "Cihazımı satmak için en doğru fiyat teklifini nasıl alabilirim?",
      a: "Anasayfamızdaki 'Cihaz Özelliklerini Seçin' bölümünden işlemci, ekran kartı ve RAM gibi bilgileri seçtiğinizde size özel bir WhatsApp mesajı otomatik hazırlanır. 'WhatsApp'a Gönder' butonuna tıkladığınızda uzman danışmanımıza tek tıkla ulaşabilir veya doğrudan 0551 045 42 55 numaramıza cihazınızın fotoğraflarını ve özelliklerini iletebilirsiniz. Ekibimiz 5-10 dakika içinde en yüksek güncel piyasa nakit teklifini sunar.",
      highlight: "WhatsApp üzerinden 5-10 dakikada şeffaf ön fiyat teklifi alabilirsiniz."
    },
    {
      id: 2,
      category: 'degerleme',
      categoryName: 'Cihaz Alımı & Fiyat',
      color: 'blue',
      q: "Hangi cihaz türlerini ve donanım parçalarını değerinde alıyorsunuz?",
      a: "Gaming oyuncu kasaları, iş istasyonları, oyuncu laptopları (RTX 40/30 serileri vb.), ofis dizüstü bilgisayarları, Apple MacBook (M1, M2, M3, M4 ve Intel), iMac, Mac Mini, iPhone ve akıllı telefonlar, iPad & tabletler, PlayStation 5/4 Pro & Xbox konsolları, 144Hz-360Hz oyuncu monitörleri ve harici ekran kartı / işlemci gibi tekil donanım bileşenlerini güncel piyasa değerinde satın alıyoruz.",
      highlight: "Tekil donanım parçalarından komple sistemlere kadar geniş alım kapsamı."
    },
    {
      id: 3,
      category: 'degerleme',
      categoryName: 'Cihaz Alımı & Fiyat',
      color: 'blue',
      q: "Kutusu, faturası veya garantisi bitmiş cihazları da satın alıyor musunuz?",
      a: "Evet! Cihazınızın kutusu veya faturasının olması zorunlu değildir. Donanım ve kozmetik testlerini başarıyla geçen tüm cihazları değerinde nakit alıyoruz. Ancak kutusu, faturası ve devam eden distribütör garantisi bulunan ürünler ekstra fiyat avantajı sağlamaktadır.",
      highlight: "Kutu ve fatura olmasa dahi cihazınızın gerçek donanım değerini ödüyoruz."
    },
    {
      id: 4,
      category: 'degerleme',
      categoryName: 'Cihaz Alımı & Fiyat',
      color: 'blue',
      q: "Kısmi arızalı, bataryası bitik veya kasasında çizik olan cihazları alıyor musunuz?",
      a: "Evet. Batarya ömrü azalmış, klavyesinde tek tük tuş çalışmayan veya kasasında hafif kozmetik kusurları olan cihazları da değerlendiriyoruz. Ayrıca yedek parça olarak değerlendirilebilecek donanımları da parça değeri üzerinden satın alabiliyoruz. WhatsApp'tan cihaz durumunu açıkça belirtmeniz yeterlidir.",
      highlight: "Kusurlu veya parça amaçlı donanımlarınız için de anında nakit teklif verilir."
    },
    {
      id: 5,
      category: 'odeme',
      categoryName: 'Ödeme & Test Süreci',
      color: 'green',
      q: "Konya Selçuklu mağazanızda test ve ödeme süreci ne kadar sürer?",
      a: "Mağazamızda ortalama test ve ekspertiz süremiz sadece 15 dakikadır. Cihazınızı getirdiğinizde gözünüzün önünde FurMark (ekran kartı ısı & stres), MemTest / Prime95 (RAM & işlemci stabilitesi) ve CrystalDiskInfo (SSD/HDD sağlık & ömür) testleri şeffafça yapılır. Test bitiminde belirlenen tutar derhal ödenir.",
      highlight: "Gözünüzün önünde 15 dakikalık şeffaf donanım testi ve anında sonuç."
    },
    {
      id: 6,
      category: 'odeme',
      categoryName: 'Ödeme & Test Süreci',
      color: 'green',
      q: "Ödememi nakit elden mi yoksa banka hesabıma FAST ile mi alıyorum?",
      a: "Ödeme şekli tamamen sizin tercihinize bağlıdır! İster mağazamızda elden nakit peşin para olarak, ister IBAN numaranıza 7/24 saniyeler içinde FAST / Havale ile alabilirsiniz. Para hesabınıza geçmeden hiçbir teslim veya alım evrakı tamamlanmaz.",
      highlight: "Elden peşin nakit veya FAST ile anında hesaba transfer seçeneği."
    },
    {
      id: 7,
      category: 'odeme',
      categoryName: 'Ödeme & Test Süreci',
      color: 'green',
      q: "Mağazaya gelmeden önce randevu almam gerekir mi?",
      a: "Hayır, randevu almanıza gerek yoktur. Feritpaşa Mahallesi Ahmet Hilmi Nalçacı Caddesi'ndeki Selçuklu mağazamıza haftanın 7 günü 09:00 - 20:00 çalışma saatleri içinde dilediğiniz an çat kapı gelebilirsiniz.",
      highlight: "Haftanın 7 günü 09:00 - 20:00 arası randevusuz elden teslim imkanı."
    },
    {
      id: 8,
      category: 'takas',
      categoryName: 'Takas & Değişim',
      color: 'amber',
      q: "Eski bilgisayarımı verip yeni nesil Gaming PC veya MacBook ile takas edebilir miyim?",
      a: "Evet! Konya Bilgisayar 'Değerinde Takas' sistemi tam olarak bunun içindir. Eski kasanızı, laptopunuzu veya PlayStation konsolunuzu değerinde sayıyoruz; mağazamızdaki garantili RTX 4060/4070 hazır sistemler, gaming laptoplar veya Apple Silicon MacBook modelleriyle kolayca takas edebiliyorsunuz.",
      highlight: "Eski cihazınızı peşinat sayıp son teknoloji sistemlere kolayca geçiş yapın."
    },
    {
      id: 9,
      category: 'takas',
      categoryName: 'Takas & Değişim',
      color: 'amber',
      q: "Takasta fiyat farkı nasıl hesaplanır? Üstüne para alabilir miyim?",
      a: "Cihazınızın değeri almak istediğiniz üründen daha yüksekse, aradaki farkı anında size nakit veya FAST ile ödüyoruz! Eğer almak istediğiniz ürün daha yüksekse sadece kalan farkı nakit, havale veya kredi kartıyla ödeyebilirsiniz.",
      highlight: "Farkı ister nakit alın, ister ödeyin; esnek ve adil mahsuplaşma."
    },
    {
      id: 10,
      category: 'takas',
      categoryName: 'Takas & Değişim',
      color: 'amber',
      q: "Takas yaptığımda eski cihazımdaki kişisel verilerim yeni cihaza aktarılır mı?",
      a: "Evet! Takas sürecinde uzman teknik personelimiz eski bilgisayarınızdaki fotoğraf, belge, oyun ve özel dosyalarınızı yeni cihazınıza eksiksiz ve ücretsiz olarak aktarır. Ardından eski cihazınız kalıcı olarak sıfırlanır.",
      highlight: "Ücretsiz veri aktarımı ve yeni sisteme sıfır kayıpla geçiş desteği."
    },
    {
      id: 11,
      category: 'kargo',
      categoryName: 'Kargo & İl Dışı',
      color: 'purple',
      q: "Konya dışından veya uzak ilçelerden kargoyla cihaz satışı nasıl yapılır?",
      a: "Türkiye'nin 81 ilinden ve Konya'nın tüm çevre ilçelerinden anlaşmalı Yurtiçi Kargo kodumuzla cihazınızı güvenle gönderebilirsiniz. WhatsApp üzerinden model ve fotoğrafları iletip ön teklifimizi onayladıktan sonra size özel ücretsiz kargo kodunuz iletilir.",
      highlight: "Türkiye'nin her yerinden anlaşmalı Yurtiçi Kargo ile 1-2 iş gününde teslim."
    },
    {
      id: 12,
      category: 'kargo',
      categoryName: 'Kargo & İl Dışı',
      color: 'purple',
      q: "Kargo ücretini kim karşılıyor? Kargo sürecinde ürün güvenliği nasıl sağlanır?",
      a: "Anlaşmalı kargo gönderimlerimizde kargo ücreti tamamen bize aittir, sizden 1 TL dahi ücret talep edilmez. Kargonuz mağazamıza ulaştığı an kutu açılışı güvenlik kamerası altında kayda alınır. 15 dakikalık donanım testi sonrası ödemeniz anında banka hesabınıza FAST ile aktarılır.",
      highlight: "%100 ücretsiz kargo ve güvenlik kamerası kaydıyla şeffaf kutu açılışı."
    },
    {
      id: 13,
      category: 'guvenlik',
      categoryName: 'Veri Güvenliği & Garanti',
      color: 'sky',
      q: "Cihazımı satarken kişisel verilerim, fotoğraflarım ve hesaplarım nasıl korunur?",
      a: "Kişisel verilerinizin gizliliği bizim için en öncelikli kuraldır. Cihazınızı teslim aldıktan sonra veya test sürecinde tüm diskler DoD ve NIST veri silme standartlarına uygun biçimde kalıcı olarak sıfırlanır. Geri döndürülemez format işlemi uygulanarak cihaz fabrika ayarlarına getirilir.",
      highlight: "Geri getirilemez kalıcı disk sıfırlama ile %100 veri gizliliği güvencesi."
    },
    {
      id: 14,
      category: 'guvenlik',
      categoryName: 'Veri Güvenliği & Garanti',
      color: 'sky',
      q: "Cihaz satışı yaparken resmi bir tutanak veya sözleşme düzenleniyor mu?",
      a: "Evet. Güvenli ticaret ilkemiz ve yasal mevzuat gereğince ikinci el cihaz alımlarında karşılıklı imzalı 'İkinci El Cihaz Alım-Satım Sözleşmesi' düzenlenir. Cihazın seri numarası, satıcı kimlik beyanı ve ödenen meblağ resmi olarak kayıt altına alınarak bir nüshası size verilir.",
      highlight: "Her iki tarafın haklarını koruyan resmi imzalı alım tutanağı."
    },
    {
      id: 15,
      category: 'guvenlik',
      categoryName: 'Veri Güvenliği & Garanti',
      color: 'sky',
      q: "Mağazanızdan satın aldığım ikinci el bilgisayar veya laptop garantili mi?",
      a: "Evet! Mağazamızda satışa sunulan tüm 2. el masaüstü sistemler, gaming laptoplar ve Apple cihazları 20+ aşamalı stres testinden geçmiş, termal macunları yenilenmiş ve donanım kontrolü yapılmıştır. Tüm cihazlarımıza Konya Bilgisayar Mağaza Garantisi verilmektedir.",
      highlight: "Mağaza garantili, stres testleri tamamlanmış güvenilir ikinci el cihazlar."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = faqCategory === 'all' || faq.category === faqCategory;
    if (!matchesCat) return false;
    if (!faqSearch.trim()) return true;
    const term = faqSearch.toLowerCase();
    return faq.q.toLowerCase().includes(term) || faq.a.toLowerCase().includes(term);
  });

  // Kompakt Görünüm Formülü: Sayfayı uzatmamak için 'Tümü' ve arama yokken varsayılan ilk 6 soru gösterilir
  const isCompactMode = faqCategory === 'all' && !faqSearch.trim();
  const displayedFaqs = (isCompactMode && !showAllFaqs)
    ? filteredFaqs.slice(0, 6)
    : filteredFaqs;

  const filteredProducts = activeCategoryTab === 'all'
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeCategoryTab).slice(0, 8);

  return (
    <div>
      {/* 1. BAĞIMSIZ VE MODERN HERO SLIDER (Tam Genişlik & Carousel) */}
      <section 
        className="hero-slider-wrapper"
        onMouseEnter={() => setIsSliderPaused(true)}
        onMouseLeave={() => setIsSliderPaused(false)}
      >
        {/* Sol & Sağ Navigasyon Okları */}
        <button 
          type="button"
          onClick={prevHeroSlide}
          className="slider-arrow-btn prev"
          aria-label="Önceki Slayt"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          type="button"
          onClick={nextHeroSlide}
          className="slider-arrow-btn next"
          aria-label="Sonraki Slayt"
        >
          <ChevronRight size={24} />
        </button>

        <div className="container hero-slider-container">
          {heroSlides.map((slide, idx) => {
            if (idx !== currentSlide) return null;
            return (
              <div key={slide.id} className="hero-slide">
                {/* Sol Taraf: İçerik, Başlık, Vurgular & Butonlar */}
                <div>
                  <div className="hero-slide-badge">
                    <span className="pulse-online" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="hero-slide-title">
                    {slide.title.replace(slide.titleHighlight, '')}
                    <span style={{ color: '#0066cc', display: 'inline-block' }}>
                      {slide.titleHighlight}
                    </span>
                  </h1>

                  <p className="hero-slide-desc">
                    {slide.desc}
                  </p>

                  {/* Bullet Vurguları */}
                  <div className="hero-slide-bullets">
                    {slide.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="hero-slide-bullet-item">
                        <CheckCircle2 size={16} color="#16a34a" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Eylem Düğmeleri */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {slide.primaryBtn.scrollTo ? (
                      <button 
                        type="button"
                        onClick={() => {
                          const el = document.getElementById(slide.primaryBtn.scrollTo);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn btn-navy"
                        style={{ fontSize: '1rem', padding: '14px 28px' }}
                      >
                        <Zap size={18} /> {slide.primaryBtn.text}
                      </button>
                    ) : (
                      <button 
                        type="button"
                        onClick={() => navigate(slide.primaryBtn.route)}
                        className="btn btn-navy"
                        style={{ fontSize: '1rem', padding: '14px 28px' }}
                      >
                        {slide.primaryBtn.icon === 'refresh' && <RefreshCw size={18} />}
                        {slide.primaryBtn.icon === 'shield' && <ShieldCheck size={18} />}
                        {slide.primaryBtn.icon === 'sparkles' && <Sparkles size={18} />}
                        <span>{slide.primaryBtn.text}</span>
                      </button>
                    )}

                    {slide.secondaryBtn && (
                      slide.secondaryBtn.wa ? (
                        <a 
                          href={`https://wa.me/905510454255?text=${encodeURIComponent(slide.secondaryBtn.wa)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-wa"
                          style={{ fontSize: '0.96rem', padding: '14px 22px', fontWeight: 800 }}
                        >
                          <WhatsAppIcon size={17} /> {slide.secondaryBtn.text}
                        </a>
                      ) : slide.secondaryBtn.tel ? (
                        <a 
                          href={`tel:${slide.secondaryBtn.tel}`}
                          className="btn"
                          style={{
                            background: '#ffffff',
                            color: '#0a2540',
                            border: '1.5px solid var(--border)',
                            padding: '14px 22px',
                            fontSize: '0.96rem',
                            fontWeight: 800
                          }}
                        >
                          <Phone size={17} color="#0066cc" /> {slide.secondaryBtn.text}
                        </a>
                      ) : (
                        <button 
                          type="button"
                          onClick={() => navigate(slide.secondaryBtn.route)}
                          className="btn btn-outline"
                          style={{ fontSize: '0.96rem', padding: '14px 22px', fontWeight: 700 }}
                        >
                          {slide.secondaryBtn.text}
                        </button>
                      )
                    )}

                    {slide.hasPhone && (
                      <a 
                        href="tel:05510454255"
                        className="btn"
                        style={{
                          background: '#ffffff',
                          color: '#0a2540',
                          border: '1.5px solid var(--border)',
                          padding: '14px 20px',
                          fontSize: '0.96rem',
                          fontWeight: 800,
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <Phone size={17} color="#0066cc" /> 0551 045 42 55
                      </a>
                    )}
                  </div>
                </div>

                {/* Sağ Taraf: Büyüleyici Görsel Vitrini & Canlı İstatistik Rozetleri */}
                <div className="hero-slide-visual">
                  <div className="hero-visual-card">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      loading="eager"
                    />
                    <div className="hero-visual-overlay" />
                    
                    <div className="hero-visual-badge-top">
                      <span>{slide.badgeTop}</span>
                    </div>

                    <div className="hero-visual-stat-card">
                      <div>
                        <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1 }}>
                          {slide.statVal}
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f1f5f9' }}>
                          {slide.statLabel}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.74rem', background: 'rgba(56, 189, 248, 0.2)', color: '#7dd3fc', padding: '4px 10px', borderRadius: '12px', fontWeight: 800 }}>
                          {slide.statSub}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Slayt Noktaları (Pagination) ve Sayaç */}
        <div style={{ paddingBottom: '20px' }}>
          <div className="slider-dots-wrapper">
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginRight: '6px' }}>
              0{currentSlide + 1} / 0{heroSlides.length}
            </span>
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentSlide(dotIdx)}
                className={`slider-dot-btn ${dotIdx === currentSlide ? 'active' : ''}`}
                aria-label={`Slayt ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. CİHAZ ÖZELLİKLERİ VE WHATSAPP FİYAT TEKLİFİ BÖLÜMÜ */}
      <section id="canli-degerleme" className="valuation-section">
        <div className="container">
          {/* Başlık & Açıklama */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
              <span>WhatsApp ile Hızlı Fiyat Teklifi</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
              fontWeight: 900,
              color: '#0a2540',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '14px'
            }}>
              Cihazınızın Özelliklerini Seçin, <span style={{ color: '#15803d' }}>WhatsApp'tan Anında Fiyat Alın</span>
            </h2>

            <p style={{
              fontSize: '1.04rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65
            }}>
              Satmak veya takas etmek istediğiniz laptop, masaüstü bilgisayar, MacBook, telefon veya konsolunuzun donanımını belirtin; otomatik oluşturulan mesajla WhatsApp uzmanımıza iletip en yüksek nakit teklifimizi alın.
            </p>
          </div>

          {/* Ana Değerleme Kartı */}
          <div className="valuation-card-main">
            {/* 6 Kategori Seçim Butonları (Geniş & Modern Butonlar) */}
            <div className="val-cat-grid">
              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'laptop' ? 'active' : ''}`}
                onClick={() => setSimCategory('laptop')}
              >
                <Laptop size={22} />
                <span>Laptop & Dizüstü</span>
              </button>

              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'masaustu' ? 'active' : ''}`}
                onClick={() => setSimCategory('masaustu')}
              >
                <Monitor size={22} />
                <span>Masaüstü PC</span>
              </button>

              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'macbook' ? 'active' : ''}`}
                onClick={() => setSimCategory('macbook')}
              >
                <Cpu size={22} />
                <span>Apple MacBook</span>
              </button>

              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'iphone' ? 'active' : ''}`}
                onClick={() => setSimCategory('iphone')}
              >
                <Smartphone size={22} />
                <span>iPhone / Telefon</span>
              </button>

              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'tablet' ? 'active' : ''}`}
                onClick={() => setSimCategory('tablet')}
              >
                <Tablet size={22} />
                <span>iPad & Tablet</span>
              </button>

              <button 
                type="button"
                className={`val-cat-btn ${simCategory === 'konsol' ? 'active' : ''}`}
                onClick={() => setSimCategory('konsol')}
              >
                <Gamepad2 size={22} />
                <span>PlayStation & Konsol</span>
              </button>
            </div>

            {/* 2 Sütunlu Hesaplama Alanı: Sol Seçimler, Sağ Canlı Değer & Teklif */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'start'
            }}>
              {/* Sol: Donanım Seçim Alanı */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border)'
                }}>
                  <Zap size={18} color="#0066cc" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--heading)' }}>
                    Cihaz Donanım Özelliklerini Seçin
                  </h3>
                </div>

                {(simCategory === 'laptop' || simCategory === 'masaustu') && (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          Cihaz Markası
                        </label>
                        <select 
                          value={simBrand} 
                          onChange={e => {
                            const newBrand = e.target.value;
                            setSimBrand(newBrand);
                            const series = POPULAR_SERIES_BY_BRAND[newBrand];
                            if (series && series.length > 0) setSimSeries(series[0]);
                          }}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {BRAND_OPTIONS}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          Model / Seri
                        </label>
                        <select 
                          value={simSeries} 
                          onChange={e => setSimSeries(e.target.value)}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {(POPULAR_SERIES_BY_BRAND[simBrand] || ['Standart Model']).map((seri, idx) => (
                            <option key={idx} value={seri}>{seri}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          İşlemci Modeli (CPU)
                        </label>
                        <select 
                          value={simCpu} 
                          onChange={e => setSimCpu(e.target.value)}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {CPU_OPTIONS_GROUPED}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          Ekran Kartı (GPU)
                        </label>
                        <select 
                          value={simGpu} 
                          onChange={e => setSimGpu(e.target.value)}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {GPU_OPTIONS_GROUPED}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          RAM Bellek
                        </label>
                        <select 
                          value={simRam} 
                          onChange={e => setSimRam(e.target.value)}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {RAM_OPTIONS}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                          SSD / Depolama
                        </label>
                        <select 
                          value={simStorage} 
                          onChange={e => setSimStorage(e.target.value)}
                          className="form-control"
                          style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                        >
                          {STORAGE_OPTIONS}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {simCategory === 'macbook' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                        MacBook Modeli & Kasası
                      </label>
                      <select 
                        value={simSeries} 
                        onChange={e => setSimSeries(e.target.value)}
                        className="form-control"
                        style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                      >
                        {(POPULAR_SERIES_BY_BRAND['Apple'] || []).map((seri, idx) => (
                          <option key={idx} value={seri}>{seri}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                        Apple Çipi (İşlemci)
                      </label>
                      <select 
                        value={simAppleChip} 
                        onChange={e => setSimAppleChip(e.target.value)}
                        className="form-control"
                        style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                      >
                        {APPLE_CHIP_OPTIONS}
                      </select>
                    </div>
                  </div>
                )}

                {simCategory === 'iphone' && (
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                      Telefon Modeli
                    </label>
                    <select 
                      value={simPhoneModel} 
                      onChange={e => setSimPhoneModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                    >
                      {IPHONE_OPTIONS}
                    </select>
                  </div>
                )}

                {simCategory === 'tablet' && (
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                      Tablet Modeli
                    </label>
                    <select 
                      value={simTabletModel} 
                      onChange={e => setSimTabletModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                    >
                      <optgroup label="Apple iPad Modelleri">
                        <option value="ipad-pro-m4">Apple iPad Pro M4 (2024 - 11"/13")</option>
                        <option value="ipad-pro-m2">Apple iPad Pro M2 (11"/12.9")</option>
                        <option value="ipad-air-m2">Apple iPad Air M2 (2024)</option>
                        <option value="ipad-air-m1">Apple iPad Air M1 (5. Nesil)</option>
                        <option value="ipad-10">Apple iPad 10. Nesil (10.9 inç)</option>
                        <option value="ipad-9">Apple iPad 9. Nesil (10.2 inç)</option>
                        <option value="ipad-mini-6">Apple iPad mini 6. Nesil</option>
                      </optgroup>
                      <optgroup label="Samsung Galaxy Tab">
                        <option value="tab-s9-ultra">Samsung Galaxy Tab S9 Ultra</option>
                        <option value="tab-s9">Samsung Galaxy Tab S9 / S9+</option>
                        <option value="tab-s8">Samsung Galaxy Tab S8 / S8 Ultra</option>
                        <option value="tab-a9">Samsung Galaxy Tab A9 / A9+</option>
                      </optgroup>
                    </select>
                  </div>
                )}

                {simCategory === 'konsol' && (
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)', display: 'block', marginBottom: '6px' }}>
                      Oyun Konsolu Modeli
                    </label>
                    <select 
                      value={simConsoleModel} 
                      onChange={e => setSimConsoleModel(e.target.value)}
                      className="form-control"
                      style={{ padding: '10px 12px', fontSize: '0.88rem' }}
                    >
                      {CONSOLE_OPTIONS}
                    </select>
                  </div>
                )}
              </div>

              {/* Sağ: Seçilen Donanım Özeti & WhatsApp Hazır Mesaj Önizlemesi */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(21, 128, 61, 0.04) 0%, rgba(10, 37, 64, 0.03) 100%)',
                  border: '1.5px solid rgba(21, 128, 61, 0.28)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} color="#15803d" />
                      Seçilen Donanım Özeti
                    </span>
                    <span style={{ fontSize: '0.74rem', background: '#dcfce7', color: '#166534', fontWeight: 800, padding: '3px 10px', borderRadius: '12px' }}>
                      Mesaja Eklendi
                    </span>
                  </div>

                  <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0a2540', lineHeight: 1.5, marginBottom: '16px' }}>
                    {getSimDetailSummary()}
                  </div>

                  {/* WhatsApp Hazır Mesaj Önizleme Kutusu (Chat Balonu Görünümünde) */}
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: 800, color: '#15803d' }}>
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
                      maxHeight: '145px',
                      overflowY: 'auto',
                      padding: '4px 2px',
                      fontFamily: 'inherit'
                    }}>
                      {simWaMessage}
                    </div>
                  </div>

                  {/* Güven Vurguları */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '20px'
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
                    <a 
                      href={simWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa"
                      style={{
                        width: '100%',
                        fontSize: '1rem',
                        padding: '16px 20px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 24px rgba(21, 128, 61, 0.3)'
                      }}
                    >
                      <WhatsAppIcon size={22} />
                      <span>WhatsApp'a Gönder & Fiyat Al</span>
                    </a>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px' }}>
                      <button 
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(simWaMessage);
                          setCopiedMessage(true);
                          setTimeout(() => setCopiedMessage(false), 2500);
                        }}
                        className="btn btn-outline"
                        style={{ fontSize: '0.82rem', padding: '11px 12px', fontWeight: 800, justifyContent: 'center' }}
                      >
                        {copiedMessage ? '✓ Kopyalandı!' : '📋 Mesajı Kopyala'}
                      </button>

                      <button 
                        type="button"
                        onClick={() => navigate('degerleme', { category: simCategory })}
                        className="btn btn-navy"
                        style={{ fontSize: '0.82rem', padding: '11px 12px', fontWeight: 800, justifyContent: 'center' }}
                      >
                        Detaylı Form →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alt Süreç Adımları (15 Dk Güvencesi) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginTop: '32px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0a2540', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>1</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--heading)', marginBottom: '3px' }}>Donanımını Seç</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cihazının modelini ve parçalarını listeden belirt.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#15803d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>2</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--heading)', marginBottom: '3px' }}>WhatsApp'tan Fiyat Al</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Hazır mesajla tüm özellikler iletilsin, anında nakit teklifi gelsin.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0a2540', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>3</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--heading)', marginBottom: '3px' }}>15 Dk Test</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Selçuklu mağazamızda gözünüzün önünde şeffaf ekspertiz.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#16a34a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>4</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--heading)', marginBottom: '3px' }}>Anında Nakit / FAST</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Fiyat onayınızla birlikte paranız anında elden veya bankada.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. MAĞAZAMIZDAKİ GÜNCEL ÜRÜNLER (Canlı Vitrin) */}
      <section style={{ padding: '70px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '8px' }}>Test Edilmiş & Garantili</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0a2540', letterSpacing: '-0.5px' }}>
                Mağazamızdaki Güncel Ürünler
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '4px' }}>
                Tüm ürünler 20 aşamalı donanım testinden geçmiş, termal bakımı yapılmış ve Konya Bilgisayar güvencesindedir.
              </p>
            </div>
            <button 
              onClick={() => navigate('urunler')}
              className="btn btn-outline btn-sm"
              style={{ fontWeight: 800, padding: '10px 18px' }}
            >
              Tüm Ürünleri İnceleyin ({products.length}) →
            </button>
          </div>

          {/* Kategori Sekmeleri */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
            <TabBtn label="Tümü" active={activeCategoryTab === 'all'} onClick={() => setActiveCategoryTab('all')} />
            <TabBtn label="Laptop" active={activeCategoryTab === 'laptop'} onClick={() => setActiveCategoryTab('laptop')} />
            <TabBtn label="Masaüstü Bilgisayar" active={activeCategoryTab === 'masaustu'} onClick={() => setActiveCategoryTab('masaustu')} />
            <TabBtn label="MacBook" active={activeCategoryTab === 'macbook'} onClick={() => setActiveCategoryTab('macbook')} />
            <TabBtn label="PlayStation & Konsol" active={activeCategoryTab === 'konsol'} onClick={() => setActiveCategoryTab('konsol')} />
            <TabBtn label="Monitör & Ekipman" active={activeCategoryTab === 'monitor'} onClick={() => setActiveCategoryTab('monitor')} />
          </div>

          {/* Ürün Kartları Izgarası */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map(product => {
              const cpuSpec = product.specs?.['İşlemci'] || product.specs?.['cpu'] || '';
              const gpuSpec = product.specs?.['Ekran Kartı'] || product.specs?.['gpu'] || '';
              const ramSpec = product.specs?.['RAM'] || product.specs?.['ram'] || '';
              const ssdSpec = product.specs?.['Depolama'] || product.specs?.['SSD'] || product.specs?.['storage'] || '';

              return (
                <div 
                  key={product.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all var(--tr-fast)',
                    boxShadow: '0 4px 16px rgba(10, 37, 64, 0.05)'
                  }}
                  className="product-card-hover"
                >
                  {/* Resim & Kalp Butonu */}
                  <div style={{ position: 'relative', height: '205px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => navigate('urun-detay', { id: product.id })}
                    />

                    {/* Listeme Ekle Kalp Butonu */}
                    <button 
                      onClick={() => addToWishlist(product)}
                      title={isInWishlist(product.id) ? "Listeden Çıkar" : "Listeme Ekle"}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: isInWishlist(product.id) ? 'var(--primary-bright)' : 'rgba(255, 255, 255, 0.95)',
                        color: isInWishlist(product.id) ? '#ffffff' : '#0a2540',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>

                  {/* İçerik */}
                  <div style={{ padding: '20px', display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                      {product.categoryName || product.category}
                    </div>
                    <h3 
                      onClick={() => navigate('urun-detay', { id: product.id })}
                      style={{ 
                        fontSize: '1.05rem', 
                        fontWeight: 800, 
                        color: '#0a2540', 
                        lineHeight: 1.35, 
                        marginBottom: '10px', 
                        cursor: 'pointer',
                        minHeight: '44px'
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Fiyat */}
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0a2540', marginBottom: '12px', letterSpacing: '-0.3px' }}>
                      {Number(product.price).toLocaleString('tr-TR')} TL
                    </div>

                    {/* 2x2 Donanım Özellikleri Izgarası */}
                    <div className="spec-grid-2x2">
                      <div className="spec-chip-item" title={cpuSpec || 'İşlemci'}>
                        <Cpu size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{cpuSpec ? cpuSpec.slice(0, 16) : 'Çok Çekirdek'}</span>
                      </div>
                      <div className="spec-chip-item" title={ramSpec || 'Bellek'}>
                        <Zap size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{ramSpec || '16 GB RAM'}</span>
                      </div>
                      <div className="spec-chip-item" title={gpuSpec || 'Ekran Kartı'}>
                        <Activity size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{gpuSpec ? gpuSpec.slice(0, 16) : 'Grafik Kartı'}</span>
                      </div>
                      <div className="spec-chip-item" title={ssdSpec || 'Depolama'}>
                        <ShieldCheck size={13} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{ssdSpec ? ssdSpec.slice(0, 16) : 'NVMe SSD'}</span>
                      </div>
                    </div>

                    {/* Eylem Düğmeleri */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '8px', marginTop: 'auto' }}>
                      <a 
                        href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20${encodeURIComponent(product.title)}%20(Fiyat%3A%20${product.price}%20TL)%20%C3%BCr%C3%BCn%C3%BCn%C3%BC%20sat%C4%B1n%20almak%20istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-navy"
                        style={{ fontSize: '0.8rem', padding: '9px 8px', gap: '5px' }}
                      >
                        <WhatsAppIcon size={15} /> Satın Al
                      </a>
                      <button 
                        onClick={() => navigate('urun-detay', { id: product.id })}
                        className="btn btn-outline"
                        style={{ fontSize: '0.8rem', padding: '9px 8px', fontWeight: 800 }}
                      >
                        Detaylar
                      </button>
                      <button 
                        onClick={() => addToCompare(product)}
                        title="Karşılaştır"
                        className="btn"
                        style={{ background: '#f8fafc', color: '#0a2540', padding: '0 10px', border: '1px solid var(--border)' }}
                      >
                        <Scale size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CİHAZINIZI NASIL SATABİLİRSİNİZ? (3 Adım) */}
      <section style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Kolay ve Hızlı Süreç</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0a2540', letterSpacing: '-0.5px' }}>
              Cihazınızı Nasıl Satabilirsiniz?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Uzun bekleme süreleri veya güvenilmez alıcılarla uğraşmadan 3 adımda paranızı anında alın.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 102, 204, 0.1)',
                color: '#0066cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                01
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                Özellikleri Belirtin & Değerini Öğrenin
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Sitemizdeki hesaplama formunu doldurun veya WhatsApp'tan cihazınızın modelini ve özelliklerini iletin, anında ön fiyat teklifi verelim.
              </p>
            </div>

            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 102, 204, 0.1)',
                color: '#0066cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                02
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                Mağazamıza Getirin veya Ücretsiz Kargolayın
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Konya Selçuklu Nalçacı mağazamıza elden getirebilir veya Türkiye geneli anlaşmalı Yurtiçi Kargo kodumuzla ücretsiz gönderebilirsiniz.
              </p>
            </div>

            <div className="step-card-item">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(22, 163, 74, 0.12)',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.25rem'
              }}>
                03
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                15 Dk Test Sonrası Anında Nakit / FAST
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Cihazınız uzman teknisyenlerimizce 15 dakikada test edilir. Anlaşılan tutar hiçbir kesinti olmadan anında elden nakit veya banka hesabınıza FAST ile ödenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BÜYÜK ÇAĞRI BANDI (Callout Banner) */}
      <section style={{ padding: '40px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="callout-banner-card">
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.5px' }}>
              Cihazınızı Değerinde Nakit Satmak İçin Hemen İletişime Geçin
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '720px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              0551 045 42 55 numaralı hattımızdan arayabilir veya WhatsApp üzerinden fotoğraflarını göndererek anında teklif alabilirsiniz.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#0a2540',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  padding: '13px 28px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
                }}
              >
                📞 {settings?.phone || '0551 045 42 55'} Hemen Ara
              </a>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1%20satmak%20istiyorum%2C%20fiyat%20teklifi%20alabilir%20miyim%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ fontSize: '0.95rem', padding: '13px 28px', fontWeight: 800 }}
              >
                <WhatsAppIcon size={18} /> WhatsApp'tan Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 9. SİZE NASIL YARDIMCI OLABİLİRİZ? (Hizmetler) */}
      <section style={{ padding: '70px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '10px' }}>Hizmetlerimiz</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0a2540', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              Size Nasıl Yardımcı Olabiliriz?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              İkinci el teknoloji alım satımından teknik servis ve takasa kadar Konya'daki tam kapsamlı çözüm ortağınız.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <ServiceCard 
              image="/images/spec_valuation.jpg"
              icon={<Banknote size={26} />}
              title="Cihazınızı Değerinde Satın"
              desc="Eski laptop, masaüstü veya Apple cihazınızı değerinde alıyoruz. Selçuklu mağazamızda anında nakit veya IBAN ödemesi."
              linkText="Satmak İstediğiniz Cihazı Seçin →"
              onClick={() => navigate('degerleme')}
            />

            <ServiceCard 
              image="/images/hero_tech.jpg"
              icon={<Laptop size={26} />}
              title="İkinci El Satılık Ürünler"
              desc="Mağazamızdaki tüm ürünler detaylı testlerden geçmiş, termal bakımı yapılmış ve Konya Bilgisayar garantisi altındadır."
              linkText="Satılık Ürünleri Görün →"
              onClick={() => navigate('urunler')}
            />

            <ServiceCard 
              image="/images/service_diagnostics.jpg"
              icon={<Cpu size={26} />}
              title="Bilgisayar Teknik Servisi"
              desc="Termal macun yenileme, fan temizliği, ekran değişimi, format, donanım yükseltme ve özel sistem toplama hizmetleri."
              linkText="Servis Hizmetlerini İnceleyin →"
              onClick={() => navigate('hizmetler')}
            />

            <ServiceCard 
              image="/images/trade_in.jpg"
              icon={<RefreshCw size={26} />}
              title="Cihazınızı Takas Edin"
              desc="Mevcut bilgisayarınızı getirin, değerini stoktaki yeni cihazınızın fiyatından düşerek kolayca yenileyin."
              linkText="Takas Seçeneklerini İnceleyin →"
              onClick={() => navigate('takas')}
            />

            <ServiceCard 
              image="/images/secure_cargo.jpg"
              icon={<Truck size={26} />}
              title="Kargoyla Cihaz Satışı"
              desc="Konya ilçeleri ve 81 ilden Yurtiçi Kargo anlaşma kodumuzla ücretsiz gönderin. Test sonrası paranız hesabınızda."
              linkText="Kargoyla Satış Rehberi →"
              onClick={() => navigate('kargo')}
            />

            <ServiceCard 
              image="/images/corporate_buyback.jpg"
              icon={<ShieldCheck size={26} />}
              title="Toplu & Kurumsal Alım"
              desc="Ofis, şirket ve internet kafe yenilemelerinizde adetli laptop, kasa ve monitörler için en yüksek toplu teklifi sunuyoruz."
              linkText="Kurumsal Teklif Alın →"
              onClick={() => navigate('toplu-alim')}
            />
          </div>
        </div>
      </section>

      {/* 5. TEKNOLOJİ REHBERİ & BLOG */}
      {blogs && blogs.length > 0 && (
        <section style={{ padding: '70px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
                  <BookOpen size={14} /> Teknoloji Rehberi & İpuçları
                </span>
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '6px' }}>
                  Konya Bilgisayar Blog
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                  İkinci el cihaz alım-satım rehberleri, bakım tavsiyeleri ve donanım testleri.
                </p>
              </div>
              <button 
                onClick={() => navigate('blog')}
                className="btn btn-outline"
                style={{ fontWeight: 700 }}
              >
                Tüm Yazıları Gör ({blogs.length}) →
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {blogs.filter(b => b.published !== false).slice(0, 3).map(post => (
                <article
                  key={post.id}
                  onClick={() => navigate('blog-detay', { slug: post.slug || post.id })}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all var(--tr-fast)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  className="product-card-hover"
                >
                  <div style={{ position: 'relative', height: '190px', background: '#f1f5f9' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(10, 37, 64, 0.88)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} /> {new Date(post.createdAt || Date.now()).toLocaleDateString('tr-TR')}
                      </span>
                      <span>•</span>
                      <span>{post.readTime || '4 dk okuma'}</span>
                    </div>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                      {post.excerpt?.slice(0, 110)}...
                    </p>
                    <div style={{ color: 'var(--primary-bright)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Yazıyı Oku <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. MÜŞTERİ YORUMLARI (Carousel) */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#fbbf24" />)}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--heading)' }}>
              Müşterilerimiz Ne Diyor?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Konya'daki gerçek müşteri deneyimleri ve doğrulanmış değerlendirmeler.
            </p>
          </div>

          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 32px',
            border: '1px solid var(--border)',
            position: 'relative',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--heading)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' }}>
              "{reviews[currentReviewIndex].comment}"
            </p>
            <div style={{ fontWeight: 800, color: 'var(--primary-bright)', fontSize: '0.98rem' }}>
              {reviews[currentReviewIndex].name}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
              <button 
                onClick={() => setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CİHAZINIZA NASIL FİYAT VERİYORUZ? (Şeffaf Ekspertiz Süreci) */}
      <section style={{ padding: '70px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
              <ShieldCheck size={14} /> Şeffaf Ekspertiz
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '10px' }}>
              Cihazınıza Nasıl Fiyat Veriyoruz?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Kulaktan dolma rakamlarla değil, cihazınızın anlık piyasa değeri ve donanım sağlığına göre değerinde nakit teklif sunuyoruz.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                Donanım & Nesil Tespiti
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                İşlemcinin tam nesli (i5 12450H vb.), ekran kartının watt gücü (RTX 4060 140W vb.), RAM frekansı ve SSD okuma hızları incelenir.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                FurMark & Sıcaklık Testi
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Cihaz 10-15 dakika tam yük stres testine sokulur. Fanların çalışma sesi, thermal throttling (ısınma kaynaklı kasma) ve termal macun durumu ölçülür.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                SSD & Pil Sağlığı Raporu
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                CrystalDiskInfo ile diskteki bad sector ve sağlık yüzdesi incelenir. Windows battery report ile pilin fabrika döngüsü ve şarj kapasitesi netleştirilir.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', marginBottom: '16px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
                15 Dk. Anında Nakit / FAST
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Test tamamlandığında anlaşılan fiyat hiçbir kesinti yapılmadan anında nakit veya IBAN hesabınıza FAST/Havale olarak ödenir.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigate('degerleme')}
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '1.05rem', fontWeight: 800 }}
            >
              Cihazınız İçin Nakit Fiyat Teklifi Alın →
            </button>
          </div>
        </div>
      </section>

      {/* 7. LAPTOP MODELİNİ NEREDE BULABİLİRSİNİZ? (Hızlı Rehber Araç) */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>
                <FileText size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Pratik İpucu
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
                Laptopunuzun Tam Modelini Nerede Bulabilirsiniz?
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Doğru fiyat teklifi alabilmek için cihazınızın tam modelini veya donanım özelliklerini öğrenmek çok kolaydır:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: '#60a5fa' }} />
                  <span><strong>Yöntem 1:</strong> Klavyenizde <strong>Windows + R</strong> tuşlarına basıp <code>msinfo32</code> yazın.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: '#60a5fa' }} />
                  <span><strong>Yöntem 2:</strong> Laptopun altındaki etikette yer alan tam seri numarasını fotoğraflayın.</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px' }}>
                Zaman Kaybetmek İstemiyor musunuz?
              </h4>
              <p style={{ fontSize: '0.88rem', opacity: 0.85, marginBottom: '20px' }}>
                Laptopunuzun alt kapağının ve açık ekranının fotoğrafını WhatsApp'tan atın, model ve özellikleri biz çıkarıp anında fiyat verelim!
              </p>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=Merhaba%2C%20cihaz%C4%B1m%C4%B1n%20foto%C4%9Fraflar%C4%B1n%C4%B1%20at%C4%B1yorum%2C%20fiyat%20teklifi%20alabilir%20miyim%3F`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa"
                style={{ width: '100%', padding: '12px', fontWeight: 800 }}
              >
                Fotoğraf Gönder & Fiyat Al (0551 045 42 55)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KONYA'NIN 31 İLÇESİNDE VE 81 İLDE ALIM MERKEZİ */}
      <section style={{ padding: '60px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <span className="badge badge-green" style={{ marginBottom: '8px' }}>
              <MapPin size={14} /> Konya Geneli Kapsama
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '10px' }}>
              Konya'nın 31 İlçesinde İkinci El Alım Ağı
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
              Konya merkezde olmasanız bile anlaşmalı Yurtiçi Kargo kodumuzla cihazınızı ücretsiz gönderip aynı gün paranızı banka hesabınıza alabilirsiniz.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            maxWidth: '850px',
            margin: '0 auto 28px'
          }}>
            {[
              'Selçuklu', 'Meram', 'Karatay', 'Akşehir', 'Beyşehir', 'Ereğli', 'Seydişehir',
              'Cihanbeyli', 'Kulu', 'Ilgın', 'Çumra', 'Doğanhisar', 'Kadınhanı', 'Bozkır',
              'Sarayönü', 'Yunak', 'Hüyük', 'Hadim', 'Altınekin', 'Tuzlukçu', 'Güneysınır',
              'Çeltik', 'Derbent', 'Taşkent', 'Emirgazi', 'Akören', 'Ahırlı', 'Yalıhüyük', 'Halkapınar'
            ].map((ilce, i) => (
              <span key={i} style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--heading)'
              }}>
                📍 {ilce}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigate('kargo')}
              className="btn btn-outline"
              style={{ fontWeight: 700 }}
            >
              Kargoyla Satış Detaylarını İnceleyin →
            </button>
          </div>
        </div>
      </section>

      {/* 9. GELİŞMİŞ & MODERN SSS BÖLÜMÜ */}
      <section id="sss" className="modern-faq-section">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Başlık Alanı */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 102, 204, 0.08)',
              border: '1px solid rgba(0, 102, 204, 0.2)',
              color: '#0066cc',
              fontSize: '0.84rem',
              fontWeight: 800,
              marginBottom: '14px'
            }}>
              <HelpCircle size={16} />
              <span>Aklınıza Takılan Her Şey</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: 900,
              color: 'var(--heading)',
              letterSpacing: '-0.02em',
              marginBottom: '12px'
            }}>
              Sıkça Sorulan Sorular
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Cihazınızı satarken, takas yaparken veya kargoyla gönderirken bilmeniz gereken tüm detayları şeffaflıkla derledik.
            </p>
          </div>

          {/* Hızlı Arama Çubuğu */}
          <div className="faq-search-box">
            <Search size={20} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input 
              type="text"
              value={faqSearch}
              onChange={e => setFaqSearch(e.target.value)}
              placeholder="Sorunuzu arayın (ör: nakit, FAST, kargo, test, format, takas)..."
              className="faq-search-input"
            />
            {faqSearch && (
              <button 
                type="button"
                onClick={() => setFaqSearch('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
                aria-label="Aramayı Temizle"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Kategori Filtre Butonları */}
          <div className="faq-cat-nav">
            {faqCategories.map(cat => {
              const IconComp = cat.icon;
              const count = cat.id === 'all' 
                ? faqs.length 
                : faqs.filter(f => f.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { 
                    setFaqCategory(cat.id); 
                    setActiveFaq(null); 
                    setShowAllFaqs(false); 
                  }}
                  className={`faq-cat-button ${faqCategory === cat.id ? 'active' : ''}`}
                >
                  <IconComp size={15} />
                  <span>{cat.label}</span>
                  <span className="faq-cat-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Soru Listesi (2 Sütunlu Kompakt Accordion) */}
          {filteredFaqs.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 24px',
              background: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px dashed var(--border)'
            }}>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--heading)', marginBottom: '8px' }}>
                "{faqSearch}" ile eşleşen soru bulunamadı.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Aradığınız sorunun cevabını bulamadıysanız WhatsApp uzmanımıza anında danışabilirsiniz.
              </p>
              <button 
                type="button" 
                onClick={() => { setFaqSearch(''); setFaqCategory('all'); }}
                className="btn btn-outline btn-sm"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div>
              <div className="faq-grid-2col">
                {displayedFaqs.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                    >
                      <button 
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                        className="faq-trigger-btn"
                        aria-expanded={isOpen}
                      >
                        <div style={{ flex: 1, paddingRight: '8px' }}>
                          <span className={`faq-tag-chip ${faq.color}`}>
                            {faq.categoryName}
                          </span>
                          <h3 className="faq-q-title">
                            {faq.q}
                          </h3>
                        </div>
                        <div className="faq-chevron-icon">
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="faq-content-body">
                          <p style={{ margin: 0 }}>
                            {faq.a}
                          </p>
                          {faq.highlight && (
                            <div className="faq-tips-box">
                              <CheckCircle2 size={16} color="#0066cc" style={{ minWidth: '16px', marginTop: '2px' }} />
                              <span><strong>Önemli Not:</strong> {faq.highlight}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Kompakt Görünüm Aç/Kapat Butonu (Sayfayı Uzatmayan Formül) */}
              {isCompactMode && filteredFaqs.length > 6 && (
                <div style={{ textAlign: 'center', marginTop: '22px' }}>
                  <button 
                    type="button"
                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                    className="faq-toggle-all-btn"
                  >
                    <span>
                      {showAllFaqs 
                        ? 'Daha Az Soru Göster' 
                        : `Diğer Tüm Soruları Gör (+${filteredFaqs.length - 6} Soru)`}
                    </span>
                    {showAllFaqs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Alt Bilgi & İletişim Kartı */}
          <div className="faq-cta-banner">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                <Sparkles size={16} /> 7/24 Kesintisiz Destek
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, margin: '0 0 6px 0' }}>
                Farklı bir sorunuz veya cihazınız mı var?
              </h3>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.94rem', maxWidth: '520px', lineHeight: 1.5 }}>
                Uzman donanım danışmanlarımız WhatsApp hattında sorularınızı anında yanıtlamak ve cihazınıza en yüksek nakit teklifini vermek için bekliyor.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/${settings?.whatsapp || '905510454255'}?text=${encodeURIComponent('Merhaba Konya Bilgisayar, web sitenizdeki SSS bölümünü inceledim. Cihazım hakkında bir soru sormak istiyorum.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa"
                style={{ padding: '12px 22px', fontWeight: 800 }}
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Danışmanı</span>
              </a>
              <a 
                href={`tel:${settings?.phoneRaw || '905510454255'}`}
                className="btn"
                style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.25)', fontWeight: 800, padding: '12px 20px' }}
              >
                📞 {settings?.phone || '0551 045 42 55'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KONYA MAĞAZA KONUMU & HARİTA */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Mağazamıza Bekleriz</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '14px' }}>
                Selçuklu Mağazamız
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
                {settings?.address || 'Feritpaşa Mah. Ahmet Hilmi Nalçacı Cad. No:42/B, Selçuklu / KONYA'} adresindeyiz. Mağazamıza her gün 09:00 - 20:00 arasında randevu almadan gelebilirsiniz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} style={{ color: 'var(--primary-bright)' }} />
                  <span>Çalışma Saatleri: <strong>{settings?.workingHours || '09:00 - 20:00 (Her gün)'}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--primary-bright)' }} />
                  <span>Ödeme Türleri: <strong>Nakit, Havale, FAST, Kredi Kartı</strong></span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href={`tel:${settings?.phoneRaw || '905510454255'}`}
                  className="btn btn-primary"
                  style={{ background: '#16a34a', fontWeight: 800 }}
                >
                  📞 Hemen Ara: {settings?.phone || '0551 045 42 55'}
                </a>
                <a 
                  href={`https://wa.me/${settings?.whatsapp || '905510454255'}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-wa"
                >
                  WhatsApp'tan Konum İsteyin
                </a>
                <button 
                  onClick={() => navigate('iletisim')}
                  className="btn btn-outline"
                >
                  Yol Tarifi & İletişim →
                </button>
              </div>
            </div>

            {/* Harita Embed */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              height: '340px'
            }}>
              <iframe 
                src={settings?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100770.83538965876!2d32.4178788448373!3d37.87834524792622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d71221bd%3A0x897914eec5f524f7!2sKonya!5e0!3m2!1str!2str"}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Konya Bilgisayar Konum"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .spec-pill {
          background: var(--surface-2);
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
        .product-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg) !important;
          border-color: rgba(0, 89, 191, 0.3) !important;
        }
      `}</style>
    </div>
  );
}

function HeroCatBtn({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'var(--surface-2)',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        color: 'var(--heading)',
        transition: 'all var(--tr-fast)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.borderColor = 'var(--primary-bright)';
        e.currentTarget.style.color = 'var(--primary-bright)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--surface-2)';
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--heading)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon}
      <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{label}</span>
    </button>
  );
}

function ServiceCard({ icon, title, desc, linkText, onClick, image }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {image && (
        <div style={{
          margin: '-24px -24px 18px -24px',
          height: '145px',
          background: 'linear-gradient(180deg, #ffffff, var(--surface-2))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border-light)',
          padding: '10px'
        }}>
          <img 
            src={image} 
            alt={title} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '125px', 
              objectFit: 'contain', 
              transition: 'transform var(--tr-fast)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '16px',
        background: 'var(--primary-glow)',
        color: 'var(--primary-bright)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
        {desc}
      </p>
      <button 
        onClick={onClick}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--primary-bright)',
          fontWeight: 700,
          fontSize: '0.92rem',
          textAlign: 'left',
          cursor: 'pointer',
          padding: 0
        }}
      >
        {linkText}
      </button>
    </div>
  );
}

function DeviceGridItem({ icon, image, name, sub, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '22px 14px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: 'var(--shadow-sm)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--primary-bright)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 89, 191, 0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {image ? (
        <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={image} 
            alt={name} 
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
        <div style={{ color: 'var(--primary-bright)' }}>{icon}</div>
      )}
      <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--heading)' }}>{name}</div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{sub}</div>
    </div>
  );
}

function TabBtn({ label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 18px',
        borderRadius: 'var(--radius-full)',
        fontWeight: 700,
        fontSize: '0.88rem',
        border: '1px solid',
        borderColor: active ? 'var(--primary-bright)' : 'var(--border)',
        background: active ? 'var(--primary-bright)' : '#ffffff',
        color: active ? '#ffffff' : 'var(--text)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all var(--tr-fast)'
      }}
    >
      {label}
    </button>
  );
}


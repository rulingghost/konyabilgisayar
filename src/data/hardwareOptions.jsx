import React from 'react';

// ==================== İŞLEMCİ (CPU) FİYAT VE PUAN DEĞERLERİ ====================
export const CPU_VALUES = {
  // Intel Core Ultra (Yapay Zeka NPU)
  'ultra9': 29000,
  'ultra7': 21000,
  'ultra5': 15000,

  // Intel 14. Nesil Raptor Lake Refresh
  'i9-14': 26000,
  'i7-14': 19000,
  'i5-14': 13000,
  'i3-14': 6000,

  // Intel 13. Nesil Raptor Lake
  'i9-13': 23000,
  'i7-13': 16500,
  'i5-13': 11500,
  'i3-13': 5000,

  // Intel 12. Nesil Alder Lake
  'i9-12': 19000,
  'i7-12': 13500,
  'i5-12': 9000,
  'i3-12': 4200,

  // Intel 11. Nesil Tiger Lake
  'i9-11': 15000,
  'i7-11': 10500,
  'i5-11': 7000,
  'i3-11': 3500,

  // Intel 10. Nesil Comet Lake
  'i7-10': 8500,
  'i5-10': 5500,
  'i3-10': 2800,

  // Intel 8. & 9. Nesil Coffee Lake
  'i7-9': 6800,
  'i5-9': 4400,
  'i7-8': 5800,
  'i5-8': 3800,
  'i3-8': 2200,

  // Intel 6. & 7. Nesil Skylake / Kaby Lake
  'i7-7': 4500,
  'i5-7': 3000,
  'i7-6': 3800,
  'i5-6': 2400,
  'i3-7': 1800,

  // Intel 4. & 5. Nesil Haswell / Broadwell
  'i7-4': 2800,
  'i5-4': 1800,
  'i3-4': 1200,

  // Intel Giriş & Sunucu
  'celeron': 800,
  'pentium': 1200,
  'xeon': 8000,

  // AMD Ryzen 9000 & 8000 Serisi
  'r9-9': 28000,
  'r7-9': 20000,
  'r5-9': 14000,
  'r7-8': 17000,
  'r5-8': 12000,

  // AMD Ryzen 7000 Serisi (Zen 4)
  'r9-7': 22000,
  'r7-7': 15000,
  'r5-7': 10000,

  // AMD Ryzen 5000 Serisi (Zen 3)
  'r9-5': 16000,
  'r7-5': 11000,
  'r5-5': 7500,
  'r3-5': 4000,

  // AMD Ryzen 3000 & 4000 Serisi (Zen 2)
  'r7-4': 8500,
  'r5-4': 6000,
  'r7-3': 7500,
  'r5-3': 5000,
  'r3-3': 2800,

  // AMD Ryzen 1000 & 2000 Serisi
  'r7-2': 5500,
  'r5-2': 3800,
  'r5-1': 2800,
  'r3-1': 1800,
  'athlon': 1000,

  // Diğer
  'diger': 3000
};

// ==================== EKRAN KARTI (GPU) FİYAT VE PUAN DEĞERLERİ ====================
export const GPU_VALUES = {
  // NVIDIA RTX 40
  'rtx4090': 58000,
  'rtx4080': 35000,
  'rtx4070ti': 24000,
  'rtx4070': 18500,
  'rtx4060ti': 14500,
  'rtx4060': 12000,
  'rtx4050': 8500,

  // NVIDIA RTX 30
  'rtx3090': 22000,
  'rtx3080': 14000,
  'rtx3070ti': 11000,
  'rtx3070': 9500,
  'rtx3060ti': 8000,
  'rtx3060': 6800,
  'rtx3050ti': 5200,
  'rtx3050': 4500,

  // NVIDIA RTX 20
  'rtx2080': 8500,
  'rtx2070': 6800,
  'rtx2060s': 5500,
  'rtx2060': 4500,

  // NVIDIA GTX 16 & 10
  'gtx1660ti': 3800,
  'gtx1660': 3200,
  'gtx1650s': 2800,
  'gtx1650': 2300,
  'gtx1080ti': 5500,
  'gtx1080': 4200,
  'gtx1070ti': 3500,
  'gtx1070': 2900,
  'gtx1060-6': 2400,
  'gtx1060-3': 1800,
  'gtx1050ti': 1600,
  'gtx1050': 1200,
  'gt1030': 700,

  // AMD Radeon RX 7000 & 6000
  'rx7900': 30000,
  'rx7800': 18000,
  'rx7700': 14000,
  'rx7600': 9000,
  'rx6900': 16000,
  'rx6800': 13000,
  'rx6700': 9500,
  'rx6600': 6200,
  'rx6500': 3000,

  // AMD Radeon RX 5000 & 500
  'rx5700': 4800,
  'rx5600': 3800,
  'rx5500': 2800,
  'rx590': 2400,
  'rx580': 1800,
  'rx570': 1400,

  // Intel Arc
  'arc-a770': 9000,
  'arc-a750': 7000,
  'arc-a580': 5000,

  // Dahili
  'dahili': 0
};

// ==================== RAM DEĞERLERİ ====================
export const RAM_VALUES = {
  '4': 400,
  '8': 1000,
  '12': 1600,
  '16': 2400,
  '24': 3600,
  '32': 5000,
  '48': 7500,
  '64': 9500,
  '128': 18000
};

// ==================== DEPOLAMA DEĞERLERİ ====================
export const STORAGE_VALUES = {
  '128ssd': 400,
  '256ssd': 700,
  '512ssd': 1500,
  '1tbssd': 3000,
  '2tbssd': 5800,
  '4tbssd': 11000,
  'hibrit-512-1tb': 2200,
  'hibrit-1tb-1tb': 3600,
  '500hdd': 200,
  '1tbhdd': 400
};

// ==================== İŞLEMCİ OPTGROUP JSX LİSTESİ ====================
export const CPU_OPTIONS_GROUPED = (
  <>
    <optgroup label="🌟 Intel Core Ultra (Yapay Zeka NPU / 2024-2025)">
      <option value="ultra9">Intel Core Ultra 9 185H / 285K</option>
      <option value="ultra7">Intel Core Ultra 7 155H / 265K</option>
      <option value="ultra5">Intel Core Ultra 5 125H / 245K</option>
    </optgroup>
    <optgroup label="⚡ Intel 14. Nesil Raptor Lake Refresh">
      <option value="i9-14">Intel Core i9 14900HX / 14900K / 14900KF</option>
      <option value="i7-14">Intel Core i7 14700HX / 14700K / 14700</option>
      <option value="i5-14">Intel Core i5 14500HX / 14400F / 14400</option>
      <option value="i3-14">Intel Core i3 14100F / 14100</option>
    </optgroup>
    <optgroup label="⚡ Intel 13. Nesil Raptor Lake">
      <option value="i9-13">Intel Core i9 13980HX / 13900H / 13900K</option>
      <option value="i7-13">Intel Core i7 13700H / 13700HX / 13700K</option>
      <option value="i5-13">Intel Core i5 13500H / 13420H / 13400F</option>
      <option value="i3-13">Intel Core i3 13100F / 1315U</option>
    </optgroup>
    <optgroup label="⚡ Intel 12. Nesil Alder Lake">
      <option value="i9-12">Intel Core i9 12900H / 12900HX / 12900K</option>
      <option value="i7-12">Intel Core i7 12700H / 12650H / 12700K</option>
      <option value="i5-12">Intel Core i5 12500H / 12450H / 12400F</option>
      <option value="i3-12">Intel Core i3 12100F / 1215U</option>
    </optgroup>
    <optgroup label="🔹 Intel 11. Nesil Tiger Lake">
      <option value="i9-11">Intel Core i9 11900H / 11900K</option>
      <option value="i7-11">Intel Core i7 11800H / 11850H / 11700K</option>
      <option value="i5-11">Intel Core i5 11400H / 11300H / 11400F</option>
      <option value="i3-11">Intel Core i3 1115G4 / 11100</option>
    </optgroup>
    <optgroup label="🔹 Intel 10. Nesil Comet Lake">
      <option value="i7-10">Intel Core i7 10875H / 10750H / 10700</option>
      <option value="i5-10">Intel Core i5 10500H / 10300H / 10400F</option>
      <option value="i3-10">Intel Core i3 10100F / 1005G1</option>
    </optgroup>
    <optgroup label="🔹 Intel 8. & 9. Nesil Coffee Lake">
      <option value="i7-9">Intel Core i7 9750H / 9700K</option>
      <option value="i5-9">Intel Core i5 9300H / 9400F</option>
      <option value="i7-8">Intel Core i7 8750H / 8700K</option>
      <option value="i5-8">Intel Core i5 8300H / 8400</option>
      <option value="i3-8">Intel Core i3 9100F / 8100</option>
    </optgroup>
    <optgroup label="🔹 Intel 6. & 7. Nesil (Skylake / Kaby Lake)">
      <option value="i7-7">Intel Core i7 7700HQ / 7700K</option>
      <option value="i5-7">Intel Core i5 7300HQ / 7200U</option>
      <option value="i7-6">Intel Core i7 6700HQ / 6700K</option>
      <option value="i5-6">Intel Core i5 6300HQ / 6200U</option>
      <option value="i3-7">Intel Core i3 7100U / 6100U</option>
    </optgroup>
    <optgroup label="🔹 Intel 4. & 5. Nesil (Haswell / Broadwell)">
      <option value="i7-4">Intel Core i7 4700MQ / 4710HQ / 4790K</option>
      <option value="i5-4">Intel Core i5 4200M / 4210U / 4460</option>
      <option value="i3-4">Intel Core i3 4. Nesil / 4130</option>
    </optgroup>
    <optgroup label="🔹 Intel Giriş Seviyesi (Celeron / Pentium / Xeon)">
      <option value="celeron">Intel Celeron N4020 / N4500 / J4125</option>
      <option value="pentium">Intel Pentium Gold G6400 / N5030 / Silver</option>
      <option value="xeon">Intel Xeon E5 / W-Serisi İş İstasyonu</option>
    </optgroup>
    <optgroup label="🔥 AMD Ryzen 9000 & 8000 Serisi (Yeni Nesil)">
      <option value="r9-9">AMD Ryzen 9 9950X / 9900X / 8945HS</option>
      <option value="r7-9">AMD Ryzen 7 9700X / 8845HS / 8700G</option>
      <option value="r5-9">AMD Ryzen 5 9600X / 8645HS / 8600G</option>
    </optgroup>
    <optgroup label="🔥 AMD Ryzen 7000 Serisi (Zen 4)">
      <option value="r9-7">AMD Ryzen 9 7950X3D / 7950X / 7945HX</option>
      <option value="r7-7">AMD Ryzen 7 7800X3D / 7700X / 7735HS</option>
      <option value="r5-7">AMD Ryzen 5 7600X / 7500F / 7535HS</option>
    </optgroup>
    <optgroup label="🔥 AMD Ryzen 5000 Serisi (Zen 3)">
      <option value="r9-5">AMD Ryzen 9 5950X / 5900HX / 5900X</option>
      <option value="r7-5">AMD Ryzen 7 5800X3D / 5800H / 5700X / 5700U</option>
      <option value="r5-5">AMD Ryzen 5 5600X / 5600H / 5500U / 5600G</option>
      <option value="r3-5">AMD Ryzen 3 5300U / 5100</option>
    </optgroup>
    <optgroup label="🔸 AMD Ryzen 3000 & 4000 Serisi (Zen 2)">
      <option value="r7-4">AMD Ryzen 7 4800H / 4700U</option>
      <option value="r5-4">AMD Ryzen 5 4600H / 4500U</option>
      <option value="r7-3">AMD Ryzen 7 3700X / 3800X</option>
      <option value="r5-3">AMD Ryzen 5 3600 / 3500X / 3500U</option>
      <option value="r3-3">AMD Ryzen 3 3200G / 3100</option>
    </optgroup>
    <optgroup label="🔸 AMD Ryzen 1000 & 2000 Serisi (Zen / Zen+)">
      <option value="r7-2">AMD Ryzen 7 2700X / 2700</option>
      <option value="r5-2">AMD Ryzen 5 2600 / 2600X / 2400G</option>
      <option value="r5-1">AMD Ryzen 5 1600 / 1600 AF / 1500X</option>
      <option value="r3-1">AMD Ryzen 3 1200 / 2200G</option>
      <option value="athlon">AMD Athlon 3000G / FX Serisi / A-Serisi</option>
    </optgroup>
    <optgroup label="❓ Diğer">
      <option value="diger">Diğer / Belirtilmemiş İşlemci</option>
    </optgroup>
  </>
);

// ==================== EKRAN KARTI OPTGROUP JSX LİSTESİ ====================
export const GPU_OPTIONS_GROUPED = (
  <>
    <optgroup label="🎮 NVIDIA GeForce RTX 40 Serisi (Ada Lovelace)">
      <option value="rtx4090">NVIDIA GeForce RTX 4090 (24GB / 16GB Laptop)</option>
      <option value="rtx4080">NVIDIA GeForce RTX 4080 Super / 4080 (16GB / 12GB)</option>
      <option value="rtx4070ti">NVIDIA GeForce RTX 4070 Ti Super / 4070 Ti (16GB / 12GB)</option>
      <option value="rtx4070">NVIDIA GeForce RTX 4070 Super / 4070 (12GB / 8GB)</option>
      <option value="rtx4060ti">NVIDIA GeForce RTX 4060 Ti (16GB / 8GB)</option>
      <option value="rtx4060">NVIDIA GeForce RTX 4060 (8GB Masaüstü / Laptop)</option>
      <option value="rtx4050">NVIDIA GeForce RTX 4050 (6GB Laptop)</option>
    </optgroup>
    <optgroup label="🎮 NVIDIA GeForce RTX 30 Serisi (Ampere)">
      <option value="rtx3090">NVIDIA GeForce RTX 3090 / 3090 Ti (24GB)</option>
      <option value="rtx3080">NVIDIA GeForce RTX 3080 / 3080 Ti (10GB / 12GB / 16GB)</option>
      <option value="rtx3070ti">NVIDIA GeForce RTX 3070 Ti (8GB)</option>
      <option value="rtx3070">NVIDIA GeForce RTX 3070 (8GB)</option>
      <option value="rtx3060ti">NVIDIA GeForce RTX 3060 Ti (8GB)</option>
      <option value="rtx3060">NVIDIA GeForce RTX 3060 (12GB / 6GB Laptop)</option>
      <option value="rtx3050ti">NVIDIA GeForce RTX 3050 Ti (4GB Laptop)</option>
      <option value="rtx3050">NVIDIA GeForce RTX 3050 (8GB / 6GB / 4GB)</option>
    </optgroup>
    <optgroup label="🎮 NVIDIA GeForce RTX 20 Serisi (Turing)">
      <option value="rtx2080">NVIDIA GeForce RTX 2080 Ti / 2080 Super (11GB / 8GB)</option>
      <option value="rtx2070">NVIDIA GeForce RTX 2070 Super / 2070 (8GB)</option>
      <option value="rtx2060s">NVIDIA GeForce RTX 2060 Super (8GB)</option>
      <option value="rtx2060">NVIDIA GeForce RTX 2060 (6GB / 12GB)</option>
    </optgroup>
    <optgroup label="⚙️ NVIDIA GeForce GTX 16 & 10 Serisi">
      <option value="gtx1660ti">NVIDIA GeForce GTX 1660 Ti (6GB)</option>
      <option value="gtx1660">NVIDIA GeForce GTX 1660 Super / 1660 (6GB)</option>
      <option value="gtx1650s">NVIDIA GeForce GTX 1650 Super (4GB)</option>
      <option value="gtx1650">NVIDIA GeForce GTX 1650 (4GB GDDR5/GDDR6)</option>
      <option value="gtx1080ti">NVIDIA GeForce GTX 1080 Ti (11GB)</option>
      <option value="gtx1080">NVIDIA GeForce GTX 1080 (8GB)</option>
      <option value="gtx1070ti">NVIDIA GeForce GTX 1070 Ti / 1070 (8GB)</option>
      <option value="gtx1060-6">NVIDIA GeForce GTX 1060 (6GB)</option>
      <option value="gtx1060-3">NVIDIA GeForce GTX 1060 (3GB)</option>
      <option value="gtx1050ti">NVIDIA GeForce GTX 1050 Ti (4GB)</option>
      <option value="gtx1050">NVIDIA GeForce GTX 1050 (2GB / 3GB)</option>
      <option value="gt1030">NVIDIA GeForce GT 1030 / GT 730</option>
    </optgroup>
    <optgroup label="🔴 AMD Radeon RX 7000 & 6000 Serisi">
      <option value="rx7900">AMD Radeon RX 7900 XTX / 7900 XT (24GB / 20GB)</option>
      <option value="rx7800">AMD Radeon RX 7800 XT / 7700 XT (16GB / 12GB)</option>
      <option value="rx7600">AMD Radeon RX 7600 XT / 7600 (16GB / 8GB)</option>
      <option value="rx6900">AMD Radeon RX 6900 XT / 6800 XT (16GB)</option>
      <option value="rx6700">AMD Radeon RX 6750 XT / 6700 XT (12GB)</option>
      <option value="rx6600">AMD Radeon RX 6650 XT / 6600 XT / 6600 (8GB)</option>
      <option value="rx6500">AMD Radeon RX 6500 XT / 6400 (4GB)</option>
    </optgroup>
    <optgroup label="🔴 AMD Radeon RX 5000 & RX 500 Serisi">
      <option value="rx5700">AMD Radeon RX 5700 XT / 5700 (8GB)</option>
      <option value="rx5600">AMD Radeon RX 5600 XT (6GB)</option>
      <option value="rx5500">AMD Radeon RX 5500 XT (8GB / 4GB)</option>
      <option value="rx590">AMD Radeon RX 590 / RX 580 (8GB)</option>
      <option value="rx580">AMD Radeon RX 580 (4GB) / RX 570 (8GB / 4GB)</option>
    </optgroup>
    <optgroup label="🔷 Intel Arc Serisi">
      <option value="arc-a770">Intel Arc A770 (16GB) / A750 (8GB)</option>
      <option value="arc-a580">Intel Arc A580 / A380</option>
    </optgroup>
    <optgroup label="💻 Dahili / Paylaşımlı Grafik">
      <option value="dahili">Dahili Ekran Kartı (Intel Iris Xe, UHD, AMD Radeon 780M / Vega)</option>
    </optgroup>
  </>
);

// ==================== RAM SEÇENEKLERİ ====================
export const RAM_OPTIONS = (
  <>
    <option value="4">4 GB DDR3 / DDR4</option>
    <option value="8">8 GB DDR4 / DDR5</option>
    <option value="12">12 GB DDR4 (8+4)</option>
    <option value="16">16 GB DDR4 / DDR5 (Çift Kanal)</option>
    <option value="24">24 GB DDR4 / DDR5</option>
    <option value="32">32 GB DDR4 / DDR5 (Oyun & Render)</option>
    <option value="48">48 GB DDR5</option>
    <option value="64">64 GB DDR4 / DDR5 (İş İstasyonu)</option>
    <option value="128">128 GB DDR5 (Yüksek Kapasite)</option>
  </>
);

// ==================== DEPOLAMA SEÇENEKLERİ ====================
export const STORAGE_OPTIONS = (
  <>
    <option value="128ssd">128 GB SSD (Temel Sistem)</option>
    <option value="256ssd">256 GB NVMe M.2 SSD</option>
    <option value="512ssd">512 GB NVMe M.2 Gen4 SSD</option>
    <option value="1tbssd">1 TB Yüksek Hızlı NVMe M.2 SSD</option>
    <option value="2tbssd">2 TB NVMe M.2 SSD</option>
    <option value="4tbssd">4 TB NVMe SSD</option>
    <option value="hibrit-512-1tb">512 GB SSD + 1 TB HDD (Hibrit Çift Disk)</option>
    <option value="hibrit-1tb-1tb">1 TB SSD + 1 TB / 2 TB HDD</option>
    <option value="500hdd">500 GB Mekanik HDD (Eski)</option>
    <option value="1tbhdd">1 TB Mekanik HDD</option>
  </>
);

// ==================== MARKA SEÇENEKLERİ (KAPSAMLI & GRUPLANDIRILMIŞ) ====================
export const BRAND_OPTIONS = (
  <>
    <optgroup label="🔥 Popüler Oyuncu Laptopu Markaları">
      <option value="Asus">ASUS (ROG Strix / Zephyrus / TUF Gaming / ZenBook)</option>
      <option value="Lenovo">Lenovo (Legion Pro / Slim / LOQ / IdeaPad Gaming)</option>
      <option value="Monster">Monster (Tulpar / Abra / Huma / Semruk)</option>
      <option value="HP">HP (Victus 15/16 / Omen 16/17 / Pavilion Gaming)</option>
      <option value="MSI">MSI (Titan / Raider / Vector / Katana / Cyborg / Thin)</option>
      <option value="Dell">Dell (Alienware / G16 / G15 / XPS / Inspiron Plus)</option>
      <option value="Acer">Acer (Predator Helios / Triton / Nitro 16/17/5)</option>
      <option value="Casper">Casper Excalibur (G911 / G870 / G770 / G900)</option>
      <option value="Gigabyte">Gigabyte / AORUS (17X / 16X / G5 / G6 / Aero)</option>
      <option value="GameGaraj">GameGaraj (Slayer 4/3 / Tracer / Hunter)</option>
    </optgroup>
    <optgroup label="🍏 Apple & Premium Ultrabook">
      <option value="Apple">Apple MacBook (Pro 14/16 / Air 13/15 / M1-M4 / Intel)</option>
      <option value="Huawei">Huawei (MateBook D16 / D15 / 16s / 14s / X Pro)</option>
      <option value="Samsung">Samsung (Galaxy Book4 / Book3 Ultra / Pro)</option>
      <option value="Microsoft">Microsoft Surface (Surface Laptop / Surface Pro)</option>
    </optgroup>
    <optgroup label="🖥️ Masaüstü Sistem & Kasa Türleri">
      <option value="Toplama">Özel Toplama Sıvı Soğutmalı Gaming Kasa</option>
      <option value="HazirSistem">Hazır Oyuncu Kasası (TUF / Aorus / MSI)</option>
      <option value="Ofis Kasa">Kurumsal / Ofis Masaüstü (HP / Dell / Lenovo ThinkCentre)</option>
      <option value="Workstation">İş İstasyonu / Render İstasyonu (Xeon / Threadripper)</option>
    </optgroup>
    <optgroup label="💼 Ofis & Diğer Markalar">
      <option value="Toshiba">Toshiba / Dynabook</option>
      <option value="Fujitsu">Fujitsu</option>
      <option value="Sony">Sony Vaio</option>
      <option value="Diğer">Diğer Marka / Özel Model</option>
    </optgroup>
  </>
);

// ==================== MARKAYA GÖRE POPÜLER ALT MODEL / SERİ LİSTESİ ====================
export const POPULAR_SERIES_BY_BRAND = {
  'Asus': [
    'ROG Strix G16 (2023-2024 - 13./14. Nesil Intel)',
    'ROG Strix G18 (18 inç Canavar)',
    'ROG Strix Scar 16 / 18 (Mini-LED / RTX 4080-4090)',
    'ROG Strix G15 / G17 (Ryzen + RTX 30/40)',
    'ROG Zephyrus G16 / G14 OLED (İnce & Güçlü)',
    'ROG Zephyrus M16 / Duo 16 Çift Ekran',
    'TUF Gaming A15 / A16 Advantage (AMD Ryzen)',
    'TUF Gaming F15 / F16 (Intel Core)',
    'TUF Dash F15 İnce Oyuncu',
    'ZenBook Pro 14 / 16 OLED / Duo',
    'VivoBook Pro 15 / 16 OLED (RTX Ekran Kartlı)',
    'VivoBook 15 / 16 Standart Ofis',
    'ExpertBook B9 / B5 Kurumsal'
  ],
  'Lenovo': [
    'Legion Pro 7i / 7 (RTX 4090 / 4080)',
    'Legion Pro 5i / 5 (RTX 4070 / 4060 / 3070)',
    'Legion Slim 7 / Slim 5 (Taşınabilir Güç)',
    'Legion 5 / 5i / 7i Klasik Seri',
    'LOQ 15IRX9 / 15IAX9 (Yeni 14./13. Nesil F/P)',
    'LOQ 16IRH8 / 15APH8 (Ryzen 7/5)',
    'IdeaPad Gaming 3 / 3i (RTX 3060/3050)',
    'ThinkPad X1 Carbon / Extreme',
    'ThinkPad P16 / P15 / P1 Mobil İş İstasyonu',
    'ThinkPad T14 / E14 / E16 / L14',
    'Yoga Pro 9i / Slim 7 Pro',
    'IdeaPad Slim 5 / 3'
  ],
  'Monster': [
    'Tulpar T7 V20 / V21 / V22 / V25 (17.3 inç RTX Serisi)',
    'Tulpar T5 V21 / V22 / V23 (15.6 inç RTX 40/30)',
    'Abra A7 V14 / V13 / V12 (17.3 inç F/P)',
    'Abra A5 V20 / V19 / V18 / V17 (15.6 inç RTX 4050/3050)',
    'Huma H5 V4 / H5 V3 / H4 (İnce İş Bilgisayarı)',
    'Semruk S7 V8 / V7 (Masaüstü Değişimi)'
  ],
  'HP': [
    'Omen 17 (RTX 4090 / 4080 / 3080)',
    'Omen 16 (RTX 4070 / 4060 / 3070)',
    'Omen Transcend 16 / 14 OLED',
    'Victus 16 Intel (i7/i5 + RTX 4070/4060/4050)',
    'Victus 16 AMD (Ryzen 7/5 + RTX 4060/4050)',
    'Victus 15 (F/P Gaming 144Hz)',
    'Pavilion Gaming 15 / 16',
    'Envy 16 / 17 / x360 Dokunmatik',
    'Spectre x360 14 / 16 Premium',
    'ProBook 450 / 455 G9 / G10',
    'EliteBook 840 / 1040',
    'HP 15s / 250 G9 / G10'
  ],
  'MSI': [
    'Titan GT77 HX (4K 144Hz Mini-LED)',
    'Raider GE78 HX / GE68 HX (RGB Işık Şeridi)',
    'Stealth 16 AI Studio / 14 Studio',
    'Vector GP68 HX / GP77 (Saf Performans)',
    'Katana 17 / 15 (B13V / B12V - RTX 40)',
    'Sword 16 HX / 17',
    'Crosshair 16 / 17 HX',
    'Cyborg 15 (A13V / A12V Şeffaf Kasa)',
    'Thin GF63 (Hafif F/P Oyuncu)',
    'Pulse 15 / 17',
    'Bravo 15 / Alpha 15 (AMD Advantage)',
    'Prestige 16 / 14 / Modern 15'
  ],
  'Dell': [
    'Alienware m18 / m16 R2 (RTX 40 Serisi)',
    'Alienware x16 / x14 Ultra İnce Tasarım',
    'Alienware m15 R7 / R6 / R5',
    'Dell G16 7630 (240Hz QHD+ i7/i9)',
    'Dell G15 5530 (RTX 4060 / 4050)',
    'Dell G15 5520 / 5515 (RTX 30 Serisi)',
    'XPS 17 9730 / XPS 15 9530 (4K OLED)',
    'XPS 14 / XPS 13 Plus',
    'Precision 7780 / 5570 / 3581 İş İstasyonu',
    'Inspiron 16 Plus / 15 3520',
    'Latitude 5440 / 5540 Kurumsal'
  ],
  'Acer': [
    'Predator Helios 18 / 16 (RTX 4080 / 4070)',
    'Predator Helios 300 / 500',
    'Predator Triton 17X / 14 İnce Güçlü',
    'Nitro 17 (17.3 inç QHD 165Hz)',
    'Nitro 16 (16 inç WQXGA 165Hz G-Sync)',
    'Nitro 5 (AN515-58 / AN515-57)',
    'Aspire 7 Gaming (RTX 3050)',
    'Swift Go 14 / Swift X 14 OLED'
  ],
  'Casper': [
    'Excalibur G911 (i9 13900HX/14900HX + RTX 4090/4080)',
    'Excalibur G870 (i7/i5 + RTX 4060 / 4050)',
    'Excalibur G770 (i7/i5 + RTX 3050 / GTX 1650)',
    'Excalibur G900 (Metal Kasa)',
    'Nirvana C500 / C600 / S500 Ofis'
  ],
  'Apple': [
    'MacBook Pro 16" (M4 Max / M3 Max / M2 Max / M1 Max)',
    'MacBook Pro 16" (Intel Core i9 8 Çekirdek)',
    'MacBook Pro 14" (M4 Pro / M3 Pro / M3 / M2 Pro / M1 Pro)',
    'MacBook Pro 13" (M2 / M1 Touch Bar)',
    'MacBook Air 15" (M3 / M2)',
    'MacBook Air 13" (M3 / M2 / M1 Retina)',
    'Mac Studio (M2 Ultra / M1 Ultra)',
    'Mac Mini (M4 / M2 Pro / M2 / M1)',
    'iMac 24" 4.5K Retina (M3 / M1)',
    'iMac 27" 5K (Intel Core i9 / i7)'
  ],
  'Gigabyte': [
    'Aorus 17X / 16X (RTX 4080/4070 240Hz)',
    'Aorus 15 / 17',
    'Gigabyte G5 KF / MF / GE (RTX 4060 / 4050)',
    'Gigabyte G6 / G6X (16 inç 165Hz)',
    'Aero 16 OLED / Aero 14'
  ],
  'GameGaraj': [
    'Slayer 4 (14. Nesil i7/i9 + RTX 4070/4060)',
    'Slayer 3 / Slayer 2',
    'Tracer / Hunter 15.6'
  ],
  'Huawei': [
    'MateBook D16 (i9 13900H / i7 13700H)',
    'MateBook D15 / D14',
    'MateBook 16s / 14s (Dokunmatik 2.5K 90Hz)',
    'MateBook X Pro (3.1K OLED Premium)'
  ],
  'Samsung': [
    'Galaxy Book4 Ultra (i9/i7 + RTX 4070)',
    'Galaxy Book4 Pro / Pro 360',
    'Galaxy Book3 Ultra (RTX 4070/4050)',
    'Galaxy Book3 Pro / 360'
  ],
  'Toplama': [
    'Özel Sıvı Soğutmalı Custom Hardline Kasa',
    'Akvaryum Tasarım Çift Camlı Gaming Kasa',
    'Temperli Cam RGB Mesh Yüksek Hava Akışlı Kasa',
    'Mini-ITX Kompakt Taşınabilir Oyuncu Kasası',
    'High-End 3D Render & İş İstasyonu Kasası'
  ],
  'HazirSistem': [
    'ASUS ROG / TUF Gaming Hazır Masaüstü',
    'MSI MPG / MAG Infinite Gaming PC',
    'Lenovo Legion Tower 7i / 5i',
    'HP Omen 45L / 40L Hazır Kasa',
    'Dell Alienware Aurora R16 / R15'
  ],
  'Ofis Kasa': [
    'HP EliteDesk / ProDesk Micro & SFF',
    'Dell OptiPlex Micro / SFF / Mini Tower',
    'Lenovo ThinkCentre Tiny / SFF',
    'Standart Midi Tower Ofis Kasası'
  ],
  'Workstation': [
    'HP Z8 / Z6 / Z4 Fury Workstation',
    'Dell Precision 7960 / 5860 Tower',
    'Lenovo ThinkStation P920 / P620',
    'AMD Threadripper Özel Render İstasyonu'
  ]
};

// ==================== EKRAN BOYUTU & YENİLEME HIZI ====================
export const SCREEN_OPTIONS = (
  <>
    <optgroup label="🎮 Yüksek Hz Oyuncu Panelleri">
      <option value="16-240hz">16" / 17.3" QHD+ 240Hz / 300Hz IPS (G-Sync)</option>
      <option value="16-165hz">16" / 15.6" WUXGA / FHD 165Hz / 180Hz IPS</option>
      <option value="15-144hz">15.6" Full HD 144Hz IPS Standart Oyuncu</option>
      <option value="17-144hz">17.3" Full HD 144Hz IPS Geniş Ekran</option>
    </optgroup>
    <optgroup label="✨ OLED & Profesyonel Renk Panelleri">
      <option value="oled-120hz">14" / 16" 2.8K / 3.2K OLED 120Hz (Canlı Renk)</option>
      <option value="retina">13.3" / 14.2" / 16.2" Apple Liquid Retina XDR</option>
      <option value="4k-uhd">15.6" / 17.3" 4K UHD (3840x2160) Render Paneli</option>
    </optgroup>
    <optgroup label="💼 Standart Ofis Panelleri">
      <option value="fhd-60hz">15.6" / 14" Full HD 60Hz / 75Hz IPS</option>
      <option value="hd-tn">15.6" HD (1366x768) TN Panel</option>
    </optgroup>
  </>
);

// ==================== KOZMETİK DURUM ====================
export const COSMETIC_OPTIONS = (
  <>
    <option value="10">10/10 - Sıfır Ayarında / Nokta Çiziksiz / Jelatinli</option>
    <option value="9">9/10 - Çok Temiz / Kılcal İzi (Kasada Ezik veya Çatlak Yok)</option>
    <option value="8">8/10 - Temiz / Normal Günlük Kullanım İzleri</option>
    <option value="7">7/10 - Kasada / Kapakta Çizikler veya Boya Aşınması</option>
    <option value="5">5/10 - Kasada Darbe / Kırık / Çatlak veya Ezik Var</option>
  </>
);

// ==================== KUTU / FATURA / GARANTİ ====================
export const BOX_INVOICE_OPTIONS = (
  <>
    <option value="tam_garanti">Kutu + Fatura + Resmi Türkiye Garantisi Devam Ediyor</option>
    <option value="tam">Kutu ve Fatura Var (Resmi Garanti Sona Ermiş)</option>
    <option value="sarj_var">Yalnızca Orijinal Şarj Cihazı / Adaptörü Var</option>
    <option value="ithalat">İthalatçı / Yurt Dışı Cihazı</option>
    <option value="yok">Kutu ve Fatura Yok (Sadece Cihaz ve Şarj)</option>
  </>
);

// ==================== BATARYA & PİL SAĞLIĞI ====================
export const BATTERY_OPTIONS = (
  <>
    <option value="mukemmel">%90 - %100 Pil Sağlığı (Orijinal Pil / Uzun Süre Gidiyor)</option>
    <option value="iyi">%80 - %89 Pil Sağlığı (Normal Kullanım / 2-4 Saat)</option>
    <option value="orta">%70 - %79 Pil Sağlığı (Pil Zayıflamış)</option>
    <option value="bitik">Batarya Değişimi Gerekli / Yalnızca Prize Takılı Çalışıyor</option>
  </>
);

// ==================== TAMİR & MÜDAHALE DURUMU ====================
export const REPAIR_OPTIONS = (
  <>
    <option value="orijinal">Hiç açılmadı, tamir görmedi (Fabrika Güvenlik Bandı Üzerinde)</option>
    <option value="upgrade">Yalnızca RAM / SSD Yükseltmesi Yapıldı (Temiz İşçilik)</option>
    <option value="bakim">Termal Macun & Fan Temizliği Bakımı Yapıldı</option>
    <option value="tamirli">Tamir Gördü (Ekran / Klavye / Anakart / Çip Onarımı Yapıldı)</option>
  </>
);

// ==================== STRES TESTİ & TERMAL SAĞLIK ====================
export const THERMAL_OPTIONS = (
  <>
    <option value="serin">FurMark & Stres Testi Başarılı (Isınma & Throttling Yok, 60-75°C)</option>
    <option value="normal">Normal Çalışma Sıcaklıkları (Oyunlarda Fan Sesi Normal)</option>
    <option value="sicak">Isınma & Fan Sesi Yüksek (Termal Macun Bakımı İstiyor)</option>
  </>
);

// ==================== APPLE ÇİP SEÇENEKLERİ ====================
export const APPLE_CHIP_OPTIONS = (
  <>
    <optgroup label="🍏 Apple M4 Serisi (En Yeni 2024-2025)">
      <option value="m4max">Apple M4 Max (14-16 Çekirdek)</option>
      <option value="m4pro">Apple M4 Pro (12-14 Çekirdek)</option>
      <option value="m4">Apple M4 Çip (10 Çekirdek)</option>
    </optgroup>
    <optgroup label="🍏 Apple M3 Serisi">
      <option value="m3max">Apple M3 Max (14-16 Çekirdek)</option>
      <option value="m3pro">Apple M3 Pro (11-12 Çekirdek)</option>
      <option value="m3">Apple M3 Çip (8 Çekirdek)</option>
    </optgroup>
    <optgroup label="🍏 Apple M2 Serisi">
      <option value="m2ultra">Apple M2 Ultra</option>
      <option value="m2max">Apple M2 Max</option>
      <option value="m2pro">Apple M2 Pro (10-12 Çekirdek)</option>
      <option value="m2">Apple M2 Çip (8 Çekirdek)</option>
    </optgroup>
    <optgroup label="🍏 Apple M1 Serisi">
      <option value="m1ultra">Apple M1 Ultra</option>
      <option value="m1max">Apple M1 Max</option>
      <option value="m1pro">Apple M1 Pro (8-10 Çekirdek)</option>
      <option value="m1">Apple M1 Çip (8 Çekirdek)</option>
    </optgroup>
    <optgroup label="⚙️ Intel Tabanlı Mac">
      <option value="intel-i9">Intel Core i9 MacBook Pro (16 inç)</option>
      <option value="intel-i7">Intel Core i7 MacBook Pro</option>
      <option value="intel-i5">Intel Core i5 MacBook Air / Pro</option>
    </optgroup>
  </>
);

// ==================== TELEFON / IPHONE SEÇENEKLERİ ====================
export const IPHONE_OPTIONS = (
  <>
    <optgroup label="📱 iPhone 16 Serisi (En Son Çıkan)">
      <option value="iphone16promax">iPhone 16 Pro Max</option>
      <option value="iphone16pro">iPhone 16 Pro</option>
      <option value="iphone16plus">iPhone 16 Plus</option>
      <option value="iphone16">iPhone 16</option>
    </optgroup>
    <optgroup label="📱 iPhone 15 Serisi">
      <option value="iphone15promax">iPhone 15 Pro Max</option>
      <option value="iphone15pro">iPhone 15 Pro</option>
      <option value="iphone15plus">iPhone 15 Plus</option>
      <option value="iphone15">iPhone 15</option>
    </optgroup>
    <optgroup label="📱 iPhone 14 Serisi">
      <option value="iphone14promax">iPhone 14 Pro Max</option>
      <option value="iphone14pro">iPhone 14 Pro</option>
      <option value="iphone14plus">iPhone 14 Plus</option>
      <option value="iphone14">iPhone 14</option>
    </optgroup>
    <optgroup label="📱 iPhone 13 Serisi">
      <option value="iphone13promax">iPhone 13 Pro Max</option>
      <option value="iphone13pro">iPhone 13 Pro</option>
      <option value="iphone13">iPhone 13</option>
      <option value="iphone13mini">iPhone 13 Mini</option>
    </optgroup>
    <optgroup label="📱 iPhone 12 & 11 Serisi">
      <option value="iphone12promax">iPhone 12 Pro Max</option>
      <option value="iphone12pro">iPhone 12 Pro</option>
      <option value="iphone12">iPhone 12</option>
      <option value="iphone12mini">iPhone 12 Mini</option>
      <option value="iphone11promax">iPhone 11 Pro Max</option>
      <option value="iphone11pro">iPhone 11 Pro</option>
      <option value="iphone11">iPhone 11</option>
    </optgroup>
    <optgroup label="📱 iPhone XS, XR, X & SE">
      <option value="iphonexsmax">iPhone XS Max</option>
      <option value="iphonexs">iPhone XS</option>
      <option value="iphonexr">iPhone XR</option>
      <option value="iphonex">iPhone X</option>
      <option value="iphonese3">iPhone SE (3. Nesil - 2022)</option>
      <option value="iphonese2">iPhone SE (2. Nesil - 2020)</option>
      <option value="iphone8plus">iPhone 8 Plus / 8</option>
    </optgroup>
    <optgroup label="🤖 Samsung Galaxy & Android">
      <option value="samsung-s24ultra">Samsung Galaxy S24 Ultra</option>
      <option value="samsung-s24plus">Samsung Galaxy S24 / S24+</option>
      <option value="samsung-s23ultra">Samsung Galaxy S23 Ultra</option>
      <option value="samsung-s23">Samsung Galaxy S23 / S23 FE</option>
      <option value="samsung-zfold">Samsung Galaxy Z Fold / Z Flip</option>
      <option value="diger-android">Diğer Android Telefon</option>
    </optgroup>
  </>
);

// ==================== OYUN KONSOLU SEÇENEKLERİ ====================
export const CONSOLE_OPTIONS = (
  <>
    <optgroup label="🎮 Sony PlayStation 5">
      <option value="ps5-pro">Sony PlayStation 5 Pro (2TB)</option>
      <option value="ps5-slim-disk">Sony PlayStation 5 Slim (Diskli Sürüm)</option>
      <option value="ps5-slim-digital">Sony PlayStation 5 Slim (Dijital Sürüm)</option>
      <option value="ps5-fat-disk">Sony PlayStation 5 Fat (Diskli Sürüm)</option>
      <option value="ps5-fat-digital">Sony PlayStation 5 Fat (Dijital Sürüm)</option>
    </optgroup>
    <optgroup label="🎮 Sony PlayStation 4">
      <option value="ps4-pro">Sony PlayStation 4 Pro (1TB - 4K)</option>
      <option value="ps4-slim">Sony PlayStation 4 Slim (500GB / 1TB)</option>
      <option value="ps4-fat">Sony PlayStation 4 Fat Kasa</option>
    </optgroup>
    <optgroup label="💚 Microsoft Xbox Serisi">
      <option value="xbox-x">Microsoft Xbox Series X (1TB - 4K 120FPS)</option>
      <option value="xbox-s">Microsoft Xbox Series S (512GB / 1TB)</option>
      <option value="xbox-one-x">Microsoft Xbox One X</option>
      <option value="xbox-one-s">Microsoft Xbox One S</option>
    </optgroup>
    <optgroup label="🔴 Nintendo Switch">
      <option value="switch-oled">Nintendo Switch OLED</option>
      <option value="switch-v2">Nintendo Switch V2</option>
      <option value="switch-lite">Nintendo Switch Lite</option>
    </optgroup>
  </>
);

// ==================== ETİKET YARDIMCILARI ====================
export const getHardwareLabel = (type, val) => {
  if (!val) return '';
  const labels = {
    // CPU
    'ultra9': 'Intel Core Ultra 9',
    'ultra7': 'Intel Core Ultra 7',
    'ultra5': 'Intel Core Ultra 5',
    'i9-14': 'Intel Core i9 14. Nesil',
    'i7-14': 'Intel Core i7 14. Nesil',
    'i5-14': 'Intel Core i5 14. Nesil',
    'i3-14': 'Intel Core i3 14. Nesil',
    'i9-13': 'Intel Core i9 13. Nesil',
    'i7-13': 'Intel Core i7 13. Nesil',
    'i5-13': 'Intel Core i5 13. Nesil',
    'i3-13': 'Intel Core i3 13. Nesil',
    'i9-12': 'Intel Core i9 12. Nesil',
    'i7-12': 'Intel Core i7 12. Nesil',
    'i5-12': 'Intel Core i5 12. Nesil',
    'i3-12': 'Intel Core i3 12. Nesil',
    'i9-11': 'Intel Core i9 11. Nesil',
    'i7-11': 'Intel Core i7 11. Nesil',
    'i5-11': 'Intel Core i5 11. Nesil',
    'i3-11': 'Intel Core i3 11. Nesil',
    'i7-10': 'Intel Core i7 10. Nesil',
    'i5-10': 'Intel Core i5 10. Nesil',
    'i3-10': 'Intel Core i3 10. Nesil',
    'i7-9': 'Intel Core i7 9. Nesil',
    'i5-9': 'Intel Core i5 9. Nesil',
    'i7-8': 'Intel Core i7 8. Nesil',
    'i5-8': 'Intel Core i5 8. Nesil',
    'i3-8': 'Intel Core i3 8. Nesil',
    'i7-7': 'Intel Core i7 7. Nesil',
    'i5-7': 'Intel Core i5 7. Nesil',
    'i7-6': 'Intel Core i7 6. Nesil',
    'i5-6': 'Intel Core i5 6. Nesil',
    'i3-7': 'Intel Core i3 6./7. Nesil',
    'i7-4': 'Intel Core i7 4. Nesil',
    'i5-4': 'Intel Core i5 4. Nesil',
    'i3-4': 'Intel Core i3 4. Nesil',
    'celeron': 'Intel Celeron',
    'pentium': 'Intel Pentium',
    'xeon': 'Intel Xeon',
    'r9-9': 'AMD Ryzen 9 9000 Serisi',
    'r7-9': 'AMD Ryzen 7 9000 / 8000',
    'r5-9': 'AMD Ryzen 5 9000 / 8000',
    'r9-7': 'AMD Ryzen 9 7000 Serisi',
    'r7-7': 'AMD Ryzen 7 7000 Serisi',
    'r5-7': 'AMD Ryzen 5 7000 Serisi',
    'r9-5': 'AMD Ryzen 9 5000 Serisi',
    'r7-5': 'AMD Ryzen 7 5000 Serisi',
    'r5-5': 'AMD Ryzen 5 5000 Serisi',
    'r3-5': 'AMD Ryzen 3 5000 Serisi',
    'r7-4': 'AMD Ryzen 7 4000 Serisi',
    'r5-4': 'AMD Ryzen 5 4000 Serisi',
    'r7-3': 'AMD Ryzen 7 3000 Serisi',
    'r5-3': 'AMD Ryzen 5 3000 Serisi',
    'r3-3': 'AMD Ryzen 3 3000 Serisi',
    'r7-2': 'AMD Ryzen 7 2000 Serisi',
    'r5-2': 'AMD Ryzen 5 2000 Serisi',
    'r5-1': 'AMD Ryzen 5 1000 Serisi',
    'r3-1': 'AMD Ryzen 3 1000 Serisi',
    'athlon': 'AMD Athlon / A-Serisi',

    // GPU
    'rtx4090': 'RTX 4090 (24GB)',
    'rtx4080': 'RTX 4080 / 4080 Super',
    'rtx4070ti': 'RTX 4070 Ti / Super',
    'rtx4070': 'RTX 4070 / Super',
    'rtx4060ti': 'RTX 4060 Ti',
    'rtx4060': 'RTX 4060 (8GB)',
    'rtx4050': 'RTX 4050 (6GB)',
    'rtx3090': 'RTX 3090 (24GB)',
    'rtx3080': 'RTX 3080 / 3080 Ti',
    'rtx3070ti': 'RTX 3070 Ti (8GB)',
    'rtx3070': 'RTX 3070 (8GB)',
    'rtx3060ti': 'RTX 3060 Ti (8GB)',
    'rtx3060': 'RTX 3060 (12GB/6GB)',
    'rtx3050ti': 'RTX 3050 Ti',
    'rtx3050': 'RTX 3050 (8GB/4GB)',
    'rtx2080': 'RTX 2080 / Super',
    'rtx2070': 'RTX 2070 / Super',
    'rtx2060s': 'RTX 2060 Super',
    'rtx2060': 'RTX 2060 (6GB)',
    'gtx1660ti': 'GTX 1660 Ti (6GB)',
    'gtx1660': 'GTX 1660 Super / 1660',
    'gtx1650s': 'GTX 1650 Super',
    'gtx1650': 'GTX 1650 (4GB)',
    'gtx1080ti': 'GTX 1080 Ti',
    'gtx1080': 'GTX 1080 (8GB)',
    'gtx1070ti': 'GTX 1070 / 1070 Ti',
    'gtx1060-6': 'GTX 1060 (6GB)',
    'gtx1060-3': 'GTX 1060 (3GB)',
    'gtx1050ti': 'GTX 1050 Ti',
    'gtx1050': 'GTX 1050',
    'gt1030': 'GT 1030 / GT 730',
    'rx7900': 'RX 7900 XTX / XT',
    'rx7800': 'RX 7800 XT / 7700 XT',
    'rx7600': 'RX 7600 / XT',
    'rx6900': 'RX 6900 XT / 6800 XT',
    'rx6700': 'RX 6700 XT / 6750 XT',
    'rx6600': 'RX 6600 / 6650 XT',
    'rx6500': 'RX 6500 XT',
    'rx5700': 'RX 5700 XT',
    'rx5600': 'RX 5600 XT',
    'rx5500': 'RX 5500 XT',
    'rx590': 'RX 590 / RX 580',
    'rx580': 'RX 580 / RX 570',
    'arc-a770': 'Intel Arc A770 / A750',
    'arc-a580': 'Intel Arc A580 / A380',
    'dahili': 'Dahili Ekran Kartı (APU / Iris Xe)'
  };
  return labels[val] || val;
};

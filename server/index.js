import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// Serverless uyumluluğu için URL normalizasyonu (Vercel /api prefixini kırparsa tamamlar)
app.use((req, res, next) => {
  if (!req.url.startsWith('/api') && !req.url.startsWith('/assets') && req.url !== '/' && !req.url.includes('.')) {
    const apiRoutes = ['products', 'blogs', 'valuations', 'services', 'settings', 'stats', 'auth'];
    const firstSegment = req.url.replace(/^\/+/, '').split('/')[0]?.split('?')[0];
    if (apiRoutes.includes(firstSegment)) {
      req.url = '/api' + (req.url.startsWith('/') ? req.url : '/' + req.url);
    }
  }
  next();
});

const DATA_DIR = path.join(__dirname, 'data');

// In-memory ve dosya sistemi senkronize önbellek
const memoryStore = {};

// Yardımcı dosya okuma / yazma fonksiyonları
function readJson(filename) {
  if (memoryStore[filename]) {
    return memoryStore[filename];
  }
  const pathsToTry = [
    path.join('/tmp', filename),
    path.join(DATA_DIR, filename),
    path.join(process.cwd(), 'server', 'data', filename),
    path.join(process.cwd(), 'data', filename)
  ];
  const filePath = pathsToTry.find(p => {
    try {
      return fs.existsSync(p);
    } catch {
      return false;
    }
  });
  if (!filePath) {
    return [];
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    memoryStore[filename] = parsed;
    return parsed;
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return [];
  }
}

function writeJson(filename, data) {
  memoryStore[filename] = data;
  const pathsToTry = [
    path.join(DATA_DIR, filename),
    path.join(process.cwd(), 'server', 'data', filename),
    path.join('/tmp', filename)
  ];
  for (const p of pathsToTry) {
    try {
      const dir = path.dirname(p);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
      return true;
    } catch {
      // Bir sonraki yazılabilir dizine (/tmp vs.) geç
    }
  }
  return true;
}

// ==========================================
// 1. ÜRÜNLER (PRODUCTS) API
// ==========================================

app.get('/api/products', (req, res) => {
  let products = readJson('products.json');
  const { category, search, minPrice, maxPrice, status, sort } = req.query;

  if (category && category !== 'all' && category !== 'tumu') {
    products = products.filter(p => p.category === category);
  }

  if (status && status !== 'all') {
    products = products.filter(p => p.status === status);
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    products = products.filter(p => {
      const inTitle = p.title?.toLowerCase().includes(q);
      const inBrand = p.brand?.toLowerCase().includes(q);
      const inSku = p.sku?.toLowerCase().includes(q);
      const inSpecs = p.specs ? Object.values(p.specs).some(v => String(v).toLowerCase().includes(q)) : false;
      return inTitle || inBrand || inSku || inSpecs;
    });
  }

  if (minPrice) {
    products = products.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    products = products.filter(p => p.price <= Number(maxPrice));
  }

  if (sort === 'price-asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    products.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  res.json(products);
});

app.get('/api/products/:identifier', (req, res) => {
  const products = readJson('products.json');
  const { identifier } = req.params;
  const product = products.find(p => String(p.id) === identifier || p.slug === identifier);

  if (!product) {
    return res.status(404).json({ error: 'Ürün bulunamadı' });
  }

  res.json(product);
});

app.post('/api/products', (req, res) => {
  const products = readJson('products.json');
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.price) {
    return res.status(400).json({ error: 'Ürün başlığı ve fiyat zorunludur' });
  }

  const maxId = products.reduce((max, p) => Math.max(max, p.id || 0), 0);
  newProduct.id = maxId + 1;
  newProduct.sku = newProduct.sku || `KB-${newProduct.id + 100}`;
  newProduct.createdAt = new Date().toISOString();
  newProduct.status = newProduct.status || 'satilik';
  if (!newProduct.slug) {
    newProduct.slug = newProduct.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4);
  }

  products.unshift(newProduct);
  writeJson('products.json', products);

  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const products = readJson('products.json');
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Güncellenecek ürün bulunamadı' });
  }

  products[index] = { ...products[index], ...req.body, id };
  writeJson('products.json', products);

  res.json(products[index]);
});

app.delete('/api/products/:id', (req, res) => {
  let products = readJson('products.json');
  const id = Number(req.params.id);
  const filtered = products.filter(p => p.id !== id);

  if (filtered.length === products.length) {
    return res.status(404).json({ error: 'Silinecek ürün bulunamadı' });
  }

  writeJson('products.json', filtered);
  res.json({ success: true, message: 'Ürün başarıyla silindi' });
});

// ==========================================
// 2. BLOG YÖNETİMİ (BLOGS) API
// ==========================================

// Tüm blog yazılarını getir (arama ve yayın durumu destekli)
app.get('/api/blogs', (req, res) => {
  let blogs = readJson('blogs.json');
  const { search, category, onlyPublished } = req.query;

  if (onlyPublished === 'true') {
    blogs = blogs.filter(b => b.published !== false);
  }

  if (category && category !== 'all') {
    blogs = blogs.filter(b => b.category?.toLowerCase() === category.toLowerCase());
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    blogs = blogs.filter(b => 
      b.title?.toLowerCase().includes(q) || 
      b.excerpt?.toLowerCase().includes(q) ||
      b.content?.toLowerCase().includes(q)
    );
  }

  blogs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  res.json(blogs);
});

// Tek blog yazısı getir (id veya slug ile)
app.get('/api/blogs/:identifier', (req, res) => {
  const blogs = readJson('blogs.json');
  const { identifier } = req.params;
  const blog = blogs.find(b => String(b.id) === identifier || b.slug === identifier);

  if (!blog) {
    return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
  }

  res.json(blog);
});

// Yeni blog yazısı ekle (Admin)
app.post('/api/blogs', (req, res) => {
  const blogs = readJson('blogs.json');
  const newBlog = req.body;

  if (!newBlog.title) {
    return res.status(400).json({ error: 'Blog başlığı zorunludur' });
  }

  const maxId = blogs.reduce((max, b) => Math.max(max, b.id || 0), 0);
  newBlog.id = maxId + 1;
  newBlog.createdAt = new Date().toISOString();
  newBlog.published = newBlog.published !== false;
  newBlog.readTime = newBlog.readTime || '4 dk okuma';
  newBlog.author = newBlog.author || 'Konya Bilgisayar';
  
  if (!newBlog.slug) {
    newBlog.slug = newBlog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4);
  }

  blogs.unshift(newBlog);
  writeJson('blogs.json', blogs);

  res.status(201).json(newBlog);
});

// Blog yazısı güncelle (Admin)
app.put('/api/blogs/:id', (req, res) => {
  const blogs = readJson('blogs.json');
  const id = Number(req.params.id);
  const index = blogs.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Güncellenecek blog yazısı bulunamadı' });
  }

  blogs[index] = { ...blogs[index], ...req.body, id, updatedAt: new Date().toISOString() };
  writeJson('blogs.json', blogs);

  res.json(blogs[index]);
});

// Blog yazısı sil (Admin)
app.delete('/api/blogs/:id', (req, res) => {
  let blogs = readJson('blogs.json');
  const id = Number(req.params.id);
  const filtered = blogs.filter(b => b.id !== id);

  if (filtered.length === blogs.length) {
    return res.status(404).json({ error: 'Silinecek blog bulunamadı' });
  }

  writeJson('blogs.json', filtered);
  res.json({ success: true, message: 'Blog yazısı silindi' });
});

// ==========================================
// 3. CİHAZ DEĞERLEME (VALUATIONS) API
// ==========================================

app.get('/api/valuations', (req, res) => {
  const valuations = readJson('valuations.json');
  res.json(valuations);
});

app.post('/api/valuations', (req, res) => {
  const valuations = readJson('valuations.json');
  const requestData = req.body;

  const maxId = valuations.reduce((max, v) => Math.max(max, v.id || 0), 0);
  const newRecord = {
    id: maxId + 1,
    ...requestData,
    status: requestData.status || 'beklemede',
    createdAt: new Date().toISOString()
  };

  valuations.unshift(newRecord);
  writeJson('valuations.json', valuations);

  res.status(201).json({ success: true, record: newRecord });
});

app.put('/api/valuations/:id', (req, res) => {
  const valuations = readJson('valuations.json');
  const id = Number(req.params.id);
  const index = valuations.findIndex(v => v.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Kayıt bulunamadı' });
  }

  valuations[index] = { ...valuations[index], ...req.body, id };
  writeJson('valuations.json', valuations);

  res.json(valuations[index]);
});

app.delete('/api/valuations/:id', (req, res) => {
  let valuations = readJson('valuations.json');
  const id = Number(req.params.id);
  const filtered = valuations.filter(v => v.id !== id);

  writeJson('valuations.json', filtered);
  res.json({ success: true });
});

// ==========================================
// 4. TEKNİK SERVİS (SERVICES) API
// ==========================================

app.get('/api/services', (req, res) => {
  const services = readJson('services.json');
  res.json(services);
});

app.post('/api/services', (req, res) => {
  const services = readJson('services.json');
  const requestData = req.body;

  const maxId = services.reduce((max, s) => Math.max(max, s.id || 0), 0);
  const newTicket = {
    id: maxId + 1,
    ...requestData,
    status: requestData.status || 'beklemede',
    createdAt: new Date().toISOString()
  };

  services.unshift(newTicket);
  writeJson('services.json', services);

  res.status(201).json({ success: true, ticket: newTicket });
});

app.put('/api/services/:id', (req, res) => {
  const services = readJson('services.json');
  const id = Number(req.params.id);
  const index = services.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Servis kaydı bulunamadı' });
  }

  services[index] = { ...services[index], ...req.body, id };
  writeJson('services.json', services);

  res.json(services[index]);
});

app.delete('/api/services/:id', (req, res) => {
  let services = readJson('services.json');
  const id = Number(req.params.id);
  const filtered = services.filter(s => s.id !== id);

  writeJson('services.json', filtered);
  res.json({ success: true });
});

// ==========================================
// 5. MAĞAZA VE SİTE AYARLARI (SETTINGS) API
// ==========================================

app.get('/api/settings', (req, res) => {
  const settings = readJson('settings.json');
  res.json(settings);
});

app.put('/api/settings', (req, res) => {
  const current = readJson('settings.json');
  const updated = { ...current, ...req.body };
  writeJson('settings.json', updated);
  res.json(updated);
});

// ==========================================
// 6. YÖNETİCİ GİRİŞİ (AUTH) VE İSTATİSTİKLER (STATS)
// ==========================================

app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (password === 'konya123' || password === 'admin123' || password === '123456') {
    return res.json({ success: true, token: 'kb-admin-token-' + Date.now(), user: 'Yönetici' });
  }
  return res.status(401).json({ success: false, error: 'Hatalı yönetici şifresi' });
});

app.get('/api/stats', (req, res) => {
  const products = readJson('products.json');
  const blogs = readJson('blogs.json');
  const valuations = readJson('valuations.json');
  const services = readJson('services.json');

  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'satilik').length;
  const soldProducts = products.filter(p => p.status === 'satildi').length;
  const totalBlogs = blogs.length;
  const pendingValuations = valuations.filter(v => v.status === 'beklemede').length;
  const pendingServices = services.filter(s => s.status === 'beklemede' || s.status === 'islemde').length;

  res.json({
    totalProducts,
    activeProducts,
    soldProducts,
    totalBlogs,
    pendingValuations,
    pendingServices
  });
});

// ==========================================
// 7. STATİK DOSYALAR & SPA WILDCARD ROUTING
// ==========================================
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);

if (isDirectRun && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[Konya Bilgisayar API Server] Running on http://localhost:${PORT}`);
  });
}

export default app;

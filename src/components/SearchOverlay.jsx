import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Laptop, 
  Monitor, 
  Smartphone, 
  Gamepad2, 
  Cpu, 
  BookOpen, 
  Sparkles,
  TrendingUp,
  Tag,
  Clock,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const POPULAR_SEARCH_TAGS = [
  'RTX 4060',
  'MacBook Air M2',
  'ASUS TUF Gaming',
  'Lenovo Legion',
  'PlayStation 5',
  'i7 13. Nesil',
  'iPhone 13',
  '32GB RAM'
];

export default function SearchOverlay({ isOpen, onClose, navigate, products = [], blogs = [] }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredProducts = q
    ? products.filter(p => {
        return (
          p.title?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          (p.specs && Object.values(p.specs).some(v => String(v).toLowerCase().includes(q)))
        );
      }).slice(0, 6)
    : [];

  const filteredBlogs = q
    ? blogs.filter(b => {
        return (
          b.title?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.content?.toLowerCase().includes(q)
        );
      }).slice(0, 3)
    : [];

  const handleSelectProduct = (product) => {
    navigate('urun-detay', { id: product.id });
    onClose();
  };

  const handleSelectBlog = (blog) => {
    navigate('blog-detay', { slug: blog.slug || blog.id });
    onClose();
  };

  const handleCategorySearch = (cat) => {
    navigate('urunler', { category: cat });
    onClose();
  };

  const totalResults = filteredProducts.length + filteredBlogs.length;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '50px 16px',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '720px',
          background: 'rgba(255, 255, 255, 0.98)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px -10px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(226, 232, 240, 0.9)',
          overflow: 'hidden',
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Arama Başlığı & Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '22px 26px',
          borderBottom: '1px solid #f1f5f9',
          background: '#ffffff'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(3, 105, 161, 0.06) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284c7',
            flexShrink: 0
          }}>
            <Search size={22} />
          </div>

          <input 
            type="text" 
            placeholder="Laptop, MacBook, RTX 4060, PlayStation, iPhone ara..." 
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.12rem',
              fontWeight: 600,
              background: 'transparent',
              color: '#0f172a',
              letterSpacing: '-0.01em'
            }}
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              style={{
                background: '#f1f5f9',
                border: 'none',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#64748b',
                cursor: 'pointer'
              }}
            >
              Temizle
            </button>
          )}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#94a3b8',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '3px 8px',
              borderRadius: '6px',
              letterSpacing: '0.05em'
            }}>
              ESC
            </span>

            <button 
              onClick={onClose}
              aria-label="Kapat"
              style={{
                background: '#f1f5f9',
                border: 'none',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#e2e8f0';
                e.currentTarget.style.color = '#0f172a';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Sonuçlar Alanı */}
        <div style={{ maxHeight: '480px', overflowY: 'auto', padding: '20px 26px', background: '#fafbfc' }}>
          {q === '' ? (
            <div>
              {/* 1. Hızlı Kategoriler */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Sparkles size={14} color="#0284c7" />
                  Hızlı Kategoriler
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                  Tek tıkla filtreleyin
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <QuickCatCard 
                  icon={<Laptop size={20} />} 
                  title="Oyuncu Laptopları" 
                  desc="RTX 40 / 30 Serisi Gaming"
                  badge="Popüler"
                  gradient="linear-gradient(135deg, #0284c7 0%, #0369a1 100%)"
                  onClick={() => handleCategorySearch('laptop')} 
                />
                <QuickCatCard 
                  icon={<Monitor size={20} />} 
                  title="Masaüstü Kasalar" 
                  desc="RGB Gaming & Ofis PC"
                  badge="Yüksek Güç"
                  gradient="linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                  onClick={() => handleCategorySearch('masaustu')} 
                />
                <QuickCatCard 
                  icon={<Laptop size={20} />} 
                  title="MacBook & Apple" 
                  desc="M1 / M2 / M3 / M4 Retina"
                  badge="Apple"
                  gradient="linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                  onClick={() => handleCategorySearch('macbook')} 
                />
                <QuickCatCard 
                  icon={<Gamepad2 size={20} />} 
                  title="PlayStation Konsol" 
                  desc="PS5, PS4 Pro & Aksesuar"
                  badge="Oyun"
                  gradient="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)"
                  onClick={() => handleCategorySearch('konsol')} 
                />
              </div>

              {/* 2. Popüler Arama Etiketleri */}
              <div style={{
                paddingTop: '18px',
                borderTop: '1px solid #e2e8f0'
              }}>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <TrendingUp size={14} color="#16a34a" />
                  En Çok Aranan Donanımlar
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {POPULAR_SEARCH_TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#334155',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = '#0284c7';
                        e.currentTarget.style.color = '#0284c7';
                        e.currentTarget.style.background = 'rgba(2, 132, 199, 0.05)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.color = '#334155';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                    >
                      <Tag size={12} style={{ opacity: 0.6 }} />
                      <span>{tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Cihaz Satış Hızlı Yönlendirme Kartı */}
              <div 
                onClick={() => { navigate('degerleme'); onClose(); }}
                style={{
                  marginTop: '20px',
                  padding: '14px 18px',
                  background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(2, 132, 199, 0.08) 100%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(22, 163, 74, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(22, 163, 74, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#16a34a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>
                      Eski Cihazınızı Satmak mı İstiyorsunuz?
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Laptop, PC, Apple veya konsolunuz için anında WhatsApp nakit teklifi alın.
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  color: '#16a34a',
                  whiteSpace: 'nowrap'
                }}>
                  <span>Teklif Al</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ) : totalResults > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Ürün Sonuçları */}
              {filteredProducts.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>Satılık Cihazlar ({filteredProducts.length})</span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Ürüne tıklayarak inceleyin</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {filteredProducts.map(p => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelectProduct(p)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '12px 14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = '#0284c7';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(2, 132, 199, 0.1)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.04)';
                        }}
                      >
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          style={{
                            width: '56px',
                            height: '56px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            background: '#f8fafc',
                            border: '1px solid #f1f5f9',
                            flexShrink: 0
                          }} 
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontWeight: 700,
                            fontSize: '0.94rem',
                            color: '#0f172a',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginBottom: '3px'
                          }}>
                            {p.title}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#64748b' }}>
                            <span style={{
                              background: '#f1f5f9',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              fontWeight: 700,
                              color: '#475569'
                            }}>
                              {p.categoryName || p.category?.toUpperCase()}
                            </span>
                            {p.specs?.cpu && <span>• {p.specs.cpu}</span>}
                            {p.specs?.gpu && <span>• {p.specs.gpu}</span>}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{
                            fontWeight: 900,
                            color: '#0284c7',
                            fontSize: '1.05rem',
                            whiteSpace: 'nowrap',
                            letterSpacing: '-0.02em'
                          }}>
                            {Number(p.price).toLocaleString('tr-TR')} TL
                          </div>
                          <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 700 }}>
                            Hemen İncele →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Sonuçları */}
              {filteredBlogs.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px'
                  }}>
                    Donanım & Teknoloji Rehberi ({filteredBlogs.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {filteredBlogs.map(b => (
                      <div 
                        key={b.id}
                        onClick={() => handleSelectBlog(b)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          background: '#ffffff',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = '#0284c7';
                          e.currentTarget.style.background = 'rgba(2, 132, 199, 0.03)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.background = '#ffffff';
                        }}
                      >
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(2, 132, 199, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0284c7',
                          flexShrink: 0
                        }}>
                          <BookOpen size={16} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {b.title}
                          </div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                            {b.category} · {b.readTime || '4 dk okuma'}
                          </div>
                        </div>
                        <ChevronRight size={16} style={{ color: '#94a3b8' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
                color: '#94a3b8'
              }}>
                <Search size={24} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '6px' }}>
                "{query}" ile ilgili sonuç bulunamadı
              </div>
              <p style={{ fontSize: '0.86rem', color: '#64748b', maxWidth: '380px', margin: '0 auto 20px' }}>
                Farklı bir model adı veya parça türü deneyebilir ya da WhatsApp hattımızdan doğrudan stok sorabilirsiniz.
              </p>
              <a
                href={`https://wa.me/905510454255?text=Merhaba%2C%20web%20sitenizde%20${encodeURIComponent(query)}%20ar%C4%B1yordum.%20Stok%20veya%20fiyat%20bilgisi%20alabilir%20miyim%3F`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa btn-sm"
                style={{ fontWeight: 800, fontSize: '0.84rem' }}
              >
                <WhatsAppIcon size={16} /> WhatsApp'tan Stok Sor (0551 045 42 55)
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickCatCard({ icon, title, desc, badge, gradient, onClick }) {
  return (
    <button 
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        borderRadius: '14px',
        border: '1px solid #e2e8f0',
        background: '#ffffff',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#0284c7';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(2, 132, 199, 0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e2e8f0';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '12px',
        background: gradient,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '6px',
          marginBottom: '2px'
        }}>
          <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </span>
          {badge && (
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              background: '#f1f5f9',
              color: '#475569',
              padding: '2px 6px',
              borderRadius: '6px',
              flexShrink: 0
            }}>
              {badge}
            </span>
          )}
        </div>
        <div style={{ fontSize: '0.74rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {desc}
        </div>
      </div>
    </button>
  );
}

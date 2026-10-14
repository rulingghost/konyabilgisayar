import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Laptop, Monitor, Tablet, Gamepad2, BookOpen, Calendar } from 'lucide-react';

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
    <div className="modal-overlay" onClick={onClose}>
      <div 
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
          animation: 'slideUp 0.25s ease'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Arama Başlığı & Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)'
        }}>
          <Search size={22} style={{ color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Laptop, MacBook, RTX 4060, PlayStation, termal macun ara..." 
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.15rem',
              fontWeight: 500,
              background: 'transparent',
              color: 'var(--heading)'
            }}
          />
          <button 
            onClick={onClose}
            style={{
              background: 'var(--surface-2)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Sonuçlar Alanı */}
        <div style={{ maxHeight: '460px', overflowY: 'auto', padding: '16px 24px' }}>
          {q === '' ? (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Hızlı Kategoriler
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <QuickCatBtn icon={<Laptop size={18} />} title="Oyuncu Laptopları" onClick={() => handleCategorySearch('laptop')} />
                <QuickCatBtn icon={<Monitor size={18} />} title="Masaüstü Kasalar" onClick={() => handleCategorySearch('masaustu')} />
                <QuickCatBtn icon={<Laptop size={18} />} title="MacBook & Apple" onClick={() => handleCategorySearch('macbook')} />
                <QuickCatBtn icon={<Gamepad2 size={18} />} title="PlayStation Konsol" onClick={() => handleCategorySearch('konsol')} />
              </div>
            </div>
          ) : totalResults > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Ürün Sonuçları */}
              {filteredProducts.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    İkinci El Ürünler ({filteredProducts.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {filteredProducts.map(p => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelectProduct(p)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '10px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                          cursor: 'pointer',
                          transition: 'background var(--tr-fast)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
                        onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
                      >
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} 
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 600, fontSize: '0.94rem', color: 'var(--heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {p.title}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            {p.categoryName || p.category}
                          </div>
                        </div>
                        <div style={{ fontWeight: 800, color: 'var(--primary-bright)', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                          {Number(p.price).toLocaleString('tr-TR')} TL
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Sonuçları */}
              {filteredBlogs.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Rehber & Blog Yazıları ({filteredBlogs.length})
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
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                          background: 'var(--surface-2)',
                          cursor: 'pointer'
                        }}
                      >
                        <BookOpen size={18} style={{ color: 'var(--primary-bright)', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--heading)' }}>
                            {b.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {b.category} · {b.readTime || '4 dk okuma'}
                          </div>
                        </div>
                        <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '36px 0', color: 'var(--text-muted)' }}>
              "{query}" ile eşleşen ürün veya rehber yazısı bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickCatBtn({ icon, title, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 14px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)',
        background: 'var(--surface-2)',
        cursor: 'pointer',
        fontSize: '0.92rem',
        fontWeight: 600,
        color: 'var(--heading)',
        textAlign: 'left'
      }}
    >
      <span style={{ color: 'var(--primary-bright)' }}>{icon}</span>
      <span>{title}</span>
    </button>
  );
}

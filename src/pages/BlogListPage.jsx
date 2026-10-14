import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Search, Sparkles } from 'lucide-react';

export default function BlogListPage({ blogs = [], navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tüm Yazılar' },
    { id: 'Rehber & Tavsiye', label: 'Rehber & Tavsiye' },
    { id: 'Teknik Servis', label: 'Teknik Servis' },
    { id: 'Apple & Mac', label: 'Apple & Mac' }
  ];

  const filteredBlogs = blogs.filter(b => {
    if (activeCategory !== 'all' && b.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = b.title?.toLowerCase().includes(q);
      const inExcerpt = b.excerpt?.toLowerCase().includes(q);
      if (!inTitle && !inExcerpt) return false;
    }
    return true;
  });

  return (
    <div style={{ padding: '50px 0 80px', background: 'var(--bg)' }}>
      <div className="container">
        {/* Başlık */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
            <BookOpen size={14} /> Teknoloji Rehberi & Blog
          </span>
          <h1 style={{ fontSize: '2.3rem', fontWeight: 900, color: 'var(--heading)', marginBottom: '12px' }}>
            Konya Bilgisayar Blog
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            İkinci el bilgisayar alım satımı, donanım testleri, termal bakım ipuçları ve teknoloji rehberleri.
          </p>
        </div>

        {/* Filtre ve Arama Çubuğu */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Kategori Butonları */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--primary-bright)' : 'var(--border)',
                  background: activeCategory === cat.id ? 'var(--primary-bright)' : '#ffffff',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--tr-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Arama Input */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 14px',
            width: '260px'
          }}>
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Blog yazısı ara..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                width: '100%',
                fontSize: '0.88rem'
              }}
            />
          </div>
        </div>

        {/* Blog Kartları Grid */}
        {filteredBlogs.length === 0 ? (
          <div style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 24px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--heading)', fontWeight: 700 }}>
              Aramanıza uygun blog yazısı bulunamadı.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {filteredBlogs.map(blog => (
              <article 
                key={blog.id}
                onClick={() => navigate('blog-detay', { slug: blog.slug || blog.id })}
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
                className="blog-card-hover"
              >
                <div style={{ position: 'relative', height: '210px', background: '#f1f5f9' }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
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
                    {blog.category}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {blog.readTime || '4 dk okuma'}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--heading)',
                    lineHeight: 1.35,
                    marginBottom: '12px',
                    minHeight: '50px'
                  }}>
                    {blog.title}
                  </h2>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flex: 1
                  }}>
                    {blog.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    color: 'var(--primary-bright)',
                    marginTop: 'auto'
                  }}>
                    Yazıyı Oku <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .blog-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg) !important;
          border-color: rgba(0, 89, 191, 0.3) !important;
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function BlogDetailPage({ slug, blogs = [], navigate, settings }) {
  const blog = blogs.find(b => b.slug === slug || String(b.id) === String(slug)) || blogs[0];

  if (!blog) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Blog yazısı bulunamadı</h2>
        <button onClick={() => navigate('blog')} className="btn btn-primary" style={{ marginTop: '16px' }}>
          Tüm Yazılara Dön
        </button>
      </div>
    );
  }

  const handleShareWhatsApp = () => {
    const text = `${blog.title} - Konya Bilgisayar Blog: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const related = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  // Paragrafları ve başlıkları render etme
  const renderFormattedContent = (content) => {
    if (!content) return null;
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={idx} />;
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--heading)', margin: '24px 0 10px' }}>
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--heading)', margin: '30px 0 12px' }}>
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        return (
          <li key={idx} style={{ marginLeft: '20px', marginBottom: '8px', color: 'var(--text)', fontSize: '1.02rem', lineHeight: 1.7 }}>
            {trimmed.replace(/^[-•]\s*/, '')}
          </li>
        );
      }
      return (
        <p key={idx} style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '16px' }}>
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div style={{ padding: '40px 0 80px', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Geri Dön Butonu */}
        <button 
          onClick={() => navigate('blog')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '24px'
          }}
        >
          <ArrowLeft size={16} /> Tüm Blog Yazılarına Dön
        </button>

        {/* Makale Başlık & Metadata */}
        <div style={{ marginBottom: '24px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
            {blog.category}
          </span>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: 'var(--heading)',
            lineHeight: 1.25,
            marginBottom: '16px'
          }}>
            {blog.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.86rem',
            color: 'var(--text-muted)',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} /> {blog.author || 'Konya Bilgisayar'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} /> {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} /> {blog.readTime || '4 dk okuma'}
            </span>
          </div>
        </div>

        {/* Kapak Görseli */}
        {blog.image && (
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '36px',
            maxHeight: '440px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <img 
              src={blog.image} 
              alt={blog.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Makale Gövdesi */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px'
        }}>
          {blog.excerpt && (
            <div style={{
              fontSize: '1.15rem',
              fontWeight: 600,
              color: 'var(--primary)',
              lineHeight: 1.65,
              padding: '16px 20px',
              background: 'var(--primary-glow)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--primary-bright)',
              marginBottom: '28px'
            }}>
              {blog.excerpt}
            </div>
          )}

          <div style={{ color: 'var(--text)' }}>
            {renderFormattedContent(blog.content)}
          </div>

          {/* Paylaş & WhatsApp Butonu */}
          <div style={{
            marginTop: '36px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ fontWeight: 700, color: 'var(--heading)' }}>
              Bu yazıyı faydalı buldunuz mu?
            </div>
            <button 
              onClick={handleShareWhatsApp}
              className="btn btn-wa btn-sm"
              style={{ fontWeight: 700 }}
            >
              <WhatsAppIcon size={16} /> WhatsApp'ta Paylaş
            </button>
          </div>
        </div>

        {/* İlgili Blog Yazıları */}
        {related.length > 0 && (
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--heading)', marginBottom: '18px' }}>
              Diğer İlgili Yazılar
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {related.map(item => (
                <div 
                  key={item.id}
                  onClick={() => navigate('blog-detay', { slug: item.slug || item.id })}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    padding: '16px',
                    cursor: 'pointer'
                  }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }} />
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-bright)', marginBottom: '4px' }}>
                    {item.category}
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--heading)', lineHeight: 1.35 }}>
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

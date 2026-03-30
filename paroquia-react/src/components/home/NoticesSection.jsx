import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import useCarousel from '../../hooks/useCarousel';
import Modal from '../ui/Modal';
import NoticeDetail from './NoticeDetail';
import './NoticesSection.css';

export default function NoticesSection() {
  const { notices } = homeData;
  const activeItems = notices.items.filter(item => item.active);
  const { scrollRef, activeIndex, goTo, goNext, goPrev } = useCarousel(activeItems.length);
  const [selectedNotice, setSelectedNotice] = useState(null);

  if (activeItems.length === 0) return null;

  return (
    <section className="notices">
      <div className="container">
        <h2 className="notices-title">
          <span className="notices-title-icon">📢</span>
          {notices.sectionTitle}
        </h2>

        <div className="notices-carousel">
          {activeItems.length > 1 && (
            <button
              className="notices-nav notices-nav--prev"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Aviso anterior"
            >
              ‹
            </button>
          )}

          <div className="notices-track" ref={scrollRef}>
            {activeItems.map(item => (
              <div key={item.id} className="notice-card">
                {item.image && (
                  <div
                    className="notice-image-wrapper"
                    onClick={() => setSelectedNotice(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ampliar aviso: ${item.title}`}
                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedNotice(item); }}
                  >
                    <img src={item.image} alt={item.title} className="notice-image" />
                    <span className="notice-image-zoom">🔍</span>
                  </div>
                )}
                <div className="notice-content">
                  <h3 className="notice-card-title">{item.title}</h3>
                  <p className="notice-text">{item.text}</p>
                  <div className="notice-actions">
                    <button
                      className="notice-view-btn"
                      onClick={() => setSelectedNotice(item)}
                    >
                      Ver mais
                    </button>
                    {item.linkHref && item.linkText && (
                      <Link to={item.linkHref} className="notice-link">
                        {item.linkText} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeItems.length > 1 && (
            <button
              className="notices-nav notices-nav--next"
              onClick={goNext}
              disabled={activeIndex === activeItems.length - 1}
              aria-label="Próximo aviso"
            >
              ›
            </button>
          )}
        </div>

        {activeItems.length > 1 && (
          <div className="notices-dots">
            {activeItems.map((_, i) => (
              <button
                key={i}
                className={`notices-dot${i === activeIndex ? ' notices-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para aviso ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedNotice} onClose={() => setSelectedNotice(null)}>
        <NoticeDetail notice={selectedNotice} />
      </Modal>
    </section>
  );
}

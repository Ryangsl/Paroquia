import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import './NoticesSection.css';

export default function NoticesSection() {
  const { notices } = homeData;
  const activeItems = notices.items.filter(item => item.active);

  if (activeItems.length === 0) return null;

  return (
    <section className="notices">
      <div className="container">
        <h2 className="notices-title">
          <span className="notices-title-icon">📢</span>
          {notices.sectionTitle}
        </h2>
        <div className="notices-grid">
          {activeItems.map(item => (
            <div key={item.id} className="notice-card">
              {item.image && (
                <div className="notice-image-wrapper">
                  <img src={item.image} alt={item.title} className="notice-image" />
                </div>
              )}
              <div className="notice-content">
                <h3 className="notice-title">{item.title}</h3>
                <p className="notice-text">{item.text}</p>
                {item.linkHref && item.linkText && (
                  <Link to={item.linkHref} className="notice-link">
                    {item.linkText} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

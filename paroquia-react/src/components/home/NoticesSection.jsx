import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import styles from './NoticesSection.module.css';

export default function NoticesSection() {
  const { notices } = homeData;
  const activeItems = notices.items.filter(item => item.active);

  if (activeItems.length === 0) return null;

  return (
    <section className={styles.notices}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>📢</span>
          {notices.sectionTitle}
        </h2>
        <div className={styles.noticesGrid}>
          {activeItems.map(item => (
            <div key={item.id} className={styles.noticeCard}>
              {item.image && (
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.noticeImage} />
                </div>
              )}
              <div className={styles.noticeContent}>
                <h3 className={styles.noticeTitle}>{item.title}</h3>
                <p className={styles.noticeText}>{item.text}</p>
                {item.linkHref && item.linkText && (
                  <Link to={item.linkHref} className={styles.noticeLink}>
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

import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import homeData from '../../data/home.json';
import styles from './Highlights.module.css';

export default function Highlights() {
  const { highlights } = homeData;

  return (
    <section className={styles.highlights}>
      <div className="container">
        <SectionHeader title={highlights.sectionTitle} />
        <div className={styles.highlightsGrid}>
          {highlights.items.map((item, i) => (
            <div key={i} className={styles.highlightCard}>
              <div className={styles.highlightIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.linkHref} className={styles.btnLink}>{item.linkText}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

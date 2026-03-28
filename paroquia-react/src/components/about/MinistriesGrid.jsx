import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';
import styles from './MinistriesGrid.module.css';

export default function MinistriesGrid() {
  const { ministries } = aboutData;

  return (
    <section className={styles.ministries}>
      <div className="container">
        <SectionHeader title={ministries.sectionTitle} description={ministries.description} />
        <div className={styles.ministriesGrid}>
          {ministries.items.map((item, i) => (
            <div key={i} className={styles.ministryCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

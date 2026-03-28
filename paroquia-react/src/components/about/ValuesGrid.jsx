import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';
import styles from './ValuesGrid.module.css';

export default function ValuesGrid() {
  const { values } = aboutData;

  return (
    <section className={styles.values}>
      <div className="container">
        <SectionHeader title={values.sectionTitle} />
        <div className={styles.valuesGrid}>
          {values.items.map((item, i) => (
            <div key={i} className={styles.valueCard}>
              <div className={styles.valueIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

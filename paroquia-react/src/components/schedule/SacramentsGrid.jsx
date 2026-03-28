import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';
import styles from './SacramentsGrid.module.css';

export default function SacramentsGrid() {
  const { sacraments } = scheduleData;

  return (
    <section className={styles.sacraments}>
      <div className="container">
        <SectionHeader title={sacraments.sectionTitle} description={sacraments.description} />
        <div className={styles.sacramentsGrid}>
          {sacraments.cards.map((card, i) => (
            <div key={i} className={styles.sacramentCard}>
              <h3>{card.title}</h3>
              {card.details.map((d, j) => (
                <p key={j}><strong>{d.label}:</strong> {d.value}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

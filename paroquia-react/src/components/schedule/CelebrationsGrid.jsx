import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';
import styles from './CelebrationsGrid.module.css';

export default function CelebrationsGrid() {
  const { specialCelebrations } = scheduleData;

  return (
    <section className={styles.specialCelebrations}>
      <div className="container">
        <SectionHeader title={specialCelebrations.sectionTitle} />
        <div className={styles.celebrationsGrid}>
          {specialCelebrations.cards.map((card, i) => (
            <div key={i} className={styles.celebrationCard}>
              <div className={styles.celebrationIcon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p className={styles.celebrationTime}>{card.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

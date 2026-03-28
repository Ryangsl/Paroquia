import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import scheduleData from '../../data/schedule.json';
import styles from './ScheduleGrid.module.css';

function ScheduleCard({ card }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.scheduleCard} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.scheduleIcon}>{card.icon}</div>
      <h3>{card.title}</h3>
      <div className={styles.scheduleTimes}>
        {card.times.map((t, j) => (
          <p key={j}><strong>{t.day}:</strong> {t.time}</p>
        ))}
        {card.note && <p className={styles.scheduleNote}>{card.note}</p>}
      </div>
    </div>
  );
}

export default function ScheduleGrid() {
  const { massSchedule } = scheduleData;

  return (
    <section className={styles.schedule}>
      <div className="container">
        <SectionHeader title={massSchedule.sectionTitle} />
        <div className={styles.scheduleGrid}>
          {massSchedule.cards.map((card, i) => (
            <ScheduleCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

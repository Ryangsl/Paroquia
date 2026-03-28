import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';
import styles from './ActivitiesGrid.module.css';

export default function ActivitiesGrid() {
  const { regularActivities } = eventsData;

  return (
    <section className={styles.regularActivities}>
      <div className="container">
        <SectionHeader title={regularActivities.sectionTitle} description={regularActivities.description} />
        <div className={styles.activitiesGrid}>
          {regularActivities.activities.map((act, i) => (
            <div key={i} className={styles.activityCard}>
              <div className={styles.activityDay}>{act.day}</div>
              <h3>{act.title}</h3>
              <p className={styles.activityTime}>{act.time}</p>
              <p className={styles.activityDescription}>{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

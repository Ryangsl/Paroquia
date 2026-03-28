import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import eventsData from '../../data/events.json';
import styles from './EventsList.module.css';

function EventCard({ event }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.eventCard} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.eventDate}>
        <span className={styles.day}>{event.day}</span>
        <span className={styles.month}>{event.month}</span>
      </div>
      <div className={styles.eventInfo}>
        <h3>{event.title}</h3>
        <p className={styles.eventTime}>{event.time}</p>
        <p className={styles.eventLocation}>{event.location}</p>
        <p className={styles.eventDescription}>{event.description}</p>
      </div>
    </div>
  );
}

export default function EventsList() {
  const { upcomingEvents } = eventsData;

  return (
    <section className={styles.events}>
      <div className="container">
        <SectionHeader title={upcomingEvents.sectionTitle} />
        <div className={styles.eventsGrid}>
          {upcomingEvents.events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

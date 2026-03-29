import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import eventsData from '../../data/events.json';
import styles from './EventsList.module.css';

const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

function parseEventDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return { day: String(day).padStart(2, '0'), month: MONTHS[month - 1] };
}

function EventCard({ event }) {
  const { ref, isVisible } = useScrollReveal();
  const { day, month } = parseEventDate(event.date);

  return (
    <div ref={ref} className={`${styles.eventCard} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.eventDate}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
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
  const today = new Date().toISOString().split('T')[0];
  const futureEvents = upcomingEvents.events.filter(e => e.date >= today);

  return (
    <section className={styles.events}>
      <div className="container">
        <SectionHeader title={upcomingEvents.sectionTitle} />
        <div className={styles.eventsGrid}>
          {futureEvents.length > 0 ? (
            futureEvents.map((event, i) => (
              <EventCard key={i} event={event} />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              Nenhum evento próximo agendado. Fique atento aos avisos paroquiais!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

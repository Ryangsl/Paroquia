import { Link } from 'react-router-dom';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, stripTimeEmoji } from '../../utils/dateUtils';
import styles from './FeaturedEvents.module.css';

export default function FeaturedEvents() {
  const today = getTodayISO();
  const featured = eventsData.upcomingEvents.events.filter(
    e => e.featured && e.date >= today
  );

  if (featured.length === 0) return null;

  return (
    <section className={styles.featuredEvents}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>⭐</span>
          {eventsData.featuredEvents.sectionTitle}
        </h2>
        <div className={styles.eventsGrid}>
          {featured.map((event, i) => {
            const { day, month } = parseEventDate(event.date);
            return (
              <div key={i} className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <span className={styles.day}>{day}</span>
                  <span className={styles.month}>{month}</span>
                </div>
                <div className={styles.eventInfo}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventTime}>{stripTimeEmoji(event.time)}</p>
                  <p className={styles.eventLocation}>{event.location}</p>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <Link to="/eventos" className={styles.allEventsLink}>
            Ver todos os eventos →
          </Link>
        </div>
      </div>
    </section>
  );
}

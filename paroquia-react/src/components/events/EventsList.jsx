import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, getMonthYear } from '../../utils/dateUtils';
import styles from './EventsList.module.css';

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
        <div className={styles.eventTitleRow}>
          <h3>{event.title}</h3>
          {event.featured && <span className={styles.featuredBadge}>⭐ Destaque</span>}
        </div>
        <p className={styles.eventTime}>{event.time}</p>
        <p className={styles.eventLocation}>{event.location}</p>
        <p className={styles.eventDescription}>{event.description}</p>
      </div>
    </div>
  );
}

export default function EventsList() {
  const { upcomingEvents } = eventsData;
  const today = getTodayISO();
  const futureEvents = upcomingEvents.events.filter(e => e.date >= today);

  const months = [...new Map(
    futureEvents.map(e => {
      const { month, year, label } = getMonthYear(e.date);
      return [`${year}-${month}`, { key: `${year}-${month}`, label }];
    })
  ).values()];

  const [activeMonth, setActiveMonth] = useState(null);

  const filtered = activeMonth
    ? futureEvents.filter(e => {
        const { month, year } = getMonthYear(e.date);
        return `${year}-${month}` === activeMonth;
      })
    : futureEvents;

  return (
    <section className={styles.events}>
      <div className="container">
        <SectionHeader title={upcomingEvents.sectionTitle} />

        {months.length > 1 && (
          <div className={styles.monthFilter}>
            <button
              className={`${styles.filterBtn} ${activeMonth === null ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveMonth(null)}
            >
              Todos
            </button>
            {months.map(m => (
              <button
                key={m.key}
                className={`${styles.filterBtn} ${activeMonth === m.key ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveMonth(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.eventsGrid}>
          {filtered.length > 0 ? (
            filtered.map((event, i) => (
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

import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, getMonthYear } from '../../utils/dateUtils';
import './EventsList.css';

function EventCard({ event }) {
  const { ref, isVisible } = useScrollReveal();
  const { day, month } = parseEventDate(event.date);

  return (
    <div ref={ref} className={`event-card ${isVisible ? 'event-card-visible' : 'event-card-hidden'}`}>
      <div className="event-card-date">
        <span className="event-card-day">{day}</span>
        <span className="event-card-month">{month}</span>
      </div>
      <div className="event-card-info">
        <div className="event-card-title-row">
          <h3>{event.title}</h3>
          {event.featured && <span className="event-card-featured-badge">⭐ Destaque</span>}
        </div>
        <p className="event-card-time">{event.time}</p>
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-description">{event.description}</p>
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
    <section className="events-list">
      <div className="container">
        <SectionHeader title={upcomingEvents.sectionTitle} />

        {months.length > 1 && (
          <div className="events-list-month-filter">
            <button
              className={`events-list-filter-btn ${activeMonth === null ? 'events-list-filter-btn-active' : ''}`}
              onClick={() => setActiveMonth(null)}
            >
              Todos
            </button>
            {months.map(m => (
              <button
                key={m.key}
                className={`events-list-filter-btn ${activeMonth === m.key ? 'events-list-filter-btn-active' : ''}`}
                onClick={() => setActiveMonth(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        <div className="events-list-grid">
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

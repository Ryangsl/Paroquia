import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import eventsData from '../../data/events.json';
import { getTodayISO, formatDateShort, stripTimeEmoji } from '../../utils/dateUtils';
import styles from './QuickInfo.module.css';

function getNextEvent() {
  const today = getTodayISO();
  const futureEvents = eventsData.upcomingEvents.events
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (futureEvents.length === 0) return null;

  const next = futureEvents[0];
  return {
    title: next.title,
    date: formatDateShort(next.date),
    time: stripTimeEmoji(next.time),
  };
}

export default function QuickInfo() {
  const { quickInfo } = homeData;
  const nextEvent = getNextEvent();

  return (
    <section className={styles.quickInfo}>
      <div className="container">
        <div className={styles.quickInfoGrid}>
          {quickInfo.map((item, i) => (
            <div key={i} className={styles.quickInfoItem}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
          {nextEvent && (
            <Link to="/eventos" className={styles.quickInfoItem} style={{ textDecoration: 'none' }}>
              <h3>📌 Próximo Evento</h3>
              <p className={styles.eventTitle}>{nextEvent.title}</p>
              <p className={styles.eventMeta}>{nextEvent.date} — {nextEvent.time}</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

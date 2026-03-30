import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import eventsData from '../../data/events.json';
import { getTodayISO, formatDateShort, stripTimeEmoji } from '../../utils/dateUtils';
import './QuickInfo.css';

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
    <section className="quick-info">
      <div className="container">
        <div className="quick-info-grid">
          {quickInfo.map((item, i) => (
            <div key={i} className="quick-info-item">
              <h3><img src={item.icon} alt={item.title} /></h3>
              <p>{item.text}</p>
            </div>
          ))}
          {nextEvent && (
            <Link to="/eventos" className="quick-info-item" style={{ textDecoration: 'none' }}>
              <h3>Próximo Evento</h3>
              <p className="quick-info-event-title">{nextEvent.title}</p>
              <p className="quick-info-event-meta">{nextEvent.date} — {nextEvent.time}</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

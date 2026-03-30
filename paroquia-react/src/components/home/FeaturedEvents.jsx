import { Link } from 'react-router-dom';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, stripTimeEmoji } from '../../utils/dateUtils';
import './FeaturedEvents.css';

export default function FeaturedEvents() {
  const today = getTodayISO();
  const featured = eventsData.upcomingEvents.events.filter(
    e => e.featured && e.date >= today
  );

  if (featured.length === 0) return null;

  return (
    <section className="featured-events">
      <div className="container">
        <h2 className="featured-events-title">
          <span className="featured-events-title-icon">⭐</span>
          {eventsData.featuredEvents.sectionTitle}
        </h2>
        <div className="featured-events-grid">
          {featured.map((event, i) => {
            const { day, month } = parseEventDate(event.date);
            return (
              <div key={i} className="featured-event-card">
                <div className="featured-event-date">
                  <span className="featured-event-day">{day}</span>
                  <span className="featured-event-month">{month}</span>
                </div>
                <div className="featured-event-info">
                  <h3 className="featured-event-name">{event.title}</h3>
                  <p className="featured-event-time">{stripTimeEmoji(event.time)}</p>
                  <p className="featured-event-location">{event.location}</p>
                  <p className="featured-event-description">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="featured-events-footer">
          <Link to="/eventos" className="featured-events-link">
            Ver todos os eventos →
          </Link>
        </div>
      </div>
    </section>
  );
}

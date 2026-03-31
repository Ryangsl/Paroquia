import { parseEventDate, formatDateShort } from '../../utils/dateUtils';
import './EventDetail.css';

export default function EventDetail({ event }) {
  if (!event) return null;

  const { day, month } = parseEventDate(event.date);
  const dateFormatted = formatDateShort(event.date);

  return (
    <div className="event-detail">
      {event.image && (
        <div className="event-detail-image-wrapper">
          <img src={event.image} alt={event.title} className="event-detail-image" />
        </div>
      )}
      <div className="event-detail-body">
        <div className="event-detail-header">
          <div className="event-detail-date-box">
            <span className="event-detail-day">{day}</span>
            <span className="event-detail-month">{month}</span>
          </div>
          <div>
            <h2 className="event-detail-title">{event.title}</h2>
            <p className="event-detail-date-full">{dateFormatted}</p>
          </div>
        </div>

        {event.featured && (
          <span className="event-detail-featured">Evento em Destaque</span>
        )}

        <div className="event-detail-info">
          <p className="event-detail-time">{event.time}</p>
          <p className="event-detail-location">{event.location}</p>
        </div>

        <p className="event-detail-description">{event.description}</p>
      </div>
    </div>
  );
}

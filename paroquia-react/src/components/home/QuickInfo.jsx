import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';
import eventsData from '../../data/events.json';
import { getTodayISO, formatDateShort, stripTimeEmoji } from '../../utils/dateUtils';

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

const itemCls =
  'text-center p-8 pl-[calc(2rem+4px)] rounded-md border-l-4 border-accent transition-all duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5';

export default function QuickInfo() {
  const { quickInfo } = homeData;
  const nextEvent = getNextEvent();

  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {quickInfo.map((item, i) => (
            <div
              key={i}
              className={itemCls}
              style={{ background: 'linear-gradient(135deg, #f7f8fc 0%, #fdfcf9 100%)' }}
            >
              <h3 className="text-xl text-ink mb-2">{item.icon} {item.title}</h3>
              <p className="text-muted leading-[1.6]">{item.text}</p>
            </div>
          ))}

          {nextEvent && (
            <Link
              to="/eventos"
              className={`${itemCls} no-underline block`}
              style={{ background: 'linear-gradient(135deg, #f7f8fc 0%, #fdfcf9 100%)' }}
            >
              <h3 className="text-xl text-ink mb-2">📌 Próximo Evento</h3>
              <p className="text-ink font-semibold leading-[1.4]">{nextEvent.title}</p>
              <p className="text-accent-dark text-[0.9rem] font-medium">
                {nextEvent.date} — {nextEvent.time}
              </p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

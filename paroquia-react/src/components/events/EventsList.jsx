import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, getMonthYear } from '../../utils/dateUtils';

function EventCard({ event }) {
  const { ref, isVisible } = useScrollReveal();
  const { day, month } = parseEventDate(event.date);

  return (
    <div
      ref={ref}
      className={`flex gap-8 bg-secondary p-8 rounded-lg border-l-[4px] border-l-accent hover:translate-x-[5px] hover:scale-[1.01] hover:shadow-md transition-all duration-300 shadow-xs max-sm:flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="bg-gradient-to-br from-accent to-accent-dark text-primary p-4 rounded-md text-center min-w-[80px] flex flex-col justify-center shadow-gold flex-shrink-0 max-sm:w-full">
        <span className="text-[2rem] font-bold leading-none">{day}</span>
        <span className="text-base uppercase opacity-90">{month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-4 flex-wrap mb-2">
          <h3 className="font-heading text-ink mb-0">{event.title}</h3>
          {event.featured && (
            <span className="bg-gradient-to-br from-accent to-accent-dark text-primary text-[0.75rem] font-bold px-2 py-[2px] rounded-sm whitespace-nowrap self-center">
              ⭐ Destaque
            </span>
          )}
        </div>
        <p className="text-accent font-semibold mb-2">{event.time}</p>
        <p className="text-muted mb-2">{event.location}</p>
        <p className="text-muted leading-[1.6]">{event.description}</p>
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
    <section className="bg-primary">
      <div className="container">
        <SectionHeader title={upcomingEvents.sectionTitle} />

        {months.length > 1 && (
          <div className="flex gap-2 flex-wrap mb-8">
            <button
              className={`border-2 border-accent px-4 py-[6px] rounded-full text-[0.875rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-accent hover:text-primary ${activeMonth === null ? 'bg-accent text-primary' : 'bg-transparent text-accent'}`}
              onClick={() => setActiveMonth(null)}
            >
              Todos
            </button>
            {months.map(m => (
              <button
                key={m.key}
                className={`border-2 border-accent px-4 py-[6px] rounded-full text-[0.875rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-accent hover:text-primary ${activeMonth === m.key ? 'bg-accent text-primary' : 'bg-transparent text-accent'}`}
                onClick={() => setActiveMonth(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-8">
          {filtered.length > 0 ? (
            filtered.map((event, i) => (
              <EventCard key={i} event={event} />
            ))
          ) : (
            <p className="text-center text-muted">
              Nenhum evento próximo agendado. Fique atento aos avisos paroquiais!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

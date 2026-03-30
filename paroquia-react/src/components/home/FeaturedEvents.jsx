import { Link } from 'react-router-dom';
import eventsData from '../../data/events.json';
import { getTodayISO, parseEventDate, stripTimeEmoji } from '../../utils/dateUtils';

export default function FeaturedEvents() {
  const today = getTodayISO();
  const featured = eventsData.upcomingEvents.events.filter(
    e => e.featured && e.date >= today
  );

  if (featured.length === 0) return null;

  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="font-heading text-2xl text-ink flex items-center gap-2 mb-8">
          <span className="text-[1.4rem]">⭐</span>
          {eventsData.featuredEvents.sectionTitle}
        </h2>

        <div className="grid gap-8">
          {featured.map((event, i) => {
            const { day, month } = parseEventDate(event.date);
            return (
              <div
                key={i}
                className="flex gap-8 bg-primary p-8 rounded-lg border-l-4 border-accent shadow-[var(--shadow-sm)] transition-all duration-300 hover:translate-x-1 hover:scale-[1.01] hover:shadow-[var(--shadow-md)] max-sm:flex-col"
              >
                {/* Date badge */}
                <div className="shrink-0 min-w-[80px] flex flex-col justify-center items-center text-center p-4 rounded-md shadow-[var(--shadow-gold)] bg-gradient-to-br from-accent to-accent-dark text-primary max-sm:w-full">
                  <span className="text-[2rem] font-bold leading-none">{day}</span>
                  <span className="text-base uppercase opacity-90">{month}</span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-ink m-0">{event.title}</h3>
                  <p className="text-accent font-semibold m-0">{stripTimeEmoji(event.time)}</p>
                  <p className="text-muted m-0">{event.location}</p>
                  <p className="text-muted leading-[1.6] m-0">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-right">
          <Link
            to="/eventos"
            className="text-accent font-semibold no-underline transition-colors duration-300 hover:text-accent-dark"
          >
            Ver todos os eventos →
          </Link>
        </div>
      </div>
    </section>
  );
}

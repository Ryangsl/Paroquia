import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';

export default function ActivitiesGrid() {
  const { regularActivities } = eventsData;

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <SectionHeader title={regularActivities.sectionTitle} description={regularActivities.description} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {regularActivities.activities.map((act, i) => (
            <div
              key={i}
              className="bg-primary p-8 rounded-lg shadow-sm hover:-translate-y-[6px] hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-block bg-gradient-to-br from-accent to-accent-dark text-primary px-4 py-2 rounded-full font-semibold text-[0.85rem] mb-4 tracking-[0.03em] uppercase shadow-gold">
                {act.day}
              </div>
              <h3 className="font-heading text-ink mb-2 text-[1.2rem]">{act.title}</h3>
              <p className="text-accent font-semibold mb-2">{act.time}</p>
              <p className="text-muted text-[0.95rem] leading-[1.6]">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

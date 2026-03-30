import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import scheduleData from '../../data/schedule.json';

function ScheduleCard({ card }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative bg-primary p-12 rounded-lg text-center shadow-sm hover:-translate-y-[6px] hover:shadow-lg transition-all duration-300 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-accent to-accent-light rounded-t-lg" />
      <div className="text-[2.8rem] mb-4 w-[70px] h-[70px] inline-flex items-center justify-center bg-[var(--bg-accent-subtle)] rounded-full leading-none">
        {card.icon}
      </div>
      <h3 className="font-heading text-[1.5rem] text-ink mb-4">{card.title}</h3>
      <div>
        {card.times.map((t, j) => (
          <p key={j} className="mb-2 text-muted text-base leading-[1.7]">
            <strong className="text-ink">{t.day}:</strong> {t.time}
          </p>
        ))}
        {card.note && <p className="text-[0.9rem] italic mt-2 text-muted">{card.note}</p>}
      </div>
    </div>
  );
}

export default function ScheduleGrid() {
  const { massSchedule } = scheduleData;

  return (
    <section className="bg-secondary">
      <div className="container">
        <SectionHeader title={massSchedule.sectionTitle} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {massSchedule.cards.map((card, i) => (
            <ScheduleCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

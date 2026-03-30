import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';

export default function CelebrationsGrid() {
  const { specialCelebrations } = scheduleData;

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <SectionHeader title={specialCelebrations.sectionTitle} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {specialCelebrations.cards.map((card, i) => (
            <div
              key={i}
              className="bg-secondary p-12 rounded-lg text-center border-2 border-transparent hover:-translate-y-[6px] hover:shadow-md hover:border-accent-light transition-all duration-300"
            >
              <div className="text-[2.5rem] mb-4">{card.icon}</div>
              <h3 className="font-heading text-ink mb-2 text-[1.2rem]">{card.title}</h3>
              <p className="text-muted mb-2 leading-[1.6]">{card.description}</p>
              <span className="inline-block text-accent-dark font-semibold bg-[var(--bg-accent-subtle)] px-[14px] py-[4px] rounded-full text-[0.9rem] tracking-[0.02em]">
                {card.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

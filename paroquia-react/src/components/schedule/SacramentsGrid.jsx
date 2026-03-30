import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';

export default function SacramentsGrid() {
  const { sacraments } = scheduleData;

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <SectionHeader title={sacraments.sectionTitle} description={sacraments.description} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-[600px] mx-auto">
          {sacraments.cards.map((card, i) => (
            <div
              key={i}
              className="relative bg-primary p-12 rounded-lg shadow-sm hover:-translate-y-[4px] hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-accent to-accent-light rounded-l-lg" />
              <h3 className="font-heading text-ink mb-4 text-[1.3rem]">{card.title}</h3>
              {card.details.map((d, j) => (
                <p key={j} className="text-muted mb-2 leading-[1.7]">
                  <strong className="text-ink text-[1.05rem]">{d.label}:</strong> {d.value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';

export default function ValuesGrid() {
  const { values } = aboutData;

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <SectionHeader title={values.sectionTitle} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {values.items.map((item, i) => (
            <div
              key={i}
              className="bg-primary p-12 rounded-lg text-center border-b-[3px] border-b-transparent hover:scale-[1.02] hover:border-b-accent hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div className="text-[2.8rem] mb-4 w-[72px] h-[72px] inline-flex items-center justify-center bg-[var(--bg-accent-subtle)] rounded-full leading-none">
                {item.icon}
              </div>
              <h3 className="font-heading text-ink mb-4 text-[1.3rem]">{item.title}</h3>
              <p className="text-muted leading-[1.7]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

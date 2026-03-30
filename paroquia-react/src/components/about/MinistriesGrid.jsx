import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';

export default function MinistriesGrid() {
  const { ministries } = aboutData;

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <SectionHeader title={ministries.sectionTitle} description={ministries.description} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-12">
          {ministries.items.map((item, i) => (
            <div
              key={i}
              className="bg-secondary py-8 px-8 rounded-md border-l-[5px] border-l-accent hover:translate-x-[5px] hover:scale-[1.01] hover:shadow-md hover:bg-warm transition-all duration-300"
            >
              <h3 className="text-ink mb-2 text-[1.15rem]">{item.title}</h3>
              <p className="text-muted leading-[1.6]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

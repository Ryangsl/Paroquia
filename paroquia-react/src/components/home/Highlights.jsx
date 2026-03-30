import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import homeData from '../../data/home.json';

export default function Highlights() {
  const { highlights } = homeData;

  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <SectionHeader title={highlights.sectionTitle} />
        <div
          className="grid gap-8 mt-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {highlights.items.map((item, i) => (
            <div
              key={i}
              className="text-center p-12 rounded-lg shadow-[var(--shadow-sm)] border-t-[3px] border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] hover:border-t-accent"
              style={{ background: 'var(--bg-gradient-card)' }}
            >
              <div className="text-[3.5rem] mb-4 w-20 h-20 inline-flex items-center justify-center bg-[var(--bg-accent-subtle)] rounded-full leading-none">
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl text-ink mb-4">{item.title}</h3>
              <p className="text-muted mb-4 leading-[1.7]">{item.description}</p>
              <Link
                to={item.linkHref}
                className="inline-block text-accent font-semibold no-underline transition-all duration-300 hover:text-accent-dark hover:translate-x-1"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

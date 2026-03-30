import { Link } from 'react-router-dom';
import homeData from '../../data/home.json';

export default function NoticesSection() {
  const { notices } = homeData;
  const activeItems = notices.items.filter(item => item.active);

  if (activeItems.length === 0) return null;

  return (
    <section className="bg-primary py-12 border-t-4 border-accent">
      <div className="container">
        <h2 className="font-heading text-2xl text-ink flex items-center gap-2 mb-8">
          <span className="text-[1.4rem]">📢</span>
          {notices.sectionTitle}
        </h2>

        <div className="grid gap-8">
          {activeItems.map(item => (
            <div
              key={item.id}
              className="flex gap-8 bg-secondary border-l-[5px] border-accent rounded-lg p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:translate-x-1 hover:shadow-[var(--shadow-md)] max-sm:flex-col"
            >
              {item.image && (
                <div className="shrink-0 w-40 rounded-md overflow-hidden max-sm:w-full max-sm:max-h-[180px]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover block" />
                </div>
              )}
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-heading text-ink text-[1.15rem] m-0">{item.title}</h3>
                <p className="text-muted leading-[1.6] m-0">{item.text}</p>
                {item.linkHref && item.linkText && (
                  <Link
                    to={item.linkHref}
                    className="inline-block text-accent font-semibold no-underline mt-2 transition-colors duration-300 hover:text-accent-dark"
                  >
                    {item.linkText} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

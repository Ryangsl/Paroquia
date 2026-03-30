import aboutData from '../../data/about.json';

export default function AboutContent() {
  const { history, mission, community, imagePlaceholder } = aboutData;

  return (
    <section className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-ink text-[1.8rem] tracking-[-0.01em] mb-4">
              {history.title}
            </h2>
            {history.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-muted text-[1.1rem] leading-[1.9] tracking-[0.01em]">{p}</p>
            ))}

            <h2 className="font-heading text-ink text-[1.8rem] tracking-[-0.01em] mb-4 mt-12">
              {mission.title}
            </h2>
            <p className="mb-4 text-muted text-[1.1rem] leading-[1.9] tracking-[0.01em]">{mission.intro}</p>
            <ul className="list-none my-4">
              {mission.items.map((item, i) => (
                <li
                  key={i}
                  className="py-2 pl-4 text-muted text-[1.05rem] leading-[1.8] border-l-[3px] border-l-transparent hover:border-l-accent hover:pl-[calc(1rem+4px)] hover:bg-[var(--bg-accent-subtle)] hover:rounded-r-sm transition-all duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-ink text-[1.8rem] tracking-[-0.01em] mb-4 mt-12">
              {community.title}
            </h2>
            {community.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-muted text-[1.1rem] leading-[1.9] tracking-[0.01em]">{p}</p>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full max-w-[400px] aspect-square bg-gradient-to-br from-secondary to-primary rounded-xl flex flex-col justify-center items-center border-[3px] border-accent about-image-glow shadow-lg">
              <span className="text-[8rem] text-accent mb-4 leading-none">{imagePlaceholder.icon}</span>
              <p className="font-heading text-[1.2rem] text-ink text-center px-4">{imagePlaceholder.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

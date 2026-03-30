import scheduleData from '../../data/schedule.json';

const iconMap = {
  phone: '📞',
  whatsapp: '💬',
  location: '📍',
  car: '🅿️',
  bus: '🚌',
  link: '🔗'
};

function NoteItem({ item }) {
  const icon = iconMap[item.icon] || '•';

  return (
    <div className="flex items-start gap-2 py-2 px-4 rounded-md hover:bg-[var(--bg-accent-subtle)] transition-colors duration-300">
      <span className="text-[1.3rem] flex-shrink-0 w-8 h-8 flex items-center justify-center leading-none" aria-hidden="true">
        {icon}
      </span>
      <div className="flex flex-col gap-[2px] min-w-0">
        <span className="font-semibold text-ink text-[0.9rem] tracking-[0.02em]">{item.label}</span>
        {item.link ? (
          <a
            href={item.link}
            className="text-accent-dark text-[0.95rem] leading-[1.5] no-underline font-medium hover:text-accent hover:underline transition-colors duration-300"
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.value}
          </a>
        ) : (
          <span className="text-muted text-[0.95rem] leading-[1.5]">{item.value}</span>
        )}
      </div>
    </div>
  );
}

export default function ImportantNotes() {
  const { importantNotes } = scheduleData;

  return (
    <section className="py-16 bg-warm">
      <div className="container">
        <div className="bg-gradient-to-br from-secondary to-warm p-12 rounded-lg border-l-[4px] border-l-accent shadow-sm">
          <h2 className="font-heading text-ink mb-8 text-[1.5rem]">{importantNotes.title}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {importantNotes.items.map((item, i) => (
              <NoteItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

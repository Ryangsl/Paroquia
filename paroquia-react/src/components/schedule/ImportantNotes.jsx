import scheduleData from '../../data/schedule.json';
import './ImportantNotes.css';

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
    <div className="important-notes-item">
      <span className="important-notes-icon" aria-hidden="true">{icon}</span>
      <div className="important-notes-text">
        <span className="important-notes-label">{item.label}</span>
        {item.link ? (
          <a
            href={item.link}
            className="important-notes-link"
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.value}
          </a>
        ) : (
          <span className="important-notes-value">{item.value}</span>
        )}
      </div>
    </div>
  );
}

export default function ImportantNotes() {
  const { importantNotes } = scheduleData;

  return (
    <section className="important-notes">
      <div className="container">
        <div className="important-notes-content">
          <h2>{importantNotes.title}</h2>
          <div className="important-notes-grid">
            {importantNotes.items.map((item, i) => (
              <NoteItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

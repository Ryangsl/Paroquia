import scheduleData from '../../data/schedule.json';
import styles from './ImportantNotes.module.css';

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
    <div className={styles.noteItem}>
      <span className={styles.noteIcon} aria-hidden="true">{icon}</span>
      <div className={styles.noteText}>
        <span className={styles.noteLabel}>{item.label}</span>
        {item.link ? (
          <a
            href={item.link}
            className={styles.noteLink}
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.value}
          </a>
        ) : (
          <span className={styles.noteValue}>{item.value}</span>
        )}
      </div>
    </div>
  );
}

export default function ImportantNotes() {
  const { importantNotes } = scheduleData;

  return (
    <section className={styles.importantNotes}>
      <div className="container">
        <div className={styles.notesContent}>
          <h2>{importantNotes.title}</h2>
          <div className={styles.notesGrid}>
            {importantNotes.items.map((item, i) => (
              <NoteItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

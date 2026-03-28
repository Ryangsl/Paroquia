import scheduleData from '../../data/schedule.json';
import styles from './ImportantNotes.module.css';

export default function ImportantNotes() {
  const { importantNotes } = scheduleData;

  return (
    <section className={styles.importantNotes}>
      <div className="container">
        <div className={styles.notesContent}>
          <h2>{importantNotes.title}</h2>
          <ul className={styles.notesList}>
            {importantNotes.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

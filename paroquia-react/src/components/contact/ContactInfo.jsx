import contactData from '../../data/contact.json';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const { contactInfo } = contactData;

  return (
    <div className={styles.contactInfo}>
      <h2>{contactInfo.title}</h2>
      <p className={styles.contactIntro}>{contactInfo.intro}</p>

      {contactInfo.items.map((item, i) => (
        <div key={i} className={styles.contactItem}>
          <div className={styles.contactIcon}>{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            {item.lines && item.lines.map((line, j) => (
              <span key={j}>{line}<br /></span>
            ))}
            {item.entries && item.entries.map((entry, j) => (
              <p key={j}><strong>{entry.label}:</strong> {entry.value}</p>
            ))}
            {item.socialButtons && (
              <div className={styles.socialLinksContact}>
                {item.socialButtons.map((btn, j) => (
                  <a key={j} href={btn.url} className={styles.socialBtn}>{btn.label}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

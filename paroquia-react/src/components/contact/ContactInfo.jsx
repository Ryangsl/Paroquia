import contactData from '../../data/contact.json';
import './ContactInfo.css';

export default function ContactInfo() {
  const { contactInfo } = contactData;

  return (
    <div className="contact-info">
      <h2>{contactInfo.title}</h2>
      <p className="contact-info-intro">{contactInfo.intro}</p>

      {contactInfo.items.map((item, i) => (
        <div key={i} className="contact-info-item">
          <div className="contact-info-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            {item.lines && item.lines.map((line, j) => (
              <span key={j}>{line}<br /></span>
            ))}
            {item.entries && item.entries.map((entry, j) => (
              <p key={j}><strong>{entry.label}:</strong> {entry.value}</p>
            ))}
            {item.socialButtons && (
              <div className="contact-info-social-links">
                {item.socialButtons.map((btn, j) => (
                  <a key={j} href={btn.url} className="contact-info-social-btn">{btn.label}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

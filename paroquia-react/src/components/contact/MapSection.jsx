import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';
import styles from './MapSection.module.css';

export default function MapSection() {
  const { map } = contactData;

  return (
    <section className={styles.mapSection}>
      <div className="container">
        <SectionHeader title={map.sectionTitle} />
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapContent}>
            <span className={styles.mapIcon}>🗺️</span>
            <h3>{map.title}</h3>
            <p>{map.subtitle}</p>
            <div className={styles.mapEmbed}>
              <iframe
                src={map.iframeSrc}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Paróquia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

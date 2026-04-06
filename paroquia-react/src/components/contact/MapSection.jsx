import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';
import './MapSection.css';

export default function MapSection() {
  const { map } = contactData;

  return (
    <section className="map-section">
      <div className="container">
        <SectionHeader title={map.sectionTitle} />
        <div className="map-placeholder">
          <div className="map-content">
            <span className="map-icon">🗺️</span>
            <h3>{map.title}</h3>
            <p>{map.subtitle}</p>
            <div className="map-embed">
              <iframe
                src={map.iframeSrc}
                width="100%"
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

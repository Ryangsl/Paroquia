import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';

export default function MapSection() {
  const { map } = contactData;

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <SectionHeader title={map.sectionTitle} />
        <div className="bg-primary rounded-xl p-12 text-center shadow-md min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="max-w-full w-full">
            <span className="text-[3.5rem] mb-4 block">🗺️</span>
            <h3 className="font-heading text-ink mb-4">{map.title}</h3>
            <p className="text-muted mb-4 leading-[1.6]">{map.subtitle}</p>
            <div className="mt-4">
              <iframe
                src={map.iframeSrc}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Paróquia"
                className="max-w-full rounded-lg shadow-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

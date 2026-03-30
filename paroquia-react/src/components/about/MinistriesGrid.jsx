import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';
import './MinistriesGrid.css';

export default function MinistriesGrid() {
  const { ministries } = aboutData;

  return (
    <section className="ministries">
      <div className="container">
        <SectionHeader title={ministries.sectionTitle} description={ministries.description} />
        <div className="ministries-grid">
          {ministries.items.map((item, i) => (
            <div key={i} className="ministry-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

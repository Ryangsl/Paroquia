import SectionHeader from '../ui/SectionHeader';
import aboutData from '../../data/about.json';
import './ValuesGrid.css';

export default function ValuesGrid() {
  const { values } = aboutData;

  return (
    <section className="values">
      <div className="container">
        <SectionHeader title={values.sectionTitle} />
        <div className="values-grid">
          {values.items.map((item, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

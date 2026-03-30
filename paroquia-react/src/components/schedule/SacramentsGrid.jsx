import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';
import './SacramentsGrid.css';

export default function SacramentsGrid() {
  const { sacraments } = scheduleData;

  return (
    <section className="sacraments">
      <div className="container">
        <SectionHeader title={sacraments.sectionTitle} description={sacraments.description} />
        <div className="sacraments-grid">
          {sacraments.cards.map((card, i) => (
            <div key={i} className="sacraments-card">
              <h3>{card.title}</h3>
              {card.details.map((d, j) => (
                <p key={j}><strong>{d.label}:</strong> {d.value}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

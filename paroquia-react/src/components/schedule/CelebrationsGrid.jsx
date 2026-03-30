import SectionHeader from '../ui/SectionHeader';
import scheduleData from '../../data/schedule.json';
import './CelebrationsGrid.css';

export default function CelebrationsGrid() {
  const { specialCelebrations } = scheduleData;

  return (
    <section className="celebrations-special">
      <div className="container">
        <SectionHeader title={specialCelebrations.sectionTitle} />
        <div className="celebrations-grid">
          {specialCelebrations.cards.map((card, i) => (
            <div key={i} className="celebrations-card">
              <div className="celebrations-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p className="celebrations-time">{card.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

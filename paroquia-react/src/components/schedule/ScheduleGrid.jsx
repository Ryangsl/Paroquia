import SectionHeader from '../ui/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import scheduleData from '../../data/schedule.json';
import './ScheduleGrid.css';

function ScheduleCard({ card }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`schedule-card ${isVisible ? 'schedule-card-visible' : 'schedule-card-hidden'}`}>
      <div className="schedule-icon"><img src={card.icon} alt={card.title} /></div>
      <h3>{card.title}</h3>
      <div className="schedule-times">
        {card.times.map((t, j) => (
          <p key={j}><strong>{t.day}:</strong> {t.time}</p>
        ))}
        {card.note && <p className="schedule-note">{card.note}</p>}
      </div>
    </div>
  );
}

export default function ScheduleGrid() {
  const { massSchedule } = scheduleData;

  return (
    <section className="schedule">
      <div className="container">
        <SectionHeader title={massSchedule.sectionTitle} />
        <div className="schedule-grid">
          {massSchedule.cards.map((card, i) => (
            <ScheduleCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

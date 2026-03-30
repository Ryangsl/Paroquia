import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';
import './ActivitiesGrid.css';

export default function ActivitiesGrid() {
  const { regularActivities } = eventsData;

  return (
    <section className="activities-section">
      <div className="container">
        <SectionHeader title={regularActivities.sectionTitle} description={regularActivities.description} />
        <div className="activities-grid">
          {regularActivities.activities.map((act, i) => (
            <div key={i} className="activities-card">
              <div className="activities-day">{act.day}</div>
              <h3>{act.title}</h3>
              <p className="activities-time">{act.time}</p>
              <p className="activities-description">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

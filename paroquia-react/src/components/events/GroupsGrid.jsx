import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';
import './GroupsGrid.css';

export default function GroupsGrid() {
  const { groupsMinistries } = eventsData;

  return (
    <section className="groups-section">
      <div className="container">
        <SectionHeader title={groupsMinistries.sectionTitle} description={groupsMinistries.description} />
        <div className="groups-grid">
          {groupsMinistries.groups.map((group, i) => (
            <div key={i} className="groups-card">
              <div className="groups-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

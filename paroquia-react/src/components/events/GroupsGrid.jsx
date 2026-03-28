import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';
import styles from './GroupsGrid.module.css';

export default function GroupsGrid() {
  const { groupsMinistries } = eventsData;

  return (
    <section className={styles.groupsMinistries}>
      <div className="container">
        <SectionHeader title={groupsMinistries.sectionTitle} description={groupsMinistries.description} />
        <div className={styles.groupsGrid}>
          {groupsMinistries.groups.map((group, i) => (
            <div key={i} className={styles.groupCard}>
              <div className={styles.groupIcon}>{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

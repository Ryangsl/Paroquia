import aboutData from '../../data/about.json';
import styles from './AboutContent.module.css';

export default function AboutContent() {
  const { history, mission, community, imagePlaceholder } = aboutData;

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>{history.title}</h2>
            {history.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            <h2>{mission.title}</h2>
            <p>{mission.intro}</p>
            <ul className={styles.missionList}>
              {mission.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{community.title}</h2>
            {community.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.crossIconLarge}>{imagePlaceholder.icon}</span>
              <p>{imagePlaceholder.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

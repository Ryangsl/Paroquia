import aboutData from '../../data/about.json';
import './AboutContent.css';

export default function AboutContent() {
  const { history, mission, community, imagePlaceholder } = aboutData;

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{history.title}</h2>
            {history.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            <h2>{mission.title}</h2>
            <p>{mission.intro}</p>
            <ul className="about-mission-list">
              {mission.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{community.title}</h2>
            {community.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <span className="about-cross-icon">{imagePlaceholder.icon}</span>
              <p>{imagePlaceholder.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

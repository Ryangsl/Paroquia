import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import homeData from '../../data/home.json';
import './Highlights.css';

export default function Highlights() {
  const { highlights } = homeData;

  return (
    <section className="highlights">
      <div className="container">
        <SectionHeader title={highlights.sectionTitle} />
        <div className="highlights-grid">
          {highlights.items.map((item, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.linkHref} className="highlight-link">{item.linkText}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

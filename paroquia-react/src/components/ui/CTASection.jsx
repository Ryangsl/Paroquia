import { Link } from 'react-router-dom';
import './CTASection.css';

export default function CTASection({ title, text, buttons }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-buttons">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                to={btn.href}
                className={`cta-btn ${btn.variant === 'primary' ? 'cta-btn-primary' : 'cta-btn-secondary'}`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

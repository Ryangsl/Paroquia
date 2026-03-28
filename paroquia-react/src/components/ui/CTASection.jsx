import { Link } from 'react-router-dom';
import styles from './CTASection.module.css';

export default function CTASection({ title, text, buttons }) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className={styles.ctaButtons}>
            {buttons.map((btn, i) => (
              <Link
                key={i}
                to={btn.href}
                className={`${styles.ctaBtn} ${btn.variant === 'primary' ? styles.ctaBtnPrimary : styles.ctaBtnSecondary}`}
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

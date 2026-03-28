import Button from '../ui/Button';
import homeData from '../../data/home.json';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = homeData;

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <p className={styles.heroText}>{hero.text}</p>
          <div className={styles.heroButtons}>
            {hero.buttons.map((btn, i) => (
              <Button key={i} variant={btn.variant} href={btn.href}>{btn.label}</Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

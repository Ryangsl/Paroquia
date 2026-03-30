import Button from '../ui/Button';
import homeData from '../../data/home.json';
import './Hero.css';

export default function Hero() {
  const { hero } = homeData;

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-text">{hero.text}</p>
          <div className="hero-buttons">
            {hero.buttons.map((btn, i) => (
              <Button key={i} variant={btn.variant} href={btn.href}>{btn.label}</Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

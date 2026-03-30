import Button from '../ui/Button';
import homeData from '../../data/home.json';

export default function Hero() {
  const { hero } = homeData;

  return (
    <section
      className="hero-pseudo min-h-screen flex items-center justify-center mt-[70px]"
      style={{ background: 'var(--bg-gradient-hero)' }}
    >
      <div className="container">
        <div
          className="text-center relative z-10 max-w-[800px] mx-auto py-16 px-8 max-md:px-4 max-md:py-12"
          style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <h1
            className="font-heading text-[4rem] mb-8 leading-[1.15] bg-clip-text text-transparent max-lg:text-[3.2rem] max-md:text-[2.6rem] max-sm:text-[2rem]"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1a2332 0%, #a8861e 60%, #c9a227 100%)',
            }}
          >
            {hero.title}
          </h1>
          <p
            className="text-[1.5rem] text-accent font-semibold mb-8 tracking-wide max-md:text-xl"
            style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both' }}
          >
            {hero.subtitle}
          </p>
          <p
            className="text-[1.2rem] text-muted mb-16 max-w-[580px] mx-auto leading-[1.7] max-md:text-[1.05rem] max-md:mb-12"
            style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both' }}
          >
            {hero.text}
          </p>
          <div
            className="flex gap-8 justify-center flex-wrap max-md:flex-col max-md:items-center max-md:gap-4"
            style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both' }}
          >
            {hero.buttons.map((btn, i) => (
              <Button key={i} variant={btn.variant} href={btn.href} className="min-w-[180px]">
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

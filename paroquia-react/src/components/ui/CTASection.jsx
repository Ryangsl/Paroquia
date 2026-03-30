import { Link } from 'react-router-dom';

const btnBase =
  'inline-flex items-center justify-center min-w-[180px] px-8 py-[0.85rem] no-underline rounded-md font-semibold text-base border-2 cursor-pointer transition-all duration-300 active:scale-[0.97]';

const btnPrimary =
  'bg-gradient-to-br from-accent to-accent-dark text-white border-accent shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold-lg)]';

const btnSecondary =
  'bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5';

export default function CTASection({ title, text, buttons }) {
  return (
    <section
      className="cta-pseudo py-20 text-center max-md:py-14"
      style={{ background: 'var(--bg-gradient-cta)' }}
    >
      <div className="container">
        <div className="relative z-10 max-w-[700px] mx-auto">
          <h2 className="font-heading text-[2.8rem] text-white mb-8 tracking-wide leading-[1.2] max-md:text-4xl">
            {title}
          </h2>
          <p className="text-[1.2rem] text-white/80 mb-16 leading-[1.7] max-w-[560px] mx-auto max-md:text-[1.05rem]">
            {text}
          </p>
          <div className="flex gap-8 justify-center flex-wrap max-md:flex-col max-md:items-center max-md:gap-4">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                to={btn.href}
                className={`${btnBase} ${btn.variant === 'primary' ? btnPrimary : btnSecondary} max-md:w-full max-md:max-w-[320px]`}
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

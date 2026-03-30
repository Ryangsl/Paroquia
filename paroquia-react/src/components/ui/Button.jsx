import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-[0.5em] px-8 py-[0.85rem] font-semibold text-base leading-[1.5] rounded-md transition-all duration-300 cursor-pointer select-none relative overflow-hidden border-2 border-transparent active:scale-[0.97] no-underline text-center';

const variants = {
  primary:
    'bg-gradient-to-br from-accent to-accent-dark text-white border-accent shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold-lg)] active:translate-y-0',
  secondary:
    'bg-transparent text-ink border-ink hover:bg-ink hover:text-primary hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] active:translate-y-0',
  primaryOnDark:
    'bg-gradient-to-br from-accent to-accent-dark text-white border-accent shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold-lg)]',
  secondaryOnDark:
    'bg-transparent text-white border-white/60 hover:bg-white/[0.12] hover:border-white hover:-translate-y-0.5',
};

export default function Button({ variant = 'primary', href, onClick, type, children, className = '' }) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return <Link to={href} className={cls}>{children}</Link>;
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

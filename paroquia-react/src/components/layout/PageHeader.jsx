export default function PageHeader({ title, subtitle }) {
  return (
    <section
      className="page-header-pseudo text-center pt-[calc(4rem+70px)] pb-16"
      style={{ background: 'var(--bg-gradient-hero)' }}
    >
      <div className="container">
        <h1 className="relative z-10 font-heading text-5xl text-ink mb-4 tracking-wide leading-[1.2]">
          {title}
        </h1>
        <p className="relative z-10 text-xl text-muted max-w-[600px] mx-auto leading-relaxed tracking-wide">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

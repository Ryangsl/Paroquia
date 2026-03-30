import useScrollReveal from '../../hooks/useScrollReveal';

export default function CommunityCard({ community }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-primary py-12 px-8 rounded-lg shadow-sm flex flex-col items-center text-center border-b-[3px] border-b-transparent hover:-translate-y-[6px] hover:shadow-lg hover:border-b-accent transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 border-[3px] border-accent flex-shrink-0 max-sm:w-[90px] max-sm:h-[90px]">
        {community.image ? (
          <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--bg-accent-subtle)] to-secondary flex items-center justify-center">
            <span className="text-[2.5rem] opacity-50">⛪</span>
          </div>
        )}
      </div>
      <h3 className="font-heading text-ink text-[1.15rem] mb-2 leading-[1.3]">{community.name}</h3>
      <div className="w-full text-left">
        {community.details.map((detail, j) => (
          <p key={j} className="mb-[4px] leading-[1.5] text-[0.9rem]">
            <span className="text-accent-dark font-semibold">{detail.label}:</span>{' '}
            <span className="text-muted">{detail.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

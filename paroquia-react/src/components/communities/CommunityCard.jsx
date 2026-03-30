import useScrollReveal from '../../hooks/useScrollReveal';
import './CommunityCard.css';

export default function CommunityCard({ community }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`community-card ${isVisible ? 'community-card-visible' : 'community-card-hidden'}`}>
      <div className="community-card-image-wrapper">
        {community.image ? (
          <img src={community.image} alt={community.name} className="community-card-image" />
        ) : (
          <div className="community-card-image-placeholder">
            <span className="community-card-placeholder-icon">⛪</span>
          </div>
        )}
      </div>
      <h3 className="community-card-name">{community.name}</h3>
      <div className="community-card-details-list">
        {community.details.map((detail, j) => (
          <p key={j} className="community-card-detail-item">
            <span className="community-card-detail-label">{detail.label}:</span>{' '}
            <span className="community-card-detail-value">{detail.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

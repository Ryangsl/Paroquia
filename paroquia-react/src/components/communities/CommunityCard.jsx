import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './CommunityCard.module.css';

export default function CommunityCard({ community }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.communityCard} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.imageWrapper}>
        {community.image ? (
          <img src={community.image} alt={community.name} className={styles.communityImage} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderIcon}>⛪</span>
          </div>
        )}
      </div>
      <h3 className={styles.communityName}>{community.name}</h3>
      <div className={styles.detailsList}>
        {community.details.map((detail, j) => (
          <p key={j} className={styles.detailItem}>
            <span className={styles.detailLabel}>{detail.label}:</span>{' '}
            <span className={styles.detailValue}>{detail.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

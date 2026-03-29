import PageHeader from '../components/layout/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import communitiesData from '../data/communities.json';
import styles from './CommunitiesPage.module.css';

function CommunityCard({ community }) {
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

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        title={communitiesData.pageHeader.title}
        subtitle={communitiesData.pageHeader.subtitle}
      />

      <section className={styles.communitiesSection}>
        <div className="container">
          <SectionHeader title="Padroeiros(as) e Horários das Celebrações na Comunidade" />
          <div className={styles.communitiesGrid}>
            {communitiesData.communities.map((community, i) => (
              <CommunityCard key={i} community={community} />
            ))}
          </div>
        </div>
      </section>

      <CTASection {...communitiesData.cta} />
    </>
  );
}

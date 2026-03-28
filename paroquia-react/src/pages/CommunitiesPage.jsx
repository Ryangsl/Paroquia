import PageHeader from '../components/layout/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import communitiesData from '../data/communities.json';
import styles from './CommunitiesPage.module.css';

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader title={communitiesData.pageHeader.title} subtitle={communitiesData.pageHeader.subtitle} />

      <section className={styles.intro}>
        <div className="container">
          <h2>{communitiesData.intro.title}</h2>
          {communitiesData.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className={styles.communitiesSection}>
        <div className="container">
          <SectionHeader title="Nossas Comunidades" />
          <div className={styles.communitiesGrid}>
            {communitiesData.communities.map((c, i) => (
              <div key={i} className={styles.communityCard}>
                <div className={styles.communityIcon}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <p className={styles.location}>📍 {c.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...communitiesData.cta} />
    </>
  );
}

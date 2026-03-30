import PageHeader from '../components/layout/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import CommunityCard from '../components/communities/CommunityCard';
import communitiesData from '../data/communities.json';
import './CommunitiesPage.css';

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        title={communitiesData.pageHeader.title}
        subtitle={communitiesData.pageHeader.subtitle}
      />

      <section className="communities-section">
        <div className="container">
          <SectionHeader title="Padroeiros(as) e Horários das Celebrações na Comunidade" />
          <div className="communities-grid">
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

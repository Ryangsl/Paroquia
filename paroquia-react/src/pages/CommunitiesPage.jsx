import PageHeader from '../components/layout/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import CommunityCard from '../components/communities/CommunityCard';
import communitiesData from '../data/communities.json';

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        title={communitiesData.pageHeader.title}
        subtitle={communitiesData.pageHeader.subtitle}
      />

      <section className="bg-secondary">
        <div className="container">
          <SectionHeader title="Padroeiros(as) e Horários das Celebrações na Comunidade" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

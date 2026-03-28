import PageHeader from '../components/layout/PageHeader';
import AboutContent from '../components/about/AboutContent';
import ValuesGrid from '../components/about/ValuesGrid';
import MinistriesGrid from '../components/about/MinistriesGrid';
import CTASection from '../components/ui/CTASection';
import aboutData from '../data/about.json';

export default function AboutPage() {
  return (
    <>
      <PageHeader title={aboutData.pageHeader.title} subtitle={aboutData.pageHeader.subtitle} />
      <AboutContent />
      <ValuesGrid />
      <MinistriesGrid />
      <CTASection {...aboutData.cta} />
    </>
  );
}

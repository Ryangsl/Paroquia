import Hero from '../components/home/Hero';
import NoticesSection from '../components/home/NoticesSection';
import Highlights from '../components/home/Highlights';
import FeaturedEvents from '../components/home/FeaturedEvents';
import QuickInfo from '../components/home/QuickInfo';

export default function HomePage() {
  return (
    <>
      <Hero />
      <NoticesSection />
      <Highlights />
      <FeaturedEvents />
      <QuickInfo />
    </>
  );
}

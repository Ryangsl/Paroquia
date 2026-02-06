import Hero from "../components/home/Hero";
import InfoBar from "../components/home/InfoBar";
import WelcomeSection from "../components/home/WelcomeSection";
import QuickCards from "../components/home/QuickCards";
import Valores from "../components/home/Valores";
import ChamadaFinal from "../components/home/ChamadaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <WelcomeSection />
      <QuickCards />
      <Valores />
      <ChamadaFinal />
    </>
  );
}

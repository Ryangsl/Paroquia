import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HorariosHero from "../components/horarios/HorariosHero";
import HorariosMissas from "../components/horarios/HorariosMissas";
import CelebracoesEspeciais from "../components/horarios/CelebracoesEspeciais";
import OutrosSacramentos from "../components/horarios/OutrosSacramentos";
import InfoImportante from "../components/horarios/InfoImportante";

export default function Horarios() {
  return (
    <>
      <Header />
      <HorariosHero />
      <HorariosMissas />
      <CelebracoesEspeciais />
      <OutrosSacramentos />
      <InfoImportante />

      <Footer />
    </>
  );
}

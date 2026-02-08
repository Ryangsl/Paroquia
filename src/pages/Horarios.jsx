import HeroHorarios from "../components/horarios/HeroHorarios";
import MissasHorarios from "../components/horarios/MissasHorarios";
import CelebracoesEspeciais from "../components/horarios/CelebracoesEspeciais";
import OutrosSacramentos from "../components/horarios/OutrosSacramentos";

export default function Horarios() {
  return (
    <>
      <HeroHorarios />
      <MissasHorarios />
      <CelebracoesEspeciais />
      <OutrosSacramentos />
    </>
  );
}

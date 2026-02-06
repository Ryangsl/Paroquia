import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Historia from "../components/home/Historia";
import Valores from "../components/home/Valores";
import Ministerios from "../components/home/Ministerios";
import ChamadaFinal from "../components/home/ChamadaFinal";

export default function Home() {
  return (
    <>
      <Header />

      {/* Topo / Hero */}
      <Hero />

      {/* Nossa História + Missão */}
      <Historia />

      {/* Valores da Paróquia */}
      <Valores />

      {/* Ministérios e Pastorais */}
      <Ministerios />

      {/* Chamada para ação */}
      <ChamadaFinal />

      <Footer />
    </>
  );
}

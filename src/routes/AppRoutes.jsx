import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Horarios from "../pages/Horarios";
import Eventos from "../pages/Eventos";
import Contato from "../pages/Contato";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

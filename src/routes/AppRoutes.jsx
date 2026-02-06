import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Sobre from "../pages/Sobre";

import Eventos from "../pages/Eventos";

import Contato from "../pages/Contato";

import Horarios from "../pages/Horarios";

export default function AppRoutes() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/horarios" element={<Horarios />} />

      </Routes>
    </BrowserRouter>

  );

}
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Eventos from "../pages/Eventos";
import Contato from "../pages/Contato";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

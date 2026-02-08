import { Box } from "@chakra-ui/react";

import HistoriaPremium from "../components/sobre/HistoriaPremium";
import ValoresPremium from "../components/sobre/ValoresPremium";
import MinisteriosPremium from "../components/sobre/MinisteriosPremium";
import ChamadaFinal from "../components/home/ChamadaFinal";

export default function Sobre() {
  return (
    <Box bg="gray.50">
      <HistoriaPremium />
      <ValoresPremium />
      <MinisteriosPremium />
      <ChamadaFinal />
    </Box>
  );
}

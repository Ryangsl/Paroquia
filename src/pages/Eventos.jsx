import { Container, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import EventCard from "../components/eventos/EventCard";
import { getProximosEventos } from "../utils/eventosUtils";
import AtividadesRegulares from "../components/eventos/AtividadesRegulares";

export default function Eventos() {
  const proximos = getProximosEventos();

  return (
    <Box>

      {/* TÍTULO DA PÁGINA */}
      <Container maxW="container.lg" py={16}>
        <Heading textAlign="center" mb={4} fontSize={{ base: "3xl", md: "5xl" }}>
          Eventos da Paróquia
        </Heading>
      </Container>

      {/* PRÓXIMOS EVENTOS */}
      <Container maxW="container.lg" pb={20}>
        <Heading textAlign="center" mb={12}>
          Próximos Eventos
        </Heading>

        <SimpleGrid columns={[1]} spacing={8}>
  {proximos.map((evento) => (
    <EventCard
      key={evento.id}
      titulo={evento.titulo}
      data={evento.dataCalculada}
      descricao={evento.descricao}
      local={evento.local}
      horario={evento.horario}
    />
  ))}
</SimpleGrid>

      </Container>

      {/* ATIVIDADES REGULARES */}
      <AtividadesRegulares />

    </Box>
  );
}

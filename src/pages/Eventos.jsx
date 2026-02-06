import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import EventCard from "../components/eventos/EventCard";
import { eventos } from "../data/eventosData";
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

export default function Eventos() {
  return (
    <>
      <Header />

      <Container maxW="container.lg" py={10}>
        <Heading mb={6}>Eventos</Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {eventos.map((evento) => (
            <EventCard
              key={evento.id}
              titulo={evento.titulo}
              data={evento.data}
              descricao={evento.descricao}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </>
  );
}

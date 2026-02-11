import {
  Box,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import EventCard from "./EventCard";
import { eventos } from "../../data/eventosData";

export default function TodosEventos() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <Heading
          textAlign="center"
          fontSize="4xl"
          mb={12}
        >
          Todos os Eventos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          {eventos.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

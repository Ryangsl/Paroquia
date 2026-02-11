import { eventos } from "../../data/eventosData";
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";

export default function ProximosEventos() {
  const hoje = new Date();

  const eventosFuturos = eventos
    .filter((evento) => new Date(evento.data) >= hoje)
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, 3); // mostra apenas os 3 próximos

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <Heading textAlign="center" mb={10}>
          Próximos Eventos
        </Heading>

        <VStack spacing={6}>
          {eventosFuturos.map((evento) => (
            <Box
              key={evento.id}
              w="100%"
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="md"
            >
              <HStack justify="space-between" mb={2}>
                <Heading size="md">{evento.titulo}</Heading>
                <Badge colorScheme="yellow">
                  {new Date(evento.data).toLocaleDateString("pt-BR")}
                </Badge>
              </HStack>

              <Text fontWeight="bold">
                {evento.hora} • {evento.local}
              </Text>

              <Text mt={2} color="gray.600">
                {evento.descricao}
              </Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

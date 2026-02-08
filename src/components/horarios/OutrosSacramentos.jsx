import { Box, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";

const sacramentos = [
  {
    titulo: "🏠 Batismo",
    texto: "Domingos após missa das 8h"
  },
  {
    titulo: "💍 Matrimônio",
    texto: "Agendamento com antecedência mínima"
  },
  {
    titulo: "✝ Unção dos Enfermos",
    texto: "Conforme necessidade"
  },
  {
    titulo: "🕊 Primeira Comunhão",
    texto: "Conforme calendário da catequese"
  },
  {
    titulo: "🔥 Crisma",
    texto: "Conforme calendário diocesano"
  }
];

export default function OutrosSacramentos() {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <Heading textAlign="center" mb={4}>
          Outros Sacramentos
        </Heading>

        <Box w="60px" h="4px" bg="brand.gold" mx="auto" mb={12} />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {sacramentos.map((item, i) => (
            <Box key={i} bg="white" p={6} borderRadius="xl" boxShadow="sm">
              <Heading size="sm" mb={2}>
                {item.titulo}
              </Heading>
              <Text color="gray.600">{item.texto}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

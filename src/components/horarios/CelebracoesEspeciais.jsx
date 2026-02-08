import { Box, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";

const especiais = [
  {
    titulo: "✝ Primeira Sexta-feira",
    desc: "Adoração ao Sagrado Coração",
    hora: "Após missa das 19h"
  },
  {
    titulo: "🌹 Primeiro Sábado",
    desc: "Devoção ao Imaculado Coração",
    hora: "Após missa das 7h"
  },
  {
    titulo: "🕯 Adoração ao Santíssimo",
    desc: "Todas as quintas-feiras",
    hora: "18h – 19h"
  },
  {
    titulo: "📿 Terço Mariano",
    desc: "Todas as quartas-feiras",
    hora: "18:30"
  }
];

export default function CelebracoesEspeciais() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <Heading textAlign="center" mb={4}>
          Celebrações Especiais
        </Heading>

        <Box w="60px" h="4px" bg="brand.gold" mx="auto" mb={12} />

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {especiais.map((item, i) => (
            <Box
              key={i}
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="sm"
              textAlign="center"
            >
              <Heading size="sm" mb={3}>
                {item.titulo}
              </Heading>

              <Text color="gray.600">{item.desc}</Text>
              <Text fontWeight="bold" mt={2}>
                {item.hora}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

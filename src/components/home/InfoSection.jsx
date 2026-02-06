import { Box, SimpleGrid, Text, Container } from "@chakra-ui/react";

export default function InfoSection() {
  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.lg">
        <SimpleGrid columns={[1, 3]} spacing={6}>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Text fontWeight="bold">📍 Localização</Text>
            <Text>Curitiba - Paraná, Brasil</Text>
          </Box>

          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Text fontWeight="bold">⏰ Próxima Missa</Text>
            <Text>Domingo às 08:00 e 19:00</Text>
          </Box>

          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Text fontWeight="bold">📞 Contato</Text>
            <Text>(41) XXXX-XXXX</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

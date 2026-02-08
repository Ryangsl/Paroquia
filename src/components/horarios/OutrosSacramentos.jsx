import { Box, Container, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import SacramentoCard from "./SacramentoCard.jsx";
import { sacramentos } from "./sacramentosData";

export default function OutrosSacramentos() {
  return (
    <Box py={24} bg="gray.50">
      <Container maxW="container.xl">

        <Stack textAlign="center" mb={16}>
          <Heading size="xl">Outros Sacramentos</Heading>

          <Box w="60px" h="4px" bg="brand.gold" mx="auto" />

          <Text color="gray.600">
            Para os sacramentos abaixo, é necessário agendamento prévio
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {sacramentos.map((item, i) => (
            <SacramentoCard key={i} {...item} />
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}

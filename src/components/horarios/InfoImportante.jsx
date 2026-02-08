import { Box, Heading, Text, Stack, Container } from "@chakra-ui/react";

export default function InfoImportante() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <Box
          bg="white"
          borderLeft="6px solid"
          borderColor="brand.gold"
          p={8}
          borderRadius="xl"
          boxShadow="sm"
        >
          <Heading size="md" mb={6}>
            📋 Informações Importantes
          </Heading>

          <Stack spacing={3} color="gray.700">
            <Text>✓ Chegue com antecedência</Text>
            <Text>✓ Horários podem mudar em feriados</Text>
            <Text>✓ Semana Santa possui horários especiais</Text>
            <Text>✓ Missas de intenção devem ser agendadas</Text>
            <Text>✓ Secretaria: Seg-Sex 8h às 17h</Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

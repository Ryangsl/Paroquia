import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

export default function WelcomeSection() {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.lg">
        <Heading textAlign="center" mb={4}>
          Bem-vindo à Nossa Comunidade
        </Heading>

        <Box
          w="60px"
          h="4px"
          bg="brand.gold"
          mx="auto"
          mb={10}
        />

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box p={8} bg="gray.50" borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={3}>
              Nossa Paróquia
            </Heading>
            <Text>
              Conheça a história, missão e valores da nossa comunidade.
            </Text>
          </Box>

          <Box p={8} bg="gray.50" borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={3}>
              Horários das Missas
            </Heading>
            <Text>
              Confira os horários das celebrações e confissões.
            </Text>
          </Box>

          <Box p={8} bg="gray.50" borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={3}>
              Eventos
            </Heading>
            <Text>
              Participe dos encontros e atividades da paróquia.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack
} from "@chakra-ui/react";

export default function MissasHorarios() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">

        <Heading textAlign="center" fontSize={{ base: "3xl", md: "4xl" }}>
          Horários das Missas
        </Heading>

        <Box w="70px" h="4px" bg="brand.gold" mx="auto" mt={4} mb={16} />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

          {/* Matinais */}
          <HorarioCard
            icon="🌅"
            titulo="Missas Matinais"
            items={[
              ["Segunda-feira", "7:00h"],
              ["Terça-feira", "7:00h"],
              ["Quarta-feira", "7:00h"],
              ["Quinta-feira", "7:00h"],
              ["Sexta-feira", "7:00h"],
              ["Sábado", "7:00h"],
              ["Domingo", "8:00h"],
            ]}
          />

          {/* Noturnas */}
          <HorarioCard
            icon="🌙"
            titulo="Missas Noturnas"
            items={[
              ["Segunda-feira", "19:00h"],
              ["Terça-feira", "19:00h"],
              ["Quarta-feira", "19:00h"],
              ["Quinta-feira", "19:00h"],
              ["Sexta-feira", "19:00h"],
              ["Sábado", "19:00h"],
              ["Domingo", "19:00h"],
            ]}
          />

          {/* Confissões */}
          <HorarioCardConfissao />

        </SimpleGrid>
      </Container>
    </Box>
  );
}

function HorarioCard({ icon, titulo, items }) {
  return (
    <Box
      bg="white"
      p={10}
      borderRadius="xl"
      boxShadow="lg"
      textAlign="center"
      transition="0.3s"
      _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
    >
      <Text fontSize="42px" mb={6}>{icon}</Text>

      <Heading fontSize="2xl" mb={8}>
        {titulo}
      </Heading>

      <Stack spacing={3}>
        {items.map(([dia, hora]) => (
          <Text fontSize="lg" key={dia}>
            <Text as="span" fontWeight="bold">{dia}:</Text>{" "}
            <Text as="span" color="gray.600">{hora}</Text>
          </Text>
        ))}
      </Stack>
    </Box>
  );
}

function HorarioCardConfissao() {
  return (
    <Box
      bg="white"
      p={10}
      borderRadius="xl"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="42px" mb={6}>🙏</Text>

      <Heading fontSize="2xl" mb={8}>
        Sacramento da Confissão
      </Heading>

      <Stack spacing={4}>
        <Text fontSize="lg">
          <Text as="span" fontWeight="bold">Sábado:</Text>{" "}
          <Text as="span" color="gray.600">17:00 – 18:30</Text>
        </Text>

        <Text fontSize="lg">
          <Text as="span" fontWeight="bold">Domingo:</Text>{" "}
          <Text as="span" color="gray.600">30 min antes das missas</Text>
        </Text>

        <Text fontSize="lg">
          <Text as="span" fontWeight="bold">Durante a semana:</Text>{" "}
          <Text as="span" color="gray.600">Mediante agendamento</Text>
        </Text>

        <Text fontSize="sm" color="gray.500" fontStyle="italic">
          Para agendar, entre em contato com a secretaria paroquial
        </Text>
      </Stack>
    </Box>
  );
}

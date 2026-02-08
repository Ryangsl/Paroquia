import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";

export default function MassSchedule() {
  return (
    <Box py={20} bg="gray.50">
      <Heading
        textAlign="center"
        fontSize={{ base: "3xl", md: "4xl" }}
        color="brand.blue"
        fontWeight="700"
      >
        Horários das Missas
      </Heading>

      <Box
        w="70px"
        h="4px"
        bg="brand.gold"
        mx="auto"
        mt={4}
        mb={14}
        borderRadius="full"
      />

      <SimpleGrid
        maxW="1100px"
        mx="auto"
        px={6}
        columns={{ base: 1, md: 3 }}
        spacing={10}
      >
        <MassCard
          icon="🌅"
          title="Missas Matinais"
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

        <MassCard
          icon="🌙"
          title="Missas Noturnas"
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

        <ConfessionCard />
      </SimpleGrid>
    </Box>
  );
}

function MassCard({ icon, title, items }) {
  return (
    <Box
      bg="white"
      p={10}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
      transition="0.3s"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "2xl"
      }}
    >
      <Text fontSize="40px" mb={4}>{icon}</Text>

      <Heading size="lg" mb={6} color="brand.blue">
        {title}
      </Heading>

      <VStack spacing={3}>
        {items.map(([day, hour]) => (
          <Text fontSize="md" key={day}>
            <Text as="span" fontWeight="600">
              {day}:
            </Text>{" "}
            {hour}
          </Text>
        ))}
      </VStack>
    </Box>
  );
}

function ConfessionCard() {
  return (
    <Box
      bg="white"
      p={10}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="40px" mb={4}>🙏</Text>

      <Heading size="lg" mb={6} color="brand.blue">
        Sacramento da Confissão
      </Heading>

      <VStack spacing={3}>
        <Text>
          <b>Sábado:</b> 17:00h — 18:30h
        </Text>

        <Text>
          <b>Domingo:</b> 30 min antes das missas
        </Text>

        <Text>
          <b>Durante a semana:</b> Mediante agendamento
        </Text>

        <Text fontSize="sm" color="gray.500" fontStyle="italic" mt={3}>
          Para agendar, entre em contato com a secretaria paroquial
        </Text>
      </VStack>
    </Box>
  );
}

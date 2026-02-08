import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function CelebracoesEspeciais() {
  const celebracoes = [
    {
      icon: "✝️",
      titulo: "Primeira Sexta-feira",
      descricao: "Adoração ao Sagrado Coração de Jesus",
      horario: "Após a missa das 19:00",
    },
    {
      icon: "🌹",
      titulo: "Primeiro Sábado",
      descricao: "Devoção ao Imaculado Coração de Maria",
      horario: "Após a missa das 07:00",
    },
    {
      icon: "🕯️",
      titulo: "Adoração ao Santíssimo",
      descricao: "Todas as quintas-feiras",
      horario: "18:00 – 19:00",
    },
    {
      icon: "📿",
      titulo: "Terço Mariano",
      descricao: "Todas as quartas-feiras",
      horario: "18:30",
    },
  ];

  return (
    <Box py={20} bg="gray.50">
      <VStack spacing={4} mb={12}>
        <Heading size="xl">Celebrações Especiais</Heading>

        <Box w="70px" h="4px" bg="brand.gold" borderRadius="full" />

        <Text color="gray.600" textAlign="center">
          Momentos especiais de espiritualidade e devoção
        </Text>
      </VStack>

      <SimpleGrid
        maxW="1200px"
        mx="auto"
        px={6}
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={8}
      >
        {celebracoes.map((item, index) => (
          <Box
            key={index}
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="sm"
            textAlign="center"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "lg",
            }}
          >
            {/* Ícone */}
            <Box
              w="60px"
              h="60px"
              bg="brand.gold"
              color="white"
              fontSize="24px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={5}
            >
              {item.icon}
            </Box>

            {/* Título */}
            <Heading size="md" mb={3}>
              {item.titulo}
            </Heading>

            {/* Descrição */}
            <Text color="gray.600" fontSize="sm" mb={3}>
              {item.descricao}
            </Text>

            {/* Horário */}
            <Text fontWeight="semibold" color="brand.blue">
              {item.horario}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

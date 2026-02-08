import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaChurch, FaClock, FaPray } from "react-icons/fa";

export default function Horarios() {
  return (
    <Box bg="gray.50" py={{ base: 14, md: 20 }}>
      <Container maxW="container.lg">

        {/* Título */}
        <Heading
          textAlign="center"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={4}
        >
          Horários das Missas
        </Heading>

        <Box
          w="70px"
          h="4px"
          bg="brand.gold"
          mx="auto"
          mb={6}
          borderRadius="full"
        />

        <Text
          textAlign="center"
          color="gray.600"
          maxW="600px"
          mx="auto"
          mb={14}
        >
          Participe das celebrações e momentos de oração da nossa paróquia.
          Todos são bem-vindos.
        </Text>

        {/* GRID PRINCIPAL */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>

          {/* MISSAS */}
          <HorarioCard
            icon={FaChurch}
            titulo="Missas"
            horarios={[
              { label: "Domingo", value: "08:00 e 19:00", destaque: true },
              { label: "Quarta-feira", value: "19:30" },
            ]}
          />

          {/* CONFISSÕES */}
          <HorarioCard
            icon={FaPray}
            titulo="Confissões"
            horarios={[
              { label: "Sexta-feira", value: "18:00" },
            ]}
          />

        </SimpleGrid>
      </Container>
    </Box>
  );
}

/* CARD PADRÃO */
function HorarioCard({ icon, titulo, horarios }) {
  return (
    <Box
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="sm"
      transition="0.3s"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "lg",
      }}
    >
      {/* Header */}
      <Flex align="center" gap={4} mb={6}>
        <Icon as={icon} fontSize="28px" color="brand.gold" />
        <Heading size="md">{titulo}</Heading>
      </Flex>

      {/* Lista */}
      {horarios.map((item, index) => (
        <Flex
          key={index}
          justify="space-between"
          py={3}
          borderBottom={index !== horarios.length - 1 ? "1px solid" : "none"}
          borderColor="gray.100"
        >
          <Text
            fontWeight={item.destaque ? "bold" : "medium"}
            color={item.destaque ? "brand.gold" : "gray.700"}
          >
            {item.label}
          </Text>

          <Text
            fontWeight={item.destaque ? "bold" : "normal"}
          >
            {item.value}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

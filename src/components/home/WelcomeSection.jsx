import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  return (
    <Box py={24} bg="gray.50">
      <Container maxW="container.lg">
        {/* Título */}
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
          color="brand.blue"
          mb={3}
        >
          Bem-vindo à Nossa Comunidade
        </Heading>

        {/* Linha dourada */}
        <Box
          w="60px"
          h="4px"
          bg="brand.gold"
          mx="auto"
          mb={14}
          borderRadius="full"
        />

        {/* Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Card 1 */}
          <CardItem
            icon="⛪"
            title="Nossa Paróquia"
            text="Conheça a história, missão e valores da Paróquia Sagrado Coração de Jesus."
            link="/sobre"
            linkText="Saiba Mais →"
          />

          {/* Card 2 */}
          <CardItem
            icon="📅"
            title="Horários das Missas"
            text="Confira os horários das missas matinais, noturnas e confissões."
            link="/horarios"
            linkText="Ver Horários →"
          />

          {/* Card 3 */}
          <CardItem
            icon="🎉"
            title="Eventos"
            text="Participe dos eventos, grupos de oração e atividades da nossa comunidade."
            link="/eventos"
            linkText="Ver Eventos →"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

/* Card reutilizável */
function CardItem({ icon, title, text, link, linkText }) {
  return (
    <VStack
      bg="white"
      p={10}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
      spacing={5}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "xl",
      }}
    >
      <Box fontSize="48px">{icon}</Box>

      <Heading size="md" color="brand.blue">
        {title}
      </Heading>

      <Text color="gray.600">{text}</Text>

      <Text
        as={Link}
        to={link}
        color="brand.gold"
        fontWeight="semibold"
        _hover={{ textDecoration: "underline" }}
      >
        {linkText}
      </Text>
    </VStack>
  );
}

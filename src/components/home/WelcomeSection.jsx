import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Stack,
  Icon,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";

import { FaChurch, FaCalendarAlt, FaStar } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function WelcomeSection() {
  const cards = [
    {
      icon: FaChurch,
      title: "Nossa Paróquia",
      text: "Conheça a história, missão e valores da Paróquia Sagrado Coração de Jesus.",
      link: "/sobre",
      linkText: "Saiba Mais →"
    },
    {
      icon: FaCalendarAlt,
      title: "Horários das Missas",
      text: "Confira os horários das missas matinais, noturnas e confissões.",
      link: "/horarios",
      linkText: "Ver Horários →"
    },
    {
      icon: FaStar,
      title: "Eventos",
      text: "Participe dos eventos, grupos de oração e atividades da nossa comunidade.",
      link: "/eventos",
      linkText: "Ver Eventos →"
    }
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.lg">

        {/* Title */}
        <Stack spacing={4} align="center" mb={16}>
          <Heading
            textAlign="center"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="gray.800"
          >
            Bem-vindo à Nossa Comunidade
          </Heading>

          <Box w="70px" h="4px" bg="brand.gold" borderRadius="full" />
        </Stack>

        {/* Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {cards.map((card, index) => (
            <LinkBox
              key={index}
              bg="white"
              p={10}
              borderRadius="2xl"
              boxShadow="sm"
              transition="all .35s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "xl"
              }}
            >
              <Stack spacing={5} align="center" textAlign="center">

                <Box
                  bg="brand.gold"
                  color="white"
                  p={4}
                  borderRadius="xl"
                  fontSize="24px"
                >
                  <Icon as={card.icon} />
                </Box>

                <Heading size="md" color="gray.800">
                  {card.title}
                </Heading>

                <Text color="gray.600" fontSize="md">
                  {card.text}
                </Text>

                <LinkOverlay
                  as={RouterLink}
                  to={card.link}
                  fontWeight="bold"
                  color="brand.gold"
                  _hover={{ textDecoration: "none", opacity: 0.8 }}
                >
                  {card.linkText}
                </LinkOverlay>

              </Stack>
            </LinkBox>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}

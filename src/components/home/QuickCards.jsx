import { SimpleGrid, Box, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const cards = [
  {
    title: "Nossa Paróquia",
    text: "Conheça nossa história, missão e valores.",
    link: "/sobre"
  },
  {
    title: "Horários das Missas",
    text: "Confira os horários das celebrações.",
    link: "/horarios"
  },
  {
    title: "Eventos",
    text: "Participe das atividades da comunidade.",
    link: "/eventos"
  }
];

export default function QuickCards() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} px={10} py={16}>
      {cards.map((card, i) => (
        <Box
          key={i}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
          transition="0.3s"
          textAlign="center"
        >
          <Heading size="md" mb={3}>{card.title}</Heading>
          <Text mb={4}>{card.text}</Text>
          <Link as={RouterLink} to={card.link} color="yellow.500">
            Saiba mais →
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
}

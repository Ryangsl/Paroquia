import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import ScrollReveal from "../common/ScrollReveal";

const valores = [
  {
    icon: "❤️",
    titulo: "Amor",
    texto:
      "Amamos a Deus acima de tudo e ao próximo como a nós mesmos, seguindo o maior mandamento de Cristo.",
  },
  {
    icon: "🙏",
    titulo: "Fé",
    texto:
      "Cultivamos uma fé viva e ativa, fundamentada na Palavra de Deus e na tradição da Igreja.",
  },
  {
    icon: "🤝",
    titulo: "Comunhão",
    texto:
      "Promovemos a unidade e a fraternidade entre todos os membros da nossa comunidade paroquial.",
  },
  {
    icon: "🕊️",
    titulo: "Paz",
    texto:
      "Buscamos ser instrumentos de paz, promovendo reconciliação, perdão e esperança.",
  },
  {
    icon: "💪",
    titulo: "Serviço",
    texto:
      "Servimos com dedicação, seguindo o exemplo de Cristo que veio para servir.",
  },
  {
    icon: "📖",
    titulo: "Formação",
    texto:
      "Investimos na formação contínua da fé por meio da catequese e estudos bíblicos.",
  },
];

export default function Valores() {
  return (
    <Box bg="gray.50" py={24}>
      <Stack spacing={4} textAlign="center" mb={16}>
        <ScrollReveal>
          <Heading>Nossos Valores</Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Box
            w="60px"
            h="3px"
            bg="yellow.400"
            mx="auto"
            borderRadius="full"
          />
        </ScrollReveal>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        {valores.map((item, index) => (
          <ScrollReveal key={item.titulo} delay={index * 0.08}>
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              textAlign="center"
              shadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                shadow: "xl",
              }}
            >
              <Text fontSize="4xl" mb={4}>
                {item.icon}
              </Text>

              <Heading size="md" mb={3}>
                {item.titulo}
              </Heading>

              <Text color="gray.600" fontSize="sm">
                {item.texto}
              </Text>
            </Box>
          </ScrollReveal>
        ))}
      </SimpleGrid>
    </Box>
  );
}

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ScrollReveal from "../common/ScrollReveal";

const ministerios = [
  {
    titulo: "Ministério de Música",
    descricao: "Louvor e adoração através da música nas celebrações litúrgicas.",
    icone: "🎵",
  },
  {
    titulo: "Pastoral da Criança",
    descricao: "Cuidado e acompanhamento das crianças e suas famílias.",
    icone: "👶",
  },
  {
    titulo: "Pastoral dos Idosos",
    descricao: "Atenção especial e atividades para a terceira idade.",
    icone: "👴",
  },
  {
    titulo: "Pastoral Familiar",
    descricao: "Fortalecimento dos laços familiares à luz do Evangelho.",
    icone: "👨‍👩‍👧",
  },
  {
    titulo: "Catequese",
    descricao: "Formação religiosa para crianças, jovens e adultos.",
    icone: "📖",
  },
  {
    titulo: "Pastoral da Caridade",
    descricao: "Assistência aos necessitados e promoção da solidariedade.",
    icone: "🤝",
  },
];

export default function Ministerios() {
  return (
    <Box py={20} bg="white">
      {/* TÍTULO */}
      <ScrollReveal>
        <Heading textAlign="center" mb={4}>
          Ministérios e Pastorais
        </Heading>
        <Text textAlign="center" maxW="2xl" mx="auto" mb={12} color="gray.600">
          Nossa paróquia conta com diversos ministérios e pastorais que servem à comunidade
        </Text>
      </ScrollReveal>

      {/* CARDS */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={8}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        {ministerios.map((item, index) => (
          <ScrollReveal key={item.titulo} delay={index * 0.12}>
            <Box
              bg="gray.50"
              p={8}
              borderRadius="lg"
              shadow="sm"
              borderLeft="4px solid"
              borderColor="yellow.400"
              _hover={{
                transform: "translateY(-6px)",
                shadow: "lg",
              }}
              transition="all 0.3s ease"
            >
              <Text fontSize="3xl" mb={3}>
                {item.icone}
              </Text>
              <Heading size="md" mb={2}>
                {item.titulo}
              </Heading>
              <Text color="gray.600">{item.descricao}</Text>
            </Box>
          </ScrollReveal>
        ))}
      </SimpleGrid>
    </Box>
  );
}

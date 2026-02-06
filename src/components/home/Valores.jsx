import {
  Box,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const valores = [
  { titulo: "Amor", texto: "Amamos a Deus e ao próximo." },
  { titulo: "Fé", texto: "Fé viva e ativa na Palavra." },
  { titulo: "Comunhão", texto: "Unidade da comunidade." },
  { titulo: "Paz", texto: "Reconciliação e perdão." },
  { titulo: "Serviço", texto: "Servir como Cristo serviu." },
  { titulo: "Formação", texto: "Catequese e estudo bíblico." },
];

export default function Valores() {
  return (
    <Box py={20} bg="gray.50">
      <Heading textAlign="center" mb={12}>
        Nossos Valores
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={8}
        maxW="1200px"
        mx="auto"
        px={6}
      >
        {valores.map((v, i) => (
          <Box
            key={i}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
          >
            <Heading size="md">{v.titulo}</Heading>
            <Text mt={3}>{v.texto}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

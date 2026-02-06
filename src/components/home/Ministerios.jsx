import {
  Box,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ministerios = [
  "Ministério de Música",
  "Pastoral da Criança",
  "Pastoral dos Idosos",
  "Pastoral Familiar",
  "Catequese",
  "Pastoral da Caridade",
];

export default function Ministerios() {
  return (
    <Box py={20}>
      <Heading textAlign="center" mb={6}>
        Ministérios e Pastorais
      </Heading>

      <Text textAlign="center" mb={10}>
        Nossa paróquia conta com diversos ministérios.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        maxW="1200px"
        mx="auto"
        px={6}
      >
        {ministerios.map((m, i) => (
          <Box
            key={i}
            p={6}
            bg="gray.50"
            borderLeft="4px solid"
            borderColor="yellow.400"
            borderRadius="md"
          >
            {m}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

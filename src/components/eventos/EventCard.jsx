import { Box, Flex, Text, VStack } from "@chakra-ui/react";

export default function EventCard({
  titulo,
  data,
  descricao,
  local,
  horario,
}) {
  const dataObj = new Date(data);

  const dia = dataObj.getDate();
  const mes = dataObj
    .toLocaleString("pt-BR", { month: "short" })
    .toUpperCase();

  return (
    <Flex
      bg="gray.50"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderLeft="6px solid #C6A13E"
      _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
      transition="all 0.3s ease"
    >
      {/* BLOCO DATA */}
      <Flex
        bg="#C6A13E"
        color="white"
        align="center"
        justify="center"
        minW="110px"
        py={6}
        direction="column"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {dia}
        </Text>
        <Text fontSize="sm" letterSpacing="1px">
          {mes}
        </Text>
      </Flex>

      {/* CONTEÚDO */}
      <Box p={6} flex="1">
        <Text
          fontSize="xl"
          fontWeight="bold"
          mb={2}
          color="gray.800"
        >
          {titulo}
        </Text>

        <VStack align="start" spacing={1} mb={3}>
          {horario && (
            <Text fontSize="sm" color="gray.600">
              ⏰ {horario}
            </Text>
          )}

          {local && (
            <Text fontSize="sm" color="gray.600">
              📍 {local}
            </Text>
          )}
        </VStack>

        <Text fontSize="sm" color="gray.600">
          {descricao}
        </Text>
      </Box>
    </Flex>
  );
}

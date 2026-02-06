import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      minH="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bg="white"
      position="relative"
    >
      {/* Cruz de fundo */}
      <Box
        position="absolute"
        fontSize="300px"
        opacity={0.05}
        color="gold"
      >
        ✝
      </Box>

      <Stack spacing={6} zIndex={1}>
        <Heading size="2xl">Paróquia Sagrado Coração</Heading>

        <Text color="goldenrod" fontWeight="bold">
          Paraná - Brasil
        </Text>

        <Text maxW="600px">
          Venha celebrar sua fé conosco. Todos são bem-vindos!
        </Text>

        <Stack direction="row" spacing={4} justify="center">
          <Button
            colorScheme="yellow"
            as={RouterLink}
            to="/horarios"
          >
            Ver Horários das Missas
          </Button>

          <Button
            variant="outline"
            as={RouterLink}
            to="/contato"
          >
            Entre em Contato
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

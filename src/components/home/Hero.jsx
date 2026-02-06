import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      minH="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={6}
      bgGradient="linear(to-b, white, gray.50)"
    >
      <Stack spacing={6} maxW="720px">
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          color="gray.800"
        >
          Paróquia Sagrado Coração
        </Heading>

        <Text
          color="yellow.500"
          fontWeight="bold"
          letterSpacing="wide"
        >
          Paraná · Brasil
        </Text>

        <Text fontSize="lg" color="gray.600">
          Venha celebrar sua fé conosco.  
          Uma comunidade de amor, serviço e esperança.
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
        >
          <Button
            size="lg"
            colorScheme="yellow"
            as={Link}
            to="/horarios"
          >
            Ver Horários das Missas
          </Button>

          <Button
            size="lg"
            variant="outline"
            as={Link}
            to="/contato"
          >
            Entre em Contato
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={6}
    >
      <Stack spacing={6} maxW="700px">
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Paróquia Sagrado Coração
        </Heading>

        <Text color="yellow.500" fontWeight="bold">
          Paraná · Brasil
        </Text>

        <Text fontSize="lg" color="gray.600">
          Venha celebrar sua fé conosco. Todos são bem-vindos!
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
          <Button colorScheme="yellow" as={Link} to="/horarios">
            Ver Horários das Missas
          </Button>
          <Button variant="outline" as={Link} to="/contato">
            Entre em Contato
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

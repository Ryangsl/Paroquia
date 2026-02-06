import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function ChamadaFinal() {
  return (
    <Box bg="gray.50" py={24} textAlign="center">
      <ScrollReveal>
        <Heading mb={4}>Faça Parte da Nossa Comunidade</Heading>

        <Text maxW="2xl" mx="auto" mb={10} color="gray.600">
          Venha nos visitar e conhecer mais sobre nossa paróquia.
          Todos são bem-vindos!
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          justify="center"
        >
          <Button
            as={RouterLink}
            to="/horarios"
            size="lg"
            bg="yellow.400"
            color="gray.900"
            _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
            transition="all 0.3s ease"
          >
            Ver Horários das Missas
          </Button>

          <Button
            as={RouterLink}
            to="/contato"
            size="lg"
            variant="outline"
            borderColor="gray.700"
            color="gray.700"
            _hover={{
              bg: "gray.700",
              color: "white",
              transform: "translateY(-2px)",
            }}
            transition="all 0.3s ease"
          >
            Entre em Contato
          </Button>
        </Stack>
      </ScrollReveal>
    </Box>
  );
}

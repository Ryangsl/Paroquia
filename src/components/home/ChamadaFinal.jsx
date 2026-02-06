import { Box, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ChamadaFinal() {
  return (
    <Box py={20} textAlign="center" bg="blue.50">
      <Heading mb={6}>
        Faça Parte da Nossa Comunidade
      </Heading>

      <Button
        colorScheme="blue"
        size="lg"
        as={RouterLink}
        to="/contato"
      >
        Entre em Contato
      </Button>
    </Box>
  );
}

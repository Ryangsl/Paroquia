import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box textAlign="center" py={24} px={6}>
      <Heading fontSize="4xl">Paróquia Sagrado Coração</Heading>

      <Text mt={2} color="yellow.500" fontWeight="bold">
        Paraná - Brasil
      </Text>

      <Text mt={4} maxW="600px" mx="auto">
        Venha celebrar sua fé conosco. Todos são bem-vindos!
      </Text>

      <Stack direction="row" justify="center" mt={8} spacing={4}>
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
    </Box>
  );
}

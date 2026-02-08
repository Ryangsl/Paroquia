import { Box, Heading, Text, Container } from "@chakra-ui/react";

export default function HorariosHero() {
  return (
    <Box py={20} bg="gray.50" textAlign="center">
      <Container maxW="container.md">
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          color="gray.800"
          mb={4}
        >
          Horários das Celebrações
        </Heading>

        <Text color="gray.600" fontSize="lg">
          Confira os horários das missas, confissões e outras celebrações
        </Text>
      </Container>
    </Box>
  );
}

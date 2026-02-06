import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />

      <Container maxW="container.lg" py={10}>
        <Box textAlign="center">
          <Heading mb={4}>Bem-vindo à Paróquia</Heading>

          <Text fontSize="lg">
            Este é o site oficial da nossa paróquia.
          </Text>

          <Text mt={4} color="gray.600">
            Aqui você encontra informações sobre missas, eventos e atividades
            da comunidade.
          </Text>
        </Box>
      </Container>

      <Footer />
    </>
  );
}

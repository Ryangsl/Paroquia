import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="#2F4156" color="white" pt={14} pb={8} mt={20}>
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          
          {/* Coluna 1 */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.gold">
              Paróquia Sagrado Coração
            </Heading>

            <Text color="gray.300">
              Uma comunidade de fé, esperança e amor em Uberaba, Brasil.
            </Text>
          </VStack>

          {/* Coluna 2 */}
          <VStack align="start" spacing={3}>
            <Heading size="md" color="brand.gold">
              Links Rápidos
            </Heading>

            <FooterLink to="/">Início</FooterLink>
            <FooterLink to="/sobre">Sobre Nós</FooterLink>
            <FooterLink to="/horarios">Horários</FooterLink>
            <FooterLink to="/eventos">Eventos</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
            <FooterLink to="/comunidades">Comunidades</FooterLink>
          </VStack>

          {/* Coluna 3 */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.gold">
              Siga-nos
            </Heading>

            <HStack spacing={5} fontSize="22px">
              <Box _hover={{ color: "brand.gold", transform: "scale(1.1)" }} transition="0.3s">
                <FaFacebook />
              </Box>

              <Box _hover={{ color: "brand.gold", transform: "scale(1.1)" }} transition="0.3s">
                <FaInstagram />
              </Box>

              <Box _hover={{ color: "brand.gold", transform: "scale(1.1)" }} transition="0.3s">
                <FaYoutube />
              </Box>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={10} borderColor="whiteAlpha.300" />

        <Text textAlign="center" color="gray.400" fontSize="sm">
          © {new Date().getFullYear()} Paróquia Sagrado Coração. Todos os direitos reservados.
        </Text>
      </Container>
    </Box>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      as={NavLink}
      to={to}
      color="gray.300"
      _hover={{
        color: "brand.gold",
        transform: "translateX(3px)"
      }}
      transition="0.2s"
    >
      {children}
    </Link>
  );
}

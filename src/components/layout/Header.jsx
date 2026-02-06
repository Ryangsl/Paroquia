import { Box, Flex, Link, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Box bg="white" boxShadow="sm" py={4}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Link
            as={NavLink}
            to="/"
            fontWeight="bold"
            fontSize="lg"
            _hover={{ textDecoration: "none" }}
          >
            ✝ Sagrado Coração
          </Link>

          <Flex gap={6}>
            <Link as={NavLink} to="/" _activeLink={{ color: "gold", fontWeight: "bold" }}>
              Início
            </Link>
            <Link as={NavLink} to="/sobre" _activeLink={{ color: "gold", fontWeight: "bold" }}>
              Sobre
            </Link>
            <Link as={NavLink} to="/eventos" _activeLink={{ color: "gold", fontWeight: "bold" }}>
              Eventos
            </Link>
            <Link as={NavLink} to="/contato" _activeLink={{ color: "gold", fontWeight: "bold" }}>
              Contato
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

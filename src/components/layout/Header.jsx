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
            {["/", "/sobre", "/eventos", "/contato"].map((path, i) => (
              <Link
                key={i}
                as={NavLink}
                to={path}
                _hover={{ color: "brand.gold" }}
                _activeLink={{
                  color: "brand.gold",
                  fontWeight: "bold",
                }}
              >
                {["Início", "Sobre", "Eventos", "Contato"][i]}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

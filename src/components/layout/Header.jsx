import { Box, Flex, Link, Container, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Início", path: "/" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Horários", path: "/horarios" },
  { label: "Eventos", path: "/eventos" },
  { label: "Contato", path: "/contato" },
  { label: "Comunidades", path: "/comunidades" },
];

export default function Header() {
  return (
    <Box
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Container maxW="container.xl">
        <Flex h="72px" align="center" justify="space-between">
          
          {/* LOGO + NOME */}
          <HStack spacing={3}>
            <Text fontSize="24px" color="yellow.500">
              ✝
            </Text>

            <Text
              fontWeight="600"
              fontSize="lg"
              color="gray.700"
              letterSpacing="0.5px"
            >
              Sagrado Coração
            </Text>
          </HStack>

          {/* MENU */}
          <HStack spacing={8}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                as={NavLink}
                to={item.path}
                px={4}
                py={2}
                borderRadius="md"
                fontWeight="500"
                color="gray.600"
                _hover={{
                  textDecoration: "none",
                  color: "yellow.600",
                  bg: "gray.50",
                }}
                _activeLink={{
                  color: "yellow.600",
                  bg: "yellow.50",
                  fontWeight: "600",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

        </Flex>
      </Container>
    </Box>
  );
}

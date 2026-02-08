import { Box, Flex, Link, Container, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navItems = [
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
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex
          h="72px"
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <Flex align="center" gap={3}>
            <Text fontSize="xl" color="brand.gold">
              ✝
            </Text>

            <Text
              fontWeight="semibold"
              fontSize="lg"
              color="gray.700"
              letterSpacing="0.3px"
            >
              Sagrado Coração
            </Text>
          </Flex>

          {/* Menu */}
          <Flex gap={2} align="center">
            {navItems.map((item) => (
              <Link
                  as={NavLink}
                  to={item.path}
                  px={4}
                  py={2}
                  fontSize="sm"
                  fontWeight="medium"
                  borderRadius="md"
                  color="gray.600"
                  position="relative"
                  transition="all 0.25s ease"
                  _after={{
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    width: "0%",
                    height: "2px",
                    bg: "brand.gold",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  }}
                  _hover={{
                    color: "gray.900",
                    _after: { width: "70%" }
                  }}
                  _activeLink={{
                    color: "brand.gold",
                    _after: { width: "70%" }
                  }}
                >

                {item.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

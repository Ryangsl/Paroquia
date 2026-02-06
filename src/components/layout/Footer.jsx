import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box bg="blue.900" color="gray.200" pt={20}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        {/* COLUNA 1 */}
        <Box>
          <Heading size="md" color="yellow.400" mb={4}>
            Paróquia Sagrado Coração
          </Heading>
          <Text>
            Uma comunidade de fé, esperança e amor em Uberaba, Brasil.
          </Text>
        </Box>

        {/* COLUNA 2 */}
        <Box>
          <Heading size="md" color="yellow.400" mb={4}>
            Links Rápidos
          </Heading>
          <Stack spacing={2}>
            <Link as={RouterLink} to="/">Início</Link>
            <Link as={RouterLink} to="/sobre">Sobre Nós</Link>
            <Link as={RouterLink} to="/horarios">Horários</Link>
            <Link as={RouterLink} to="/eventos">Eventos</Link>
            <Link as={RouterLink} to="/contato">Contato</Link>
          </Stack>
        </Box>

        {/* COLUNA 3 */}
        <Box>
          <Heading size="md" color="yellow.400" mb={4}>
            Siga-nos
          </Heading>
          <Stack direction="row" spacing={4} fontSize="xl">
            <Link href="#" aria-label="Facebook">📘</Link>
            <Link href="#" aria-label="Instagram">📸</Link>
            <Link href="#" aria-label="YouTube">📺</Link>
          </Stack>
        </Box>
      </SimpleGrid>

      <Divider my={12} borderColor="gray.700" />

      <Text textAlign="center" pb={6} fontSize="sm" color="gray.400">
        © 2026 Paróquia Sagrado Coração Uberaba. Todos os direitos reservados.
      </Text>
    </Box>
  );
}

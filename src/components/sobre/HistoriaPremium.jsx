import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Divider
} from "@chakra-ui/react";
import { FaCross } from "react-icons/fa";

export default function HistoriaPremium() {
  return (
    <Box py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="container.lg">

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>

          {/* TEXTO */}
          <VStack align="start" spacing={6}>

            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              Nossa História
            </Heading>

            <Text color="gray.600" lineHeight="tall">
              A Paróquia Sagrado Coração de Jesus é uma comunidade católica
              dedicada à evangelização, serviço e acolhimento.
            </Text>

            <Text color="gray.600" lineHeight="tall">
              Ao longo dos anos, crescemos não apenas em número,
              mas em espiritualidade, missão e compromisso cristão.
            </Text>

            <Divider />

            <Heading size="md">Nossa Missão</Heading>

            <VStack align="start" spacing={3}>
              {[
                "Proclamar o Evangelho de Jesus Cristo",
                "Celebrar os sacramentos com reverência",
                "Formar discípulos comprometidos",
                "Servir com amor e compaixão",
                "Construir comunidade acolhedora"
              ].map((item, i) => (
                <Box key={i} display="flex" alignItems="center" gap={3}>
                  <Icon as={FaCross} color="brand.gold" />
                  <Text color="gray.600">{item}</Text>
                </Box>
              ))}
            </VStack>

          </VStack>

          {/* CARD VISUAL CLEAN */}
          <Box
            bg="gray.50"
            borderRadius="2xl"
            p={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="lg"
          >
            <Icon as={FaCross} boxSize={12} color="brand.gold" mb={6} />
            <Text fontWeight="semibold" fontSize="lg">
              Sagrado Coração de Jesus
            </Text>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}

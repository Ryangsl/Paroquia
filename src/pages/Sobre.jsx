import {
  Box,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  Stack,
  Flex,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCross, FaChurch, FaUsers, FaHandsHelping } from "react-icons/fa";

export default function Sobre() {
  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl">

        {/* GRID PRINCIPAL */}
        <Grid templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }} gap={16}>

          {/* ================= ESQUERDA TEXTO ================= */}
          <GridItem>
            <Stack spacing={14}>

              {/* HISTÓRIA */}
              <Box>
                <Heading mb={6}>Nossa História</Heading>

                <Stack spacing={5} color="gray.600" fontSize="lg">
                  <Text>
                    A Paróquia Sagrado Coração de Jesus é uma comunidade católica
                    vibrante fundada com a missão de servir a Deus e à comunidade.
                  </Text>

                  <Text>
                    Ao longo dos anos crescemos não apenas em número, mas em fé,
                    espiritualidade e compromisso com os valores cristãos.
                  </Text>
                </Stack>
              </Box>

              {/* MISSÃO */}
              <Box>
                <Heading size="lg" mb={6}>Nossa Missão</Heading>

                <Stack spacing={3} color="gray.600">
                  <MissaoItem text="Proclamar o Evangelho de Jesus Cristo" />
                  <MissaoItem text="Celebrar os sacramentos com reverência" />
                  <MissaoItem text="Formar discípulos comprometidos" />
                  <MissaoItem text="Servir com caridade e compaixão" />
                  <MissaoItem text="Construir uma comunidade acolhedora" />
                  <MissaoItem text="Promover justiça social e dignidade humana" />
                </Stack>
              </Box>

              {/* COMUNIDADE */}
              <Box>
                <Heading size="lg" mb={6}>Nossa Comunidade</Heading>

                <Stack spacing={4} color="gray.600">
                  <Text>
                    Somos uma família de fé dedicada a viver os ensinamentos de Cristo
                    e compartilhar o amor com todos.
                  </Text>

                  <Text>
                    Oferecemos ministérios, grupos de oração e atividades para todas
                    as idades.
                  </Text>

                  <Text fontWeight="semibold" color="gray.700">
                    Aqui você encontrará paz, oração e comunhão fraterna.
                  </Text>
                </Stack>
              </Box>

            </Stack>
          </GridItem>

          {/* ================= DIREITA VISUAL ================= */}
          <GridItem>
            <Stack spacing={10}>

              {/* CARD PRINCIPAL */}
              <Box
                bg="white"
                borderRadius="2xl"
                p={10}
                border="2px solid"
                borderColor="brand.gold"
                boxShadow="xl"
                textAlign="center"
              >
                <Icon as={FaCross} boxSize={10} color="brand.gold" mb={4} />

                <Heading size="md">
                  Sagrado Coração de Jesus
                </Heading>

                <Text mt={3} color="gray.600">
                  Amor, fé e serviço à comunidade.
                </Text>
              </Box>

              {/* ESTATÍSTICAS — preenche espaço vazio */}
              <SimpleGrid columns={2} spacing={6}>
                <StatCard icon={FaChurch} number="30+" label="Anos Servindo" />
                <StatCard icon={FaUsers} number="1500+" label="Fiéis" />
                <StatCard icon={FaHandsHelping} number="12+" label="Pastorais" />
                <StatCard icon={FaCross} number="100+" label="Eventos / Ano" />
              </SimpleGrid>

              {/* DESTAQUE EXTRA */}
              <Box
                bg="brand.blue"
                color="white"
                borderRadius="2xl"
                p={8}
                boxShadow="lg"
              >
                <Heading size="md" mb={3}>
                  Faça Parte da Nossa Comunidade
                </Heading>

                <Text opacity={0.9}>
                  Venha viver sua fé conosco e participar das atividades
                  pastorais e sociais.
                </Text>
              </Box>

            </Stack>
          </GridItem>

        </Grid>

      </Container>
    </Box>
  );
}

/* ===== COMPONENTES ===== */

function MissaoItem({ text }) {
  return (
    <Flex gap={3} align="start">
      <Box color="brand.gold" mt="6px">✝</Box>
      <Text>{text}</Text>
    </Flex>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="md"
      textAlign="center"
      _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
      transition="0.3s"
    >
      <Icon as={icon} boxSize={6} color="brand.gold" mb={2} />
      <Heading size="md">{number}</Heading>
      <Text fontSize="sm" color="gray.500">{label}</Text>
    </Box>
    
  );
}



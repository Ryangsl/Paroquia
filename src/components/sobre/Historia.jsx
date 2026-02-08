import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Stack,
  Divider,
  Flex,
  Icon
} from "@chakra-ui/react";
import { FaCross } from "react-icons/fa";

export default function Historia() {
  return (
    <Box bg="gray.50" py={{ base: 16, md: 24 }}>
      <Container maxW="container.lg">

        <Grid
          templateColumns={{ base: "1fr", md: "1.3fr 1fr" }}
          gap={12}
          alignItems="center"
        >
          {/* TEXTO */}
          <Stack spacing={8}>

            {/* HISTÓRIA */}
            <Box>
              <Heading size="lg" mb={4}>
                Nossa História
              </Heading>

              <Text color="gray.700" lineHeight="tall">
                A Paróquia Sagrado Coração de Jesus é uma comunidade católica
                vibrante localizada no Brasil. Fundada com o propósito de servir
                a Deus e à comunidade, temos sido um farol de fé, esperança e amor
                para todos que buscam uma conexão mais profunda com Cristo.
              </Text>

              <Text color="gray.700" mt={4} lineHeight="tall">
                Nossa paróquia tem suas raízes firmemente plantadas nos
                ensinamentos da Igreja Católica Apostólica Romana e, ao longo dos
                anos, crescemos não apenas em número, mas também em espírito e
                compromisso com os valores cristãos.
              </Text>
            </Box>

            <Divider />

            {/* MISSÃO */}
            <Box>
              <Heading size="md" mb={4}>
                Nossa Missão
              </Heading>

              <Text color="gray.700" mb={4}>
                Servir a Deus e à comunidade através da fé, amor e serviço.
              </Text>

              <Stack spacing={2}>
                {[
                  "Proclamar o Evangelho de Jesus Cristo",
                  "Celebrar os sacramentos com reverência",
                  "Formar discípulos comprometidos",
                  "Servir aos necessitados com compaixão",
                  "Construir uma comunidade acolhedora",
                  "Promover justiça social e dignidade humana"
                ].map((item, i) => (
                  <Flex key={i} align="center" gap={3}>
                    <Icon as={FaCross} color="yellow.500" fontSize="12px" />
                    <Text color="gray.700">{item}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>

            <Divider />

            {/* COMUNIDADE */}
            <Box>
              <Heading size="md" mb={4}>
                Nossa Comunidade
              </Heading>

              <Text color="gray.700" lineHeight="tall">
                Somos uma família de fé dedicada a viver os ensinamentos de Cristo
                e a compartilhar Seu amor com todos. Nossa paróquia oferece diversos
                ministérios, grupos de oração e atividades para todas as idades.
              </Text>

              <Text color="gray.700" mt={4} lineHeight="tall">
                Aqui você encontrará um lugar de paz, oração e comunhão fraterna.
                Seja sempre bem-vindo à nossa comunidade.
              </Text>
            </Box>

          </Stack>

          {/* CARD VISUAL */}
          <Box
            bg="white"
            borderRadius="xl"
            p={12}
            textAlign="center"
            border="2px solid"
            borderColor="yellow.400"
            boxShadow="lg"
          >
            <Icon
              as={FaCross}
              fontSize="60px"
              color="yellow.500"
              mb={6}
            />

            <Heading size="md">
              Sagrado Coração de Jesus
            </Heading>
          </Box>

        </Grid>
      </Container>
    </Box>
  );
}

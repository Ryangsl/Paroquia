import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Divider,
} from "@chakra-ui/react";
import ScrollReveal from "../common/ScrollReveal";

export default function Historia() {
  return (
    <Box bg="white" py={24}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={16}
        maxW="6xl"
        mx="auto"
        px={6}
        alignItems="center"
      >
        {/* TEXTO */}
        <Stack spacing={6}>
          <ScrollReveal>
            <Heading size="lg">Nossa História</Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Text color="gray.600">
              A Paróquia Sagrado Coração de Jesus é uma comunidade católica
              vibrante localizada em Uberaba, Minas Gerais, Brasil. Fundada com
              o propósito de servir a Deus e à nossa comunidade, temos sido um
              farol de fé, esperança e amor para todos que buscam uma conexão
              mais profunda com Cristo.
            </Text>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Text color="gray.600">
              Nossa paróquia tem suas raízes firmemente plantadas nos
              ensinamentos da Igreja Católica Apostólica Romana e, ao longo dos
              anos, temos crescido não apenas em número, mas também em espírito
              e compromisso com os valores cristãos.
            </Text>
          </ScrollReveal>

          <Divider />

          <ScrollReveal delay={0.3}>
            <Heading size="md">Nossa Missão</Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Text color="gray.600">
              Nossa missão é servir a Deus e à nossa comunidade através da fé,
              amor e serviço. Buscamos:
            </Text>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Stack spacing={3} pl={4} color="gray.600">
              <Text>✝ Proclamar o Evangelho de Jesus Cristo</Text>
              <Text>✝ Celebrar os sacramentos com reverência e devoção</Text>
              <Text>✝ Formar discípulos comprometidos com a fé católica</Text>
              <Text>✝ Servir os necessitados com caridade e compaixão</Text>
              <Text>✝ Construir uma comunidade acolhedora e inclusiva</Text>
              <Text>✝ Promover a justiça social e a dignidade humana</Text>
            </Stack>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <Heading size="md">Nossa Comunidade</Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <Text color="gray.600">
              Somos uma família de fé dedicada a viver os ensinamentos de
              Cristo e a compartilhar Seu amor com todos. Nossa paróquia
              oferece diversos ministérios, grupos de oração e atividades para
              todas as idades, desde crianças até idosos.
            </Text>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <Text color="gray.600">
              Aqui você encontrará um lugar de paz, oração e comunhão fraterna.
              Seja sempre bem-vindo à nossa comunidade.
            </Text>
          </ScrollReveal>
        </Stack>

        {/* BLOCO VISUAL */}
        <ScrollReveal delay={0.3}>
          <Box
            border="2px solid"
            borderColor="yellow.400"
            borderRadius="xl"
            p={12}
            textAlign="center"
            shadow="lg"
          >
            <Text fontSize="6xl" color="yellow.400" mb={4}>
              ✝
            </Text>
            <Heading size="md">Sagrado Coração de Jesus</Heading>
          </Box>
        </ScrollReveal>
      </SimpleGrid>
    </Box>
  );
}

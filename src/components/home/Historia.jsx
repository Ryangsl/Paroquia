import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Historia() {
  return (
    <Box maxW="1200px" mx="auto" py={20} px={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <Box>
          <Heading size="lg">Nossa História</Heading>

          <Text mt={4}>
            A Paróquia Sagrado Coração de Jesus é uma comunidade
            católica vibrante localizada em Uberaba, Minas Gerais,
            Brasil.
          </Text>

          <Text mt={4}>
            Fundada com o propósito de servir a Deus e à nossa
            comunidade, somos um farol de fé, esperança e amor.
          </Text>

          <Heading size="md" mt={8}>
            Nossa Missão
          </Heading>

          <List spacing={3} mt={4}>
            <ListItem>✝ Proclamar o Evangelho</ListItem>
            <ListItem>✝ Celebrar os sacramentos</ListItem>
            <ListItem>✝ Formar discípulos</ListItem>
            <ListItem>✝ Servir com caridade</ListItem>
          </List>
        </Box>

        <Box
          border="2px solid"
          borderColor="yellow.400"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xl"
        >
          ✝ Sagrado Coração de Jesus
        </Box>
      </SimpleGrid>
    </Box>
  );
}

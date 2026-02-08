import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";

import {
  FaMusic,
  FaChild,
  FaHeart,
  FaBook,
  FaHandsHelping,
  FaUserFriends,
} from "react-icons/fa";

const ministerios = [
  {
    titulo: "Ministério de Música",
    icon: FaMusic,
  },
  {
    titulo: "Pastoral da Criança",
    icon: FaChild,
  },
  {
    titulo: "Pastoral Familiar",
    icon: FaHeart,
  },
  {
    titulo: "Catequese",
    icon: FaBook,
  },
  {
    titulo: "Pastoral da Caridade",
    icon: FaHandsHelping,
  },
  {
    titulo: "Pastoral dos Idosos",
    icon: FaUserFriends,
  },
];

export default function Ministerios() {
  return (
    <Box py={24} bg="gray.50">
      <Container maxW="container.xl">
        
        {/* Título */}
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
          color="gray.800"
        >
          Ministérios e Pastorais
        </Heading>

        {/* Linha dourada */}
        <Box
          w="70px"
          h="4px"
          bg="brand.gold"
          mx="auto"
          mt={4}
          mb={6}
          borderRadius="full"
        />

        <Text
          textAlign="center"
          color="gray.600"
          maxW="600px"
          mx="auto"
          mb={16}
        >
          Conheça os serviços que ajudam a transformar vidas na comunidade.
        </Text>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {ministerios.map((item, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              justify="center"
              p={10}
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              transition="all .3s ease"
              cursor="pointer"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
            >
              {/* Icon */}
              <Flex
                w="60px"
                h="60px"
                align="center"
                justify="center"
                borderRadius="full"
                bg="yellow.50"
                mb={5}
              >
                <Icon
                  as={item.icon}
                  boxSize={6}
                  color="brand.gold"
                />
              </Flex>

              {/* Texto */}
              <Text
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
                color="gray.700"
              >
                {item.titulo}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}

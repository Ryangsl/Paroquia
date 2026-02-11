import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const atividades = [
  {
    dia: "Segunda-feira",
    titulo: "Grupo de Estudos Bíblicos",
    horario: "19:30h - 21:00h",
    descricao:
      "Estudo aprofundado da Palavra de Deus com reflexões e partilhas.",
  },
  {
    dia: "Terça-feira",
    titulo: "Pastoral da Família",
    horario: "20:00h - 21:30h",
    descricao:
      "Encontros para casais e famílias com temas sobre relacionamentos e fé.",
  },
  {
    dia: "Quarta-feira",
    titulo: "Terço Mariano",
    horario: "18:30h - 19:00h",
    descricao:
      "Oração do Santo Terço em comunidade antes da missa.",
  },
  {
    dia: "Quinta-feira",
    titulo: "Adoração ao Santíssimo",
    horario: "18:00h - 19:00h",
    descricao:
      "Momento de adoração e contemplação diante do Santíssimo Sacramento.",
  },
  {
    dia: "Sexta-feira",
    titulo: "Grupo de Oração",
    horario: "19:30h - 21:00h",
    descricao:
      "Louvor, oração e partilha em comunidade.",
  },
  {
    dia: "Sábado",
    titulo: "Catequese de Adultos",
    horario: "14:00h - 16:00h",
    descricao:
      "Formação para adultos que desejam receber os sacramentos.",
  },
  {
    dia: "Domingo",
    titulo: "Escola Dominical",
    horario: "09:00h - 10:30h",
    descricao:
      "Atividades religiosas e recreativas para crianças.",
  },
];

export default function AtividadesRegulares() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={4}>
          Atividades Regulares
        </Heading>

        <Box
          w="60px"
          h="4px"
          bg="brand.gold"
          mx="auto"
          mb={6}
        />

        <Text
          textAlign="center"
          color="gray.600"
          mb={12}
        >
          Atividades que acontecem semanalmente em nossa paróquia
        </Text>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {atividades.map((atividade, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="0.3s"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "lg",
              }}
            >
              <Badge
                bg="brand.gold"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                mb={4}
              >
                {atividade.dia}
              </Badge>

              <Heading size="md" mb={3}>
                {atividade.titulo}
              </Heading>

              <Stack direction="row" align="center" mb={3}>
                <FaClock color="#C6A13E" />
                <Text fontWeight="semibold">
                  {atividade.horario}
                </Text>
              </Stack>

              <Text color="gray.600">
                {atividade.descricao}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function InfoBar() {
  return (
    <Box bg="gray.50" py={10} px={6}>
      <SimpleGrid
        maxW="1100px"
        mx="auto"
        columns={{ base: 1, md: 3 }}
        spacing={6}
      >
        {/* Localização */}
        <InfoItem
          icon={<FaMapMarkerAlt />}
          title="Localização"
          text="Curitiba - Paraná, Brasil"
        />

        {/* Próxima Missa */}
        <InfoItem
          icon={<FaClock />}
          title="Próxima Missa"
          text="Domingo às 08:00 e 19:00"
        />

        {/* Contato */}
        <InfoItem
          icon={<FaPhoneAlt />}
          title="Contato"
          text="(41) XXXX-XXXX"
        />
      </SimpleGrid>
    </Box>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <Flex
      align="center"
      gap={4}
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="sm"
      _hover={{
        boxShadow: "md",
        transform: "translateY(-4px)"
      }}
      transition="0.3s"
    >
      <Box fontSize="22px" color="yellow.500">
        {icon}
      </Box>

      <Box>
        <Text fontWeight="bold">{title}</Text>
        <Text color="gray.600">{text}</Text>
      </Box>
    </Flex>
  );
}

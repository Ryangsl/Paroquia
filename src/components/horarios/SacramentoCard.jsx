import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function SacramentoCard({ icon, titulo, info }) {
  return (
    <Box
      bg="white"
      p={8}
      borderRadius="2xl"
      boxShadow="lg"
      transition="0.3s"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "xl",
      }}
    >
      <Stack spacing={4}>
        <Text fontSize="30px">{icon}</Text>

        <Heading size="md">{titulo}</Heading>

        <Stack spacing={2}>
          {info.map((item, i) => (
            <Text key={i} color="gray.600">
              <Text as="span" fontWeight="bold" color="gray.800">
                {item.label}:{" "}
              </Text>
              {item.text}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function Horarios() {
  return (
    <Box px={10} py={16}>
      <Heading mb={6}>Horários das Missas</Heading>

      <Stack spacing={4}>
        <Text><strong>Domingo:</strong> 08:00 · 19:00</Text>
        <Text><strong>Quarta-feira:</strong> 19:30</Text>
        <Text><strong>Confissões:</strong> Sexta 18:00</Text>
      </Stack>
    </Box>
  );
}

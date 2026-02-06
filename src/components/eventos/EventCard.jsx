import { Box, Heading, Text } from "@chakra-ui/react";

export default function EventCard ({ titulo, data, descricao}) {
    return (
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">{titulo}</Heading>
            <Text fontSize="sm">{data}</Text>
            <Text mt={2}>{descricao}</Text>
        </Box>
    );
}
import { Container, Heading, Text, Stack, Box} from "@chakra-ui/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Horarios() {
    return (
        <>
            <Header />
            <Container maxW="container.md" py={10}>
                <Heading mb={6}>Horários de Missa</Heading>

                <Stack spacing={4}>
                    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                        <Text fontWeight="bold">Domingo</Text>
                        <Text>08:00 - 18:00</Text>
                    </Box>

                    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                        <Text fontWeight="bold">Quarta-feira</Text>
                        <Text>19:30</Text>
                    </Box>
                    
                    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                        <Text fontWeight="bold">Sexta-feira</Text>
                        <Text>19:30</Text>
                    </Box>
                </Stack>
            </Container>
            <Footer />
        </>
    );
}
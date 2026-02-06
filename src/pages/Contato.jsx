import {
    Container,
    Heading,
    Stack,
    Input,
    Textarea,
    Button
} from "@chakra-ui/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Contato() {
    return (
        <>
        <Header />
        <Container maxW="container.md" py={10}>
            <Heading mb={6}>Fale Conosco</Heading>

            <Stack spacing={4}>
                <Input placeholder="Seu nome" />
                <Input placeholder="Seu email" type="email" />
                <Textarea placeholder="Sua mensagem" />
                <Button colorScheme="blue">Enviar</Button>

            </Stack>
        </Container>
        <Footer />

        </>
    );
}
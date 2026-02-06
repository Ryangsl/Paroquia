import { Container, Heading, Text, Stack} from "@chakra-ui/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Sobre () {
    return (
        <>
            <Header />

            <Container maxW="container.lg" py={10}>
                <Stack spacing={6}>
                    <Heading>Sobre a Paroquia</Heading>

                    <Text fontSize="lg">
                        Nossa paróquia é um espaço de fé, acohlimento e evangelização.
                    </Text>

                    <Text>
                        Fundada com a missão de servir à comunidade, promovemos celebrações, encontros pastorais e ações sociais.
                    </Text>

                    <Text>
                        Nossa missão é fortalecer a fé e construir uma comunidade unida.
                    </Text>
                </Stack>
            </Container>

            <Footer />
        </>
    );
}
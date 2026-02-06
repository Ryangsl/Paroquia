import { eventos } from "../data/eventosData";
import { EventCard } from "../components/eventos/EventCard";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SimpleGrid } from "@chakra-ui/react";

export default function Eventos() {
    return (
        <>
            <Header />
            <SimpleGrid columns={[1, 2, 3]} spacing ={6} p={6}>
                {eventos.map(evento >= (
                    <EventCard key={evento.id} {...evento} />
                ))}
            </SimpleGrid>
            <Footer />
        </>
    );
}


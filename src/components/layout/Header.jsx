import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";

export default function Header () {
    return (
        <Box bg="blue.700" p={4} color="white">
            <Flex justify="space-between">
                <Link as={RouterLink} to="/">Início</Link>
                <Link as={RouterLink} to="/sobre">Início</Link>
                <Link as={RouterLink} to="/eventos">Eventos</Link>
                <Link as={RouterLink} to="/contato">Contato</Link>
            </Flex>
        </Box>
    );
}
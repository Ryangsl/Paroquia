import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    colors: {
        brand: {
            500: "#1E3A8A", // AZUL IGREJA
            600: "162E6F"
        }
    },
    fonts: {
        heading: "Georgia, serif",
        body: "Arial, sans-serif"
    }
});

export default theme;
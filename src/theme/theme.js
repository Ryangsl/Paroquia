import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      gold: "#D4AF37",
      blue: "#1E3A8A",
    },
  },
  fonts: {
    heading: "Georgia, serif",
    body: "Arial, sans-serif",
  },
});

export default theme;

import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/500.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

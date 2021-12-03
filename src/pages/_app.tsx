import { AppProps } from "next/app";

// Import global providers
import MDXProvider from "src/MDXProvider";
import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import UITheme from "src/UIThemeProvider";

// Import global typography
import "@fontsource/public-sans/variable.css";

// Import global typography using fixed-axle fonts (compatibility)
import "@fontsource/public-sans/200.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="ulosino.com">
      <ChakraProvider theme={UITheme}>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </ChakraProvider>
    </PlausibleProvider>
  );
}

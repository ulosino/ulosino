import { AppProps } from "next/app";

// Import global providers
import MDXProvider from "providers/MDXProvider";
import { ChakraProvider } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";

// Import global analytics
import splitbee from "@splitbee/web";
import { useEffect } from "react";

// Import global components
import JSWarning from "components/JSWarning";

// Import global typography
import "@fontsource/public-sans/variable.css";

// Import global typography using fixed-axle fonts (compatibility)
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init({
      disableCookie: true,
      scriptUrl: "/tree.js",
      apiUrl: "/_oak",
    });
  }, []);
  return (
    <ChakraProvider theme={UITheme}>
      <MDXProvider>
        <noscript>
          <JSWarning />
        </noscript>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

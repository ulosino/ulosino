// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

import { useEffect } from "react";

// Chakra UI, icons, and other design imports
import "@fontsource/public-sans/variable.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

// Import Splitbee scripts
import splitbee from "@splitbee/web";

// There are two known technical limitations preventing _app.tsx from being expanded
// Primarily, keyboard shortcuts must be wrapped with KeyboardProvider, generating errors when used on <Layout>
// Plus, styling provided by ChakraProvider and UITheme may not be correct
// Instead, providers are imported by the <ApplicationProvider> provider (/providers/ApplicationProvider)
// It should be clear that this is not the preferred solution (note that changes would be breaking)

// Begin application
export default function Application({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // Suppress default/browser PWA installation prompts
  // There's a few PWA promotions sprinkled throughtout the app
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
    });
  });
  // Initilise Splitbee analytics tracking
  useEffect(() => {
    splitbee.init({
      disableCookie: true,
      scriptUrl: "/tree.js",
      apiUrl: "/_oak",
    });
  }, []);
  const getLayout = Component.getLayout ?? ((page) => page);
  // Wrapping <Component> with other components works in theory (preferred approach)
  // Using this function as a component in another function will generate errors
  return getLayout(<Component {...pageProps} />);
}

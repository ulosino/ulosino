// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

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

// Providers are imported by the Application Kit component

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
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

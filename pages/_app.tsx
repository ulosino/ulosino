import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// Import global typography
import "@fontsource/public-sans/variable.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function Application({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

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

// Routing
import Link from "next/link";

// Design
import {
  GeistProvider,
  CssBaseline,
  Button,
  Page,
  Text,
  Grid,
} from "@geist-ui/core";

// Providers
import { ErrorFallbackApplication } from "components/ErrorFallback";

// Import Splitbee scripts
import splitbee from "@splitbee/web";
import { useEffect } from "react";

// Begin application
export default function Application({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // Initilise Splitbee analytics tracking
  useEffect(() => {
    splitbee.init({
      disableCookie: true,
      scriptUrl: "/tree.js",
      apiUrl: "/_oak",
    });
  }, []);

  return (
    <GeistProvider>
      <CssBaseline />
      <ErrorFallbackApplication>
        <Page paddingTop={5}>
          <Page.Header>
            <Grid.Container gap={5} direction="row">
              <Grid>
                <Text h3>ULOSINO</Text>
              </Grid>
              <Grid>
                <Link href="/" passHref>
                  <Button>Home</Button>
                </Link>
              </Grid>
            </Grid.Container>
          </Page.Header>
          <Page.Content>
            <Grid.Container gap={5} direction="column">
              <Component {...pageProps} />
            </Grid.Container>
          </Page.Content>
        </Page>
      </ErrorFallbackApplication>
    </GeistProvider>
  );
}

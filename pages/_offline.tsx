// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

// Begin page
export default function OfflineFallback() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Offline</title>
        <meta property="og:title" content="ULOSINO &mdash; Offline" />
        <meta
          name="description"
          content="There were issues downloading data from the server."
        />
        <meta
          property="og:description"
          content="There were issues downloading data from the server."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">You're offline</Heading>
        <Text>There were issues downloading data from the server.</Text>
        <Text>
          Check your data and networking settings and then return to ULOSINO.
        </Text>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
OfflineFallback.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <ErrorLayout is404={false}>{page}</ErrorLayout>
      </Layout>
    </ApplicationProvider>
  );
};

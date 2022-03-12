// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Code } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

// Begin page
export default function Custom500() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; 500</title>
        <meta property="og:title" content="ULOSINO &mdash; 500" />
        <meta name="description" content="Internal Server Error." />
        <meta property="og:description" content="Internal Server Error." />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Something went wrong</Heading>
        <Text>
          It appears that the server is experiencing problems. No further
          details are available.
        </Text>
        <Text>Try again later as the issue is likely temporary.</Text>
        <Text fontSize="xs">
          You can look up this error code:{" "}
          <Code ms={1} fontSize="xs">
            HTTP 500
          </Code>
        </Text>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Custom500.getLayout = function getLayout(page: ReactElement) {
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

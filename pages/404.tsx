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
export default function Custom404() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; 404</title>
        <meta property="og:title" content="ULOSINO &mdash; 404" />
        <meta name="description" content="Page Not Found." />
        <meta property="og:description" content="Page Not Found." />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">There's nothing to show</Heading>
        <Text>A page couldn't be found at this URL.</Text>
        <Text>
          If you entered the URL manually, check it for spelling mistakes.
          Operating system pages look like{" "}
          <Code>ulosino.com/browse/operating-system</Code>. If there was once a
          page here, it was likely moved or deleted.
        </Text>
        <Text>Go Home to make a search and discover something new.</Text>
        <Text fontSize="xs">
          You can look up this error code:{" "}
          <Code ms={1} fontSize="xs">
            HTTP 404
          </Code>
        </Text>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <ErrorLayout is404={true}>{page}</ErrorLayout>
      </Layout>
    </ApplicationProvider>
  );
};

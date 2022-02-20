// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is a boilerplate error page
// Currently it serves no purpose other than testing ErrorLayout

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

// Begin page
export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Error</title>
        <meta property="og:title" content="ULOSINO &mdash; Error" />
        <meta name="description" content="Something went wrong." />
        <meta property="og:description" content="Something went wrong." />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Something went wrong</Heading>
        <Text>No further details are available.</Text>
        <Text>Go Home to make a search and discover something new.</Text>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout useBasicLayout={false} showPreferences={false}>
        <ErrorLayout is404={true}>{page}</ErrorLayout>
      </Layout>
    </ApplicationKit>
  );
};

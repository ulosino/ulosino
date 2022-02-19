// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import { NoJSWarningHome } from "components/NoJSWarning";

// Begin page
export default function Home() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Discover Open Source Operating Systems</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Discover Open Source OSs"
        />
        <meta
          name="description"
          content="ULOSINO is The Friendly Flow for open source operating system discovery. Search and discover Linux and BSD-based OSs faster and easier when the power of ULOSINO is in your flow."
        />
        <meta
          property="og:description"
          content="ULOSINO is The Friendly Flow for open source OS discovery. Search and discover Linux and BSD-based OSs in a modern setting."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Hi</Heading>
        <noscript>
          <NoJSWarningHome />
        </noscript>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout isBasicLayout={false}>{page}</Layout>
    </ApplicationKit>
  );
};

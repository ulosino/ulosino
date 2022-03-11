// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import AboutOptions from "components/AboutOptions";

// Begin page
export default function About() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; About ULOSINO</title>
        <meta property="og:title" content="About the ULOSINO Project" />
        <meta name="description" content="Learn about the ULOSINO project." />
        <meta
          property="og:description"
          content="Learn about the ULOSINO project."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">About ULOSINO</Heading>
        <Text>
          ULOSINO is the modern setting for open source operating system
          information.
        </Text>
        <Text>
          Our ambition is to make the hard easy. We've made discovering open
          source operating systems easy. We've made recommending open source
          operating systems easy with ULOSINO Matches. Plus, give capital with
          ULOSINO Tempo. Make moves faster when The Friendly Flow is in your
          flow.
        </Text>
        <Text>
          Learn more about the ULOSINO project with our detailed README.md file.
        </Text>
        <AboutOptions />
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
      </Layout>
    </ApplicationKit>
  );
};

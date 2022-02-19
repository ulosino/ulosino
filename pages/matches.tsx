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
import BrowseLayout from "components/layouts/BrowseLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import MatchesExperience from "components/matches/MatchesExperience";

// Begin page
export default function Matches() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; ULOSINO Matches</title>
        <meta property="og:title" content="ULOSINO Matches" />
        <meta
          name="description"
          content="Find an open source operating system that matches your preferences with ULOSINO Matches."
        />
        <meta
          property="og:description"
          content="Find an open source OS that matches your preferences with ULOSINO Matches."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">ULOSINO Matches</Heading>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Text>
          Find an OS that matches your preferences, quickly and easily.
        </Text>
        <MatchesExperience />
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Matches.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout isBasicLayout={false}>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer } from "components/Loading";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
const MatchesExperience = dynamic(
  () => import("components/matches/MatchesExperience"),
  {
    suspense: true,
  }
);

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
        <Suspense fallback={<LoadingServer />}>
          <MatchesExperience />
        </Suspense>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Matches.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationProvider>
  );
};

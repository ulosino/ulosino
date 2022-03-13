// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Kbd } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import CoreSearchGroup from "components/search/CoreSearchGroup";
import AdvancedSearchGroup from "components/search/AdvancedSearchGroup";
import SystemSearch from "components/search/SystemSearch";

// Markdown processing libraries
import { getOSPages } from "providers/OSPageProvider";

interface OSDataPage {
  AZOSPageData: any;
}

// Begin page
export default function AdvancedSearch({ AZOSPageData }: OSDataPage) {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Advanced Search</title>
        <meta property="og:title" content="ULOSINO Advanced Search" />
        <meta
          name="description"
          content="Search across the broad ULOSINO database across our collection of metadata."
        />
        <meta
          property="og:description"
          content="Search across the broad ULOSINO database across our collection of metadata."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Advanced Search</Heading>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Text>Take a search. Choose from 10 metadata categories.</Text>
        <Stack direction="column" spacing={2}>
          <Text textStyle="miniHeading" as="h6">
            Core Metadata Search
          </Text>
          <CoreSearchGroup data={AZOSPageData} />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text textStyle="miniHeading" as="h6">
            Advanced Metadata Search
          </Text>
          <AdvancedSearchGroup data={AZOSPageData} />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text textStyle="miniHeading" as="h6">
            ULOSINO System Search
          </Text>
          <SystemSearch data={AZOSPageData} />
        </Stack>
        <Text fontSize="xs">
          Get here quickly by pressing <Kbd>control</Kbd> + <Kbd>S</Kbd> or{" "}
          <Kbd>alt</Kbd> + <Kbd>S</Kbd> on Windows. You can also open a new tab
          here with <Kbd>control</Kbd> + <Kbd>option</Kbd> + <Kbd>N</Kbd>.
        </Text>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
AdvancedSearch.getLayout = function getLayout(page: ReactElement) {
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

// Import AZOSPageData OS Page handling
export const getStaticProps: GetStaticProps = async () => {
  const AZOSPageData = getOSPages();
  return {
    props: {
      AZOSPageData,
    },
  };
};

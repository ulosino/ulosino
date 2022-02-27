// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Box, useStyleConfig } from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

// Markdown processing libraries
import { getOSPages } from "providers/OSPageProvider";
import OSDataLayout from "components/OSDataLayout";

interface PageDataProps {
  AZOSPageData: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
  category: string;
  donate: string;
  platform: string;
  desktop: string;
  startup: string;
  packagemgr: string;
}

// Begin page
export default function Browse({ AZOSPageData }: PageDataProps) {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Operating System List &amp; Tempo</title>
        <meta property="og:title" content="ULOSINO Operating System List" />
        <meta
          name="description"
          content="Browse the full ULOSINO operating system list."
        />
        <meta
          property="og:description"
          content="Browse the full ULOSINO operating system list."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Operating System List</Heading>
        <Stack direction="column" spacing={2}>
          {AZOSPageData.map(
            ({
              slug,
              name,
              summary,
              category,
              donate,
              platform,
              desktop,
              startup,
              packagemgr,
            }: MetadataTypes) => (
              <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
                <Card variant="button" as="a">
                  <OSDataLayout
                    name={name}
                    summary={summary}
                    category={category}
                    donate={donate}
                    platform={platform}
                    desktop={desktop}
                    startup={startup}
                    packagemgr={packagemgr}
                    usePlatform={false}
                    useDesktop={false}
                    useStartup={false}
                    usePackagemgr={false}
                    OSCardId="testingOSDataCard"
                  />
                </Card>
              </Link>
            )
          )}
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Browse.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout
        useBasicLayout={false}
        useBasicKeybindings={true}
        useAltBackground={false}
        showPreferences={false}
      >
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
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

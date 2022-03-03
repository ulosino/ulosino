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
import {
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Badge,
  Button,
  DarkMode,
  Box,
  useStyleConfig,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import {
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import { NoJSWarningHome } from "components/NoJSWarning";
import SearchName from "components/search/SearchName";
import { ErrorFallback } from "components/ErrorFallback";

// Markdown processing libraries
import { getOSPages } from "providers/OSPageProvider";

interface OSDataPage {
  AZOSPageData: any;
}

// Begin page
export default function Home({ AZOSPageData }: OSDataPage) {
  const systemDate = new Date();
  const hours = systemDate.getHours();
  var timeGreeting;
  if (hours < 12) timeGreeting = "Good Morning";
  else if (hours >= 12 && hours <= 17) timeGreeting = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) timeGreeting = "Good Evening";

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

      <Stack direction="column" spacing={10}>
        <ErrorFallback>
          <noscript>
            <NoJSWarningHome />
          </noscript>
        </ErrorFallback>
        <SimpleGrid minChildWidth="300px" spacing={10}>
          <ErrorFallback>
            <Stack direction="column" spacing={5}>
              <Text textStyle="miniHeading" as="h6">
                Start
              </Text>
              <Stack direction="column" spacing={5}>
                <Heading size="xl">{timeGreeting}</Heading>
                <SearchName data={AZOSPageData} size="lg" />
              </Stack>
            </Stack>
          </ErrorFallback>
          <ErrorFallback>
            <Card variant="secondary">
              <DarkMode>
                <Stack direction="column" spacing={5}>
                  <Text textStyle="miniHeading" as="h6">
                    ULOSINO Tempo
                  </Text>
                  <Stack direction="column" spacing={0}>
                    <Heading>Give Capital.</Heading>
                    <Heading>Support Projects.</Heading>
                  </Stack>
                  <Text>
                    Open source projects move faster with financial support.
                    Look for the{" "}
                    <Badge variant="tempo" mb={1} mx={1}>
                      Tempo
                    </Badge>{" "}
                    badge for quick access to a selection of donation options.
                  </Text>
                  <Link href="/browse" passHref>
                    <Button leftIcon={<HiOutlineDatabase />} as="a">
                      Browse the OS List
                    </Button>
                  </Link>
                </Stack>
              </DarkMode>
            </Card>
          </ErrorFallback>
        </SimpleGrid>
        <ErrorFallback>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Card variant="solid">
              <Stack direction="column" spacing={5}>
                <Text textStyle="miniHeading" as="h6">
                  Don't know what to search for?
                </Text>
                <Heading>Find a Match.</Heading>
                <Link href="/matches" passHref>
                  <Button leftIcon={<HiOutlineSparkles />} as="a">
                    Get Started with Matches
                  </Button>
                </Link>
              </Stack>
            </Card>
            <Link href="/about" passHref>
              <Button leftIcon={<HiOutlineInformationCircle />} as="a">
                About ULOSINO
              </Button>
            </Link>
          </SimpleGrid>
        </ErrorFallback>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout
        useBasicLayout={false}
        useBasicKeybindings={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
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

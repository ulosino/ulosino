// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer } from "components/Loading";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

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
  useDisclosure,
  IconButton,
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
  HiOutlineDotsVertical,
  HiOutlineInformationCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import Overlay from "components/Overlay";
import { NoJSWarningHome } from "components/NoJSWarning";
import { ErrorFallback } from "components/ErrorFallback";
const SearchName = dynamic(() => import("components/search/SearchName"), {
  suspense: true,
});
const SearchPlatform = dynamic(
  () => import("components/search/SearchPlatform"),
  {
    suspense: true,
  }
);
const SearchDesktop = dynamic(() => import("components/search/SearchDesktop"), {
  suspense: true,
});
const SearchShell = dynamic(() => import("components/search/SearchShell"), {
  suspense: true,
});
const SearchPackageManager = dynamic(
  () => import("components/search/SearchPackageManager"),
  {
    suspense: true,
  }
);
const SearchStartupManager = dynamic(
  () => import("components/search/SearchStartupManager"),
  {
    suspense: true,
  }
);
const SearchDerivedOS = dynamic(
  () => import("components/search/SearchDerivedOS"),
  {
    suspense: true,
  }
);
const SearchCategory = dynamic(
  () => import("components/search/SearchCategory"),
  {
    suspense: true,
  }
);
const SearchSummary = dynamic(() => import("components/search/SearchSummary"), {
  suspense: true,
});

// Markdown processing libraries
import { getOSPages } from "providers/OSPageProvider";

interface OSDataPage {
  AZOSPageData: any;
}

import { useState, useRef } from "react";

// Begin page
export default function Home({ AZOSPageData }: OSDataPage) {
  const [junctionPreview] = useLocalStorage("P3PrefJunctionPreview");

  const systemDate = new Date();
  const hours = systemDate.getHours();
  var timeGreeting;
  if (hours < 12) timeGreeting = "Good Morning";
  else if (hours >= 12 && hours <= 17) timeGreeting = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) timeGreeting = "Good Evening";

  // Begin search array
  const searchArray = [
    {
      label: "Search by Name",
      shortLabel: "Name",
      content: <SearchName data={AZOSPageData} />,
    },
    {
      label: "Search by Platform",
      shortLabel: "Platform",
      content: <SearchPlatform data={AZOSPageData} />,
    },
    {
      label: "Search by Desktop",
      shortLabel: "Desktop",
      content: <SearchDesktop data={AZOSPageData} />,
    },
    {
      label: "Search by Package Manager",
      shortLabel: "Package Manager",
      content: <SearchPackageManager data={AZOSPageData} />,
    },
    {
      label: "Search by Startup Manager",
      shortLabel: "Startup Manager",
      content: <SearchStartupManager data={AZOSPageData} />,
    },
    {
      label: "Search by Shell",
      shortLabel: "Shell",
      content: <SearchShell data={AZOSPageData} />,
    },
    {
      label: "Search by Derived OS",
      shortLabel: "Derived OS",
      content: <SearchDerivedOS data={AZOSPageData} />,
    },
    {
      label: "Search by Category",
      shortLabel: "Category",
      content: <SearchCategory data={AZOSPageData} />,
    },
    {
      label: "Search Summaries",
      shortLabel: "Summaries",
      content: <SearchSummary data={AZOSPageData} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();
  function SearchOptionsOverlayBody() {
    return (
      <Stack direction="column" spacing={2}>
        {searchArray.map((tab, index) => (
          <Button
            key={index}
            onClick={(_) => {
              setActiveTab(index);
              onClose();
            }}
            isActive={index === activeTab}
          >
            {tab.label}
          </Button>
        ))}
      </Stack>
    );
  }
  function SearchOptionsOverlayFooter() {
    return (
      <>
        <Button ref={cancelRef} onClick={onClose}>
          Cancel
        </Button>
      </>
    );
  }

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
                {junctionPreview ? (
                  <Stack direction="row" spacing={2}>
                    {/* Map buttons for the first 5 in searchArray */}
                    {searchArray.slice(0, 4).map((tab, index) => (
                      <Button
                        key={index}
                        onClick={(_) => {
                          setActiveTab(index);
                        }}
                        isActive={index === activeTab}
                        size="sm"
                      >
                        {tab.shortLabel}
                      </Button>
                    ))}
                    {isOpen ? (
                      <IconButton
                        icon={<HiOutlineDotsVertical />}
                        aria-label="Open Search Options Menu"
                        title="Open Search Options Menu"
                        size="sm"
                        isActive
                      />
                    ) : (
                      <IconButton
                        icon={<HiOutlineDotsVertical />}
                        aria-label="Open Search Options Menu"
                        title="Open Search Options Menu"
                        size="sm"
                        onClick={onOpen}
                      />
                    )}
                    <Overlay
                      header="Search Options"
                      body={<SearchOptionsOverlayBody />}
                      footer={<SearchOptionsOverlayFooter />}
                      cancelRef={cancelRef}
                      isOpen={isOpen}
                      onClose={onClose}
                      useAlertDialog={false}
                    />
                  </Stack>
                ) : (
                  ""
                )}
                <Suspense fallback={<LoadingServer />}>
                  <Box>{searchArray[activeTab].content}</Box>
                </Suspense>
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
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
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

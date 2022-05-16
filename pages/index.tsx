// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This page uses legacy Node.js Runtime delivery technology
// Reason: Uses eval() to process MDX
// https://nextjs.org/docs/api-reference/edge-runtime

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer } from "components/Loading";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Text,
  Button,
  Box,
  useStyleConfig,
  useDisclosure,
  Container,
  Flex,
  Spacer,
  UnorderedList,
  ListItem,
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
import { HiOutlineSearch } from "react-icons/hi";

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
      label: "Search by Derived OS",
      shortLabel: "Derived OS",
      content: <SearchDerivedOS data={AZOSPageData} />,
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
        <ErrorFallback>
          <Box>
            <Container maxW="container.sm" py={20}>
              <Stack direction="column" spacing={5} minW="full">
                <Text textStyle="miniHeading" as="h6">
                  Start
                </Text>
                <Stack direction="column" spacing={5}>
                  <Flex>
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
                          display={{ base: "none", sm: "flex" }}
                        >
                          {tab.shortLabel}
                        </Button>
                      ))}
                    </Stack>
                    <Spacer />
                    {isOpen ? (
                      <Button
                        leftIcon={<HiOutlineSearch />}
                        size="sm"
                        display={{ base: "none", sm: "flex" }}
                        isActive
                      >
                        Search Options
                      </Button>
                    ) : (
                      <Button
                        leftIcon={<HiOutlineSearch />}
                        size="sm"
                        display={{ base: "none", sm: "flex" }}
                        onClick={onOpen}
                      >
                        Search Options
                      </Button>
                    )}
                  </Flex>
                  <Overlay
                    header="Search Options"
                    body={<SearchOptionsOverlayBody />}
                    footer={<SearchOptionsOverlayFooter />}
                    cancelRef={cancelRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    useAlertDialog={false}
                  />
                  <Suspense fallback={<LoadingServer />}>
                    <Box>{searchArray[activeTab].content}</Box>
                  </Suspense>
                  <Box w="full">
                    {isOpen ? (
                      <Button
                        leftIcon={<HiOutlineSearch />}
                        display={{ base: "flex", sm: "none" }}
                        w="inherit"
                        isActive
                      >
                        Search Options
                      </Button>
                    ) : (
                      <Button
                        leftIcon={<HiOutlineSearch />}
                        display={{ base: "flex", sm: "none" }}
                        w="inherit"
                        onClick={onOpen}
                      >
                        Search Options
                      </Button>
                    )}
                  </Box>
                </Stack>
              </Stack>
              <Card variant="solid">
                <Stack direction="column" spacing={2}>
                  <Text textStyle="miniHeading" as="h6">
                    Platform 3 Technical Archive
                  </Text>
                  <UnorderedList fontSize="xs" ps={5}>
                    <ListItem>
                      Access to Database Content and ULOSINO Matches ended May
                      25, 2022.
                    </ListItem>
                    <ListItem>
                      Access to this archive via ULOSINO.com will end in
                      November 2022.
                    </ListItem>
                    <ListItem>
                      Osopcloud will launch in September 2022.
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </Card>
            </Container>
          </Box>
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

// Disable the Edge Runtime
export const config = {
  runtime: "nodejs",
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

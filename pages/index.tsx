// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

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
  SimpleGrid,
  Heading,
  Text,
  Badge,
  Button,
  DarkMode,
  Box,
  useStyleConfig,
  useDisclosure,
  Container,
  Center,
  Flex,
  Spacer,
  Icon,
  Divider,
  LightMode,
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
  HiOutlineSearch,
  HiOutlineSparkles,
  HiCreditCard,
  HiOutlinePlus,
  HiCog,
  HiLightningBolt,
  HiOutlineArrowRight,
  HiTerminal,
  HiInformationCircle,
  HiDesktopComputer,
  HiLibrary,
  HiChip,
  HiAcademicCap,
  HiUpload,
} from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import Overlay from "components/Overlay";
import Window from "components/Window";
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
            </Container>
          </Box>
        </ErrorFallback>
        <ErrorFallback>
          <Flex display={{ base: "none", sm: "flex" }}>
            <Divider pt="3.5" />
            <Center w={1000}>
              <Text textStyle="miniHeading" as="h6">
                Culture Build with ULOSINO
              </Text>
            </Center>
            <Divider pt="3.5" />
          </Flex>
          <Card variant="secondary">
            <DarkMode>
              <SimpleGrid minChildWidth="300px" spacing={10}>
                <Stack direction="column" spacing={5}>
                  <Text textStyle="miniHeading" as="h6">
                    ULOSINO Matches
                  </Text>
                  <Heading size="xl">Find a Match.</Heading>
                  <Text>
                    With Matches, you can find an operating system that matches
                    your needs, quickly and easily.
                  </Text>
                  <Link href="/matches" passHref>
                    <Button leftIcon={<HiOutlineSparkles />} as="a">
                      Get Started with Matches
                    </Button>
                  </Link>
                </Stack>
                <Window windowName="ULOSINO Matches">
                  <Stack direction="column" spacing={2}>
                    <Flex>
                      <Stack direction="row" spacing={4}>
                        <Icon as={HiLibrary} w={8} h={8} />
                        <Text fontSize="sm" pt={1}>
                          Using the Linux kernel
                        </Text>
                      </Stack>
                      <Spacer />
                      <Button size="xs" mt={1}>
                        Switch to BSD
                      </Button>
                    </Flex>
                    <Flex>
                      <Stack direction="row" spacing={4}>
                        <Icon as={HiDesktopComputer} w={8} h={8} />
                        <Text fontSize="sm" pt={1}>
                          Using graphical interfaces
                        </Text>
                      </Stack>
                      <Spacer />
                      <Button size="xs" mt={1}>
                        Switch to a CLI
                      </Button>
                    </Flex>
                    <Flex>
                      <Stack direction="row" spacing={4}>
                        <Icon as={HiChip} w={8} h={8} />
                        <Text fontSize="sm" pt={1}>
                          Using modern hardware
                        </Text>
                      </Stack>
                      <Spacer />
                      <Button size="xs" mt={1}>
                        Switch to older hardware
                      </Button>
                    </Flex>
                    <Flex>
                      <Stack direction="row" spacing={4}>
                        <Icon as={HiAcademicCap} w={8} h={8} />
                        <Text fontSize="sm" pt={1}>
                          Using managed systems
                        </Text>
                      </Stack>
                      <Spacer />
                      <Button size="xs" mt={1}>
                        Switch to advanced systems
                      </Button>
                    </Flex>
                  </Stack>
                </Window>
              </SimpleGrid>
            </DarkMode>
          </Card>
          <Card variant="solid">
            <SimpleGrid minChildWidth="300px" spacing={10}>
              <Window windowName="Donate to Haiku with ULOSINO Tempo">
                <Flex>
                  <Center w="50%" display={{ base: "none", lg: "flex" }} m={5}>
                    <Icon
                      as={HiCreditCard}
                      aria-label="Payment card"
                      w={20}
                      h={20}
                    />
                  </Center>
                  <Spacer display={{ base: "none", lg: "flex" }} />
                  <Stack direction="column" spacing={5} w="full">
                    <Heading size="md">Donate to Haiku</Heading>
                    <Box>
                      <Badge variant="tempo">Powered by ULOSINO Tempo</Badge>
                    </Box>
                    <Stack direction="column" spacing={2}>
                      <Button size="sm">Visit Project Website</Button>
                      <Button size="sm">Donate with Open Collective</Button>
                      <Button size="sm">Donate with Liberapay</Button>
                      <Button size="sm">Donate with GitHub Sponsors</Button>
                    </Stack>
                  </Stack>
                </Flex>
              </Window>
              <Stack direction="column" spacing={5}>
                <Text textStyle="miniHeading" as="h6">
                  ULOSINO Tempo
                </Text>
                <Heading size="xl">Donate.</Heading>
                <Text>Open source projects need financial support.</Text>
                <Text>
                  ULOSINO Tempo makes it easy to give. Share your generosity
                  with easy access across ULOSINO.
                </Text>
                <Text>
                  Make donations faster with Quick Donation Options. They take
                  you directly to a selection of donation services.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
          <Flex display={{ base: "none", sm: "flex" }}>
            <Divider pt="3.5" />
            <Center w={1000}>
              <Text textStyle="miniHeading" as="h6">
                Make Moves Faster
              </Text>
            </Center>
            <Divider pt="3.5" />
          </Flex>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Stack direction="column" spacing={5}>
              <Icon as={HiUpload} aria-label="Share icon" w={10} h={10} />
              <Text>
                Look to Share or Copy points to bring your friends and apps into
                ULOSINO. Culture build faster and share open source OS culture
                with others.
              </Text>
            </Stack>
            <Stack
              direction="column"
              spacing={5}
              display={{ base: "flex", md: "none", lg: "flex" }}
            >
              <Icon as={HiTerminal} aria-label="Keyboard" w={10} h={10} />
              <Text>
                Discover ULOSINO's assortment of keyboard shortcuts. Navigate
                quickly, change preferences, and uncover powerful functions.
              </Text>
            </Stack>
            <Stack direction="column" spacing={5}>
              <Icon as={HiCog} aria-label="Preference gear" w={10} h={10} />
              <Text>
                Make ULOSINO your own. Customize your experience with
                preferences that last across sessions, and open the joy from a
                flow that's made around you.
              </Text>
            </Stack>
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

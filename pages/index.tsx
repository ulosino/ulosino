import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getOSPages } from "providers/OSPageProvider";

import {
  Heading,
  Text,
  Badge,
  Button,
  Box,
  Stack,
  DarkMode,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

import { useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

import UIProvider from "providers/UIProvider";

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function Home({
  AZOSPageData,
}: {
  AZOSPageData: {
    date: string;
    id: string;
    title: string;
    summary: string;
    category: string;
    version: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
  }[];
}) {
  const systemDate = new Date();
  const hours = systemDate.getHours();
  var timeGreeting;
  if (hours < 12) timeGreeting = "Good Morning";
  else if (hours >= 12 && hours <= 17) timeGreeting = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) timeGreeting = "Good Evening";

  return (
    <UIProvider>
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
        <SimpleGrid minChildWidth="300px" spacing={10}>
          <Stack direction="column" spacing={5}>
            <Text textStyle="secondary" as="h6">
              Start
            </Text>
            <Stack direction="column" spacing={5}>
              <Heading size="xl">{timeGreeting}</Heading>
              <AutoComplete>
                <AutoCompleteInput
                  variant="outline"
                  size="lg"
                  borderRadius="xl"
                  shadow="inner"
                  placeholder="Find an Operating System..."
                  id="testing-db-input"
                />
                <AutoCompleteList>
                  {AZOSPageData.map(
                    ({
                      id,
                      title,
                      summary,
                      category,
                      version,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
                    }) => (
                      <AutoCompleteItem
                        key={`option-${title}`}
                        value={title}
                        maxSuggestions={5}
                        mx={3}
                        id="testing-db-item"
                      >
                        <Link
                          href={`/browse/${id}`}
                          passHref
                          key={`/browse/${id}`}
                        >
                          <Box p={2} mb={2}>
                            <Heading size="md">{title}</Heading>
                            {summary && <Text fontSize="sm">"{summary}"</Text>}
                            <Stack
                              direction="row"
                              display={{ base: "none", sm: "flex" }}
                              spacing={4}
                            >
                              {category && <Badge>{category}</Badge>}
                              {version && <Text fontSize="sm">{version}</Text>}
                              {platform && (
                                <Text fontSize="sm">{platform}</Text>
                              )}
                              {desktop && <Text fontSize="sm">{desktop}</Text>}
                              {startup && <Text fontSize="sm">{startup}</Text>}
                              {packagemgr && (
                                <Text fontSize="sm">{packagemgr}</Text>
                              )}
                            </Stack>
                          </Box>
                        </Link>
                      </AutoCompleteItem>
                    )
                  )}
                </AutoCompleteList>
              </AutoComplete>
            </Stack>
          </Stack>
          <Card variant="secondary">
            <DarkMode>
              <Stack direction="column" spacing={5}>
                <Text textStyle="secondary" as="h6">
                  ULOSINO Tempo
                </Text>
                <Stack direction="column" spacing={0}>
                  <Heading>Give Capital.</Heading>
                  <Heading>Support Projects.</Heading>
                </Stack>
                <Text>
                  Open source projects move faster with financial support. Look
                  for the{" "}
                  <Badge bg="brand" color="gray.800" mb={1} mx={1}>
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
        </SimpleGrid>
        <SimpleGrid minChildWidth="300px" spacing={10}>
          <Card variant="solid">
            <Stack direction="column" spacing={5}>
              <Text textStyle="secondary" as="h6">
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
      </Stack>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const AZOSPageData = getOSPages();
  return {
    props: {
      AZOSPageData,
    },
  };
};

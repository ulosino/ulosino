import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  getNewestDistributions,
  getOldestDistributions,
  getDistributions,
} from "src/DBProvider";

import {
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import dynamic from "next/dynamic";
const AutoComplete = dynamic(() =>
  import("@choc-ui/chakra-autocomplete").then((mod) => mod.AutoComplete)
);

import {
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
} from "@chakra-ui/react";

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

import UIProvider from "src/UIProvider";

export default function Browse({
  newestDistributionData,
  oldestDistributionData,
  AZDistributionData,
}: {
  newestDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
    shell: string;
  }[];
  oldestDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
    shell: string;
  }[];
  AZDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
    shell: string;
  }[];
}) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Browse</title>
      </Head>

      <Heading size="3xl" as="h1" mb={4}>
        Browse
      </Heading>

      <SimpleGrid minChildWidth="280px" spacing={10}>
        <Stack direction="column" spacing={6} as="section">
          <FormControl>
            <AutoComplete>
              <AutoCompleteInput
                variant="outline"
                size="md"
                borderRadius="xl"
                shadow="inner"
                placeholder="Find an operating system..."
                id="testing-db-input"
              />
              <AutoCompleteList w="full">
                {AZDistributionData.map(
                  ({
                    id,
                    title,
                    summary,
                    version,
                    platform,
                    desktop,
                    startup,
                    packagemgr,
                    shell,
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
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
                            {shell && <Text fontSize="sm">{shell}</Text>}
                          </Stack>
                        </Box>
                      </Link>
                    </AutoCompleteItem>
                  )
                )}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>
          <Tabs variant="soft-rounded" colorScheme="gray" size="sm" isLazy>
            <TabList id="testing-display-tabList">
              <Stack direction="row" spacing={4}>
                <Tab shadow="inner">Newest</Tab>
                <Tab shadow="inner">Oldest</Tab>
                <Tab shadow="inner">A-Z</Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {newestDistributionData.map(
                    ({
                      id,
                      title,
                      version,
                      summary,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
                      shell,
                    }) => (
                      <Link
                        href={`/browse/${id}`}
                        passHref
                        key={`/browse/${id}`}
                      >
                        <Card key={id} variant="button" px={6}>
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack
                            direction="row"
                            display={{ base: "flex", md: "none" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
                            {shell && <Text fontSize="sm">{shell}</Text>}
                          </Stack>
                        </Card>
                      </Link>
                    )
                  )}
                </Stack>
              </TabPanel>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {oldestDistributionData.map(
                    ({
                      id,
                      title,
                      version,
                      summary,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
                      shell,
                    }) => (
                      <Link
                        href={`/browse/${id}`}
                        passHref
                        key={`/browse/${id}`}
                      >
                        <Card
                          key={id}
                          id="testing-db-distributions"
                          variant="button"
                          px={6}
                        >
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack
                            direction="row"
                            display={{ base: "flex", md: "none" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
                            {shell && <Text fontSize="sm">{shell}</Text>}
                          </Stack>
                        </Card>
                      </Link>
                    )
                  )}
                </Stack>
              </TabPanel>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {AZDistributionData.map(
                    ({
                      id,
                      title,
                      version,
                      summary,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
                      shell,
                    }) => (
                      <Link
                        href={`/browse/${id}`}
                        passHref
                        key={`/browse/${id}`}
                      >
                        <Card key={id} variant="button" px={6}>
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack
                            direction="row"
                            display={{ base: "flex", md: "none" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
                            {shell && <Text fontSize="sm">{shell}</Text>}
                          </Stack>
                        </Card>
                      </Link>
                    )
                  )}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </SimpleGrid>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const newestDistributionData = getNewestDistributions();
  const oldestDistributionData = getOldestDistributions();
  const AZDistributionData = getDistributions();
  return {
    props: {
      newestDistributionData,
      oldestDistributionData,
      AZDistributionData,
    },
  };
};

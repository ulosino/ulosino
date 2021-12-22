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
    descends: string;
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
    descends: string;
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
    descends: string;
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
          <Card>
            <Tabs variant="soft-rounded" colorScheme="gray" size="sm" isLazy>
              <TabList>
                <Stack direction={["column", "column", "row"]} spacing={4}>
                  <Tab shadow="inner">Search by Name</Tab>
                  <Tab shadow="inner">Platform</Tab>
                  <Tab shadow="inner">Desktop</Tab>
                  <Tab shadow="inner">Startup Manager</Tab>
                  <Tab shadow="inner">Package Manager</Tab>
                  <Tab shadow="inner">Derived OS</Tab>
                </Stack>
              </TabList>
              {/* Search by name */}
              <TabPanels>
                <TabPanel px={0} pb={0} pt={4}>
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
                      <AutoCompleteList>
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
                            descends,
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
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm">{platform}</Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm">{desktop}</Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm">{startup}</Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm">{packagemgr}</Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm">{descends}</Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
                {/* Search by platform */}
                <TabPanel px={0} pb={0} pt={4}>
                  <FormControl>
                    <AutoComplete>
                      <AutoCompleteInput
                        variant="outline"
                        size="md"
                        borderRadius="xl"
                        shadow="inner"
                        placeholder="Filter by platform..."
                      />
                      <AutoCompleteList>
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
                            descends,
                          }) => (
                            <AutoCompleteItem
                              key={`option-${platform}`}
                              value={platform}
                              maxSuggestions={5}
                              mx={3}
                            >
                              <Link
                                href={`/browse/${id}`}
                                passHref
                                key={`/browse/${id}`}
                              >
                                <Box p={2} mb={2}>
                                  <Heading size="md">{title}</Heading>
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm" fontWeight="bold">
                                        {platform}
                                      </Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm">{desktop}</Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm">{startup}</Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm">{packagemgr}</Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm">{descends}</Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
                {/* Search by desktop */}
                <TabPanel px={0} pb={0} pt={4}>
                  <FormControl>
                    <AutoComplete>
                      <AutoCompleteInput
                        variant="outline"
                        size="md"
                        borderRadius="xl"
                        shadow="inner"
                        placeholder="Filter by desktop..."
                      />
                      <AutoCompleteList>
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
                            descends,
                          }) => (
                            <AutoCompleteItem
                              key={`option-${desktop}`}
                              value={desktop}
                              maxSuggestions={5}
                              mx={3}
                            >
                              <Link
                                href={`/browse/${id}`}
                                passHref
                                key={`/browse/${id}`}
                              >
                                <Box p={2} mb={2}>
                                  <Heading size="md">{title}</Heading>
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm">{platform}</Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm" fontWeight="bold">
                                        {desktop}
                                      </Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm">{startup}</Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm">{packagemgr}</Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm">{descends}</Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
                {/* Search by startup manager */}
                <TabPanel px={0} pb={0} pt={4}>
                  <FormControl>
                    <AutoComplete>
                      <AutoCompleteInput
                        variant="outline"
                        size="md"
                        borderRadius="xl"
                        shadow="inner"
                        placeholder="Filter by startup manager..."
                      />
                      <AutoCompleteList>
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
                            descends,
                          }) => (
                            <AutoCompleteItem
                              key={`option-${startup}`}
                              value={startup}
                              maxSuggestions={5}
                              mx={3}
                            >
                              <Link
                                href={`/browse/${id}`}
                                passHref
                                key={`/browse/${id}`}
                              >
                                <Box p={2} mb={2}>
                                  <Heading size="md">{title}</Heading>
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm">{platform}</Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm">{desktop}</Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm" fontWeight="bold">
                                        {startup}
                                      </Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm">{packagemgr}</Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm">{descends}</Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
                {/* Search by package manager */}
                <TabPanel px={0} pb={0} pt={4}>
                  <FormControl>
                    <AutoComplete>
                      <AutoCompleteInput
                        variant="outline"
                        size="md"
                        borderRadius="xl"
                        shadow="inner"
                        placeholder="Filter by package manager..."
                      />
                      <AutoCompleteList>
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
                            descends,
                          }) => (
                            <AutoCompleteItem
                              key={`option-${packagemgr}`}
                              value={packagemgr}
                              maxSuggestions={5}
                              mx={3}
                            >
                              <Link
                                href={`/browse/${id}`}
                                passHref
                                key={`/browse/${id}`}
                              >
                                <Box p={2} mb={2}>
                                  <Heading size="md">{title}</Heading>
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm">{platform}</Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm">{desktop}</Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm">{startup}</Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm" fontWeight="bold">
                                        {packagemgr}
                                      </Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm">{descends}</Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
                {/* Search by derived distribution */}
                <TabPanel px={0} pb={0} pt={4}>
                  <FormControl>
                    <AutoComplete>
                      <AutoCompleteInput
                        variant="outline"
                        size="md"
                        borderRadius="xl"
                        shadow="inner"
                        placeholder="Filter by derived operating system..."
                      />
                      <AutoCompleteList>
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
                            descends,
                          }) => (
                            <AutoCompleteItem
                              key={`option-${descends}`}
                              value={descends}
                              maxSuggestions={5}
                              mx={3}
                            >
                              <Link
                                href={`/browse/${id}`}
                                passHref
                                key={`/browse/${id}`}
                              >
                                <Box p={2} mb={2}>
                                  <Heading size="md">{title}</Heading>
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {version && (
                                      <Text fontSize="sm">{version}</Text>
                                    )}
                                    {platform && (
                                      <Text fontSize="sm">{platform}</Text>
                                    )}
                                    {desktop && (
                                      <Text fontSize="sm">{desktop}</Text>
                                    )}
                                    {startup && (
                                      <Text fontSize="sm">{startup}</Text>
                                    )}
                                    {packagemgr && (
                                      <Text fontSize="sm">{packagemgr}</Text>
                                    )}
                                    {shell && (
                                      <Text fontSize="sm">{shell}</Text>
                                    )}
                                    {descends && (
                                      <Text fontSize="sm" fontWeight="bold">
                                        {descends}
                                      </Text>
                                    )}
                                  </Stack>
                                </Box>
                              </Link>
                            </AutoCompleteItem>
                          )
                        )}
                      </AutoCompleteList>
                    </AutoComplete>
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
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
                      descends,
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
                            {descends && <Text fontSize="sm">{descends}</Text>}
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
                      descends,
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
                            {descends && <Text fontSize="sm">{descends}</Text>}
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
                      descends,
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
                            {descends && <Text fontSize="sm">{descends}</Text>}
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

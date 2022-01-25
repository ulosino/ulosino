import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  getNewestDistributions,
  getOldestDistributions,
  getDistributions,
} from "providers/DBProvider";

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
  Badge,
  Box,
  Stack,
  Flex,
  Spacer,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
} from "@chakra-ui/react";
import { HiOutlineDatabase, HiOutlineSearch } from "react-icons/hi";

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
    category: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
  }[];
  oldestDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    category: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
  }[];
  AZDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    category: string;
    platform: string;
    startup: string;
    desktop: string;
    packagemgr: string;
  }[];
}) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Browse</title>
      </Head>

      <Flex direction={["column", "column", "row"]} mb={8}>
        <Heading size="3xl">Browse</Heading>
        <Spacer />
        <Stack direction={["column", "column", "row"]} spacing={4} pt={4}>
          <Link href="/browse" passHref>
            <Button leftIcon={<HiOutlineDatabase />} size="sm" isActive>
              Search &amp; List
            </Button>
          </Link>
          <Link href="/search" passHref>
            <Button leftIcon={<HiOutlineSearch />} size="sm">
              Advanced Search
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Stack direction="column" spacing={10}>
        <Stack direction="column" spacing={2}>
          <Text textStyle="secondary" as="h6">
            Make a Search
          </Text>
          <Card>
            <Tabs>
              <TabList>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={4}
                  w="full"
                >
                  <Tab shadow="inner">Search by Name</Tab>
                  <Tab shadow="inner">Platform</Tab>
                  <Tab shadow="inner">Desktop</Tab>
                  <Tab shadow="inner">Startup Manager</Tab>
                  <Tab shadow="inner">Package Manager</Tab>
                </Stack>
              </TabList>
              <TabPanels>
                {/* Search by name */}
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
                                  {summary && (
                                    <Text fontSize="sm">"{summary}"</Text>
                                  )}
                                  <Stack
                                    direction="row"
                                    display={{ base: "none", sm: "flex" }}
                                    spacing={4}
                                  >
                                    {category && <Badge>{category}</Badge>}
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
                            category,
                            version,
                            platform,
                            desktop,
                            startup,
                            packagemgr,
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
                                    {category && <Badge>{category}</Badge>}
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
                            category,
                            version,
                            platform,
                            desktop,
                            startup,
                            packagemgr,
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
                                    {category && <Badge>{category}</Badge>}
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
                            category,
                            version,
                            platform,
                            desktop,
                            startup,
                            packagemgr,
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
                                    {category && <Badge>{category}</Badge>}
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
                            category,
                            version,
                            platform,
                            desktop,
                            startup,
                            packagemgr,
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
                                    {category && <Badge>{category}</Badge>}
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
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text textStyle="secondary" as="h6">
            All Operating Systems
          </Text>
          <Tabs isLazy>
            <TabList id="testing-display-tabList">
              <Stack direction="row" spacing={4} w="full">
                <Tab shadow="inner">Alphabetical</Tab>
                <Tab shadow="inner">Newest</Tab>
                <Tab shadow="inner">Oldest</Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {AZDistributionData.map(
                    ({
                      id,
                      title,
                      version,
                      summary,
                      category,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
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
                            {category && <Badge>{category}</Badge>}
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            <Badge>{category}</Badge>
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
                          </Stack>
                        </Card>
                      </Link>
                    )
                  )}
                </Stack>
              </TabPanel>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {newestDistributionData.map(
                    ({
                      id,
                      title,
                      version,
                      summary,
                      category,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
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
                            {category && <Badge>{category}</Badge>}
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            <Badge>{category}</Badge>
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
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
                      category,
                      platform,
                      desktop,
                      startup,
                      packagemgr,
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
                            {category && <Badge>{category}</Badge>}
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                          </Stack>
                          <Stack
                            direction="row"
                            display={{ base: "none", md: "flex" }}
                            spacing={4}
                          >
                            <Badge>{category}</Badge>
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
                            {startup && <Text fontSize="sm">{startup}</Text>}
                            {packagemgr && (
                              <Text fontSize="sm">{packagemgr}</Text>
                            )}
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
      </Stack>
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

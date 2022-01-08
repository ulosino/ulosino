import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getDistributions } from "src/DBProvider";

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
  Flex,
  Spacer,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { HiOutlineDatabase, HiOutlineSearch } from "react-icons/hi";

import UIProvider from "src/UIProvider";

export default function AdvancedSearch({
  AZDistributionData,
}: {
  AZDistributionData: {
    date: string;
    id: string;
    title: string;
    version: string;
    summary: string;
    platform: string;
    category: string;
    desktop: string;
    browser: string;
    productivity: string;
    startup: string;
    packagemgr: string;
    shell: string;
    descends: string;
  }[];
}) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Advanced Operating System Search</title>
      </Head>

      <Flex direction={["column", "column", "row"]} mb={8}>
        <Heading size="3xl">Browse</Heading>
        <Spacer />
        <Stack direction={["column", "column", "row"]} spacing={4} pt={4}>
          <Link href="/browse" passHref>
            <Button leftIcon={<HiOutlineDatabase />} size="sm">
              Search &amp; List
            </Button>
          </Link>
          <Link href="/browse/advanced" passHref>
            <Button leftIcon={<HiOutlineSearch />} size="sm" isActive>
              Advanced Search
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Stack direction="column" spacing={10}>
        <Stack direction="column" spacing={2}>
          <Text textStyle="secondary" as="h6">
            Search by Name, Platform, and Category
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray" size="sm">
            <TabList>
              <Stack direction={["column", "column", "row"]} spacing={4}>
                <Tab shadow="inner">Name</Tab>
                <Tab shadow="inner">Summary</Tab>
                <Tab shadow="inner">Platform</Tab>
                <Tab shadow="inner">Category</Tab>
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
                        ({ id, title, summary, version, platform }) => (
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
                                </Stack>
                              </Box>
                            </Link>
                          </AutoCompleteItem>
                        )
                      )}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search using the name of an operating system.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
              {/* Search the summary */}
              <TabPanel px={0} pb={0} pt={4}>
                <FormControl>
                  <AutoComplete>
                    <AutoCompleteInput
                      variant="outline"
                      size="md"
                      borderRadius="xl"
                      shadow="inner"
                      placeholder="Filter all summaries..."
                      id="testing-db-input"
                    />
                    <AutoCompleteList>
                      {AZDistributionData.map(({ id, title, summary }) => (
                        <AutoCompleteItem
                          key={`option-${summary}`}
                          value={summary}
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
                            </Box>
                          </Link>
                        </AutoCompleteItem>
                      ))}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search the contents of all operating system summaries.
                  </FormHelperText>
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
                        ({ id, title, summary, version, platform }) => (
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
                                </Stack>
                              </Box>
                            </Link>
                          </AutoCompleteItem>
                        )
                      )}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search for operating systems that work on a specific
                    computer platform.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
              {/* Search by category/tag */}
              <TabPanel px={0} pb={0} pt={4}>
                <FormControl>
                  <AutoComplete>
                    <AutoCompleteInput
                      variant="outline"
                      size="md"
                      borderRadius="xl"
                      shadow="inner"
                      placeholder="Filter by category..."
                      id="testing-db-input"
                      isDisabled
                    />
                    <AutoCompleteList>
                      {AZDistributionData.map(
                        ({
                          id,
                          title,
                          summary,
                          version,
                          platform,
                          category,
                        }) => (
                          <AutoCompleteItem
                            key={`option-${category}`}
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
                                </Stack>
                              </Box>
                            </Link>
                          </AutoCompleteItem>
                        )
                      )}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search using the category of an operating system.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text textStyle="secondary" as="h6">
            Search by Preinstalled Software
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray" size="sm">
            <TabList>
              <Stack direction={["column", "column", "row"]} spacing={4}>
                <Tab shadow="inner">Desktop</Tab>
                <Tab shadow="inner">Browser</Tab>
                <Tab shadow="inner">Productivity Software</Tab>
              </Stack>
            </TabList>
            <TabPanels>
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
                                </Stack>
                              </Box>
                            </Link>
                          </AutoCompleteItem>
                        )
                      )}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search for operating systems that use a specific
                    preinstalled desktop.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
              {/* Search by browser */}
              <TabPanel px={0} pb={0} pt={4}>
                <FormControl>
                  <AutoComplete>
                    <AutoCompleteInput
                      variant="outline"
                      size="md"
                      borderRadius="xl"
                      shadow="inner"
                      placeholder="Filter by browser..."
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
                          browser,
                        }) => (
                          <AutoCompleteItem
                            key={`option-${browser}`}
                            value={browser}
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
                                  {browser && (
                                    <Text fontSize="sm" fontWeight="bold">
                                      {browser}
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
                  <FormHelperText>
                    Search for operating systems that use a specific
                    preinstalled web browser.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
              {/* Search by productivity software */}
              {/* 
              <TabPanel px={0} pb={0} pt={4}>
                <FormControl>
                  <AutoComplete>
                    <AutoCompleteInput
                      variant="outline"
                      size="md"
                      borderRadius="xl"
                      shadow="inner"
                      placeholder="Filter by productivity software..."
                      isDisabled
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
                          browser,
                          productivity,
                        }) => (
                          <AutoCompleteItem
                            key={`option-${productivity}`}
                            value={productivity}
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
                                  {browser && (
                                    <Text fontSize="sm">{browser}</Text>
                                  )}
                                  {productivity && (
                                    <Text fontSize="sm">{productivity}</Text>
                                  )}
                                </Stack>
                              </Box>
                            </Link>
                          </AutoCompleteItem>
                        )
                      )}
                    </AutoCompleteList>
                  </AutoComplete>
                  <FormHelperText>
                    Search for operating systems that use specific preinstalled
                    office and media software, not including operating system
                    integrated software, text editors, and format readers.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
               */}
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text textStyle="secondary" as="h6">
            Search by System Features
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray" size="sm">
            <TabList>
              <Stack direction={["column", "column", "row"]} spacing={4}>
                <Tab shadow="inner">Derived OS</Tab>
                <Tab shadow="inner">Shell</Tab>
                <Tab shadow="inner">Startup Manager</Tab>
                <Tab shadow="inner">Package Manager</Tab>
              </Stack>
            </TabList>
            <TabPanels>
              {/* Search by derived operating system */}
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
                          shell,
                          startup,
                          packagemgr,
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
                                  {descends && (
                                    <Text fontSize="sm" fontWeight="bold">
                                      {descends}
                                    </Text>
                                  )}
                                  {shell && <Text fontSize="sm">{shell}</Text>}
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
                  <FormHelperText>
                    Search for the descendents of a specific operating system.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
              {/* Search by shell */}
              <TabPanel px={0} pb={0} pt={4}>
                <FormControl>
                  <AutoComplete>
                    <AutoCompleteInput
                      variant="outline"
                      size="md"
                      borderRadius="xl"
                      shadow="inner"
                      placeholder="Filter by shell..."
                    />
                    <AutoCompleteList>
                      {AZDistributionData.map(
                        ({
                          id,
                          title,
                          summary,
                          version,
                          platform,
                          descends,
                          shell,
                          startup,
                          packagemgr,
                        }) => (
                          <AutoCompleteItem
                            key={`option-${shell}`}
                            value={shell}
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
                                  {descends && (
                                    <Text fontSize="sm">{descends}</Text>
                                  )}
                                  {shell && (
                                    <Text fontSize="sm" fontWeight="bold">
                                      {shell}
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
                  <FormHelperText>
                    Search for operating systems that use a specific shell.
                  </FormHelperText>
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
                          descends,
                          shell,
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
                                  {version && (
                                    <Text fontSize="sm">{version}</Text>
                                  )}
                                  {platform && (
                                    <Text fontSize="sm">{platform}</Text>
                                  )}
                                  {descends && (
                                    <Text fontSize="sm">{descends}</Text>
                                  )}
                                  {shell && <Text fontSize="sm">{shell}</Text>}
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
                  <FormHelperText>
                    Search for operating systems that use a specific startup
                    manager.
                  </FormHelperText>
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
                          descends,
                          shell,
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
                                  {version && (
                                    <Text fontSize="sm">{version}</Text>
                                  )}
                                  {platform && (
                                    <Text fontSize="sm">{platform}</Text>
                                  )}
                                  {descends && (
                                    <Text fontSize="sm">{descends}</Text>
                                  )}
                                  {shell && <Text fontSize="sm">{shell}</Text>}
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
                  <FormHelperText>
                    Search for operating systems that use a specific package
                    manager, not including universal software systems like
                    `flatpak`.
                  </FormHelperText>
                </FormControl>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const AZDistributionData = getDistributions();
  return {
    props: {
      AZDistributionData,
    },
  };
};

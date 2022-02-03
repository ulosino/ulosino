import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getNewestOSPages, getOSPages } from "providers/OSPageProvider";

import {
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import dynamic from "next/dynamic";
import Loading from "components/Loading";
const MatchesHero = dynamic(() => import("components/MatchesHero"), {
  loading: () => <Loading />,
});
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
  IconButton,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
  PopoverHeader,
  useBoolean,
} from "@chakra-ui/react";
import {
  HiOutlineCog,
  HiOutlineDatabase,
  HiOutlineSearch,
} from "react-icons/hi";

// Dynamically import Tempo experience components to cut performance on pages where Tempo isn't available
const Popover = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.Popover)
);
const PopoverTrigger = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverTrigger)
);
const PopoverContent = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverContent)
);
// const PopoverHeader = dynamic(() =>
//   import("@chakra-ui/react").then((mod) => mod.PopoverHeader)
// );
const PopoverArrow = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverArrow)
);
const PopoverCloseButton = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverCloseButton)
);
const PopoverBody = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverBody)
);
const PopoverFooter = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.PopoverFooter)
);

import { useRef } from "react";

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
  newestOSPageData,
  AZOSPageData,
}: {
  newestOSPageData: {
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
    donate: any;
    donateCollective: any;
    donateGithub: any;
    donateLibera: any;
  }[];
  AZOSPageData: {
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
    donate: any;
    donateCollective: any;
    donateGithub: any;
    donateLibera: any;
  }[];
}) {
  const [marketplace, setMarketplace] = useBoolean();
  const initialFocusRef = useRef();
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
              Browse &amp; List
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

        <MatchesHero />

        <Stack direction="column" spacing={2}>
          <Flex>
            <Text textStyle="secondary" as="h6">
              All Operating Systems
            </Text>
            <Spacer />
            <Popover isLazy closeOnBlur={true} closeOnEsc={true}>
              <PopoverTrigger>
                <IconButton
                  size="sm"
                  icon={<HiOutlineCog />}
                  aria-label="Open or hide Browse page display preferences"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Show Tempo &amp; Marketplace Options
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Tempo on Browse is in a pre-release phase.
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  d="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  <Button ref={initialFocusRef} onClick={setMarketplace.toggle}>
                    {marketplace ? "Disable" : "Enable"}
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </Flex>
          <Tabs isLazy>
            <TabList id="testing-display-tabList">
              <Stack direction="row" spacing={4} w="full">
                <Tab shadow="inner">Alphabetical</Tab>
                <Tab shadow="inner">Newest</Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {AZOSPageData.map(
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
                      donate,
                    }) => (
                      <Flex key={id}>
                        <Box flex={1} me={4}>
                          <Link
                            href={`/browse/${id}`}
                            passHref
                            key={`/browse/${id}`}
                          >
                            <Card key={id} variant="button" px={6}>
                              <Heading size="md">{title}</Heading>
                              {summary && (
                                <Text fontSize="sm">"{summary}"</Text>
                              )}
                              <Stack
                                direction="row"
                                display={{ base: "flex", md: "none" }}
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
                              </Stack>
                              <Stack
                                direction="row"
                                display={{ base: "none", md: "flex" }}
                                spacing={4}
                              >
                                <Badge>{category}</Badge>
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
                            </Card>
                          </Link>
                        </Box>
                        {marketplace ? (
                          <Card>
                            <Stack direction="column" spacing={2}>
                              {donate ? (
                                <Popover
                                  isLazy
                                  closeOnBlur={true}
                                  closeOnEsc={true}
                                >
                                  <PopoverTrigger>
                                    <Button size="sm">
                                      Donate
                                      <Badge
                                        ms={2}
                                        bg="brand"
                                        color="gray.800"
                                        pt={1}
                                      >
                                        Tempo
                                      </Badge>
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <PopoverHeader fontWeight="semibold">
                                      Donate to {title}
                                    </PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                      <Stack direction="column" spacing={4}>
                                        <Stack direction="column" spacing={2}>
                                          <Button ref={initialFocusRef}>
                                            See Donation Options
                                          </Button>
                                          <Button>
                                            Donate through Open Collective
                                          </Button>
                                          <Button>
                                            Donate through GitHub Sponsors
                                          </Button>
                                          <Button>
                                            Donate through LiberaPay
                                          </Button>
                                        </Stack>
                                        <Text fontSize="xs">
                                          Tempo, the ULOSINO donation hub. Not
                                          available for all OSs. Payments are
                                          facilitated by third parties. ULOSINO
                                          does not receive commission. General
                                          advice only.
                                        </Text>
                                      </Stack>
                                    </PopoverBody>
                                  </PopoverContent>
                                </Popover>
                              ) : (
                                <Button size="sm" isDisabled>
                                  Donate
                                  <Badge
                                    ms={2}
                                    bg="brand"
                                    color="gray.800"
                                    pt={1}
                                  >
                                    Tempo
                                  </Badge>
                                </Button>
                              )}
                              <Popover
                                isLazy
                                closeOnBlur={true}
                                closeOnEsc={true}
                              >
                                <PopoverTrigger>
                                  <Button size="sm" isDisabled>
                                    Get Flow API Details
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                  <PopoverHeader fontWeight="semibold">
                                    Flow API Address
                                  </PopoverHeader>
                                  <PopoverArrow />
                                  <PopoverCloseButton />
                                  <PopoverBody>
                                    <Text>Under development</Text>
                                  </PopoverBody>
                                </PopoverContent>
                              </Popover>
                            </Stack>
                          </Card>
                        ) : (
                          ""
                        )}
                      </Flex>
                    )
                  )}
                </Stack>
              </TabPanel>
              <TabPanel px={0} pb={0} pt={4}>
                <Stack direction="column" spacing={2}>
                  {newestOSPageData.map(
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
                      donate,
                    }) => (
                      <Flex key={id}>
                        <Box flex={1} me={4}>
                          <Link
                            href={`/browse/${id}`}
                            passHref
                            key={`/browse/${id}`}
                          >
                            <Card key={id} variant="button" px={6}>
                              <Heading size="md">{title}</Heading>
                              {summary && (
                                <Text fontSize="sm">"{summary}"</Text>
                              )}
                              <Stack
                                direction="row"
                                display={{ base: "flex", md: "none" }}
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
                              </Stack>
                              <Stack
                                direction="row"
                                display={{ base: "none", md: "flex" }}
                                spacing={4}
                              >
                                <Badge>{category}</Badge>
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
                            </Card>
                          </Link>
                        </Box>
                        {marketplace ? (
                          <Card>
                            <Stack direction="column" spacing={2}>
                              {donate ? (
                                <Popover
                                  isLazy
                                  closeOnBlur={true}
                                  closeOnEsc={true}
                                >
                                  <PopoverTrigger>
                                    <Button size="sm">
                                      Donate
                                      <Badge
                                        ms={2}
                                        bg="brand"
                                        color="gray.800"
                                        pt={1}
                                      >
                                        Tempo
                                      </Badge>
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <PopoverHeader fontWeight="semibold">
                                      Donate to {title}
                                    </PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                      <Stack direction="column" spacing={4}>
                                        <Stack direction="column" spacing={2}>
                                          <Button ref={initialFocusRef}>
                                            See Donation Options
                                          </Button>
                                          <Button>
                                            Donate through Open Collective
                                          </Button>
                                          <Button>
                                            Donate through GitHub Sponsors
                                          </Button>
                                          <Button>
                                            Donate through LiberaPay
                                          </Button>
                                        </Stack>
                                        <Text fontSize="xs">
                                          Tempo, the ULOSINO donation hub. Not
                                          available for all OSs. Payments are
                                          facilitated by third parties. ULOSINO
                                          does not receive commission. General
                                          advice only.
                                        </Text>
                                      </Stack>
                                    </PopoverBody>
                                  </PopoverContent>
                                </Popover>
                              ) : (
                                <Button size="sm" isDisabled>
                                  Donate
                                  <Badge
                                    ms={2}
                                    bg="brand"
                                    color="gray.800"
                                    pt={1}
                                  >
                                    Tempo
                                  </Badge>
                                </Button>
                              )}
                              <Popover
                                isLazy
                                closeOnBlur={true}
                                closeOnEsc={true}
                              >
                                <PopoverTrigger>
                                  <Button size="sm" isDisabled>
                                    Get Flow API Details
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                  <PopoverHeader fontWeight="semibold">
                                    Flow API Address
                                  </PopoverHeader>
                                  <PopoverArrow />
                                  <PopoverCloseButton />
                                  <PopoverBody>
                                    <Text>Under development</Text>
                                  </PopoverBody>
                                </PopoverContent>
                              </Popover>
                            </Stack>
                          </Card>
                        ) : (
                          ""
                        )}
                      </Flex>
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
  const newestOSPageData = getNewestOSPages();
  const AZOSPageData = getOSPages();
  return {
    props: {
      newestOSPageData,
      AZOSPageData,
    },
  };
};

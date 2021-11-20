import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  getNewestDistributions,
  getOldestDistributions,
  getDistributions,
  getNewestGuides,
  getGuides,
} from "src/DBProvider";

import {
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
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
  newestGuidesData,
  AZGuidesData,
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
  newestGuidesData: {
    date: string;
    id: string;
    title: string;
    description: string;
  }[];
  AZGuidesData: {
    date: string;
    id: string;
    title: string;
    description: string;
  }[];
}) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Browse</title>
      </Head>

      <Heading size="3xl" mb={4}>
        Browse
      </Heading>

      <SimpleGrid minChildWidth="280px" spacing={10}>
        <Stack direction="column" spacing={10} as="section">
          <Stack direction="column" spacing={2}>
            <Text textStyle="secondary">Guides</Text>
            <Tabs variant="line" colorScheme="gray" size="sm" isLazy>
              <TabList id="testing-display-tabList">
                <Tab>A-Z</Tab>
                <Tab>Newest</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0} pb={0} pt={4}>
                  <Stack direction="column" spacing={2}>
                    {AZGuidesData.map(({ id, title, description }) => (
                      <Link
                        href={`/browse/guides/${id}`}
                        passHref
                        key={`/browse/guides/${id}`}
                      >
                        <Card
                          id="testing-db-guide"
                          key={id}
                          variant="button"
                          px={6}
                        >
                          <Heading size="md">{title}</Heading>
                          {description && (
                            <Text fontSize="sm">{description}.</Text>
                          )}
                        </Card>
                      </Link>
                    ))}
                  </Stack>
                </TabPanel>
                <TabPanel px={0} pb={0} pt={4}>
                  <Stack direction="column" spacing={2}>
                    {newestGuidesData.map(({ id, title, description }) => (
                      <Link
                        href={`/browse/guides/${id}`}
                        passHref
                        key={`/browse/guides/${id}`}
                      >
                        <Card key={id} variant="button" px={6}>
                          <Heading size="md" id="testing-display-guide">
                            {title}
                          </Heading>
                          {description && (
                            <Text fontSize="sm">{description}.</Text>
                          )}
                        </Card>
                      </Link>
                    ))}
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2} as="section">
          <Text textStyle="secondary">Distributions</Text>
          <Tabs variant="line" colorScheme="gray" size="sm" isLazy>
            <TabList>
              <Tab>Newest</Tab>
              <Tab>Oldest</Tab>
              <Tab>A-Z</Tab>
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
                        <Card
                          id="testing-db-distributions"
                          key={id}
                          variant="button"
                          px={6}
                        >
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack
                            direction={["column", "column", "row"]}
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
                    ({ id, title, version, summary, platform, desktop }) => (
                      <Link
                        href={`/browse/${id}`}
                        passHref
                        key={`/browse/${id}`}
                      >
                        <Card key={id} variant="button" px={6}>
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack direction="row" spacing={4}>
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
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
                    ({ id, title, version, summary, platform, desktop }) => (
                      <Link
                        href={`/browse/${id}`}
                        passHref
                        key={`/browse/${id}`}
                      >
                        <Card key={id} variant="button" px={6}>
                          <Heading size="md">{title}</Heading>
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack direction="row" spacing={4}>
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
                            {desktop && <Text fontSize="sm">{desktop}</Text>}
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
  const newestGuidesData = getNewestGuides();
  const AZGuidesData = getGuides();
  return {
    props: {
      newestDistributionData,
      oldestDistributionData,
      AZDistributionData,
      newestGuidesData,
      AZGuidesData,
    },
  };
};

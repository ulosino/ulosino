import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getDistributions } from "src/DBProvider";

import {
  Heading,
  Text,
  Button,
  Box,
  Stack,
  SimpleGrid,
  Flex,
  Spacer,
  FormControl,
} from "@chakra-ui/react";
import { FiCompass } from "react-icons/fi";

import {
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import UIProvider from "src/UIProvider";
import CultureHero from "src/components/CultureHero";
import About from "src/components/About";
import AppBanner from "src/components/AppBanner";

import dynamic from "next/dynamic";
const AutoComplete = dynamic(() =>
  import("@choc-ui/chakra-autocomplete").then((mod) => mod.AutoComplete)
);

export default function Home({
  distributionData,
}: {
  distributionData: {
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
        <title>ULOSINO &mdash; Open source OS database</title>
      </Head>

      <Stack direction="column" spacing={10}>
        <Stack direction="column" spacing={2} mt={20} mb={40} mx={10}>
          <Flex>
            <Text textStyle="secondary">Start</Text>
            <Spacer />
            <Link href="/browse" passHref>
              <Button
                leftIcon={<FiCompass />}
                size="sm"
                display={{ base: "none", md: "flex" }}
              >
                Browse All Distributions
              </Button>
            </Link>
          </Flex>
          <FormControl>
            <AutoComplete>
              <AutoCompleteInput
                variant="outline"
                size="lg"
                borderRadius="xl"
                shadow="inner"
                placeholder="Find an operating system..."
                id="testing-db-input"
              />
              <AutoCompleteList w="full">
                {distributionData.map(
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
          <Link href="/browse" passHref>
            <Button
              leftIcon={<FiCompass />}
              display={{ base: "flex", md: "none" }}
            >
              Browse All
            </Button>
          </Link>
        </Stack>

        <SimpleGrid minChildWidth="280px" spacing={10}>
          <CultureHero />
          <Stack spacing={10}>
            <About />
            <AppBanner />
          </Stack>
        </SimpleGrid>
      </Stack>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const distributionData = getDistributions();
  return {
    props: {
      distributionData,
    },
  };
};

import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getDistributions } from "src/DBProvider";

import {
  Heading,
  Text,
  Badge,
  Button,
  Box,
  Stack,
  Container,
  Flex,
  Spacer,
  FormControl,
} from "@chakra-ui/react";
import { HiOutlineDatabase } from "react-icons/hi";

import UIProvider from "src/UIProvider";

import {
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import dynamic from "next/dynamic";
const AutoComplete = dynamic(() =>
  import("@choc-ui/chakra-autocomplete").then((mod) => mod.AutoComplete)
);

export default function Home({
  AZDistributionData,
}: {
  AZDistributionData: {
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
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Open Source Operating System Database</title>
      </Head>

      <Container maxW="container.sm">
        <Stack direction="column" spacing={2} mt={16} mx={10}>
          <Flex>
            <Text textStyle="secondary" as="h6">
              Start
            </Text>
            <Spacer />
            <Link href="/browse" passHref>
              <Button
                leftIcon={<HiOutlineDatabase />}
                size="sm"
                display={{ base: "none", md: "flex" }}
              >
                Browse All OSs
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
                          {summary && <Text fontSize="sm">"{summary}"</Text>}
                          <Stack
                            direction="row"
                            display={{ base: "none", sm: "flex" }}
                            spacing={4}
                          >
                            {category && <Badge>{category}</Badge>}
                            {version && <Text fontSize="sm">{version}</Text>}
                            {platform && <Text fontSize="sm">{platform}</Text>}
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
          </FormControl>
          <Link href="/browse" passHref>
            <Button
              leftIcon={<HiOutlineDatabase />}
              display={{ base: "flex", md: "none" }}
            >
              Browse All
            </Button>
          </Link>
        </Stack>
      </Container>
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

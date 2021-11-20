import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { getSortedSearchData } from "src/SearchProvider";

import {
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
  FormControl,
} from "@chakra-ui/react";

import {
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

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
import HomeHero from "src/components/HomeHero";
import AppBanner from "src/components/AppBanner";

import dynamic from "next/dynamic";
const AutoComplete = dynamic(
  () => import("@choc-ui/chakra-autocomplete").then((mod) => mod.AutoComplete),
  { ssr: false }
);

const components = { Link };

export default function Dashboard({ searchData, source }) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Dashboard</title>
      </Head>

      <SimpleGrid minChildWidth="280px" spacing={10} mt={4}>
        <Stack direction="column" spacing={10} as="section">
          {/* Distribution search section */}
          <Stack direction="column" spacing={2}>
            <Text textStyle="secondary">Start</Text>
            <Box>
              <FormControl>
                <AutoComplete>
                  <AutoCompleteInput
                    variant="filled"
                    size="lg"
                    placeholder="Find an operating system..."
                  />
                  <AutoCompleteList w="full">
                    {searchData.map(
                      ({
                        id,
                        title,
                        summary,
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
                        >
                          <Link href={`/d/${id}`} passHref key={`/d/${id}`}>
                            <Box p={2} mb={2}>
                              <Heading size="md">{title}</Heading>
                              <Text fontSize="sm">"{summary}"</Text>
                              <Stack direction={["column", "row"]} spacing={4}>
                                <Text fontSize="sm">{platform}</Text>
                                <Text fontSize="sm">{desktop}</Text>
                                <Text fontSize="sm">{startup}</Text>
                                <Text fontSize="sm">{packagemgr}</Text>
                                <Text fontSize="sm">{shell}</Text>
                              </Stack>
                            </Box>
                          </Link>
                        </AutoCompleteItem>
                      )
                    )}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Box>
          </Stack>
          {/* Promotional section */}
          <HomeHero />
          <AppBanner />
        </Stack>

        {/* ULOSINO Weekly section */}
        <Stack direction="column" spacing={2} as="section">
          <Text textStyle="secondary">Know this now</Text>
          <MDXRemote {...source} components={components} lazy />
        </Stack>

        {/* Recently uploaded section */}
        <Stack direction="column" spacing={2} as="section">
          <Text textStyle="secondary">Just in</Text>
          <Stack
            direction="column"
            spacing={2}
            display={{ base: "none", md: "block" }}
          >
            {searchData.map(
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
                <Link href={`/d/${id}`} passHref key={`/search/${id}`}>
                  <Card key={id} cursor="pointer" px={6}>
                    <Heading size="md">{title}</Heading>
                    <Text fontSize="sm">"{summary}"</Text>
                    <Stack direction={["column", "column", "row"]} spacing={4}>
                      <Text fontSize="sm">{version}</Text>
                      <Text fontSize="sm">{platform}</Text>
                      <Text fontSize="sm">{desktop}</Text>
                      <Text fontSize="sm">{startup}</Text>
                      <Text fontSize="sm">{packagemgr}</Text>
                      <Text fontSize="sm">{shell}</Text>
                    </Stack>
                  </Card>
                </Link>
              )
            )}
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            display={{ base: "block", md: "none" }}
          >
            {searchData.map(
              ({ id, title, version, summary, platform, desktop }) => (
                <Link href={`/d/${id}`} passHref key={`/search/${id}`}>
                  <Card key={id} cursor="pointer" px={6}>
                    <Heading size="md">{title}</Heading>
                    <Text fontSize="sm">"{summary}"</Text>
                    <Stack direction="row" spacing={4}>
                      <Text fontSize="sm">{version}</Text>
                      <Text fontSize="sm">{platform}</Text>
                      <Text fontSize="sm">{desktop}</Text>
                    </Stack>
                  </Card>
                </Link>
              )
            )}
          </Stack>
        </Stack>
      </SimpleGrid>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(`public/content`, `index.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  const searchData = getSortedSearchData();

  return {
    props: {
      source: mdxSource,
      metadata: data,
      searchData,
    },
  };
};

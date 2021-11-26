import { GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import dynamic from "next/dynamic";

import {
  Tag,
  TagLabel,
  TagLeftIcon,
  Stack,
  Heading,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { FiDatabase } from "react-icons/fi";
import UIProvider from "src/UIProvider";

// Pages can use the following components if needed
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const availableComponents = [Link, Image];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
    Image: componentNames.includes("Image") ? Image : null,
  };
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; {metadata.title}</title>
        <meta property="og:title" content="{metadata.title} on ULOSINO" />
        <meta
          property="description"
          content="'{metadata.summary}' &mdash; {metadata.title} on ULOSINO"
        />
        <meta
          property="og:description"
          content="'{metadata.summary}' &mdash; {metadata.title} on ULOSINO"
        />
      </Head>
      <Stack spacing={2} mb={4}>
        <Heading size="3xl" as="h1">
          {metadata.title}
        </Heading>
        {metadata.summary && <Heading size="md">"{metadata.summary}"</Heading>}
      </Stack>
      <Stack direction={["column", "column", "row"]} spacing={10} as="main">
        <Stack spacing={2} as="section">
          <Text textStyle="secondary" as="h6">
            Description
          </Text>
          <MDXRemote {...source} components={components} />
        </Stack>
        <Stack spacing={2} as="section">
          <Text textStyle="secondary" as="h6">
            Information
          </Text>
          <Tag
            variant="solid"
            bg="brand"
            color="black"
            id="testing-display-distributionTag"
          >
            <TagLeftIcon as={FiDatabase} />
            <TagLabel>Distribution</TagLabel>
          </Tag>
          <Table>
            <Tbody>
              {/* Only show the category if the category has any value */}
              {metadata.status && (
                <Tr>
                  <Td>Status</Td>
                  <Td>{metadata.status}</Td>
                </Tr>
              )}
              {metadata.version && (
                <Tr>
                  <Td>Current Version</Td>
                  <Td>{metadata.version}</Td>
                </Tr>
              )}
              {metadata.descends && (
                <Tr>
                  <Td>Based on</Td>
                  <Td>{metadata.descends}</Td>
                </Tr>
              )}
              {metadata.platform && (
                <Tr>
                  <Td>Platforms</Td>
                  <Td>{metadata.platform}</Td>
                </Tr>
              )}
              {metadata.desktop && (
                <Tr>
                  <Td>Desktop</Td>
                  <Td>{metadata.desktop}</Td>
                </Tr>
              )}
              {metadata.shell && (
                <Tr>
                  <Td>Shell</Td>
                  <Td>{metadata.shell}</Td>
                </Tr>
              )}
              {metadata.packagemgr && (
                <Tr>
                  <Td>Package Manager</Td>
                  <Td>{metadata.packagemgr}</Td>
                </Tr>
              )}
              {metadata.startup && (
                <Tr>
                  <Td>Startup Manager</Td>
                  <Td>{metadata.startup}</Td>
                </Tr>
              )}
              {metadata.browser && (
                <Tr>
                  <Td>Default Browser</Td>
                  <Td>{metadata.browser}</Td>
                </Tr>
              )}
              {metadata.website && (
                <Tr>
                  <Td>Website</Td>
                  <Td>{metadata.website}</Td>
                </Tr>
              )}
              {metadata.repository && (
                <Tr>
                  <Td>Source Repository</Td>
                  <Td>{metadata.repository}</Td>
                </Tr>
              )}
              {metadata.size && (
                <Tr>
                  <Td>Size</Td>
                  <Td>{metadata.size}</Td>
                </Tr>
              )}
              {metadata.licence && (
                <Tr>
                  <Td>Licence</Td>
                  <Td>{metadata.licence}</Td>
                </Tr>
              )}
              {metadata.origin && (
                <Tr>
                  <Td>Region of Origin</Td>
                  <Td>{metadata.origin}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </Stack>
      </Stack>
    </UIProvider>
  );
}

interface PathProps {
  params: {
    slug: string[];
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const filePath = path.join(`public/content/browse`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const componentNames = [
    /<Link/.test(content) ? "Link" : null,
    /<Image/.test(content) ? "Image" : null,
  ].filter(Boolean);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      metadata: data,
      componentNames,
    },
  };
};

export const getStaticPaths = async () => {
  const pageDataPath = path.join(process.cwd(), "public/content/browse");

  const pageFilePaths = fs
    .readdirSync(pageDataPath)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = pageFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

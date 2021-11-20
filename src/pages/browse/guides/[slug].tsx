import { GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Tag, TagLabel, TagLeftIcon, Box } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";
import UIProvider from "src/UIProvider";

// Guides can use the following components if needed
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));
const FSTable = dynamic(() => import("src/components/FileSystemTable"));

const availableComponents = [Link, Image, FSTable];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
    Image: componentNames.includes("Image") ? Image : null,
    FSTable: componentNames.includes("FSTable") ? FSTable : null,
  };
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Guide: {metadata.title}</title>
        <meta
          property="og:title"
          content="Learn {metadata.title} on ULOSINO Guides"
        />
        <meta
          property="description"
          content="{metadata.description} on ULOSINO Guides"
        />
        <meta
          property="og:description"
          content="{metadata.description} on ULOSINO Guides"
        />
      </Head>
      <Box mb={4}>
        <Tag variant="solid" bg="secondary" id="testing-db-guideTag">
          <TagLeftIcon as={FiBookOpen} />
          <TagLabel>ULOSINO Guide</TagLabel>
        </Tag>
      </Box>
      <MDXRemote {...source} components={components} />
    </UIProvider>
  );
}

interface PathProps {
  params: {
    slug: string[];
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const filePath = path.join(
    `public/content/browse/guides`,
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const componentNames = [
    /<Link/.test(content) ? "Link" : null,
    /<Image/.test(content) ? "Image" : null,
    /<FSTable/.test(content) ? "FSTable" : null,
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
  const pageDataPath = path.join(process.cwd(), "public/content/browse/guides");

  const pageFilePaths = fs
    .readdirSync(pageDataPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  const paths = pageFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

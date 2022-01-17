import { GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import dynamic from "next/dynamic";

import UIProvider from "src/UIProvider";

// Pages can use the following components if needed
const Link = dynamic(() => import("next/link"));
const CategoryDefinitions = dynamic(
  () => import("src/components/CategoryDefinitions")
);
const CopyrightHeader = dynamic(() => import("src/components/CopyrightHeader"));
const PrivacyHeader = dynamic(() => import("src/components/PrivacyHeader"));
const VersionTroubleshoot = dynamic(
  () => import("src/components/VersionTroubleshoot")
);

const availableComponents = [
  Link,
  CategoryDefinitions,
  CopyrightHeader,
  PrivacyHeader,
  VersionTroubleshoot,
];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
    CategoryDefinitions: componentNames.includes("CategoryDefinitions")
      ? CategoryDefinitions
      : null,
    CopyrightHeader: componentNames.includes("CopyrightHeader")
      ? CopyrightHeader
      : null,
    PrivacyHeader: componentNames.includes("PrivacyHeader")
      ? PrivacyHeader
      : null,
    VersionTroubleshoot: componentNames.includes("VersionTroubleshoot")
      ? VersionTroubleshoot
      : null,
  };
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; {metadata.title}</title>
        <meta property="og:title" content="{metadata.title} on ULOSINO" />
      </Head>
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
  const filePath = path.join(`public/content/`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const componentNames = [
    /<Link/.test(content) ? "Link" : null,
    /<CategoryDefinitions/.test(content) ? "CategoryDefinitions" : null,
    /<CopyrightHeader/.test(content) ? "CopyrightHeader" : null,
    /<PrivacyHeader/.test(content) ? "PrivacyHeader" : null,
    /<VersionTroubleshoot/.test(content) ? "VersionTroubleshoot" : null,
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
  const pageDataPath = path.join(process.cwd(), "public/content");

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

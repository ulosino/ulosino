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

const availableComponents = [Link, CategoryDefinitions];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
    CategoryDefinitions: componentNames.includes("CategoryDefinitions")
      ? CategoryDefinitions
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

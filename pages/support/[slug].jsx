import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import dynamic from "next/dynamic";

import UIProvider from "src/UIProvider";

// Support pages can use the following components if needed
const Link = dynamic(() => import("next/link"));
const Year = dynamic(() => import("src/data/Year"));

const availableComponents = [Link, Year];

export default function SupportPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
    Year: componentNames.includes("Year") ? Year : null,
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

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(`public/content/support`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const componentNames = [
    /<Link/.test(content) ? "Link" : null,
    /<Year/.test(content) ? "Year" : null,
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
  const pageDataPath = path.join(process.cwd(), "public/content/support");

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

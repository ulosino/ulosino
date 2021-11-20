import { GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

import UIProvider from "src/UIProvider";
import Link from "next/link";
import Version from "src/data/Version";

const components = { Link, Version };

export default function MDXHostPage({ source, metadata }) {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; {metadata.title}</title>
      </Head>
      <MDXRemote {...source} components={components} />
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(`public/content`, `contribute.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      metadata: data,
    },
  };
};

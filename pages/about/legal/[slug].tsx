// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import PreferencesLayout from "components/layouts/PreferencesLayout";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// @ts-expect-error
import MDXProvider from "providers/MDXProvider";

interface OSPageTypes {
  source: any;
  componentOverrides: object;
  descriptionPath: string;
}

// Begin page
export default function AboutMarkdownPage({
  source,
  componentOverrides,
}: OSPageTypes) {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; {source.frontmatter.name}</title>
        <meta
          property="og:title"
          content="{source.frontmatter.name} on ULOSINO"
        />
        <meta name="description" content="{source.frontmatter.summary}." />
        <meta
          property="og:description"
          content="{source.frontmatter.summary}."
        />
      </Head>

      <MDXProvider>
        <MDXRemote {...source} components={componentOverrides} />
      </MDXProvider>
    </>
  );
}

// Apply persistent layout, wrapping page
AboutMarkdownPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <PreferencesLayout>{page}</PreferencesLayout>
      </Layout>
    </ApplicationProvider>
  );
};

interface PathProps {
  params: {
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

// Use the MDX files to generate props
// @ts-expect-error
export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  // Find Markdown files
  const filePath = path.join(
    `public/markdown/about/legal`,
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(filePath);

  // Use the files to parse MDX
  // @ts-expect-error
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  return {
    props: {
      source: mdxSource,
    },
  };
};

// Find MDX files in the /public/markdown/ folder to generate paths
export const getStaticPaths = async () => {
  const pageContentPath = path.join(
    process.cwd(),
    "public/markdown/about/legal"
  );

  const pageFilePaths = fs
    .readdirSync(pageContentPath)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = pageFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

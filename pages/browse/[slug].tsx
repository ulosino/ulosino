// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Design
import { Button, Grid, Table, Tag, Text } from "@geist-ui/core";
import {
  Code as IconCode,
  CreditCard,
  Edit,
  Globe,
  Share,
} from "@geist-ui/icons";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

// Layout
import Footer from "components/Footer";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface OSPageTypes {
  source: any;
  donationPath: string;
  contributionPath: object;
}

// Begin page
export default function OSPage({
  source,
  donationPath,
  contributionPath,
}: OSPageTypes) {
  // Sharing features
  function ShareContent() {
    if (navigator.share) {
      const url = document.location.href;
      navigator
        .share({
          title: `${source.frontmatter.name}`,
          text: `Discover ${source.frontmatter.name} on ULOSINO`,
          url: url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) =>
          console.warn(
            "Integrated Application Error: ShareErrorCaught https://docs.ulosino.com/docs/reference/errors",
            error
          )
        );
    }
  }

  // Metadata table
  const data = [
    {
      metadata: "Category",
      value: source.frontmatter.category ? (
        <Tag
          type={
            source.frontmatter.category === "Advanced" ||
            source.frontmatter.category === "Server" ||
            source.frontmatter.category === "Utility"
              ? "warning"
              : source.frontmatter.category === "Research"
              ? "error"
              : "success"
          }
        >
          {source.frontmatter.category}
        </Tag>
      ) : (
        "Not categorised"
      ),
    },
    {
      metadata: "Based on",
      value: source.frontmatter.descends
        ? source.frontmatter.descends
        : "No parent operating systems",
    },
    {
      metadata: "Popular platforms",
      value: source.frontmatter.platform
        ? source.frontmatter.platform
        : "Unknown",
    },
    {
      metadata: "Preinstalled desktop environment",
      value: source.frontmatter.desktop ? source.frontmatter.desktop : "None",
    },
    {
      metadata: "Preinstalled web browser",
      value: source.frontmatter.browser ? source.frontmatter.browser : "None",
    },
    {
      metadata: "Preinstalled productivity software",
      value: source.frontmatter.productivity
        ? source.frontmatter.productivity
        : "None",
    },
    {
      metadata: "Shell",
      value: source.frontmatter.shell ? source.frontmatter.shell : "Unknown",
    },
    {
      metadata: "Package manager",
      value: source.frontmatter.packagemgr
        ? source.frontmatter.packagemgr
        : "Unknown",
    },
    {
      metadata: "Startup manager",
      value: source.frontmatter.startup
        ? source.frontmatter.startup
        : "Unknown",
    },
    {
      metadata: "License",
      value: source.frontmatter.license
        ? source.frontmatter.license
        : "Contact contributors for details",
    },
    {
      metadata: "Version at writing",
      value: source.frontmatter.version
        ? source.frontmatter.version
        : "Not provided",
    },
  ];

  return (
    <>
      <Head>
        <title>
          ULOSINO &mdash; {source.frontmatter.name}: '
          {source.frontmatter.summary}'
        </title>
        <meta
          property="og:title"
          content="{source.frontmatter.name} on ULOSINO"
        />
        <meta
          name="description"
          content="Discover {source.frontmatter.name} on ULOSINO. Learn and lift off with a through description and explore ULOSINO's vast collection of metadata."
        />
        <meta
          property="og:description"
          content="Discover {source.frontmatter.name} on ULOSINO."
        />
      </Head>

      <Grid>
        <Text h1>{source.frontmatter.name}</Text>
      </Grid>

      <Grid>
        <ErrorFallback>
          <MDXRemote {...source} />
        </ErrorFallback>
      </Grid>

      <Grid>
        <Grid.Container gap={2} direction="row">
          {source.frontmatter.donate && (
            <Grid>
              <Link href={donationPath} passHref>
                <Button icon={<CreditCard />} auto>
                  Donate
                </Button>
              </Link>
            </Grid>
          )}
          {source.frontmatter.website && (
            <Grid>
              <Link href={source.frontmatter.website} passHref>
                <Button icon={<Globe />} auto>
                  Project Website
                </Button>
              </Link>
            </Grid>
          )}
          {source.frontmatter.repository && (
            <Grid>
              <Link href={source.frontmatter.repository} passHref>
                <Button icon={<IconCode />} auto>
                  Source Repository
                </Button>
              </Link>
            </Grid>
          )}
          <Grid>
            <Button icon={<Share />} auto onClick={ShareContent}>
              Share/Copy
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>

      <Grid>
        <Table data={data}>
          <Table.Column prop="metadata" label="Metadata" />
          <Table.Column prop="value" label={source.frontmatter.name} />
        </Table>
      </Grid>

      <Grid>
        <Link href={contributionPath} passHref>
          <Button icon={<Edit />} auto>
            Edit Content Source Code
          </Button>
        </Link>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}

interface PathProps {
  params: {
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

// Use the MDX files to generate props
// @ts-expect-error
export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params }: PathProps) => {
  // Find Markdown files
  const filePath = path.join(`public/markdown/browse`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  // Use the files to parse MDX
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  // This uses the OS name to get the donation page URL
  const donationPagePath = path.join(`/marketplace/`, `${params.slug}`);

  const contributionPagePath = path.join(
    `https://github.com/ulosino/ulosino/blob/main/public/markdown/browse`,
    `${params.slug}.mdx`
  );

  return {
    props: {
      source: mdxSource,
      donationPath: donationPagePath,
      contributionPath: contributionPagePath,
    },
  };
};

// Find MDX files in the /public/markdown/ folder to generate paths
export const getStaticPaths = async () => {
  const pageContentPath = path.join(process.cwd(), "public/markdown/browse");
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

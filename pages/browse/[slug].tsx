// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Stack,
  Heading,
  Button,
  Badge,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { ErrorFallback } from "components/ErrorFallback";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import {
  HiOutlineGlobe,
  HiOutlineCode,
  HiOutlineCreditCard,
  HiOutlinePencil,
} from "react-icons/hi";

// Keybinding libraries
import { useEffect } from "react";
import { useHotkeyManager } from "providers/KeybindingProvider";
import { isWindows } from "react-device-detect";

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
  const manager = useHotkeyManager();
  useEffect(() => {
    {
      source.frontmatter.website && isWindows
        ? manager.registerHotkey({
            key: "O",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () =>
              window.open(source.frontmatter.website, "_blank") ||
              window.location.replace(source.frontmatter.website),
          })
        : manager.registerHotkey({
            key: "O",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () =>
              window.open(source.frontmatter.website, "_blank") ||
              window.location.replace(source.frontmatter.website),
          }),
        [manager, window];
    }
  });
  useEffect(() => {
    {
      source.frontmatter.repository && isWindows
        ? ""
        : manager.registerHotkey({
            key: "O",
            ctrl: true,
            shift: false,
            alt: true,
            callback: () =>
              window.open(source.frontmatter.repository, "_blank") ||
              window.location.replace(source.frontmatter.repository),
          }),
        [manager, window];
    }
  });
  useEffect(() => {
    {
      source.frontmatter.donate && isWindows
        ? manager.registerHotkey({
            key: "D",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () =>
              window.open(source.frontmatter.donate, "_blank") ||
              window.location.replace(source.frontmatter.donate),
          })
        : manager.registerHotkey({
            key: "D",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () =>
              window.open(source.frontmatter.donate, "_blank") ||
              window.location.replace(source.frontmatter.donate),
          }),
        [manager, window];
    }
  });
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

      <Stack direction="column" spacing={5}>
        <ErrorFallback>
          <Heading size="xl" id="testingOSPageName">
            {source.frontmatter.name}
          </Heading>
        </ErrorFallback>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <ErrorFallback>
            <Flex direction="column" as="main" id="testingOSPageDescription">
              <MDXRemote {...source} />
            </Flex>
          </ErrorFallback>
          <ErrorFallback>
            <Stack
              direction="column"
              spacing={10}
              as="section"
              minW={{ base: "inherit", sm: 250 }}
            >
              <Stack direction="column" spacing={2}>
                {source.frontmatter.donate && (
                  <Link href={donationPath} passHref>
                    <Button
                      leftIcon={<HiOutlineCreditCard />}
                      as="a"
                      id="testingDonationPageLink"
                    >
                      Donate{" "}
                      <Badge ms={2} bg="brand" color="gray.800" pt={1}>
                        Tempo
                      </Badge>
                    </Button>
                  </Link>
                )}
                {source.frontmatter.website && (
                  <Link href={source.frontmatter.website} passHref>
                    <Button
                      leftIcon={<HiOutlineGlobe />}
                      as="a"
                      id="testingOSPageProjectWebsiteLink"
                    >
                      Visit Project Website
                    </Button>
                  </Link>
                )}
                {source.frontmatter.repository && (
                  <Link href={source.frontmatter.repository} passHref>
                    <Button
                      leftIcon={<HiOutlineCode />}
                      as="a"
                      id="testingOSPageProjectRepositoryLink"
                    >
                      Visit Source Repository
                    </Button>
                  </Link>
                )}
              </Stack>
              <Table>
                <Tbody>
                  {source.frontmatter.category && (
                    <Tr>
                      <Td>Category</Td>
                      <Td>
                        <Badge>{source.frontmatter.category}</Badge>
                      </Td>
                    </Tr>
                  )}
                  {source.frontmatter.descends && (
                    <Tr>
                      <Td>Based on</Td>
                      <Td id="testingOSPageTableDescends">
                        {source.frontmatter.descends}
                      </Td>
                    </Tr>
                  )}
                  {source.frontmatter.platform && (
                    <Tr>
                      <Td>Platforms</Td>
                      <Td>{source.frontmatter.platform}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.desktop && (
                    <Tr>
                      <Td>Preinstalled Desktop</Td>
                      <Td>{source.frontmatter.desktop}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.browser && (
                    <Tr>
                      <Td>Preinstalled Browser</Td>
                      <Td>{source.frontmatter.browser}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.productivity && (
                    <Tr>
                      <Td>Preinstalled Productivity Software</Td>
                      <Td>{source.frontmatter.productivity}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.shell && (
                    <Tr>
                      <Td>Shell</Td>
                      <Td>{source.frontmatter.shell}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.packagemgr && (
                    <Tr>
                      <Td>Package Manager</Td>
                      <Td>{source.frontmatter.packagemgr}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.startup && (
                    <Tr>
                      <Td>Startup Manager</Td>
                      <Td>{source.frontmatter.startup}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.origin && (
                    <Tr>
                      <Td>Region of Origin</Td>
                      <Td>{source.frontmatter.origin}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.license && (
                    <Tr>
                      <Td>License</Td>
                      <Td>{source.frontmatter.license}</Td>
                    </Tr>
                  )}
                  {source.frontmatter.version && (
                    <Tr>
                      <Td>Version at Writing</Td>
                      <Td>{source.frontmatter.version}</Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
              <Link href={contributionPath} passHref>
                <Button
                  leftIcon={<HiOutlinePencil />}
                  size="sm"
                  as="a"
                  id="testingOSPageEditLink"
                >
                  View on GitHub
                </Button>
              </Link>
            </Stack>
          </ErrorFallback>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
OSPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
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
export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params }: PathProps) => {
  // Find Markdown files
  const filePath = path.join(`public/markdown/browse`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  // Use the files to parse MDX
  // @ts-expect-error
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

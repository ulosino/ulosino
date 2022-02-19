// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

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
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";

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

interface OSPageTypes {
  source: any;
  donationPath: string;
  contributionPath: string;
}

// Begin page
export default function OSPage({
  source,
  donationPath,
  contributionPath,
}: OSPageTypes) {
  return (
    <>
      <Stack direction="column" spacing={5}>
        <Heading size="xl">{source.frontmatter.name}</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Flex direction="column">
            <MDXRemote {...source} />
          </Flex>
          <Stack direction="column" spacing={10} as="section">
            <Stack direction="column" spacing={2}>
              {(source.frontmatter.donate && (
                <Link href={donationPath} passHref>
                  <Button leftIcon={<HiOutlineCreditCard />} as="a">
                    Donate{" "}
                    <Badge ms={2} bg="brand" color="gray.800" pt={1}>
                      Tempo
                    </Badge>
                  </Button>
                </Link>
              )) ?? (
                <Button leftIcon={<HiOutlineCreditCard />} isDisabled>
                  Donate{" "}
                  <Badge variant="tempo" ms={2} pt={1}>
                    Tempo
                  </Badge>
                </Button>
              )}
              <Link href={source.frontmatter.website} passHref>
                <Button leftIcon={<HiOutlineGlobe />} as="a">
                  Visit Project Website
                </Button>
              </Link>
              <Link href={source.frontmatter.repository} passHref>
                <Button leftIcon={<HiOutlineCode />} as="a">
                  Visit Source Repository
                </Button>
              </Link>
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
                    <Td>{source.frontmatter.descends}</Td>
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
                    <Td>Licence</Td>
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
              <Button leftIcon={<HiOutlinePencil />} as="a" size="sm">
                View on GitHub
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
OSPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout isBasicLayout={false}>{page}</Layout>
    </ApplicationKit>
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
  const donationPagePath = path.join(`/tempo/`, `${params.slug}`);

  const contributionPagePath = path.join(
    `https://github.com/ulosino/ulosino/blob/main/public/markdown/browse`,
    `${params.slug}.mdx`
  );

  // Use the OS path to return a image
  // This concept doesn't work due to (1) use of both PNG and JPEG files and (2) general failure
  // const OSPageImagePath = path.join(
  //   process.cwd(),
  //   `public/images/`,
  //   `${params.slug}.png`
  // );

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

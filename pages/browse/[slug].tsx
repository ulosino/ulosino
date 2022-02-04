import { GetStaticProps } from "next";

import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Head from "next/head";
import dynamic from "next/dynamic";

import {
  Stack,
  Heading,
  Text,
  Badge,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineCash, HiOutlineGlobe, HiOutlineCode } from "react-icons/hi";

import UIProvider from "providers/UIProvider";

const DiscussionModal = dynamic(() => import("components/DiscussionModal"));

// Dynamically import Tempo experience components to cut performance on pages where Tempo isn't available
const Modal = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.Modal)
);
const ModalOverlay = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalOverlay)
);
const ModalHeader = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalHeader)
);
const ModalBody = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalBody)
);
const ModalFooter = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalFooter)
);
const TempoDisclaimer = dynamic(() => import("components/TempoDisclaimer"));

// Pages can use the following components if needed
const Image = dynamic(() => import("next/image"));

const availableComponents = [Image];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Image: componentNames.includes("Image") ? Image : null,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <UIProvider>
      <Head>
        <title>
          ULOSINO &mdash; {metadata.title}: '{metadata.summary}'
        </title>
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
        <Stack spacing={10}>
          <Stack spacing={2} as="section">
            <Text textStyle="secondary" as="h6">
              Description
            </Text>
            <MDXRemote {...source} components={components} />
          </Stack>
        </Stack>
        <Stack spacing={10}>
          <Stack spacing={2} as="section">
            <DiscussionModal />
            {metadata.donate && (
              <>
                <Button
                  leftIcon={<HiOutlineCash />}
                  aria-label="Show donation options for this operating system"
                  onClick={onOpen}
                >
                  Donate
                  <Badge ms={2} bg="brand" color="gray.800" pt={1}>
                    Tempo
                  </Badge>
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  isCentered
                  motionPreset="scale"
                  size="sm"
                  scrollBehavior="inside"
                >
                  <ModalOverlay />
                  <ModalContent rounded="2xl">
                    <ModalHeader>Donate to {metadata.title}</ModalHeader>
                    <ModalCloseButton rounded="xl" />
                    <ModalBody>
                      <Stack direction="column" spacing={8}>
                        <Stack direction="column" spacing={2}>
                          <Text textStyle="secondary" as="h6">
                            Visit OS Website
                          </Text>
                          {metadata.donate && (
                            <Link href={metadata.donate} passHref>
                              <Button leftIcon={<HiOutlineCash />}>
                                See Donation Options
                              </Button>
                            </Link>
                          )}
                        </Stack>
                        <Stack direction="column" spacing={2}>
                          <Text textStyle="secondary" as="h6">
                            Quick Donation Options
                          </Text>
                          {(metadata.donateCollective && (
                            <Link href={metadata.donateCollective} passHref>
                              <Button leftIcon={<HiOutlineCash />}>
                                Donate with Open Collective
                              </Button>
                            </Link>
                          )) ?? (
                            <Button leftIcon={<HiOutlineCash />} isDisabled>
                              Donate with Open Collective
                            </Button>
                          )}
                          {(metadata.donateGithub && (
                            <Link href={metadata.donateGithub} passHref>
                              <Button leftIcon={<HiOutlineCash />}>
                                Donate with GitHub Sponsors
                              </Button>
                            </Link>
                          )) ?? (
                            <Button leftIcon={<HiOutlineCash />} isDisabled>
                              Donate with GitHub Sponsors
                            </Button>
                          )}
                          {(metadata.donateLibera && (
                            <Link href={metadata.donateLibera} passHref>
                              <Button leftIcon={<HiOutlineCash />}>
                                Donate with Liberapay
                              </Button>
                            </Link>
                          )) ?? (
                            <Button leftIcon={<HiOutlineCash />} isDisabled>
                              Donate with Liberapay
                            </Button>
                          )}
                        </Stack>
                        <Stack direction="column" spacing={2}>
                          <Badge bg="brand" color="gray.800" w={210}>
                            Powered by ULOSINO Tempo
                          </Badge>
                        </Stack>
                        <TempoDisclaimer />
                      </Stack>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Done</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            )}
            {metadata.website && (
              <Link href={metadata.website} passHref>
                <Button
                  leftIcon={<HiOutlineGlobe />}
                  id="testing-db-websiteLinkButton"
                >
                  Visit Website
                </Button>
              </Link>
            )}
            {metadata.repository && (
              <Link href={metadata.repository} passHref>
                <Button leftIcon={<HiOutlineCode />}>Browse Source</Button>
              </Link>
            )}
          </Stack>
          <Stack spacing={2} as="section">
            <Text textStyle="secondary" as="h6">
              Information
            </Text>
            <Table>
              <Tbody>
                {/* These are only shown the category if the category has any value */}
                {metadata.version && (
                  <Tr>
                    <Td>Version</Td>
                    <Td>{metadata.version}</Td>
                  </Tr>
                )}
                {metadata.category && (
                  <Tr>
                    <Td>Category</Td>
                    <Td>
                      <Badge>{metadata.category}</Badge>
                    </Td>
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
                    <Td>Preinstalled Desktop</Td>
                    <Td>{metadata.desktop}</Td>
                  </Tr>
                )}
                {metadata.browser && (
                  <Tr>
                    <Td>Preinstalled Browser</Td>
                    <Td>{metadata.browser}</Td>
                  </Tr>
                )}
                {metadata.productivity && (
                  <Tr>
                    <Td>Preinstalled Productivity Software</Td>
                    <Td>{metadata.productivity}</Td>
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

  const componentNames = [/<Image/.test(content) ? "Image" : null].filter(
    Boolean
  );

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

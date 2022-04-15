// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Suspense and performance
import { useLocalStorage } from "@rehooks/local-storage";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Stack,
  Center,
  Box,
  Heading,
  Text,
  Icon,
  Button,
  Badge,
  Code,
  useStyleConfig,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import {
  HiCreditCard,
  HiOutlineCreditCard,
  HiOutlineChevronLeft,
  HiOutlineGlobe,
  HiOutlineUpload,
} from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { ErrorFallback } from "components/ErrorFallback";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface OSPageTypes {
  source: any;
  descriptionPath: string;
}

// Begin page
export default function DonationPage({ source, descriptionPath }: OSPageTypes) {
  // Get preferences
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");

  function Share() {
    if (navigator.share) {
      const url = document.location.href;
      navigator
        .share({
          title: `${source.frontmatter.name}`,
          text: `Discover ${source.frontmatter.name} donation options on ULOSINO Tempo`,
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

  return (
    <>
      <Head>
        <title>
          ULOSINO &mdash; Donate to {source.frontmatter.name} on ULOSINO Tempo
        </title>
        <meta
          property="og:title"
          content="Donate to {source.frontmatter.name} on ULOSINO Tempo"
        />
        <meta
          name="description"
          content="Quickly donate to {source.frontmatter.name} with ULOSINO Tempo donation options."
        />
        <meta
          property="og:description"
          content="Donate to {source.frontmatter.name} with ULOSINO Tempo donation options."
        />
      </Head>

      {donationFeatures ? (
        <>
          <Text me={2}>ULOSINO Tempo features are disabled.</Text>
          <Code fontSize="xs">IAE FeatureIsDisabled</Code>
        </>
      ) : (
        <Flex direction={{ base: "column", md: "row" }}>
          <Stack
            direction="column"
            spacing={10}
            mb={10}
            me={{ base: "none", md: 10 }}
            minW={{ base: "inherit", sm: 175 }}
            display={{ base: "none", md: "flex" }}
          >
            <Center>
              <Icon
                as={HiCreditCard}
                w={16}
                h={16}
                aria-label="Payment card icon indicating payment options"
                title="Payment card"
              />
            </Center>
            <Stack direction="column" spacing={2}>
              <Link href={descriptionPath} passHref>
                <Button leftIcon={<HiOutlineChevronLeft />} as="a">
                  Go Back
                </Button>
              </Link>
              <Button leftIcon={<HiOutlineUpload />} onClick={Share}>
                Share or Copy
              </Button>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={10} flex={1} as="main">
            <Stack direction="column" spacing={5}>
              <Heading size="xl">Donate to {source.frontmatter.name}</Heading>
              <ErrorFallback>
                {(source.frontmatter.donate && (
                  <>
                    <Box>
                      <Badge variant="tempo">Powered by ULOSINO Tempo</Badge>
                    </Box>
                    <Stack direction="column" spacing={2}>
                      <Text as="h6" textStyle="miniHeading">
                        Make a Donation
                      </Text>
                      {source.frontmatter.donate && (
                        <Link href={source.frontmatter.donate} passHref>
                          <Button leftIcon={<HiOutlineCreditCard />} as="a">
                            Visit Project Website
                          </Button>
                        </Link>
                      )}
                    </Stack>
                    <Stack direction="column" spacing={2}>
                      <Text as="h6" textStyle="miniHeading">
                        Quick Donation Options
                      </Text>
                      {(source.frontmatter.donateOpenCollective && (
                        <Link
                          href={source.frontmatter.donateOpenCollective}
                          passHref
                        >
                          <Button leftIcon={<HiOutlineCreditCard />} as="a">
                            Donate with Open Collective
                          </Button>
                        </Link>
                      )) ?? (
                        <Button leftIcon={<HiOutlineCreditCard />} isDisabled>
                          Donate with Open Collective
                        </Button>
                      )}
                      {(source.frontmatter.donateLiberapay && (
                        <Link
                          href={source.frontmatter.donateLiberapay}
                          passHref
                        >
                          <Button leftIcon={<HiOutlineCreditCard />} as="a">
                            Donate with Liberapay
                          </Button>
                        </Link>
                      )) ?? (
                        <Button leftIcon={<HiOutlineCreditCard />} isDisabled>
                          Donate with Liberapay
                        </Button>
                      )}
                      {(source.frontmatter.donateGithub && (
                        <Link href={source.frontmatter.donateGithub} passHref>
                          <Button leftIcon={<HiOutlineCreditCard />} as="a">
                            Donate with GitHub Sponsors
                          </Button>
                        </Link>
                      )) ?? (
                        <Button leftIcon={<HiOutlineCreditCard />} isDisabled>
                          Donate with GitHub Sponsors
                        </Button>
                      )}
                    </Stack>
                  </>
                )) ?? (
                  <Card variant="solid">
                    <Stack direction="column" spacing={5}>
                      <Text>
                        ULOSINO Tempo isn't available for{" "}
                        {source.frontmatter.name}.
                      </Text>
                      <Link href={source.frontmatter.website} passHref>
                        <Button leftIcon={<HiOutlineGlobe />} as="a">
                          Visit Project Website
                        </Button>
                      </Link>
                    </Stack>
                  </Card>
                )}
              </ErrorFallback>
            </Stack>
            {source.frontmatter.donate ? (
              <Stack direction="row" spacing={2}>
                <Text fontWeight="bold" fontSize="xs">
                  Warning:
                </Text>
                <Text fontSize="xs">
                  ULOSINO Tempo features link to financial services not provided
                  by ULOSINO. Tender currency to third-parties at your own risk.
                  General advice only. ULOSINO doesn't receive commission from
                  third-party financial services.
                </Text>
              </Stack>
            ) : (
              ""
            )}
          </Stack>
        </Flex>
      )}
    </>
  );
}

// Apply persistent layout, wrapping page
DonationPage.getLayout = function getLayout(page: ReactElement) {
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
export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  // Find Markdown files
  const filePath = path.join(`public/markdown/browse`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  // Use the files to parse MDX
  // @ts-expect-error
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  // This uses the OS name to get the description page URL
  const descriptionPagePath = path.join(`/browse/`, `${params.slug}`);

  return {
    props: {
      source: mdxSource,
      descriptionPath: descriptionPagePath,
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

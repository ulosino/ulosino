// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Design
import { Button, Card, Dot, Grid, Text } from "@geist-ui/core";
import { Share } from "@geist-ui/icons";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

// Layout
import Footer from "components/Footer";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface OSPageTypes {
  source: any;
  donationPath: string;
  contributionPath: object;
  contentPagePath: string;
}

// Begin page
export default function DonatePage({
  source,
  donationPath,
  contributionPath,
  contentPagePath,
}: OSPageTypes) {
  // Sharing features
  function ShareContent() {
    if (navigator.share) {
      const url = document.location.href;
      navigator
        .share({
          title: `${source.frontmatter.name}`,
          text: `Donate to ${source.frontmatter.name} on ULOSINO`,
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

      <Grid>
        <Text h1>Donate to {source.frontmatter.name}</Text>
      </Grid>

      <ErrorFallback>
        {source.frontmatter.donate ? (
          <>
            <Grid>
              <Grid.Container gap={5} direction="row">
                <Grid>
                  <Card>
                    <Grid.Container gap={0} direction="column">
                      <Grid>
                        <Grid.Container gap={1} direction="row">
                          <Grid>
                            <Text h2>{source.frontmatter.name}</Text>
                          </Grid>
                          <Grid>
                            <Dot
                              type={
                                source.frontmatter.category === "Advanced" ||
                                source.frontmatter.category === "Server" ||
                                source.frontmatter.category === "Utility"
                                  ? "warning"
                                  : source.frontmatter.category === "Research"
                                  ? "error"
                                  : "success"
                              }
                            />
                          </Grid>
                        </Grid.Container>
                      </Grid>
                      <Grid>
                        <Text>{source.frontmatter.summary}</Text>
                      </Grid>
                      <Grid>
                        <Link href={contentPagePath} passHref>
                          <Button>Learn More</Button>
                        </Link>
                      </Grid>
                    </Grid.Container>
                  </Card>
                </Grid>
                <Grid>
                  <Grid.Container gap={1} direction="column">
                    {source.frontmatter.donateGithub ? (
                      <Grid>
                        <Link href={source.frontmatter.donateGithub} passHref>
                          <Button auto>Donate with GitHub Sponsors</Button>
                        </Link>
                      </Grid>
                    ) : (
                      <Grid>
                        <Button auto disabled>
                          Donate with GitHub Sponsors
                        </Button>
                      </Grid>
                    )}
                    {source.frontmatter.donateOpenCollective ? (
                      <Grid>
                        <Link
                          href={source.frontmatter.donateOpenCollective}
                          passHref
                        >
                          <Button auto>Donate with Open Collective</Button>
                        </Link>
                      </Grid>
                    ) : (
                      <Grid>
                        <Button auto disabled>
                          Donate with Open Collective
                        </Button>
                      </Grid>
                    )}
                    {source.frontmatter.donateLiberapay ? (
                      <Grid>
                        <Link
                          href={source.frontmatter.donateLiberapay}
                          passHref
                        >
                          <Button auto>Donate with Liberapay</Button>
                        </Link>
                      </Grid>
                    ) : (
                      <Grid>
                        <Button auto disabled>
                          Donate with Liberapay
                        </Button>
                      </Grid>
                    )}
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Grid>

            <Grid>
              <Button icon={<Share />} auto onClick={ShareContent}>
                Share/Copy
              </Button>
            </Grid>

            <Grid>
              <Text type="secondary" small>
                Payments are handled by third-party financial services. General
                advice only. You are responsible for donations or investments.
              </Text>
            </Grid>
          </>
        ) : (
          <Grid>
            <Card>
              <Text>
                {source.frontmatter.name} doesn't have donation options.
              </Text>
              <Link href={contentPagePath} passHref>
                <Button>Learn about {source.frontmatter.name}</Button>
              </Link>
            </Card>
          </Grid>
        )}
      </ErrorFallback>

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
  const contentPagePath = path.join(`/browse/`, `${params.slug}`);

  const contributionPagePath = path.join(
    `https://github.com/noahlst/ulosino/blob/main/public/markdown/browse`,
    `${params.slug}.mdx`
  );

  return {
    props: {
      source: mdxSource,
      donationPath: donationPagePath,
      contributionPath: contributionPagePath,
      contentPagePath: contentPagePath,
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

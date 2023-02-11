// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import { GetStaticProps } from "next";

// Routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Third party design
import { Text, Note, Grid, Card, Button, Dot } from "@geist-ui/core";

// Layout
import Footer from "components/Footer";

// Library files
import getOSPages from "lib/getOSPages";

// Begin page
export default function Home({ AZOSPageData }: any) {
  return (
    <>
      <Head>
        <title>ULOSINO</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Discover open-source operating systems"
        />
        <meta name="description" content="ULOSINO from Hikium" />
        <meta
          property="og:description"
          content="Discover open-source operating systems."
        />
      </Head>

      <Grid>
        <Card>
          <Text>
            Hikium will maintain the ULOSINO archives until November 2023.
          </Text>
          <Link href="https://www.hikium.com" passHref>
            <Button>Visit Hikium.com</Button>
          </Link>
        </Card>
      </Grid>

      <Grid>
        <Grid.Container gap={1} direction="column">
          {AZOSPageData.map(({ slug, name, summary, category }: any) => (
            <Grid key={slug} style={{ cursor: "pointer" }}>
              <Link href={`/browse/${slug}`} passHref>
                <Card>
                  <Grid.Container gap={0} direction="column">
                    <Grid>
                      <Grid.Container gap={1} direction="row">
                        <Grid>
                          <Text h2>{name}</Text>
                        </Grid>
                        <Grid>
                          <Dot
                            type={
                              category === "Advanced" ||
                              category === "Server" ||
                              category === "Utility"
                                ? "warning"
                                : category === "Research"
                                ? "error"
                                : "success"
                            }
                          />
                        </Grid>
                      </Grid.Container>
                    </Grid>
                    <Grid>
                      <Text>{summary}</Text>
                    </Grid>
                  </Grid.Container>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>

      <Grid>
        <Note label={false}>
          ULOSINO was discontinued May 25, 2022. The ULOSINO Archives by Hikium
          launched Feb 11, 2023 without updating the content.
        </Note>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const AZOSPageData = getOSPages();
  return {
    props: {
      AZOSPageData,
    },
  };
};

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Third party design
import { Button, Card, Grid, Text } from "@geist-ui/core";

// Begin page
export default function Custom404() {
  return (
    <>
      <Head>
        <title>ULOSINO - Page not found</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Discover open-source operating systems"
        />
        <meta name="description" content="ULOSINO by Hikium" />
        <meta property="og:description" content="Page not found on ULOSINO" />
      </Head>

      <Grid>
        <Card>
          <Text>This page doesn't exist.</Text>
          <Link href="/" passHref>
            <Button>Go Home</Button>
          </Link>
        </Card>
      </Grid>
    </>
  );
}

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Head and SEO
import Head from "next/head";

// Third party design
import { Text, Note, Grid, Card, Button, Link } from "@geist-ui/core";

// Begin page
export default function Home() {
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
          <Button>Visit Hikium.com</Button>
        </Card>
      </Grid>
      <Grid>
        <Text>Home page</Text>
      </Grid>
      <Grid>
        <Note label={false}>
          ULOSINO was discontinued May 25, 2022. The ULOSINO Archives by Hikium
          launched Feb 11, 2022 without updating the content.
        </Note>
      </Grid>
    </>
  );
}

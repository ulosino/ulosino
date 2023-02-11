// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Head and SEO
import Head from "next/head";

// Third party design
import { Text } from "@geist-ui/core";

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
        <meta property="og:description" content="Discover Open Source OSs." />
      </Head>

      <Text>Page not found. (404)</Text>
    </>
  );
}

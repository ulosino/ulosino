// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Promotion from "components/Promotion";

// Begin page
export default function Custom404() {
  return (
    <>
      <Head>
        <title>ULOSINO is now Osopcloud</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Discover Open Source OSs"
        />
        <meta name="description" content="ULOSINO is now Osopcloud." />
        <meta
          property="og:description"
          content="ULOSINO is is now Osopcloud."
        />
      </Head>

      <Promotion />
    </>
  );
}

// Apply persistent layout, wrapping page
Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <>{page}</>
    </ApplicationProvider>
  );
};

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer } from "components/Loading";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import { ErrorFallback } from "components/ErrorFallback";
const CreateOSPageAssistant = dynamic(
  () => import("components/assistants/CreateOSPageAssistant"),
  {
    suspense: true,
  }
);

// Begin page
export default function CreateOSPage() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Create an OS Page</title>
        <meta property="og:title" content="Create an OS Page on ULOSINO" />
        <meta
          name="description"
          content="Easily create an operating system page ready for ULOSINO."
        />
        <meta
          property="og:description"
          content="Easily create an operating system page."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Create an OS Page</Heading>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Suspense fallback={<LoadingServer />}>
          <ErrorFallback>
            <CreateOSPageAssistant />
          </ErrorFallback>
        </Suspense>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
CreateOSPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationProvider>
  );
};

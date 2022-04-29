// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import { LoadingServerButton } from "components/Loading";

// Link and routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Button } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

import { isWindows, isMacOs, isIOS } from "react-device-detect";

// Begin page
export default function OfflineFallback() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Offline</title>
        <meta property="og:title" content="ULOSINO &mdash; Offline" />
        <meta
          name="description"
          content="There were issues downloading data from the server."
        />
        <meta
          property="og:description"
          content="There were issues downloading data from the server."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">You're Offline</Heading>
        <Text>There were issues downloading data from the server.</Text>
        <Text>
          Check your data and networking settings and then return to ULOSINO.
        </Text>
        <Suspense fallback={<LoadingServerButton />}>
          {isWindows ? (
            <Link href="ms-settings:network-wifi" passHref>
              <Button>Open Windows WiFi Settings</Button>
            </Link>
          ) : (
            <>
              {isMacOs ? (
                <Link
                  href="x-apple.systempreferences:com.apple.preference.network"
                  passHref
                >
                  <Button>Open macOS/iPadOS Networking Preferences</Button>
                </Link>
              ) : (
                <>
                  {isIOS ? (
                    <Link
                      href="x-apple.systempreferences:com.apple.preference.network"
                      passHref
                    >
                      <Button>Open iOS Settings</Button>
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              )}
            </>
          )}
        </Suspense>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
OfflineFallback.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <ErrorLayout is404={false}>{page}</ErrorLayout>
      </Layout>
    </ApplicationProvider>
  );
};

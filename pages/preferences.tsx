// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Button, Heading } from "@chakra-ui/react";
import {
  HiOutlineTemplate,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineSupport,
} from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";

// Begin page
export default function PreferencesList() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Preferences</title>
        <meta property="og:title" content="ULOSINO Preferences" />
        <meta name="description" content="Configure ULOSINO." />
        <meta property="og:description" content="Configure ULOSINO." />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Preferences</Heading>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Stack direction="column" spacing={2}>
          <Link href="/preferences/appearance" passHref>
            <Button as="a" leftIcon={<HiOutlineTemplate />}>
              Appearance
            </Button>
          </Link>
          <Link href="/preferences/notifications" passHref>
            <Button as="a" leftIcon={<HiOutlineBell />}>
              Notifications
            </Button>
          </Link>
          <Link href="/preferences/advanced" passHref>
            <Button as="a" leftIcon={<HiOutlineCog />}>
              Advanced
            </Button>
          </Link>
        </Stack>
        <Link href="https://docs.ulosino.com" passHref>
          <Button as="a" leftIcon={<HiOutlineSupport />}>
            ULOSINO Documentation
          </Button>
        </Link>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
PreferencesList.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={true}
      >
        {page}
      </Layout>
    </ApplicationProvider>
  );
};

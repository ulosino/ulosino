// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text } from "@chakra-ui/react";
import {
  HiOutlineHome,
  HiOutlineDatabase,
  HiOutlineSearch,
  HiOutlineSparkles,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { FiTwitter, FiGithub } from "react-icons/fi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import ColourModeSwitcher from "components/ColourModeSwitcher";

// Begin page
export default function Menu() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Menu</title>
        <meta property="og:title" content="ULOSINO Menu and Options" />
        <meta
          name="description"
          content="Navigate ULOSINO and set app preferences."
        />
        <meta
          property="og:description"
          content="Navigate ULOSINO and set app preferences."
        />
      </Head>

      <Stack direction="column" spacing={10}>
        <Stack direction="column" spacing={2} as="nav">
          <Link href="/" passHref>
            <Button as="a" leftIcon={<HiOutlineHome />}>
              Home
            </Button>
          </Link>
          <Link href="/browse" passHref>
            <Button as="a" leftIcon={<HiOutlineDatabase />}>
              OS List &amp; Tempo
            </Button>
          </Link>
          <Link href="/search" passHref>
            <Button as="a" leftIcon={<HiOutlineSearch />}>
              Advanced Search
            </Button>
          </Link>
          <Link href="/matches" passHref>
            <Button as="a" leftIcon={<HiOutlineSparkles />}>
              ULOSINO Matches
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button as="a" leftIcon={<HiOutlineInformationCircle />}>
              About ULOSINO
            </Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing={2} as="nav">
          <Text textStyle="miniHeading" as="h6">
            Connect and Contribute
          </Text>
          <Link href="https://twitter.com/ulosino" passHref>
            <Button as="a" leftIcon={<FiTwitter />}>
              Twitter
            </Button>
          </Link>
          <Link href="https://github.com/ulosino" passHref>
            <Button as="a" leftIcon={<FiGithub />}>
              GitHub &amp; Source
            </Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing={2} as="nav">
          <Text textStyle="miniHeading" as="h6">
            Session Preferences
          </Text>
          <ColourModeSwitcher />
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Menu.getLayout = function getLayout(page: ReactElement) {
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

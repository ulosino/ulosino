// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text, useColorMode } from "@chakra-ui/react";
import {
  HiOutlineHome,
  HiOutlineDatabase,
  HiOutlineSearch,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import { FiTwitter, FiGithub } from "react-icons/fi";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";

// Begin page
export default function Options() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
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
      </Stack>
      <Stack direction="column" spacing={2} as="nav">
        <Text textStyle="secondary" as="h6">
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
        <Text textStyle="secondary" as="h6">
          Session Preferences
        </Text>
        <Button
          leftIcon={<HiOutlineColorSwatch />}
          onClick={toggleColorMode}
          id="testing-colourSchemeToggle"
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Stack>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
Options.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>{page}</Layout>
    </ApplicationKit>
  );
};

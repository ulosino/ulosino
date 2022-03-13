// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";
import { useRouter } from "next/router";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Stack,
  Center,
  Heading,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { HiTerminal, HiOutlineChevronLeft } from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import {
  GlobalNavigationKeybindings,
  OSPageKeybindings,
  SessionPreferencesKeybindings,
  MiscellaneousKeybindings,
} from "components/KeybindingTable";

// Begin page
export default function KeybindingReference() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Keyboard Shortcut Reference</title>
        <meta
          property="og:title"
          content="Keyboard Shortcut Reference for ULOSINO"
        />
        <meta
          name="description"
          content="Look up the keyboard shortcuts available on ULOSINO."
        />
        <meta
          property="og:description"
          content="Look up the keyboard shortcuts available on ULOSINO."
        />
      </Head>

      <Flex direction={{ base: "column", md: "row" }}>
        <Stack
          direction="column"
          spacing={10}
          mb={10}
          me={{ base: "none", md: 10 }}
          minW={{ base: "inherit", sm: 175 }}
          display={{ base: "none", md: "flex" }}
        >
          <Center>
            <Icon
              as={HiTerminal}
              w={16}
              h={16}
              aria-label="Keyboard icon"
              title="Keyboard"
            />
          </Center>
          <Button
            leftIcon={<HiOutlineChevronLeft />}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </Stack>
        <Stack direction="column" spacing={5} flex={1}>
          <Heading size="xl">Keyboard Shortcut Reference</Heading>
          <noscript>
            <NoJSWarningFeaturesDisabled />
          </noscript>
          <Text>
            ULOSINO includes a set of keyboard shortcuts that allow you make
            moves faster.
          </Text>
          <Text fontSize="xs">
            We collect the browser user agent to identify the Request Host
            operating system.{" "}
            <Link href="/about/privacy">Privacy Notice...</Link>
          </Text>
          <Stack direction="column" spacing={2}>
            <Text textStyle="miniHeading" as="h6">
              Navigation
            </Text>
            <GlobalNavigationKeybindings />
          </Stack>
          <Stack direction="column" spacing={2}>
            <Text textStyle="miniHeading" as="h6">
              Operating System Pages
            </Text>
            <OSPageKeybindings />
          </Stack>
          <Stack direction="column" spacing={2}>
            <Text textStyle="miniHeading" as="h6">
              Session Preferences
            </Text>
            <SessionPreferencesKeybindings />
          </Stack>
          <Stack direction="column" spacing={2}>
            <Text textStyle="miniHeading" as="h6">
              Advanced Shortcuts
            </Text>
            <MiscellaneousKeybindings />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

// Apply persistent layout, wrapping page
KeybindingReference.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
      </Layout>
    </ApplicationProvider>
  );
};

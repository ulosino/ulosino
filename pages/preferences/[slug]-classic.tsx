// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import {
  useColorMode,
  Stack,
  Button,
  Kbd,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Suspense } from "react";
import useLocalStorage, { writeStorage } from "@rehooks/local-storage";
import PreferenceResetAssistant from "components/assistants/PreferenceResetAssistant";
import PreferenceTransferAssistant from "components/assistants/PreferenceTransferAssistant";
import DisableDonationFeaturesConfirmation from "components/confirmations/DisableDonationFeaturesConfirmation";
import { ErrorFallback } from "components/ErrorFallback";
import { LoadingServer, LoadingServerButton } from "components/Loading";
import Link from "next/link";
import { isWindows } from "react-device-detect";
import { HiOutlineTemplate, HiOutlineCog, HiCog } from "react-icons/hi";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";

interface OSPageTypes {
  source: any;
}

// Begin components

// Appearance preferances
export function AppearancePreferences() {
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const { toggleColorMode } = useColorMode();
  return (
    <Stack direction="column" spacing={5}>
      <Stack
        direction="column"
        spacing={1}
        display={{ base: "none", sm: "flex" }}
      >
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefAdvancedSearchLink",
              advancedSearch ? false : true
            )
          }
        >
          Use {advancedSearch ? "Browse" : "Advanced Search"} Link
        </Button>
        <Text fontSize="xs">
          {isWindows ? (
            <>
              <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
            </>
          ) : (
            <>
              <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
            </>
          )}
        </Text>
      </Stack>
      <Stack
        direction="column"
        spacing={1}
        display={{ base: "none", sm: "flex" }}
      >
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefBackButtonLargeWindows",
              backButton ? false : true
            )
          }
        >
          {backButton ? "Hide" : "Show"} Back Button on Large Windows
        </Button>
        <Text fontSize="xs">
          {isWindows ? (
            <>
              <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
            </>
          ) : (
            <>
              <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
            </>
          )}
        </Text>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Button onClick={toggleColorMode}>
          Invert Colours for this Session
        </Button>
        <Stack direction="column" spacing={1}>
          {isWindows ? (
            ""
          ) : (
            <Text fontSize="xs">
              <Kbd>control</Kbd> + <Kbd>W</Kbd>
            </Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

// Application preferences
export function ApplicationPreferences() {
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={2}>
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefMinimiseNotifications",
              minimiseNotifications ? false : true
            )
          }
        >
          {minimiseNotifications ? "Enable" : "Minimise"} In-App Notifications
        </Button>
        <Text fontSize="xs" lineHeight="shorter">
          {minimiseNotifications ? "Allow" : "Hide"} non-critical notifications
          and banners.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Button isDisabled>Minimise Confirmations</Button>
        <Text fontSize="xs" lineHeight="shorter">
          Minimise prompts for confirmation of actions.
        </Text>
      </Stack>
    </Stack>
  );
}

// Application preferences
export function AdvancedPreferences() {
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={2}>
        <Suspense fallback={<LoadingServerButton />}>
          <DisableDonationFeaturesConfirmation />
        </Suspense>
        <Text fontSize="xs" lineHeight="shorter">
          {donationFeatures ? "Enable" : "Disable"} ULOSINO Tempo.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Button isDisabled>Disable Background Update Services</Button>
        <Text fontSize="xs" lineHeight="shorter">
          Open options to manage how ULOSINO manages updates.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <ErrorFallback>
          <Suspense fallback={<LoadingServerButton />}>
            <PreferenceTransferAssistant />
          </Suspense>
        </ErrorFallback>
        <Text fontSize="xs" lineHeight="shorter">
          Manage ULOSINO preferences using a preference code.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Link href="https://github.com/ulosino/ulosino/tree/main/docs" passHref>
          <Button as="a">Open Documentation on GitHub</Button>
        </Link>
        <Text fontSize="xs" lineHeight="shorter">
          Browse through a selection of documentation resources on GitHub.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Suspense fallback={<LoadingServerButton />}>
          <PreferenceResetAssistant />
        </Suspense>
        <Text fontSize="xs" lineHeight="shorter">
          Restore default preferences for all sessions.
        </Text>
      </Stack>
    </Stack>
  );
}

const tabData = [
  {
    label: "Appearance",
    slug: "appearance",
    description: "Change the appearance of ULOSINO.",
    icon: <HiOutlineTemplate />,
    content: <AppearancePreferences />,
  },
  {
    label: "Notifications",
    slug: "notifications",
    description: "Manage notifications and application verbosity.",
    icon: <HiOutlineCog />,
    content: <ApplicationPreferences />,
  },
  {
    label: "Advanced",
    slug: "advanced",
    description: "Change advanced application behaviours and settings.",
    icon: <HiOutlineCog />,
    content: <AdvancedPreferences />,
  },
];

// Begin page
export default function PreferencesPages({ source }: OSPageTypes) {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Preferences</title>
        <meta property="og:title" content="Preferences on ULOSINO" />
        <meta name="description" content="{source.description}." />
        <meta property="og:description" content="{source.description}." />
      </Head>

      <Flex direction={{ base: "column", sm: "row" }}>
        <Stack
          direction="column"
          spacing={10}
          me={{ base: 0, sm: 10 }}
          mb={{ base: 5, sm: 0 }}
          minW={{ base: "inherit", sm: 175 }}
        >
          <Center>
            <Icon
              as={HiCog}
              w={16}
              h={16}
              aria-label="Mechanical cog indicating preferences"
              title="Mechanical cog"
            />
          </Center>
          <Stack spacing={2}>
            {tabData.map((tab, index) => (
              <Link href={`/preferences/${tab.slug}`} passHref key={index}>
                <Button key={tab.label} leftIcon={tab.icon} as="a">
                  {tab.label}
                </Button>
              </Link>
            ))}
          </Stack>
          <Stack spacing={2}>
            <Button>License &amp; Legal</Button>
            <Button>Privacy Notice</Button>
          </Stack>
        </Stack>
        <Box w="full">
          <Stack direction="column" spacing={5}>
            <Heading size="xl">{source.label}</Heading>
            <noscript>
              <NoJSWarningFeaturesDisabled />
            </noscript>
            <Text>{source.description}</Text>
            <Suspense fallback={<LoadingServer />}>
              <Box>{source.content}</Box>
            </Suspense>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

// Apply persistent layout, wrapping page
PreferencesPages.getLayout = function getLayout(page: ReactElement) {
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

interface PathProps {
  params: {
    slug: any;
  };
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const source = tabData.map((tab) => ({
    slug: tab.slug,
    label: tab.label,
    description: tab.description,
    icon: tab.icon,
    content: tab.content,
  }));

  return {
    props: {
      source: source,
    },
  };
};

export const getStaticPaths = async () => {
  // Create pages for each tabData content
  const paths = tabData.map((tab) => ({
    params: {
      slug: tab.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This implements appearance preferences

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServerButton } from "components/Loading";
import useLocalStorage from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import PreferencesLayout from "components/layouts/PreferencesLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import { ErrorFallback } from "components/ErrorFallback";
import { LowBatteryErrorButton } from "components/LowBatteryError";
const DisableDonationFeaturesConfirmation = dynamic(
  () => import("components/confirmations/DisableDonationFeaturesConfirmation"),
  {
    suspense: true,
  }
);
const DisableUpdateFeaturesConfirmation = dynamic(
  () => import("components/confirmations/DisableUpdateFeaturesConfirmation"),
  {
    suspense: true,
  }
);
const EnableJunctionProjectPreview = dynamic(
  () => import("components/confirmations/EnableJunctionProjectPreview"),
  {
    suspense: true,
  }
);
const PreferenceTransferAssistant = dynamic(
  () => import("components/assistants/PreferenceTransferAssistant"),
  {
    suspense: true,
  }
);
const PreferenceResetAssistant = dynamic(
  () => import("components/assistants/PreferenceResetAssistant"),
  {
    suspense: true,
  }
);

// Begin page
export default function AdvancedPreferences() {
  const [lowBatteryMode] = useLocalStorage("P3LowBatteryMode");
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  const [backgroundUpdates] = useLocalStorage("P3PrefDisableBackgroundUpdates");
  const [junctionPreview] = useLocalStorage("P3PrefJunctionPreview");
  const pageName = useBreakpointValue({
    base: "Advanced",
    sm: "Advanced Preferences",
  });
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Advanced Preferences</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Advanced Preferences"
        />
        <meta
          name="description"
          content="Change advanced application behaviours and settings."
        />
        <meta
          property="og:description"
          content="Change advanced application settings."
        />
      </Head>
      <Stack direction="column" spacing={5}>
        <Heading size="xl">{pageName}</Heading>
        <Text>Change advanced application settings.</Text>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
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
            <Suspense fallback={<LoadingServerButton />}>
              <DisableUpdateFeaturesConfirmation />
            </Suspense>
            <Text fontSize="xs" lineHeight="shorter">
              {backgroundUpdates ? "Enable" : "Disable"} automatic update
              checks.
            </Text>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Suspense fallback={<LoadingServerButton />}>
              <EnableJunctionProjectPreview />
            </Suspense>
            <Text fontSize="xs" lineHeight="shorter">
              {junctionPreview ? "Disable" : "Enable"} the Junction Project
              Preview.
            </Text>
          </Stack>
          <Stack direction="column" spacing={2}>
            {lowBatteryMode ? (
              <LowBatteryErrorButton />
            ) : (
              <ErrorFallback>
                <Suspense fallback={<LoadingServerButton />}>
                  <PreferenceTransferAssistant />
                </Suspense>
              </ErrorFallback>
            )}
            <Text fontSize="xs" lineHeight="shorter">
              Manage ULOSINO preferences using a preference code.
            </Text>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Link href="https://docs.ulosino.com" passHref>
              <Button as="a">Open ULOSINO Documentation</Button>
            </Link>
            <Text fontSize="xs" lineHeight="shorter">
              Browse through an assortment of documentation resources.
            </Text>
          </Stack>
          <Stack direction="column" spacing={2}>
            {lowBatteryMode ? (
              <LowBatteryErrorButton />
            ) : (
              <Suspense fallback={<LoadingServerButton />}>
                <PreferenceResetAssistant />
              </Suspense>
            )}
            <Text fontSize="xs" lineHeight="shorter">
              Restore default preferences for all sessions.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
AdvancedPreferences.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <PreferencesLayout>{page}</PreferencesLayout>
      </Layout>
    </ApplicationProvider>
  );
};

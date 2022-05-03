// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer, LoadingServerButton } from "components/Loading";
import useLocalStorage, { writeStorage } from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Button } from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import PreferencesLayout from "components/layouts/PreferencesLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
const DisableDonationFeaturesConfirmation = dynamic(
  () => import("components/confirmations/DisableDonationFeaturesConfirmation"),
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

import { isWindows, isMacOs, isIOS } from "react-device-detect";

// Begin page
export default function AdvancedPreferences() {
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");

  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Preferences</title>
        <meta property="og:title" content="ULOSINO &mdash; Preferences" />
        <meta
          name="description"
          content="Change application behaviours and settings."
        />
        <meta
          property="og:description"
          content="Change application settings."
        />
      </Head>
      <Stack direction="column" spacing={5}>
        <Heading size="xl">Preferences</Heading>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Stack direction="column" spacing={5}>
          <Suspense fallback={<LoadingServer />}>
            <Stack direction="column" spacing={2}>
              <Button
                onClick={(_) =>
                  writeStorage(
                    "P3PrefMinimiseNotifications",
                    minimiseNotifications ? false : true
                  )
                }
              >
                {minimiseNotifications ? "Enable" : "Minimise"} Notifications
              </Button>
              <Text fontSize="xs" lineHeight="shorter">
                {minimiseNotifications ? "Allow" : "Hide"} notifications and
                banners. This doesn't affect update notifications. To manage
                notification settings that apply to all applications on your
                system,{" "}
                {isWindows ? (
                  <Link href="ms-settings:notifications">
                    open Windows settings
                  </Link>
                ) : (
                  <>
                    {isMacOs ? (
                      <Link href="x-apple.systempreferences:com.apple.preference.notifications">
                        open macOS preferences
                      </Link>
                    ) : (
                      <>
                        {isIOS ? (
                          <Link href="prefs:root=NOTIFICATIONS_ID">
                            open iOS preferences
                          </Link>
                        ) : (
                          "open your operating system's settings"
                        )}
                      </>
                    )}
                  </>
                )}
                .
              </Text>
            </Stack>
          </Suspense>
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
              <PreferenceResetAssistant />
            </Suspense>
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

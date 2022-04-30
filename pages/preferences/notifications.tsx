// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This implements appearance preferences

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import { LoadingServer } from "components/Loading";
import useLocalStorage, { writeStorage } from "@rehooks/local-storage";

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

import { isMacOs, isIOS, isWindows } from "react-device-detect";

// Begin page
export default function NotificationPreferences() {
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const pageName = useBreakpointValue({
    base: "Notifications",
    sm: "Notification Preferences",
  });
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Notification Preferences</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Notification Preferences"
        />
        <meta name="description" content="Manage notifications." />
        <meta property="og:description" content="Manage notifications." />
      </Head>
      <Stack direction="column" spacing={5}>
        <Heading size="xl">{pageName}</Heading>
        <Text>Manage notifications and application verbosity.</Text>
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
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
NotificationPreferences.getLayout = function getLayout(page: ReactElement) {
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

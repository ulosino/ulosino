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
  Kbd,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import PreferencesLayout from "components/layouts/PreferencesLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";

import { isMacOs, isIOS, isWindows } from "react-device-detect";

// Begin page
export default function AppearancePreferences() {
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const { toggleColorMode } = useColorMode();
  const pageName = useBreakpointValue({
    base: "Appearance",
    sm: "Appearance Preferences",
  });
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Appearance Preferences</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Appearance Preferences"
        />
        <meta name="description" content="Change the appearance of ULOSINO." />
        <meta
          property="og:description"
          content="Change the appearance of ULOSINO."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">{pageName}</Heading>
        <Text>Change the appearance of ULOSINO.</Text>
        <noscript>
          <NoJSWarningFeaturesDisabled />
        </noscript>
        <Stack direction="column" spacing={5}>
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
          <Suspense fallback={<LoadingServer />}>
            <Text fontSize="xs">
              To reduce animations,{" "}
              {isWindows ? (
                <Link href="ms-settings:easeofaccess-display">
                  open Windows settings
                </Link>
              ) : (
                <>
                  {isMacOs ? (
                    <Link href="x-apple.systempreferences:com.apple.preference.universalaccess">
                      open macOS preferences
                    </Link>
                  ) : (
                    <>
                      {isIOS ? (
                        <Link href="prefs:root=ACCESSIBILITY&path=MOTION_TITLE">
                          open iOS preferences
                        </Link>
                      ) : (
                        "open your operating system's settings"
                      )}
                    </>
                  )}
                </>
              )}
              {isWindows ? (
                ", and select Reduce Motion."
              ) : (
                <>
                  {isMacOs ? (
                    ", select Display, and then select Reduce Motion."
                  ) : (
                    <>{isIOS ? ", and select Reduce Motion." : "."}</>
                  )}
                </>
              )}
            </Text>
          </Suspense>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
AppearancePreferences.getLayout = function getLayout(page: ReactElement) {
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

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

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
  usePrefersReducedMotion,
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
  const [accessibleFonts] = useLocalStorage("P3PrefAccessibleFonts");
  const { toggleColorMode } = useColorMode();

  function SetFontPreference() {
    writeStorage("P3PrefAccessibleFonts", accessibleFonts ? false : true);
    window.location.reload();
  }

  // Honour system accessibility preferences
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Accessibility Preferences</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Accessibility Preferences"
        />
        <meta name="description" content="Make ULOSINO more accessible." />
        <meta
          property="og:description"
          content="Make ULOSINO more accessible."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Accessibility Preferences</Heading>
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
          <Stack
            direction="column"
            spacing={1}
            display={{ base: "none", sm: "flex" }}
          >
            <Button onClick={SetFontPreference}>
              {accessibleFonts ? "Disable" : "Enable"} Accessible Fonts
            </Button>
            <Text fontSize="xs">
              Use{" "}
              {accessibleFonts
                ? "Public Sans, the default ULOSINO font."
                : "Atkinson Hyperlegible, a font optimised for accessibility."}
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
              To {reducedMotion ? "enable" : "reduce"} animations,{" "}
              {isWindows ? (
                <Link href="ms-settings:easeofaccess-display">
                  open Windows ease of access settings
                </Link>
              ) : (
                <>
                  {isMacOs ? (
                    <Link href="x-apple.systempreferences:com.apple.preference.universalaccess">
                      open macOS accessibility preferences
                    </Link>
                  ) : (
                    <>
                      {isIOS ? (
                        <Link href="prefs:root=ACCESSIBILITY&path=MOTION_TITLE#REDUCE_MOTION_ID">
                          open iOS settings
                        </Link>
                      ) : (
                        "open your operating system's accessibility settings"
                      )}
                    </>
                  )}
                </>
              )}
              {isWindows ? (
                `, and ${
                  reducedMotion ? "enable" : "disable"
                } Show Animations in Windows.`
              ) : (
                <>
                  {isMacOs ? (
                    `, select Display, and then ${
                      reducedMotion ? "disable" : "enable"
                    } Reduce Motion.`
                  ) : (
                    <>
                      {isIOS
                        ? `, and ${
                            reducedMotion ? "disable" : "enable"
                          } Reduce Motion.`
                        : "."}
                    </>
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

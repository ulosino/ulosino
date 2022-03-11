// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The Application Kit implements providers
// This replaces some functions delegated to _app.tsx. Application Kit is opt-in by page

// Types
import { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { ChakraProvider } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";

// First party components
import { ErrorFallbackApplication } from "components/ErrorFallback";
import { BrowserNotPermitted } from "components/BrowserNotPermitted";

// Keybinding libraries
import {
  KeybindingProvider,
  KeybindingManager,
} from "providers/KeybindingProvider";
const manager = new KeybindingManager();
import { useEffect } from "react";
import { isWindows, isIE, isLegacyEdge, isYandex } from "react-device-detect";

// This contains deployment variables from Vercel
function DumpDeploymentInformation() {
  console.debug("Vercel environment details (production/preview)");
  console.debug(process.env.NEXT_PUBLIC_VERCEL_ENV);
  console.debug(process.env.NEXT_PUBLIC_VERCEL_URL);
  console.debug(
    "Vercel deployment Git details (commit, branch, commit message)"
  );
  console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
  console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF);
  console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE);
}

// Begin wrapping component
export default function ApplicationKit({
  children,
}: {
  children: ReactElement;
}) {
  // Troubleshooting keybindings
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "~",
            ctrl: false,
            shift: true,
            alt: true,
            callback: () => DumpDeploymentInformation(),
          })
        : manager.registerHotkey({
            key: "~",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () => DumpDeploymentInformation(),
          }),
        [manager, DumpDeploymentInformation];
    }
  });
  return (
    <ChakraProvider theme={UITheme}>
      <ErrorFallbackApplication>
        <KeybindingProvider manager={manager}>
          {isIE ? (
            <BrowserNotPermitted browser="Internet Explorer" />
          ) : (
            <>
              {isLegacyEdge ? (
                <BrowserNotPermitted browser="Microsoft Edge Legacy" />
              ) : (
                <>
                  {isYandex ? (
                    <BrowserNotPermitted browser="Yandex Browser" />
                  ) : (
                    children
                  )}
                </>
              )}
            </>
          )}
        </KeybindingProvider>
      </ErrorFallbackApplication>
    </ChakraProvider>
  );
}

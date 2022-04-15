// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This provider allows the user overrides the Workbox cache if there is a newer version found
// It works in the background and is not visible to the user unless an update is pending, hence the provider classification

// Suspense and performance
import { LoadingServer } from "components/Loading";
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage,
} from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Button,
  Text,
  createStandaloneToast,
  Box,
  useStyleConfig,
  Center,
  DarkMode,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import UITheme from "providers/UIThemeProvider";

import { useEffect, useRef } from "react";

// Begin component
export default function UpdateProvider() {
  const toast = createStandaloneToast({ theme: UITheme });
  const id = "updateProviderUpdatePrompt";
  const updatePromptRef: any = useRef();

  const [updatePreference] = useLocalStorage("P3TriggerUpdate");

  function PromptToast() {
    return (
      <Card variant="secondary">
        <DarkMode>
          <Stack direction="row" spacing={5}>
            <Center>
              <Text textStyle="miniHeading" as="h6">
                Updates are Ready
              </Text>
            </Center>
            <Button
              onClick={(_) =>
                writeStorage("P3TriggerUpdate", updatePreference ? false : true)
              }
              size="sm"
              ms={2}
            >
              Continue &amp; Update
            </Button>
          </Stack>
        </DarkMode>
      </Card>
    );
  }

  function AddPromptToast() {
    updatePromptRef.current = toast({
      id,
      duration: 10000,
      position: "bottom",
      render: PromptToast,
    });
  }

  function ClosePromptToast() {
    if (updatePromptRef.current) {
      toast.close(updatePromptRef.current);
    }
  }

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      // @ts-expect-error
      window.workbox !== undefined
    ) {
      // @ts-expect-error
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener("installed", (event: { type: any }) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener("controlling", (event: { type: any }) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener("activated", (event: { type: any }) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      const promptNewVersionAvailable = (event: any) => {
        if (!toast.isActive(id)) {
          AddPromptToast();
        }
        if (updatePreference) {
          ClosePromptToast();

          deleteFromStorage("P3TriggerUpdate");

          wb.addEventListener("controlling", (event: any) => {
            window.location.reload();
          });

          wb.messageSkipWaiting();
        }
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);

      wb.register();
    }
  }),
    [updatePreference, toast];
  return <></>;
}

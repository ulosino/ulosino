// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This provider allows the user overrides the Workbox cache if there is a newer version found
// It works in the background and is not visible to the user unless an update is pending, hence the provider classification

// Suspense and performance
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
  useDisclosure,
  useBoolean,
} from "@chakra-ui/react";

// First party components
import Overlay from "components/Overlay";

import { useEffect, useRef } from "react";

// Begin component
export default function UpdateProvider() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  const [updatePreference] = useLocalStorage("P3TriggerUpdate");
  const [installing, setInstalling] = useBoolean();

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
        onOpen();
        if (updatePreference) {
          setInstalling.on();
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
    [updatePreference, onOpen];

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          Install the latest updates now to get the latest content and features.
        </Text>
      </Stack>
    );
  }

  function ModalClose() {
    writeStorage("P3TriggerUpdate", false);
    onClose();
  }

  function ModalFooter() {
    return (
      <>
        {installing ? (
          <Button isDisabled>Not Now</Button>
        ) : (
          <Button onClick={ModalClose}>Not Now</Button>
        )}
        {installing ? (
          <Button ms={2} isLoading loadingText="Updating" />
        ) : (
          <Button
            ref={cancelRef}
            colorScheme="green"
            ms={2}
            onClick={(_) =>
              writeStorage("P3TriggerUpdate", updatePreference ? false : true)
            }
          >
            Continue &amp; Update
          </Button>
        )}
      </>
    );
  }

  return (
    <Overlay
      header="Update ULOSINO?"
      body={<ModalBody />}
      footer={<ModalFooter />}
      cancelRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
      useAlertDialog={true}
    />
  );
}

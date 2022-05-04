// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This Assistant allows the user to graphically delete preference keys stored in LocalStorage

// Suspense and performance
import { deleteFromStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text, useDisclosure } from "@chakra-ui/react";

// First party components
import Overlay from "components/Overlay";

import { useRef } from "react";

export function DeletePreferences() {
  deleteFromStorage("P3PrefBackButtonLargeWindows");
  deleteFromStorage("P3PrefAccessibleFonts");
  deleteFromStorage("P3PrefMinimiseNotifications");
  deleteFromStorage("P3PrefDisableDonationFeatures");
  deleteFromStorage("P3PrefDangerousRuntime");
  console.info(
    "All preferences in LocalStorage have been cleared - using default settings"
  );
}

// Begin component
export default function PreferenceResetAssistant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Get all preferences
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [accessibleFonts] = useLocalStorage("P3PrefAccessibleFonts");
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  const [dangerousRuntime] = useLocalStorage("P3PrefDangerousRuntime");

  // Here we check to see if all of the preferences equal null
  // If so, that means they are in their default state and we can disable access to the modal
  function ModalButton() {
    if (backButton) {
      return <ModalOpener />;
    } else {
      if (accessibleFonts) {
        return <ModalOpener />;
      } else {
        if (minimiseNotifications) {
          return <ModalOpener />;
        } else {
          if (donationFeatures) {
            return <ModalOpener />;
          }
          if (dangerousRuntime) {
            return <ModalOpener />;
          } else return <ModalDisabled />;
        }
      }
    }
  }

  // Buttons to open the modal
  function ModalOpener() {
    return (
      <>
        {isOpen ? (
          <Button isActive>Restore Default Preferences</Button>
        ) : (
          <Button onClick={onOpen}>Restore Default Preferences</Button>
        )}
      </>
    );
  }
  function ModalDisabled() {
    return <Button isDisabled>Restore Default Preferences</Button>;
  }

  // Gracefully close the modal once the deletion has completed
  function BeginDelete() {
    DeletePreferences();
    if (accessibleFonts) {
      window.location.reload();
    } else onClose();
  }

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          This will restore the default preferences, including accessibility
          options.
        </Text>
      </Stack>
    );
  }

  function ModalFooter() {
    return (
      <>
        <Button ref={cancelRef} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="red" ms={2} onClick={BeginDelete}>
          Continue &amp; Restore
        </Button>
      </>
    );
  }

  return (
    <>
      <ModalButton />
      <Overlay
        header="Restore Preferences?"
        body={<ModalBody />}
        footer={<ModalFooter />}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        useAlertDialog={true}
      />
    </>
  );
}

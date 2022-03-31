// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This AlertDialog Assistant allows the user to graphically delete preference keys stored in LocalStorage

// Suspense and performance
import { deleteFromStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Button,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useRef } from "react";

export function DeletePreferences() {
  deleteFromStorage("P3PrefAdvancedSearchLink");
  deleteFromStorage("P3PrefBackButtonLargeWindows");
  deleteFromStorage("P3PrefMinimiseNotifications");
  deleteFromStorage("P3PrefDisableDonationFeatures");
  deleteFromStorage("P3PrefDangerousRuntime");
  console.info(
    "All preferences in LocalStorage have been cleared - using default settings"
  );
}
export default function PreferenceResetAssistant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Get all preferences
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  const [dangerousRuntime] = useLocalStorage("P3PrefDangerousRuntime");

  // Here we check to see if all of the preferences equal null
  // If so, that means they are in their default state and we can disable access to the modal
  function ModalButton() {
    if (advancedSearch) {
      return <ModalOpener />;
    } else {
      if (backButton) {
        return <ModalOpener />;
      } else {
        if (minimiseNotifications) {
          return <ModalOpener />;
        } else {
          if (donationFeatures) {
            return <ModalOpener />;
          } else {
            if (dangerousRuntime) {
              return <ModalOpener />;
            } else return <ModalDisabled />;
          }
        }
      }
    }
  }

  // Buttons to open the modal
  function ModalOpener() {
    return <Button onClick={onOpen}>Use Default Preferences</Button>;
  }
  function ModalDisabled() {
    return <Button isDisabled>Use Default Preferences</Button>;
  }

  // Gracefully close the modal once the deletion has completed
  function BeginDelete() {
    DeletePreferences();
    onClose();
  }

  return (
    <>
      <ModalButton />
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        leastDestructiveRef={cancelRef}
        size="md"
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent rounded="xl">
          <AlertDialogHeader fontSize="2xl">
            Reset Preferences?
          </AlertDialogHeader>
          <AlertDialogBody>
            <Stack direction="column" spacing={5}>
              <Text>This will restore default preferences.</Text>
            </Stack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" ms={2} onClick={BeginDelete}>
              Continue &amp; Reset
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

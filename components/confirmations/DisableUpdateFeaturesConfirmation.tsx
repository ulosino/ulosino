// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This confirms the user that they really want to disable donation features

// Suspense and performance
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text, useDisclosure } from "@chakra-ui/react";

// First party components
import Overlay from "components/Overlay";

import { useRef } from "react";

// Begin component
export default function DisableUpdateFeaturesConfirmation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Get preference
  const [backgroundUpdates] = useLocalStorage("P3PrefDisableBackgroundUpdates");

  // Buttons to open the modal
  function FeaturesEnabled() {
    return (
      <>
        {isOpen ? (
          <Button isActive>Disable Background Update Services</Button>
        ) : (
          <Button onClick={onOpen}>Disable Background Update Services</Button>
        )}
      </>
    );
  }
  function FeaturesDisabled() {
    return (
      <Button
        onClick={(_) =>
          writeStorage(
            "P3PrefDisableBackgroundUpdates",
            backgroundUpdates ? false : true
          )
        }
      >
        Enable Background Update Services
      </Button>
    );
  }

  // Gracefully close the modal once the deletion has completed
  function BeginDelete() {
    writeStorage(
      "P3PrefDisableBackgroundUpdates",
      backgroundUpdates ? false : true
    );
    onClose();
  }

  function ModalButton() {
    if (backgroundUpdates) {
      return <FeaturesDisabled />;
    } else return <FeaturesEnabled />;
  }

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          The app will no longer check for updates in the background. You'll
          miss out on the latest content and features.
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
        <Button colorScheme="orange" ms={2} onClick={BeginDelete}>
          Continue &amp; Disable
        </Button>
      </>
    );
  }

  return (
    <>
      <ModalButton />
      <Overlay
        header="Disable Update Services?"
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

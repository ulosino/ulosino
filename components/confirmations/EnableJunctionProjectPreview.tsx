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
export default function EnableJunctionProjectPreview() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Get preference
  const [featurePreview] = useLocalStorage("P3PrefJunctionPreview");

  // Buttons to open the modal
  function FeaturesEnabled() {
    return (
      <>
        {isOpen ? (
          <Button isActive>Enable Junction Project Preview</Button>
        ) : (
          <Button onClick={onOpen}>Enable Junction Project Preview</Button>
        )}
      </>
    );
  }
  function FeaturesDisabled() {
    return (
      <Button
        onClick={(_) =>
          writeStorage("P3PrefJunctionPreview", featurePreview ? false : true)
        }
      >
        Disable Junction Project Preview
      </Button>
    );
  }

  // Gracefully close the modal once the deletion has completed
  function BeginDelete() {
    writeStorage("P3PrefJunctionPreview", featurePreview ? false : true);
    onClose();
  }

  function ModalButton() {
    if (featurePreview) {
      return <FeaturesDisabled />;
    } else return <FeaturesEnabled />;
  }

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          You are about to enable features from the Junction Project Preview.
        </Text>
        <Text>
          The Junction Project Preview is experimental, may not be stable.
          Continue at your own risk.
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
          Continue &amp; Enable
        </Button>
      </>
    );
  }

  return (
    <>
      <ModalButton />
      <Overlay
        header="Enable Junction Features?"
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

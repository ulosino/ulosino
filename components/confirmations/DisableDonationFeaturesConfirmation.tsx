// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This confirms the user that they really want to disable donation features

// Suspense and performance
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text, useDisclosure, Badge } from "@chakra-ui/react";

// First party components
import Overlay from "components/Overlay";

import { useRef } from "react";

// Begin component
export default function DisableDonationFeaturesConfirmation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Get preference
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");

  // Buttons to open the modal
  function FeaturesEnabled() {
    return (
      <>
        {isOpen ? (
          <Button isActive>
            Disable{" "}
            <Badge variant="tempo" mx={2} pt={1}>
              Tempo
            </Badge>{" "}
            Features
          </Button>
        ) : (
          <Button onClick={onOpen}>
            Disable{" "}
            <Badge variant="tempo" mx={2} pt={1}>
              Tempo
            </Badge>{" "}
            Features
          </Button>
        )}
      </>
    );
  }
  function FeaturesDisabled() {
    return (
      <Button
        onClick={(_) =>
          writeStorage(
            "P3PrefDisableDonationFeatures",
            donationFeatures ? false : true
          )
        }
      >
        Enable{" "}
        <Badge variant="tempo" mx={2} pt={1}>
          Tempo
        </Badge>{" "}
        Features
      </Button>
    );
  }

  // Gracefully close the modal once the deletion has completed
  function BeginDelete() {
    writeStorage(
      "P3PrefDisableDonationFeatures",
      donationFeatures ? false : true
    );
    onClose();
  }

  function ModalButton() {
    if (donationFeatures) {
      return <FeaturesDisabled />;
    } else return <FeaturesEnabled />;
  }

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          All donation features, including links to external financial services,
          will be disabled.
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
        header="Disable Tempo Features?"
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

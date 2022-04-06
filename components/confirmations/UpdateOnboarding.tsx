// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This prompts the user that the update has been successfully installed

// Suspense and performance
import { deleteFromStorage } from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Button, Text, useDisclosure } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

// First party components
import Overlay from "components/Overlay";

import { useEffect, useRef } from "react";

// Begin component
export default function UpdateOnboarding() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  // Gracefully close the modal once the deletion has completed
  function Close() {
    deleteFromStorage("P3AwaitUpdateFinish");
    onClose();
  }

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>You're now using the latest version.</Text>
      </Stack>
    );
  }

  function ModalFooter() {
    return (
      <>
        <Link href="https://github.com/ulosino/ulosino/releases" passHref>
          <Button leftIcon={<HiOutlineExternalLink />} as="a">
            See What's New
          </Button>
        </Link>
        <Button ref={cancelRef} onClick={Close} ms={2}>
          Done
        </Button>
      </>
    );
  }

  return (
    <>
      <Overlay
        header="Updated Successfully"
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

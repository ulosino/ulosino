// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This modal shows the app name, version, and links to deployment resources
// It is similar to "About [Application]" dialogs on macOS

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  useDisclosure,
  Center,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

// First party components
import Logo from "components/Logo";
import { isFirefox } from "react-device-detect";

// Begin component
export default function AboutApplication() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center>
        <Button size="sm" onClick={onOpen}>
          About the ULOSINO Application
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent rounded="xl" my={5}>
          <ModalHeader fontSize="2xl"></ModalHeader>
          <ModalBody>
            <Stack direction="column" spacing={10} my={10}>
              <Center>
                <Center
                  bg="secondary"
                  rounded="2xl"
                  shadow="md"
                  display="flex"
                  p={3}
                >
                  <Logo />
                </Center>
              </Center>
              <Center>
                <Stack direction="column" spacing={2}>
                  <Text>Platform Version 3</Text>
                  <Link
                    href="https://github.com/ulosino/ulosino/releases"
                    passHref
                  >
                    <Button size="sm" as="a">
                      Changelog
                    </Button>
                  </Link>
                  {isFirefox ? (
                    <Button size="sm" isDisabled>
                      Force Update
                    </Button>
                  ) : (
                    <Button size="sm">Force Update</Button>
                  )}
                </Stack>
              </Center>
              <Center>
                <Stack direction="column" spacing={2} mx={10}>
                  <Text fontSize="xs">&copy; Copyright Noah Stanley 2022.</Text>
                  <Link href="/about/license" passHref>
                    <Button size="sm" as="a">
                      Copyright Notice
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/ulosino/ulosino/graphs/contributors"
                    passHref
                  >
                    <Button size="sm" as="a">
                      Project Contributors
                    </Button>
                  </Link>
                </Stack>
              </Center>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

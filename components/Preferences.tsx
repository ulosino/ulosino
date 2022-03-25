// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The Preferences modal allows the user to change "P3Pref" LocalStorage values using a graphical interface

// Suspense and performance
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Spacer,
  Stack,
  Center,
  Button,
  IconButton,
  Text,
  useBoolean,
  useColorMode,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Kbd,
  Badge,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";

import { isWindows } from "react-device-detect";

// Begin component
export default function Preferences() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [applicationPreferences, setApplicationPreferences] = useBoolean();
  const { toggleColorMode } = useColorMode();

  // Global preferences
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDonationFeatures");
  return (
    <>
      <Center display={{ base: "none", sm: "flex" }}>
        <IconButton
          onClick={onOpen}
          icon={<HiOutlineMenu />}
          aria-label="Open Options Menu"
          title="Open Options Menu"
        />
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent rounded="xl" m={5}>
          <ModalHeader fontSize="2xl">Preferences</ModalHeader>
          <ModalBody>
            <Flex direction="row">
              <Stack direction="column" spacing={2} me={10}>
                {applicationPreferences ? (
                  <Button onClick={setApplicationPreferences.off}>
                    Appearance
                  </Button>
                ) : (
                  <Button onClick={setApplicationPreferences.off} isActive>
                    Appearance
                  </Button>
                )}
                {applicationPreferences ? (
                  <Button onClick={setApplicationPreferences.on} isActive>
                    Application
                  </Button>
                ) : (
                  <Button onClick={setApplicationPreferences.on}>
                    Application
                  </Button>
                )}
              </Stack>
              <Spacer />
              {applicationPreferences ? (
                <Stack direction="column" spacing={5} w="full">
                  <Button
                    onClick={(_) =>
                      writeStorage(
                        "P3PrefMinimiseNotifications",
                        minimiseNotifications ? false : true
                      )
                    }
                  >
                    {minimiseNotifications ? "Allow More" : "Minimise"} In-App
                    Notifications
                  </Button>
                  <Button
                    onClick={(_) =>
                      writeStorage(
                        "P3PrefDonationFeatures",
                        donationFeatures ? false : true
                      )
                    }
                  >
                    {donationFeatures ? "Disable" : "Enable"}{" "}
                    <Badge variant="tempo" pt={1} mx={2}>
                      Tempo
                    </Badge>{" "}
                    Features
                  </Button>
                </Stack>
              ) : (
                <Stack direction="column" spacing={5} w="full">
                  <Stack direction="column" spacing={1}>
                    <Button
                      onClick={(_) =>
                        writeStorage(
                          "P3PrefAdvancedSearchLink",
                          advancedSearch ? false : true
                        )
                      }
                    >
                      {advancedSearch ? "Hide" : "Show"} Advanced Search Link
                    </Button>
                    <Text fontSize="xs">
                      {isWindows ? (
                        <>
                          <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
                        </>
                      ) : (
                        <>
                          <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
                        </>
                      )}
                    </Text>
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <Button
                      onClick={(_) =>
                        writeStorage(
                          "P3PrefBackButtonLargeWindows",
                          backButton ? false : true
                        )
                      }
                    >
                      {backButton ? "Hide" : "Show"} Back Button on Large
                      Windows
                    </Button>
                    <Text fontSize="xs">
                      {isWindows ? (
                        <>
                          <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
                        </>
                      ) : (
                        <>
                          <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
                        </>
                      )}
                    </Text>
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <Button onClick={toggleColorMode}>
                      Invert Colours for this Tab
                    </Button>
                    {isWindows ? (
                      ""
                    ) : (
                      <Text fontSize="xs">
                        <Kbd>control</Kbd> + <Kbd>W</Kbd>
                      </Text>
                    )}
                  </Stack>
                </Stack>
              )}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex w="full">
              <Spacer />
              <Button onClick={onClose}>Done</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

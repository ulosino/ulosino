// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This Assistant allows the user to enter a code that is mapped to a preference combination
// For example, if you changed preferences on another browser, enter the code here and it will be applied to this browser

// Suspense and performance
import {
  deleteFromStorage,
  useLocalStorage,
  writeStorage,
} from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Button,
  Text,
  useDisclosure,
  PinInput,
  PinInputField,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";

// First party components
import Overlay from "components/Overlay";
import { DeletePreferences } from "components/assistants/PreferenceResetAssistant";

import { useRef, useState } from "react";

// Begin component
export default function PreferenceTransferAssistant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const defaultRef: any = useRef();

  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  const [backgroundUpdate] = useLocalStorage("P3PrefDisableBackgroundUpdates");

  const [importAppearanceNumber, setImportAppearanceNumber] = useState("");
  const handleAppearanceInputChange = (event: any) =>
    setImportAppearanceNumber(event.target.value);
  const [importVerbosityNumber, setImportVerbosityNumber] = useState("");
  const handleVerbosityInputChange = (event: any) =>
    setImportVerbosityNumber(event.target.value);
  const [importDisablesNumber, setImportDisablesNumber] = useState("");
  const handleDisablesInputChange = (event: any) =>
    setImportDisablesNumber(event.target.value);

  // Test if the user has entered the correct pin
  const [appearanceNumber, setAppearanceNumber] = useState("0");
  const [verbosityNumber, setVerbosityNumber] = useState("0");
  const [disablesNumber, setDisablesNumber] = useState("0");

  function Open() {
    // Generate the current preference code

    // Appearance number
    if (advancedSearch) {
      setAppearanceNumber("1");
    }
    if (backButton) {
      setAppearanceNumber("2");
    }

    // Verbosity number
    if (minimiseNotifications) {
      setVerbosityNumber("1");
    }

    // Disables number
    if (donationFeatures) {
      setDisablesNumber("1");
    }
    if (backgroundUpdate) {
      setDisablesNumber("2");
    }

    // Open the modal
    onOpen();
  }

  function Save() {
    // Reset existing preferences
    DeletePreferences();

    // Save the preferences

    // Save appearance preferences
    if (importAppearanceNumber === "0") {
      deleteFromStorage("P3PrefAdvancedSearchLink");
      deleteFromStorage("P3PrefBackButtonLargeWindows");
    }
    if (importAppearanceNumber === "1") {
      writeStorage("P3PrefAdvancedSearchLink", true);
    }
    if (importAppearanceNumber === "2") {
      writeStorage("P3PrefBackButtonLargeWindows", true);
    }
    if (importAppearanceNumber === "3") {
      writeStorage("P3PrefAdvancedSearchLink", true);
      writeStorage("P3PrefBackButtonLargeWindows", true);
    }

    // Save verbosity preference
    if (importVerbosityNumber === "0") {
      deleteFromStorage("P3PrefMinimiseNotifications");
    }
    if (importVerbosityNumber === "1") {
      writeStorage("P3PrefMinimiseNotifications", true);
    }

    // Save "disables" preference
    if (importDisablesNumber === "0") {
      deleteFromStorage("P3PrefDisableDonationFeatures");
      deleteFromStorage("P3PrefDisableBackgroundUpdates");
    }
    if (importDisablesNumber === "1") {
      writeStorage("P3PrefDisableDonationFeatures", true);
    }
    if (importDisablesNumber === "2") {
      writeStorage("P3PrefDisableBackgroundUpdates", true);
    }
    if (importDisablesNumber === "3") {
      writeStorage("P3PrefDisableDonationFeatures", true);
      writeStorage("P3PrefDisableBackgroundUpdates", true);
    }

    setImportAppearanceNumber("");
    setImportVerbosityNumber("");
    setImportDisablesNumber("");

    // Close the modal
    onClose();
  }

  function ModalBody() {
    return (
      <Center>
        <Stack direction="row" spacing={2}>
          <PinInput>
            <PinInputField
              ref={defaultRef}
              value={importAppearanceNumber}
              onChange={handleAppearanceInputChange}
            />
            <PinInputField
              value={importVerbosityNumber}
              onChange={handleVerbosityInputChange}
            />
            <PinInputField
              value={importDisablesNumber}
              onChange={handleDisablesInputChange}
            />
          </PinInput>
        </Stack>
      </Center>
    );
  }

  function ModalButton() {
    return (
      <>
        {isOpen ? (
          <Button isActive>Open Preference Transfer (Beta)</Button>
        ) : (
          <Button onClick={Open}>Open Preference Transfer (Beta)</Button>
        )}
      </>
    );
  }

  function ModalFooter() {
    return (
      <Flex w="full">
        <Stack
          direction="column"
          spacing={0}
          display={{ base: "none", sm: "flex" }}
        >
          <Stack direction="row" spacing={2} fontSize="xs">
            <Text>Current Preference Code:</Text>
            <Text>
              {appearanceNumber}
              {verbosityNumber}
              {disablesNumber}
            </Text>
          </Stack>
          <Stack direction="row" spacing={2} fontSize="xs">
            <Text>New Preference Code:</Text>
            <Text>
              {importAppearanceNumber}
              {importVerbosityNumber}
              {importDisablesNumber}
            </Text>
          </Stack>
        </Stack>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Button onClick={onClose}>Cancel</Button>
          {importAppearanceNumber ? (
            <Button onClick={Save}>Continue &amp; Save</Button>
          ) : (
            <Button isDisabled>Continue &amp; Save</Button>
          )}
        </Stack>
      </Flex>
    );
  }

  return (
    <>
      <ModalButton />
      <Overlay
        header="Transfer a Preference Code"
        body={<ModalBody />}
        footer={<ModalFooter />}
        cancelRef={defaultRef}
        isOpen={isOpen}
        onClose={onClose}
        useAlertDialog={false}
      />
    </>
  );
}

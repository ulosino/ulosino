// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The Preferences modal allows the user to change "P3Pref" LocalStorage values using a graphical interface

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Stack,
  Box,
  Button,
  IconButton,
  Text,
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
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Code,
  Center,
} from "@chakra-ui/react";
import { HiOutlineCog, HiOutlineTemplate, HiOutlineUser } from "react-icons/hi";

// First party components
import { ErrorFallback } from "components/ErrorFallback";
const PreferenceResetAssistant = dynamic(
  () => import("components/assistants/PreferenceResetAssistant"),
  {
    suspense: true,
  }
);

// Keybinding libraries
import { useEffect } from "react";
import { useHotkeyManager } from "providers/KeybindingProvider";
import { isWindows } from "react-device-detect";

import { useState, useRef } from "react";

// Begin components

export function LoadingPreferenceResetAssistant() {
  return (
    <Center>
      <Button size="sm" isDisabled>
        Communicating with Server
      </Button>
    </Center>
  );
}

// Appearance preferances
export function AppearancePreferences() {
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const { toggleColorMode } = useColorMode();
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={1}>
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefAdvancedSearchLink",
              advancedSearch ? false : true
            )
          }
        >
          Use {advancedSearch ? "Browse" : "Advanced Search"} Link
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
          {backButton ? "Hide" : "Show"} Back Button on Large Windows
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
        <Button onClick={toggleColorMode}>Invert Colours for this Tab</Button>
        <Stack direction="column" spacing={1}>
          {isWindows ? (
            ""
          ) : (
            <Text fontSize="xs">
              <Kbd>control</Kbd> + <Kbd>W</Kbd>
            </Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

// Integration preferences
export function IntegrationPreferences() {
  // Contributor preference
  const [contributor] = useLocalStorage("P3PrefContributor");
  const contributorInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    writeStorage("P3PrefContributor", inputValue);
  };

  // Editor preference
  const [editor] = useLocalStorage("P3PrefFileEditorURL");
  const editorInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    writeStorage("P3PrefFileEditorURL", inputValue);
  };
  return (
    <Stack direction="column" spacing={5}>
      <ErrorFallback>
        <Text>
          Integration preferences connect ULOSINO with other applications on
          your computer.
        </Text>
        <FormControl>
          <FormLabel htmlFor="contributorUsername" fontWeight="bold" mb={1}>
            Contributor Username
          </FormLabel>
          <Input
            // @ts-ignore
            value={contributor}
            onChange={contributorInputChange}
            size="sm"
            rounded="xl"
            id="contributorUsername"
          />
          <FormHelperText color="inherit" fontSize="xs" as="p">
            Enter your GitHub username to enable contributor watermarks and
            other advanced features. This information is stored locally and
            never sent to ULOSINO.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="editorURL" fontWeight="bold" mb={1}>
            Custom Editing Application
          </FormLabel>
          <Input
            // @ts-ignore
            value={editor}
            onChange={editorInputChange}
            size="sm"
            rounded="xl"
            id="editorURL"
          />
          <FormHelperText color="inherit" fontSize="xs" as="p">
            Enter a URL that ULOSINO will use to edit files instead of the
            GitHub Web Editor. For example, <Code fontSize="xs">vscode://</Code>{" "}
            would open files with Visual Studio Code.
          </FormHelperText>
        </FormControl>
      </ErrorFallback>
    </Stack>
  );
}

// Application preferences
export function ApplicationPreferences() {
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={2}>
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefMinimiseNotifications",
              minimiseNotifications ? false : true
            )
          }
        >
          {minimiseNotifications ? "Enable" : "Minimise"} In-App Notifications
        </Button>
        <Text fontSize="xs" lineHeight="shorter">
          {minimiseNotifications ? "Allow" : "Hide"} non-critical notifications
          and banners.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Button
          onClick={(_) =>
            writeStorage(
              "P3PrefDisableDonationFeatures",
              donationFeatures ? false : true
            )
          }
        >
          {donationFeatures ? "Enable" : "Disable"}{" "}
          <Badge variant="tempo" pt={1} mx={2}>
            Tempo
          </Badge>{" "}
          Features
        </Button>
        <Text fontSize="xs" lineHeight="shorter">
          {donationFeatures ? "Enable" : "Disable"} ULOSINO Tempo donation
          features, including links to external financial services.
        </Text>
      </Stack>
      <Box pt={5}>
        <Suspense fallback={<LoadingPreferenceResetAssistant />}>
          <PreferenceResetAssistant />
        </Suspense>
      </Box>
    </Stack>
  );
}

// Tab array
const tabData = [
  {
    label: "Appearance",
    icon: <HiOutlineTemplate />,
    content: <AppearancePreferences />,
  },
  {
    label: "Integrations",
    icon: <HiOutlineUser />,
    content: <IntegrationPreferences />,
  },
  {
    label: "Application",
    icon: <HiOutlineCog />,
    content: <ApplicationPreferences />,
  },
];

interface Props {
  isLayout: boolean;
}

// Create a modal that uses the useState hook to switch between tabData
// The modal has a sidebar with the Button containing the label
// The modal has a content area with the content of the tabData
// The Buttons can be clicked to switch between content areas
export default function Preferences({ isLayout }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState(0);
  const initialRef: any = useRef();

  // Keybinding
  const manager = useHotkeyManager();
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: ",",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => (isOpen ? onClose() : onOpen()),
          })
        : manager.registerHotkey({
            key: ",",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => (isOpen ? onClose() : onOpen()),
          }),
        [manager, window];
    }
  });
  return (
    <>
      {isLayout ? (
        <Center display={{ base: "none", sm: "flex" }}>
          <IconButton
            icon={<HiOutlineCog />}
            onClick={onOpen}
            aria-label="Open Preferences modal"
            title="Open Preferences"
          />
        </Center>
      ) : (
        <Button leftIcon={<HiOutlineCog />} onClick={onOpen}>
          Preferences
        </Button>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent rounded="xl">
          <ModalHeader fontSize="2xl">Preferences</ModalHeader>
          <ModalBody>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Stack
                direction="column"
                spacing={2}
                me={{ base: 0, sm: 10 }}
                mb={{ base: 5, sm: 0 }}
              >
                {tabData.map((tab, index) => (
                  <Button
                    key={index}
                    onClick={(_) => setActiveTab(index)}
                    variant={index === activeTab ? "solid" : "outline"}
                    leftIcon={tab.icon}
                  >
                    {tab.label}
                  </Button>
                ))}
              </Stack>
              <ErrorFallback>
                <Box w="full">{tabData[activeTab].content}</Box>
              </ErrorFallback>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button ref={initialRef} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

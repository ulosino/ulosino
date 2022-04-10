// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The Preferences modal allows the user to change "P3Pref" LocalStorage values using a graphical interface

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServerButton } from "components/Loading";
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
  useDisclosure,
  Kbd,
  Center,
  useBoolean,
} from "@chakra-ui/react";
import {
  HiOutlineArrowLeft,
  HiOutlineCog,
  HiOutlineTemplate,
} from "react-icons/hi";

// First party components
import Overlay from "components/Overlay";
import { ErrorFallback } from "components/ErrorFallback";
const DisableDonationFeaturesConfirmation = dynamic(
  () => import("components/confirmations/DisableDonationFeaturesConfirmation"),
  {
    suspense: true,
  }
);
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

// Appearance preferances
export function AppearancePreferences() {
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const { toggleColorMode } = useColorMode();
  return (
    <Stack direction="column" spacing={5}>
      <Stack
        direction="column"
        spacing={1}
        display={{ base: "none", sm: "flex" }}
      >
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
      <Stack
        direction="column"
        spacing={1}
        display={{ base: "none", sm: "flex" }}
      >
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
        <Button onClick={toggleColorMode}>
          Invert Colours for this Session
        </Button>
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

// Browse preferences
export function BrowsePreferences() {
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={2}>
        <Button isDisabled>Sort by Date</Button>
        <Text fontSize="xs" lineHeight="shorter">
          Sort the Operating System List with the newest first.
        </Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Suspense fallback={<LoadingServerButton />}>
          <DisableDonationFeaturesConfirmation />
        </Suspense>
        <Text fontSize="xs" lineHeight="shorter">
          {donationFeatures ? "Enable" : "Disable"} ULOSINO Tempo.
        </Text>
      </Stack>
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
        <Button isDisabled>Disable Background Update Services</Button>
        <Text fontSize="xs" lineHeight="shorter">
          Disable automatically checking for application updates in the
          background.
        </Text>
      </Stack>
    </Stack>
  );
}

// Application preferences
export function AboutApplication() {
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={2}>
        <Suspense fallback={<LoadingServerButton />}>
          <PreferenceResetAssistant />
        </Suspense>
        <Text fontSize="xs" lineHeight="shorter">
          Restore default preferences for all sessions.
        </Text>
      </Stack>
    </Stack>
  );
}

// Tab array
const tabData = [
  {
    label: "Appearance",
    description: "Change the appearance of ULOSINO.",
    icon: <HiOutlineTemplate />,
    content: <AppearancePreferences />,
  },
  {
    label: "OSs & Editing",
    description: "Change the app icon.",
    icon: <HiOutlineTemplate />,
    content: <BrowsePreferences />,
  },
  {
    label: "Advanced",
    description: "Change application behaviours and settings.",
    icon: <HiOutlineCog />,
    content: <ApplicationPreferences />,
  },
  {
    label: "About",
    description: "Information about the ULOSINO app.",
    icon: <HiOutlineCog />,
    content: <AboutApplication />,
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
  const [preferenceView, setPreferenceView] = useBoolean();
  const initialRef: any = useRef();

  // Create the PreferencesBodySmallWindows function that uses the useState hook to switch between tabData
  // It has a sidebar with the Button containing the label
  // It has a content area with the content of the tabData
  // The Buttons on the menu can be clicked to switch between content areas
  function PreferencesBodySmallWindows() {
    return (
      <>
        {preferenceView ? (
          <ErrorFallback>
            <Stack direction="column" spacing={5}>
              <Button
                leftIcon={<HiOutlineArrowLeft />}
                onClick={setPreferenceView.off}
              >
                Go Back
              </Button>
              <Box>{tabData[activeTab].content}</Box>
            </Stack>
          </ErrorFallback>
        ) : (
          <Stack direction="column" spacing={5}>
            <Stack direction="column" spacing={5}>
              {tabData.map((tab, index) => (
                <Stack direction="column" spacing={2} key={index}>
                  <Button
                    key={index}
                    onClick={(_) => {
                      setPreferenceView.on();
                      setActiveTab(index);
                    }}
                    leftIcon={tab.icon}
                  >
                    {tab.label}
                  </Button>
                  <Text fontSize="xs" lineHeight="shorter">
                    {tab.description}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        )}
      </>
    );
  }

  function PreferencesBodyLargeWindows() {
    return (
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
    );
  }

  function PreferencesBody() {
    return (
      <>
        <Box display={{ base: "none", sm: "initial" }}>
          <PreferencesBodyLargeWindows />
        </Box>
        <Box display={{ base: "initial", sm: "none" }}>
          <PreferencesBodySmallWindows />
        </Box>
      </>
    );
  }

  function PreferencesFooter() {
    return (
      <Button ref={initialRef} onClick={onClose}>
        Done
      </Button>
    );
  }

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
          {isOpen ? (
            <IconButton
              icon={<HiOutlineCog />}
              aria-label="Open Preferences modal"
              title="Open Preferences"
              isActive
            />
          ) : (
            <IconButton
              icon={<HiOutlineCog />}
              onClick={onOpen}
              aria-label="Open Preferences modal"
              title="Open Preferences"
            />
          )}
        </Center>
      ) : (
        <>
          {isOpen ? (
            <Button leftIcon={<HiOutlineCog />} isActive>
              Preferences
            </Button>
          ) : (
            <Button leftIcon={<HiOutlineCog />} onClick={onOpen}>
              Preferences
            </Button>
          )}
        </>
      )}
      <Overlay
        isOpen={isOpen}
        onClose={onClose}
        header="Preferences"
        body={<PreferencesBody />}
        footer={<PreferencesFooter />}
        cancelRef={initialRef}
        useAlertDialog={false}
      />
    </>
  );
}

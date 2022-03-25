// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The main layout implements the header and footer. It's opt-in by page

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loading, LoadingServer } from "components/Loading";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Spacer,
  Stack,
  Center,
  Container,
  Button,
  IconButton,
  Text,
  useBoolean,
  useColorMode,
  useColorModeValue,
  DarkMode,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  useStyleConfig,
  Kbd,
  Badge,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";

// First-party components
import Logo from "components/Logo";
import HeaderBackButton from "components/HeaderBackButton";
import ExperimentalBanner from "components/ExperimentalBanner";

// Keybinding libraries
import { useEffect } from "react";
import { useHotkeyManager } from "providers/KeybindingProvider";
import { isWindows } from "react-device-detect";

interface LayoutProps {
  children: ReactElement;
  useBasicLayout: boolean;
  // useAltBackground is reserved
  useAltBackground: boolean;
  showPreferences: boolean;
}

export function LoadingAboutApplicationButton() {
  return (
    <Button size="sm" isDisabled>
      Communicating with Server
    </Button>
  );
}

// Begin wrapping component
export default function Layout({
  children,
  useBasicLayout,
  showPreferences,
}: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [applicationPreferences, setApplicationPreferences] = useBoolean();

  // Global keybindings
  const manager = useHotkeyManager();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  // Global preferences
  const [ukraineAidBanner, setUkraineAidBanner] = useBoolean();
  const [advancedSearch] = useLocalStorage("P3PrefAdvancedSearchLink");
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");

  // Global navigation keybindings
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "/",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/"),
          })
        : manager.registerHotkey({
            key: "/",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/"),
          }),
        [manager, router];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "L",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/browse"),
          })
        : manager.registerHotkey({
            key: "L",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/browse"),
          }),
        [manager, router];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "S",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/search"),
          })
        : manager.registerHotkey({
            key: "S",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/search"),
          }),
        [manager, router];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "N",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => window.open("/", "_blank"),
          })
        : manager.registerHotkey({
            key: "N",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => window.open("/", "_blank"),
          }),
        [manager, window];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? ""
        : manager.registerHotkey({
            key: "N",
            ctrl: true,
            shift: false,
            alt: true,
            callback: () => window.open("/search", "_blank"),
          }),
        [manager, window];
    }
  });
  // Session preference keybindings
  useEffect(() => {
    {
      isWindows
        ? ""
        : manager.registerHotkey({
            key: "W",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => toggleColorMode(),
          }),
        [manager, toggleColorMode];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "S",
            ctrl: false,
            shift: true,
            alt: true,
            callback: () =>
              writeStorage(
                "P3PrefAdvancedSearchLink",
                advancedSearch ? false : true
              ),
          })
        : manager.registerHotkey({
            key: "S",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () =>
              writeStorage(
                "P3PrefAdvancedSearchLink",
                advancedSearch ? false : true
              ),
          }),
        [manager, advancedSearch];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "B",
            ctrl: false,
            shift: true,
            alt: true,
            callback: () =>
              writeStorage(
                "P3PrefBackButtonLargeWindows",
                backButton ? false : true
              ),
          })
        : manager.registerHotkey({
            key: "B",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () =>
              writeStorage(
                "P3PrefBackButtonLargeWindows",
                backButton ? false : true
              ),
          }),
        [manager, backButton];
    }
  });
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      {ukraineAidBanner ? (
        ""
      ) : (
        <Flex
          bg="secondary"
          color="white"
          py={2}
          mb={4}
          display={{ base: "none", md: "flex" }}
        >
          <DarkMode>
            <Container maxW="container.lg">
              <Flex>
                <Stack direction="row" spacing={5}>
                  <Center>
                    <Stack direction="column" spacing={0}>
                      <Flex bg="blue" w={8} h={2} roundedTop="sm" />
                      <Flex bg="yellow" w={8} h={2} roundedBottom="sm" />
                    </Stack>
                  </Center>
                  <Center>
                    <Text textStyle="miniHeading" as="h6">
                      Donate to UNICEF
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize="sm">Help children in Ukraine.</Text>
                  </Center>
                  <Center>
                    <Link
                      href="https://help.unicef.org/ukraine-emergency"
                      passHref
                    >
                      <Button size="sm" as="a">
                        Get Started
                      </Button>
                    </Link>
                  </Center>
                </Stack>
                <Spacer />
                <Center>
                  <Button size="sm" onClick={setUkraineAidBanner.toggle}>
                    Not Now
                  </Button>
                </Center>
              </Flex>
            </Container>
          </DarkMode>
        </Flex>
      )}
      <ExperimentalBanner />
      <Container maxW="container.lg" as="header">
        <Flex mt={2} mb={10}>
          <Center
            display={{ base: "flex", sm: "none" }}
            id="testingHeaderBackButtonMobile"
          >
            <HeaderBackButton />
          </Center>
          {backButton ? (
            <Center
              display={{ base: "none", sm: "flex" }}
              id="testing-headerBackButtonDesktop"
            >
              <HeaderBackButton />
            </Center>
          ) : (
            ""
          )}
          <Link href="/" passHref>
            <Center
              bg="secondary"
              rounded="2xl"
              shadow="md"
              p={3}
              cursor="pointer"
              as="a"
              aria-label="Go Home"
              title="Go Home"
              id="testingHeaderLogoLink"
            >
              <Logo />
            </Center>
          </Link>
          {useBasicLayout ? (
            ""
          ) : (
            <Center
              display={{ base: "none", sm: "flex" }}
              as="nav"
              id="testingHeaderLinks"
            >
              <Stack direction="row" spacing={2} mx={10}>
                <Link href="/" passHref>
                  <Button variant="ghost" as="a">
                    Home
                  </Button>
                </Link>
                {advancedSearch ? (
                  <Link href="/search" passHref>
                    <Button
                      variant="ghost"
                      as="a"
                      id="testing-headerSearchLink"
                    >
                      Advanced Search
                    </Button>
                  </Link>
                ) : (
                  <Link href="/browse" passHref>
                    <Button
                      variant="ghost"
                      as="a"
                      id="testing-headerBrowseLink"
                    >
                      Browse
                    </Button>
                  </Link>
                )}
                <Link href="/about" passHref>
                  <Button variant="ghost" as="a">
                    About
                  </Button>
                </Link>
              </Stack>
            </Center>
          )}
          <Spacer />
          <Suspense fallback={<LoadingServer />}>
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
                        <Button
                          onClick={setApplicationPreferences.off}
                          isActive
                        >
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
                        <Button isDisabled>
                          Minimise In-App Notifications
                        </Button>
                        <Button isDisabled>
                          Disable Navigation Keyboard Shortcuts
                        </Button>
                        <Button isDisabled>
                          Enable{" "}
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
                            {advancedSearch ? "Hide" : "Show"} Advanced Search
                            Link
                          </Button>
                          <Text fontSize="xs">
                            {isWindows ? (
                              <>
                                <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
                              </>
                            ) : (
                              <>
                                <Kbd>control</Kbd> + <Kbd>shift</Kbd> +{" "}
                                <Kbd>S</Kbd>
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
                                <Kbd>control</Kbd> + <Kbd>shift</Kbd> +{" "}
                                <Kbd>B</Kbd>
                              </>
                            )}
                          </Text>
                        </Stack>
                        <Button isDisabled>
                          {backButton ? "Hide" : "Show"} Mobile Menu on Large
                          Windows
                        </Button>
                        <Stack direction="column" spacing={1}>
                          <Button onClick={toggleColorMode}>
                            Invert Colour Mode for this Tab
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
          </Suspense>
          <Center display={{ base: "flex", sm: "none" }}>
            <Link href="/menu" passHref>
              <IconButton
                icon={<HiOutlineMenu />}
                variant="ghost"
                as="a"
                aria-label="Open Menu and preferences"
                title="Open Menu"
                id="testingHeaderMenuLink"
              />
            </Link>
          </Center>
        </Flex>
      </Container>
      <Container maxW="container.lg" flex={1} as="main">
        {children}
      </Container>
      <Container maxW="container.lg" as="footer">
        <Flex mt={10} mb={5}>
          <Stack
            direction="row"
            spacing={2}
            display={{ base: "none", sm: "block" }}
            id="testingFooterGeneralLinks"
          >
            {useBasicLayout ? (
              ""
            ) : (
              <>
                <Link href="https://github.com/ulosino" passHref>
                  <Button variant="ghost" size="sm" as="a">
                    GitHub
                  </Button>
                </Link>
                <Link href="https://twitter.com/ulosino" passHref>
                  <Button variant="ghost" size="sm" as="a">
                    Twitter
                  </Button>
                </Link>
                <Link href="/about/keybindings" passHref>
                  <Button variant="ghost" size="sm" as="a">
                    Keyboard Shortcuts
                  </Button>
                </Link>
              </>
            )}
            {showPreferences ? (
              <>
                {/* These are shown on the Options page only */}
                <Button
                  size="sm"
                  onClick={(_) =>
                    writeStorage(
                      "P3PrefBackButtonLargeWindows",
                      backButton ? false : true
                    )
                  }
                  display={{ base: "none", md: "inline-block" }}
                  id="testing-footerBackButtonDesktopCheckbox"
                >
                  {backButton ? "Hide" : "Show"} Back
                </Button>
                <Button
                  size="sm"
                  onClick={(_) =>
                    writeStorage(
                      "P3PrefAdvancedSearchLink",
                      advancedSearch ? false : true
                    )
                  }
                  display={{ base: "none", md: "inline-block" }}
                  id="testing-footerBrowseButtonCheckbox"
                >
                  Prefer {advancedSearch ? "Browse" : "Search"}
                </Button>
              </>
            ) : (
              ""
            )}
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={2} id="testingLegalLinks">
            <Link href="/about/license" passHref>
              <Button variant="ghost" size="sm" as="a" id="testingLicenseLink">
                License
              </Button>
            </Link>
            <Link href="/about/privacy" passHref>
              <Button variant="ghost" size="sm" as="a">
                Privacy
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}

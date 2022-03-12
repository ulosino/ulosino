// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The main layout implements the header and footer. It's opt-in by page

// Types
import type { ReactElement } from "react";

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
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";

// First-party components
import Logo from "components/Logo";
import HeaderBackButton from "components/HeaderBackButton";

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

// Begin wrapping component
export default function Layout({
  children,
  useBasicLayout,
  showPreferences,
}: LayoutProps) {
  // Global preferences
  const [backButton, setBackButton] = useBoolean();
  const [advancedSearch, setAdvancedSearch] = useBoolean();
  const [ukraineAidBanner, setUkraineAidBanner] = useBoolean();

  // Global keybindings
  const manager = useHotkeyManager();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

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
            callback: () => setAdvancedSearch.toggle(),
          })
        : manager.registerHotkey({
            key: "S",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () => setAdvancedSearch.toggle(),
          }),
        [manager, setAdvancedSearch];
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
            callback: () => setBackButton.toggle(),
          })
        : manager.registerHotkey({
            key: "B",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () => setBackButton.toggle(),
          }),
        [manager, setBackButton];
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
                  onClick={setBackButton.toggle}
                  display={{ base: "none", md: "inline-block" }}
                  id="testing-footerBackButtonDesktopSwitch"
                >
                  {backButton ? "Hide" : "Show"} Back
                </Button>
                <Button
                  size="sm"
                  onClick={setAdvancedSearch.toggle}
                  display={{ base: "none", md: "inline-block" }}
                  id="testing-footerBrowseButtonSwitch"
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

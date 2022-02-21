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
  useBoolean,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

// First-party components
import Logo from "components/Logo";
import BackButton from "components/layouts/BackButton";
import { HiOutlineMenu } from "react-icons/hi";

import { useEffect } from "react";
import { useHotkeyManager } from "providers/KeybindingProvider";

// Begin wrapping component
export default function Layout({
  children,
  useBasicLayout,
  showPreferences,
}: {
  children: ReactElement;
  useBasicLayout: boolean;
  showPreferences: boolean;
}) {
  // Global preferences
  const [backButton, setBackButton] = useBoolean();
  const [advancedSearch, setAdvancedSearch] = useBoolean();

  // Global keybindings
  const manager = useHotkeyManager();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  // Navigation keybindings
  useEffect(
    manager.registerHotkey({
      key: "/",
      shift: false,
      alt: false,
      callback: () => router.push("/"),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "L",
      shift: false,
      alt: false,
      callback: () => router.push("/browse"),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "S",
      shift: false,
      alt: false,
      callback: () => router.push("/search"),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "N",
      shift: false,
      alt: false,
      callback: () => window.open("/", "_blank"),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "N",
      shift: false,
      alt: true,
      callback: () => window.open("/search", "_blank"),
    }),
    []
  );
  // Preference switching keybindings
  useEffect(
    manager.registerHotkey({
      key: "W",
      shift: false,
      alt: false,
      callback: () => toggleColorMode(),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "S",
      shift: true,
      alt: false,
      callback: () => setAdvancedSearch.toggle(),
    }),
    []
  );
  useEffect(
    manager.registerHotkey({
      key: "B",
      shift: true,
      alt: false,
      callback: () => setBackButton.toggle(),
    }),
    []
  );

  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      <Container maxW="container.lg" as="header">
        <Flex mt={2} mb={10}>
          <Center
            display={{ base: "flex", sm: "none" }}
            id="testing-headerBackButtonMobile"
          >
            <BackButton />
          </Center>
          {backButton ? (
            <Center
              display={{ base: "none", sm: "flex" }}
              id="testing-headerBackButtonDesktop"
            >
              <BackButton />
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
              id="testing-headerLogoLink"
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
              id="testing-headerLinks"
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
                id="testing-headerMenuLink"
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
            id="testing-footerGeneralLinks"
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
          <Stack direction="row" spacing={2} id="testing-footerLegalLinks">
            <Link href="/about/license" passHref>
              <Button variant="ghost" size="sm" as="a" id="testing-licenseLink">
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

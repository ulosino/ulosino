// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The main layout implements the header and footer. It's opt-in by page

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import { LoadingServer } from "components/Loading";
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
} from "@chakra-ui/react";
import { HiOutlineCog, HiOutlineMenu } from "react-icons/hi";
import { VercelLogo } from "components/VercelPromotion";

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
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [minimiseNotifications] = useLocalStorage(
    "P3PrefMinimiseNotifications"
  );
  const [dangerousRuntime] = useLocalStorage("P3PrefDangerousRuntime");
  const [isClosureBannerExpanded, setClosureBannerExpanded] = useBoolean();

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
            key: ",",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/preferences/general"),
          })
        : manager.registerHotkey({
            key: ",",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/preferences/general"),
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
  const vercelLogoColour = useColorModeValue("black", "white");
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      <Suspense fallback={<LoadingServer />}>
        <Container maxW="container.lg" as="header">
          <Flex mt={5} mb={10}>
            <Center
              display={{ base: "flex", sm: "none" }}
              id="testingHeaderBackButtonMobile"
            >
              <HeaderBackButton />
            </Center>
            {backButton ? (
              <Center
                display={{ base: "none", sm: "flex" }}
                id="testingHeaderBackButtonDesktop"
              >
                <HeaderBackButton />
              </Center>
            ) : (
              ""
            )}
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
                  <Link href="/browse" passHref>
                    <Button variant="ghost" as="a" id="testingHeaderBrowseLink">
                      Browse
                    </Button>
                  </Link>
                  <Link href="/matches" passHref>
                    <Button variant="ghost" as="a">
                      Matches
                    </Button>
                  </Link>
                  <Link href="/create" passHref>
                    <Button variant="ghost" as="a">
                      Create
                    </Button>
                  </Link>
                </Stack>
              </Center>
            )}
            <Spacer />
            <Center display={{ base: "none", md: "flex" }}>
              <Link href="/preferences/general" passHref>
                <IconButton
                  icon={<HiOutlineCog />}
                  aria-label="Preferences"
                  title="Preferences"
                  as="a"
                />
              </Link>
            </Center>
            <Center display={{ base: "none", sm: "flex", md: "none" }}>
              <Link href="/preferences" passHref>
                <IconButton
                  icon={<HiOutlineCog />}
                  aria-label="Preferences"
                  title="Preferences"
                  as="a"
                />
              </Link>
            </Center>
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
      </Suspense>
      <Container maxW="container.lg" flex={1}>
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
                <Button variant="ghost" size="sm" isDisabled>
                  Documentation
                </Button>
                <Button variant="ghost" size="sm" isDisabled>
                  Keyboard Shortcuts
                </Button>
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
                  id="testingFooterBackButtonDesktopSwitch"
                >
                  {backButton ? "Hide" : "Show"} Back
                </Button>
              </>
            ) : (
              ""
            )}
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={2} id="testingLegalLinks">
            <Suspense fallback={<LoadingServer />}>
              {dangerousRuntime ? (
                ""
              ) : (
                <Center display={{ base: "block", sm: "none", md: "block" }}>
                  <Link href="https://vercel.com/home" passHref>
                    <Button
                      size="sm"
                      variant="ghost"
                      as="a"
                      title="Powered by Vercel"
                      aria-label="Powered by Vercel"
                    >
                      <Stack direction="row" spacing={2}>
                        <Text>Powered by</Text>
                        <Center>
                          <VercelLogo fill={vercelLogoColour} />
                        </Center>
                      </Stack>
                    </Button>
                  </Link>
                </Center>
              )}
            </Suspense>
            <Link href="/about/legal" passHref>
              <Button variant="ghost" size="sm" as="a">
                Legal
              </Button>
            </Link>
            <Link href="/about/legal/privacy" passHref>
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

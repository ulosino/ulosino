// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// The main layout implements the header and footer. It's opt-in by page

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

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
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";

// First-party components
import Logo from "components/Logo";
import BackButton from "components/layouts/BackButton";
import { HiOutlineMenu } from "react-icons/hi";

// Begin wrapping component
export default function Layout({
  children,
  isBasicLayout,
}: {
  children: ReactElement;
  isBasicLayout: boolean;
}) {
  const [backButton, setBackButton] = useBoolean();
  const [advancedSearch, setAdvancedSearch] = useBoolean();
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
          {isBasicLayout ? (
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
            <Link href="/options" passHref>
              <IconButton
                icon={<HiOutlineMenu />}
                variant="ghost"
                as="a"
                aria-label="Open Options and navigation"
                title="Open Options"
                id="testing-headerOptionsLink"
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
          {isBasicLayout ? (
            ""
          ) : (
            <Stack
              direction="row"
              spacing={2}
              display={{ base: "none", sm: "block" }}
              id="testing-footerGeneralLinks"
            >
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
              <Button
                size="sm"
                onClick={setBackButton.toggle}
                id="testing-footerBackButtonDesktopSwitch"
              >
                {backButton ? "Hide" : "Show"} Back
              </Button>
              <Button
                size="sm"
                onClick={setAdvancedSearch.toggle}
                id="testing-footerBrowseButtonSwitch"
              >
                Prefer {advancedSearch ? "Browse" : "Search"}
              </Button>
            </Stack>
          )}
          <Spacer />
          <Stack direction="row" spacing={2} id="testing-footerLegalLinks">
            <Link href="/licence" passHref>
              <Button variant="ghost" size="sm" isDisabled>
                Licence
              </Button>
            </Link>
            <Link href="/privacy" passHref>
              <Button variant="ghost" size="sm" isDisabled>
                Privacy
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}

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
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";

// First-party components
import Logo from "components/Logo";
import BackButton from "components/layouts/BackButton";

// Begin wrapping component
export default function Layout({ children }: { children: ReactElement }) {
  const [backButton, setBackButton] = useBoolean();
  const [advancedSearch, setAdvancedSearch] = useBoolean();
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      <Container maxW="container.lg" as="nav">
        <Flex mt={2} mb={10}>
          <Center display={{ base: "flex", md: "none" }}>
            <BackButton />
          </Center>
          {backButton ? (
            <Center>
              <BackButton />
            </Center>
          ) : (
            ""
          )}
          <Link href="/" passHref>
            <Center
              cursor="pointer"
              id="testing-display-logoLg"
              bg="secondary"
              rounded="2xl"
              p={3}
              shadow="md"
              as="a"
            >
              <Logo />
            </Center>
          </Link>
          <Center display={{ base: "none", md: "flex" }}>
            <Stack direction="row" spacing={2} mx={10}>
              <Link href="/" passHref>
                <Button variant="ghost" as="a">
                  Home
                </Button>
              </Link>
              {advancedSearch ? (
                <Link href="/search" passHref>
                  <Button variant="ghost" as="a">
                    Advanced Search
                  </Button>
                </Link>
              ) : (
                <Link href="/browse" passHref>
                  <Button variant="ghost" as="a">
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
          <Spacer />
          <Center></Center>
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
            display={{ base: "none", md: "block" }}
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
            <Button variant="ghost" size="sm" onClick={setBackButton.toggle}>
              {backButton ? "Hide" : "Show"} Back
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={setAdvancedSearch.toggle}
            >
              Prefer {advancedSearch ? "Browse" : "Search"}
            </Button>
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={2}>
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

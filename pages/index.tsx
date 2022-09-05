// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Text,
  Button,
  Container,
  Center,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

// Images
import Image from "next/image";
import hikiumLogo from "public/wordmark.png";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Logo from "components/Logo";
import OsopcloudLogo from "components/OsopcloudLogo";

// Begin page
export default function Home() {
  return (
    <>
      <Head>
        <title>ULOSINO is now Osopcloud</title>
        <meta
          property="og:title"
          content="ULOSINO &mdash; Discover Open Source OSs"
        />
        <meta name="description" content="ULOSINO is now Osopcloud." />
        <meta
          property="og:description"
          content="ULOSINO is is now Osopcloud."
        />
      </Head>

      <Container maxW="container.sm" pt={200}>
        <Stack direction="column" spacing={20}>
          <Stack direction="column" spacing={10} as="main">
            <Stack direction="row" spacing={5} justify="center">
              <Logo />
              <Center>
                <FiArrowRight size="1.7em" />
              </Center>
              <OsopcloudLogo />
            </Stack>
            <Text textAlign="center">Try the new ULOSINO, Osopcloud.</Text>
            <Link href="https://www.osopcloud.com" passHref>
              <Button as="a" leftIcon={<FiArrowRight />}>
                Visit Osopcloud
              </Button>
            </Link>
          </Stack>
          <Flex as="footer" direction={{ base: "column", md: "row" }}>
            <Center>
              <Text fontSize="xs">ULOSINO services ended May 25, 2022.</Text>
            </Center>
            <Spacer />
            <Link href="https://twitter.com/hikium" passHref>
              <Box
                width={100}
                height={21}
                mb={{ base: 5, md: 0 }}
                as="a"
                target="_blank"
              >
                <Image src={hikiumLogo} alt="Hikium logo" />
              </Box>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

// Apply persistent layout, wrapping page
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <>{page}</>
    </ApplicationProvider>
  );
};

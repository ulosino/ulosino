// Navigation at the top of the page

import Link from "next/link";
import { useRouter } from "next/router";

import {
  Stack,
  Flex,
  Spacer,
  Center,
  IconButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { LargeLogo, SmallLogo } from "src/components/Logo";

import dynamic from "next/dynamic";
import Loading from "src/components/Loading";
const NavigationMenu = dynamic(() => import("src/components/NavigationMenu"), {
  loading: () => <Loading />,
});

// For desktop, includes links to Home and Browse pages, and access to <NavigationMenu>
export function StartNavigationDesktop() {
  return (
    <nav>
      <Flex>
        <Link href="/" passHref>
          <Center
            cursor="pointer"
            id="testing-display-logoLg"
            bg="secondary"
            roundedBottom="2xl"
            p={4}
          >
            <LargeLogo />
          </Center>
        </Link>
        <Spacer />
        <Stack direction="row" pt={8}>
          <Link href="/" passHref>
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/browse" passHref>
            <Button variant="ghost">Browse</Button>
          </Link>
        </Stack>
        <Spacer />
        <Box pt={8}>
          <NavigationMenu />
        </Box>
      </Flex>
    </nav>
  );
}

// For mobile, only includes access to <NavigationMenu>
export function StartNavigationMobile() {
  const router = useRouter();
  return (
    <Flex>
      <IconButton
        aria-label="Go Back"
        title="Go Back"
        onClick={() => router.back()}
        icon={<FiChevronLeft />}
        size="lg"
        variant="ghost"
        mt={4}
      />
      <Spacer />
      <Link href="/" passHref>
        <Center
          cursor="pointer"
          id="testing-display-logoSm"
          bg="secondary"
          roundedBottom="2xl"
          p={4}
        >
          <SmallLogo />
        </Center>
      </Link>
      <Spacer />
      <Box pt={4}>
        <NavigationMenu />
      </Box>
    </Flex>
  );
}

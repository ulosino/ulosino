import Link from "next/link";
import { useRouter } from "next/router";

import {
  Stack,
  Flex,
  Spacer,
  Center,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FiChevronLeft, FiMoreVertical } from "react-icons/fi";
import { LargeLogo, SmallLogo } from "src/components/Logo";

export default function StartNavigation() {
  const router = useRouter();
  return (
    <nav>
      <Flex display={{ base: "flex", sm: "none" }} mb={8}>
        <IconButton
          aria-label="Go Back"
          title="Go Back"
          onClick={() => router.back()}
          icon={<FiChevronLeft />}
          size="lg"
          variant="ghost"
          mt={2}
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
        <Link href="/options" passHref>
          <IconButton
            aria-label="Open Options"
            title="Open Options"
            icon={<FiMoreVertical />}
            size="lg"
            variant="ghost"
            mt={2}
          />
        </Link>
      </Flex>
      <Flex display={{ base: "none", sm: "flex" }} mb={12}>
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
        <Link href="/options" passHref>
          <IconButton
            aria-label="Open Options"
            title="Open Options"
            icon={<FiMoreVertical />}
            mt={8}
          />
        </Link>
      </Flex>
    </nav>
  );
}

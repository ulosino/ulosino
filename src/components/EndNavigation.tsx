import Link from "next/link";

import {
  Stack,
  Flex,
  Spacer,
  Center,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FiChevronsUp, FiGithub, FiLifeBuoy } from "react-icons/fi";
import { GreyLogo } from "src/components/Logo";

import LegalNavigation from "src/components/LegalNavigation";

export default function EndNavigation() {
  return (
    <Flex id="testing-display-footer" as="footer">
      <Center me={12}>
        <GreyLogo />
      </Center>
      <Link href="#" passHref>
        <IconButton
          aria-label="Go back to the top of the page"
          icon={<FiChevronsUp />}
          size="sm"
        />
      </Link>
      <Spacer />
      <Stack direction="row" spacing={2}>
        <Link href="/definitions" passHref>
          <Button leftIcon={<FiLifeBuoy />} size="sm" variant="ghost">
            Definitions
          </Button>
        </Link>
        <Link href="https://github.com/ulosino/ulosino" passHref>
          <Button leftIcon={<FiGithub />} size="sm" variant="ghost">
            GitHub
          </Button>
        </Link>
      </Stack>
      <Spacer />
      <Center>
        <LegalNavigation />
      </Center>
    </Flex>
  );
}

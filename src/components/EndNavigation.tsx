import Link from "next/link";

import {
  Stack,
  Flex,
  Spacer,
  Center,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FiChevronsUp, FiTwitter, FiGithub } from "react-icons/fi";
import { GreyLogo } from "src/data/Logo";

import LegalNavigation from "src/components/LegalNavigation";

export default function EndNavigation() {
  return (
    <Flex id="testing-display-footer" as="footer">
      <Center me={12}>
        <GreyLogo />
      </Center>
      <Stack direction="row" spacing={2}>
        <Link href="#" passHref>
          <IconButton
            aria-label="Go back to the top of the page"
            icon={<FiChevronsUp />}
            size="sm"
          />
        </Link>
        <Link href="#" passHref>
          <Button leftIcon={<FiTwitter />} size="sm" variant="ghost" isDisabled>
            Twitter
          </Button>
        </Link>
        <Link href="#" passHref>
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

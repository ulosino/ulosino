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

import LegalNavigation from "src/components/LegalNavigation";

export default function EndNavigation() {
  return (
    <Flex id="testing-display-footer" as="footer">
      <Link href="#" passHref>
        <Button leftIcon={<FiChevronsUp />} size="sm">
          Jump to Top
        </Button>
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

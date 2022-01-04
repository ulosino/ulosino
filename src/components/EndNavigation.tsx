import Link from "next/link";

import { Stack, Flex, Spacer, Center, Button } from "@chakra-ui/react";
import { HiChevronDoubleUp, HiOutlineSupport, HiCode } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

import LegalNavigation from "src/components/LegalNavigation";

export default function EndNavigation() {
  return (
    <Flex id="testing-display-footer" as="footer">
      <Link href="#" passHref>
        <Button leftIcon={<HiChevronDoubleUp />} size="sm">
          Jump to Top
        </Button>
      </Link>
      <Spacer />
      <Stack direction="row" spacing={2}>
        <Link href="/definitions" passHref>
          <Button leftIcon={<HiOutlineSupport />} size="sm" variant="ghost">
            Definitions
          </Button>
        </Link>
        <Link href="https://github.com/ulosino/ulosino" passHref>
          <Button leftIcon={<HiCode />} size="sm" variant="ghost">
            GitHub
          </Button>
        </Link>
        <Link href="https://github.com/ulosino/ulosino" passHref>
          <Button leftIcon={<FiTwitter />} size="sm" variant="ghost">
            Twitter
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

// Heading for the Privacy Notice, including links to other legal and adminstrative pages
// These pages are based on Markdown

import Link from "next/link";
import { Heading, Stack, Flex, Spacer, Button } from "@chakra-ui/react";
import { HiOutlineScale, HiOutlineNewspaper } from "react-icons/hi";

export default function PrivacyHeader() {
  return (
    <Flex direction={["column", "column", "row"]} mb={8}>
      <Heading size="3xl">Privacy Notice</Heading>
      <Spacer />
      <Stack direction={["column", "column", "row"]} spacing={4} pt={4}>
        <Link href="/licence" passHref>
          <Button leftIcon={<HiOutlineScale />} size="sm">
            Copyright Notice
          </Button>
        </Link>
        <Link href="/privacy" passHref>
          <Button leftIcon={<HiOutlineScale />} size="sm" isActive>
            Privacy
          </Button>
        </Link>
        <Link href="/press" passHref>
          <Button leftIcon={<HiOutlineNewspaper />} size="sm">
            Press
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}

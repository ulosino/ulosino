// Heading for the Press page, including links to other legal and adminstrative pages
// This page is specifically based on .tsx but is stored here for consistency with other pages in this series
// i.e for the Press page only, this could be implemented like the Browse and Search pages

import Link from "next/link";
import { Heading, Stack, Flex, Spacer, Button } from "@chakra-ui/react";
import { HiOutlineScale, HiOutlineNewspaper } from "react-icons/hi";

export default function PressHeader() {
  return (
    <Flex direction={["column", "column", "row"]} mb={8}>
      <Heading size="3xl">Press</Heading>
      <Spacer />
      <Stack direction={["column", "column", "row"]} spacing={4} pt={4}>
        <Link href="/licence" passHref>
          <Button leftIcon={<HiOutlineScale />} size="sm">
            Copyright Notice
          </Button>
        </Link>
        <Link href="/privacy" passHref>
          <Button leftIcon={<HiOutlineScale />} size="sm">
            Privacy
          </Button>
        </Link>
        <Link href="/press" passHref>
          <Button leftIcon={<HiOutlineNewspaper />} size="sm" isActive>
            Press
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}

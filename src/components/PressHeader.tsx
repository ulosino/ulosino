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

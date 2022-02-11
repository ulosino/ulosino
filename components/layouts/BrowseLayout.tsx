import type { ReactElement } from "react";

import Link from "next/link";

import { Flex, Stack, Box, Button } from "@chakra-ui/react";

export default function BrowseLayout({ children }: { children: ReactElement }) {
  return (
    <Flex direction="row">
      <Stack direction="column" spacing={2}>
        <Link href="/browse" passHref>
          <Button as="a">OS List &amp; Tempo</Button>
        </Link>
        <Link href="/search" passHref>
          <Button as="a">Advanced Search</Button>
        </Link>
        <Link href="/matches" passHref>
          <Button as="a">Matches</Button>
        </Link>
      </Stack>
      <Box flex={1} ms={10}>
        {children}
      </Box>
    </Flex>
  );
}

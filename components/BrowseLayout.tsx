// This wraps around our Browse series of pages, implementing a sidebar to navigate between the Browse pages

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Flex, Stack, Box, Button } from "@chakra-ui/react";

// Begin wrapping component
export default function BrowseLayout({ children }: { children: ReactElement }) {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Stack
        direction="column"
        spacing={2}
        mb={10}
        me={10}
        display={{ base: "none", sm: "flex" }}
        as="nav"
        id="testingBrowsePageSeriesSidebar"
        w={175}
      >
        <Link href="/browse" passHref>
          <Button as="a">Browse &amp; OS List</Button>
        </Link>
        <Link href="/search" passHref>
          <Button as="a">Advanced Search</Button>
        </Link>
        <Link href="/matches" passHref>
          <Button as="a">Matches</Button>
        </Link>
      </Stack>
      <Box flex={1} as="main">
        {children}
      </Box>
    </Flex>
  );
}

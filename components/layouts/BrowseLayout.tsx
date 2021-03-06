// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This wraps around our Browse series of pages, implementing a sidebar to navigate between the Browse pages

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Flex, Stack, Box, Button } from "@chakra-ui/react";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

// Begin wrapping component
export default function BrowseLayout({ children }: { children: ReactElement }) {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <ErrorFallback>
        <Stack
          direction="column"
          spacing={2}
          mb={10}
          me={{ base: "none", md: 10 }}
          w={{ base: "inherit", sm: 200 }}
          display={{ base: "none", sm: "flex" }}
          as="nav"
          id="testingBrowsePageSeriesSidebar"
        >
          <Link href="/browse" passHref>
            <Button as="a">Operating System List</Button>
          </Link>
          <Link href="/matches" passHref>
            <Button as="a">ULOSINO Matches</Button>
          </Link>
          <Link href="/create" passHref>
            <Button as="a">Create an OS Page</Button>
          </Link>
        </Stack>
      </ErrorFallback>
      <Box flex={1} as="main">
        <ErrorFallback>{children}</ErrorFallback>
      </Box>
    </Flex>
  );
}

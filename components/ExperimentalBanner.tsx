// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This banner indicates that the build is highly experimental and known to contain bugs
// It can be included by the developer in Layout

// Chakra UI, icons, and other design imports
import { Flex, Container, Center, Stack, Text } from "@chakra-ui/react";

// Begin component
export default function ExperimentalBanner() {
  return (
    <Flex my={4} display={{ base: "none", md: "flex" }}>
      <Container maxW="container.lg">
        <Flex>
          <Stack direction="row" spacing={5}>
            <Center>
              <Text textStyle="miniHeading" as="h6">
                Experimental Build
              </Text>
            </Center>
            <Center>
              <Text fontSize="sm">
                Some ULOSINO features may be unavailable.
              </Text>
            </Center>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}

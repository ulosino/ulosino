// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This adds a consistent (and responsive) layout to our error pages

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Flex, Stack, Center, Box, Icon } from "@chakra-ui/react";
import { HiExclamationCircle, HiQuestionMarkCircle } from "react-icons/hi";

// First party components
import ErrorOptions from "components/layouts/ErrorOptions";

export function ErrorIcon({ is404 }: { is404: boolean }) {
  return (
    <>
      {is404 ? (
        <Icon
          as={HiExclamationCircle}
          w={16}
          h={16}
          aria-label="Exclamation circle indicating an error"
          title="Exclamation circle indicating an error"
          id="testing-errorPageIcon"
        />
      ) : (
        <Icon
          as={HiQuestionMarkCircle}
          w={16}
          h={16}
          aria-label="Question mark circle indicating an error"
          title="Question mark circle indicating an error"
          id="testing-errorPageIcon"
        />
      )}
    </>
  );
}

// Begin wrapping component
export default function ErrorLayout({
  children,
  is404,
}: {
  children: ReactElement;
  is404: boolean;
}) {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Stack
        direction="column"
        spacing={10}
        mb={10}
        me={10}
        display={{ base: "none", md: "flex" }}
      >
        <Center>
          <ErrorIcon is404={is404} />
        </Center>
        <ErrorOptions is404={is404} />
      </Stack>
      <Stack flex={1} spacing={10} as="main">
        {children}
        <Box
          display={{ base: "block", md: "none" }}
          id="testing-errorPageActionsMobilePlacement"
        >
          <ErrorOptions is404={is404} />
        </Box>
      </Stack>
    </Flex>
  );
}

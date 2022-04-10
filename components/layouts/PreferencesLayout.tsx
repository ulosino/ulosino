// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This adds a consistent (and responsive) layout to our error pages

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Flex, Stack, Center, Button, Icon } from "@chakra-ui/react";
import {
  HiCog,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineTemplate,
} from "react-icons/hi";

// Begin wrapping component
export default function PreferencesLayout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Stack
        direction="column"
        spacing={10}
        mb={10}
        me={{ base: "none", md: 10 }}
        minW={{ base: "inherit", sm: 175 }}
        display={{ base: "none", md: "flex" }}
      >
        <Center>
          <Icon
            as={HiCog}
            w={16}
            h={16}
            aria-label="Mechanical cog indicating preferences"
            title="Mechanical cog"
          />
        </Center>
        <Stack direction="column" spacing={2}>
          <Link href="/preferences/appearance" passHref>
            <Button leftIcon={<HiOutlineTemplate />} as="a">
              Appearance
            </Button>
          </Link>
          <Link href="/preferences/notifications" passHref>
            <Button leftIcon={<HiOutlineBell />} as="a">
              Notifications
            </Button>
          </Link>
          <Link href="/preferences/advanced" passHref>
            <Button leftIcon={<HiOutlineCog />} as="a">
              Advanced
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack flex={1} spacing={10} as="main">
        {children}
      </Stack>
    </Flex>
  );
}

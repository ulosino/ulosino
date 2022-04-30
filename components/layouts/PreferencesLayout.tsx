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
  HiOutlineExclamationCircle,
  HiOutlineShieldExclamation,
  HiOutlineSupport,
  HiOutlineTemplate,
  HiOutlineUser,
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
        w={{ base: "inherit", sm: 200 }}
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
          <Link href="/preferences/general" passHref>
            <Button leftIcon={<HiOutlineCog />} as="a">
              Preferences
            </Button>
          </Link>
          <Link href="/preferences/accessibility" passHref>
            <Button leftIcon={<HiOutlineUser />} as="a">
              Accessibility
            </Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Link href="/about/privacy" passHref>
            <Button leftIcon={<HiOutlineShieldExclamation />} as="a">
              Privacy Notice
            </Button>
          </Link>
          <Link href="/about/terms" passHref>
            <Button leftIcon={<HiOutlineExclamationCircle />} as="a">
              Terms of Usage
            </Button>
          </Link>
          <Link href="/about/legal" passHref>
            <Button leftIcon={<HiOutlineExclamationCircle />} as="a">
              Copyright &amp; License
            </Button>
          </Link>
        </Stack>
        <Link href="https://docs.ulosino.com" passHref>
          <Button leftIcon={<HiOutlineSupport />} as="a">
            Documentation
          </Button>
        </Link>
      </Stack>
      <Flex flex={1} direction="column" as="main">
        {children}
      </Flex>
    </Flex>
  );
}

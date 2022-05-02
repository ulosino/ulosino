// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file was forked from the "@choc-ui/chakra-autocomplete" project, available at https://github.com/anubra266/choc-autocomplete.
// Files that are a part of the "@choc-ui/chakra-autocomplete" project may be subject to the terms of the MIT License.

// This file is shown when the AutoComplete query has nothing to return
// It features a link to our GitHub repository

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Flex,
  Spacer,
  Center,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { HiOutlineExclamationCircle, HiOutlinePlus } from "react-icons/hi";

// Begin component
export default function EmptyState() {
  return (
    <Flex px={4} id="testingSearchEmptyStateFallback">
      <Stack direction="row" spacing={4}>
        <Center>
          <Icon
            as={HiOutlineExclamationCircle}
            aria-label="Exclamation circle indicating an error"
            w={6}
            h={6}
          />
        </Center>
        <Center>
          <Text textStyle="miniHeading" as="h6">
            Nothing to show
          </Text>
        </Center>
      </Stack>
      <Spacer />
      <Link href="/create" passHref>
        <Button
          leftIcon={<HiOutlinePlus />}
          size="sm"
          as="a"
          display={{ base: "none", lg: "flex" }}
        >
          Create an OS Page
        </Button>
      </Link>
    </Flex>
  );
}

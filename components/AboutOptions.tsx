// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This adds actionable buttons to the About page

// Links and routing
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import { Stack, Button } from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

// Begin component
export default function AboutOptions() {
  const router = useRouter();
  return (
    <Stack direction="column" spacing={2} as="nav" id="testingErrorPageActions">
      <Link href="https://github.com/ulosino/ulosino" passHref>
        <Button leftIcon={<HiOutlineInformationCircle />} as="a">
          Read the project README
        </Button>
      </Link>
      <Link href="https://twitter.com/ulosino" passHref>
        <Button leftIcon={<FiTwitter />} as="a">
          Visit @ulosino on Twitter
        </Button>
      </Link>
    </Stack>
  );
}

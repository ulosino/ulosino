// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This adds actionable buttons to recover the app in an error
// Imported by ErrorLayout

// Links and routing
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import { Stack, Button } from "@chakra-ui/react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronDoubleLeft,
  HiOutlineRefresh,
} from "react-icons/hi";

// Begin component
export default function ErrorOptions({ is404 }: { is404: boolean }) {
  const router = useRouter();
  return (
    <Stack direction="column" spacing={2} as="nav" id="testingErrorPageActions">
      <Button leftIcon={<HiOutlineChevronLeft />} onClick={router.back}>
        Go Back
      </Button>
      <Link href="/" passHref>
        <Button leftIcon={<HiOutlineChevronDoubleLeft />} as="a">
          Go Home
        </Button>
      </Link>
      {is404 ? (
        ""
      ) : (
        <Button leftIcon={<HiOutlineRefresh />} onClick={router.reload}>
          Try Again
        </Button>
      )}
    </Stack>
  );
}

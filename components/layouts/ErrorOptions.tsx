// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

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
export default function ErrorOptions() {
  const router = useRouter();
  return (
    <Stack
      direction="column"
      spacing={2}
      as="nav"
      id="testing-errorPageActions"
    >
      <Button leftIcon={<HiOutlineChevronLeft />} onClick={router.back}>
        Go Back
      </Button>
      <Link href="/" passHref>
        <Button leftIcon={<HiOutlineChevronDoubleLeft />} as="a">
          Go Home
        </Button>
      </Link>
      <Button leftIcon={<HiOutlineRefresh />} onClick={router.reload}>
        Try Again
      </Button>
    </Stack>
  );
}

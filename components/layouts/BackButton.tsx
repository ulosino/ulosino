// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// This back button component provides back navigation when used as a PWA
// It's shown by default on mobile screens, and available on desktop with a toggle

// Links and routing
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import { IconButton } from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";

// Begin component
export default function BackButton() {
  const router = useRouter();
  return (
    <IconButton
      aria-label="Go Back"
      title="Go Back"
      onClick={() => router.back()}
      icon={<HiChevronLeft />}
      variant="ghost"
      me={4}
    />
  );
}

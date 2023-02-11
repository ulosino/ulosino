// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This back button component provides back navigation when used as a PWA
// It's shown by default on mobile screens, and available on desktop with a toggle

// Links and routing
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import { IconButton } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

// Begin component
export default function HeaderBackButton() {
  const router = useRouter();
  return (
    <IconButton
      aria-label="Go Back"
      title="Go Back"
      onClick={() => router.back()}
      icon={<FiChevronLeft />}
      variant="ghost"
      me={5}
    />
  );
}

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This button changes the Chakra UI colour mode

// Chakra UI, icons, and other design imports
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

// Begin component
export default function ColourModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  // This changes the icon based on the colour mode
  const ColourModeIcon = useColorModeValue(HiOutlineMoon, HiOutlineSun);
  return (
    <Button
      leftIcon={<ColourModeIcon />}
      onClick={toggleColorMode}
      id="testingColourSchemeToggle"
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

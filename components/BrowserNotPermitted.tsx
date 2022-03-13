// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is rendered when the ApplicationProvider finds a browser that isn't permitted
// It returns IAE BrowserNotPermitted

// Chakra UI, icons, and other design imports
import { Text, Code } from "@chakra-ui/react";

import React from "react";

interface UnsupportedBrowserTypes {
  browser: string;
}

// Begin component
export function BrowserNotPermitted({ browser }: UnsupportedBrowserTypes) {
  console.error(
    "Integrated Application Error: BrowserNotPermitted (Reference ULOSINO 3.x.x documentation)"
  );
  return (
    <>
      <Text mt={20} mx={20} mb={2}>
        {browser} isn't a supported browser. Upgrade your browser to use
        ULOSINO.
      </Text>
      <Code fontSize="xs" mx={20}>
        IAE BrowserNotPermitted
      </Code>
    </>
  );
}

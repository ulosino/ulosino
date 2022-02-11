// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// The Application Kit implements providers
// This replaces some functions delegated to _app.tsx. Application Kit is opt-in by page

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { ChakraProvider } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";

// Begin wrapping component
export default function ApplicationKit({
  children,
}: {
  children: ReactElement;
}) {
  return <ChakraProvider theme={UITheme}>{children}</ChakraProvider>;
}

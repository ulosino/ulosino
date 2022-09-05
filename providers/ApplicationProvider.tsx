// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The ApplicationProvider implements providers
// This replaces some functions delegated to _app.tsx. ApplicationProvider is opt-in by page

// Types
import { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { ChakraProvider } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";

// First party components
import { ErrorFallbackApplication } from "components/ErrorFallback";

// Begin wrapping component
export default function ApplicationProvider({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <ChakraProvider theme={UITheme}>
      <ErrorFallbackApplication>{children}</ErrorFallbackApplication>
    </ChakraProvider>
  );
}

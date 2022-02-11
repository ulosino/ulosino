import type { ReactElement } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";

export default function ApplicationKit({
  children,
}: {
  children: ReactElement;
}) {
  return <ChakraProvider theme={UITheme}>{children}</ChakraProvider>;
}

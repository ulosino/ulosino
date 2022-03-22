// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is a banner to open the OS Page Assistant
// It is shown on the OS List

// Chakra UI, icons, and other design imports
import { Stack, Box, Text, useStyleConfig } from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

// First party component
import OSPageAssistant from "components/OSPageAssistant";

// Begin components
export function OSPageAssistantHero() {
  return (
    <Card variant="secondary">
      <Stack direction="column" spacing={2}>
        <Text textStyle="miniHeading" as="h6" color="white">
          Want to Create an OS Page?
        </Text>
        <Text color="white">
          ULOSINO now offers a new assistant to fast-track creating an OS Page.
        </Text>
        <OSPageAssistant />
      </Stack>
    </Card>
  );
}

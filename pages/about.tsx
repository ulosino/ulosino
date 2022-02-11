// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";

// Begin page
export default function About() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">About</Heading>
      <Text>To complete</Text>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>{page}</Layout>
    </ApplicationKit>
  );
};

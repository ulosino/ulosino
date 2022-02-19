// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

// Begin page
export default function Browse() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">Operating System List</Heading>
      <Text>Test</Text>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
Browse.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout isBasicLayout={false}>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};

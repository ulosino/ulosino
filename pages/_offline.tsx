// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

// Begin page
export default function OfflineFallback() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">You're offline</Heading>
      <Text>There were issues downloading data from the server.</Text>
      <Text>
        Check your data and networking settings and then return to ULOSINO.
      </Text>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
OfflineFallback.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout isBasicLayout={false}>
        <ErrorLayout is404={true}>{page}</ErrorLayout>
      </Layout>
    </ApplicationKit>
  );
};

// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Code } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import ErrorLayout from "components/layouts/ErrorLayout";

// Begin page
export default function Custom500() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">Something went wrong</Heading>
      <Text>
        It appears that the server is experiencing problems. No further details
        are available.
      </Text>
      <Text>Try again later as the issue is likely temporary.</Text>
      <Text fontSize="xs">
        You can look up this error code:{" "}
        <Code ms={1} fontSize="xs">
          HTTP 500
        </Code>
      </Text>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
Custom500.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <ErrorLayout>{page}</ErrorLayout>
      </Layout>
    </ApplicationKit>
  );
};

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
export default function Custom404() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">There's nothing to show</Heading>
      <Text>A page couldn't be found at this URL.</Text>
      <Text>
        If you entered the URL manually, check it for spelling mistakes.
        Operating system pages look like{" "}
        <Code>ulosino.com/browse/operating-system</Code>. If there was once a
        page here, it was likely moved or deleted.
      </Text>
      <Text>Go Home to make a search and discover something new.</Text>
      <Text fontSize="xs">
        You can look up this error code:{" "}
        <Code ms={1} fontSize="xs">
          HTTP 404
        </Code>
      </Text>
    </Stack>
  );
}

// Apply persistent layout, wrapping page
Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <ErrorLayout>{page}</ErrorLayout>
      </Layout>
    </ApplicationKit>
  );
};

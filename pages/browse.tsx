import type { ReactElement } from "react";

import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

import { Stack, Heading, Text } from "@chakra-ui/react";

export default function Browse() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">Operating System List</Heading>
      <Text>Test</Text>
    </Stack>
  );
}

Browse.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};

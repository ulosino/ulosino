import type { ReactElement } from "react";

import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";

import { Stack, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">About</Heading>
      <Text>To complete</Text>
    </Stack>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>{page}</Layout>
    </ApplicationKit>
  );
};

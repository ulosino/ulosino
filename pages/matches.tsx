import type { ReactElement } from "react";

import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

import MatchesExperience from "components/matches/MatchesExperience";

import { Stack, Heading, Text } from "@chakra-ui/react";

export default function Matches() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">ULOSINO Matches</Heading>
      <Text>Find an OS that matches your preferences, quickly and easily.</Text>
      <MatchesExperience />
    </Stack>
  );
}

Matches.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};

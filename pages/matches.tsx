// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text } from "@chakra-ui/react";

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";
import MatchesExperience from "components/matches/MatchesExperience";

// Begin page
export default function Matches() {
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">ULOSINO Matches</Heading>
      <Text>Find an OS that matches your preferences, quickly and easily.</Text>
      <MatchesExperience />
    </Stack>
  );
}

// Apply persistent layout, wrapping page
Matches.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};

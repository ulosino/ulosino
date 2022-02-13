// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Types
import type { ReactElement } from "react";

import { useEffect } from "react";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, createStandaloneToast } from "@chakra-ui/react";
import UITheme from "providers/UIThemeProvider";
const toast = createStandaloneToast({ theme: UITheme });

// First party components
import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";
import { NoJSWarningFeaturesDisabled } from "components/NoJSWarning";
import MatchesExperience from "components/matches/MatchesExperience";

// Begin page
export default function Matches() {
  // Show web app installation banner
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      toast({
        title: "Go offline with the ULOSINO web app",
        description: "Simply select 'Install ULOSINO' in your browser's menu.",
        status: "info",
        position: "top-right",
        duration: 7000,
        isClosable: true,
      });
    });
  });
  return (
    <Stack direction="column" spacing={5}>
      <Heading size="xl">ULOSINO Matches</Heading>
      <noscript>
        <NoJSWarningFeaturesDisabled />
      </noscript>
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

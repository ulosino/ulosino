// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the unified OS card, complete with attributes
// Used on Home search, Operating System List, and Advanced Search
// It's not used on Matches which relies on hardcoded summary and platform data

// Suspense and performance
import { useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import { Stack, Box, Heading, Text, Badge } from "@chakra-ui/react";

interface MetadataTypes {
  name: string;
  summary: string;
  category: string;
  donate: string;
  platform: string;
  desktop: string;
  startup: string;
  packagemgr: string;
  usePlatform: boolean;
  useDesktop: boolean;
  useStartup: boolean;
  usePackagemgr: boolean;
  OSCardId: string;
}

// Begin component
export default function OSDataLayout({
  name,
  summary,
  category,
  donate,
  platform,
  desktop,
  startup,
  packagemgr,
  usePlatform,
  useDesktop,
  useStartup,
  usePackagemgr,
  OSCardId,
}: MetadataTypes) {
  // Get preferences
  const [donationFeatures] = useLocalStorage("P3PrefDisableDonationFeatures");
  return (
    <Box w="full" id={OSCardId}>
      <Heading size="md">{name}</Heading>
      <Text fontSize="sm">"{summary}"</Text>
      <Stack direction="row" spacing={5}>
        <Stack direction="row" spacing={2}>
          <Badge fontSize="xs" pb={1}>
            {category}
          </Badge>
          {donationFeatures ? (
            ""
          ) : (
            <>
              {donate ? (
                <Badge variant="tempo" fontSize="xs" pb={1}>
                  Tempo
                </Badge>
              ) : (
                ""
              )}
            </>
          )}
        </Stack>
        <Stack direction="row" spacing={2}>
          {usePlatform ? (
            <Text fontSize="xs" fontWeight="bold">
              {platform}
            </Text>
          ) : (
            <Text fontSize="xs">{platform}</Text>
          )}
          {useDesktop ? (
            <Text fontSize="xs" fontWeight="bold">
              {desktop}
            </Text>
          ) : (
            <Text fontSize="xs">{desktop}</Text>
          )}
          {useStartup ? (
            <Text fontSize="xs" fontWeight="bold">
              {startup}
            </Text>
          ) : (
            <Text fontSize="xs">{startup}</Text>
          )}
          {usePackagemgr ? (
            <Text fontSize="xs" fontWeight="bold">
              {packagemgr}
            </Text>
          ) : (
            <Text fontSize="xs">{packagemgr}</Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

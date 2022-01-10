// Implements <Version> on the Contact page, includes link to GitHub releases
// Could be expanded into the future to show more troubleshooting data

import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";

import Version from "src/components/Version";

export default function VersionTroubleshoot() {
  return (
    <Stack direction="row" spacing={2} mt={4}>
      <Text fontSize="xs">
        Version <Version />
      </Text>
      <Text fontSize="xs">
        <Link href="https://github.com/ulosino/ulosino/releases">
          Changelog
        </Link>
      </Text>
    </Stack>
  );
}

// Implements <Version> on the Contact page, includes link to GitHub releases
// Could be expanded into the future to show more troubleshooting data

import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";

import Version from "components/Version";

console.info("Deployment details printed below, if available");
console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);
console.log(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
console.log(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE);
console.info("End deployment information log");

export default function VersionTroubleshoot() {
  return (
    <Stack direction="column" spacing={0} mt={4}>
      <Stack direction="row" spacing={2}>
        <Text fontSize="xs">
          Version <Version />
        </Text>
        <Text fontSize="xs">
          <Link href="https://github.com/ulosino/ulosino/releases">
            Changelog
          </Link>
        </Text>
      </Stack>
      <Text fontSize="xs">
        Check browser console for deployment information
      </Text>
    </Stack>
  );
}

// Implements <Version> on the Contact page, includes link to GitHub releases
// Could be expanded into the future to show more troubleshooting data

import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";

import Version from "components/Version";

console.debug("Vercel environment details (production/preview)");
console.debug(process.env.NEXT_PUBLIC_VERCEL_ENV);
console.debug(process.env.NEXT_PUBLIC_VERCEL_URL);
console.debug("Vercel deployment Git details (commit, branch, commit message)");
console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF);
console.debug(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE);

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

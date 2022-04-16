// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is rendered when the ApplicationProvider finds a browser that isn't permitted
// It returns IAE BrowserNotPermitted

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Text, Code } from "@chakra-ui/react";

interface UnsupportedBrowserTypes {
  browser: string;
}

export const environment = process.env.NEXT_PUBLIC_VERCEL_ENV;
export const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
export const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
export const commitMessage = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE;
export const commitAuthor =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN;

// Begin component
export default function BrowserNotPermitted({
  browser,
}: UnsupportedBrowserTypes) {
  console.error(
    "Integrated Application Error: BrowserNotPermitted https://docs.ulosino.com/docs/reference/errors"
  );
  return (
    <Stack direction="column" spacing={10} m={20}>
      <Text>
        {browser} is not supported. Try using a different browser to access
        ULOSINO.
      </Text>
      <Stack direction="row" spacing={10} fontSize="xs">
        <Stack direction="column" spacing={2}>
          <Text>Error</Text>
          <Text>Commit/Branch</Text>
          <Text>Commit Details</Text>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Code fontSize="xs">IAE BrowserNotPermitted</Code>
            <Link href="https://docs.ulosino.com/reference/errors">
              Learn More...
            </Link>
          </Stack>
          <Stack direction="row" spacing={2}>
            {commit ? (
              <Code fontSize="xs">{commit}</Code>
            ) : (
              <Text>Undefined</Text>
            )}
            {branch ? (
              <Code fontSize="xs">{branch}</Code>
            ) : (
              <Text>Undefined</Text>
            )}
          </Stack>
          <Stack direction="row" spacing={2}>
            {commit ? (
              <Text>
                "{commitMessage}" by {commitAuthor}
              </Text>
            ) : (
              <Text>Undefined</Text>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

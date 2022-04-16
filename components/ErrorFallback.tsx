// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file includes React error boundaries

// TypeScript is not supported
// @ts-nocheck

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Text, Code } from "@chakra-ui/react";

import React from "react";

// Begin wrapping components
// This surrounds segregated regions of the application view
export class ErrorFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.error(
        "Integrated Application Error: ErrorRegionCaught https://docs.ulosino.com/docs/reference/errors"
      );
      return <Text>An error occurred.</Text>;
    }

    return this.props.children;
  }
}

export const environment = process.env.NEXT_PUBLIC_VERCEL_ENV;
export const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
export const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
export const commitMessage = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE;
export const commitAuthor =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN;

// This surrounds the whole app
// Used if the page has no defined error fallbacks
export class ErrorFallbackApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.error(
        "Integrated Application Error: ErrorInUndefinedRegion https://docs.ulosino.com/docs/reference/errors"
      );
      return (
        <Stack direction="column" spacing={10} m={20}>
          <Text>An error occurred.</Text>
          <Stack direction="row" spacing={10} fontSize="xs">
            <Stack direction="column" spacing={2}>
              <Text>Error</Text>
              <Text>Commit/Branch</Text>
              <Text>Commit Details</Text>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Code fontSize="xs">IAE ErrorInUndefinedRegion</Code>
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

    return this.props.children;
  }
}

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file includes React error boundaries

// TypeScript is not supported
// @ts-nocheck

// Chakra UI, icons, and other design imports
import { Text } from "@geist-ui/core";

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
      return <Text>An error occurred.</Text>;
    }

    return this.props.children;
  }
}

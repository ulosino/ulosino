// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file includes React error boundaries

// TypeScript is not supported
// @ts-nocheck

// Chakra UI, icons, and other design imports
import { Text, Code } from "@chakra-ui/react";

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
        "Integrated Application Error: ErrorRegionCaught (Reference ULOSINO 3.x.x documentation)"
      );
      return <Text>Something went wrong.</Text>;
    }

    return this.props.children;
  }
}

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
        "Integrated Application Error: ErrorInUndefinedRegion (Reference ULOSINO 3.x.x documentation)"
      );
      return (
        <>
          <Text mt={20} mx={20} mb={2}>
            Something went wrong. Reference ULOSINO documentation.
          </Text>
          <Code fontSize="xs" mx={20}>
            IAE ErrorInUndefinedRegion
          </Code>
        </>
      );
    }

    return this.props.children;
  }
}

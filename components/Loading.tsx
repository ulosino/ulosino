// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is our standardised loading spinner

// Chakra UI, icons, and other design imports
import { Spinner, Center } from "@chakra-ui/react";

// Begin component
export default function Loading() {
  return (
    <Center>
      <Spinner />
    </Center>
  );
}

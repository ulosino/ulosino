// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This includes errors displayed when the feature is disabled because of a critically low battery level

// Suspense and performance
import { useLocalStorage } from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import { Button, Text, Stack, Code, Box } from "@chakra-ui/react";
import { HiOutlineLightningBolt } from "react-icons/hi";

// Begin components

export function LowBatteryError() {
  const [isCharging] = useLocalStorage("P3Charging");

  console.error(
    "Integrated Application Error: FeatureIsBlocked https://docs.ulosino.com/reference/errors"
  );

  return (
    <Stack direction="column" spacing={5}>
      <Text>{isCharging ? "Continue charging." : "Connect to charger."}</Text>
      <Box>
        <Code>IAE FeatureIsBlocked</Code>
      </Box>
    </Stack>
  );
}

export function LowBatteryErrorButton() {
  const [isCharging] = useLocalStorage("P3Charging");

  console.error(
    "Integrated Application Error: FeatureIsBlocked https://docs.ulosino.com/reference/errors"
  );

  return (
    <Button leftIcon={<HiOutlineLightningBolt />} isDisabled>
      {isCharging ? "Continue Charging" : "Connect to Charger"}
    </Button>
  );
}

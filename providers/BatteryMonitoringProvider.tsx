// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Suspense and performance
import { deleteFromStorage, writeStorage } from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Button,
  Text,
  Box,
  useStyleConfig,
  createStandaloneToast,
  DarkMode,
  Center,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import UITheme from "providers/UIThemeProvider";

import { useEffect, useRef } from "react";

// Begin component
export default function BatteryMonitoringProvider() {
  const toast = createStandaloneToast({ theme: UITheme });
  const id = "updateProviderUpdatePrompt";
  const updatePromptRef: any = useRef();

  function PromptToast() {
    return (
      <Card variant="secondary">
        <DarkMode>
          <Stack direction="row" spacing={5}>
            <Center>
              <Text textStyle="miniHeading" as="h6">
                Low Battery
              </Text>
            </Center>
            <Center>
              <Text size="sm">Some features aren't available.</Text>
            </Center>
            <Center>
              <Link
                href="https://docs.ulosino.com/reference/low-battery"
                passHref
              >
                <Button size="sm" as="a">
                  Learn More
                </Button>
              </Link>
            </Center>
          </Stack>
        </DarkMode>
      </Card>
    );
  }

  function AddPromptToast() {
    updatePromptRef.current = toast({
      id,
      duration: 7000,
      position: "bottom",
      render: PromptToast,
    });
  }

  function ClosePromptToast() {
    if (updatePromptRef.current) {
      toast.close(updatePromptRef.current);
    }
  }

  function DetectBatteryLevel() {
    // @ts-expect-error
    navigator.getBattery().then((battery: any) => {
      // If battery.level is less than 8%, show a warning and enable limited performance mode
      if (battery.level < 0.08) {
        writeStorage("P3LowBatteryMode", true);
        if (!toast.isActive(id)) {
          AddPromptToast();
        }
      } else writeStorage("P3LowBatteryMode", false);

      // Add an event listener to detect battery level changes
      // If it rises above 7%, remove the warning
      battery.addEventListener("levelchange", () => {
        if (battery.level > 0.07) {
          deleteFromStorage("P3LowBatteryMode");
        }
      });

      if (battery.charging === true) {
        writeStorage("P3Charging", true);
      } else writeStorage("P3Charging", false);

      battery.addEventListener("chargingchange", () => {
        if (battery.level > 0.07) {
          deleteFromStorage("P3Charging");
        }
      });
    });
  }

  useEffect(() => {
    // @ts-expect-error
    if (navigator.getBattery) {
      DetectBatteryLevel();
    }
  }, []);

  return <></>;
}

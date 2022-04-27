// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Performance Management Provider
// Provides automatic performance management

// Suspense and performance
import { deleteFromStorage, writeStorage } from "@rehooks/local-storage";

import { useEffect } from "react";

// Begin component
export default function PMProvider() {
  function DetectBatteryLevel() {
    // @ts-expect-error
    navigator.getBattery().then((battery: any) => {
      // If battery.level is less than 8%, show a warning and introduce performance restrictions
      if (battery.level < 0.08) {
        writeStorage("P3PM", true);
      }

      // Add an event listener to detect battery level changes
      // If it rises above 7%, remove the warning
      battery.addEventListener("levelchange", () => {
        if (battery.level > 0.07) {
          deleteFromStorage("P3PM");
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

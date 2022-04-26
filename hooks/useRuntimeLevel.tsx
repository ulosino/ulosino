// Suspense and performance
import {
  useLocalStorage,
  deleteFromStorage,
  writeStorage,
} from "@rehooks/local-storage";

import { useEffect } from "react";

// Begin hook
export function useRuntimeLevel(input: number) {
  const [runtimeLevel] = useLocalStorage("P3RuntimeLevel");

  writeStorage("P3RuntimeLevel", input);

  return input;
}

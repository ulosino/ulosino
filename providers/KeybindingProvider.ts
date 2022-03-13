// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The KeybindingProvider and the files in /providers/keybindings were forked from https://github.com/baked-dev/react-hotkeys.

export { default as KeybindingManager } from "providers/keybindings/manager";

export {
  default as KeybindingProvider,
  useHotkeyManager,
  withHotkeyManager,
} from "providers/keybindings/provider";

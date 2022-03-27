// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This contains keybinding reference tables
// All are displayed at /about/keybindings

// Chakra UI, icons, and other design imports
import { Table, Tbody, Td, Th, Thead, Tr, Kbd } from "@chakra-ui/react";

// Begin components
// Navigates between the application and can open a new session/tab
export function GlobalNavigationKeybindings() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Function</Th>
          <Th>Standard Keybinding</Th>
          <Th>Windows</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Go Home</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>/</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>/</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Go to the Operating System List</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>L</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>L</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Go to the Advanced Search page</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>S</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>S</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Open Home in a new tab</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>N</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>N</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Open Advanced Search in a new tab</Td>
          <Td colSpan={2}>
            <Kbd>control</Kbd> + <Kbd>option</Kbd> + <Kbd>N</Kbd>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

// Navigates to links specific to OS Pages
export function OSPageKeybindings() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Function</Th>
          <Th>Standard Keybinding</Th>
          <Th>Windows</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Open the Project Website in a new tab</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>O</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>O</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Open the Project Repository in a new tab</Td>
          <Td colSpan={2}>
            <Kbd>control</Kbd> + <Kbd>option</Kbd> + <Kbd>O</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Open the donation page in a new tab</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>D</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>D</Kbd>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

// Manages preferences for the current tab
export function SessionPreferencesKeybindings() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Function</Th>
          <Th>Standard Keybinding</Th>
          <Th>Windows</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Open Preferences</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>,</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>,</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Toggle the Browse and Advanced Search link</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Toggle the back button for large windows</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>B</Kbd>
          </Td>
        </Tr>
        <Tr>
          <Td>Toggle the application colour mode</Td>
          <Td colSpan={2}>
            <Kbd>control</Kbd> + <Kbd>W</Kbd>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

// Advanced keybindings
export function MiscellaneousKeybindings() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Function</Th>
          <Th>Standard Keybinding</Th>
          <Th>Windows</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Export deployment details to browser console</Td>
          <Td>
            <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>`</Kbd>
          </Td>
          <Td>
            <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>`</Kbd>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

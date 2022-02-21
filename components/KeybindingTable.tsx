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
          <Th>Keybinding</Th>
          <Th>Function</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Kbd>/</Kbd>
          </Td>
          <Td>Go Home</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>L</Kbd>
          </Td>
          <Td>Go to the Operating System List</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>S</Kbd>
          </Td>
          <Td>Go to the Advanced Search page</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>N</Kbd>
          </Td>
          <Td>Open Home in a new tab</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>option</Kbd> + <Kbd>N</Kbd>
          </Td>
          <Td>Open the Advanced Search page in a new tab</Td>
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
          <Th>Keybinding</Th>
          <Th>Function</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Kbd>W</Kbd>
          </Td>
          <Td>Toggle the application colour mode</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>shift</Kbd> + <Kbd>S</Kbd>
          </Td>
          <Td>Toggle the Browse and Advanced Search link</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>shift</Kbd> + <Kbd>B</Kbd>
          </Td>
          <Td>Toggle the back button for desktop displays</Td>
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
          <Th>Keybinding</Th>
          <Th>Function</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Kbd>O</Kbd>
          </Td>
          <Td>Open the Project Website in a new tab</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>option</Kbd> + <Kbd>O</Kbd>
          </Td>
          <Td>Open the Project Repository in a new tab</Td>
        </Tr>
        <Tr>
          <Td>
            <Kbd>D</Kbd>
          </Td>
          <Td>Open the Project's donation page in a new tab</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

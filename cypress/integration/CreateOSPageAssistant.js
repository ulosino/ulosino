// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe(
  "Create OS Page Assistant Experience Testing",
  { browser: "electron" },
  () => {
    it("Should test that the OS Page creation experience, including the page system and copying and pasting to clipboard, works correctly", () => {
      cy.visit("/browse");

      // Open the Create OS Page Assistant
      cy.get("#testingCOPATrigger").click();

      // Fill the description field
      cy.get("#testingCOPANavigationToDescription").click();
      cy.get("#testingCOPADescriptionInput").type("This is a test description");

      // Fill the metadata field
      cy.get("#testingCOPANavigationToMetadata").click();
      cy.get("#testingCOPAMetadataInput")
        .clear()
        .type("This is a test metadata");

      // Go to the conclusion and click the clipboard copy button
      cy.get("#testingCOPANavigationToConclusion").click();
      cy.get("#testingCOPAClipboardCopy").click();

      // Check that the clipboard contains the correct text
      cy.window()
        .its("navigator.clipboard")
        .invoke("readText")
        .should(
          "equal",
          "---\n  # Automatically generated with Create OS Page Assistant\n\n  This is a test metadata\n  ---\n  \n  This is a test description"
        );
    });
  }
);

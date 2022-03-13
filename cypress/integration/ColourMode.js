// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Colour Mode Display Testing", () => {
  it("Should test the colour mode switch works correctly", () => {
    cy.visit("/menu");

    // Try switching the colour mode, and watch for the class change
    // The default mode is light
    cy.get("#testingColourSchemeToggle").click();
    cy.get("body").should("have.class", "chakra-ui-dark");
  });
});

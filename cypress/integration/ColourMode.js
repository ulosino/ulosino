// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

describe("Colour Mode Display Testing", () => {
  it("Should test the colour mode switch works correctly", () => {
    cy.visit("/options");

    // Try switching the colour mode, and watch for the class change
    // The default mode is light
    cy.get("#testing-colourSchemeToggle").click();
    cy.get("body").should("have.class", "chakra-ui-dark");
  });
});

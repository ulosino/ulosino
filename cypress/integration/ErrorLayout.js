// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Error Layout Display Testing", () => {
  it("Should test that the error page layout displays correctly across different devices", () => {
    cy.visit("/error");

    // Test exclamation icon visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testingErrorPageIcon").should("be.visible");

    // Test exclamation icon visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testingErrorPageIcon").should("not.be.visible");

    // Test actions visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testingErrorPageActions").should("be.visible");
    cy.get("#testingErrorPageActionsMobilePlacement").should("not.be.visible");

    // Test actions visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testingErrorPageActions").should("not.be.visible");
    cy.get("#testingErrorPageActionsMobilePlacement").should("be.visible");
  });
});

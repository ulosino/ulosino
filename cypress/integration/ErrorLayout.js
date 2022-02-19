// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Error Page Display Testing", () => {
  it("Should test that the error page layout displays correctly across different devices", () => {
    cy.visit("/error");

    // Test exclamation icon visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testing-errorPageIcon").should("be.visible");

    // Test exclamation icon visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testing-errorPageIcon").should("not.be.visible");

    // Test actions visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testing-errorPageActions").should("be.visible");
    cy.get("#testing-errorPageActionsMobilePlacement").should("not.be.visible");

    // Test actions visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testing-errorPageActions").should("not.be.visible");
    cy.get("#testing-errorPageActionsMobilePlacement").should("be.visible");
  });
});

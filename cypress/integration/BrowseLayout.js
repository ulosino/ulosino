// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Browse Layout Display Testing", () => {
  it("Should test that the Browse series layout displays correctly across different devices", () => {
    cy.visit("/");

    // Test sidebar visibility, across all pages, on desktop
    cy.viewport("macbook-15");
    cy.visit("/browse");
    cy.get("#testingBrowsePageSeriesSidebar").should("be.visible");
    cy.visit("/search");
    cy.get("#testingBrowsePageSeriesSidebar").should("be.visible");
    cy.visit("/matches");
    cy.get("#testingBrowsePageSeriesSidebar").should("be.visible");

    // Test sidebar existence, across all pages, on mobile
    // The sidebar isn't visible on mobile
    cy.viewport("iphone-x");
    cy.visit("/browse");
    cy.get("#testingBrowsePageSeriesSidebar").should("not.be.visible");
    cy.visit("/search");
    cy.get("#testingBrowsePageSeriesSidebar").should("not.be.visible");
    cy.visit("/matches");
    cy.get("#testingBrowsePageSeriesSidebar").should("not.be.visible");
  });
});

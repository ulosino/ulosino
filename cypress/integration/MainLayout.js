// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Layout Display Testing", () => {
  it("Should test that the layout displays correctly across different devices", () => {
    cy.visit("/");

    // Test header visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testingHeaderLinks").should("be.visible");
    cy.get("#testingHeaderLogoLink").should("be.visible");
    cy.get("#testingHeaderMenuLink").should("not.be.visible");

    // Test header visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testingHeaderLinks").should("not.be.visible");
    cy.get("#testingHeaderLogoLink").should("be.visible");
    cy.get("#testingHeaderMenuLink").should("be.visible");
    cy.get("#testingHeaderBackButtonMobile").should("be.visible");

    // Test footer visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testingFooterGeneralLinks").should("be.visible");
    cy.get("#testingLegalLinks").should("be.visible");

    // Test footer visibility on desktop
    cy.viewport("iphone-x");
    cy.get("#testingFooterGeneralLinks").should("not.be.visible");
    cy.get("#testingLegalLinks").should("be.visible");
  });
});

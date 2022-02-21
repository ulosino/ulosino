// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Layout Display Testing", () => {
  it("Should test that the layout displays correctly across different devices", () => {
    cy.visit("/");

    // Test header visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testing-headerLinks").should("be.visible");
    cy.get("#testing-headerLogoLink").should("be.visible");
    cy.get("#testing-headerMenuLink").should("not.be.visible");

    // Test header visibility on mobile
    cy.viewport("iphone-x");
    cy.get("#testing-headerLinks").should("not.be.visible");
    cy.get("#testing-headerLogoLink").should("be.visible");
    cy.get("#testing-headerMenuLink").should("be.visible");
    cy.get("#testing-headerBackButtonMobile").should("be.visible");

    // Test footer visibility on desktop
    cy.viewport("macbook-15");
    cy.get("#testing-footerGeneralLinks").should("be.visible");
    cy.get("#testing-footerLegalLinks").should("be.visible");

    // Test footer visibility on desktop
    cy.viewport("iphone-x");
    cy.get("#testing-footerGeneralLinks").should("not.be.visible");
    cy.get("#testing-footerLegalLinks").should("be.visible");
  });
});

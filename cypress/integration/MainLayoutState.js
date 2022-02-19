// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Layout State Testing", () => {
  it("Should test that our configurable layout persists between pages", () => {
    cy.visit("/");

    cy.viewport("macbook-15");

    // Test back button (not visible by default)
    // The desktop back button is not in the DOM until switched
    cy.get("#testing-headerBackButtonDesktop").should("not.exist");
    cy.get("#testing-headerBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Now toggle the back button
    cy.get("#testing-footerBackButtonDesktopSwitch")
      .should("be.visible")
      .click();

    // Test the back button again (now visible)
    cy.get("#testing-headerBackButtonDesktop")
      .find("button")
      .should("be.visible");
    cy.get("#testing-headerBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Switch page to test state persistence
    cy.get("#testing-headerBrowseLink").click();
    cy.get("#testing-headerBackButtonDesktop")
      .find("button")
      .should("be.visible");
    cy.get("#testing-headerBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Test the mobile back button (visible by default on mobile only)
    cy.viewport("iphone-x");
    cy.get("#testing-headerBackButtonDesktop")
      .find("button")
      .should("not.be.visible");
    cy.get("#testing-headerBackButtonMobile")
      .find("button")
      .should("be.visible");

    // Now do the same tests using the Browse/Advanced Search button
    cy.viewport("macbook-15");
    cy.go("back");
    cy.get("#testing-headerSearchLink").should("not.exist");
    cy.get("#testing-headerBrowseLink").should("be.visible");
    cy.get("#testing-footerBrowseButtonSwitch").should("be.visible").click();
    cy.get("#testing-headerSearchLink").should("be.visible");
    cy.get("#testing-headerBrowseLink").should("not.exist");
    cy.get("#testing-headerSearchLink").click();
    cy.get("#testing-headerSearchLink").should("be.visible");
    cy.get("#testing-headerBrowseLink").should("not.exist");
    cy.viewport("iphone-x");
    cy.get("#testing-headerSearchLink").should("not.be.visible");
  });
});

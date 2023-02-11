// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Layout State Testing", () => {
  it("Should test that our configurable layout persists between pages", () => {
    // Using buttons to switch preferences has been superseded by keybindings
    // Nevertheless, we're using buttons to test this out; buttons are only shown on Options
    cy.visit("/menu");

    cy.viewport("macbook-15");

    // Test back button (not visible by default)
    // The desktop back button is not in the DOM until switched
    cy.get("#testingHeaderBackButtonDesktop").should("not.exist");
    cy.get("#testingHeaderBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Now toggle the back button
    cy.get("#testingFooterBackButtonDesktopSwitch")
      .should("be.visible")
      .click();

    // Test the back button again (now visible)
    cy.get("#testingHeaderBackButtonDesktop")
      .find("button")
      .should("be.visible");
    cy.get("#testingHeaderBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Switch page to test state persistence
    cy.get("#testingHeaderBrowseLink").click();
    cy.get("#testingHeaderBackButtonDesktop")
      .find("button")
      .should("be.visible");
    cy.get("#testingHeaderBackButtonMobile")
      .find("button")
      .should("not.be.visible");

    // Test the mobile back button (visible by default on mobile only)
    cy.viewport("iphone-x");
    cy.get("#testingHeaderBackButtonDesktop")
      .find("button")
      .should("not.be.visible");
    cy.get("#testingHeaderBackButtonMobile")
      .find("button")
      .should("be.visible");
  });
});

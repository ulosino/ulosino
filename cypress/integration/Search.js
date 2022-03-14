// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Currently only Alpine Linux is used as a test subject
// Testing OSs other than Alpine has been implemented but is bringing up a myriad of issues from Cypress

describe("Search Experience Testing", () => {
  it("Should test that Home search and Advanced Search are working correctly", () => {
    // Home page search (name)
    cy.visit("/");
    cy.get("#testingSearchInputName").focus().type("Alpine");
    cy.get("#testingSearchOutputItemName")
      .find("h2")
      .contains("Alpine Linux")
      .click();
    cy.url().should("include", "/browse/alpine");

    cy.visit("/search");

    // Advanced Search Core Metadata Group
    // Platform
    cy.get("#testingSearchInputPlatform").focus().type("x86");
    cy.get("#testingSearchOutputItemPlatform")
      .find("h2")
      .contains("Alpine Linux")
      .click();
    cy.url().should("include", "/browse/alpine");
    cy.visit("/search");
    // Desktop
    // cy.get("#testingSearchInputDesktop").focus().type("Pantheon");
    // cy.get("#testingSearchOutputItemDesktop")
    //   .find("h2")
    //   .contains("elementary OS")
    //   .click();
    // cy.url().should("include", "/browse/elementary");
    // cy.visit("/search");
    // Startup Manager
    cy.get("#testingSearchInputStartupManager").focus().type("busybox");
    cy.get("#testingSearchOutputItemStartupManager")
      .find("h2")
      .contains("Alpine Linux")
      .click();
    cy.url().should("include", "/browse/alpine");
    cy.visit("/search");
    // Package Manager
    cy.get("#testingSearchInputPackageManager").focus().type("apk");
    cy.get("#testingSearchOutputItemPackageManager")
      .find("h2")
      .contains("Alpine Linux")
      .click();
    cy.url().should("include", "/browse/alpine");
    cy.visit("/search");

    // Advanced Search Advanced Metadata Group
    // Derived OS
    // cy.get("#testingSearchInputDerivedOS").focus().type("Fedora");
    // cy.get("#testingSearchOutputItemDerivedOS")
    //   .find("h2")
    //   .contains("Red Hat Enterprise Linux")
    //   .click();
    // cy.url().should("include", "/browse/rhel");
    // cy.visit("/search");
    // Region of Origin
    // cy.get("#testingSearchInputRegion").focus().type("Netherlands");
    // cy.get("#testingSearchOutputItemRegion")
    //   .find("h2")
    //   .contains("Endeavour")
    //   .click();
    // cy.url().should("include", "/browse/endeavour");
    // cy.visit("/search");
    // Shell
    // cy.get("#testingSearchInputShell").focus().type("oksh");
    // cy.get("#testingSearchOutputItemShell")
    //   .find("h2")
    //   .contains("oasis")
    //   .click();
    // cy.url().should("include", "/browse/oasis");
    // cy.visit("/search");

    // Advanced Search ULOSINO System Search
    // Category
    // cy.get("#testingSearchInputCategory").focus().type("Research");
    // cy.get("#testingSearchOutputItemCategory")
    //   .find("h2")
    //   .contains("Plan 9")
    //   .click();
    // cy.url().should("include", "/browse/plan9");
    // cy.visit("/search");
    // Summary
    cy.get("#testingSearchInputSummary").focus().type("Haven for power users");
    cy.get("#testingSearchOutputItemSummary")
      .find("h2")
      .contains("Alpine Linux")
      .click();
    cy.url().should("include", "/browse/alpine");
  });
});

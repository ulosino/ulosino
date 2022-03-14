// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Dynamic Page Path Testing", () => {
  it("Should test the dynamic pages are receiving Markdown files and generating paths", () => {
    // Try `/about/[slug].tsx` (misc. Markdown files, e.g. License)
    cy.visit("/");
    cy.get("#testingLicenseLink")
      .should("have.attr", "href")
      .and("include", "/about/license");
    cy.get("#testingLicenseLink").click();
    cy.url().should("include", "/about/license");

    // Try `/browse/[slug].tsx` (OS Pages)
    cy.visit("/browse");
    cy.get("#testingOSDataCard").find("h2").contains("Alpine Linux").click();
    cy.url().should("include", "/browse/alpine");

    // Try `/marketplace/[slug].tsx` (Tempo pages)
    cy.visit("/browse/elementary");
    cy.get("#testingDonationPageLink")
      .should("have.attr", "href")
      .and("include", "/marketplace/elementary");
    cy.get("#testingDonationPageLink").click();
    cy.url().should("include", "/marketplace/elementary");
  });
});

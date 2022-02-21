// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Dynamic Page Path Testing", () => {
  it("Should test the dynamic pages are receiving Markdown files and generating paths", () => {
    // Try `/about/[slug].tsx` (misc. Markdown files, e.g. License)
    cy.visit("/about/license");
    cy.get("#testing-licenseLink")
      .should("have.attr", "href")
      .and("include", "/license");
    cy.get("#testing-licenseLink").click();
    cy.url().should("include", "/license");

    // Try `/browse/[slug].tsx` (OS Pages)
    // FILL with Browse page introduction

    // Try `/tempo/[slug].tsx` (Tempo pages)
    cy.visit("/browse/elementary");
    cy.get("#testing-donationPageLink")
      .should("have.attr", "href")
      .and("include", "/tempo/elementary");
    cy.get("#testing-donationPageLink").click();
    cy.url().should("include", "/tempo/elementary");
  });
});

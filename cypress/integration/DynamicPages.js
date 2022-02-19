// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Dynamic Page Testing", () => {
  it("Should test the dynamic pages are receiving Markdown files and generating paths", () => {
    cy.visit("/");

    // Try `/[slug].tsx` (misc. Markdown files, e.g. License)
    cy.get("#testing-licenseLink")
      .should("have.attr", "href")
      .and("include", "/license");
    cy.get("#testing-licenseLink").click();
    cy.url().should("include", "/license");

    // Try `/browse/[slug].tsx` (OS Pages)

    // Try `/tempo/[slug].tsx` (Tempo pages)
  });
});

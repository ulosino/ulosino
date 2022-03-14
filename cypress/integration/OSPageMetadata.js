// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("OS Page Local Metadata Testing", () => {
  it("Should test OS Page metadata is available on the dynamic OS Page", () => {
    cy.visit("/browse/elementary");

    // Test local metadata on the "elementary OS" OS Page
    cy.get("#testingOSPageName").contains("elementary OS");
    cy.get("#testingOSPageDescription")
      .find("p")
      .contains("elementary is a Linux distribution based off Ubuntu");
    cy.get("#testingDonationPageLink")
      .contains("Donate")
      .should("have.attr", "href")
      .and("include", "/marketplace/elementary");
    cy.get("#testingOSPageProjectWebsiteLink")
      .contains("Visit Project Website")
      .should("have.attr", "href")
      .and("include", "https://elementary.io");
    cy.get("#testingOSPageProjectRepositoryLink")
      .contains("Visit Source Repository")
      .should("have.attr", "href")
      .and("include", "https://github.com/elementary");
    cy.get("#testingOSPageTableDescends").contains("Ubuntu");
    cy.get("#testingOSPageEditLink")
      .contains("View on GitHub")
      .should("have.attr", "href")
      // IP URL standard is not recognised by Cypress below, resorted to use one "/"
      .and(
        "include",
        "https:/github.com/ulosino/ulosino/blob/main/public/markdown/browse/elementary.mdx"
      );
  });
});

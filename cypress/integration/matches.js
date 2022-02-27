// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("ULOSINO Matches Testing", () => {
  it("Should test the Matches experience; switching buttons to find the correct Match", () => {
    cy.visit("/matches");

    // Test Linux Mint card (visible by default)
    cy.get("#testingMatchesMintInfoCard")
      .find("h2")
      .contains("Linux Mint")
      .should("be.visible");
    cy.get("#testingMatchesMintInfoCard")
      .should("have.attr", "href")
      .and("include", "browse/mint");

    // Test preference switching
    cy.get("#testingMatchesSwitchButton")
      .contains("Switch to macOS style interfaces")
      .click();

    // Test elementary OS card (visible after switch)
    cy.get("#testingMatchesElementaryInfoCard")
      .find("h2")
      .contains("elementary OS")
      .should("be.visible");
    cy.get("#testingMatchesElementaryInfoCard")
      .should("have.attr", "href")
      .and("include", "/browse/elementary");
  });
});

// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Search Empty State Fallback Testing", () => {
  it("Should test that the custom fallback is used when the search query returns no results", () => {
    cy.visit("/");
    cy.get("#testingSearchInputName").focus().type("Lorem ipsum");
    cy.get("#testingSearchEmptyStateFallback").should("exist", "be.visible");
  });
});

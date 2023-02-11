// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Head Component and SEO Testing", () => {
  it("Should test that our Next.js Head components are applied correctly and receiving data on dynamic pages", () => {
    // Test a manually encoded static page
    cy.visit("/");
    cy.title().should("include", "Discover Open Source Operating Systems");

    // Test about dynamic page
    cy.visit("/about/license");
    cy.title().should("include", "License");

    // Test browse dynamic page
    // The structure here is {name}: {description}
    cy.visit("/browse/alpine");
    cy.title().should("include", "Alpine Linux: 'Haven for power users'");

    // Test Tempo dynamic page
    cy.visit("/marketplace/alpine");
    cy.title().should("include", "Donate to Alpine Linux on ULOSINO Tempo");
  });
});

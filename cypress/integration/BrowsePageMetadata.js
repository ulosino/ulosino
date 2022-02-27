// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Browse Page Remote Metadata Testing", () => {
  it("Should test that the Browse page is receiving metadata in it's OS Cards", () => {
    cy.visit("/browse");

    // Test remote metadata on the Browse page
    // Alpine Linux is at the top of the Operating System List
    cy.get("#testingOSDataCard").find("h2").contains("Alpine Linux");
    cy.get("#testingOSDataCard").find("p").contains("Haven for power users");
    cy.get("#testingOSDataCard").find("p").contains("busybox");
    cy.get("#testingOSDataCard").find("p").contains("apk");
    cy.get("#testingOSDataCard").find("h2").contains("Alpine Linux").click();
    cy.url().should("include", "/browse/alpine");
  });
});

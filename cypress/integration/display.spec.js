describe("Display Tester", () => {
  it("Should test colour mode and mobile interface (CSS)", () => {
    // Test the colour mode toggle
    cy.visit("/");
    cy.get("#testing-display-menu").click();
    cy.get("button").contains("Toggle").click();
    cy.get("body").should("have.class", "chakra-ui-dark");

    // Test tab switching
    cy.visit("/browse");
    cy.get("#testing-display-tabList")
      .find("button")
      .contains("Oldest")
      .click();
    cy.get("#testing-db-distributions").should("be.visible");

    // Test navbar and footer visibility in portrait
    cy.viewport("iphone-x");
    cy.get("#testing-display-logoSm").should("be.visible");
    cy.get("#testing-display-logoLg").should("not.be.visible");
    cy.get("button").contains("Browse").should("not.be.visible");
    cy.get("#testing-display-footer").should("not.be.visible");
    cy.get("button").contains("GitHub").should("not.be.visible");

    // Test navbar and footer visibility in landscape
    cy.viewport("iphone-x", "landscape");
    cy.get("#testing-display-logoSm").should("not.be.visible");
    cy.get("#testing-display-footer").should("be.visible");
    cy.viewport("macbook-15");
    cy.get("#testing-display-logoSm").should("not.be.visible");
    cy.get("#testing-display-footer").should("be.visible");
  });
});

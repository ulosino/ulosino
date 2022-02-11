describe("Matches Tester", () => {
  it("Should play with the buttons to find the right Match", () => {
    cy.visit("/matches");

    // Test Linux Mint card (visible by default)
    cy.get("#testing-mintInfoCard")
      .find("h2")
      .contains("Linux Mint")
      .should("be.visible");

    cy.get("#testing-mintInfoCard")
      .should("have.attr", "href")
      .and("include", "browse/mint");

    // Test switching
    cy.get("#testing-switchButton")
      .contains("Switch to macOS style interfaces")
      .click();

    // Test elementary OS card (visible after switch)
    cy.get("#testing-elementaryInfoCard")
      .find("h2")
      .contains("elementary OS")
      .should("be.visible");

    cy.get("#testing-elementaryInfoCard")
      .should("have.attr", "href")
      .and("include", "/browse/elementary");
  });
});

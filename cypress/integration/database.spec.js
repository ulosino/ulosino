describe("Database Tester", () => {
  it("Should use the demo to test database search, routing, and metadata", () => {
    cy.visit("/");

    // Test search input
    cy.get("#testing-db-input").focus().type("Demo");
    cy.get("#testing-db-item").find("h2").contains("Demo").click();
    cy.url().should("include", "/browse/");

    // Test in-page metadata
    cy.get("h2").contains("Operating system page demo");
    cy.get("p").contains("This isn't an operating system.");
    cy.get("td").contains("Licence");

    // Test in-page buttons where metadata forms the href
    cy.get("#testing-db-websiteLinkButton")
      .contains("Visit Website")
      .should("have.attr", "href")
      .and("include", "ulosino.com");

    // Test remote metadata
    cy.get("button").contains("Browse").click();
    cy.url().should("include", "/browse");
    cy.get("#testing-db-OSPages").find("h2").contains("Alpine Linux");
    cy.get("#testing-db-OSPages").find("p").contains("Haven for power users");
    cy.get("#testing-db-OSPages").find("h2").contains("Alpine Linux").click();
    cy.url().should("include", "/browse/");
  });
});

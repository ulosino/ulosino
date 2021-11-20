describe("Database Tester", () => {
  it("Uses the demo to test database search, routing, and metadata", () => {
    cy.visit("/");

    // Test search input
    cy.get("#testing-db-input").focus().type("Demo");
    cy.get("#testing-db-item").find("h2").contains("Demo").click();
    cy.url().should("include", "/browse/");

    // Test local metadata
    cy.get("h2").contains("Distribution page demo");
    cy.get("p").contains("This isn't a distro.");
    cy.get("td").contains("Status");

    // Test remote metadata
    cy.get("button").contains("Browse").click();
    cy.url().should("include", "/browse");
    cy.get("#testing-db-distributions").find("h2").contains("Demo");
    cy.get("#testing-db-distributions")
      .find("p")
      .contains("Distribution page demo");
    cy.get("#testing-db-distributions").find("h2").contains("Demo").click();
    cy.url().should("include", "/browse/");

    // Test guides
    cy.get("button").contains("Browse").click();
    cy.url().should("include", "/browse");
    cy.get("#testing-db-guide")
      .find("h2")
      .contains("Choosing Your First Distribution")
      .click();
    cy.url().should("include", "/browse/guides/choose");
    cy.get("#testing-db-guideTag").contains("ULOSINO Guide");
  });
});

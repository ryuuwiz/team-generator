describe("Generator Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("can generate 2 teams", () => {
    cy.get("[data-cy='itemsInput']").type("a\nb\nc\nd");
    cy.get('[data-cy="groupsInput"]').type("2");
    cy.get("[data-cy='generateBtn']").click();

    cy.contains('[data-cy="team"]', 2);
  });

  it("can generate 3 teams", () => {
    cy.get("[data-cy='itemsInput']").type("a\nb\nc\nd");
    cy.get('[data-cy="groupsInput"]').type("3");
    cy.get("[data-cy='generateBtn']").click();

    cy.contains('[data-cy="team"]', 3);
  });

  it("can clear all teams and input", () => {
    cy.get("[data-cy='itemsInput']").type("a\nb\nc\nd");
    cy.get('[data-cy="groupsInput"]').type("3");
    cy.get("[data-cy='generateBtn']").click();
    cy.get("[data-cy='clearAllBtn']").click();

    cy.get('[data-cy="itemsInput"]').should("be.empty");
    cy.get('[data-cy="groupsInput"]').should("have.value", 0);
    cy.get("[data-cy='generateBtn']").should("be.disabled");
    cy.get("[data-cy='clearAllBtn']").should("be.disabled");
  });
});

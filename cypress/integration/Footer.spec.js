/// <reference types="cypress" />

const URI = "https://reverse-spider-solitaire.herokuapp.com/";

describe("Footer Test", () => {
  beforeEach(() => {
    cy.visit(URI);
  });

  it("footer should be exist", () => {
    cy.get("footer").should("exist");
  });

  it("footer should be Author", () => {
    cy.get("footer").should("contain", "Author");
  });
});

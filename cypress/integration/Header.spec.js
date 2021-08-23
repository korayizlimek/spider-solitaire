/// <reference types="cypress" />

const URI = "https://reverse-spider-solitaire.herokuapp.com/";

const initialScore = "1000";

describe("Header Test", () => {
  beforeEach(() => {
    cy.visit(URI);
  });
  it("score should be exist", () => {
    cy.get(".score").should("exist");
  });

  it("score should be 1000", () => {
    cy.get(".score").should("contain", initialScore);
  });

  it("score should be exist", () => {
    cy.get(".score-section > img").should("exist");
  });

  it("time should be exist ", () => {
    cy.get(".time").should("exist");
  });

  it("time should be 00:00 in start", () => {
    cy.get(".time").should("contain", "00:00");
  });

  it("time icon should be exist ", () => {
    cy.get(".time-section > img").should("exist");
  });

  it("restart should be exist", () => {
    cy.get(".restart").should("exist");
  });

  it("restart icon should be", () => {
    cy.get(".restart-section > img").should("exist");
  });

  it("should time be 00:00 when click restart button", () => {
    cy.get(".restart-section").click();
    cy.get(".time").should("contain", "00:00");
  });

  it("should score be 1000 when click restart button", () => {
    cy.get(".restart-section").click();
    cy.get(".score").should("contain", initialScore);
  });
});

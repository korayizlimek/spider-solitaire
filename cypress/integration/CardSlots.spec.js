/// <reference types="cypress" />

const URI = "https://reverse-spider-solitaire.herokuapp.com/";

const cardSlotsCount = 10;

describe("CardSlots Test", () => {
  beforeEach(() => {
    cy.visit(URI);
  });

  it("footer should be exist", () => {
    cy.get(".card-slots").should("exist");
  });
  it("footer should be length is 10", () => {
    cy.get(".card-slots").children().should("have.length", cardSlotsCount);
  });
});

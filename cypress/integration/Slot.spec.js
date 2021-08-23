/// <reference types="cypress" />

const URI = "https://reverse-spider-solitaire.herokuapp.com/";

describe("Slot Test", () => {
  beforeEach(() => {
    cy.visit(URI);
  });

  it("slot should be exist", () => {
    cy.get(".slot").should("exist");
  });
  it("slot should be have 54 card in initially ", () => {
    cy.get(".slot-card").children().should("have.length", 54);
  });
  it("slot should be have 64 card when click cardDealer( bacause cardDealer deal 10 card) ", () => {
    cy.get(".slot-card").children().should("have.length", 54);
    cy.get(".cardDealer").click();
    cy.get(".slot-card").children().should("have.length", 64);
  });
  it("slot should be have 104 card when click 5 times cardDealer( bacause cardDealer deal 10 card) ", () => {
    cy.get(".slot-card").children().should("have.length", 54);
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".slot-card").children().should("have.length", 104);
  });
});

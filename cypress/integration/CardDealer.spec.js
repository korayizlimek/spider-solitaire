/// <reference types="cypress" />

const URI = "https://reverse-spider-solitaire.herokuapp.com/";

const cardDealerCount = 5;
const initialScore = "1000";

describe("cardDealer Test", () => {
  beforeEach(() => {
    cy.visit(URI);
  });

  it("cardDealer should be exist", () => {
    cy.get(".cardDealer").should("exist");
  });
  it("cardDealer should be length is 5", () => {
    cy.get(".cardDealer").children().should("have.length", cardDealerCount);
  });
  it("the number of cardDealer should be reduced by one when click cardDealer", () => {
    const cardDealerCountMinusOne = cardDealerCount - 1;

    cy.get(".cardDealer").children().should("have.length", cardDealerCount);
    cy.get(".cardDealer").click();
    cy.get(".cardDealer")
      .children()
      .should("have.length", cardDealerCountMinusOne);
  });
  it("CardDealer should not be cardDealer when card is clicked 5 times", () => {
    cy.get(".cardDealer").children().should("have.length", cardDealerCount);
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").click();
    cy.get(".cardDealer").children().should("have.length", 0);
  });
  it("Each time the deck deals cards (10 cards are dealt once clicked), 50 points must be lost.", () => {
    const initialScoreMinusFifty = initialScore - 50;

    cy.get(".score").should("contain", initialScore);
    cy.get(".cardDealer").click();
    cy.get(".score").should("contain", initialScoreMinusFifty);
  });
});

import { isRulesCorrectCardSet } from "./cardRules";

export const isOneCardSetCompleted = (
  cards,
  deleteCardInSlot,
  handleCompletedCardSetCount
) => {
  const oneCardSet = 13;
  if (cards.length >= oneCardSet) {
    const last13CardInSlot = cards.slice(oneCardSet * -1);
    const isRulesCorrect = isRulesCorrectCardSet(last13CardInSlot);
    if (isRulesCorrect) {
      deleteCardInSlot(oneCardSet);
      handleCompletedCardSetCount();
    }
  }
};

export const canSelectedCardSet = (index, cards) => {
  const selectedCardSet = cards.slice(index, cards.length);
  const isRulesCorrect = isRulesCorrectCardSet(selectedCardSet);
  if (isRulesCorrect) {
    return selectedCardSet;
  }
};

export const closedAllCard = (cards) => {
  cards.map((card) => {
    card.isOpen = false;
  });
  return cards;
};

import { isRulesCorrectCardSet } from "./cardRules";

const ONE_CARD_SET_FOR_COMPLETE = 13;

export const isOneCardSetCompleted = (cards) => {
  let last13CardInSlotHasCorrectRules = false;
  if (cards.length >= ONE_CARD_SET_FOR_COMPLETE) {
    const last13CardInSlot = cards.slice(ONE_CARD_SET_FOR_COMPLETE * -1);

    const isRulesCorrect = isRulesCorrectCardSet(last13CardInSlot);
    if (isRulesCorrect) {
      last13CardInSlotHasCorrectRules = true;
      return last13CardInSlotHasCorrectRules;
    }
  }
  return last13CardInSlotHasCorrectRules;
};

export const canSelectedCardSet = (index, cards) => {
  try {
    if (index > cards.length) {
      throw new Error("index is out of range");
    }
    const selectedCardSet = cards.slice(index, cards.length);
    const isRulesCorrect = isRulesCorrectCardSet(selectedCardSet);
    if (isRulesCorrect) {
      return selectedCardSet;
    }
  } catch (error) {
    return error.message;
  }
};

export const closedAllCard = (cards) => {
  cards.map((card) => {
    card.isOpen = false;
  });
  return cards;
};

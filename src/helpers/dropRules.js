import { cardRules } from "./cardRules";

export const canDropRules = (dragCard, cards) => {
  const dragCardValue = dragCard.value;
  const cardsInSlot = cards;

  const isThereCardsInSlot = cardsInSlot.length;
  if (isThereCardsInSlot > 0) {
    const lastCardInSlot = cardsInSlot[cards.length - 1];
    const lastCardInSlotValue = lastCardInSlot.value;

    const isRulesCorrect = cardRules(lastCardInSlotValue, dragCardValue);
    return isRulesCorrect;
  } else {
    return true;
  }
};

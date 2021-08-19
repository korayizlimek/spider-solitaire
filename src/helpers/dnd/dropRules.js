import { cardRules } from "../card/cardRules";

export const canDropRules = (dragCard, cards) => {
  const dragCardValue = dragCard.value;
  const cardsInSlot = cards;

  let isRulesCorrect = true;
  const isThereCardsInSlot = cardsInSlot.length;
  if (isThereCardsInSlot > 0) {
    const lastCardInSlot = cardsInSlot[cards.length - 1];
    const lastCardInSlotValue = lastCardInSlot.value;

    isRulesCorrect = cardRules(lastCardInSlotValue, dragCardValue);
    return isRulesCorrect;
  } else {
    return isRulesCorrect;
  }
};

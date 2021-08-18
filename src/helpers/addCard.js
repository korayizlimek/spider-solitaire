export const addCardInSlot = (selectedCardSet, cards) => {
  selectedCardSet?.forEach((card) => {
    cards.push(card);
    return true;
  });

  // isOneCardSetCompleted(cards, deleteCardInSlot, handleCompletedCardSetCount);
};

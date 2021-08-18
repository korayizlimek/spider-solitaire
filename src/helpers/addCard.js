export const addCardInSlot = (selectedCardSet, cards, setIsAddCard) => {
  selectedCardSet?.forEach((card) => {
    cards.push(card);
    setIsAddCard(true);
  });
};

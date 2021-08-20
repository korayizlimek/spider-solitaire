export const drawCards = (gameDeck, index) => {
  const drawnCards = gameDeck.slice(0, index);
  const retainedCardsWhenDrawnCards = gameDeck.slice(index);
  return [drawnCards, retainedCardsWhenDrawnCards];
};

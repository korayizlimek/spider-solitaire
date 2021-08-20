export const drawCards = (gameDeck, n) => {
  const drawnCards = gameDeck.slice(0, n);
  const retainedCardsWhenDrawnCards = gameDeck.slice(n);
  return [drawnCards, retainedCardsWhenDrawnCards];
};

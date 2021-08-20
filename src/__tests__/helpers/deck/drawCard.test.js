import { drawCards } from "../../../helpers/deck/drawCard";

describe("drawCards", () => {
  test("should return two array when the index comes, the first array is the cards to be daalt. The second array is the ramaining cards in the deck ", () => {
    const gameDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const index = 5;

    const result = drawCards(gameDeck, index);
    const [drawnCards, retainedCardsWhenDrawnCards] = result;

    const expectDrawnCards = [1, 2, 3, 4, 5];
    const expectRetainedCardsWhenDrawnCards = [6, 7, 8, 9, 10, 11, 12, 13];

    expect(drawnCards).toStrictEqual(expectDrawnCards);
    expect(retainedCardsWhenDrawnCards).toStrictEqual(
      expectRetainedCardsWhenDrawnCards
    );
  });
});

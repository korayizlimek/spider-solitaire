const PlayingCardNames = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const CountOfCard54 = [
  ...PlayingCardNames,
  ...PlayingCardNames,
  ...PlayingCardNames,
  ...PlayingCardNames,
];
const DeckOfCards = CountOfCard54;

const SolitairePlayWithTwoDeckOfCards = [...DeckOfCards, ...DeckOfCards];

const UnShuffledGameDeck = SolitairePlayWithTwoDeckOfCards.map(
  (name, index) => ({
    id: index,
    value: (index % 13) + 1,
    name,
    suit: "Spade",
    isOpen: false,
  })
);

export const getInitialDeck = UnShuffledGameDeck;

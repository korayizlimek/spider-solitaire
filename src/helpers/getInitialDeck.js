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

const CountOfCard54 = [].concat(
  PlayingCardNames,
  PlayingCardNames,
  PlayingCardNames,
  PlayingCardNames
);

const DeckOfCards = CountOfCard54;

const SolitairePlayWithTwoDeckOfCards = [].concat(DeckOfCards, DeckOfCards);

const UnShuffledGameDeck = SolitairePlayWithTwoDeckOfCards.map((name, i) => ({
  id: i,
  value: (i % 13) + 1,
  name,
  suit: "S",
  isOpen: false,
}));

export const getInitialDeck = UnShuffledGameDeck;

import { notify } from "./Toastify";

const NOTIFY_MESSAGE =
  "You can only put a card on another card if it is the next card in sequence. The order is : Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King !";

export const deleteCard = (
  didDrop,
  selectedCardSet,
  deleteCardInSlot,
  addScore
) => {
  if (didDrop === true) {
    selectedCardSet !== undefined && deleteCardInSlot(selectedCardSet.length);
    addScore(10, false);
  } else {
    notify(NOTIFY_MESSAGE);
  }
};

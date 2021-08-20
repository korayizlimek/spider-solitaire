import { closedAllCard } from "../card/cardControls";

export const openLastCardInSlot = (cards) => {
  if (cards.length > 0) {
    cards[cards.length - 1].isOpen = true;
  }
  return cards;
};

export const deleteDragItemInSlots = (index, slots) => {
  const newSlots = [...slots];
  newSlots[index].pop();
  openLastCardInSlot(newSlots[index]);
  return newSlots;
};

export const drawCardsToSlots = (INITIAL_SLOTS_CARD_COUNT, drawCards) => {
  const drawCardSet = drawCards(INITIAL_SLOTS_CARD_COUNT);
  const initialSlots = [
    firstFourSlotHasSixCard(drawCardSet),
    firstFourSlotHasSixCard(drawCardSet),
    firstFourSlotHasSixCard(drawCardSet),
    firstFourSlotHasSixCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
    lastSixSlotsHasFiveCard(drawCardSet),
  ];

  initialSlots.map((slots) => closedAllCard(slots));
  initialSlots.map((slots) => openLastCardInSlot(slots));
  return initialSlots;
};

export const firstFourSlotHasSixCard = (drawCardSet) => {
  return drawCardSet.splice(0, 6);
};

export const lastSixSlotsHasFiveCard = (drawCardSet) => {
  return drawCardSet.splice(0, 5);
};

export const DrawGiveNewCard = (
  NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK,
  drawCards,
  slots
) => {
  const drawCardSet = drawCards(NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK);

  const newSlots = slots.map((cards, index) => [
    ...cards,
    { ...drawCardSet[index], isOpen: true },
  ]);
  return newSlots;
};

import React, { useEffect, useState } from "react";
import Slot from "./Slot";

const INITIAL_SLOTS_CARD_COUNT = 54;
const NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK = 10;

const CardSlots = ({
  drawCards,
  giveNewCard,
  doneGiveNewCard,
  handleCompletedCardSetCount,
}) => {
  const [slots, setSlots] = useState([[], [], [], [], [], [], [], [], [], []]);

  useEffect(() => {
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
    initialSlots.map((slots) => openLastCardInSlot(slots));
    setSlots(initialSlots);
  }, []);

  useEffect(() => {
    if (giveNewCard) {
      DrawGiveNewCard();
      doneGiveNewCard();
    }
  }, [giveNewCard]);

  const DrawGiveNewCard = () => {
    const drawCardSet = drawCards(NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK);

    setSlots(
      slots.map((cards, index) => [
        ...cards,
        { ...drawCardSet[index], isOpen: true },
      ])
    );
  };

  const firstFourSlotHasSixCard = (drawCardSet) => {
    return drawCardSet.splice(0, 6);
  };

  const lastSixSlotsHasFiveCard = (drawCardSet) => {
    return drawCardSet.splice(0, 5);
  };

  const openLastCardInSlot = (cards) => {
    if (cards.length > 0) {
      cards[cards.length - 1].isOpen = true;
    }
    return cards;
  };

  const deleteDragItemInSlots = (index) => {
    const newSlots = [...slots];
    newSlots[index].pop();
    openLastCardInSlot(newSlots[index]);
    setSlots(newSlots);
  };

  return (
    <div className="card-slots">
      {slots.map((cardsInSlot, index) => (
        <Slot
          deleteDragItemInSlots={() => deleteDragItemInSlots(index)}
          key={index}
          cards={cardsInSlot}
          handleCompletedCardSetCount={handleCompletedCardSetCount}
        />
      ))}
    </div>
  );
};

export default CardSlots;

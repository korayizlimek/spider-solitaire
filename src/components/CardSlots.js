import React, { useEffect, useState } from "react";
import {
  deleteDragItemInSlots,
  drawCardsToSlots,
  DrawGiveNewCard,
} from "../helpers/slot/SlotControls";

import Slot from "./Slot";

const INITIAL_SLOTS_CARD_COUNT = 54;
const NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK = 10;

const CardSlots = ({
  drawCards,
  giveNewCard,
  doneGiveNewCard,
  handleCompletedCardSetCount,
  restart,
  addScore,
}) => {
  const [slots, setSlots] = useState([[], [], [], [], [], [], [], [], [], []]);

  useEffect(() => {
    const newSlots = drawCardsToSlots(INITIAL_SLOTS_CARD_COUNT, drawCards);
    setSlots(newSlots);
  }, [restart]);

  useEffect(() => {
    if (giveNewCard) {
      const newSlots = DrawGiveNewCard(
        NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK,
        drawCards,
        slots
      );
      setSlots(newSlots);
      doneGiveNewCard();
    }
  }, [giveNewCard]);

  const handleDeleteDragItemInSlots = (index) => {
    const newSlots = deleteDragItemInSlots(index, slots);
    setSlots(newSlots);
  };

  return (
    <div className="card-slots">
      {slots.map((cardsInSlot, index) => (
        <Slot
          deleteDragItemInSlots={() => handleDeleteDragItemInSlots(index)}
          key={index}
          cards={cardsInSlot}
          handleCompletedCardSetCount={handleCompletedCardSetCount}
          addScore={addScore}
        />
      ))}
    </div>
  );
};

export default CardSlots;

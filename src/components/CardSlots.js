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
    drawCardsToSlots(INITIAL_SLOTS_CARD_COUNT, setSlots, drawCards);
  }, [restart]);

  useEffect(() => {
    if (giveNewCard) {
      DrawGiveNewCard(
        NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK,
        drawCards,
        setSlots,
        slots
      );
      doneGiveNewCard();
    }
  }, [giveNewCard]);

  return (
    <div className="card-slots">
      {slots.map((cardsInSlot, index) => (
        <Slot
          deleteDragItemInSlots={() =>
            deleteDragItemInSlots(index, slots, setSlots)
          }
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

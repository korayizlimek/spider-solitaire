import React, { useEffect, useState } from "react";
import Slot from "./Slot";

const INITIAL_SLOTS_CARD_COUNT = 54;

const CardSlots = ({ drawCards }) => {
  const [slots, setSlots] = useState([[], [], [], [], [], [], [], [], [], []]);

  useEffect(() => {
    let drawnCards = drawCards(INITIAL_SLOTS_CARD_COUNT);

    const initialSlots = [
      firstFourSlotHasSixCard(drawnCards),
      firstFourSlotHasSixCard(drawnCards),
      firstFourSlotHasSixCard(drawnCards),
      firstFourSlotHasSixCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
      lastSixSlotsHasFiveCard(drawnCards),
    ];
    initialSlots.map((slots) => openLastCardInSlot(slots));
    setSlots(initialSlots);
  }, []);

  const firstFourSlotHasSixCard = (drawnCards) => {
    return drawnCards.splice(0, 6);
  };

  const lastSixSlotsHasFiveCard = (drawnCards) => {
    return drawnCards.splice(0, 5);
  };

  const openLastCardInSlot = (cards) => {
    if (cards.length > 0) {
      cards[cards.length - 1].isOpen = true;
    }
    return cards;
  };

  return (
    <div className="card-slots">
      {slots.map((slot, index) => (
        <Slot key={index} cards={slot} />
      ))}
    </div>
  );
};

export default CardSlots;

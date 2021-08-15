import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";

const Slot = ({ cards, selectedCardId, deleteDragItemInSlots }) => {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => addCardInSlot(item.card),
    canDrop: (item) => canDropRules(item.card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const canDropRules = (dragCard) => {
    const dragCardValue = dragCard.value;

    const cardsInSlot = cards;
    const lastCardInSlot = cardsInSlot[cards.length - 1];
    const lastCardInSlotValue = lastCardInSlot.value;
    const lastCardInSlotValuePlusOne = lastCardInSlotValue + 1;

    const isRulesCorrect = false;
    if (dragCardValue === lastCardInSlotValuePlusOne) {
      const isRulesCorrect = true;
      return isRulesCorrect;
    }
    return isRulesCorrect;
  };

  const addCardInSlot = (newCard) => {
    cards.push(newCard);
  };

  const deleteCardInSlot = () => {
    deleteDragItemInSlots();
  };

  const backgroundColor = isOver ? "pink" : "black";
  return (
    <box
      className="slot"
      style={{ backgroundColor: backgroundColor }}
      ref={dropRef}
    >
      {cards?.map((card, index) => (
        <Card
          deleteCardInSlot={deleteCardInSlot}
          key={card.id}
          card={card}
          order={index}
          cardSpan={20}
          selectedCardId={selectedCardId}
        />
      ))}
    </box>
  );
};

export default Slot;

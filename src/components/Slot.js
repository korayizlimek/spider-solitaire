import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";

const Slot = ({ cards, selectedCardId, deleteDragItemInSlots }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => addCardInSlot(item.card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addCardInSlot = (newCard) => {
    cards.push(newCard);
  };

  const deleteCardInSlot = () => {
    isOver && deleteDragItemInSlots();
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

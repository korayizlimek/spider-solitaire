import React from "react";
import { DndDrag } from "../helpers/DndControls";
import CardImage from "./CardImage";

const Card = ({
  card,
  order,
  selectedCardId,
  deleteCardInSlot,
  canSelectedCardSet,
  topOrderCount,
  addScore,
}) => {
  const selectedCardSet = canSelectedCardSet();

  const { isDragging, dragRef } = DndDrag(
    card,
    selectedCardSet,
    deleteCardInSlot,
    addScore
  );

  const oppacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={dragRef}
      className={`card ${card.id === selectedCardId ? " selected" : ""}`}
      style={{
        opacity: oppacity,
        zIndex: order,
        top: `${order * topOrderCount}vw`,
      }}
    >
      <CardImage card={card} />
    </div>
  );
};

export default Card;

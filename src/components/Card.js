import React from "react";
import { DndDrag } from "../helpers/dnd/DndControls";
import CardImage from "./CardImage";

const ONE_CARD_HEIGHT_VW = 7;

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

  const oppacity = isDragging ? 0.7 : 1;
  const SelectedCardSetMinusSelectCardLength = selectedCardSet?.length - 1;

  return (
    <div
      ref={dragRef}
      className={`card ${isDragging && "selected"}`}
      style={{
        opacity: oppacity,
        top: `${order * topOrderCount}vw`,
        height: `${
          ONE_CARD_HEIGHT_VW +
          SelectedCardSetMinusSelectCardLength * topOrderCount
        }vw`,
      }}
    >
      <CardImage card={card} />
    </div>
  );
};

export default Card;

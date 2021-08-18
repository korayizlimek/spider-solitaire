import React, { useEffect } from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { cardRules, isRulesCorrectCardSet } from "../helpers/cardRules";
import { canDropRules } from "../helpers/dropRules";
import {
  canSelectedCardSet,
  isOneCardSetCompleted,
} from "../helpers/cartControls";
// import { addCardInSlot } from "../helpers/addCard";
import { deleteCardInSlot } from "../helpers/SlotControls";
import { DndDrop } from "../helpers/DndControls";
import { useState } from "react";

const Slot = ({
  cards,
  selectedCardId,
  deleteDragItemInSlots,
  handleCompletedCardSetCount,
  addScore,
}) => {
  const [isAddCard, setIsAddCard] = useState(false);
  const { dropRef } = DndDrop(cards, setIsAddCard);

  useEffect(() => {
    if (isAddCard === true) {
      isOneCardSetCompleted(
        cards,
        deleteCardInSlot,
        handleCompletedCardSetCount
      );

      setIsAddCard(false);
    }
  }, [isAddCard]);

  const deleteCardInSlot = (index) => {
    const deleteItemCount = index;
    [...Array(deleteItemCount)].forEach(() => deleteDragItemInSlots(index));
  };

  const handleTopOrderCount = () => {
    let topOrderCount = cards.length > 10 ? 1.5 : 2;
    if (cards.length < 10) {
      topOrderCount = 2;
    } else if (cards.length < 15) {
      topOrderCount = 1.65;
    } else {
      topOrderCount = 1.3;
    }
    return topOrderCount;
  };

  return (
    <div className="slot" ref={dropRef}>
      <div className="slot-card">
        {cards?.map((card, index) => (
          <Card
            deleteCardInSlot={deleteCardInSlot}
            canSelectedCardSet={() => canSelectedCardSet(index, cards)}
            key={card.id}
            card={card}
            order={index}
            selectedCardId={selectedCardId}
            topOrderCount={handleTopOrderCount()}
            addScore={addScore}
          />
        ))}
      </div>
    </div>
  );
};

export default Slot;

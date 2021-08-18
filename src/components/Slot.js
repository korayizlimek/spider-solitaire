import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { cardRules, isRulesCorrectCardSet } from "../helpers/cardRules";
import { canDropRules } from "../helpers/dropRules";
import { deleteCardInSlot } from "../helpers/deleteCard";
import {
  canSelectedCardSet,
  isOneCardSetCompleted,
} from "../helpers/cartControls";
import { addCardInSlot } from "../helpers/addCard";

const Slot = ({
  cards,
  selectedCardId,
  deleteDragItemInSlots,
  handleCompletedCardSetCount,
  addScore,
}) => {
  const [{ isOver, canDrop, didDrob }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => addCardInSlot(item.selectedCardSet, cards),
    canDrop: (item) => canDropRules(item.card, cards),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      didDrob: !!monitor.didDrop(),
    }),
  });

  // const addCardInSlot = (selectedCardSet) => {
  //   selectedCardSet?.forEach((card) => {
  //     cards.push(card);
  //   });

  //!
  //   isOneCardSetCompleted(cards, deleteCardInSlot, handleCompletedCardSetCount);
  // };

  const deleteCardInSlot = (index) => {
    const deleteItemCount = index;
    [...Array(deleteItemCount)].forEach(() => deleteDragItemInSlots());
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

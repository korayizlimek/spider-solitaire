import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";

const Slot = ({
  cards,
  selectedCardId,
  deleteDragItemInSlots,
  handleCompletedCardSetCount,
  addScore,
}) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => addCardInSlot(item.selectedCardSet),
    canDrop: (item) => canDropRules(item.card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const canDropRules = (dragCard) => {
    const dragCardValue = dragCard.value;
    const cardsInSlot = cards;

    const isThereCardsInSlot = cardsInSlot.length;
    if (isThereCardsInSlot > 0) {
      const lastCardInSlot = cardsInSlot[cards.length - 1];
      const lastCardInSlotValue = lastCardInSlot.value;

      const isRulesCorrect = cardRules(lastCardInSlotValue, dragCardValue);
      return isRulesCorrect;
    } else {
      return true;
    }
  };

  const cardRules = (element, childElement) => {
    const elementPlusOne = element + 1;

    const isRulesCorrect = false;
    if (elementPlusOne === childElement) {
      const isRulesCorrect = true;
      return isRulesCorrect;
    } else {
      return isRulesCorrect;
    }
  };

  const canSelectedCardSet = (index) => {
    const selectedCardSet = cards.slice(index, cards.length);
    const isRulesCorrect = isRulesCorrectCardSet(selectedCardSet);
    if (isRulesCorrect) {
      return selectedCardSet;
    }
  };

  const isRulesCorrectCardSet = (selectedCardSet) => {
    if (selectedCardSet.length === 1) {
      const canBeDrag = true;
      return canBeDrag;
    } else {
      for (let i = 0; i < selectedCardSet.length - 1; i++) {
        const element = selectedCardSet[i];
        const elementValue = element.value;

        const childElement = selectedCardSet[i + 1];
        const childElementValue = childElement.value;

        const isRulesCorrect = cardRules(elementValue, childElementValue);
        if (isRulesCorrect === false) {
          const canBeDrag = false;
          return canBeDrag;
        }
      }
      const canBeDrag = true;
      return canBeDrag;
    }
  };

  const addCardInSlot = (selectedCardSet) => {
    selectedCardSet?.forEach((card) => {
      cards.push(card);
    });

    isOneCardSetCompleted();
  };

  const isOneCardSetCompleted = () => {
    const oneCardSet = 13;
    if (cards.length >= oneCardSet) {
      const last13CardInSlot = cards.slice(oneCardSet * -1);
      const isRulesCorrect = isRulesCorrectCardSet(last13CardInSlot);
      if (isRulesCorrect) {
        deleteCardInSlot(oneCardSet);
        handleCompletedCardSetCount();
      }
    }
  };

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
            canSelectedCardSet={() => canSelectedCardSet(index)}
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

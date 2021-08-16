import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";

const Slot = ({
  cards,
  selectedCardId,
  deleteDragItemInSlots,
  handleCompletedCardSetCount,
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
      const canBeDropped = true;
      return canBeDropped;
    } else {
      for (let i = 0; i < selectedCardSet.length - 1; i++) {
        const element = selectedCardSet[i];
        const elementValue = element.value;

        const childElement = selectedCardSet[i + 1];
        const childElementValue = childElement.value;

        const isRulesCorrect = cardRules(elementValue, childElementValue);
        if (isRulesCorrect === false) {
          const canBeDropped = false;
          return canBeDropped;
        }
      }
      const canBeDropped = true;
      return canBeDropped;
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
    console.log("index", index);
    const deleteItemCount = index;
    [...Array(deleteItemCount)].forEach(() => deleteDragItemInSlots());
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
            cardSpan={20}
            selectedCardId={selectedCardId}
          />
        ))}
      </div>
    </div>
  );
};

export default Slot;

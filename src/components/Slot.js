import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";

const Slot = ({ cards, selectedCardId, deleteDragItemInSlots }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    // drop: (item) => addCardInSlot(item.card),
    drop: (item) => addCardInSlot(item),
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

    const isRulesCorrect = cardRules(lastCardInSlotValue, dragCardValue);
    return isRulesCorrect;
  };

  const cardRules = (element, childElement) => {
    const elementPlusOne = element + 1;

    const isRulesCorrect = false;
    if (elementPlusOne === childElement) {
      const isRulesCorrect = true;
      return isRulesCorrect;
    }
    return isRulesCorrect;
  };

  const canSelectedCardSet = (index) => {
    const selectedCardSet = cards.slice(index, cards.length);

    if (selectedCardSet.length >= 2) {
      for (let i = 0; i < selectedCardSet.length - 1; i++) {
        const element = selectedCardSet[i];
        const elementValue = element.value;

        const childElement = selectedCardSet[i + 1];
        const childElementValue = childElement.value;

        const isRulesCorrect = cardRules(elementValue, childElementValue);
        if (isRulesCorrect === false) {
          return false;
        }
      }
      return true;
    }
  };

  const addCardInSlot = (newCard) => {
    console.log(newCard);
    // cards.push(newCard);
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
          canSelectedCardSet={() => canSelectedCardSet(index)}
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

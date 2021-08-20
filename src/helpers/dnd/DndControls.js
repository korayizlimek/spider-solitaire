import { useDrag, useDrop } from "react-dnd";
import { addCardInSlot } from "../slot/addCard";
import { deleteCard } from "../slot/deleteCard";
import { canDropRules } from "./dropRules";

export const DndDrop = (cards, setIsAddCard) => {
  const [{ isOver, canDrop, drop }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => dropFunction(item.selectedCardSet, cards, setIsAddCard),
    canDrop: (item) => canDropRules(item.card, cards),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      didDrop: !!monitor.didDrop(),
    }),
  });
  return { dropRef };
};

export const dropFunction = (selectedCardSet, cards, setIsAddCard) => {
  addCardInSlot(selectedCardSet, cards, setIsAddCard);
  setIsAddCard(true);
};

export const DndDrag = (card, selectedCardSet, deleteCardInSlot, addScore) => {
  const [{ isDragging, didDrop }, dragRef] = useDrag({
    item: {
      card,
      selectedCardSet,
    },
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      didDrop: !!monitor.didDrop(),
    }),
    end: (item) => {
      deleteCard(didDrop, item.selectedCardSet, deleteCardInSlot, addScore);
    },
  });
  return { isDragging, dragRef };
};

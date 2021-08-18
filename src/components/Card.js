import React from "react";
import { useDrag } from "react-dnd";

import { notify } from "../helpers/Toastify";

import { deleteCard } from "../helpers/deleteCard";
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

  const [{ isDragging, didDrob }, dragRef] = useDrag({
    item: {
      card,
      selectedCardSet,
    },
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      didDrob: !!monitor.didDrop(),
    }),
    end: (item) => {
      deleteCard(didDrob, item.selectedCardSet, deleteCardInSlot);
    },
  });

  const oppacity = isDragging ? 0.5 : 1;

  // console.log(didDrob, isDragging);
  // if (isDragging) {
  //   didDrob
  //     ? addScore(10, false)
  //     : notify(
  //         "You can only put a card on another card if it is the next card in sequence. The order is : Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King !"
  //       );
  // }

  // const isCardDelete = () =>
  //   deleteCard(didDrob, selectedCardSet, deleteCardInSlot);

  // const deleteCard = (selectedCardSet) => {
  //   if (didDrob === true) {
  //     selectedCardSet !== undefined && deleteCardInSlot(selectedCardSet.length);
  //     addScore(10, false); //!
  //   } else {
  //     notify( //!
  //       "You can only put a card on another card if it is the next card in sequence. The order is : Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King !"
  //     );
  //   }
  // };

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

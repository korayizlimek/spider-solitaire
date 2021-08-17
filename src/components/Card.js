import React from "react";

import SpadeA from "../assets/images/spades/spades_01.png";
import Spade2 from "../assets/images/spades/spades_02.png";
import Spade3 from "../assets/images/spades/spades_03.png";
import Spade4 from "../assets/images/spades/spades_04.png";
import Spade5 from "../assets/images/spades/spades_05.png";
import Spade6 from "../assets/images/spades/spades_06.png";
import Spade7 from "../assets/images/spades/spades_07.png";
import Spade8 from "../assets/images/spades/spades_08.png";
import Spade9 from "../assets/images/spades/spades_09.png";
import Spade10 from "../assets/images/spades/spades_10.png";
import SpadeJ from "../assets/images/spades/spades_11.png";
import SpadeQ from "../assets/images/spades/spades_12.png";
import SpadeK from "../assets/images/spades/spades_13.png";
import cardBeck from "../assets/images/card_back.png";

import { useDrag } from "react-dnd";

const TOP_ORDER_HEIGHT_COUNT = 2;

const Card = ({
  card,
  order,
  selectedCardId,
  deleteCardInSlot,
  canSelectedCardSet,
}) => {
  const { name, suit, isOpen } = card;

  const cardImages = {
    SpadeA,
    Spade2,
    Spade3,
    Spade4,
    Spade5,
    Spade6,
    Spade7,
    Spade8,
    Spade9,
    Spade10,
    SpadeJ,
    SpadeQ,
    SpadeK,
  };

  const cardImage = cardImages[`${suit}${name}`];

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
      deleteCard(item.selectedCardSet);
    },
  });

  const oppacity = isDragging ? 0.5 : 1;

  const deleteCard = (selectedCardSet) => {
    didDrob &&
      selectedCardSet !== undefined &&
      deleteCardInSlot(selectedCardSet.length);
  };

  return (
    <div
      ref={dragRef}
      className={`card ${card.id === selectedCardId ? " selected" : ""}`}
      style={{
        opacity: oppacity,
        zIndex: order,
        top: `${order * TOP_ORDER_HEIGHT_COUNT}vw`,
      }}
    >
      {isOpen ? (
        <img className="card-img" src={cardImage} alt={cardImage} />
      ) : (
        <img className="card-img" src={cardBeck} alt={cardBeck} />
      )}
    </div>
  );
};

export default Card;

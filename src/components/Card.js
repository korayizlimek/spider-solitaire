import React from "react";

import SA from "../assets/spades/spades_01.png";
import S2 from "../assets/spades/spades_02.png";
import S3 from "../assets/spades/spades_03.png";
import S4 from "../assets/spades/spades_04.png";
import S5 from "../assets/spades/spades_05.png";
import S6 from "../assets/spades/spades_06.png";
import S7 from "../assets/spades/spades_07.png";
import S8 from "../assets/spades/spades_08.png";
import S9 from "../assets/spades/spades_09.png";
import S10 from "../assets/spades/spades_10.png";
import SJ from "../assets/spades/spades_11.png";
import SQ from "../assets/spades/spades_12.png";
import SK from "../assets/spades/spades_13.png";
import cardBeck from "../assets/spades/card_back.png";

const Card = ({ card, order, cardSpan, selectedCardId }) => {
  const { name, isOpen, suit } = card;
  const cardSrc = suit + name;
  return (
    <div
      className={`card ${card.id === selectedCardId ? " selected" : ""}`}
      style={{
        zIndex: order,
        top: order * cardSpan,
        left: order,
        backgroundColor: isOpen ? "white" : "gray",
      }}
    >
      {isOpen ? (
        <img className="card-img" src={SK} alt={cardSrc} />
      ) : (
        <img className="card-img" src={cardBeck} alt={cardBeck} />
      )}
    </div>
  );
};

export default Card;

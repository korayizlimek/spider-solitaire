import React from "react";
import cardBack from "../assets/spades/card_back.png";

const CardDeck = () => {
  return (
    <div className="cardDeck">
      <img className="cardDeck-card card" src={cardBack} alt="new cart" />
      <img className="cardDeck-card card" src={cardBack} alt="new cart" />
      <img className=" cardDeck-card card" src={cardBack} alt="new cart" />
      <img className="cardDeck-card card" src={cardBack} alt="new cart" />
      <img className="cardDeck-card card" src={cardBack} alt="new cart" />
    </div>
  );
};

export default CardDeck;

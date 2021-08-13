import { Card } from "@material-ui/core";
import React from "react";
import ClosedCard from "./ClosedCard";

const CLOSED_CARD_SET = 5;

const CardDealer = ({ gameDeck }) => {
  const retainedCardsInDeck = gameDeck.length / 10;

  return (
    <div className="cardDealer">
      {retainedCardsInDeck &&
        [...Array(CLOSED_CARD_SET)].map(() => <ClosedCard />)}
    </div>
  );
};

export default CardDealer;

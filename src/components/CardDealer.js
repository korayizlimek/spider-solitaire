import React, { useState } from "react";
import ClosedCard from "./ClosedCard";

const CLOSED_CARD_SET = 5;

const CardDealer = ({ giveNewCardWhenCardDealerOnClick }) => {
  const [closedCardSet, setClosedCardSet] = useState(CLOSED_CARD_SET);

  const handleOnClick = () => {
    const ClosedCartSetCount = closedCardSet - 1;
    setClosedCardSet(ClosedCartSetCount);
    giveNewCardWhenCardDealerOnClick();
  };

  return (
    <div className="cardDealer" onClick={handleOnClick}>
      {[...Array(closedCardSet)].map(() => (
        <ClosedCard />
      ))}
    </div>
  );
};

export default CardDealer;

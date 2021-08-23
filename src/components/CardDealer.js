import React, { useEffect, useState } from "react";
import ClosedCard from "./ClosedCard";
import _ from "lodash";

const CLOSED_CARD_SET = 5;

const CardDealer = ({ giveNewCardWhenCardDealerOnClick, restart }) => {
  const [closedCardSet, setClosedCardSet] = useState(CLOSED_CARD_SET);

  const handleOnClick = () => {
    const ClosedCartSetCount = closedCardSet - 1;
    setClosedCardSet(ClosedCartSetCount);
    giveNewCardWhenCardDealerOnClick();
  };

  useEffect(() => {
    setClosedCardSet(CLOSED_CARD_SET);
  }, [restart]);

  return (
    <div className="cardDealer" onClick={handleOnClick}>
      {_.times(closedCardSet, (index) => (
        <ClosedCard key={index} />
      ))}
    </div>
  );
};

export default CardDealer;

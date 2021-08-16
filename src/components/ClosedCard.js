import React from "react";
import cardBacks from "../assets/images/card_back.png";

const ClosedCard = () => {
  return (
    <div className="closed-card">
      <img className="cards" src={cardBacks} alt="cardBacks" />
    </div>
  );
};

export default ClosedCard;

import React from "react";
import cardBack from "../assets/svg/images/Card_back.svg";

const ClosedCard = () => {
  return (
    <div className="closed-card">
      <img className="cards" src={cardBack} alt="cardBack" />
    </div>
  );
};

export default ClosedCard;

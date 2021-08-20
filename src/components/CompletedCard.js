import React from "react";
import SpadesA from "../assets/images/spades/SpadeA.jpg";

const CompletedCard = ({ slot }) => {
  return slot === true ? (
    <div className="completed-card active">
      <img src={SpadesA} alt={SpadesA}></img>
    </div>
  ) : (
    <div className="completed-card"></div>
  );
};

export default CompletedCard;

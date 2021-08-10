import React from "react";
import image1 from "../assets/spades/spades_01.png";

const CardCompleted = () => {
  return (
    <div className="cardCompleted">
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
      <img className="card" src={image1} alt="completed" />
    </div>
  );
};

export default CardCompleted;

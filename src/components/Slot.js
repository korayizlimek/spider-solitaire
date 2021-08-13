import React from "react";
import Card from "./Card";

const Slot = ({ cards, selectedCardId }) => {
  return (
    <div className="slot">
      {cards?.map((card, index) => (
        <Card
          card={card}
          order={index}
          cardSpan={20}
          // selectedCardId={selectedCardId}
        />
      ))}
    </div>
  );
};

export default Slot;

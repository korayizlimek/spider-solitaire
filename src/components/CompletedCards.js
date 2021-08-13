import CompletedCard from "./CompletedCard";
import { useState } from "react";

const COMPLETED_CARD_SLOTS = 8;

const CompletedCards = () => {
  const [CompeletedSlots, setCompletedSlots] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  return (
    <div className="completed-cards">
      {CompeletedSlots.map((card, index) => (
        <CompletedCard key={index} />
      ))}
    </div>
  );
};

export default CompletedCards;

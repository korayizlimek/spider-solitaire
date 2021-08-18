import CompletedCard from "./CompletedCard";
import React, { useEffect, useState } from "react";

const COMPLETED_CARD_SLOTS = 8;

const CompletedCards = ({ completedCardSetCount }) => {
  const [compeletedSlots, setCompletedSlots] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  useEffect(() => {
    if (completedCardSetCount > 0 && completedCardSetCount <= 8) {
      const copyCompletedSlots = [...compeletedSlots];
      const index = completedCardSetCount - 1;
      const copyCompleteSlot = copyCompletedSlots[index];

      copyCompleteSlot.push(true);

      setCompletedSlots(copyCompletedSlots);
    }
  }, [completedCardSetCount]);

  return (
    <div className="completed-cards">
      {compeletedSlots.map((card, index) => (
        <CompletedCard card={card} key={index} />
      ))}
    </div>
  );
};

export default CompletedCards;

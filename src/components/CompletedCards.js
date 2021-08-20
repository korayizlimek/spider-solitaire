import CompletedCard from "./CompletedCard";
import React, { useEffect, useState } from "react";

const COMPLETED_CARD_SLOT_COUNT = 8;

const CompletedCards = ({ completedCardSetCount, restart }) => {
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
    if (
      completedCardSetCount > 0 &&
      completedCardSetCount <= COMPLETED_CARD_SLOT_COUNT
    ) {
      const copyCompletedSlots = [...compeletedSlots];
      const index = completedCardSetCount - 1;

      copyCompletedSlots[index] = true;

      setCompletedSlots(copyCompletedSlots);
    }
  }, [completedCardSetCount]);

  useEffect(() => {
    const newCompletedSlots = compeletedSlots.map((slot) => {
      return false;
    });
    setCompletedSlots(newCompletedSlots);
  }, [restart]);

  return (
    <div className="completed-cards">
      {compeletedSlots.map((slot, index) => (
        <CompletedCard slot={slot} key={index} />
      ))}
    </div>
  );
};

export default CompletedCards;

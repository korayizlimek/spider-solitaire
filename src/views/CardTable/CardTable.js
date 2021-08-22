import React, { useEffect, useState } from "react";
import CardSlots from "../../components/CardSlots";
import CardDealer from "../../components/CardDealer";
import CompletedCards from "../../components/CompletedCards";

import { shuffle } from "../../helpers/deck/shuffle";
import { getInitialDeck } from "../../helpers/deck/getInitialDeck";
import { drawCards } from "../../helpers/deck/drawCard";
const unShuffledDeck = getInitialDeck;

const COMPLETE_CARD_COUNT_FOR_GAME_OVER = 8;
const INITIAL_COMPLETE_SLOTS = 0;

const CardTable = ({ restart, addScore, runGameOver }) => {
  const shuffedDeck = () => shuffle(unShuffledDeck);

  const [gameDeck, setGameDeck] = useState(shuffedDeck);
  const [giveNewCard, setGiveNewCard] = useState(false);
  const [completedCardSetCount, setCompletedCardSetCount] = useState(
    INITIAL_COMPLETE_SLOTS
  );
  const [restartCardSlots, setRestartCardSlots] = useState(false);

  useEffect(() => {
    if (completedCardSetCount === COMPLETE_CARD_COUNT_FOR_GAME_OVER) {
      runGameOver();
    }
  }, [completedCardSetCount]);

  useEffect(() => {
    setGameDeck(shuffedDeck);
    setCompletedCardSetCount(INITIAL_COMPLETE_SLOTS);
    handleRestartCardSlots();
  }, [restart]);

  const handleDrawCards = (n) => {
    const [drawnCards, retainedCardsWhenDrawnCards] = drawCards(gameDeck, n);
    setGameDeck(retainedCardsWhenDrawnCards);

    return drawnCards;
  };

  const giveNewCardWhenCardDealerOnClick = () => {
    setGiveNewCard(true);
    addScore(50, false);
  };

  const doneGiveNewCard = () => {
    setGiveNewCard(false);
  };

  const handleCompletedCardSetCount = () => {
    setCompletedCardSetCount(completedCardSetCount + 1);
    addScore(500, true);
  };

  const handleRestartCardSlots = () => {
    setRestartCardSlots(!restartCardSlots);
  };

  return (
    <div className="game-table">
      <div className="game-table-top">
        <div className="game-table-top-card-dealer">
          <CardDealer
            giveNewCardWhenCardDealerOnClick={giveNewCardWhenCardDealerOnClick}
            restart={restart}
          />
        </div>
        <div className="game-table-top-completed-cards">
          <CompletedCards
            completedCardSetCount={completedCardSetCount}
            restart={restart}
          />
        </div>
        <button onClick={() => handleCompletedCardSetCount()}>HACK</button>
      </div>
      <div className="game-table-bottom">
        <CardSlots
          restartCardSlots={restartCardSlots}
          drawCards={handleDrawCards}
          giveNewCard={giveNewCard}
          doneGiveNewCard={doneGiveNewCard}
          handleCompletedCardSetCount={handleCompletedCardSetCount}
          addScore={addScore}
        />
      </div>
    </div>
  );
};

export default CardTable;

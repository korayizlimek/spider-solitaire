import React, { useEffect, useState } from "react";
import CardSlots from "../../components/CardSlots";
import CardDealer from "../../components/CardDealer";
import CompletedCards from "../../components/CompletedCards";

import { shuffle } from "../../helpers/deck/shuffle";
import { getInitialDeck } from "../../helpers/deck/getInitialDeck";
import { drawCards } from "../../helpers/deck/drawCard";
const unShuffledDeck = getInitialDeck;

const COMPLETE_CARD_COUNT_FOR_GAME_OVER = 8;

const CardTable = ({ restart, addScore, runGameOver }) => {
  const shuffedDeck = () => shuffle(unShuffledDeck);

  const [gameDeck, setGameDeck] = useState(shuffedDeck);
  const [giveNewCard, setGiveNewCard] = useState(false);
  const [completedCardSetCount, setCompletedCardSetCount] = useState(0);

  useEffect(() => {
    if (completedCardSetCount === COMPLETE_CARD_COUNT_FOR_GAME_OVER) {
      runGameOver();
    }
  }, [completedCardSetCount]);

  useEffect(() => {
    setGameDeck(shuffedDeck);
  }, [restart]);

  // useEffect(()=> {

  // },[drawn])

  // const handleDrawCards = (n) => {
  //   const { drawnCards, retainedCardsWhenDrawnCards } = drawCard(gameDeck, n);
  //   setGameDeck(retainedCardsWhenDrawnCards);
  //   return drawnCards;
  // };

  const drawCards = (n) => {
    const drawnCards = gameDeck.slice(0, n);
    const retainedCardsWhenDrawnCards = gameDeck.slice(n);
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

  return (
    <div className="game-table">
      <div className="game-table-top">
        <button onClick={() => handleCompletedCardSetCount()}>HACK</button>
        <div className="game-table-top-card-dealer">
          <CardDealer
            giveNewCardWhenCardDealerOnClick={giveNewCardWhenCardDealerOnClick}
            restart={restart}
          />
        </div>
        <div className="game-table-top-completed-cards">
          <CompletedCards completedCardSetCount={completedCardSetCount} />
        </div>
      </div>
      <div className="game-table-bottom">
        <CardSlots
          restart={restart}
          drawCards={drawCards}
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

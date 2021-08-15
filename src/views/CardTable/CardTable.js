import React, { useState } from "react";
import CardSlots from "../../components/CardSlots";
import CardDealer from "../../components/CardDealer";
import CompletedCards from "../../components/CompletedCards";

import { shuffle } from "../../helpers/shuffle";
import { getInitialDeck } from "../../helpers/getInitialDeck";

const unShuffledDeck = getInitialDeck;
const shuffedDeck = shuffle(unShuffledDeck);

const CardTable = () => {
  const [gameDeck, setGameDeck] = useState(shuffedDeck);
  const [giveNewCard, setGiveNewCard] = useState(false);

  const drawCards = (n) => {
    const drawnCards = gameDeck.slice(0, n);
    const retainedCardsWhenDrawnCards = gameDeck.slice(n);
    setGameDeck(retainedCardsWhenDrawnCards);
    return drawnCards;
  };

  const giveNewCardWhenCardDealerOnClick = () => {
    setGiveNewCard(true);
  };
  const doneGiveNewCard = () => {
    setGiveNewCard(false);
  };

  return (
    <div className="game-table">
      <div className="game-table-top">
        <div className="game-table-top-card-dealer">
          <CardDealer
            giveNewCardWhenCardDealerOnClick={giveNewCardWhenCardDealerOnClick}
          />
        </div>
        <div className="game-table-top-completed-cards">
          <CompletedCards />
        </div>
      </div>
      <div className="game-table-bottoms">
        <CardSlots
          drawCards={drawCards}
          giveNewCard={giveNewCard}
          doneGiveNewCard={doneGiveNewCard}
        />
      </div>
    </div>
  );
};

export default CardTable;

import React from "react";
import CardCompleted from "../../components/CardCompleted";
import CardDeck from "../../components/CardDeck";
import CardSlots from "../../components/CardSlots";

const Home = () => {
  return (
    <div className="home">
      <div className="game-sections">
        <div className="game-sections-deck">
          <CardDeck />
        </div>
        <div className="game-sections-completed">
          <CardCompleted />
        </div>
        <div className="game-sections-slots">
          <CardSlots />
        </div>
      </div>
    </div>
  );
};

export default Home;

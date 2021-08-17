import React from "react";
import CardTable from "../CardTable/CardTable";
import Leadership from "../Leadership/Leadership";

const Section = ({ restart, score, addScore, gameOver, runGameOver }) => {
  return (
    <div>
      {gameOver ? (
        <Leadership score={score} />
      ) : (
        <CardTable
          restart={restart}
          addScore={addScore}
          runGameOver={runGameOver}
        />
      )}
    </div>
  );
};

export default Section;

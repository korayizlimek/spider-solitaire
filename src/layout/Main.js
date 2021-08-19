import React from "react";
import CardTable from "../views/CardTable/CardTable";
import Leadership from "../views/Leadership/Leadership";

const Main = ({ restart, score, addScore, gameOver, runGameOver }) => {
  return (
    <main className="main-section">
      {gameOver ? (
        <Leadership score={score} />
      ) : (
        <CardTable
          restart={restart}
          addScore={addScore}
          runGameOver={runGameOver}
        />
      )}
    </main>
  );
};

export default Main;

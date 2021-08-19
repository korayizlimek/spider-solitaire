import React, { useState } from "react";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const INITIAL_GAME_SCORE = 1000;

function App() {
  const [restart, setRestart] = useState(false);
  const [score, setScore] = useState(INITIAL_GAME_SCORE);
  const [gameOver, setGameOver] = useState(false);

  const pressRestart = () => {
    setRestart(!restart);
    setGameOver(false);
    setScore(INITIAL_GAME_SCORE);
  };

  const addScore = (point, didWin) => {
    didWin ? setScore(score + point) : setScore(score - point);
  };

  const runGameOver = () => {
    setGameOver(true);
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Header
          pressRestart={pressRestart}
          restart={restart}
          score={score}
          gameOver={gameOver}
        />
        <Main
          restart={restart}
          score={score}
          addScore={addScore}
          gameOver={gameOver}
          runGameOver={runGameOver}
        />
        <Footer />
      </DndProvider>
    </div>
  );
}

export default App;

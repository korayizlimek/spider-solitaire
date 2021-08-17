import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CardTable from "./views/CardTable/CardTable";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const [restart, setRestart] = useState(false);
  const [score, setScore] = useState(1000);

  const pressRestart = () => {
    setRestart(!restart);
  };

  const addScore = (point, didWin) => {
    didWin ? setScore(score + point) : setScore(score - point);
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Switch>
            <Route path="/">
              <Header pressRestart={pressRestart} score={score} />
              <CardTable restart={restart} addScore={addScore} />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;

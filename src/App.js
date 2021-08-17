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

  const pressRestart = () => {
    setRestart(!restart);
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Switch>
            <Route path="/">
              <Header pressRestart={pressRestart} />
              <CardTable restart={restart} />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;

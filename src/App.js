import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CardTable from "./views/home/CardTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <CardTable />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

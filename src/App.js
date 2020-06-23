import React from "react";
import Home from "./components/Home";
import "./components/App.css";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";

function App() {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex" component={Pokedex} />
      </Switch>
    </div>
  );
}

export default App;

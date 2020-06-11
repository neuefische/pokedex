import React from "react";
import Home from "./components/Home";
import "./components/App.css";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Navigation from "./components/Navigation";

function App() {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      {pathname === "/" && <Home />}
      {pathname === "/pokedex" && <Pokedex />}
    </div>
  );
}

export default App;

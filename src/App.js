import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Grid>
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex" component={() => <Pokedex apiUrl="https://pokeapi.co/api/v2/pokemon?limit=100" />} />
      </Switch>
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`;

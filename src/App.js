import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
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

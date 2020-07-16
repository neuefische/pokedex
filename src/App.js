import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/loginContext'
import firebaseApp from './firebase'
import UserBar from './components/auth/UserBar'
import UserFavList from './components/UserFavList'

function App() {
  const user = useAuth()

  return (
    <LoginContext.Provider value={{ user, firebaseApp }}>
      <Grid>
        <Header>
          <Navigation />
          <UserBar />
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/favlist" component={UserFavList} />
          <Route path="/pokedex" component={() => <Pokedex apiUrl="https://pokeapi.co/api/v2/pokemon?limit=100" />} />
        </Switch>
      </Grid>
    </LoginContext.Provider>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`;

import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export default function PokedexNavigation({ pokemon, onClick }) {
  return (
    <PokedexListButton data-testid="navigation-button"
      to={`/pokedex/${pokemon.name}`}
      onClick={onClick}
    >
      {pokemon.name}
    </PokedexListButton>
  )
}

const PokedexListButton = styled(NavLink)`
  display: block;
  margin: 5px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  color: white;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    35deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(128, 0, 0, 1) 100%
  );
  border: 0.5px solid rgba(128, 0, 0, 1);
  border-radius: 5px;

  &:hover,
  &.active {
    color: rgba(128, 0, 0, 1);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      124deg,
      rgba(255, 255, 255, 1) 55%,
      rgba(212, 212, 212, 1) 100%
    );
    border: 0.5px solid rgba(128, 0, 0, 1);
    border-radius: 5px;
  }
`;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function selectPokemon(pokemon) {
    fetch(`${pokemon.url}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonDetail(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <PokedexContainer>
      <PokedexList>
        <PokedexListHeadline>Select your Pokemon:</PokedexListHeadline>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <PokedexListButton
              to={`/pokedex/${pokemon.name}`}
              onClick={() => selectPokemon(pokemon)}
            >
              {pokemon.name}
            </PokedexListButton>
          </li>
        ))}
      </PokedexList>

      <PokedexDetail>
        <div>
          {pokemonDetail ? (
            <>
              <p>{pokemonDetail.name}</p>
              <img
                alt={pokemonDetail.name}
                src={pokemonDetail.sprites.front_default}
              />
            </>
          ) : (
            <p>
              No Pokemon to show, please select one from the list to display!
            </p>
          )}
        </div>
      </PokedexDetail>
    </PokedexContainer>
  );
}

const PokedexContainer = styled.main`
  display: grid;
  grid-template-columns: 250px auto;
  overflow: scroll;
`;

const PokedexList = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0 20px;
  overflow: scroll;
  width: 250px;
  list-style: none;
  border-right: 1px solid rgba(128, 0, 0, 1);
`;

const PokedexListHeadline = styled.p`
  color: rgba(128, 0, 0, 1);
  position: sticky;
  top: 0;
  font-size: 16px;
  width: 250px;
  height: 50px;
  padding: 16px;
  margin: 0;
  background: white;
`;

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

const PokedexDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      124deg,
      rgba(255, 255, 255, 1) 55%,
      rgba(212, 212, 212, 1) 100%
    );
    border-radius: 50%;
    border: 5px outset rgba(128, 0, 0, 1);

    p {
      text-align: center;
      width: 200px;
      color: rgba(128, 0, 0, 1);
      font-size: 18px;
    }
  }
`;

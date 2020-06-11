import React, { useState, useEffect } from "react";
import "./Pokedex.css";

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
    <div className="Pokedex--container">
      <ul className="Pokedex--list">
        <p className="Pokedex--list__headline">Select your Pokemon:</p>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <button
              className="Pokedex--list__button active"
              onClick={() => selectPokemon(pokemon)}
            >
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {pokemonDetail ? (
        <div className="Pokedex--detail">
          <div className="Pokedex--detail__pokemon">
            <p>{pokemonDetail.name}</p>
            <img
              alt={pokemonDetail.name}
              src={pokemonDetail.sprites.front_default}
            />
          </div>
        </div>
      ) : (
        <div className="Pokedex--detail">
          <div className="Pokedex--detail__pokemon">
            <p>
              No Pokemon to show, please select one from the list to display!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

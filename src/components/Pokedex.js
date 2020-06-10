import React, { useState, useEffect } from "react";
import "./Pokedex.css";

export default function Pokedex() {
  const [pkmList, setPkmList] = useState([]);
  const [pkmDetail, setPkmDetail] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPkmList(data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function handleClick(pokemon) {
    fetch(`${pokemon.url}`)
      .then((response) => response.json())
      .then((data) => {
        setPkmDetail(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div className="Pokedex--container">
      <ul className="Pokedex--list">
        {pkmList.map((pokemon) => (
          <li key={pokemon.name}>
            <button
              className="Pokedex--list__button active"
              onClick={() => handleClick(pokemon)}
            >
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {pkmDetail ? (
        <div className="Pokedex--detail">
          <span>{pkmDetail.name}</span>
          <img alt={pkmDetail.name} src={pkmDetail.sprites.front_default} />
        </div>
      ) : (
        <div className="Pokedex--detail">No Pokemon</div>
      )}
    </div>
  );
}

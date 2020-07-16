import React, { useState, useEffect, useContext, useRef } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/loginContext'

export default function UserFavList () {
  const [pokemonList, setPokemonList] = useState([])
  const { user } = useContext(LoginContext)

  useEffect(() => {
    if (!user)
      return

    const docRef = db.collection('favlist').doc(user.uid);

    docRef.get().then(function(doc) {
      if (doc.exists) {
        setPokemonList(doc.data().pokemons)
      }
    }).catch(function(error) {
      console.log("Error getting document:", error)
    });
  }, [user])

  return (
    <>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} data-testid="pokemon-navigation-item">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} />
        </div>
      ))}
    </>
  )
}
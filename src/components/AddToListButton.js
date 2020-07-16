import React from "react";
import { db } from '../firebase/index'
import firebase from 'firebase'

export default function AddToListButton ({ userId, pokemonDetail }) {
  async function addToFavList () {
    const pokemonData = {
      name: pokemonDetail.name,
      image: pokemonDetail.sprites.front_default
    }

    const userDoc = db.collection('favlist').doc(userId)

    const docSnapshot = await userDoc.get()

    if (docSnapshot.exists) {
      await userDoc.update({
        pokemons: firebase.firestore.FieldValue.arrayUnion(pokemonData)
      })
    } else {
      await userDoc.set({
        pokemons: [pokemonData]
      })
    }
  } 

  return(
    <button 
      onClick={addToFavList}
    >
        Add to List
    </button>
  )
}
import React from 'react'
import PokedexListButton from '../PokedexListButton'

import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import pokemons from '../__mocks__/pokemons.json'

import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

it('triggers an event on click', async () => {
    /** create an function mock to spy on calls */
    const onSpy = jest.fn();
  
    /** get the first data set from the api mocks */
    const pokemonData = pokemons.results[0]
  
    /** 
     * Router is needed cause the link is a NavLink 
     * wich is part of the react router.
     */
    const history = createMemoryHistory();
    const { getByTestId}  = render(
      <Router history={history}>
        <PokedexListButton pokemon={pokemonData} onClick={onSpy} />
      </Router>
    )
  
    /** Get the Button by the testid */
    const button = getByTestId('navigation-button')

    /** Trigger the click event of the button */
    fireEvent.click(button)
    
    /** Check if onSpy was triggered one time */
    expect(onSpy).toHaveBeenCalledTimes(1)
  
    /** Check if the href of the button contains the right url pattern */
    expect(button.href).toContain(`/pokedex/${pokemonData.name}`)
  })
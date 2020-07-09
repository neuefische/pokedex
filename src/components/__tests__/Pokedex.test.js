import React from 'react'
import { render, waitForElement, screen } from '@testing-library/react'
import Pokedex from '../Pokedex'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import pokemons from '../__mocks__/pokemons.json'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

const server = setupServer(
    rest.get('/pokemons', (req, res, ctx) => {
      return res(ctx.json(pokemons))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('loads and displays navigation items', async () => {
    const history = createMemoryHistory()

    render(
        <Router history={history}>
            <Pokedex apiUrl="/pokemons" />
        </Router>
    )
  
    const navigationItems = await waitForElement(() => screen.getAllByTestId('pokemon-navigation-item'))

    expect(navigationItems.length).toBeGreaterThan(0)
})
import React from 'react'
import Header from '../Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import pretty from 'pretty'

describe('Header.test.js', () => {
  it('exists an text content Pokedex', () => {
    const { queryByText } = render(<Header />)
    expect(queryByText('Pokedex')).toBeTruthy()
  })

  it('headline is wrapped by h1 html tag', () => {
    const { queryByText} = render(<Header />)
    expect(queryByText('Pokedex').tagName).toBe('H1')
  })

  it('renders a child element', () => {
    const testChildren = 'Foo.Bar'
    render(<Header>{testChildren}</Header>)
    
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const testChildren = 'Foo.Bar'
    const { container } = render(<Header>{testChildren}</Header>)
    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
/* import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'

let div

beforeEach(() => {
  // create div element forEach testblock
  div = document.createElement('div')
})

afterEach(() => {
  // ensure to cleanup the buffer variable
  div = undefined
})

describe('Header.test.js', () => {
  it('renders a h1 tag with the text Pokedex', () => {
    ReactDOM.render(<Header />, div)
  
    expect(div.querySelector('.headline').tagName).toBe('H1')
    expect(div.querySelector('.headline').textContent).toBe('Pokedex')
  })

  it('renders the children', () => {
    ReactDOM.render(
      <Header>
        <div className="child">Some children</div>
      </Header>
    , div)

    expect(div.querySelector('.child')).toBeTruthy()
  })
}) */

/**
 *
 * Tests for SearchMovies
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'

import { renderWithRedux } from 'utils/render-with-redux'
import { SearchMovies } from '../index'

afterEach(cleanup)

const items = [
  { id: '123', title: 'Avengers' },
  { id: '321', title: 'Whiplash' },
]

describe('<SearchMovies />', () => {
  it('should render with redux', () => {
    const { getByTestId } = renderWithRedux(
      <SearchMovies onInputValueChange={() => {}} items={items} history={{}} />,
    )
    expect(getByTestId('search-movies-input')).toBeTruthy()
  })

  it('should show results', () => {
    const { getByTestId, getByText, queryByText } = renderWithRedux(
      <SearchMovies onInputValueChange={() => {}} items={items} history={{}} />,
    )
    const input = getByTestId('search-movies-input')
    const value = 'Aven'
    fireEvent.change(input, { target: { value } })
    expect(input.value).toEqual(value)
    expect(getByText(items[0].title)).toBeTruthy()
    expect(queryByText(items[1].title)).toBeFalsy()
  })
})

/**
 *
 * Tests for GenreFilter
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { cleanup } from 'react-testing-library'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { renderWithRedux } from 'utils/render-with-redux'
import { GenreFilter } from '../index'

afterEach(cleanup)

const genres = [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }]

describe('<GenreFilter />', () => {
  it('should render with redux', () => {
    const { getByTestId } = renderWithRedux(
      <GenreFilter
        onChangeGenre={() => {}}
        getGenres={() => {}}
        genres
        loading
        genreId={false}
      />,
    )

    expect(getByTestId('genre-filter-select')).toBeTruthy()
  })

  it('should select genre by id', () => {
    const { getByTestId } = renderWithRedux(
      <GenreFilter
        onChangeGenre={() => {}}
        getGenres={() => {}}
        genres={genres}
        loading={false}
        genreId="1"
      />,
    )

    const select = getByTestId('genre-filter-select')
    expect(select.value).toEqual('1')
  })

  it('should select genre by id', () => {
    const { getBySelectText } = renderWithRedux(
      <GenreFilter
        onChangeGenre={() => {}}
        getGenres={() => {}}
        genres={genres}
        loading={false}
        genreId="2"
      />,
    )

    expect(getBySelectText('Adventure')).toBeTruthy()
  })
})

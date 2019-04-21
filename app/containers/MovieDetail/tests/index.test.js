/**
 *
 * Tests for MovieDetail
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { cleanup } from 'react-testing-library'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { renderWithRedux } from 'utils/render-with-redux'
import { MovieDetail } from '../index'

const movie = {
  id: 123,
  title: 'Whiplash',
  overview: 'Not quite my TEMPO!',
  poster_path: 'lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
  release_date: '2014-10-10',
}

afterEach(cleanup)

describe('<MovieDetail />', () => {
  it('should render with redux', () => {
    const { getByTestId } = renderWithRedux(
      <MovieDetail
        getMovieDetail={() => {}}
        addToCartAction={() => {}}
        removeFromCartAction={() => {}}
        movie={false}
        loading
        cart={[]}
        match={{ params: { id: 123 } }}
      />,
    )
    expect(getByTestId('movie-detail-wrapper')).toBeTruthy()
  })

  it('should show loading', () => {
    const { getByTestId } = renderWithRedux(
      <MovieDetail
        getMovieDetail={() => {}}
        addToCartAction={() => {}}
        removeFromCartAction={() => {}}
        movie={false}
        loading
        cart={[]}
        match={{ params: { id: 123 } }}
      />,
    )
    expect(getByTestId('movie-detail-loading')).toBeTruthy()
  })

  it('should show movie detail', () => {
    const { getByText } = renderWithRedux(
      <MovieDetail
        getMovieDetail={() => {}}
        addToCartAction={() => {}}
        removeFromCartAction={() => {}}
        movie={movie}
        loading={false}
        cart={[]}
        match={{ params: { id: 123 } }}
      />,
    )
    expect(getByText('Whiplash')).toBeTruthy()
    expect(getByText('(2014)')).toBeTruthy()
    expect(getByText('Not quite my TEMPO!')).toBeTruthy()
  })

  it('should show add to cart button', () => {
    const { getByTestId } = renderWithRedux(
      <MovieDetail
        getMovieDetail={() => {}}
        addToCartAction={() => {}}
        removeFromCartAction={() => {}}
        movie={movie}
        loading={false}
        cart={[]}
        match={{ params: { id: 123 } }}
      />,
    )
    expect(getByTestId('movie-detail-add-cart')).toBeTruthy()
  })

  it('should show remove from cart button', () => {
    const { getByTestId } = renderWithRedux(
      <MovieDetail
        getMovieDetail={() => {}}
        addToCartAction={() => {}}
        removeFromCartAction={() => {}}
        movie={movie}
        loading={false}
        cart={[movie]}
        match={{ params: { id: 123 } }}
      />,
    )
    expect(getByTestId('movie-detail-remove-cart')).toBeTruthy()
  })
})

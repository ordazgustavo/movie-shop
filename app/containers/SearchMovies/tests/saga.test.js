/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects'

import { SET_SEARCH_QUERY } from '../constants'
import { searchMoviesSuccess, searchMoviesFailure } from '../actions'

import searchMoviesSaga, { searchMovies } from '../saga'

const query = 'Avengers'

describe('searchMovies Saga', () => {
  let searchMoviesGenerator

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    searchMoviesGenerator = searchMovies()

    const selectDescriptor = searchMoviesGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = searchMoviesGenerator.next(query).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should dispatch the searchMoviesSuccess action if it requests the data successfully', () => {
    const response = [
      {
        name: 'Avengers',
      },
      {
        name: 'Whiplash',
      },
    ]
    const putDescriptor = searchMoviesGenerator.next(response).value
    expect(putDescriptor).toEqual(put(searchMoviesSuccess(response)))
  })

  it('should call the searchMoviesFailure action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = searchMoviesGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(searchMoviesFailure(response)))
  })
})

describe('searchMoviesSaga Saga', () => {
  const searchMoviesSagaGenerator = searchMoviesSaga()

  it('should start task to watch for SET_SEARCH_QUERY action', () => {
    const takeLatestDescriptor = searchMoviesSagaGenerator.next().value
    expect(takeLatestDescriptor).toEqual(
      takeLatest(SET_SEARCH_QUERY, searchMovies),
    )
  })
})

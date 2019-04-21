/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects'

import { GET_MOVIE_DETAIL_REQUEST } from '../constants'
import { getMovieDetailSuccess, getMovieDetailFailure } from '../actions'

import movieDetailSaga, { getMovieDetail } from '../saga'

const movieId = 123

describe('getMovieDetail Saga', () => {
  let getMovieDetailGenerator

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getMovieDetailGenerator = getMovieDetail()

    const selectDescriptor = getMovieDetailGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = getMovieDetailGenerator.next(movieId).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should dispatch the getMovieDetailSuccess action if it requests the data successfully', () => {
    const response = {
      id: 123,
      title: 'Avengers',
    }
    const putDescriptor = getMovieDetailGenerator.next(response).value
    expect(putDescriptor).toEqual(put(getMovieDetailSuccess(response)))
  })

  it('should call the getMovieDetailFailure action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = getMovieDetailGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(getMovieDetailFailure(response)))
  })
})

describe('movieDetailSaga Saga', () => {
  const githubDataSaga = movieDetailSaga()

  it('should start task to watch for SET_SEARCH_QUERY action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_MOVIE_DETAIL_REQUEST, getMovieDetail),
    )
  })
})

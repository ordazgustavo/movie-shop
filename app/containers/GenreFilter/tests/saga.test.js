/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects'

import { GET_GENRES_REQUEST } from '../constants'
import { getGenresSuccess } from '../actions'

import genreFilterSaga, { getGenres } from '../saga'

describe('getGenres Saga', () => {
  let getGenresGenerator

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getGenresGenerator = getGenres()

    const selectDescriptor = getGenresGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()
  })

  it('should dispatch the getGenresSuccess action if it requests the data successfully', () => {
    const response = {
      id: 123,
      title: 'Avengers',
    }
    const putDescriptor = getGenresGenerator.next(response).value
    expect(putDescriptor).toEqual(put(getGenresSuccess(response)))
  })
})

describe('genreFilterSaga Saga', () => {
  const genreFilterSagaGenerator = genreFilterSaga()

  it('should start task to watch for GET_GENRES_REQUEST action', () => {
    const takeLatestDescriptor = genreFilterSagaGenerator.next().value
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_GENRES_REQUEST, getGenres),
    )
  })
})

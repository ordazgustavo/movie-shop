import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { SET_SEARCH_QUERY } from './constants'
import { searchMoviesSuccess, searchMoviesFailure } from './actions'
import { makeSelectSearchQuery } from './selectors'

export function* searchMovies() {
  const query = yield select(makeSelectSearchQuery())
  const requestURL = `/search/movie?language=en-US&query=${query}`

  try {
    const items = yield call(request, requestURL)
    yield put(searchMoviesSuccess(items))
  } catch (error) {
    yield put(searchMoviesFailure(error))
  }
}

export default function* searchMoviesSaga() {
  yield takeLatest(SET_SEARCH_QUERY, searchMovies)
}

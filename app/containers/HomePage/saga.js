import { call, put, takeLatest } from 'redux-saga/effects'

import { GET_POPULAR_MOVIES_REQUEST } from 'containers/App/constants'
import {
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
} from 'containers/App/actions'

import request from 'utils/request'

export function* getPopularMovies() {
  const requestURL = `/movie/popular?language=en-US&page=1`

  try {
    const popularMovies = yield call(request, requestURL)
    yield put(getPopularMoviesSuccess(popularMovies))
  } catch (error) {
    yield put(getPopularMoviesFailure(error))
  }
}

export default function* movieData() {
  yield takeLatest(GET_POPULAR_MOVIES_REQUEST, getPopularMovies)
}

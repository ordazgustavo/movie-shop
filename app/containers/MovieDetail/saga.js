import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { GET_MOVIE_DETAIL_REQUEST } from './constants'
import { getMovieDetailSuccess, getMovieDetailFailure } from './actions'
import { makeSelectMovieDetailId } from './selectors'

export function* getMovieDetail() {
  const movieId = yield select(makeSelectMovieDetailId())
  const requestURL = `/movie/${movieId}?language=en-US&page=1`

  try {
    const popularMovies = yield call(request, requestURL)
    yield put(getMovieDetailSuccess(popularMovies))
  } catch (error) {
    yield put(getMovieDetailFailure(error))
  }
}

export default function* movieDetailSaga() {
  yield takeLatest(GET_MOVIE_DETAIL_REQUEST, getMovieDetail)
}

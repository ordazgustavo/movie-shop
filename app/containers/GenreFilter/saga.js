import { call, put, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { GET_GENRES_REQUEST } from './constants'
import { getGenresSuccess, getGenresFailure } from './actions'

export function* getGenres() {
  const requestURL = `/genre/movie/list?language=en-US&page=1`

  try {
    const genres = yield call(request, requestURL)
    yield put(getGenresSuccess(genres))
  } catch (error) {
    yield put(getGenresFailure(error))
  }
}

export default function* genreFilterSaga() {
  yield takeLatest(GET_GENRES_REQUEST, getGenres)
}

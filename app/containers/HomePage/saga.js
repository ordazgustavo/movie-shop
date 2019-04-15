import { call, put, select, takeLatest } from 'redux-saga/effects'

import {
  GET_POPULAR_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_UPCOMING_MOVIES_REQUEST,
  GET_MOVIES_BY_GENRE_REQUEST,
} from 'containers/App/constants'
import {
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
  getTopRatedMoviesSuccess,
  getTopRatedMoviesFailure,
  getUpcomingMoviesSuccess,
  getUpcomingMoviesFailure,
  getMoviesByGenreSuccess,
  getMoviesByGenreFailure,
} from 'containers/App/actions'
import { makeSelectGenreId } from 'containers/GenreFilter/selectors'

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

export function* getTopRatedMovies() {
  const requestURL = `/movie/top_rated?language=en-US&page=1`

  try {
    const topRatedMovies = yield call(request, requestURL)
    yield put(getTopRatedMoviesSuccess(topRatedMovies))
  } catch (error) {
    yield put(getTopRatedMoviesFailure(error))
  }
}

export function* getUpcomingMovies() {
  const requestURL = `/movie/upcoming?language=en-US&page=1`

  try {
    const upcomingMovies = yield call(request, requestURL)
    yield put(getUpcomingMoviesSuccess(upcomingMovies))
  } catch (error) {
    yield put(getUpcomingMoviesFailure(error))
  }
}

export function* getMoviesByGenre() {
  const genereId = yield select(makeSelectGenreId())
  const requestURL = `/discover/movie?sort_by=popularity.desc&include_video=false&language=en-US&page=1&with_genres=${genereId}`

  try {
    const moviesByGenre = yield call(request, requestURL)
    yield put(getMoviesByGenreSuccess(moviesByGenre))
  } catch (error) {
    yield put(getMoviesByGenreFailure(error))
  }
}

export default function* movieData() {
  yield takeLatest(GET_POPULAR_MOVIES_REQUEST, getPopularMovies)
  yield takeLatest(GET_TOP_RATED_MOVIES_REQUEST, getTopRatedMovies)
  yield takeLatest(GET_UPCOMING_MOVIES_REQUEST, getUpcomingMovies)
  yield takeLatest(GET_MOVIES_BY_GENRE_REQUEST, getMoviesByGenre)
}

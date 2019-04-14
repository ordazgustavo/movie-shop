/*
 *
 * MovieDetail actions
 *
 */

import {
  GET_MOVIE_DETAIL_REQUEST,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE,
} from './constants'

export function getMovieDetailRequest(movieId) {
  return {
    type: GET_MOVIE_DETAIL_REQUEST,
    movieId,
  }
}

export function getMovieDetailSuccess(movieDetail) {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    movieDetail,
  }
}

export function getMovieDetailFailure(error) {
  return {
    type: GET_MOVIE_DETAIL_FAILURE,
    error,
  }
}

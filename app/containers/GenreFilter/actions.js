/*
 *
 * GenreFilter actions
 *
 */

import {
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  CHANGE_GENERE,
} from './constants'

export function getGenresRequest() {
  return {
    type: GET_GENRES_REQUEST,
  }
}

export function getGenresSuccess(genres) {
  return {
    type: GET_GENRES_SUCCESS,
    genres,
  }
}

export function getGenresFailure(error) {
  return {
    type: GET_GENRES_FAILURE,
    error,
  }
}

export function changeGenere(genereId) {
  return {
    type: CHANGE_GENERE,
    genereId,
  }
}

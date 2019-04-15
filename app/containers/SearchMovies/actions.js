/*
 *
 * SearchMovies actions
 *
 */

import {
  SET_SEARCH_QUERY,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from './constants'

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    query,
  }
}

export function searchMoviesRequest() {
  return {
    type: SEARCH_MOVIES_REQUEST,
  }
}

export function searchMoviesSuccess(movies) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    movies,
  }
}

export function searchMoviesFailure(error) {
  return {
    type: SEARCH_MOVIES_FAILURE,
    error,
  }
}

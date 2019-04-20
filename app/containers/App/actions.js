/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_POPULAR_MOVIES_REQUEST,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_FAILURE,
  GET_UPCOMING_MOVIES_REQUEST,
  GET_UPCOMING_MOVIES_SUCCESS,
  GET_UPCOMING_MOVIES_FAILURE,
  GET_MOVIES_BY_GENRE_REQUEST,
  GET_MOVIES_BY_GENRE_SUCCESS,
  GET_MOVIES_BY_GENRE_FAILURE,
} from './constants'

export function addToCart(movie) {
  return {
    type: ADD_TO_CART,
    movie,
  }
}

export function removeFromCart(movieId) {
  return {
    type: REMOVE_FROM_CART,
    movieId,
  }
}

export function getPopularMoviesRequest() {
  return {
    type: GET_POPULAR_MOVIES_REQUEST,
  }
}

export function getPopularMoviesSuccess(popularMovies) {
  return {
    type: GET_POPULAR_MOVIES_SUCCESS,
    popularMovies,
  }
}

export function getPopularMoviesFailure(error) {
  return {
    type: GET_POPULAR_MOVIES_FAILURE,
    error,
  }
}

export function getTopRatedMoviesRequest() {
  return {
    type: GET_TOP_RATED_MOVIES_REQUEST,
  }
}

export function getTopRatedMoviesSuccess(topRatedMovies) {
  return {
    type: GET_TOP_RATED_MOVIES_SUCCESS,
    topRatedMovies,
  }
}

export function getTopRatedMoviesFailure(error) {
  return {
    type: GET_TOP_RATED_MOVIES_FAILURE,
    error,
  }
}

export function getUpcomingMoviesRequest() {
  return {
    type: GET_UPCOMING_MOVIES_REQUEST,
  }
}

export function getUpcomingMoviesSuccess(upcomingMovies) {
  return {
    type: GET_UPCOMING_MOVIES_SUCCESS,
    upcomingMovies,
  }
}

export function getUpcomingMoviesFailure(error) {
  return {
    type: GET_UPCOMING_MOVIES_FAILURE,
    error,
  }
}

export function getMoviesByGenreRequest() {
  return {
    type: GET_MOVIES_BY_GENRE_REQUEST,
  }
}

export function getMoviesByGenreSuccess(moviesByGenre) {
  return {
    type: GET_MOVIES_BY_GENRE_SUCCESS,
    moviesByGenre,
  }
}

export function getMoviesByGenreFailure(error) {
  return {
    type: GET_MOVIES_BY_GENRE_FAILURE,
    error,
  }
}

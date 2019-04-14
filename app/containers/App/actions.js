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
  GET_POPULAR_MOVIES_REQUEST,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_FAILURE,
  GET_UPCOMING_MOVIES_REQUEST,
  GET_UPCOMING_MOVIES_SUCCESS,
  GET_UPCOMING_MOVIES_FAILURE,
} from './constants'

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

/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer'
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
  GET_MOVIES_BY_GENRE_REQUEST,
  GET_MOVIES_BY_GENRE_SUCCESS,
  GET_MOVIES_BY_GENRE_FAILURE,
  ADD_TO_CART,
} from './constants'

// The initial state of the App
export const initialState = {
  cart: [],
  moviesByGenre: {
    error: false,
    loading: false,
    data: false,
  },
  popularMovies: {
    error: false,
    loading: false,
    data: false,
  },
  topRatedMovies: {
    error: false,
    loading: false,
    data: false,
  },
  upcomingMovies: {
    error: false,
    loading: false,
    data: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CART:
        draft.cart.push(action.movie)
        break

      case GET_MOVIES_BY_GENRE_REQUEST:
        draft.moviesByGenre.loading = true
        draft.moviesByGenre.error = false
        draft.moviesByGenre.data = false
        break

      case GET_MOVIES_BY_GENRE_SUCCESS:
        draft.moviesByGenre.data = action.moviesByGenre.results
        draft.moviesByGenre.loading = false
        break

      case GET_MOVIES_BY_GENRE_FAILURE:
        draft.moviesByGenre.error = action.error
        draft.moviesByGenre.loading = false
        break

      case GET_POPULAR_MOVIES_REQUEST:
        draft.popularMovies.loading = true
        draft.popularMovies.error = false
        draft.popularMovies.data = false
        break

      case GET_POPULAR_MOVIES_SUCCESS:
        draft.popularMovies.data = action.popularMovies.results
        draft.popularMovies.loading = false
        break

      case GET_POPULAR_MOVIES_FAILURE:
        draft.popularMovies.error = action.error
        draft.popularMovies.loading = false
        break

      case GET_TOP_RATED_MOVIES_REQUEST:
        draft.topRatedMovies.loading = true
        draft.topRatedMovies.error = false
        draft.topRatedMovies.data = false
        break

      case GET_TOP_RATED_MOVIES_SUCCESS:
        draft.topRatedMovies.data = action.topRatedMovies.results
        draft.topRatedMovies.loading = false
        break

      case GET_TOP_RATED_MOVIES_FAILURE:
        draft.topRatedMovies.error = action.error
        draft.topRatedMovies.loading = false
        break

      case GET_UPCOMING_MOVIES_REQUEST:
        draft.upcomingMovies.loading = true
        draft.upcomingMovies.error = false
        draft.upcomingMovies.data = false
        break

      case GET_UPCOMING_MOVIES_SUCCESS:
        draft.upcomingMovies.data = action.upcomingMovies.results
        draft.upcomingMovies.loading = false
        break

      case GET_UPCOMING_MOVIES_FAILURE:
        draft.upcomingMovies.error = action.error
        draft.upcomingMovies.loading = false
        break
    }
  })

export default appReducer

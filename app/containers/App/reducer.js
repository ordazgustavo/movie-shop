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
} from './constants'

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  popularMovies: {
    results: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POPULAR_MOVIES_REQUEST:
        draft.loading = true
        draft.error = false
        draft.popularMovies.results = false
        break

      case GET_POPULAR_MOVIES_SUCCESS:
        draft.popularMovies.results = action.popularMovies.results
        draft.loading = false
        break

      case GET_POPULAR_MOVIES_FAILURE:
        draft.error = action.error
        draft.loading = false
        break
    }
  })

export default appReducer

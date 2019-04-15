/*
 *
 * SearchMovies reducer
 *
 */
import produce from 'immer'
import {
  SET_SEARCH_QUERY,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from './constants'

export const initialState = {
  loading: false,
  error: false,
  items: false,
  query: false,
}

/* eslint-disable default-case, no-param-reassign */
const searchMoviesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        draft.query = action.query
        break

      case SEARCH_MOVIES_REQUEST:
        draft.loading = true
        draft.error = false
        draft.items = false
        break

      case SEARCH_MOVIES_SUCCESS:
        draft.loading = false
        draft.items = action.movies.results
        break

      case SEARCH_MOVIES_FAILURE:
        draft.loading = false
        draft.error = action.error
        break
    }
  })

export default searchMoviesReducer

/*
 *
 * MovieDetail reducer
 *
 */
import produce from 'immer'
import {
  GET_MOVIE_DETAIL_REQUEST,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE,
} from './constants'

export const initialState = {
  loading: false,
  error: false,
  movieDetail: false,
  movieId: false,
}

/* eslint-disable default-case, no-param-reassign */
const movieDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOVIE_DETAIL_REQUEST:
        draft.loading = true
        draft.error = false
        draft.movieDetail = false
        draft.movieId = action.movieId
        break

      case GET_MOVIE_DETAIL_SUCCESS:
        draft.loading = false
        draft.movieDetail = action.movieDetail
        break

      case GET_MOVIE_DETAIL_FAILURE:
        draft.loading = false
        draft.error = action.error
        break
    }
  })

export default movieDetailReducer

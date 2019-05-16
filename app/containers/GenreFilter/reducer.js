/*
 *
 * GenreFilter reducer
 *
 */
import produce from 'immer'
import {
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  CHANGE_GENRE,
} from './constants'

export const initialState = {
  loading: false,
  error: false,
  genres: false,
  selectedGenre: false,
}

/* eslint-disable default-case, no-param-reassign */
const genreFilterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_GENRES_REQUEST:
        draft.loading = true
        draft.error = false
        draft.genres = false
        break

      case GET_GENRES_SUCCESS:
        draft.loading = false
        draft.genres = action.genres.genres
        draft.selectedGenre = action.genres.genres[0].id.toString()
        break

      case GET_GENRES_FAILURE:
        draft.loading = false
        draft.error = action.error
        break

      case CHANGE_GENRE:
        draft.selectedGenre = action.genreId
        break
    }
  })

export default genreFilterReducer

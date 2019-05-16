import produce from 'immer'
import genreFilterReducer, { initialState } from '../reducer'
import {
  changeGenre,
  getGenresRequest,
  getGenresSuccess,
  getGenresFailure,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('genreFilterReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(genreFilterReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the changeGenre action correctly', () => {
    const genreId = 1
    const expectedResult = produce(state, draft => {
      draft.selectedGenre = genreId
    })

    expect(genreFilterReducer(state, changeGenre(genreId))).toEqual(
      expectedResult,
    )
  })

  it('should handle the getGenresRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true
      draft.error = false
      draft.genres = false
    })

    expect(genreFilterReducer(state, getGenresRequest())).toEqual(
      expectedResult,
    )
  })

  it('should handle the getGenresSuccess action correctly', () => {
    const response = {
      genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }],
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.genres = response.genres
      draft.selectedGenre = response.genres[0].id.toString()
    })

    expect(genreFilterReducer(state, getGenresSuccess(response))).toEqual(
      expectedResult,
    )
  })

  it('should handle the getGenresFailure action correctly', () => {
    const error = {
      code: 123,
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.error = error
    })

    expect(genreFilterReducer(state, getGenresFailure(error))).toEqual(
      expectedResult,
    )
  })
})

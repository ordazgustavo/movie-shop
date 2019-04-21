import produce from 'immer'
import searchMoviesReducer, { initialState } from '../reducer'
import {
  setSearchQuery,
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('searchMoviesReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(searchMoviesReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the setSearchQuery action correctly', () => {
    const query = 'Avengers'
    const expectedResult = produce(state, draft => {
      draft.query = query
    })

    expect(searchMoviesReducer(state, setSearchQuery(query))).toEqual(
      expectedResult,
    )
  })

  it('should handle the searchMoviesRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true
      draft.error = false
      draft.items = false
    })

    expect(searchMoviesReducer(state, searchMoviesRequest())).toEqual(
      expectedResult,
    )
  })

  it('should handle the searchMoviesSuccess action correctly', () => {
    const movies = {
      results: ['Avengers', 'Whiplash'],
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.items = movies.results
    })

    expect(searchMoviesReducer(state, searchMoviesSuccess(movies))).toEqual(
      expectedResult,
    )
  })

  it('should handle the searchMoviesFailure action correctly', () => {
    const error = {
      code: '123',
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.error = error
    })

    expect(searchMoviesReducer(state, searchMoviesFailure(error))).toEqual(
      expectedResult,
    )
  })
})

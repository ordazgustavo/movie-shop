import produce from 'immer'
import movieDetailReducer, { initialState } from '../reducer'
import {
  getMovieDetailRequest,
  getMovieDetailSuccess,
  getMovieDetailFailure,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('movieDetailReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(movieDetailReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the getMovieDetailRequest action correctly', () => {
    const movieId = 123
    const expectedResult = produce(state, draft => {
      draft.loading = true
      draft.error = false
      draft.movie = false
      draft.movieId = movieId
    })

    expect(movieDetailReducer(state, getMovieDetailRequest(movieId))).toEqual(
      expectedResult,
    )
  })

  it('should handle the getMovieDetailSuccess action correctly', () => {
    const movie = {
      id: 123,
      title: 'Avengers',
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.movie = movie
    })

    expect(movieDetailReducer(state, getMovieDetailSuccess(movie))).toEqual(
      expectedResult,
    )
  })

  it('should handle the getMovieDetailFailure action correctly', () => {
    const error = {
      code: 123,
    }
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.error = error
    })

    expect(movieDetailReducer(state, getMovieDetailFailure(error))).toEqual(
      expectedResult,
    )
  })
})

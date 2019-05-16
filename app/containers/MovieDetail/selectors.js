import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the movieDetail state domain
 */

const selectMovieDetailDomain = state => state.movieDetail || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by MovieDetail
 */

const makeSelectMovieDetailId = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.movieId,
  )

const makeSelectMovieDetailMovie = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.movie,
  )

const makeSelectMovieDetailLoading = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.loading,
  )

const makeSelectMovieDetailError = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.error,
  )

export default makeSelectMovieDetailMovie
export {
  selectMovieDetailDomain,
  makeSelectMovieDetailId,
  makeSelectMovieDetailMovie,
  makeSelectMovieDetailLoading,
  makeSelectMovieDetailError,
}

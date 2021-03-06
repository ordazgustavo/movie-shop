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

const makeSelectMovieId = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.movieId,
  )

const makeSelectMovieDetail = () =>
  createSelector(
    selectMovieDetailDomain,
    movieState => movieState.movieDetail,
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

export default makeSelectMovieDetail
export {
  selectMovieDetailDomain,
  makeSelectMovieId,
  makeSelectMovieDetail,
  makeSelectMovieDetailLoading,
  makeSelectMovieDetailError,
}

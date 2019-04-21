import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the searchMovies state domain
 */

const selectSearchMoviesDomain = state => state.searchMovies || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchMovies
 */

const makeSelectSearchQuery = () =>
  createSelector(
    selectSearchMoviesDomain,
    searchMoviesState => searchMoviesState.query,
  )

const makeSelectSearchItems = () =>
  createSelector(
    selectSearchMoviesDomain,
    searchMoviesState => searchMoviesState.items,
  )

const makeSelectSearchMovies = () =>
  createSelector(
    selectSearchMoviesDomain,
    substate => substate,
  )

export {
  selectSearchMoviesDomain,
  makeSelectSearchMovies,
  makeSelectSearchQuery,
  makeSelectSearchItems,
}

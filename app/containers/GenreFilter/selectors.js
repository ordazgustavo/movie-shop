import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the genreFilter state domain
 */

const selectGenreFilterDomain = state => state.genreFilter || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by GenreFilter
 */

const makeSelectGenreFilter = () =>
  createSelector(
    selectGenreFilterDomain,
    substate => substate,
  )

const makeSelectGenreId = () =>
  createSelector(
    selectGenreFilterDomain,
    genreState => genreState.selectedGenre,
  )

const makeSelectGenres = () =>
  createSelector(
    selectGenreFilterDomain,
    genreState => genreState.genres,
  )

const makeSelectGenreLoading = () =>
  createSelector(
    selectGenreFilterDomain,
    genreState => genreState.loading,
  )

const makeSelectGenreError = () =>
  createSelector(
    selectGenreFilterDomain,
    genreState => genreState.error,
  )

export default makeSelectGenreFilter
export {
  selectGenreFilterDomain,
  makeSelectGenreId,
  makeSelectGenres,
  makeSelectGenreLoading,
  makeSelectGenreError,
}

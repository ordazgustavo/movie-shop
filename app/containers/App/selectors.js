/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = state => state.global || initialState

const selectRouter = state => state.router

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  )

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  )

const makeSelectPopularMovies = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.popularMovies.results,
  )

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  )

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPopularMovies,
  makeSelectLocation,
}

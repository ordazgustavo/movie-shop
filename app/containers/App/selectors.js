/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = state => state.global || initialState

const selectRouter = state => state.router

const makeSelectPopularMovies = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.popularMovies,
  )

const makeSelectTopRatedMovies = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.topRatedMovies,
  )

const makeSelectUpcomingMovies = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.upcomingMovies,
  )

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  )

export {
  selectGlobal,
  makeSelectPopularMovies,
  makeSelectTopRatedMovies,
  makeSelectUpcomingMovies,
  makeSelectLocation,
}

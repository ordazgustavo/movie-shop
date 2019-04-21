import {
  setSearchQuery,
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
} from '../actions'
import {
  SET_SEARCH_QUERY,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../constants'

describe('SearchMovies actions', () => {
  describe('setSearchQuery Action', () => {
    it('has a type of SET_SEARCH_QUERY', () => {
      const query = 'Avengers'
      const expected = {
        type: SET_SEARCH_QUERY,
        query,
      }
      expect(setSearchQuery(query)).toEqual(expected)
    })
  })

  describe('searchMoviesRequest Action', () => {
    it('has a type of ', () => {
      const expected = {
        type: SEARCH_MOVIES_REQUEST,
      }
      expect(searchMoviesRequest()).toEqual(expected)
    })
  })

  describe('searchMoviesSuccess Action', () => {
    it('has a type of ', () => {
      const movies = ['Whiplash', 'Avengers']
      const expected = {
        type: SEARCH_MOVIES_SUCCESS,
        movies,
      }
      expect(searchMoviesSuccess(movies)).toEqual(expected)
    })
  })

  describe('searchMoviesFailure Action', () => {
    it('has a type of ', () => {
      const error = {
        code: '123',
      }
      const expected = {
        type: SEARCH_MOVIES_FAILURE,
        error,
      }
      expect(searchMoviesFailure(error)).toEqual(expected)
    })
  })
})

import {
  getMovieDetailRequest,
  getMovieDetailSuccess,
  getMovieDetailFailure,
} from '../actions'
import {
  GET_MOVIE_DETAIL_REQUEST,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE,
} from '../constants'

describe('MovieDetail actions', () => {
  describe('getMovieDetailRequest Action', () => {
    it('has a type of GET_MOVIE_REQUEST and a movieId', () => {
      const movieId = 123
      const expected = {
        type: GET_MOVIE_DETAIL_REQUEST,
        movieId,
      }
      expect(getMovieDetailRequest(movieId)).toEqual(expected)
    })
  })

  describe('getMovieDetailSuccess Action', () => {
    it('has a type of GET_MOVIE_SUCCESS and a movie', () => {
      const movieDetail = {
        id: 123,
        title: 'Avengers',
      }
      const expected = {
        type: GET_MOVIE_DETAIL_SUCCESS,
        movieDetail,
      }
      expect(getMovieDetailSuccess(movieDetail)).toEqual(expected)
    })
  })

  describe('getMovieDetailFailure Action', () => {
    it('has a type of GET_MOVIE_FAILURE and an error', () => {
      const error = {
        code: 123,
      }
      const expected = {
        type: GET_MOVIE_DETAIL_FAILURE,
        error,
      }
      expect(getMovieDetailFailure(error)).toEqual(expected)
    })
  })
})

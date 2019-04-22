import {
  changeGenre,
  getGenresRequest,
  getGenresSuccess,
  getGenresFailure,
} from '../actions'
import {
  CHANGE_GENRE,
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
} from '../constants'

describe('GenreFilter actions', () => {
  describe('changeGenre Action', () => {
    it('has a type of CHANGE_GENRE', () => {
      const genreId = 123
      const expected = {
        type: CHANGE_GENRE,
        genreId,
      }
      expect(changeGenre(genreId)).toEqual(expected)
    })
  })

  describe('getGenreRequest Action', () => {
    it('has a type of GET_GENRE_REQUEST', () => {
      const expected = {
        type: GET_GENRES_REQUEST,
      }
      expect(getGenresRequest()).toEqual(expected)
    })
  })

  describe('getGenreSuccess Action', () => {
    it('has a type of GET_GENRE_SUCCESS', () => {
      const genres = [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }]
      const expected = {
        type: GET_GENRES_SUCCESS,
        genres,
      }
      expect(getGenresSuccess(genres)).toEqual(expected)
    })
  })

  describe('getGenreFailure Action', () => {
    it('has a type of GET_GENRE_FAILURE', () => {
      const error = {
        code: 123,
      }
      const expected = {
        type: GET_GENRES_FAILURE,
        error,
      }
      expect(getGenresFailure(error)).toEqual(expected)
    })
  })
})

import {
  selectSearchMoviesDomain,
  makeSelectSearchMovies,
  makeSelectSearchQuery,
  makeSelectSearchItems,
} from '../selectors'

describe('selectSearchMoviesDomain', () => {
  it('Can select searchMovies state domain', () => {
    const searchMovies = {}
    const mockedState = {
      searchMovies,
    }
    expect(selectSearchMoviesDomain(mockedState)).toEqual(searchMovies)
  })
})

describe('makeSelectSearchMovies', () => {
  const searchMoviesSelector = makeSelectSearchMovies()
  it('Can select searchMovies state', () => {
    const searchMovies = {}
    const mockedState = {
      searchMovies,
    }
    expect(searchMoviesSelector(mockedState)).toEqual(searchMovies)
  })
})

describe('makeSelectSearchQuery', () => {
  const searchQuerySelector = makeSelectSearchQuery()
  it('Can select the search query', () => {
    const query = 'Avengers'
    const mockedState = {
      searchMovies: {
        query,
      },
    }
    expect(searchQuerySelector(mockedState)).toEqual(query)
  })
})

describe('makeSelectSearchItems', () => {
  const searchItemsSelector = makeSelectSearchItems()
  it('Can select the items', () => {
    const items = []
    const mockedState = {
      searchMovies: {
        items,
      },
    }
    expect(searchItemsSelector(mockedState)).toEqual(items)
  })
})

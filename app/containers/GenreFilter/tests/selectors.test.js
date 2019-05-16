import {
  selectGenreFilterDomain,
  makeSelectGenreId,
  makeSelectGenres,
  makeSelectGenreLoading,
  makeSelectGenreError,
} from '../selectors'

describe('selectGenreFilterDomain', () => {
  it('Can select genreFilter state domain', () => {
    const genreFilter = {}
    const mockedState = {
      genreFilter,
    }
    expect(selectGenreFilterDomain(mockedState)).toEqual(genreFilter)
  })
})

describe('makeSelectGenreId', () => {
  const genreIdSelector = makeSelectGenreId()
  it('Can select the genreId', () => {
    const genreFilter = {
      selectedGenre: 1,
    }
    const mockedState = {
      genreFilter,
    }
    expect(genreIdSelector(mockedState)).toEqual(genreFilter.selectedGenre)
  })
})

describe('makeSelectGenres', () => {
  const genresSelector = makeSelectGenres()
  it('Can select the genres', () => {
    const genreFilter = {
      genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }],
    }
    const mockedState = {
      genreFilter,
    }
    expect(genresSelector(mockedState)).toEqual(genreFilter.genres)
  })
})

describe('makeSelectGenreLoading', () => {
  const genreLoadingSelector = makeSelectGenreLoading()
  it('Can select the loading', () => {
    const genreFilter = {
      loading: false,
    }
    const mockedState = {
      genreFilter,
    }
    expect(genreLoadingSelector(mockedState)).toEqual(genreFilter.loading)
  })
})

describe('makeSelectGenreError', () => {
  const genreErrorSelector = makeSelectGenreError()
  it('Can select the error', () => {
    const genreFilter = {
      error: false,
    }
    const mockedState = {
      genreFilter,
    }
    expect(genreErrorSelector(mockedState)).toEqual(genreFilter.error)
  })
})

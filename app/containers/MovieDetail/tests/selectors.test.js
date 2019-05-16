import {
  selectMovieDetailDomain,
  makeSelectMovieDetailId,
  makeSelectMovieDetailMovie,
  makeSelectMovieDetailLoading,
  makeSelectMovieDetailError,
} from '../selectors'

describe('selectMovieDetailDomain', () => {
  it('Can select movieDetail state domain', () => {
    const movieDetail = {}
    const mockedState = {
      movieDetail,
    }
    expect(selectMovieDetailDomain(mockedState)).toEqual(movieDetail)
  })
})

describe('makeSelectMovieDetailId', () => {
  const movieIdSelector = makeSelectMovieDetailId()
  it('Can select the movieId', () => {
    const movieDetail = {
      movieId: 123,
    }
    const mockedState = {
      movieDetail,
    }
    expect(movieIdSelector(mockedState)).toEqual(movieDetail.movieId)
  })
})

describe('makeSelectMovieDetailMovie', () => {
  const movieDetailSelector = makeSelectMovieDetailMovie()
  it('Can select the movie', () => {
    const movieDetail = {
      movie: {
        id: 123,
        title: 'Avengers',
      },
    }
    const mockedState = {
      movieDetail,
    }
    expect(movieDetailSelector(mockedState)).toEqual(movieDetail.movie)
  })
})

describe('makeSelectMovieDetailLoading', () => {
  const movieLoadingSelector = makeSelectMovieDetailLoading()
  it('Can select the movie', () => {
    const movieDetail = {
      loading: false,
    }
    const mockedState = {
      movieDetail,
    }
    expect(movieLoadingSelector(mockedState)).toEqual(movieDetail.loading)
  })
})

describe('makeSelectMovieDetailError', () => {
  const movieErrorSelector = makeSelectMovieDetailError()
  it('Can select the movie', () => {
    const movieDetail = {
      error: {
        code: 123,
      },
    }
    const mockedState = {
      movieDetail,
    }
    expect(movieErrorSelector(mockedState)).toEqual(movieDetail.error)
  })
})

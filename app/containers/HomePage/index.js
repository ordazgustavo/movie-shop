/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { useInjectSaga } from 'utils/injectSaga'
import {
  makeSelectPopularMovies,
  makeSelectTopRatedMovies,
  makeSelectUpcomingMovies,
  makeSelectMoviesByGenre,
} from 'containers/App/selectors'
import {
  getPopularMoviesRequest,
  getTopRatedMoviesRequest,
  getUpcomingMoviesRequest,
  getMoviesByGenreRequest,
} from 'containers/App/actions'
import GenreFilter from 'containers/GenreFilter/Loadable'
import {
  makeSelectGenreId,
  makeSelectGenres,
} from 'containers/GenreFilter/selectors'

import MovieRail from 'components/MovieRail'
import saga from './saga'

const key = 'home'

export function HomePage({
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  moviesByGenre,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  movieGenres,
  genreId,
}) {
  useInjectSaga({ key, saga })

  React.useEffect(() => {
    getPopularMovies()
    getTopRatedMovies()
    getUpcomingMovies()
  }, [])

  React.useEffect(() => {
    if (genreId) {
      getMoviesByGenre()
    }
  }, [genreId])

  console.log('Movies By Genre', moviesByGenre)
  console.log('Popular Movies', popularMovies)
  console.log('Top Rated Movies', topRatedMovies)
  console.log('Upcoming Movies', upcomingMovies)

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A Movie Shop eCommerce application homepage"
        />
      </Helmet>

      <GenreFilter />

      <MovieRail
        title="moviesByGenre"
        subtitle={
          movieGenres && genreId
            ? movieGenres.find(g => g.id === Number(genreId)).name
            : undefined
        }
        movies={moviesByGenre.data}
        loading={moviesByGenre.loading}
      />
      <MovieRail
        title="popularMoviesHeader"
        movies={popularMovies.data}
        loading={popularMovies.loading}
      />
      <MovieRail
        title="topRatedMoviesHeader"
        movies={topRatedMovies.data}
        loading={topRatedMovies.loading}
      />
      <MovieRail
        title="upcomingMoviesHeader"
        movies={upcomingMovies.data}
        loading={upcomingMovies.loading}
      />
    </article>
  )
}

HomePage.propTypes = {
  getMoviesByGenre: PropTypes.func,
  getPopularMovies: PropTypes.func,
  getTopRatedMovies: PropTypes.func,
  getUpcomingMovies: PropTypes.func,
  moviesByGenre: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  popularMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  topRatedMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  upcomingMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movieGenres: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  genreId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export function mapDispatchToProps(dispatch) {
  return {
    getMoviesByGenre: () => {
      dispatch(getMoviesByGenreRequest())
    },
    getPopularMovies: () => {
      dispatch(getPopularMoviesRequest())
    },
    getTopRatedMovies: () => {
      dispatch(getTopRatedMoviesRequest())
    },
    getUpcomingMovies: () => {
      dispatch(getUpcomingMoviesRequest())
    },
  }
}

const mapStateToProps = createStructuredSelector({
  moviesByGenre: makeSelectMoviesByGenre(),
  popularMovies: makeSelectPopularMovies(),
  topRatedMovies: makeSelectTopRatedMovies(),
  upcomingMovies: makeSelectUpcomingMovies(),
  movieGenres: makeSelectGenres(),
  genreId: makeSelectGenreId(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(HomePage)

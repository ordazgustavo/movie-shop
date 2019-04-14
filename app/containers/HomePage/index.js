/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react'
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
} from 'containers/App/selectors'
import {
  getPopularMoviesRequest,
  getTopRatedMoviesRequest,
  getUpcomingMoviesRequest,
} from 'containers/App/actions'
import MovieRail from 'components/MovieRail'
import saga from './saga'

const key = 'home'

export function HomePage({
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
}) {
  useInjectSaga({ key, saga })

  useEffect(() => {
    getPopularMovies()
    getTopRatedMovies()
    getUpcomingMovies()
  }, [])

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
  getPopularMovies: PropTypes.func,
  getTopRatedMovies: PropTypes.func,
  getUpcomingMovies: PropTypes.func,
  popularMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  topRatedMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  upcomingMovies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export function mapDispatchToProps(dispatch) {
  return {
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
  popularMovies: makeSelectPopularMovies(),
  topRatedMovies: makeSelectTopRatedMovies(),
  upcomingMovies: makeSelectUpcomingMovies(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(HomePage)

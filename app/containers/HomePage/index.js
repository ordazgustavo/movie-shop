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
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors'
import { getPopularMoviesRequest } from 'containers/App/actions'
import saga from './saga'

const key = 'home'

export function HomePage({ loading, error, popularMovies, getPopularMovies }) {
  useInjectSaga({ key, saga })

  useEffect(() => {
    getPopularMovies()
  }, [])

  console.log(loading, popularMovies, error)

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A Movie Shop eCommerce application homepage"
        />
      </Helmet>
    </article>
  )
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  popularMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getPopularMovies: PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
  return {
    getPopularMovies: () => {
      dispatch(getPopularMoviesRequest())
    },
  }
}

const mapStateToProps = createStructuredSelector({
  popularMovies: makeSelectPopularMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(HomePage)

/**
 *
 * MovieDetail
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { addToCart } from 'containers/App/actions'
import {
  makeSelectMovieDetail,
  makeSelectMovieDetailLoading,
  makeSelectMovieDetailError,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import { getMovieDetailRequest } from './actions'
import { IMAGE_PREFIX_XS_URL } from '../../constants'

const key = 'movieDetail'

const Wrapper = styled.div`
  display: flex;
  flex-flow: nowrap;
  flex-direction: row;
  width: 1000px;
  padding: 40px 0;
  margin: 0 auto;
`
const MovieTitle = styled.h1`
  margin-top: 0;
`

export function MovieDetail({
  getMovieDetail,
  addToCartAction,
  match,
  movieDetail,
  loading,
  error,
}) {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  React.useEffect(() => {
    getMovieDetail(match.params.movieId)
  }, [match.params.movieId])

  console.log(movieDetail, loading, error)

  return (
    <div>
      <Helmet>
        <title>{movieDetail ? movieDetail.title : ''}</title>
        <meta
          name="description"
          content={movieDetail ? movieDetail.overview : ''}
        />
      </Helmet>
      {!loading && movieDetail ? (
        <Wrapper>
          <div>
            <img
              src={`${IMAGE_PREFIX_XS_URL}${movieDetail.poster_path}`}
              alt={`${movieDetail.title} Poster`}
            />
          </div>
          <div style={{ paddingLeft: 40 }}>
            <MovieTitle>
              {movieDetail.title}{' '}
              <span>({new Date(movieDetail.release_date).getFullYear()})</span>
            </MovieTitle>
            <button type="button" onClick={() => addToCartAction(movieDetail)}>
              Add to cart
            </button>
            <h4>Overview</h4>
            <p>{movieDetail.overview}</p>
          </div>
        </Wrapper>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func.isRequired,
  addToCartAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  movieDetail: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    .isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}

const mapStateToProps = createStructuredSelector({
  movieDetail: makeSelectMovieDetail(),
  loading: makeSelectMovieDetailLoading(),
  error: makeSelectMovieDetailError(),
})

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => {
      dispatch(getMovieDetailRequest(id))
    },
    addToCartAction: movie => {
      dispatch(addToCart(movie))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(MovieDetail)

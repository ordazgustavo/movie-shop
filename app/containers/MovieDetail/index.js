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
import { addToCart, removeFromCart } from 'containers/App/actions'
import { makeSelectCart } from 'containers/App/selectors'
import { media } from 'utils/media-query'
import {
  makeSelectMovieDetailMovie,
  makeSelectMovieDetailLoading,
  makeSelectMovieDetailError,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import { getMovieDetailRequest } from './actions'
import { IMAGE_PREFIX_SMALL_URL } from '../../constants'

const key = 'movieDetail'

const Wrapper = styled.div`
  display: flex;
  flex-flow: nowrap;
  flex-direction: column;
  max-width: 1000px;
  padding: 0 0 45px 0;
  margin: 0 auto;

  ${media.desktop`
    flex-direction: row;
    padding: 40px 0;
  `}
`

const Img = styled.img`
  width: 100vw;

  ${media.tablet`
    width: 50%;
  `}

  ${media.desktop`
    width: 100%;
  `}
`

const MovieTitle = styled.h1`
  margin-top: 0;
`

const Poster = styled.div`
  text-align: center;
`

const Detail = styled.div`
  padding: 0 45px;
`

export function MovieDetail({
  getMovieDetail,
  addToCartAction,
  removeFromCartAction,
  match,
  movie,
  loading,
  cart,
}) {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  React.useEffect(() => {
    getMovieDetail(match.params.movieId)
  }, [match.params.movieId])

  const isInCart = React.useMemo(() => {
    if (!movie) {
      return false
    }
    if (!cart.length) {
      return false
    }
    return !!cart.find(m => m.id === movie.id)
  }, [cart, movie])

  return (
    <div>
      <Helmet>
        <title>{movie ? movie.title : ''}</title>
        <meta name="description" content={movie ? movie.overview : ''} />
      </Helmet>
      <Wrapper data-testid="movie-detail-wrapper">
        {!loading && movie ? (
          <>
            <Poster>
              <Img
                src={`${IMAGE_PREFIX_SMALL_URL}${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            </Poster>
            <Detail>
              <MovieTitle>
                {movie.title}{' '}
                <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>
              </MovieTitle>
              {isInCart ? (
                <button
                  data-testid="movie-detail-remove-cart"
                  type="button"
                  onClick={() => removeFromCartAction(movie.id)}
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  data-testid="movie-detail-add-cart"
                  type="button"
                  onClick={() => addToCartAction(movie)}
                >
                  Add to cart
                </button>
              )}
              <h4>Overview</h4>
              <p>{movie.overview}</p>
            </Detail>
          </>
        ) : (
          <div data-testid="movie-detail-loading">Loading...</div>
        )}
      </Wrapper>
    </div>
  )
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func,
  addToCartAction: PropTypes.func,
  removeFromCartAction: PropTypes.func,
  match: PropTypes.object.isRequired,
  movie: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  movie: makeSelectMovieDetailMovie(),
  loading: makeSelectMovieDetailLoading(),
  error: makeSelectMovieDetailError(),
  cart: makeSelectCart(),
})

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => {
      dispatch(getMovieDetailRequest(id))
    },
    addToCartAction: movie => {
      dispatch(addToCart(movie))
    },
    removeFromCartAction: id => {
      dispatch(removeFromCart(id))
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

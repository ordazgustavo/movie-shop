/**
 *
 * MovieRail
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { MovieItem } from './MovieItem'

const Wrapper = styled.div`
  margin: 45px 0;
`

const Title = styled.h3`
  margin: 0;
  margin-left: 45px;
`

const Subtitle = styled.p`
  margin: 0;
  margin-left: 45px;
`

const Rail = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  min-height: 281px;

  &::-webkit-scrollbar {
    display: none;
  }
`

function MovieRail({ addToCartAction, title, subtitle, movies, loading }) {
  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages[title]} />
      </Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      <Rail>
        {!loading && movies ? (
          movies.map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              image={movie.backdrop_path}
              name={movie.title}
              addToCartAction={() => addToCartAction(movie)}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Rail>
    </Wrapper>
  )
}

MovieRail.propTypes = {
  addToCartAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  movies: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default MovieRail

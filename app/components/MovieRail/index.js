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

const Title = styled.h3`
  margin-left: 45px;
`

const Wrapper = styled.ul`
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

function MovieRail({ title, movies, loading }) {
  return (
    <div>
      <Title>
        <FormattedMessage {...messages[title]} />
      </Title>
      <Wrapper>
        {!loading && movies ? (
          movies.map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              image={movie.backdrop_path}
              name={movie.original_title}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Wrapper>
    </div>
  )
}

MovieRail.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default MovieRail

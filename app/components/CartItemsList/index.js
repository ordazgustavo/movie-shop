/**
 *
 * CartItemsList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListItem } from './ListItem'

const List = styled.ul`
  margin: 0;
  padding: 0;
`

function CartItemsList({ movies }) {
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id} {...movie} />
      ))}
    </List>
  )
}

CartItemsList.propTypes = {
  movies: PropTypes.array,
}

export default CartItemsList

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

function CartItemsList({ movies, removeFromCartAction }) {
  return (
    <List>
      {movies.map(movie => (
        <ListItem
          key={movie.id}
          {...movie}
          removeFromCartAction={removeFromCartAction}
        />
      ))}
    </List>
  )
}

CartItemsList.propTypes = {
  movies: PropTypes.array,
  removeFromCartAction: PropTypes.func.isRequired,
}

export default CartItemsList

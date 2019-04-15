import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IMAGE_PREFIX_XS_URL } from '../../constants'

const Item = styled.li``

export function ListItem({ poster_path, title, overview }) {
  return (
    <Item>
      <img src={`${IMAGE_PREFIX_XS_URL}${poster_path}`} alt={title} />
      {title}
      {overview}
    </Item>
  )
}

ListItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

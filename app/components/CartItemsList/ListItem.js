import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IMAGE_PREFIX_XS_URL } from '../../constants'

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fafafa;
  padding: 15px 0;

  :last-of-type {
    border-bottom: 1px solid #fafafa;
  }
`

const CardPoster = styled.img`
  height: 200px;
`

export function ListItem({ poster_path, title, overview }) {
  return (
    <Item>
      <div style={{ flexGrow: 1 }}>
        <CardPoster src={`${IMAGE_PREFIX_XS_URL}${poster_path}`} alt={title} />
      </div>
      <div style={{ flexGrow: 2, padding: '0 45px' }}>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
      <div style={{ flexGrow: 1, alignContent: 'center' }}>
        <button type="button">X</button>
      </div>
    </Item>
  )
}

ListItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

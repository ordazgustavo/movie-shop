import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from 'utils/media-query'
import { IMAGE_PREFIX_XS_URL } from '../../constants'

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.border_color};
  padding: 15px 0;

  :last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.border_color};
  }

  ${media.tablet`
    flex-direction: row;
  `}
`

const CardPoster = styled.img`
  height: 200px;
`

const Detail = styled.div`
  flex-grow: 2;
  padding: 0;
  text-align: justify;

  ${media.tablet`
    padding: 0 45px;
  `}
`

export function ListItem({
  removeFromCartAction,
  id,
  poster_path,
  title,
  overview,
}) {
  return (
    <Item>
      <div style={{ flexGrow: 1 }}>
        <CardPoster src={`${IMAGE_PREFIX_XS_URL}${poster_path}`} alt={title} />
      </div>
      <Detail>
        <h3>{title}</h3>
        <p>{overview}</p>
      </Detail>
      <div style={{ flexGrow: 1, alignContent: 'center' }}>
        <button type="button" onClick={() => removeFromCartAction(id)}>
          X
        </button>
      </div>
    </Item>
  )
}

ListItem.propTypes = {
  removeFromCartAction: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

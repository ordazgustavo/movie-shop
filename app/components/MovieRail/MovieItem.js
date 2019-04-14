import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IMAGE_PREFIX_SMALL_URL } from '../../constants'

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
`
const Item = styled.li`
  position: relative;
  margin: 0 5px;
  list-style: none;

  &:hover ${Description} {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
  }
`
const Image = styled.img``

export function MovieItem({ id, image, name }) {
  return (
    <Link to={`/movie/${id}`}>
      <Item>
        <Image src={`${IMAGE_PREFIX_SMALL_URL}${image}`} alt={name} />
        <Description>{name}</Description>
      </Item>
    </Link>
  )
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

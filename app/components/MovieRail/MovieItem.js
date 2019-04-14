import React from 'react'
import PropTypes from 'prop-types'
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

export function MovieItem({ image, name }) {
  return (
    <Item>
      <Image src={`${IMAGE_PREFIX_SMALL_URL}${image}`} alt={name} />
      <Description>{name}</Description>
    </Item>
  )
}

MovieItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

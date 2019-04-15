import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IMAGE_PREFIX_SMALL_URL } from '../../constants'

const Image = styled.img`
  border-radius: 4px;
  height: 100%;
`

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px;
  color: #fff;

  h4 {
    margin: 0;
  }
`
const PWrapper = styled.div`
  height: 115px;
  max-height: 120px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Item = styled.li`
  position: relative;
  margin: 0 5px;
  list-style: none;
  border-radius: 4px;
  width: 100%;

  &:hover ${Description} {
    background-color: rgba(143, 22, 185, 0.6);
    opacity: 1;
  }
`
const ActionsWrapper = styled.div`
  width: 100%;
  text-align: right;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const DetailLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export function MovieItem({ addToCartAction, id, image, name, overview }) {
  return (
    <Item>
      <Image src={`${IMAGE_PREFIX_SMALL_URL}${image}`} alt={name} />
      <Description>
        <h4>{name}</h4>
        <PWrapper>
          <p>{overview}</p>
        </PWrapper>
        <ActionsWrapper>
          <DetailLink to={`/movie/${id}`}>More details</DetailLink>
          <button type="button" onClick={addToCartAction}>
            Add to cart
          </button>
        </ActionsWrapper>
      </Description>
    </Item>
  )
}

MovieItem.propTypes = {
  addToCartAction: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

/**
 *
 * CartLink
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
`

function CartLink() {
  return (
    <BaseLink to="/cart">
      <FaShoppingCart />
    </BaseLink>
  )
}

CartLink.propTypes = {}

export default CartLink

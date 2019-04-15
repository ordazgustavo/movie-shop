/**
 *
 * Header
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #651ad1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px;
  z-index: 999;
`

const HeaderLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
`

function Header({ searchBar: Search, cart: Cart }) {
  return (
    <>
      <Wrapper>
        <HeaderLink to="/">
          <FormattedMessage {...messages.header} />
        </HeaderLink>
        <div>{Search ? <Search /> : null}</div>
        <div>{Cart ? <Cart /> : null}</div>
      </Wrapper>
      <span style={{ display: 'block', height: 56 }} />
    </>
  )
}

Header.propTypes = {
  searchBar: PropTypes.elementType,
  cart: PropTypes.elementType,
}

export default Header

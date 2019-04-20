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

import { media } from 'utils/media-query'
import messages from './messages'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #651ad1;
  display: flex;
  flex-direction: column;
  padding: 10px 45px;
  z-index: 999;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

const HeaderLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
`

const HeaderSpacer = styled.span`
  display: block;
  height: 110px;

  ${media.tablet`
    height: 56px;
  `}
`

function Header({ searchBar: Search, cart: Cart }) {
  return (
    <>
      <Wrapper id="header-wrapper">
        <HeaderLink to="/">
          <FormattedMessage {...messages.header} />
        </HeaderLink>
        <div>{Search ? <Search /> : null}</div>
        <div>{Cart ? <Cart /> : null}</div>
      </Wrapper>
      <HeaderSpacer />
    </>
  )
}

Header.propTypes = {
  searchBar: PropTypes.elementType,
  cart: PropTypes.elementType,
}

export default Header

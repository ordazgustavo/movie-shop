/**
 *
 * CartPage
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { makeSelectCart } from 'containers/App/selectors'
import { removeFromCart } from 'containers/App/actions'
import CartItemsList from 'components/CartItemsList/Loadable'
import messages from './messages'

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 45px;
`

const Title = styled.h2`
  margin-top: 0;
`

export function CartPage({ cart, removeFromCartAction }) {
  return (
    <div>
      <Helmet>
        <title>CartPage</title>
        <meta name="description" content="Description of CartPage" />
      </Helmet>
      <Wrapper data-testid="cart-page-wrapper">
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        {cart.length ? (
          <CartItemsList
            movies={cart}
            removeFromCartAction={removeFromCartAction}
          />
        ) : (
          <FormattedMessage {...messages.noItems} />
        )}
      </Wrapper>
    </div>
  )
}

CartPage.propTypes = {
  removeFromCartAction: PropTypes.func,
  cart: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
})

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartAction: id => {
      dispatch(removeFromCart(id))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(CartPage)

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

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { makeSelectCart } from 'containers/App/selectors'
import CartItemsList from 'components/CartItemsList/Loadable'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const key = 'cartPage'

const Wrapper = styled.section`
  width: 1000px;
  margin: auto;
`

export function CartPage({ cart }) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  return (
    <div>
      <Helmet>
        <title>CartPage</title>
        <meta name="description" content="Description of CartPage" />
      </Helmet>
      <Wrapper>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <CartItemsList movies={cart} />
      </Wrapper>
    </div>
  )
}

CartPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cart: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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

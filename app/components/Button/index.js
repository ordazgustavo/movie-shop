/**
 *
 * Button
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

function Button() {
  return (
    <button type="button">
      <FormattedMessage {...messages.header} />
    </button>
  )
}

Button.propTypes = {}

export default Button

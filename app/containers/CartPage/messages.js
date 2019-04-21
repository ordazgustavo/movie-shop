/*
 * CartPage Messages
 *
 * This contains all the text for the CartPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.CartPage'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Cart',
  },
  noItems: {
    id: `${scope}.no-items`,
    defaultMessage: '0 items in cart',
  },
})

import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { render } from 'react-testing-library'
import { browserHistory } from 'react-router-dom'
import configureStore from '../configureStore'

export function renderWithRedux(
  ui,
  {
    initialState = {},
    store = configureStore(initialState, browserHistory),
  } = {},
) {
  return {
    ...render(
      <Provider store={store}>
        <IntlProvider locale="en">{ui}</IntlProvider>
      </Provider>,
    ),
    store,
  }
}

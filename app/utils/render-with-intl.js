import React from 'react'
import { render } from 'react-testing-library'
import { IntlProvider } from 'react-intl'

import { DEFAULT_LOCALE } from '../i18n'

export function renderWithReactIntl(ui, { locale = DEFAULT_LOCALE } = {}) {
  return {
    ...render(<IntlProvider locale={locale}>{ui}</IntlProvider>),
  }
}

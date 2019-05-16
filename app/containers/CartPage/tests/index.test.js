/**
 *
 * Tests for CartPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { cleanup } from 'react-testing-library'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { renderWithReactIntl } from 'utils/render-with-intl'
import { CartPage } from '../index'

afterEach(cleanup)

describe('<CartPage />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithReactIntl(
      <CartPage cart={[]} removeFromCartAction={() => {}} />,
    )

    expect(getByTestId('cart-page-wrapper')).toBeTruthy()
  })

  it('should render with empty cart', () => {
    const { getByText } = renderWithReactIntl(
      <CartPage cart={[]} removeFromCartAction={() => {}} />,
    )

    expect(getByText('0 items in cart')).toBeTruthy()
  })

  it('should render movies in cart', () => {
    const { getByText } = renderWithReactIntl(
      <CartPage
        cart={[
          {
            id: 1,
            poster_path: 'qe123.jpg',
            title: 'Avengers',
            overview: 'Superheroes',
          },
          {
            id: 2,
            poster_path: 'qw123.jpg',
            title: 'Whiplash',
            overview: 'Not quite my TEMPO!',
          },
        ]}
        removeFromCartAction={() => {}}
      />,
    )

    expect(getByText('Avengers')).toBeTruthy()
    expect(getByText('Superheroes')).toBeTruthy()
    expect(getByText('Whiplash')).toBeTruthy()
    expect(getByText('Not quite my TEMPO!')).toBeTruthy()
  })
})

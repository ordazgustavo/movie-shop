/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import MovieDetail from 'containers/MovieDetail/Loadable'
import CartPage from 'containers/CartPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import SearchMovies from 'containers/SearchMovies'

import Header from 'components/Header'
import CartLink from 'components/CartLink'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
  overflow-x: hidden;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Movie Shop" defaultTitle="Movie Shop">
        <meta name="description" content="A Movie eCommerce Site" />
      </Helmet>
      <Header searchBar={SearchMovies} cart={CartLink} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}

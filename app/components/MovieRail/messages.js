/*
 * MovieRail Messages
 *
 * This contains all the text for the MovieRail component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.MovieRail'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MovieRail component!',
  },
  popularMoviesHeader: {
    id: `${scope}.popular_movies.header`,
    defaultMessage: 'Popular Movies',
  },
})

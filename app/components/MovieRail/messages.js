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
  moviesByGenre: {
    id: `${scope}.movies_by_genre.header`,
    defaultMessage: 'Movies By Genre',
  },
  popularMoviesHeader: {
    id: `${scope}.popular_movies.header`,
    defaultMessage: 'Popular Movies',
  },
  topRatedMoviesHeader: {
    id: `${scope}.top_rated_movies.header`,
    defaultMessage: 'Top Rated Movies',
  },
  upcomingMoviesHeader: {
    id: `${scope}.upcoming_movies.header`,
    defaultMessage: 'Upcoming Movies',
  },
})

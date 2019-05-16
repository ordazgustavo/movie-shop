/* eslint-disable indent */
/**
 *
 * GenreFilter
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import {
  makeSelectGenres,
  makeSelectGenreLoading,
  makeSelectGenreError,
  makeSelectGenreId,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import { getGenresRequest, changeGenre } from './actions'

const key = 'genreFilter'

export function GenreFilter({
  onChangeGenre,
  getGenres,
  genres,
  loading,
  genreId,
}) {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  React.useEffect(() => {
    if (!genres) {
      getGenres()
    }
  }, [genres])

  return (
    <select
      data-testid="genre-filter-select"
      onChange={onChangeGenre}
      value={genreId || ''}
    >
      {!loading && genres
        ? genres.map(genre => (
            <option key={genre.id} value={genre.id.toString()}>
              {genre.name}
            </option>
          ))
        : null}
    </select>
  )
}

GenreFilter.propTypes = {
  onChangeGenre: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  genres: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired,
  genreId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
}

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
  loading: makeSelectGenreLoading(),
  error: makeSelectGenreError(),
  genreId: makeSelectGenreId(),
})

function mapDispatchToProps(dispatch) {
  return {
    onChangeGenre: event => {
      dispatch(changeGenre(event.target.value))
    },
    getGenres: () => {
      dispatch(getGenresRequest())
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
)(GenreFilter)

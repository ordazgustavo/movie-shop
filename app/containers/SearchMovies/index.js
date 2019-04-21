/* eslint-disable indent */
/**
 *
 * SearchMovies
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import styled from 'styled-components'
import Downshift from 'downshift'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { media } from 'utils/media-query'
import { makeSelectSearchQuery, makeSelectSearchItems } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { setSearchQuery } from './actions'

const key = 'searchMovies'
const MAX_ELEMENTS = 15

const Wrapper = styled.div`
  width: 100%;

  ${media.tablet`
    width: 250px;
  `}
`

const Menu = styled.ul`
  position: absolute;
  z-index: 2;
  background-color: ${({ theme }) => theme.bg_color};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 0;
  margin: 0;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const Item = styled.li`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.border_color};
  border-bottom: 1px solid ${({ theme }) => theme.border_color};
  padding: 5px 10px;

  background-color: ${({ isActive, isSelected, theme }) =>
    isActive || isSelected ? theme.border_color : 'transparent'};

  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;

  &:hover {
    border: 1px solid ${({ theme }) => theme.border_hover_color};
  }
`

function itemToString(item) {
  return item ? item.title : ''
}

function getItems(value, items) {
  return items
    .filter(i => i.title.toLowerCase().includes(value.toLowerCase()))
    .slice(0, MAX_ELEMENTS)
}

export function SearchMovies({ onInputValueChange, items, history }) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  return (
    <Downshift
      onChange={selection => history.push(`/movie/${selection.id}`)}
      onInputValueChange={value => onInputValueChange(value)}
      itemToString={itemToString}
    >
      {({
        getRootProps,
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        selectedItem,
        inputValue,
        highlightedIndex,
      }) => (
        <Wrapper {...getRootProps()}>
          <div style={{ position: 'relative' }}>
            <Input
              data-testid="search-movies-input"
              {...getInputProps({
                isOpen,
                placeholder: 'Enter a movie name',
              })}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Menu
              data-testid="search-movies-menu"
              {...getMenuProps({ isOpen })}
            >
              {isOpen && items
                ? getItems(inputValue, items).map((item, index) => (
                    <Item
                      key={item.id}
                      {...getItemProps({
                        item,
                        index,
                        isActive: highlightedIndex === index,
                        isSelected: selectedItem === item,
                      })}
                    >
                      {itemToString(item)}
                    </Item>
                  ))
                : null}
            </Menu>
          </div>
        </Wrapper>
      )}
    </Downshift>
  )
}

SearchMovies.propTypes = {
  onInputValueChange: PropTypes.func.isRequired,
  query: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  items: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  query: makeSelectSearchQuery(),
  items: makeSelectSearchItems(),
})

function mapDispatchToProps(dispatch) {
  return {
    onInputValueChange: value => {
      dispatch(setSearchQuery(value))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  withRouter,
  memo,
)(SearchMovies)

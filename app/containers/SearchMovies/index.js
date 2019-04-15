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
import makeSelectSearchMovies, {
  makeSelectSearchQuery,
  makeSelectSearchItems,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import { setSearchQuery } from './actions'

const key = 'searchMovies'

const Menu = styled.ul`
  position: absolute;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const Item = styled.li`
  list-style: none;
  border-top: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;
  padding: 5px 10px;

  background-color: ${({ isActive, isSelected }) =>
    isActive || isSelected ? '#fafafa' : 'transparent'};

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
  border: 1px solid #fafafa;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;

  &:hover {
    border: 1px solid #c9c9c9;
  }
`

function itemToString(item) {
  return item ? item.title : ''
}

function getItems(value, items) {
  return items.filter(i => i.title.toLowerCase().includes(value.toLowerCase()))
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
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        selectedItem,
        inputValue,
        highlightedIndex,
      }) => (
        <div style={{ width: 250, margin: 'auto' }}>
          <div style={{ position: 'relative' }}>
            <Input
              {...getInputProps({
                isOpen,
                placeholder: 'Enter a movie name',
              })}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Menu {...getMenuProps({ isOpen })}>
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
        </div>
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
  searchMovies: makeSelectSearchMovies(),
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

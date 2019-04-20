/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_TO_CART = 'shop/App/ADD_TO_CART'
export const REMOVE_FROM_CART = 'shop/App/REMOVE_FROM_CART'

export const GET_POPULAR_MOVIES_REQUEST = 'shop/App/GET_POPULAR_MOVIES_REQUEST'
export const GET_POPULAR_MOVIES_SUCCESS = 'shop/App/GET_POPULAR_MOVIES_SUCCESS'
export const GET_POPULAR_MOVIES_FAILURE = 'shop/App/GET_POPULAR_MOVIES_FAILURE'

export const GET_TOP_RATED_MOVIES_REQUEST =
  'shop/App/GET_TOP_RATED_MOVIES_REQUEST'
export const GET_TOP_RATED_MOVIES_SUCCESS =
  'shop/App/GET_TOP_RATED_MOVIES_SUCCESS'
export const GET_TOP_RATED_MOVIES_FAILURE =
  'shop/App/GET_TOP_RATED_MOVIES_FAILURE'

export const GET_UPCOMING_MOVIES_REQUEST =
  'shop/App/GET_UPCOMING_MOVIES_REQUEST'
export const GET_UPCOMING_MOVIES_SUCCESS =
  'shop/App/GET_UPCOMING_MOVIES_SUCCESS'
export const GET_UPCOMING_MOVIES_FAILURE =
  'shop/App/GET_UPCOMING_MOVIES_FAILURE'

export const GET_MOVIES_BY_GENRE_REQUEST =
  'shop/App/GET_MOVIES_BY_GENRE_REQUEST'
export const GET_MOVIES_BY_GENRE_SUCCESS =
  'shop/App/GET_MOVIES_BY_GENRE_SUCCESS'
export const GET_MOVIES_BY_GENRE_FAILURE =
  'shop/App/GET_MOVIES_BY_GENRE_FAILURE'

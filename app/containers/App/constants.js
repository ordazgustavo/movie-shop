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

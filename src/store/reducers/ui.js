import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { setBoardsError, setTicketsError } from '../actions/ui';
import { getPropertyReducer } from '../utils';

const defaultState = {};

const errors = handleActions({
  [setBoardsError]: getPropertyReducer('boards'),
  [setTicketsError]: getPropertyReducer('tickets')
}, defaultState);

export default combineReducers({
  errors
});

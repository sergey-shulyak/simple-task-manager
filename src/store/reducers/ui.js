import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { setBoardsError, setTicketsError } from '../actions/ui';

const defaultState = {};

const errors = handleActions({
  [setBoardsError]: (state, { payload }) => ({ ...state, boards: payload.message }),
  [setTicketsError]: (state, { payload }) => ({ ...state, tickets: payload.message })
}, defaultState);

export default combineReducers({
  errors
});

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import omit from 'lodash/omit';

import { setBoardsError, setTicketsError } from '../actions/ui';

const defaultState = {};

const errors = handleActions({
  [setBoardsError]: (state, { payload }) => ({ boards: payload.message, ...omit(state, 'boards') }),
  [setTicketsError]: (state, { payload }) => ({ tickets: payload.message, ...omit(state, 'tickets') })
}, defaultState);

export default combineReducers({
  errors
});

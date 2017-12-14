import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { setBoardsError, setTicketsError } from '../actions/ui';

const defaultState = {};

const setErrorMessage = (message, field, otherErrors) => ({
  ...otherErrors, [field]: message
});

const errors = handleActions({
  [setBoardsError]: (state, { payload }) => setErrorMessage(payload.message, 'boards', state),
  [setTicketsError]: (state, { payload }) => setErrorMessage(payload.message, 'tickets', state)
}, defaultState);

export default combineReducers({
  errors
});

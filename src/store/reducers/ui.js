import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { setBoardsError, setTicketsError } from '../actions/ui';

const defaultState = {};

const errors = handleActions({
  [setBoardsError]: (state, { payload }) => ({ boards: payload.message, ...state }),
  [setTicketsError]: (state, { payload }) => ({ tickets: payload.message, ...state })
}, defaultState);

export default combineReducers({
  errors
});

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { setBoardsError, setTicketsError } from '../actions/ui';
import { setStateProperty } from '../../utils/stateUtils';

const defaultState = {};
const messageKey = 'message';

const errors = handleActions({
  [setBoardsError]: setStateProperty('boards', messageKey),
  [setTicketsError]: setStateProperty('tickets', messageKey)
}, defaultState);

export default combineReducers({
  errors
});

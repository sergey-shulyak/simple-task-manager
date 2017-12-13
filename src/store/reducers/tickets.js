import { handleActions, combineActions } from 'redux-actions';
import { saveTicketsToStore, saveTicketsError } from '../actions/tickets';

const defaultState = {};

const ticketsReducer = handleActions({
  [combineActions(saveTicketsToStore, saveTicketsError)](state, { payload, error }) {
    return error
      ? { error: payload.message }
      : payload || defaultState;
  }
}, defaultState);

export default ticketsReducer;

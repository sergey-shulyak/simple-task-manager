import { handleActions, combineActions } from 'redux-actions';
import { saveTicketsToStore, saveTicketsError } from '../actions/tickets';

const defaultState = {};

const ticketsReducer = handleActions({
  [combineActions(saveTicketsToStore, saveTicketsError)](state, { payload, error }) {
    return error ? defaultState : payload;
  }
}, defaultState);

export default ticketsReducer;

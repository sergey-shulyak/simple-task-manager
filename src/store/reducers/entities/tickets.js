import { handleAction } from 'redux-actions';
import { saveTicketsToStore } from '../../actions/tickets';

const defaultState = {};

const ticketsReducer = handleAction(
  saveTicketsToStore,
  (state, { payload }) => payload || defaultState,
  defaultState
);

export default ticketsReducer;

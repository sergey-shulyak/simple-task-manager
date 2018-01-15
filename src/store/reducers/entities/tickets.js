import { handleAction } from 'redux-actions';
import { saveTicketsToStore } from '../../actions/tickets';

const defaultState = {};

const ticketsReducer = handleAction(
  saveTicketsToStore,
  (state, { payload }) => payload || state,
  defaultState
);

export default ticketsReducer;

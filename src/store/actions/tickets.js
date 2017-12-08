import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/tickets';

export const { fetchTickets, saveTicketsToStore, saveTicketsError } = createActions(
  {
    [actions.SAVE_TICKETS_TO_STORE]: ({ entities }) => entities.tickets
  },
  actions.FETCH_TICKETS,
  actions.SAVE_TICKETS_ERROR
);

import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/tickets';

export const { fetchTickets, saveTicketsToStore, createTicket, updateTicket, deleteTicket } =
  createActions({
    [actions.FETCH_TICKETS]: id => ({ id }),
    [actions.SAVE_TICKETS_TO_STORE]: ({ entities }) => entities.tickets,
    [actions.CREATE_TICKET]: [
      (boardId, data) => data,
      boardId => ({ boardId })
    ],
    [actions.UPDATE_TICKET]: [
      (boardId, data) => data,
      boardId => ({ boardId })
    ],
    [actions.DELETE_TICKET]: [
      (boardId, ticketId) => ({ ticketId }),
      boardId => ({ boardId })
    ]
  });

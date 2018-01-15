import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/tickets';

const ticketData = (boardId, data) => data;
const withBoardIdMetadata = payloadCreator => ([
  payloadCreator,
  boardId => ({ boardId })
]);

export const {
  fetchTickets,
  saveTicketsToStore,
  createTicket,
  updateTicket,
  deleteTicket
} = createActions({
  [actions.FETCH_TICKETS]: id => ({ id }),
  [actions.SAVE_TICKETS_TO_STORE]: ({ entities }) => entities.tickets,
  [actions.CREATE_TICKET]: withBoardIdMetadata(ticketData),
  [actions.UPDATE_TICKET]: withBoardIdMetadata(ticketData),
  [actions.DELETE_TICKET]: withBoardIdMetadata(
    (boardId, ticketId) => ({ ticketId })
  )
});

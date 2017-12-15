import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/ui';

export const { setBoardsError, setTicketsError } = createActions(
  actions.SET_BOARDS_ERROR,
  actions.SET_TICKETS_ERROR
);

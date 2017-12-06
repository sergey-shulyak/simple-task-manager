import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boards';

export const { fetchBoards, saveBoardsToStore, saveBoardsError } = createActions(
  actions.FETCH_BOARDS,
  actions.SAVE_BOARDS_TO_STORE,
  actions.SAVE_BOARDS_ERROR
);

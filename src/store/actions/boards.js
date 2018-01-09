import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boards';

export const {
  saveBoardsToStore,
  fetchBoards,
  createBoard,
  deleteBoard
} = createActions(
  {
    [actions.SAVE_BOARDS_TO_STORE]: ({ entities }) => entities.boards
  },
  actions.FETCH_BOARDS,
  actions.CREATE_BOARD,
  actions.DELETE_BOARD
);

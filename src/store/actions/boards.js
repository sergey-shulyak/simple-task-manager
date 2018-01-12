import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boards';

export const {
  saveBoardsToStore,
  fetchBoards,
  createBoard,
  updateBoard,
  deleteBoard
} = createActions(
  {
    [actions.FETCH_BOARDS]: id => ({ id }),
    [actions.SAVE_BOARDS_TO_STORE]: ({ entities }) => entities.boards
  },
  actions.CREATE_BOARD,
  actions.UPDATE_BOARD,
  actions.DELETE_BOARD
);

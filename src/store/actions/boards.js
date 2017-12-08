import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boards';

export const { fetchBoards, saveBoardsToStore, saveBoardsError } = createActions(
  {
    [actions.SAVE_BOARDS_TO_STORE]: ({ entities }) => entities.boards
  },
  actions.FETCH_BOARDS,
  actions.SAVE_BOARDS_ERROR
);

export const { fetchBoard, saveBoardToStore } = createActions(
  actions.FETCH_BOARD,
  actions.SAVE_BOARD_TO_STORE
);

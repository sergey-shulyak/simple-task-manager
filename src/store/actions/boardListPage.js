import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boardListPage';

export const { fetchBoards, fetchBoardsSuccess, fetchBoardsError } = createActions(
  actions.FETCH_BOARDS,
  actions.FETCH_BOARDS_SUCCESS,
  actions.FETCH_BOARDS_ERROR
);

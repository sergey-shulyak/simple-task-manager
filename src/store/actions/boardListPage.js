import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boardListPage';

export const { fetchBoardList, fetchBoardListSuccess, fetchBoardListError } = createActions(
  actions.FETCH_BOARD_LIST,
  actions.FETCH_BOARD_LIST_SUCCESS,
  actions.FETCH_BOARD_LIST_ERROR
);

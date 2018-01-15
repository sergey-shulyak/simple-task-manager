import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/boards';

const mapColumnStringToArray = columns => (columns
  ? columns.split(',').map(title => ({ title: title.trim() }))
  : []);

const boardWithTransformedColumns = ({ columns, ...board }) => ({
  ...board,
  columns: mapColumnStringToArray(columns)
});

export const {
  saveBoardsToStore,
  fetchBoards,
  createBoard,
  updateBoard,
  deleteBoard
} = createActions(
  {
    [actions.FETCH_BOARDS]: id => ({ id }),
    [actions.SAVE_BOARDS_TO_STORE]: ({ entities }) => entities.boards,
    [actions.CREATE_BOARD]: boardWithTransformedColumns,
    [actions.UPDATE_BOARD]: boardWithTransformedColumns
  },
  actions.DELETE_BOARD
);

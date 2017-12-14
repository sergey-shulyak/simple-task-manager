import { handleAction } from 'redux-actions';
import { saveBoardsToStore } from '../actions/boards';

const defaultState = {};

const boardsReducer = handleAction(
  saveBoardsToStore,
  (state, { payload }) => payload || state,
  defaultState
);

export default boardsReducer;
